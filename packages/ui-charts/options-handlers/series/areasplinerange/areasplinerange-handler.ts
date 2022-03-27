import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function areasplinerangeHandler(areasplinerangeOptions) {
	const areasplinerangeSchema = {
		fillColor: 'HIColor',
		fillOpacity: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		trackByArea: 'number',
	};

	if (areasplinerangeOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of areasplinerangeOptions) {
			const areasplinerange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAreasplinerange() : new HIAreasplinerange();
			seriesArr.push(seriesHandler(opts, optionsBuilder(areasplinerangeSchema, opts, areasplinerange)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const areasplinerange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAreasplinerange() : new HIAreasplinerange();
		return seriesHandler(areasplinerangeOptions, optionsBuilder(areasplinerangeSchema, areasplinerangeOptions, areasplinerange));
	}
}
