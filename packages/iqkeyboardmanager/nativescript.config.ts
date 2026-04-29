import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'IQKeyboardManagerSwift',
				libs: ['IQKeyboardManagerSwift'],
				repositoryURL: 'https://github.com/ackiftekhar/IQKeyboardManager.git',
				version: '6.5.11',
			},
		],
	},
} as NativeScriptConfig;
