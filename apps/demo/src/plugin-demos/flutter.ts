import { Observable, EventData, Page, ShowModalOptions } from '@nativescript/core';
import { DemoSharedFlutter } from '@demo/shared';
import {} from '@nativescript/flutter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedFlutter {
	constructor(protected page: Page) {
		super();
	}

	openFlutter() {
		this.page.showModal('modals/modal-flutter', <ShowModalOptions>{
			fullscreen: false,
		});
	}
}
