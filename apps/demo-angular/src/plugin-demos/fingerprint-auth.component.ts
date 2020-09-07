import { Component, NgZone } from '@angular/core';
import { DemoSharedFingerprintAuth } from '@demo/shared';
import {} from '@nativescript/fingerprint-auth';

@Component({
	selector: 'demo-fingerprint-auth',
	templateUrl: 'fingerprint-auth.component.html',
})
export class FingerprintAuthComponent {
	demoShared: DemoSharedFingerprintAuth;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFingerprintAuth();
	}
}
