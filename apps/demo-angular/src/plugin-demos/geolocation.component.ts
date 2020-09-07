import { Component, NgZone } from '@angular/core';
import { DemoSharedGeolocation } from '@demo/shared';
import {} from '@nativescript/geolocation';

@Component({
	selector: 'demo-geolocation',
	templateUrl: 'geolocation.component.html',
})
export class GeolocationComponent {
	demoShared: DemoSharedGeolocation;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedGeolocation();
	}
}
