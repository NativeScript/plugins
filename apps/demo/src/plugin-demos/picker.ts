import { Observable, EventData, Page, View } from '@nativescript/core';
import { DemoSharedPicker } from '@demo/shared';
import { PickerField } from '@nativescript/picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
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

function closePicker(args: EventData) {
	const view: View = args.object as View;
	const picker: PickerField = view.page.getViewById('picker');
	picker.closePicker();
}
