import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function pyramidHandler(pyramidOptions) {
	const pyramidSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		center: 'Array',
		colors: 'HIColor',
		depth: 'number',
		endAngle: 'number',
		fillColor: 'HIColor',
		height: 'number',
		ignoreHiddenPoint: 'number',
		minSize: 'number',
		neckHeight: 'string',
		neckWidth: 'string',
		reversed: 'number',
		slicedOffset: 'number',
		startAngle: 'number',
		width: 'number',
	};

	if (pyramidOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of pyramidOptions) {
			const pyramid = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPyramid() : new HIPyramid();
			seriesArr.push(seriesHandler(opts, optionsBuilder(pyramidSchema, opts, pyramid)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const pyramid = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPyramid() : new HIPyramid();
		return seriesHandler(pyramidOptions, optionsBuilder(pyramidSchema, pyramidOptions, pyramid));
	}
}
