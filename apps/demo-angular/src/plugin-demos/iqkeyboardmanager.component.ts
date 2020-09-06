import { Component, NgZone } from '@angular/core';

@Component({
	selector: 'demo-iqkeyboardmanager',
	templateUrl: 'iqkeyboardmanager.component.html',
})
export class IqkeyboardmanagerComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
