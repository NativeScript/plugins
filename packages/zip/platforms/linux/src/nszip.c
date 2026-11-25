#define _FILE_OFFSET_BITS 64
#ifndef _GNU_SOURCE
#define _GNU_SOURCE
#endif

#include "nszip.h"
#include "nszip_internal.h"

#include "minizip-ng/mz.h"
#include "minizip-ng/mz_os.h"
#include "minizip-ng/mz_strm.h"
#include "minizip-ng/mz_strm_os.h"
#include "minizip-ng/mz_zip.h"

#include <dirent.h>
#include <errno.h>
#include <fcntl.h>
#include <glib.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/statvfs.h>
#include <sys/types.h>
#include <time.h>
#include <unistd.h>
#include <zlib.h>

#define CHUNK (256 * 1024)
#define EXTRA_UNICODE_PATH 0x7075
#define MADE_BY_UNIX ((MZ_HOST_SYSTEM_UNIX << 8) | 63)

uint64_t nszip_zip64_threshold = 0xffffffffull;

static uint16_t get16(const uint8_t *p) { return (uint16_t)(p[0] | (p[1] << 8)); }
static uint32_t get32(const uint8_t *p) { return (uint32_t)p[0] | ((uint32_t)p[1] << 8) | ((uint32_t)p[2] << 16) | ((uint32_t)p[3] << 24); }

typedef struct {
	nszip_progress_fn progress;
	void *user;
	uint64_t total;
	uint64_t done;
	int last;
	gboolean reporting;
	char *error;
	uint64_t length;
} Ctx;

static gboolean fail(Ctx *c, const char *fmt, ...) G_GNUC_PRINTF(2, 3);

static gboolean fail(Ctx *c, const char *fmt, ...) {
	if (!c->error) {
		va_list ap;
		va_start(ap, fmt);
		c->error = g_strdup_vprintf(fmt, ap);
		va_end(ap);
	}
	return FALSE;
}

static uint64_t sat_add(uint64_t a, uint64_t b) { return a > UINT64_MAX - b ? UINT64_MAX : a + b; }

static mode_t current_umask(void) {
	static gsize once = 0;
	static mode_t mask = 022;
	if (g_once_init_enter(&once)) {
		gchar *status = NULL;
		if (g_file_get_contents("/proc/self/status", &status, NULL, NULL)) {
			const char *line = strstr(status, "\nUmask:");
			if (line) {
				mask = (mode_t)(strtoul(line + 8, NULL, 8) & 0777);
			}
			g_free(status);
		}
		g_once_init_leave(&once, 1);
	}
	return mask;
}

static void advance(Ctx *c, uint64_t units) {
	if (!c->reporting) {
		return;
	}
	c->done = sat_add(c->done, units);
	int percent = c->total ? (int)MIN(100.0, (double)c->done * 100.0 / (double)c->total) : 100;
	if (percent > c->last) {
		c->last = percent;
		if (c->progress) {
			c->progress(percent, c->user);
		}
	}
}

static FILE *open_regular(const char *path, struct stat *out_st) {
	int fd = open(path, O_RDONLY | O_CLOEXEC | O_NOCTTY | O_NONBLOCK);
	if (fd < 0) {
		return NULL;
	}
	struct stat st;
	if (fstat(fd, &st) != 0 || !S_ISREG(st.st_mode)) {
		close(fd);
		errno = EINVAL;
		return NULL;
	}
	fcntl(fd, F_SETFL, fcntl(fd, F_GETFL) & ~O_NONBLOCK);
	if (out_st) {
		*out_st = st;
	}
	FILE *f = fdopen(fd, "rb");
	if (!f) {
		close(fd);
	}
	return f;
}

static const char *CP437_HIGH = "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";

static char *decode_name(const uint8_t *bytes, size_t len) {
	if (g_utf8_validate((const char *)bytes, (gssize)len, NULL)) {
		return g_strndup((const char *)bytes, len);
	}
	GString *s = g_string_sized_new(len * 2);
	for (size_t i = 0; i < len; i++) {
		if (bytes[i] < 0x80) {
			g_string_append_c(s, (char)bytes[i]);
		} else {
			const char *p = g_utf8_offset_to_pointer(CP437_HIGH, bytes[i] - 0x80);
			g_string_append_len(s, p, g_utf8_next_char(p) - p);
		}
	}
	return g_string_free(s, FALSE);
}

