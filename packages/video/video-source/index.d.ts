export * from './common';
export declare class VideoSource {
	android: any;
	ios: any;
	loadFromResource(name: string): boolean;
	loadFromUrl(url: string): boolean;
	loadFromFile(path: string): boolean;
	setNativeSource(source: any): boolean;
	readonly height: number;
	readonly width: number;
}
