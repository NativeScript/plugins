declare const __non_webpack_require__;
import { Utils } from '@nativescript/core';

// load with system before requiring which calls dlopen
java.lang.System.loadLibrary('mmkvmetal');

__non_webpack_require__('system_lib://libmmkvmetal.so');

export function initialize(path) {
	if (typeof path === 'string') {
		NSCMMKV.initialize(path);
	} else {
		const root = Utils.android.getApplicationContext().getFilesDir().getAbsolutePath() + '/mmkv';
		NSCMMKV.initialize(root);
	}
}

export const NSCMMKV = global.NSCMMKV;
