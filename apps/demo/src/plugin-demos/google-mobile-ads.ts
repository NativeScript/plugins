import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGoogleMobileAds } from '@demo/shared';
import {} from '@nativescript/google-mobile-ads';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGoogleMobileAds {}
