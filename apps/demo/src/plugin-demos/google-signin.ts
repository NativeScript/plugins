import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGoogleSignin } from '@demo/shared';
import { } from '@nativescript/google-signin';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGoogleSignin {
	
}
