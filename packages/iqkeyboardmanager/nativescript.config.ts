import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'IQKeyboardManagerSwift',
				libs: ['IQKeyboardManagerSwift'],
				repositoryURL: 'https://github.com/hackiftekhar/IQKeyboardManager.git',
				version: '8.0.2',
			},
		],
	},
} as NativeScriptConfig;
