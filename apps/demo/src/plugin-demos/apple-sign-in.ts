import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppleSignIn } from '@demo/shared';
import { } from '@nativescript/apple-sign-in';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}


export class DemoModel extends DemoSharedAppleSignIn {
	login(args) {
		console.log('login');
	}
}
