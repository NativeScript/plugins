import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function bulletHandler(bulletOptions) {
	const bulletSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		depth: 'number',
		edgeColor: 'HIColor',
		edgeWidth: 'number',
		groupPadding: 'number',
		groupZPadding: 'number',
		grouping: 'number',
		maxPointWidth: 'number',
		minPointLength: 'number',
		pointPadding: 'number',
		pointRange: 'number',
		pointWidth: 'number',
		targetOptions: 'HITargetOptions',
	};

	if (bulletOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of bulletOptions) {
			const bullet = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBullet() : new HIBullet();
			seriesArr.push(seriesHandler(opts, optionsBuilder(bulletSchema, opts, bullet)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const bullet = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBullet() : new HIBullet();
		return seriesHandler(bulletOptions, optionsBuilder(bulletSchema, bulletOptions, bullet));
	}
}
