import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedDebugIOS } from '@demo/shared';
import {} from '@nativescript/debug-ios';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedDebugIOS {}
