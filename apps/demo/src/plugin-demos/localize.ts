import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedLocalize } from '@demo/shared';
import {} from '@nativescript/localize';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedLocalize {}
