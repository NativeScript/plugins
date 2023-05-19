import { Observable, EventData, Page, View } from '@nativescript/core';
import { DemoSharedPicker } from '@demo/shared';
import { PickerField } from '@nativescript/picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPicker {
	enableFilter = false;
	enableFilterText = 'Enable Filter';
	toggleFilter(args: EventData) {
		const view: View = args.object as View;
		console.log('enableFilter', this.enableFilter);
		this.enableFilter = !this.enableFilter;
		this.notifyPropertyChange('enableFilter', this.enableFilter);
		this.notifyPropertyChange('enableFilterText', this.enableFilter ? 'Hide Filter' : 'Enable Filter');
		const picker: PickerField = view.page.getViewById('picker');
		picker.showPicker();
	}

	showPicker(args: EventData) {
		const view: View = args.object as View;
		const picker: PickerField = view.page.getViewById('picker');
		picker.showPicker();

		/*
		setTimeout(() => {
			closePicker(args)
		}, 3000)
		*/
	}

	closePicker(args: EventData) {
		const view: View = args.object as View;
		const picker: PickerField = view.page.getViewById('picker');
		picker.closePicker();
	}
}
