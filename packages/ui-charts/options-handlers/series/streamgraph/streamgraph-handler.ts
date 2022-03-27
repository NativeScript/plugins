import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function streamgraphHandler(streamgraphOptions) {
	const streamgraphSchema = {
		fillColor: 'HIColor',
		fillOpacity: 'number',
		lineColor: 'HIColor',
		negativeFillColor: 'HIColor',
		trackByArea: 'number',
	};

	if (streamgraphOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of streamgraphOptions) {
			const streamgraph = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIStreamgraph() : new HIStreamgraph();
			seriesArr.push(seriesHandler(opts, optionsBuilder(streamgraphSchema, opts, streamgraph)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const streamgraph = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIStreamgraph() : new HIStreamgraph();
		return seriesHandler(streamgraphOptions, optionsBuilder(streamgraphSchema, streamgraphOptions, streamgraph));
	}
}
