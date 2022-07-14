import { Component, NgZone } from '@angular/core';
import { DemoSharedVideo } from '@demo/shared';
import {} from '@nativescript/video';

@Component({
	selector: 'demo-video',
	templateUrl: 'video.component.html',
})
export class VideoComponent {
	demoShared: DemoSharedVideo;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedVideo();
	}
}
