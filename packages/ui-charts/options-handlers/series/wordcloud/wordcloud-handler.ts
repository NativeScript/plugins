import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function wordcloudHandler(wordcloudOptions) {
	const wordcloudSchema = {
		allowExtendPlayingField: 'number',
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		edgeWidth: 'number',
		maxFontSize: 'number',
		minFontSize: 'number',
		placementStrategy: 'string',
		rotation: 'HIRotation',
		spiral: 'string',
		style: 'HICSSObject',
	};

	if (wordcloudOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of wordcloudOptions) {
			const wordcloud = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWordcloud() : new HIWordcloud();
			seriesArr.push(seriesHandler(opts, optionsBuilder(wordcloudSchema, opts, wordcloud)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const wordcloud = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIWordcloud() : new HIWordcloud();
		return seriesHandler(wordcloudOptions, optionsBuilder(wordcloudSchema, wordcloudOptions, wordcloud));
	}
}
