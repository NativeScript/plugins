import { Common } from './common';

export declare class PDFView extends Common {
	public static loadEvent: string;
	public static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<Common>): void;

	public loadPDF(src: string): void;
}
