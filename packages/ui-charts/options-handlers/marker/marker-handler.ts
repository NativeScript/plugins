import { isAndroid } from '@nativescript/core';
import { optionsBuilder } from '../helpers/helpers';

export function markerHandler(markerOptions) {
	const marker = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIMarker() : new HIMarker();

	const markerSchema = {
		animation: 'HIAnimationOptionsObject',
		color: 'HIColor',
		enabled: 'number',
		enabledThreshold: 'number',
		fillColor: 'HIColor',
		fillOpacity: 'number',
		height: 'number',
		lineColor: 'string',
		lineWidth: 'number',
		radius: 'number',
		states: 'HIStates',
		symbol: 'string',
		width: 'number',
	};

	return optionsBuilder(markerSchema, markerOptions, marker);
}
