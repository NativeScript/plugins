import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSecureStorage } from '@demo/shared';
import {} from '@nativescript/secure-storage';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSecureStorage {}
