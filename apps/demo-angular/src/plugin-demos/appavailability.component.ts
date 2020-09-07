import { Component, NgZone } from '@angular/core';
import { DemoSharedAppavailability } from '@demo/shared';
import {} from '@nativescript/appavailability';

@Component({
	selector: 'demo-appavailability',
	templateUrl: 'appavailability.component.html',
})
export class AppavailabilityComponent {
	demoShared: DemoSharedAppavailability;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAppavailability();
	}
}
