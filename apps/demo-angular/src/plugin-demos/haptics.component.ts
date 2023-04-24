import { Component, NgZone } from '@angular/core';
import { DemoSharedHaptics } from '@demo/shared';
import {} from '@nativescript/haptics';

@Component({
	selector: 'demo-haptics',
	templateUrl: 'haptics.component.html',
})
export class HapticsComponent {
	demoShared: DemoSharedHaptics;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedHaptics();
	}
}
