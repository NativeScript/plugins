import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGoogleMapsUtils } from '@demo/shared';
import { } from '@nativescript/google-maps-utils';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGoogleMapsUtils {
	
}
