import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedIonicPortals } from '@demo/shared';
import { } from '@nativescript/ionic-portals';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedIonicPortals {

}
