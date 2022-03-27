import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function plotBandsHandler(plotBandsOptions) {
	const plotbands = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotBands() : new HIPlotBands();

	const plotBandSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		className: 'string',
		color: 'HIColor',
		events: 'HIEvents',
		from: 'number',
		id: 'string',
		innerRadius: 'string',
		label: 'HILabel',
		outerRadius: 'string',
		thickness: 'string',
		to: 'number',
		zIndex: 'number',
	};

	if (plotBandsOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of plotBandsOptions) {
			const plotBand = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotBands() : new HIPlotBands();
			seriesArr.push(optionsBuilder(plotBandSchema, opts, plotBand));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const plotBand = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPlotBands() : new HIPlotBands();
		return optionsBuilder(plotBandSchema, plotBandsOptions, plotBand);
	}
}
