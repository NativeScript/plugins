import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGooglePay } from '@demo/shared';
import {} from '@nativescript/google-pay';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGooglePay {}
