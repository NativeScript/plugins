import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function columnrangeHandler(columnrangeOptions) {
	const columnrangeSchema = {
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
		pointRange: 'number', // figure out range type
		pointWidth: 'number',
	};

	if (columnrangeOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of columnrangeOptions) {
			const columnrange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumnrange() : new HIColumnrange();
			seriesArr.push(seriesHandler(opts, optionsBuilder(columnrangeSchema, opts, columnrange)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const columnrange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumnrange() : new HIColumnrange();
		return seriesHandler(columnrangeOptions, optionsBuilder(columnrangeSchema, columnrangeOptions, columnrange));
	}
}