typedef struct {
	char *name;
	char *path;
	gboolean dir;
	uint64_t size;
	time_t mtime;
	uint32_t mode;
	dev_t dev;
	ino_t ino;
} Source;

static void source_free(gpointer p) {
	Source *s = p;
	g_free(s->name);
	g_free(s->path);
	g_free(s);
}

static gint compare_names(gconstpointer a, gconstpointer b) { return strcmp(*(char *const *)a, *(char *const *)b); }

static gboolean inside(const char *root, const char *path) {
	size_t n = strlen(root);
	return strncmp(path, root, n) == 0 && (path[n] == '/' || (n > 0 && root[n - 1] == '/'));
}

static gboolean collect(Ctx *c, GPtrArray *out, const char *root, const char *dir, const char *prefix) {
	DIR *d = opendir(dir);
	if (!d) {
		return fail(c, "Cannot read directory %s: %s", dir, g_strerror(errno));
	}
	GPtrArray *names = g_ptr_array_new_with_free_func(g_free);
	struct dirent *e;
	while ((e = readdir(d))) {
		if (strcmp(e->d_name, ".") != 0 && strcmp(e->d_name, "..") != 0) {
			g_ptr_array_add(names, g_strdup(e->d_name));
		}
	}
	closedir(d);
	g_ptr_array_sort(names, compare_names);

	gboolean ok = TRUE;
	for (guint i = 0; ok && i < names->len; i++) {
		const char *name = g_ptr_array_index(names, i);
		char *path = g_build_filename(dir, name, NULL);
		struct stat st;
		if (lstat(path, &st) != 0) {
			ok = fail(c, "Cannot stat %s: %s", path, g_strerror(errno));
			g_free(path);
			break;
		}
		if (S_ISLNK(st.st_mode)) {
			char *resolved = realpath(path, NULL);
			gboolean usable = resolved && inside(root, resolved) && stat(resolved, &st) == 0 && S_ISREG(st.st_mode);
			free(resolved);
			if (!usable) {
				g_free(path);
				continue;
			}
		}
		if (S_ISDIR(st.st_mode)) {
			Source *s = g_new0(Source, 1);
			s->name = g_strconcat(prefix, name, "/", NULL);
			s->dir = TRUE;
			s->mtime = st.st_mtime;
			s->mode = st.st_mode;
			g_ptr_array_add(out, s);
			ok = collect(c, out, root, path, s->name);
		} else if (S_ISREG(st.st_mode)) {
			Source *s = g_new0(Source, 1);
			s->name = g_strconcat(prefix, name, NULL);
			s->path = g_strdup(path);
			s->size = (uint64_t)st.st_size;
			s->mtime = st.st_mtime;
			s->mode = st.st_mode;
			s->dev = st.st_dev;
			s->ino = st.st_ino;
			g_ptr_array_add(out, s);
		}
		g_free(path);
	}
	g_ptr_array_unref(names);
	return ok;
}

static char **safe_segments(const char *name) {
	char *normalized = g_strdup(name);
	g_strdelimit(normalized, "\\", '/');
	if (normalized[0] == '/' || (g_ascii_isalpha(normalized[0]) && normalized[1] == ':')) {
		g_free(normalized);
		return NULL;
	}
	char **parts = g_strsplit(normalized, "/", -1);
	g_free(normalized);
	GPtrArray *kept = g_ptr_array_new();
	for (char **p = parts; *p; p++) {
		if (!**p || strcmp(*p, ".") == 0) {
			continue;
		}
		if (strcmp(*p, "..") == 0) {
			g_ptr_array_unref(kept);
			g_strfreev(parts);
			return NULL;
		}
		g_ptr_array_add(kept, g_strdup(*p));
	}
	g_strfreev(parts);
	g_ptr_array_add(kept, NULL);
	return (char **)g_ptr_array_free(kept, FALSE);
}

static int ensure_directories(Ctx *c, const char *destination, char **segments, guint count) {
	char *path = g_strdup(destination);
	int result = 1;
	for (guint i = 0; i < count; i++) {
		char *next = g_build_filename(path, segments[i], NULL);
		g_free(path);
		path = next;
		struct stat st;
		if (lstat(path, &st) != 0) {
			if (errno != ENOENT || (mkdir(path, 0755) != 0 && errno != EEXIST) || lstat(path, &st) != 0) {
				fail(c, "Cannot create %s: %s", path, g_strerror(errno));
				result = 0;
				break;
			}
		}
		if (S_ISLNK(st.st_mode) || !S_ISDIR(st.st_mode)) {
			result = -1;
			break;
		}
	}
	g_free(path);
	return result;
}

