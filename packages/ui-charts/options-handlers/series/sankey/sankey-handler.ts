import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function sankeyHandler(sankeyOptions) {
	const sankeySchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		curveFactor: 'number',
		levels: 'HILevels', // array
		linkOpacity: 'number',
		minLinkWidth: 'number',
		nodePadding: 'number',
		nodeWidth: 'number',
		nodes: 'HINodes', // array
	};

	if (sankeyOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of sankeyOptions) {
			const sankey = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISankey() : new HISankey();
			seriesArr.push(seriesHandler(opts, optionsBuilder(sankeySchema, opts, sankey)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const sankey = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISankey() : new HISankey();
		return seriesHandler(sankeyOptions, optionsBuilder(sankeySchema, sankeyOptions, sankey));
	}
}
