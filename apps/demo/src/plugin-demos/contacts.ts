import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedContacts } from '@demo/shared';
import { } from '@nativescript/contacts';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedContacts {
	
}
