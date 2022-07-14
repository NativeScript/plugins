import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedVideoAdvanced } from '@demo/shared';
import {} from '@nativescript/video-advanced';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedVideoAdvanced {}
