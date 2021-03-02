import { IOSDebugFlexCommon } from './common';
declare var FLEXManager;
export class IOSDebugFlex extends IOSDebugFlexCommon {
	static show() {
		FLEXManager.sharedManager.showExplorer();
	}
}
