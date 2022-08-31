import { Common } from './common';
export declare class PDFView extends Common {
	private delegate;
	constructor();
	// @ts-ignore
	get ios(): WKWebView;
	set ios(value: WKWebView);
	onLoaded(): void;
	onUnloaded(): void;
	loadPDF(src: string): void;
	private init;
	private get mainScreen();
}
