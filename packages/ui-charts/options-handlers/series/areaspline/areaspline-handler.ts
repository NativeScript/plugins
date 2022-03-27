import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function areasplineHandler(areasplineOptions) {
	const areasplineSchema = {
		fillColor: 'HIColor',
		fillOpacity: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		trackByArea: 'number',
	};

	if (areasplineOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of areasplineOptions) {
			const areaspline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAreaspline() : new HIAreaspline();
			seriesArr.push(seriesHandler(opts, optionsBuilder(areasplineSchema, opts, areaspline)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const areaspline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAreaspline() : new HIAreaspline();
		return seriesHandler(areasplineOptions, optionsBuilder(areasplineSchema, areasplineOptions, areaspline));
	}
}
