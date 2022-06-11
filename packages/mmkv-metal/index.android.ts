declare const __non_webpack_require__;
import { Utils } from '@nativescript/core';

try {
	java.lang.System.loadLibrary('mmkvmetal');
} catch (error) {
	console.log(error);
}

__non_webpack_require__(`${(Utils.android.getApplicationContext() as android.content.Context).getApplicationInfo().nativeLibraryDir}/libmmkvmetal.so`);

const initialize = global.NSCMMKV.initialize;
global.NSCMMKV.initialize = function (path) {
	if (typeof path === 'string') {
		initialize(path);
	} else {
		const root = Utils.android.getApplicationContext().getFilesDir().getAbsolutePath() + '/mmkv';
		initialize(root);
	}
};

export const NSCMMKV = global.NSCMMKV;
