import { Component, NgZone } from '@angular/core';
import { DemoSharedZip } from '@demo/shared';
import {} from '@nativescript/zip';

@Component({
	selector: 'demo-zip',
	templateUrl: 'zip.component.html',
})
export class ZipComponent {
	demoShared: DemoSharedZip;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedZip();
	}
}
