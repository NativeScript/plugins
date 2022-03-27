import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { optionsBuilder, convertJSArrayToNative } from '../../helpers/helpers';

export function barHandler(barOptions) {
	const barSchema = {
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
		maxPointWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
	};

	if (barOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of barOptions) {
			const bar = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBar() : new HIBar();

			seriesArr.push(seriesHandler(opts, optionsBuilder(barSchema, opts, bar)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const bar = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBar() : new HIBar();

		return seriesHandler(barOptions, optionsBuilder(barSchema, barOptions, bar));
	}
}
