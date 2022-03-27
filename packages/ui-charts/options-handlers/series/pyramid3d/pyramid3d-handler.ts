import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function pyramid3dHandler(pyramid3dOptions) {
	const pyramid3dSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		depth: 'number',
		edgeColor: 'HIColor',
		edgeWidth: 'number',
		gradientForSides: 'number',
		groupPadding: 'number',
		groupZPadding: 'number',
		grouping: 'number',
		height: 'number',
		maxPointWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		reversed: 'number',
		width: 'number',
	};

	if (pyramid3dOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of pyramid3dOptions) {
			const pyramid3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPyramid3d() : new HIPyramid3d();
			seriesArr.push(seriesHandler(opts, optionsBuilder(pyramid3dSchema, opts, pyramid3d)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const pyramid3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPyramid3d() : new HIPyramid3d();
		return seriesHandler(pyramid3dOptions, optionsBuilder(pyramid3dSchema, pyramid3dOptions, pyramid3d));
	}
}
