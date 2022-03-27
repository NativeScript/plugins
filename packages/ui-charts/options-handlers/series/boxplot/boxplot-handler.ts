import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function boxplotHandler(boxplotOptions) {
	const boxplotSchema = {
		boxDashStyle: 'string',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		depth: 'number',
		edgeColor: 'HIColor',
		edgeWidth: 'number',
		fillColor: 'HIColor',
		groupPadding: 'number',
		grouping: 'number',
		maxPointWidth: 'number',
		medianColor: 'HIColor',
		medianDashStyle: 'string',
		medianWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		stemDashStyle: 'string',
		stemWidth: 'number',
		whiskerColor: 'HIColor',
		whiskerDashStyle: 'string',
		whiskerLength: 'number',
		whiskerWidth: 'number',
	};

	if (boxplotOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of boxplotOptions) {
			const boxplot = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBoxplot() : new HIBoxplot();
			seriesArr.push(seriesHandler(opts, optionsBuilder(boxplotSchema, opts, boxplot)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const boxplot = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBoxplot() : new HIBoxplot();
		return seriesHandler(boxplotOptions, optionsBuilder(boxplotSchema, boxplotOptions, boxplot));
	}
}
