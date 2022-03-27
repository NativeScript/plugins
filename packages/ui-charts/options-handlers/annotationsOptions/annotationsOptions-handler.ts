import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function annotationsOptionsHandler(annotationsOptionsOptions) {
	const annotationsOptions = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAnnotationsOptions() : new HIAnnotationsOptions();

	const annotationsOptionsSchema = {
		controlPointOptions: 'HIControlPointOptions',
		draggable: 'string',
		events: 'HIEvents',
		id: 'string',
		labelOptions: 'HILabelOptions',
		labels: 'HILabels',
		shapeOptions: 'HIShapeOptions',
		shapes: 'HIShapes',
		visible: 'number',
		zIndex: 'number',
	};

	return optionsBuilder(annotationsOptionsSchema, annotationsOptionsOptions, annotationsOptions);
}
