import { Observable, EventData, Page, Dialogs, knownFolders, path } from '@nativescript/core';
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
			Dialogs.prompt({
				title: 'Save 3D Room Model?',
				message: 'Please type the name for the model...',
				defaultText: 'my-room',
				okButtonText: 'Save',
				cancelButtonText: 'Cancel',
			}).then((value) => {
				if (value.result && value.text) {
					roomCaptureView.export(path.join(knownFolders.documents().path, `${value.text}.usdz`), (outputPath) => {
						this.page.closeModal(outputPath);
					});
				} else {
					this.page.closeModal();
				}
			});
		}
	}
}
