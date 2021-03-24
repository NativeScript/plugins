import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedApplePay } from '@demo/shared';
import {} from '@nativescript/apple-pay';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedApplePay {}
