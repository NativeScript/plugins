import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { optionsBuilder, convertJSArrayToNative } from '../../helpers/helpers';

export function areaHandler(areaOptions) {
	const areaSchema = {
		fillColor: 'HIColor',
		fillOpacity: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		trackByArea: 'number',
	};

	if (areaOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of areaOptions) {
			const area = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIArea() : new HIArea();

			seriesArr.push(seriesHandler(opts, optionsBuilder(areaSchema, opts, area)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const area = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIArea() : new HIArea();

		return seriesHandler(areaOptions, optionsBuilder(areaSchema, areaOptions, area));
	}
}
