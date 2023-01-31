import { DemoSharedBase } from '../utils';
import {} from '@nativescript/picker';
import { EventData, ObservableArray } from '@nativescript/core';

interface IDataItem {
	name: string;
	id: number;
	description: string;
	imageUrl: string;
}

export class DemoSharedPicker extends DemoSharedBase {
	pickerItems: ObservableArray<string>;
	observableDataItems: ObservableArray<IDataItem>;

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

	getItems(size: number) {
		let array = new ObservableArray<string>();

		for (let i = 0; i < size; i++) {
			array.push({
				name: 'Item ' + i,
			});
		}

		return array;
	}

	getDataItems(size: number): ObservableArray<IDataItem> {
		const dataItems = new ObservableArray<IDataItem>();
		for (let i = 0; i < size; i++) {
			dataItems.push({ name: 'Item ' + i, id: i, description: 'Description ' + i, imageUrl: 'https://picsum.photos/150/70/?random' });
		}

		return dataItems;
	}
}
