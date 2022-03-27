import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function tilemapHandler(tilemapOptions) {
	const tilemapSchema = {
		colsize: 'number',
		nullColor: 'HIColor',
		pointPadding: 'number',
		rowsize: 'number',
		tileShape: 'string',
	};

	if (tilemapOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of tilemapOptions) {
			const tilemap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITilemap() : new HITilemap();
			seriesArr.push(seriesHandler(opts, optionsBuilder(tilemapSchema, opts, tilemap)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const tilemap = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITilemap() : new HITilemap();
		return seriesHandler(tilemapOptions, optionsBuilder(tilemapSchema, tilemapOptions, tilemap));
	}
}
