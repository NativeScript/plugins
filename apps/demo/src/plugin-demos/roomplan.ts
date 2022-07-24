import { Observable, EventData, Page, ShowModalOptions } from '@nativescript/core';
import { DemoSharedRoomplan } from '@demo/shared';
import {} from '@nativescript/roomplan';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedRoomplan {
	constructor(public page: Page) {
		super();
	}

	openModal() {
		this.page.showModal('modals/modal-roomplan', <ShowModalOptions>{
			fullscreen: true,
		});
	}
}
