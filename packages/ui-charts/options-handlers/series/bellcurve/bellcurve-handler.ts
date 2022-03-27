import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function bellcurveHandler(bellcurveOptions) {
	const bellcurveSchema = {
		baseSeries: 'number',
		fillColor: 'HIColor',
		fillOpacity: 'number',
		intervals: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		pointsInInterval: 'number',
		trackByArea: 'number',
	};

	if (bellcurveOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of bellcurveOptions) {
			const bellcurve = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBellcurve() : new HIBellcurve();
			seriesArr.push(seriesHandler(opts, optionsBuilder(bellcurveSchema, opts, bellcurve)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const bellcurve = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBellcurve() : new HIBellcurve();
		return seriesHandler(bellcurveOptions, optionsBuilder(bellcurveSchema, bellcurveOptions, bellcurve));
	}
}
