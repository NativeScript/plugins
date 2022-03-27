import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function rightHandler(rightOptions) {
	const right = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIRight() : new HIRight();

	const rightSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(rightSchema, rightOptions, right);
}
