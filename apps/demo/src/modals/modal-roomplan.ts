import { Observable, EventData, Page, Dialogs, knownFolders, path } from '@nativescript/core';
import { RoomCaptureView } from '@nativescript/roomplan';
import { shareText } from '@nativescript/social-share';

export function shownModally(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new RoomPlanModel(page);
}

let roomCaptureView: RoomCaptureView;

export function loadedRoomCaptureView(args) {
	roomCaptureView = args.object;
}

export class RoomPlanModel extends Observable {
	scanning = true;

	constructor(public page: Page) {
		super();
	}

	cancel() {
		this.page.closeModal();
	}

	done() {
		if (this.scanning) {
			this.scanning = false;
			this.notifyPropertyChange('scanning', this.scanning);
			roomCaptureView.stop();
		} else {
			this.save();
		}
	}

	save() {
		Dialogs.prompt({
			title: 'Save 3D Room Model?',
			message: 'Please type the name for the model...',
			defaultText: 'my-room',
			okButtonText: 'Save',
			cancelButtonText: 'Cancel',
		}).then((value) => {
			if (value.result && value.text) {
				const filePath = path.join(knownFolders.documents().path, `${value.text}.usdz`);
				roomCaptureView.export(filePath, (outputPath) => {
					this.page.closeModal(outputPath);
				});
			} else {
				this.page.closeModal();
			}
		});
	}
}
