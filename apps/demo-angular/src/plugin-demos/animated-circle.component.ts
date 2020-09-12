import { Component, NgZone } from '@angular/core';
import { DemoSharedAnimatedCircle } from '@demo/shared';
import { } from '@nativescript/animated-circle';

@Component({
	selector: 'demo-animated-circle',
	templateUrl: 'animated-circle.component.html',
})
export class AnimatedCircleComponent {
	demoShared: DemoSharedAnimatedCircle;
	circleProgress: number = 30;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAnimatedCircle();

		setInterval(() => {
			if (this.circleProgress === 100) {
				this.circleProgress = 0;
			}
			this.circleProgress++;
		}, 100);
	}
}
