import { Observable, EventData, Page } from '@nativescript/core';
import { RoomCaptureView } from '@nativescript/roomplan';
import { shareText } from '@nativescript/social-share';

export function shownModally(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

let roomCaptureView: RoomCaptureView;

export function loadedRoomCaptureView(args) {
	console.log('loadedRoomCaptureView!');
	roomCaptureView = args.object;
	console.log('roomCaptureView.start:', roomCaptureView.start);
}

export class DemoModel extends Observable {
	scanning = true;

	constructor(public page: Page) {
		super();
	}

	cancel() {
		this.page.closeModal();
	}
	done() {
		if (this.scanning) {
			roomCaptureView.stop();
			this.scanning = false;
			this.notifyPropertyChange('scanning', this.scanning);
		} else {
			this.page.closeModal();
		}
	}
}
