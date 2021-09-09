import { Component, NgZone } from '@angular/core';
import { DemoSharedIosSecurity } from '@demo/shared';
import {} from '@nativescript/ios-security';

@Component({
	selector: 'demo-ios-security',
	templateUrl: 'ios-security.component.html',
})
export class IosSecurityComponent {
	demoShared: DemoSharedIosSecurity;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedIosSecurity();
	}
}
