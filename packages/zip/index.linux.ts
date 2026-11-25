import { Folder, File, path, knownFolders } from '@nativescript/core';
import { UnZipOptions, ZipOptions } from '.';

declare function nszip_zip(directory: string, archive: string, keepParent: number, password: string | null, progress: interop.Pointer, complete: interop.Pointer): void;
declare function nszip_unzip(archive: string, destination: string, overwrite: number, password: string | null, progress: interop.Pointer, complete: interop.Pointer): void;
declare const nativescript: { ref(): void; unref(): void };

function uuid(): string {
	return (globalThis as any).crypto?.randomUUID?.() ?? `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
}

function run(onProgress: ((percent: number) => void) | undefined, start: (progress: interop.Pointer, complete: interop.Pointer) => void): Promise<void> {
	return new Promise((resolve, reject) => {
		const native: any = interop;
		const progressFn = (percent: number) => {
			if (typeof onProgress === 'function') {
				onProgress(percent);
			}
		};
		const completeFn = (error: any) => {
			const failure = error ? native.stringFromCString(error) : null;
			setTimeout(() => {
				native.release(progressFn);
				native.release(completeFn);
				nativescript.unref();
			});
			if (failure) {
				reject(failure);
			} else {
				resolve();
			}
		};
		const progressPtr = native.callback(progressFn, { returns: native.types.void, args: [native.types.int32] });
		const completePtr = native.callback(completeFn, { returns: native.types.void, args: [native.types.pointer] });
		nativescript.ref();
		start(progressPtr, completePtr);
	});
}

export class Zip {
	static debugEnabled = false;

	private static debug(arg) {
		if (this.debugEnabled && console && console.log) {
			console.log(arg);
		}
	}

	public static zip(options: ZipOptions): Promise<string> {
		if (!options?.directory || !Folder.exists(options.directory)) {
			return Promise.reject('Directory does not exist, invalid directory path: ' + options?.directory);
		}
		const archive = options.archive ?? path.join(knownFolders.temp().path, `${uuid()}_archive.zip`);
		const keepParent = (options.keepParent ?? true) ? 1 : 0;
		this.debug('Zip.zip - folder=' + options.directory + '\n' + 'Zip.zip - destinationPath=' + archive);
		return run(options.onProgress, (progress, complete) => nszip_zip(options.directory, archive, keepParent, options.password || null, progress, complete)).then(() => archive);
	}

	public static unzip(options: UnZipOptions): Promise<any> {
		if (!options?.archive || !File.exists(options.archive)) {
			return Promise.reject(`File does not exist, invalid archive path: ${options?.archive}`);
		}
		const destination = options.directory ?? path.join(knownFolders.temp().path, uuid());
		const overwrite = (options.overwrite ?? true) ? 1 : 0;
		this.debug(`Zip.unzip - archive=${options.archive}`);
		return run(options.onProgress, (progress, complete) => nszip_unzip(options.archive, destination, overwrite, options.password || null, progress, complete)).then(() => destination);
	}
}
