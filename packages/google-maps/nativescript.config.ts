import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'GoogleMaps',
				libs: ['GoogleMaps'],
				version: '10.12.0',
				repositoryURL: 'https://github.com/googlemaps/ios-maps-sdk.git',
			},
		],
	},
} as NativeScriptConfig;
