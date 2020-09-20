import { Component, NgZone } from '@angular/core';
import { DemoSharedLocalize } from '@demo/shared';
import {} from '@nativescript/localize';

@Component({
	selector: 'demo-localize',
	templateUrl: 'localize.component.html',
})
export class LocalizeComponent {
	demoShared: DemoSharedLocalize;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedLocalize();
	}
}
