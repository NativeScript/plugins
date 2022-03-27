import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function waterfallHandler(waterfallOptions) {
	const waterfallSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		depth: 'number',
		edgeColor: 'HIColor',
		edgeWidth: 'number',
		groupPadding: 'number',
		groupZPadding: 'number',
		grouping: 'number',
		lineColor: 'HIColor',
		maxPointWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		upColor: 'HIColor',
	};

	if (waterfallOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of waterfallOptions) {
			const waterfall = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWaterfall() : new HIWaterfall();
			seriesArr.push(seriesHandler(opts, optionsBuilder(waterfallSchema, opts, waterfall)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const waterfall = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWaterfall() : new HIWaterfall();
		return seriesHandler(waterfallOptions, optionsBuilder(waterfallSchema, waterfallOptions, waterfall));
	}
}
