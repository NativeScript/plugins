import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function arearangeHandler(arearangeOptions) {
	const arearangeSchema = {
		fillColor: 'HIColor',
		fillOpacity: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		trackByArea: 'number',
	};

	if (arearangeOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of arearangeOptions) {
			const arearange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIArearange() : new HIArearange();
			seriesArr.push(seriesHandler(opts, optionsBuilder(arearangeSchema, opts, arearange)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const arearange = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIArearange() : new HIArearange();
		return seriesHandler(arearangeOptions, optionsBuilder(arearangeSchema, arearangeOptions, arearange));
	}
}
