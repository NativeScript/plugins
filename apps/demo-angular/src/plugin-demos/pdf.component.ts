import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPdfView } from '@demo/shared';

@Component({
	selector: 'demo-pdf',
	templateUrl: 'pdf.component.html',
})
export class PdfComponent {
	demoShared: DemoSharedNativescriptPdfView;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPdfView();
	}
}
