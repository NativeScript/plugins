import { Observable, EventData, Page, View } from '@nativescript/core';
import { DemoSharedPicker } from '@demo/shared';
import { PickerField } from '@nativescript/picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
	page.bindingContext.set('enableFilterText', 'Enable Filter');
}

export class DemoModel extends DemoSharedPicker {}

export function showPicker(args: EventData) {
	const view: View = args.object as View;
	const picker: PickerField = view.page.getViewById('picker');
	picker.showPicker();

	/*
    setTimeout(() => {
        closePicker(args)
    }, 3000)
    */
}

let showFilter = false;
export function toggleFilter(args: EventData) {
	const view: View = args.object as View;
	console.error('enableFilter', showFilter);
	showFilter = !showFilter;
	view.page.bindingContext.set('enableFilter', showFilter);
	view.page.bindingContext.set('enableFilterText', showFilter ? 'Hide Filter' : 'Enable Filter');
	const picker: PickerField = view.page.getViewById('picker');
	picker.showPicker();
}

function closePicker(args: EventData) {
	const view: View = args.object as View;
	const picker: PickerField = view.page.getViewById('picker');
	picker.closePicker();
}
