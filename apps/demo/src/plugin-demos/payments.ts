import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPayments } from '@demo/shared';
import {} from '@nativescript/payments';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPayments {}
