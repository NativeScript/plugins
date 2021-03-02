import { Component, NgZone } from '@angular/core';
import { DemoSharedPicker } from '@demo/shared';
import {} from '@nativescript/picker';

@Component({
	selector: 'demo-picker',
	templateUrl: 'picker.component.html',
	styles: [
		`
			.item-template-label {
				margin-left: 20;
			}

			.item-template-top-label {
				margin: 20;
				font-weight: bold;
				text-align: left;
			}

			.green-label {
				color: green;
			}

			.red-label {
				color: red;
			}

			/* Styling css start */

			#picker {
				color: green;
			}

			.picker-field ListView {
				background-color: lightblue;
				margin-left: 20;
				margin-right: 20;
				margin-bottom: 20;
				separator-color: red;
				color: blue;
			}

			.picker-field ActionBar {
				background-color: yellow;
				color: black;
			}

			.item-template-picture {
				height: 70;
				width: 150;
				margin: 20;
				margin-left: 100;
			}
		`,
	],
})
export class PickerComponent {
	demoShared: DemoSharedPicker;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedPicker();
		this.demoShared.observableDataItems = this.demoShared.getDataItems(20);
	}
}
