import { RoomCaptureViewCommon } from './common';

export class RoomCaptureView extends RoomCaptureViewCommon {
	private roomPlan: NSCRoomPlan;

	createNativeView() {
		this.roomPlan = NSCRoomPlan.alloc().init();
		return this.roomPlan.view;
	}

	start() {
		this.roomPlan.startSession();
	}

	stop() {
		this.roomPlan.stopSession();
	}

	export(filePath: string, callback?: (outputPath: string) => void) {
		this.roomPlan.exportResultsWithFilePathCallback(filePath, callback);
	}
}
