import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function timelineHandler(timelineOptions) {
	const timelineSchema = {
		colorByPoint: 'number',
		ignoreHiddenPoint: 'number',
		legendType: 'string',
	};

	if (timelineOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of timelineOptions) {
			const timeline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITimeline() : new HITimeline();
			seriesArr.push(seriesHandler(opts, optionsBuilder(timelineSchema, opts, timeline)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const timeline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITimeline() : new HITimeline();
		return seriesHandler(timelineOptions, optionsBuilder(timelineSchema, timelineOptions, timeline));
	}
}
