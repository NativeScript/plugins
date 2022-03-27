import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function plotLinesHandler(plotLineOptions) {
	const plotLinesSchema = {
		className: 'string',
		color: 'HIColor',
		dashStyle: 'string',
		events: 'HIEvents',
		id: 'string',
		label: 'HILabel',
		value: 'number',
		width: 'number',
		zIndex: 'number',
	};

	if (plotLineOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of plotLineOptions) {
			const plotBand = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotLines() : new HIPlotLines();
			seriesArr.push(optionsBuilder(plotLinesSchema, opts, plotBand));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const plotBand = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotLines() : new HIPlotLines();
		return optionsBuilder(plotLinesSchema, plotLineOptions, plotBand);
	}
}
