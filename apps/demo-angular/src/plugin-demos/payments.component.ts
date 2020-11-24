import { Component, NgZone } from '@angular/core';
import { DemoSharedPayments } from '@demo/shared';
import {} from '@nativescript/payments';

@Component({
	selector: 'demo-payments',
	templateUrl: 'payments.component.html',
})
export class PaymentsComponent {
	demoShared: DemoSharedPayments;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPayments();
	}
}
