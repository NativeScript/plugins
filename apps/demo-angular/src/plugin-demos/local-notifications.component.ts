import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/local-notifications';

@Component({
	selector: 'demo-local-notifications',
	templateUrl: 'local-notifications.component.html',
})
export class LocalNotificationsComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
