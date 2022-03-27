import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function leftHandler(leftOptions) {
	const left = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILeft() : new HILeft();

	const leftSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(leftSchema, leftOptions, left);
}
