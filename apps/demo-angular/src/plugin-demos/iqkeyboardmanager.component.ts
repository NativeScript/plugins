import { Component, NgZone } from '@angular/core';
import { DemoSharedIqkeyboardmanager } from '@demo/shared';

@Component({
	selector: 'demo-iqkeyboardmanager',
	templateUrl: 'iqkeyboardmanager.component.html',
})
export class IqkeyboardmanagerComponent {
	demoShared: DemoSharedIqkeyboardmanager;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedIqkeyboardmanager();
	}
}
