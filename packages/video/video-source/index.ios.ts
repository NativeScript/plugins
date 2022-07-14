import { knownFolders, path as nsFilePath, Utils } from '@nativescript/core';
import { CLog, CLogTypes } from '../common';

// leave the export so the functions in common are exported
export * from './common';

export class VideoSource {
	public ios: AVPlayerItem;
	height: any;
	width: any;

	public loadFromResource(name: string): boolean {
		CLog(CLogTypes.info, `VideoSource.loadFromResource --- name ${name}`);
		const videoURL = NSBundle.mainBundle.URLForResourceWithExtension(name, null);
		const player = AVPlayerItem.playerItemWithURL(videoURL);
		this.ios = player;
		return this.ios != null;
	}

	public loadFromFile(path: string): boolean {
		CLog(CLogTypes.info, `VideoSource.loadFromFile --- path ${path}`);
		let fileName = Utils.isString(path) ? path.trim() : '';

		if (fileName.indexOf('~/') === 0) {
			fileName = nsFilePath.join(knownFolders.currentApp().path, fileName.replace('~/', ''));
			CLog(CLogTypes.info, `VideoSource.loadFromFile --- fileName ${fileName}`);
		}

		const videoURL = NSURL.fileURLWithPath(fileName);
		const player = AVPlayerItem.playerItemWithURL(videoURL);
		this.ios = player;
		return this.ios != null;
	}

	public loadFromUrl(url: string): boolean {
		CLog(CLogTypes.info, `VideoSource.loadFromUrl --- url ${url}`);
		const videoURL = NSURL.URLWithString(url);
		const player = AVPlayerItem.playerItemWithURL(videoURL);
		this.ios = player;
		return this.ios != null;
	}

	public setNativeSource(source: any): boolean {
		CLog(CLogTypes.info, `VideoSource.setNativeSource --- source ${source}`);
		this.ios = source;
		return source != null;
	}
}
