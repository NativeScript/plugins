import { Component, NgZone } from '@angular/core';
import { DemoSharedAudio } from '@demo/shared';

@Component({
	selector: 'demo-audio',
	templateUrl: 'audio.component.html',
})
export class AudioComponent {
	demoShared: DemoSharedAudio;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAudio();
	}
}
