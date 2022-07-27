import { PDFViewCommon } from './pdf-view.common';

export declare class PDFView extends PDFViewCommon {

	public static loadEvent: string;
	public static notifyOfEvent(
		eventName: string,
		pdfViewRef: WeakRef<PDFViewCommon>,
	): void;

	public loadPDF(src: string): void;
}
