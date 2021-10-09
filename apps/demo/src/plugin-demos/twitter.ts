import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTwitter } from '@demo/shared';
import { } from '@nativescript/twitter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTwitter {
	
}
