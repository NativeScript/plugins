import { Observable, EventData, Page, ShowModalOptions } from '@nativescript/core';
import { DemoSharedFlutter } from '@demo/shared';
import { Flutter } from '@nativescript/flutter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedFlutter {
	flutter: Flutter;

	constructor(protected page: Page) {
		super();
	}

	openFlutter() {
		this.page.showModal('modals/modal-flutter', <ShowModalOptions>{
			fullscreen: false,
		});
	}

	loadedFlutter(args) {
		this.flutter = args.object;
	}
}
