import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function columnHandler(columnOptions) {
	const columnSchema = {
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

	if (columnOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of columnOptions) {
			const column = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumn() : new HIColumn();
			seriesArr.push(seriesHandler(opts, optionsBuilder(columnSchema, opts, column)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const column = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIColumn() : new HIColumn();
		return seriesHandler(columnOptions, optionsBuilder(columnSchema, columnOptions, column));
	}
}
