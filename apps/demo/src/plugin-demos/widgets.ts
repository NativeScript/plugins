import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedWidgets } from '@demo/shared';
import {} from '@nativescript/widgets';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWidgets {}
