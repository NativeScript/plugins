import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function sunburstHandler(sunburstOptions) {
	const sunburstSchema = {
		allowTraversingTree: 'number',
		borderColor: 'HIColor',
		borderWidth: 'number',
		center: 'Array',
		colorByPoint: 'number',
		colors: 'HIColor',
		fillColor: 'HIColor',
		levelIsConstant: 'number',
		levelSize: 'HILevelSize',
		levels: 'HILevels', // array
		rootId: 'string',
		size: 'number',
		slicedOffset: 'number',
		startAngle: 'number',
		traverseUpButton: 'HITraverseUpButton',
	};

	if (sunburstOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of sunburstOptions) {
			const sunburst = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISunburst() : new HISunburst();
			seriesArr.push(seriesHandler(opts, optionsBuilder(sunburstSchema, opts, sunburst)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const sunburst = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISunburst() : new HISunburst();
		return seriesHandler(sunburstOptions, optionsBuilder(sunburstSchema, sunburstOptions, sunburst));
	}
}
