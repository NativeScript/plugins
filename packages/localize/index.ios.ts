import { vsprintf } from 'sprintf-js';
import { ApplicationSettings } from '@nativescript/core';

import { convertAtSignToStringSign } from './placeholder';
import { encodeKey } from './resource';

let bundle;

const getBundle = (function () {
	return function () {
		if (!bundle) {
			bundle = NSBundle.mainBundle;
		}
		return bundle;
	};
})();

export function localize(key: string, ...args: string[]): string {
	let localizedString;
	try {
		localizedString = getBundle().localizedStringForKeyValueTable(encodeKey(key), key, null);
	} catch (error) {
		localizedString = key;
	}
	return vsprintf(convertAtSignToStringSign(localizedString), args);
}

export function androidLaunchEventLocalizationHandler() {
	// dummy
}

export function overrideLocale(locale: string): boolean {
	let language_code = locale.substring(0, 2)
	if (locale.indexOf('-') < 0 && locale.length == 3) {
		language_code = locale
	}

	const path = NSBundle.mainBundle.pathForResourceOfType(language_code, 'lproj');

	if (!path) {
		return false;
	}

	bundle = NSBundle.bundleWithPath(path);
	NSUserDefaults.standardUserDefaults.setObjectForKey([locale], 'AppleLanguages');
	NSUserDefaults.standardUserDefaults.synchronize();
	ApplicationSettings.setString('__app__language__', language_code);

	return true;
}
