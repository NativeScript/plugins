import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'ZipArchive',
				libs: ['ZipArchive'],
				repositoryURL: 'https://github.com/NathanWalker/ZipArchive',
				version: '3.0.0',
			},
		],
	},
} as NativeScriptConfig;
