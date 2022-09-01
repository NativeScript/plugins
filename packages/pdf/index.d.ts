import { Common } from './common';

export declare class PDFView extends Common {
	static loadEvent: string;
	static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<Common>): void;
	loadPDF(src: string): void;
}
