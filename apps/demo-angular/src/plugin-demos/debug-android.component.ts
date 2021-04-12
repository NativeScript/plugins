import { Component, NgZone } from '@angular/core';
import { DemoSharedDebugAndroid } from '@demo/shared';
import {} from '@nativescript/debug-android';

@Component({
	selector: 'demo-debug-android',
	templateUrl: 'debug-android.component.html',
})
export class DebugAndroidComponent {
	demoShared: DemoSharedDebugAndroid;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDebugAndroid();
	}
}
