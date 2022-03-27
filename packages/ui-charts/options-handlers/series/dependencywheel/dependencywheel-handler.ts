import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function dependencywheelHandler(dependencywheelOptions) {
	const dependencywheelSchema = {
		borderColor: 'HIColor',
		borderWidth: 'number',
		center: 'Array',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		curveFactor: 'number',
		levels: 'HILevels', // array
		linkOpacity: 'number',
		minLinkWidth: 'number',
		nodePadding: 'number',
		nodeWidth: 'number',
		nodes: 'HINodes', // array
		startAngle: 'number',
	};

	if (dependencywheelOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of dependencywheelOptions) {
			const dependencywheel = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIDependencywheel() : new HIDependencywheel();
			seriesArr.push(seriesHandler(opts, optionsBuilder(dependencywheelSchema, opts, dependencywheel)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const dependencywheel = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIDependencywheel() : new HIDependencywheel();
		return seriesHandler(dependencywheelOptions, optionsBuilder(dependencywheelSchema, dependencywheelOptions, dependencywheel));
	}
}
