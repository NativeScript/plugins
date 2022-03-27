import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function labelsHandler(labelsOptions) {
	const labelsSchema = {
		accessibility: 'HILabelsAccessibility',
		align: 'string',
		allowOverlap: 'number',
		autoRotation: 'Array',
		autoRotationLimit: 'number',
		backgroundColor: 'HIColor',
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		className: 'string',
		crop: 'number',
		distance: 'number',
		enabled: 'number',
		format: 'string',
		formatter: 'HIFunction',
		overflow: 'string',
		padding: 'number',
		point: 'HIPoint',
		position3d: 'string',
		reserveSpace: 'number',
		rotation: 'number',
		shadow: 'HIShadowOptionsObject',
		shape: 'string',
		skew3d: 'number',
		staggerLines: 'number',
		step: 'number',
		style: 'HICSSObject',
		text: 'string',
		useHTML: 'number',
		verticalAlign: 'string',
		x: 'number',
		y: 'number',
		zIndex: 'number',
	};

	if (labelsOptions instanceof Array || labelsOptions.length > 0) {
		const labelsArray = [];

		for (let i = 0; i < labelsOptions.length; i++) {
			const labels = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILabels() : new HILabels();
			labelsArray.push(optionsBuilder(labelsSchema, labelsOptions[i], labels));
		}

		return convertJSArrayToNative(labelsArray);
	} else {
		const labels = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILabels() : new HILabels();

		return optionsBuilder(labelsSchema, labelsOptions, labels);
	}
}
