import { Component, NgZone } from '@angular/core';
import { DemoSharedVideoAdvanced } from '@demo/shared';
import {} from '@nativescript/video-advanced';

@Component({
	selector: 'demo-video-advanced',
	templateUrl: 'video-advanced.component.html',
})
export class VideoAdvancedComponent {
	demoShared: DemoSharedVideoAdvanced;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedVideoAdvanced();
	}
}
