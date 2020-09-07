import { Component, NgZone } from '@angular/core';
import { DemoSharedDirections } from '@demo/shared';
import {} from '@nativescript/directions';

@Component({
	selector: 'demo-directions',
	templateUrl: 'directions.component.html',
})
export class DirectionsComponent {
	demoShared: DemoSharedDirections;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDirections();
	}
}
