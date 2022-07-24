import { callbackProperty, RoomCaptureViewCommon } from './common';

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

	[callbackProperty.setNative](value: (filePath: string) => void) {
		this.roomPlan.callback = value;
	}
}
