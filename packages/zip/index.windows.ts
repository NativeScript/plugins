import { Folder, File, path, knownFolders } from '@nativescript/core';
import { UnZipOptions, ZipOptions } from '.';

declare const NativeScriptZip: any;
declare const NSWinRT: any;

function uuid(): string {
	return (globalThis as any).crypto?.randomUUID?.() ?? `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
}

function message(e: any): string {
	return typeof e === 'string' ? e : (e?.message ?? String(e));
}

function progress(options: { onProgress?: (progress: number) => void }) {
	return (percent: number) => {
		if (typeof options.onProgress === 'function') {
			options.onProgress(percent);
		}
	};
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
		this.debug('Zip.zip - folder=' + options.directory + '\n' + 'Zip.zip - destinationPath=' + archive);
		const task = NativeScriptZip.ZipArchiver.ZipAsync(options.directory, archive, options.keepParent ?? true, options.password ?? '', progress(options));
		return NSWinRT.dotnet.taskToPromise(task).then(
			() => archive,
			(e) => Promise.reject(message(e)),
		);
	}

	public static unzip(options: UnZipOptions): Promise<any> {
		if (!options?.archive || !File.exists(options.archive)) {
			return Promise.reject(`File does not exist, invalid archive path: ${options?.archive}`);
		}
		const destination = options.directory ?? path.join(knownFolders.temp().path, uuid());
		this.debug(`Zip.unzip - archive=${options.archive}`);
		const task = NativeScriptZip.ZipArchiver.UnzipAsync(options.archive, destination, options.overwrite ?? true, options.password ?? '', progress(options));
		return NSWinRT.dotnet.taskToPromise(task).then(
			() => destination,
			(e) => Promise.reject(message(e)),
		);
	}
}
