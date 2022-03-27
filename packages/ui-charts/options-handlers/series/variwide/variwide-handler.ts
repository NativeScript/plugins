import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function variwideHandler(variwideOptions) {
	const variwideSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
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

	if (variwideOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of variwideOptions) {
			const variwide = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVariwide() : new HIVariwide();
			seriesArr.push(seriesHandler(opts, optionsBuilder(variwideSchema, opts, variwide)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const variwide = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVariwide() : new HIVariwide();
		return seriesHandler(variwideOptions, optionsBuilder(variwideSchema, variwideOptions, variwide));
	}
}
