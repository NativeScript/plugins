import { Component, NgZone } from '@angular/core';
import { DemoSharedLocalNotifications } from '@demo/shared';
import {} from '@nativescript/local-notifications';

@Component({
	selector: 'demo-local-notifications',
	templateUrl: 'local-notifications.component.html',
})
export class LocalNotificationsComponent {
	demoShared: DemoSharedLocalNotifications;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedLocalNotifications();
	}
}
