import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPdfView } from '@demo/shared';

@Component({
	selector: 'demo-pdf-view',
	templateUrl: 'pdf-view.component.html',
})
export class PdfViewComponent {

  demoShared: DemoSharedNativescriptPdfView;

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptPdfView();
  }

}
