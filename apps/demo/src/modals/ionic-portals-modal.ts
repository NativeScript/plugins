import { Observable, EventData, Page } from '@nativescript/core';
import { } from '@nativescript/ionic-portals';

export function onShownModally(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new ModalView(page);
}

export class ModalView extends Observable {
	constructor(private page: Page) {
		super();
	}
}
