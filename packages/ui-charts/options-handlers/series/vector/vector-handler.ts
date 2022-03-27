import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function vectorHandler(vectorOptions) {
	const vectorSchema = {
		cluster: 'HICluster',
		rotationOrigin: 'string',
		vectorLength: 'number',
	};

	if (vectorOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of vectorOptions) {
			const vector = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVector() : new HIVector();
			seriesArr.push(seriesHandler(opts, optionsBuilder(vectorSchema, opts, vector)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const vector = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIVector() : new HIVector();
		return seriesHandler(vectorOptions, optionsBuilder(vectorSchema, vectorOptions, vector));
	}
}
