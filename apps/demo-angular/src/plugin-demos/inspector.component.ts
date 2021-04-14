import { Component, NgZone } from '@angular/core';
import { DemoSharedInspector } from '@demo/shared';
import {} from '@nativescript/inspector';

@Component({
	selector: 'demo-inspector',
	templateUrl: 'inspector.component.html',
})
export class InspectorComponent {
	demoShared: DemoSharedInspector;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedInspector();
	}
}
