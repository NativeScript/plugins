import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function labelHandler(labelOptions) {
	const label = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILabel() : new HILabel();

	const labelSchema = {
		align: 'string',
		boxesToAvoid: 'HILabelIntersectBoxObject', // an array
		connectorAllowed: 'number',
		connectorNeighbourDistance: 'number',
		enabled: 'number',
		format: 'string',
		formatter: 'HIFunction',
		maxFontSize: 'number',
		minFontSize: 'number',
		onArea: 'number',
		rotation: 'number',
		style: 'HICSSObject',
		text: 'string',
		textAlign: 'string',
		useHTML: 'number',
		verticalAlign: 'string',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(labelSchema, labelOptions, label);
}
