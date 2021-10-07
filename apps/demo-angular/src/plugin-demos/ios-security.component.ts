import { Component, NgZone } from '@angular/core';
import { DemoSharedIOSSecurity } from '@demo/shared';
import {} from '@nativescript/ios-security';

@Component({
	selector: 'demo-ios-security',
	templateUrl: 'ios-security.component.html',
})
export class IOSSecurityComponent {
	demoShared: DemoSharedIOSSecurity;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedIOSSecurity();
	}
}
