import { File, knownFolders, Folder, path, Utils } from '@nativescript/core';
import { UnZipOptions, ZipOptions } from '.';

export class Zip {
    static debugEnabled = false;

    public static ProgressUpdateRate = 100;


    private static debug(arg) {
        if (this.debugEnabled && console && console.log) {
            console.log(arg);
        }
    }

    public static zip(options: ZipOptions): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!Folder.exists(options?.directory)) {
                return reject('Directory does not exist, invalid directory path: ' + options?.directory);
            }
            try {
                const archive = options?.archive ?? path.join(knownFolders.temp().path, `${java.util.UUID.randomUUID().toString()}_archive.zip`);
                this.debug(
                    'Zip.zip - folder=' +
                    options?.directory +
                    '\n' +
                    'Zip.zip - destinationPath=' +
                    archive
                );

                const zipFile = new net.lingala.zip4j.ZipFile(new java.io.File(archive));
                zipFile.setRunInThread(true);
                const parameters = new net.lingala.zip4j.model.ZipParameters();
                if (Utils.isString(options?.password)) {
                    parameters.setEncryptionMethod(net.lingala.zip4j.model.enums.EncryptionMethod.AES);
                    zipFile.setPassword((java.lang.String.valueOf(options?.password) as any).toCharArray());
                }
                parameters.setCompressionMethod(
                    net.lingala.zip4j.model.enums.CompressionMethod.DEFLATE
                );
                parameters.setCompressionLevel(
                    net.lingala.zip4j.model.enums.CompressionLevel.NORMAL
                );
                parameters.setIncludeRootFolder(options?.keepParent ?? true);
                const monitor = zipFile.getProgressMonitor();
                zipFile.addFolder(new java.io.File(options?.directory), parameters);
                const progressInterval = setInterval(function () {
                    if (monitor.getState() === net.lingala.zip4j.progress.ProgressMonitor.State.BUSY) {
                        if (typeof options?.onProgress === 'function') {
                            options?.onProgress(monitor.getPercentDone());
                        }
                    } else {
                        const result = monitor.getResult();
                        if (result === net.lingala.zip4j.progress.ProgressMonitor.Result.SUCCESS) {
                            if (typeof options?.onProgress === 'function') {
                                options?.onProgress(monitor.getPercentDone());
                            }
                            resolve(archive);
                        } else if (result === net.lingala.zip4j.progress.ProgressMonitor.Result.ERROR) {
                            reject(
                                monitor.getException()
                                    ? monitor.getException().getMessage()
                                    : 'error'
                            );
                        } else {
                            reject('cancelled');
                        }
                        clearInterval(progressInterval);
                    }
                }, Zip.ProgressUpdateRate);
            } catch (ex) {
                reject(ex);
            }
        });
    }

    public static unzip(options: UnZipOptions): Promise<any> {
        if (!options?.archive || !File.exists(options?.archive)) {
            return Promise.reject(
                `File does not exist, invalid archive path: ${options?.archive}`
            );
        }
        return new Promise((resolve, reject) => {
            try {
                this.debug(`Zip.unzip - archive=${options?.archive}`);
                const zipFile = new net.lingala.zip4j.ZipFile(options?.archive);
                zipFile.setRunInThread(true);
                if (zipFile.isEncrypted() && Utils.isString(options?.password)) {
                    zipFile.setPassword((java.lang.String.valueOf(options?.password) as any).toCharArray());
                }
                const tempDir = path.join(knownFolders.temp().path, java.util.UUID.randomUUID().toString());
                const directory = options?.directory ?? tempDir;
                const d = new java.io.File(directory);

                if (!d.exists()) {
                    d.mkdirs();
                }

                const monitor = zipFile.getProgressMonitor();
                zipFile.extractAll(directory);
                const progressInterval = setInterval(() => {
                    const state = monitor.getState();
                    if (state === net.lingala.zip4j.progress.ProgressMonitor.State.BUSY) {
                        if (typeof options?.onProgress === 'function') {
                            options?.onProgress(monitor.getPercentDone());
                        }
                    } else {
                        // Done working
                        const result = monitor.getResult();
                        if (result === net.lingala.zip4j.progress.ProgressMonitor.Result.SUCCESS) {
                            if (typeof options?.onProgress === 'function') {
                                options?.onProgress(monitor.getPercentDone());
                            }
                            resolve(directory);
                        } else if (result === net.lingala.zip4j.progress.ProgressMonitor.Result.ERROR) {
                            reject(
                                monitor.getException()
                                    ? monitor.getException().getMessage()
                                    : 'error'
                            );
                        } else {
                            reject('cancelled');
                        }
                        clearInterval(progressInterval);
                    }
                }, Zip.ProgressUpdateRate);
            } catch (ex) {
                reject(ex);
            }
        });
    }

}
