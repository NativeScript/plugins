import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedIosDebugFlex } from '@demo/shared';
import {} from '@nativescript/ios-debug-flex';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedIosDebugFlex {}
