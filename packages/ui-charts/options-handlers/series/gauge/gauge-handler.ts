import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function gaugeHandler(gaugeOptions) {
	const gaugeSchema = {
		dial: 'HIDial',
		overshoot: 'number',
		pivot: 'HIPivot',
		wrap: 'number',
	};

	if (gaugeOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of gaugeOptions) {
			const gauge = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIGauge() : new HIGauge();
			seriesArr.push(seriesHandler(opts, optionsBuilder(gaugeSchema, opts, gauge)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const gauge = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIGauge() : new HIGauge();
		return seriesHandler(gaugeOptions, optionsBuilder(gaugeSchema, gaugeOptions, gauge));
	}
}
