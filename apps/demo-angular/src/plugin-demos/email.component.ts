import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/email';

@Component({
	selector: 'demo-email',
	templateUrl: 'email.component.html',
})
export class EmailComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
