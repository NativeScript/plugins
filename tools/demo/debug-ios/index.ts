import { DemoSharedBase } from '../utils';
import { NativeScriptDebugIOS } from '@nativescript/debug-ios';

export class DemoSharedDebugIOS extends DemoSharedBase {
	testIt() {
		NativeScriptDebugIOS.show();
	}
}
