import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFacebook } from '@demo/shared';
import { } from '@nativescript/facebook';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFacebook {
	
}
