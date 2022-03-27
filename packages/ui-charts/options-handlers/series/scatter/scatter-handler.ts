import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function scatterHandler(scatterOptions) {
	const scatterSchema = {
		cluster: 'HICluster',
		jitter: 'HIJitter',
	};

	if (scatterOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of scatterOptions) {
			const scatter = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIScatter() : new HIScatter();
			seriesArr.push(seriesHandler(opts, optionsBuilder(scatterSchema, opts, scatter)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const scatter = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIScatter() : new HIScatter();
		return seriesHandler(scatterOptions, optionsBuilder(scatterSchema, scatterOptions, scatter));
	}
}
