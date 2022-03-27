import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function options3dHandler(options3dOptions) {
	const options3d = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIOptions3d() : new HIOptions3d();

	const options3dSchema = {
		alpha: 'number',
		axisLabelPosition: 'string',
		beta: 'number',
		depth: 'number',
		enabled: 'number',
		fitToPlot: 'number',
		frame: 'HIFrame',
		viewDistance: 'number',
	};

	return optionsBuilder(options3dSchema, options3dOptions, options3d);
}
