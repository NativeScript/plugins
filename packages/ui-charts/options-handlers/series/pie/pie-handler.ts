import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function pieHandler(pieOptions) {
	const pieSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		center: 'Array',
		colors: 'HIColor',
		depth: 'number',
		endAngle: 'number',
		fillColor: 'HIColor',
		ignoreHiddenPoint: 'number',
		innerSize: 'number',
		minSize: 'number',
		size: 'number',
		slicedOffset: 'number',
		startAngle: 'number',
	};

	if (pieOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of pieOptions) {
			const pie = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPie() : new HIPie();
			seriesArr.push(seriesHandler(opts, optionsBuilder(pieSchema, opts, pie)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const pie = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPie() : new HIPie();
		return seriesHandler(pieOptions, optionsBuilder(pieSchema, pieOptions, pie));
	}
}
