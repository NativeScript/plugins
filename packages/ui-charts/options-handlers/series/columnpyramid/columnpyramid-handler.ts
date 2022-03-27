import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function columnpyramidHandler(columnpyramidOptions) {
	const columnpyramidSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		groupPadding: 'number',
		grouping: 'number',
		maxPointWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
	};

	if (columnpyramidOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of columnpyramidOptions) {
			const columnpyramid = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumnpyramid() : new HIColumnpyramid();
			seriesArr.push(seriesHandler(opts, optionsBuilder(columnpyramidSchema, opts, columnpyramid)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const columnpyramid = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumnpyramid() : new HIColumnpyramid();
		return seriesHandler(columnpyramidOptions, optionsBuilder(columnpyramidSchema, columnpyramidOptions, columnpyramid));
	}
}
