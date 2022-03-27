import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function bubbleHandler(bubbleOptions) {
	const bubbleSchema = {
		displayNegative: 'number',
		jitter: 'HIJitter',
		maxSize: 'number',
		minSize: 'number',
		sizeBy: 'string',
		sizeByAbsoluteValue: 'number',
		zMax: 'number',
		zMin: 'number',
		zThreshold: 'number',
	};

	if (bubbleOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of bubbleOptions) {
			const bubble = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBubble() : new HIBubble();
			seriesArr.push(seriesHandler(opts, optionsBuilder(bubbleSchema, opts, bubble)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const bubble = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBubble() : new HIBubble();
		return seriesHandler(bubbleOptions, optionsBuilder(bubbleSchema, bubbleOptions, bubble));
	}
}
