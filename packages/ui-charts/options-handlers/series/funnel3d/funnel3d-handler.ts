import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function funnel3dHandler(funnel3dOptions) {
	const funnel3dSchema = {
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
		neckHeight: 'number',
		neckWidth: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		reversed: 'number',
		width: 'number',
	};

	if (funnel3dOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of funnel3dOptions) {
			const funnel3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFunnel3d() : new HIFunnel3d();
			seriesArr.push(seriesHandler(opts, optionsBuilder(funnel3dSchema, opts, funnel3d)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const funnel3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFunnel3d() : new HIFunnel3d();
		return seriesHandler(funnel3dOptions, optionsBuilder(funnel3dSchema, funnel3dOptions, funnel3d));
	}
}
