#ifndef NSZIP_H
#define NSZIP_H

#include <stdint.h>

#if defined(__GNUC__)
#define NSZIP_EXPORT __attribute__((visibility("default")))
#else
#define NSZIP_EXPORT
#endif

#ifdef __cplusplus
extern "C" {
#endif

typedef void (*nszip_progress_callback)(int32_t percent);

typedef void (*nszip_complete_callback)(const char *error);

NSZIP_EXPORT void nszip_zip(const char *directory, const char *archive, int32_t keep_parent, const char *password, nszip_progress_callback progress, nszip_complete_callback complete);

NSZIP_EXPORT void nszip_unzip(const char *archive, const char *destination, int32_t overwrite, const char *password, nszip_progress_callback progress, nszip_complete_callback complete);

#ifdef __cplusplus
}
#endif

#endif
