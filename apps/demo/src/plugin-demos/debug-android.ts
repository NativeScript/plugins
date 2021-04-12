import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedDebugAndroid } from '@demo/shared';
import {} from '@nativescript/debug-android';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedDebugAndroid {}
