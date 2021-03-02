import { DemoSharedBase } from '../utils';
import { IOSDebugFlex } from '@nativescript/ios-debug-flex';

export class DemoSharedIosDebugFlex extends DemoSharedBase {
	testIt() {
		IOSDebugFlex.show();
	}
}
