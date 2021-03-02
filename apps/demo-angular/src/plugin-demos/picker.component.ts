import { Component, NgZone } from '@angular/core';
import { DemoSharedPicker } from '@demo/shared';
import {} from '@nativescript/picker';

@Component({
	selector: 'demo-picker',
	templateUrl: 'picker.component.html',
})
export class PickerComponent {
	demoShared: DemoSharedPicker;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPicker();
	}
}
