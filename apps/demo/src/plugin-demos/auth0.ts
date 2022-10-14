import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAuth0 } from '@demo/shared';
import {} from '@nativescript/auth0';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAuth0 {}
