import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedIOSSecurity } from '@demo/shared';
import {} from '@nativescript/ios-security';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedIOSSecurity {}
