import { Component, NgZone } from '@angular/core';
import { DemoSharedGooglePay } from '@demo/shared';
import {} from '@nativescript/google-pay';

@Component({
	selector: 'demo-google-pay',
	templateUrl: 'google-pay.component.html',
})
export class GooglePayComponent {
	demoShared: DemoSharedGooglePay;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedGooglePay();
	}
}
