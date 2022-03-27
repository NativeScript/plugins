import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function paretoHandler(paretoOptions) {
	const paretoSchema = {
		baseSeries: 'number',
	};

	if (paretoOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of paretoOptions) {
			const pareto = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPareto() : new HIPareto();
			seriesArr.push(seriesHandler(opts, optionsBuilder(paretoSchema, opts, pareto)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const pareto = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPareto() : new HIPareto();
		return seriesHandler(paretoOptions, optionsBuilder(paretoSchema, paretoOptions, pareto));
	}
}
