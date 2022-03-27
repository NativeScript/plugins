import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function treemapHandler(treemapOptions) {
	const treemapSchema = {
		allowTraversingTree: 'number',
		alternateStartingDirection: 'number',
		cluster: 'HICluster',
		colorByPoint: 'number',
		colors: 'HIColor',
		ignoreHiddenPoint: 'number',
		interactByLeaf: 'number',
		layoutAlgorithm: 'string',
		layoutStartingDirection: 'string',
		levelIsConstant: 'number',
		levels: 'HILevels', // array
		sortIndex: 'number',
		traverseUpButton: 'HITraverseUpButton',
	};

	if (treemapOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of treemapOptions) {
			const treemap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITreemap() : new HITreemap();
			seriesArr.push(seriesHandler(opts, optionsBuilder(treemapSchema, opts, treemap)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const treemap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITreemap() : new HITreemap();
		return seriesHandler(treemapOptions, optionsBuilder(treemapSchema, treemapOptions, treemap));
	}
}
