import { Component, NgZone } from '@angular/core';
import { DemoSharedBackgroundHttp } from '@demo/shared';
import {} from '@nativescript/background-http';

@Component({
	selector: 'demo-background-http',
	templateUrl: 'background-http.component.html',
})
export class BackgroundHttpComponent {
	demoShared: DemoSharedBackgroundHttp;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedBackgroundHttp();
	}
}
