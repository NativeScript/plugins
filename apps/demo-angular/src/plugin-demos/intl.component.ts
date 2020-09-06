import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/intl';

@Component({
	selector: 'demo-intl',
	templateUrl: 'intl.component.html',
})
export class IntlComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
