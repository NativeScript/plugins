import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/appavailability';

@Component({
	selector: 'demo-appavailability',
	templateUrl: 'appavailability.component.html',
})
export class AppavailabilityComponent {
	constructor(private ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
