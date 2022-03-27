import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function variablepieHandler(variablepieOptions) {
	const variablepieSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		center: 'Array',
		colors: 'HIColor',
		depth: 'number',
		endAngle: 'number',
		fillColor: 'HIColor',
		ignoreHiddenPoint: 'number',
		innerSize: 'number',
		maxPointSize: 'number',
		minPointSize: 'number',
		minSize: 'number',
		size: 'number',
		sizeBy: 'string',
		slicedOffset: 'number',
		startAngle: 'number',
		zMax: 'number',
		zMin: 'number',
	};

	if (variablepieOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of variablepieOptions) {
			const variablepie = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVariablepie() : new HIVariablepie();
			seriesArr.push(seriesHandler(opts, optionsBuilder(variablepieSchema, opts, variablepie)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const variablepie = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVariablepie() : new HIVariablepie();
		return seriesHandler(variablepieOptions, optionsBuilder(variablepieSchema, variablepieOptions, variablepie));
	}
}
