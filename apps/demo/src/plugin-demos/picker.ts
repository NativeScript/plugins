import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPicker } from '@demo/shared';
import {} from '@nativescript/picker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPicker {}
