import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function funnelHandler(funnelOptions) {
	const funnelSchema = {
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
		neckHeight: 'number',
		neckWidth: 'number',
		reversed: 'number',
		slicedOffset: 'number',
		startAngle: 'number',
		width: 'number',
	};

	if (funnelOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of funnelOptions) {
			const funnel = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFunnel() : new HIFunnel();
			seriesArr.push(seriesHandler(opts, optionsBuilder(funnelSchema, opts, funnel)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const funnel = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFunnel() : new HIFunnel();
		return seriesHandler(funnelOptions, optionsBuilder(funnelSchema, funnelOptions, funnel));
	}
}
