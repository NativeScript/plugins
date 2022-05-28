import { Observable, EventData, Page, ShowModalOptions } from '@nativescript/core';
import { DemoSharedSocialShare } from '@demo/shared';
import {} from '@nativescript/social-share';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedSocialShare {
	constructor(protected page: Page) {
		super();
	}

	openModal() {
		this.page.showModal('modals/modal-social-share', <ShowModalOptions>{
			fullscreen: false,
		});
	}
}
