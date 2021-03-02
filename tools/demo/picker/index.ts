import { DemoSharedBase } from '../utils';
import {} from '@nativescript/picker';
import { EventData, ObservableArray } from '@nativescript/core';

export class DemoSharedPicker extends DemoSharedBase {
	pickerItems: ObservableArray<string>;

	constructor() {
		super();

		this.pickerItems = this.getItems(100);
	}
	pickerOpened(args: EventData) {
		console.log('Picker > Opened', (<any>args.object).className);
	}

	pickerClosed(args: EventData) {
		console.log('Picker > Closed', (<any>args.object).className);
	}

	private getItems(size: number) {
		let array = new ObservableArray<string>();

		for (let i = 0; i < size; i++) {
			array.push('Item ' + i);
		}

		return array;
	}
}
