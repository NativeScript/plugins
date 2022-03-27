import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function shapesHandler(shapesOptions) {
	const shapesSchema = {
		dashStyle: 'string',
		fill: 'HIColor',
		height: 'number',
		markerEnd: 'string',
		markerStart: 'string',
		point: 'HIPoint',
		points: 'HIPoints', // array
		r: 'number',
		snap: 'number',
		src: 'string',
		stroke: 'HIColor',
		strokeWidth: 'number',
		type: 'string',
		width: 'number',
	};

	if (shapesOptions instanceof Array) {
		const shapesArray = [];

		for (let i = 0; i < shapesOptions.length; i++) {
			const shapes = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIShapes() : new HIShapes();
			shapesArray.push(optionsBuilder(shapesSchema, shapesOptions, shapes));
		}

		return convertJSArrayToNative(shapesArray);
	} else {
		const shapes = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIShapes() : new HIShapes();

		return optionsBuilder(shapesSchema, shapesOptions, shapes);
	}
}
