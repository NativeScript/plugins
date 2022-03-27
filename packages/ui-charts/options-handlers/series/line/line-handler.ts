import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative } from '../../helpers/helpers';

export function lineHandler(lineOptions) {
	if (lineOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of lineOptions) {
			const line = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILine() : new HILine();
			seriesArr.push(seriesHandler(opts, line));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const line = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILine() : new HILine();
		return seriesHandler(lineOptions, line);
	}
}
