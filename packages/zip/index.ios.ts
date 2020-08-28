import { Folder, path, knownFolders, File } from '@nativescript/core';
import { UnZipOptions, ZipOptions } from '.';

const background_queue = dispatch_get_global_queue(qos_class_t.QOS_CLASS_DEFAULT, 0);
const main_queue = dispatch_get_current_queue();

const listeners = [];

export class Zip {
    static debugEnabled = false;

    private static debug(arg) {
        if (this.debugEnabled && console && console.log) {
            console.log(arg);
        }
    }

    private static _zipRequest(options: ZipOptions): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!options?.directory || !Folder.exists(options?.directory)) {
                return reject('Directory does not exist, invalid directory path: ' + options?.directory);
            }

            dispatch_async(background_queue, () => {
                const archive = options?.archive ?? path.join(knownFolders.temp().path, `${NSUUID.UUID().UUIDString}_archive.zip`);
                this.debug(
                    'Zip.zip - folder=' +
                    options?.directory +
                    '\n' +
                    'Zip.zip - destinationPath=' +
                    archive
                );
                let lastProgressPercent = 0;
                this.debug('Zip.zip - tempFolder= ' + archive);
                const result = SSZipArchive.createZipFileAtPathWithContentsOfDirectoryKeepParentDirectoryCompressionLevelPasswordAESProgressHandler(
                    archive,
                    options?.directory,
                    options?.keepParent ?? true,
                    -1,
                    options?.password ?? null,
                    true,
                    (entryNumber, entriesTotal) => {
                        if (typeof options?.onProgress === 'function' && entriesTotal > 0) {
                            const percent = Math.floor(entryNumber / entriesTotal * 100);
                            this.debug('ZipWorker - zipProgress= ' + percent);
                            if (percent !== lastProgressPercent) {
                                lastProgressPercent = percent;
                                dispatch_async(main_queue, () => {
                                    options?.onProgress(percent);
                                });
                            }
                        }
                    }
                );
                this.debug('Zip.zip - after create result=' + result);
                if (!result) {
                    reject('Error creating zip file.');
                } else {
                    resolve(archive);
                }

            });
        });
    }

    private static _unzipRequest(options: UnZipOptions): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!File.exists(options?.archive)) {
                return reject(`File does not exist, invalid archive path: ${options?.archive}`);
            }
            const destination = options?.directory ?? path.join(knownFolders.temp().path, NSUUID.UUID().UUIDString);
            dispatch_async(background_queue, () => {
                this.debug(`Zip.unzip - archive=${options?.archive}`);
                let lastProgressPercent = 0;
                const error = new interop.Pointer();
                const delegate = (<any>NSObject).extend({
                    zipArchiveProgressEventTotal(loaded: number, total: number): void {
                        if (typeof options.onProgress === 'function') {
                            const percent = Math.floor(loaded / total * 100);
                            if (percent !== lastProgressPercent) {
                                lastProgressPercent = percent;
                                options?.onProgress(percent);
                            }
                        }
                    }
                }, {
                    protocols: [SSZipArchiveDelegate]
                });
                const listener = delegate.new();
                listeners.push(listener);
                const result = SSZipArchive.unzipFileAtPathToDestinationOverwritePasswordErrorDelegate(
                    options?.archive,
                    destination,
                    options?.overwrite ?? true,
                    options?.password ?? null,
                    error,
                    listener
                );
                const index = listeners.indexOf(listener);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
                if (!result) {
                    reject(error?.value?.localizedDescription ?? 'Unknown error');
                } else {
                    resolve(destination);
                }
            });
        });
    }

    public static zip(options: ZipOptions) {
        return this._zipRequest(options);
    }


    public static unzip(options: UnZipOptions): Promise<any> {
        return this._unzipRequest(options);
    }
}
