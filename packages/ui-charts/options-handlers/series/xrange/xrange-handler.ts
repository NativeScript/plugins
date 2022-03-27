import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function xrangeHandler(xrangeOptions) {
	const xrangeSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		groupPadding: 'number',
		groupZPadding: 'number',
		grouping: 'number',
		maxPointWidth: 'number',
		minPointLength: 'number',
		partialFill: 'HIPartialFill',
		pointPadding: 'number',
		pointWidth: 'number',
	};

	if (xrangeOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of xrangeOptions) {
			const xrange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIXrange() : new HIXrange();
			seriesArr.push(seriesHandler(opts, optionsBuilder(xrangeSchema, opts, xrange)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const xrange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIXrange() : new HIXrange();
		return seriesHandler(xrangeOptions, optionsBuilder(xrangeSchema, xrangeOptions, xrange));
	}
}