static const char *mz_message(int32_t err) {
	switch (err) {
	case MZ_PASSWORD_ERROR:
		return "Wrong password";
	case MZ_CRC_ERROR:
		return "Integrity check failed";
	case MZ_FORMAT_ERROR:
		return "Not a valid zip archive";
	case MZ_SUPPORT_ERROR:
	case MZ_PARAM_ERROR:
		return "Unsupported zip entry";
	case MZ_MEM_ERROR:
		return "Out of memory";
	case MZ_OPEN_ERROR:
		return "Cannot open file";
	case MZ_WRITE_ERROR:
		return "Write failed";
	default:
		return "Corrupt or truncated data";
	}
}

static gboolean add_entry(Ctx *c, void *zip, const Source *s, const char *password, uint8_t *buf) {
	gboolean encrypt = !s->dir && password && *password;
	mz_zip_file info;
	memset(&info, 0, sizeof info);
	info.version_madeby = MADE_BY_UNIX;
	info.flag = MZ_ZIP_FLAG_UTF8 | (encrypt ? MZ_ZIP_FLAG_ENCRYPTED : 0);
	info.compression_method = s->dir || !s->size ? MZ_COMPRESS_METHOD_STORE : MZ_COMPRESS_METHOD_DEFLATE;
	info.modified_date = s->mtime;
	info.filename = s->name;
	info.uncompressed_size = (int64_t)s->size;
	info.external_fa = (s->mode & (S_IFMT | 0777)) << 16 | (s->dir ? 0x10 : 0);
	info.zip64 = s->size >= nszip_zip64_threshold - MIN(nszip_zip64_threshold, 65536) ? MZ_ZIP64_FORCE : MZ_ZIP64_AUTO;
	if (encrypt) {
		info.aes_version = MZ_AES_VERSION;
		info.aes_strength = MZ_AES_STRENGTH_256;
	}

	FILE *src = NULL;
	if (!s->dir) {
		struct stat opened;
		src = open_regular(s->path, &opened);
		if (src && (opened.st_dev != s->dev || opened.st_ino != s->ino)) {
			fclose(src);
			src = NULL;
			errno = ESTALE;
		}
		if (!src) {
			return fail(c, "Cannot open %s: %s", s->path, g_strerror(errno));
		}
	}

	int32_t err = mz_zip_entry_write_open(zip, &info, MZ_COMPRESS_LEVEL_DEFAULT, 0, encrypt ? password : NULL);
	if (err != MZ_OK) {
		if (src) {
			fclose(src);
		}
		return fail(c, "Cannot add %s: %s", s->name, mz_message(err));
	}
	gboolean ok = TRUE;
	while (src) {
		size_t n = fread(buf, 1, CHUNK, src);
		if (n == 0) {
			if (ferror(src)) {
				ok = fail(c, "Cannot read %s: %s", s->path, g_strerror(errno));
			}
			break;
		}
		if (mz_zip_entry_write(zip, buf, (int32_t)n) != (int32_t)n) {
			ok = fail(c, "Cannot add %s: %s", s->name, mz_message(MZ_WRITE_ERROR));
			break;
		}
		advance(c, n);
	}
	err = mz_zip_entry_close(zip);
	if (ok && err != MZ_OK) {
		ok = fail(c, "Cannot add %s: %s", s->name, mz_message(err));
	}
	if (src) {
		fclose(src);
	}
	return ok;
}

