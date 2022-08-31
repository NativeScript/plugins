import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPdfView } from '@demo/shared';

import { PDFView } from '@nativescript/pdf';
import { registerElement } from '@nativescript/angular';

registerElement('PDFView', () => PDFView);

@Component({
	selector: 'demo-pdf',
	templateUrl: 'pdf.component.html',
})
export class PdfComponent {
	pdfSrc: string = 'https://riptutorial.com/Download/nativescript.pdf';

	constructor(private _ngZone: NgZone) {}

	onLoad() {
		console.log('PDF loaded');
	}
}
