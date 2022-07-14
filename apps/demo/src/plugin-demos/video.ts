import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedVideo } from '@demo/shared';
import {} from '@nativescript/video';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedVideo {}
