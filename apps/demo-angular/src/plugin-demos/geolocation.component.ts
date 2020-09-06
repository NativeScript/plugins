import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/geolocation';

@Component({
	selector: 'demo-geolocation',
	templateUrl: 'geolocation.component.html',
})
export class GeolocationComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
