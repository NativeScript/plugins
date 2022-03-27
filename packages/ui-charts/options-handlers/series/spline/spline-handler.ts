import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function splineHandler(splineOptions) {
	if (splineOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of splineOptions) {
			const spline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISpline() : new HISpline();
			seriesArr.push(seriesHandler(opts, spline));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const spline = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISpline() : new HISpline();
		return seriesHandler(splineOptions, spline);
	}
}
