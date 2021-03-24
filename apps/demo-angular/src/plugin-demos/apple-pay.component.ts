import { Component, NgZone } from '@angular/core';
import { DemoSharedApplePay } from '@demo/shared';
import {} from '@nativescript/apple-pay';

@Component({
	selector: 'demo-apple-pay',
	templateUrl: 'apple-pay.component.html',
})
export class ApplePayComponent {
	demoShared: DemoSharedApplePay;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedApplePay();
	}
}
