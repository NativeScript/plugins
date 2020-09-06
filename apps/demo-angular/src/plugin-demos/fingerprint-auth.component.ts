import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/fingerprint-auth';

@Component({
	selector: 'demo-fingerprint-auth',
	templateUrl: 'fingerprint-auth.component.html',
})
export class FingerprintAuthComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
