import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/zip';

@Component({
	selector: 'demo-zip',
	templateUrl: 'zip.component.html',
})
export class ZipComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
