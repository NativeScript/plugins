import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function stackLabelsHandler(stackLabelsOptions) {
	const stackLabels = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIStackLabels() : new HIStackLabels();

	const stackLabelsSchema = {
		align: 'string',
		allowOverlap: 'number',
		backgroundColor: 'HIColor',
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		crop: 'number',
		enabled: 'number',
		format: 'string',
		formatter: 'HIFunction',
		overflow: 'string',
		rotation: 'number',
		style: 'HICSSObject',
		textAlign: 'string',
		useHTML: 'number',
		verticalAlign: 'string',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(stackLabelsSchema, stackLabelsOptions, stackLabels);
}
