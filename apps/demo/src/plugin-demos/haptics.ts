import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHaptics } from '@demo/shared';
import {} from '@nativescript/haptics';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHaptics {}
