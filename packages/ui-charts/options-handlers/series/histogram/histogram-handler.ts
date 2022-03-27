import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function histogramHandler(histogramOptions) {
	const histogramSchema = {
		baseSeries: 'number',
		binWidth: 'number',
		binsNumber: 'number',
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

	if (histogramOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of histogramOptions) {
			const histogram = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIHistogram() : new HIHistogram();
			seriesArr.push(seriesHandler(opts, optionsBuilder(histogramSchema, opts, histogram)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const histogram = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIHistogram() : new HIHistogram();
		return seriesHandler(histogramOptions, optionsBuilder(histogramSchema, histogramOptions, histogram));
	}
}
