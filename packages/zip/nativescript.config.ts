import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'ZipArchive',
				libs: ['ZipArchive'],
				repositoryURL: 'https://github.com/ZipArchive/ZipArchive',
				version: '2.6.0',
			},
		],
	},
} as NativeScriptConfig;
