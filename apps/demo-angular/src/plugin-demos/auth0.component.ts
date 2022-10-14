import { Component, NgZone } from '@angular/core';
import { DemoSharedAuth0 } from '@demo/shared';
import {} from '@nativescript/auth0';

@Component({
	selector: 'demo-auth0',
	templateUrl: 'auth0.component.html',
})
export class Auth0Component {
	demoShared: DemoSharedAuth0;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAuth0();
	}
}