char *nszip_zip_sync(const char *directory, const char *archive, int keep_parent, const char *password, nszip_progress_fn progress, void *user) {
	Ctx c = {progress, user, 0, 0, 0, TRUE, NULL, 0};
	GPtrArray *sources = g_ptr_array_new_with_free_func(source_free);
	uint8_t *buf = g_malloc(CHUNK);
	void *stream = NULL, *zip = NULL;
	gboolean ok = TRUE, created = FALSE, opened = FALSE;

	struct stat root;
	if (!directory || !archive) {
		ok = fail(&c, "Invalid arguments");
		goto done;
	}
	if (stat(directory, &root) != 0 || !S_ISDIR(root.st_mode)) {
		ok = fail(&c, "Directory does not exist, invalid directory path: %s", directory);
		goto done;
	}
	char *prefix = NULL;
	char *canonical = g_canonicalize_filename(directory, NULL);
	char *base = g_path_get_basename(canonical);
	g_free(canonical);
	if (keep_parent && strcmp(base, "/") != 0 && strcmp(base, ".") != 0) {
		prefix = g_strconcat(base, "/", NULL);
		Source *s = g_new0(Source, 1);
		s->name = g_strdup(prefix);
		s->dir = TRUE;
		s->mtime = root.st_mtime;
		s->mode = root.st_mode;
		g_ptr_array_add(sources, s);
	}
	g_free(base);
	char *root_path = realpath(directory, NULL);
	if (!root_path) {
		g_free(prefix);
		ok = fail(&c, "Directory does not exist, invalid directory path: %s", directory);
		goto done;
	}
	ok = collect(&c, sources, root_path, directory, prefix ? prefix : "");
	free(root_path);
	g_free(prefix);
	if (!ok) {
		goto done;
	}
	for (guint i = 0; i < sources->len; i++) {
		const Source *s = g_ptr_array_index(sources, i);
		c.total = sat_add(c.total, sat_add(s->size, 1));
	}

	char *parent = g_path_get_dirname(archive);
	g_mkdir_with_parents(parent, 0755);
	g_free(parent);
	stream = mz_stream_os_create();
	if (!stream || mz_stream_os_open(stream, archive, MZ_OPEN_MODE_CREATE | MZ_OPEN_MODE_WRITE) != MZ_OK) {
		ok = fail(&c, "Cannot create %s: %s", archive, g_strerror(errno));
		goto done;
	}
	created = TRUE;
	struct stat archive_st;
	if (stat(archive, &archive_st) != 0) {
		memset(&archive_st, 0, sizeof archive_st);
	}
	zip = mz_zip_create();
	int32_t err = zip ? mz_zip_open(zip, stream, MZ_OPEN_MODE_WRITE) : MZ_MEM_ERROR;
	if (err != MZ_OK) {
		ok = fail(&c, "Cannot create %s: %s", archive, mz_message(err));
		goto done;
	}
	opened = TRUE;
	mz_zip_set_version_madeby(zip, MADE_BY_UNIX);

	for (guint i = 0; ok && i < sources->len; i++) {
		const Source *s = g_ptr_array_index(sources, i);
		if (!s->dir && s->dev == archive_st.st_dev && s->ino == archive_st.st_ino) {
			advance(&c, sat_add(s->size, 1));
			continue;
		}
		if (strlen(s->name) > 0xffff) {
			ok = fail(&c, "Path too long for a zip entry: %s", s->name);
			break;
		}
		ok = add_entry(&c, zip, s, password, buf);
		advance(&c, 1);
	}
	opened = FALSE;
	err = mz_zip_close(zip);
	if (ok && err != MZ_OK) {
		ok = fail(&c, "Cannot write %s: %s", archive, mz_message(err));
	}

done:
	if (zip) {
		if (opened) {
			mz_zip_close(zip);
		}
		mz_zip_delete(&zip);
	}
	if (stream) {
		if (mz_stream_os_close(stream) != MZ_OK && ok) {
			ok = fail(&c, "Cannot write %s: %s", archive, g_strerror(errno));
		}
		mz_stream_os_delete(&stream);
	}
	if (!ok && created) {
		unlink(archive);
	}
	g_ptr_array_unref(sources);
	g_free(buf);
	return c.error;
}

static char *entry_name(const mz_zip_file *info) {
	const uint8_t *raw = (const uint8_t *)info->filename;
	if (!raw) {
		return g_strdup("");
	}
	if (!(info->flag & MZ_ZIP_FLAG_UTF8) && info->extrafield) {
		const uint8_t *x = info->extrafield, *end = x + info->extrafield_size;
		while (x + 4 <= end) {
			uint16_t id = get16(x), len = get16(x + 2);
			const uint8_t *d = x + 4;
			if (d + len > end) {
				break;
			}
			if (id == EXTRA_UNICODE_PATH && len > 5 && d[0] == 1 && get32(d + 1) == (uint32_t)crc32(0L, raw, info->filename_size) && g_utf8_validate((const char *)d + 5, len - 5, NULL)) {
				return g_strndup((const char *)d + 5, len - 5);
			}
			x = d + len;
		}
	}
	return decode_name(raw, info->filename_size);
}

