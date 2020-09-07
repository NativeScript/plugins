import { Component, NgZone } from '@angular/core';
import { DemoSharedEmail } from '@demo/shared';
import {} from '@nativescript/email';

@Component({
	selector: 'demo-email',
	templateUrl: 'email.component.html',
})
export class EmailComponent {
	demoShared: DemoSharedEmail;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedEmail();
	}
}
