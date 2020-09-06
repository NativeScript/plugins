import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/shared-notification-delegate';

@Component({
	selector: 'demo-shared-notification-delegate',
	templateUrl: 'shared-notification-delegate.component.html',
})
export class SharedNotificationDelegateComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
