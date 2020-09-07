import { Component, NgZone } from '@angular/core';
import { DemoSharedBrightness } from '@demo/shared';
import {} from '@nativescript/brightness';

@Component({
	selector: 'demo-brightness',
	templateUrl: 'brightness.component.html',
})
export class BrightnessComponent {
	demoShared: DemoSharedBrightness;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedBrightness();
	}
}
