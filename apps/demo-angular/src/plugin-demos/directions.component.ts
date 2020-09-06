import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/directions';

@Component({
	selector: 'demo-directions',
	templateUrl: 'directions.component.html',
})
export class DirectionsComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