static uint32_t posix_mode(const mz_zip_file *info) {
	uint32_t attrib = 0;
	if (mz_zip_attrib_convert(MZ_HOST_SYSTEM(info->version_madeby), info->external_fa, MZ_HOST_SYSTEM_UNIX, &attrib) != MZ_OK) {
		return 0;
	}
	return attrib & 0777;
}

static gboolean extract(Ctx *c, void *zip, const mz_zip_file *info, const char *name, const char *target, const char *password, uint8_t *buf) {
	gboolean encrypted = (info->flag & MZ_ZIP_FLAG_ENCRYPTED) != 0;
	if (encrypted && (!password || !*password)) {
		return fail(c, "Entry %s is encrypted, a password is required", name);
	}
	uint64_t usize = (uint64_t)info->uncompressed_size;
	uint32_t expected_crc = info->crc;
	gboolean verify_crc = !(encrypted && info->aes_version == 2);
	uint32_t mode = posix_mode(info);
	time_t mtime = info->modified_date;

	int32_t err = mz_zip_entry_read_open(zip, 0, encrypted ? password : NULL);
	if (err != MZ_OK) {
		return fail(c, err == MZ_PASSWORD_ERROR ? "%s" : "%s: %s", err == MZ_PASSWORD_ERROR ? mz_message(err) : name, mz_message(err));
	}

	char *parent = g_path_get_dirname(target);
	char *temp = g_build_filename(parent, ".nszip-XXXXXX", NULL);
	g_free(parent);
	int fd = g_mkstemp_full(temp, O_RDWR | O_CLOEXEC, 0600);
	FILE *out = fd >= 0 ? fdopen(fd, "wb") : NULL;
	gboolean ok = TRUE;
	if (!out) {
		int saved = errno;
		if (fd >= 0) {
			close(fd);
			unlink(temp);
		}
		ok = fail(c, "Cannot create %s: %s", target, g_strerror(saved));
	}

	uLong crc = crc32(0L, Z_NULL, 0);
	uint64_t written = 0;
	while (ok) {
		int32_t n = mz_zip_entry_read(zip, buf, CHUNK);
		if (n < 0) {
			ok = fail(c, "%s: %s", name, mz_message(n));
			break;
		}
		if (n == 0) {
			break;
		}
		if ((uint64_t)n > usize - written) {
			ok = fail(c, "Size mismatch for %s", name);
			break;
		}
		crc = crc32(crc, buf, (uInt)n);
		written += (uint64_t)n;
		if (fwrite(buf, 1, (size_t)n, out) != (size_t)n) {
			ok = fail(c, "Write failed: %s", g_strerror(errno));
			break;
		}
		advance(c, (uint64_t)n);
	}
	err = mz_zip_entry_close(zip);
	if (ok && err != MZ_OK) {
		ok = fail(c, "%s: %s", name, mz_message(err));
	}
	if (ok && written != usize) {
		ok = fail(c, "Size mismatch for %s", name);
	}
	if (ok && verify_crc && (uint32_t)crc != expected_crc) {
		ok = fail(c, "%s: %s", name, mz_message(MZ_CRC_ERROR));
	}
	if (!out) {
		g_free(temp);
		return FALSE;
	}
	if (ok && fflush(out) != 0) {
		ok = fail(c, "Write failed: %s", g_strerror(errno));
	}
	if (ok) {
		fchmod(fd, (mode ? ((mode & 0755) | S_IRUSR | S_IWUSR) : 0644) & ~current_umask());
		struct timespec times[2] = {{mtime, 0}, {mtime, 0}};
		futimens(fd, times);
	}
	if (fclose(out) != 0 && ok) {
		ok = fail(c, "Write failed: %s", g_strerror(errno));
	}
	if (ok && rename(temp, target) != 0) {
		ok = fail(c, "Cannot create %s: %s", target, g_strerror(errno));
	}
	if (!ok) {
		unlink(temp);
	}
	g_free(temp);
	return ok;
}

