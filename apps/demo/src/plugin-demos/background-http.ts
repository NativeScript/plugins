import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBackgroundHttp } from '@demo/shared';
import {} from '@nativescript/background-http';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBackgroundHttp {}
