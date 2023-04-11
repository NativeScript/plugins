import { Component, NgZone } from '@angular/core';
import { DemoSharedJetpackCompose } from '@demo/shared';
import {} from '@nativescript/jetpack-compose';

@Component({
	selector: 'demo-jetpack-compose',
	templateUrl: 'jetpack-compose.component.html',
})
export class JetpackComposeComponent {
	demoShared: DemoSharedJetpackCompose;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedJetpackCompose();
	}
}
