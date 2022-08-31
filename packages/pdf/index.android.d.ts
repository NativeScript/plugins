/// <reference types="androidpdfviewer" />
import pdfviewer = com.github.barteksc.pdfviewer;
import { Common } from './common';
export declare class PDFView extends Common {
	private promise;
	private onLoadHandler;
	// @ts-ignore
	get android(): pdfviewer.PDFView;
	set android(value: pdfviewer.PDFView);
	createNativeView(): pdfviewer.PDFView;
	loadPDF(src: string): void;
	private cacheThenLoad;
}
