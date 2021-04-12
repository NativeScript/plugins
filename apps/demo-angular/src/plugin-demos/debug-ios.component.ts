import { Component, NgZone } from '@angular/core';
import { DemoSharedDebugIOS } from '@demo/shared';
import {} from '@nativescript/debug-ios';

@Component({
	selector: 'demo-debug-ios',
	templateUrl: 'debug-ios.component.html',
})
export class DebugIosComponent {
	demoShared: DemoSharedDebugIOS;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDebugIOS();
	}
}
