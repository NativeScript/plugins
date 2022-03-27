import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function animationOptionsObjectHandler(animationOptionsObjectOptions) {
	const animationOptionsObject = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAnimationOptionsObject() : new HIAnimationOptionsObject();

	const animationOptionsObjectSchema = {
		complete: 'HIFunction',
		duration: 'number',
		easing: 'string',
		step: 'HIFunction',
	};

	return optionsBuilder(animationOptionsObjectSchema, animationOptionsObjectOptions, animationOptionsObject);
}
