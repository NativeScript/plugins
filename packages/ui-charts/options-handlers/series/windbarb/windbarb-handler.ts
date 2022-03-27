import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function windbarbHandler(windbarbOptions) {
	const windbarbSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		dataGrouping: 'HIDataGrouping',
		depth: 'number',
		edgeColor: 'HIColor',
		edgeWidth: 'number',
		groupPadding: 'number',
		groupZPadding: 'number',
		grouping: 'number',
		maxPointWidth: 'number',
		minPointLength: 'number',
		onSeries: 'string',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		vectorLength: 'number',
		xOffset: 'number',
		yOffset: 'number',
	};

	if (windbarbOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of windbarbOptions) {
			const windbarb = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWindbarb() : new HIWindbarb();
			seriesArr.push(seriesHandler(opts, optionsBuilder(windbarbSchema, opts, windbarb)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const windbarb = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWindbarb() : new HIWindbarb();
		return seriesHandler(windbarbOptions, optionsBuilder(windbarbSchema, windbarbOptions, windbarb));
	}
}
