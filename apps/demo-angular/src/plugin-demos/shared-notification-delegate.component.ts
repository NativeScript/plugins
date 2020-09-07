import { Component, NgZone } from '@angular/core';
import { DemoSharedSharedNotificationDelegate } from '@demo/shared';
import {} from '@nativescript/shared-notification-delegate';

@Component({
	selector: 'demo-shared-notification-delegate',
	templateUrl: 'shared-notification-delegate.component.html',
})
export class SharedNotificationDelegateComponent {
	demoShared: DemoSharedSharedNotificationDelegate;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSharedNotificationDelegate();
	}
}
