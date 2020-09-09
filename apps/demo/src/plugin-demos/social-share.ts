import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSocialShare } from '@demo/shared';
import {} from '@nativescript/social-share';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSocialShare {}
