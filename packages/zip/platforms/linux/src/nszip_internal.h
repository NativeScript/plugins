#ifndef NSZIP_INTERNAL_H
#define NSZIP_INTERNAL_H

#include <stdint.h>

typedef void (*nszip_progress_fn)(int percent, void *user);

char *nszip_zip_sync(const char *directory, const char *archive, int keep_parent, const char *password, nszip_progress_fn progress, void *user);
char *nszip_unzip_sync(const char *archive, const char *destination, int overwrite, const char *password, nszip_progress_fn progress, void *user);

extern uint64_t nszip_zip64_threshold;

#endif