static gboolean handle_entry(Ctx *c, void *zip, const mz_zip_file *info, const char *destination, int overwrite, const char *password, uint8_t *buf) {
	uint64_t usize = (uint64_t)info->uncompressed_size;
	char *name = entry_name(info);
	char **segments = safe_segments(name);
	guint count = segments ? g_strv_length(segments) : 0;
	gboolean ok = TRUE;
	if (!count) {
		g_debug("nszip: skipping unsafe entry %s", name);
		advance(c, sat_add(usize, 1));
		goto out;
	}
	gboolean dir = mz_zip_entry_is_dir(zip) == MZ_OK;
	int parents = ensure_directories(c, destination, segments, dir ? count : count - 1);
	if (parents <= 0) {
		ok = parents < 0;
		advance(c, sat_add(usize, 1));
		goto out;
	}
	if (dir) {
		advance(c, 1);
		goto out;
	}
	char *relative = g_build_filenamev(segments);
	char *target = g_build_filename(destination, relative, NULL);
	g_free(relative);
	struct stat st;
	gboolean exists = lstat(target, &st) == 0;
	if (mz_zip_entry_is_symlink(zip) == MZ_OK || (!overwrite && exists) || (exists && S_ISDIR(st.st_mode))) {
		advance(c, sat_add(usize, 1));
	} else {
		ok = extract(c, zip, info, name, target, password, buf);
		advance(c, 1);
	}
	g_free(target);
out:
	g_strfreev(segments);
	g_free(name);
	return ok;
}

typedef struct {
	int64_t offset;
	int64_t size;
} Span;

static gint compare_spans(gconstpointer a, gconstpointer b) {
	const Span *x = a, *y = b;
	return x->offset < y->offset ? -1 : x->offset > y->offset;
}

char *nszip_unzip_sync(const char *archive, const char *destination, int overwrite, const char *password, nszip_progress_fn progress, void *user) {
	Ctx c = {progress, user, 0, 0, 0, TRUE, NULL, 0};
	GArray *spans = g_array_new(FALSE, FALSE, sizeof(Span));
	uint8_t *buf = g_malloc(CHUNK);
	void *stream = NULL, *zip = NULL;
	gboolean ok = TRUE, opened = FALSE;
	int32_t err;

	if (!archive || !destination) {
		ok = fail(&c, "Invalid arguments");
		goto done;
	}
	FILE *probe = open_regular(archive, NULL);
	if (!probe) {
		ok = fail(&c, "File does not exist, invalid archive path: %s", archive);
		goto done;
	}
	fclose(probe);
	stream = mz_stream_os_create();
	if (!stream || mz_stream_os_open(stream, archive, MZ_OPEN_MODE_READ) != MZ_OK) {
		ok = fail(&c, "File does not exist, invalid archive path: %s", archive);
		goto done;
	}
	zip = mz_zip_create();
	err = zip ? mz_zip_open(zip, stream, MZ_OPEN_MODE_READ) : MZ_MEM_ERROR;
	if (err != MZ_OK) {
		ok = fail(&c, "Not a valid zip archive: %s", archive);
		goto done;
	}
	opened = TRUE;

	uint64_t declared = 0;
	for (err = mz_zip_goto_first_entry(zip); ok && err == MZ_OK; err = mz_zip_goto_next_entry(zip)) {
		mz_zip_file *info = NULL;
		if (mz_zip_entry_get_info(zip, &info) != MZ_OK || !info || info->compressed_size < 0 || info->uncompressed_size < 0 || info->disk_offset < 0) {
			ok = fail(&c, "Corrupt central directory");
			break;
		}
		Span span = {info->disk_offset, info->compressed_size};
		g_array_append_val(spans, span);
		declared = sat_add(declared, (uint64_t)info->uncompressed_size);
		c.total = sat_add(c.total, sat_add((uint64_t)info->uncompressed_size, 1));
	}
	if (ok && err != MZ_END_OF_LIST) {
		ok = fail(&c, "Not a valid zip archive: %s", archive);
	}
	if (!ok) {
		goto done;
	}
	g_array_sort(spans, compare_spans);
	for (guint i = 1; i < spans->len; i++) {
		const Span *prev = &g_array_index(spans, Span, i - 1), *next = &g_array_index(spans, Span, i);
		if ((uint64_t)next->offset < sat_add((uint64_t)prev->offset, sat_add(30, (uint64_t)prev->size))) {
			ok = fail(&c, "Overlapping entries in archive");
			goto done;
		}
	}
	if (g_mkdir_with_parents(destination, 0755) != 0) {
		ok = fail(&c, "Cannot create %s: %s", destination, g_strerror(errno));
		goto done;
	}
	struct statvfs fs;
	if (statvfs(destination, &fs) == 0 && fs.f_frsize && declared / fs.f_frsize > (uint64_t)fs.f_bavail) {
		ok = fail(&c, "Not enough free space to extract %s", archive);
		goto done;
	}

	for (err = mz_zip_goto_first_entry(zip); ok && err == MZ_OK; err = mz_zip_goto_next_entry(zip)) {
		mz_zip_file *info = NULL;
		if (mz_zip_entry_get_info(zip, &info) != MZ_OK || !info) {
			ok = fail(&c, "Corrupt central directory");
			break;
		}
		ok = handle_entry(&c, zip, info, destination, overwrite, password, buf);
	}
	if (ok && err != MZ_END_OF_LIST) {
		ok = fail(&c, "Not a valid zip archive: %s", archive);
	}

done:
	if (zip) {
		if (opened) {
			mz_zip_close(zip);
		}
		mz_zip_delete(&zip);
	}
	if (stream) {
		mz_stream_os_close(stream);
		mz_stream_os_delete(&stream);
	}
	g_array_unref(spans);
	g_free(buf);
	return c.error;
}

