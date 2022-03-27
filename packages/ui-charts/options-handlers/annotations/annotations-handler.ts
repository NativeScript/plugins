import { convertJSArrayToNative, optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function annotationsHandler(annotationsOptions) {
	const annotations = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAnnotations() : new HIAnnotations();

	const annotationsSchema = {
		controlPointOptions: 'HIControlPointOptions',
		draggable: 'string',
		events: 'HIEvents',
		id: 'string',
		labelOptions: 'HILabelOptions',
		labels: 'HILabels', // array
		shapeOptions: 'HIShapeOptions',
		shapes: 'HIShapes',
		visible: 'number',
		zIndex: 'number',
	};
	if (annotationsOptions instanceof Array) {
		var annotationsArray = [];
		for (var i = 0; i < annotationsOptions.length; i++) {
			annotationsArray.push(optionsBuilder(annotationsSchema, annotationsOptions[i], annotations));
		}
		return convertJSArrayToNative(annotationsArray);
	} else {
		return optionsBuilder(annotationsSchema, annotationsOptions, annotations);
	}
}
