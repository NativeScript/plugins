import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'io.github.triniwiz.plugindemo',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	appPath: 'src',
	cli: {
		packageManager: 'npm',
	},
	hooks: [
		{
			type: 'before-prepare',
			script: '../../tools/scripts/before-prepare.js',
		},
	],
} as NativeScriptConfig;
