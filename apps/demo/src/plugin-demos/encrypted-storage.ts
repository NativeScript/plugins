import { EventData, Page } from '@nativescript/core';
import { DemoSharedEncryptedStorage } from '@demo/shared';
import {} from '@nativescript/encrypted-storage';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedEncryptedStorage {}
