import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedDetox } from '@demo/shared';
import {} from '@nativescript/detox';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedDetox {}
