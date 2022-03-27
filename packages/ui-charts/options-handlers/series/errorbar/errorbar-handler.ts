import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function errorbarHandler(errorbarOptions) {
	const errorbarSchema = {
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

	if (errorbarOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of errorbarOptions) {
			const errorbar = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIErrorbar() : new HIErrorbar();
			seriesArr.push(seriesHandler(opts, optionsBuilder(errorbarSchema, opts, errorbar)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const errorbar = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIErrorbar() : new HIErrorbar();
		return seriesHandler(errorbarOptions, optionsBuilder(errorbarSchema, errorbarOptions, errorbar));
	}
}
