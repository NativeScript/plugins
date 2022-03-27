import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function vennHandler(vennOptions) {
	const vennSchema = {
		borderDashStyle: 'string',
		brighten: 'number',
		cluster: 'HICluster',
		colorByPoint: 'number',
	};

	if (vennOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of vennOptions) {
			const venn = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVenn() : new HIVenn();
			seriesArr.push(seriesHandler(opts, optionsBuilder(vennSchema, opts, venn)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const venn = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVenn() : new HIVenn();
		return seriesHandler(vennOptions, optionsBuilder(vennSchema, vennOptions, venn));
	}
}
