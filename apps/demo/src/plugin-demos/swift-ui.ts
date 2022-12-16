import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSwiftUi } from '@demo/shared';
import {} from '@nativescript/swift-ui';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSwiftUi {}
