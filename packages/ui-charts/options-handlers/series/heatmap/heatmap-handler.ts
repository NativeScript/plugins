import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function heatmapHandler(heatmapOptions) {
	const heatmapSchema = {
		colsize: 'number',
		nullColor: 'HIColor',
		pointPadding: 'number',
		rowsize: 'number',
	};

	if (heatmapOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of heatmapOptions) {
			const heatmap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIHeatmap() : new HIHeatmap();
			seriesArr.push(seriesHandler(opts, optionsBuilder(heatmapSchema, opts, heatmap)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const heatmap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIHeatmap() : new HIHeatmap();
		return seriesHandler(heatmapOptions, optionsBuilder(heatmapSchema, heatmapOptions, heatmap));
	}
}