typedef struct {
	gboolean unzip;
	char *source;
	char *destination;
	char *password;
	int flag;
	nszip_progress_callback progress;
	nszip_complete_callback complete;
	char *error;
} Job;

typedef struct {
	nszip_progress_callback callback;
	int percent;
} ProgressMessage;

static gboolean progress_on_main(gpointer data) {
	ProgressMessage *m = data;
	m->callback(m->percent);
	g_free(m);
	return G_SOURCE_REMOVE;
}

static void post_progress(int percent, void *user) {
	Job *job = user;
	if (!job->progress) {
		return;
	}
	ProgressMessage *m = g_new(ProgressMessage, 1);
	m->callback = job->progress;
	m->percent = percent;
	g_idle_add_full(G_PRIORITY_DEFAULT, progress_on_main, m, NULL);
}

static gboolean complete_on_main(gpointer data) {
	Job *job = data;
	if (job->complete) {
		job->complete(job->error);
	}
	g_free(job->source);
	g_free(job->destination);
	if (job->password) {
		memset(job->password, 0, strlen(job->password));
	}
	g_free(job->password);
	g_free(job->error);
	g_free(job);
	return G_SOURCE_REMOVE;
}

static gpointer worker(gpointer data) {
	Job *job = data;
	if (job->unzip) {
		job->error = nszip_unzip_sync(job->source, job->destination, job->flag, job->password, post_progress, job);
	} else {
		job->error = nszip_zip_sync(job->source, job->destination, job->flag, job->password, post_progress, job);
	}

	g_idle_add_full(G_PRIORITY_DEFAULT, complete_on_main, job, NULL);
	return NULL;
}

static void start(gboolean unzip, const char *source, const char *destination, int flag, const char *password, nszip_progress_callback progress, nszip_complete_callback complete) {
	if (!complete) {
		return;
	}
	Job *job = g_new0(Job, 1);
	job->unzip = unzip;
	job->source = g_strdup(source);
	job->destination = g_strdup(destination);
	job->password = password && *password ? g_strdup(password) : NULL;
	job->flag = flag;
	job->progress = progress;
	job->complete = complete;
	GError *error = NULL;
	GThread *thread = g_thread_try_new("nszip", worker, job, &error);
	if (!thread) {
		job->error = g_strdup(error ? error->message : "Cannot start worker thread");
		g_clear_error(&error);
		g_idle_add_full(G_PRIORITY_DEFAULT, complete_on_main, job, NULL);
		return;
	}
	g_thread_unref(thread);
}

void nszip_zip(const char *directory, const char *archive, int32_t keep_parent, const char *password, nszip_progress_callback progress, nszip_complete_callback complete) {
	start(FALSE, directory, archive, keep_parent, password, progress, complete);
}

void nszip_unzip(const char *archive, const char *destination, int32_t overwrite, const char *password, nszip_progress_callback progress, nszip_complete_callback complete) {
	start(TRUE, archive, destination, overwrite, password, progress, complete);
}
