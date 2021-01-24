import { Component, NgZone } from '@angular/core';
import { DemoSharedDetox } from '@demo/shared';
import {} from '@nativescript/detox';

@Component({
	selector: 'demo-detox',
	templateUrl: 'detox.component.html',
})
export class DetoxComponent {
	demoShared: DemoSharedDetox;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDetox();
	}
}
