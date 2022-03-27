import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function packedbubbleHandler(packedbubbleOptions) {
	const packedbubbleSchema = {
		displayNegative: 'number',
		draggable: 'number',
		layoutAlgorithm: 'HILayoutAlgorithm',
		maxSize: 'number',
		minSize: 'number',
		parentNode: 'HIParentNode',
		sizeBy: 'string',
		useSimulation: 'number',
		zThreshold: 'number',
	};

	if (packedbubbleOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of packedbubbleOptions) {
			const packedbubble = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPackedbubble() : new HIPackedbubble();
			seriesArr.push(seriesHandler(opts, optionsBuilder(packedbubbleSchema, opts, packedbubble)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const packedbubble = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPackedbubble() : new HIPackedbubble();
		return seriesHandler(packedbubbleOptions, optionsBuilder(packedbubbleSchema, packedbubbleOptions, packedbubble));
	}
}
