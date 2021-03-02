import { Component, NgZone } from '@angular/core';
import { DemoSharedIosDebugFlex } from '@demo/shared';
import {} from '@nativescript/ios-debug-flex';

@Component({
	selector: 'demo-ios-debug-flex',
	templateUrl: 'ios-debug-flex.component.html',
})
export class IosDebugFlexComponent {
	demoShared: DemoSharedIosDebugFlex;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedIosDebugFlex();
	}
}
