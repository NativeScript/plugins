import { Observable, EventData, Page } from '@nativescript/core';
import { available } from '@nativescript/appavailability';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	testIt() {
		available('twitter://').then((avail: boolean) => {
			alert('Twitter app available? ' + avail);
		});
	}
}
