minizip-ng 4.2.2 (https://github.com/zlib-ng/minizip-ng/releases/tag/4.2.2), zlib license (see LICENSE).

Only the sources for zlib + OpenSSL + PKWARE/WinZip AES encryption are included; `mz_config.h` replaces the CMake-generated header.

Local changes:
- `mz_zip.c`: `mz_zip_entry_read_close` also closes the WinZip AES stream.
- `mz_crypt_openssl.c`: `openssl/engine.h` is only included for OpenSSL < 1.1 (it is absent on systems built without the ENGINE API).
