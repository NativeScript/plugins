import { Observable, EventData, Page } from '@nativescript/core';
import { shareText } from '@nativescript/social-share';

export function shownModally(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	shareThis() {
		shareText('hello');
	}
}
