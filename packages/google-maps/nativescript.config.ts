import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'GoogleMaps',
				libs: ['GoogleMaps'],
				repositoryURL: 'https://github.com/googlemaps/ios-maps-sdk',
				version: '10.15.0',
			},
		],
	},
} as NativeScriptConfig;
