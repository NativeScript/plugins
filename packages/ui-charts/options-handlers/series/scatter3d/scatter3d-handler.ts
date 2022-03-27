import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function scatter3dHandler(scatter3dOptions) {
	const scatter3dSchema = {
		jitter: 'HIJitter',
	};

	if (scatter3dOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of scatter3dOptions) {
			const scatter3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIScatter3d() : new HIScatter3d();
			seriesArr.push(seriesHandler(opts, optionsBuilder(scatter3dSchema, opts, scatter3d)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const scatter3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIScatter3d() : new HIScatter3d();
		return seriesHandler(scatter3dOptions, optionsBuilder(scatter3dSchema, scatter3dOptions, scatter3d));
	}
}
