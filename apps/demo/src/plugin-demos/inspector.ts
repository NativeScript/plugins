import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedInspector } from '@demo/shared';
import {} from '@nativescript/inspector';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedInspector {}
