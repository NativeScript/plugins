import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function pointHandler(pointOptions) {
	const point = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPoint() : new HIPoint();

	const pointSchema = {
		dateFormat: 'string',
		dateFormatter: 'HIFunction',
		descriptionFormatter: 'HIFunction',
		events: 'HIEvents',
		valueDecimals: 'number',
		valueDescriptionFormat: 'string',
		valuePrefix: 'string',
		valueSuffix: 'string',
		x: 'number',
		xAxis: 'number',
		y: 'number',
		yAxis: 'number',
	};

	return optionsBuilder(pointSchema, pointOptions, point);
}
