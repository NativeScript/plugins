import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function frontHandler(frontOptions) {
	const front = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFront() : new HIFront();

	const frontSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(frontSchema, frontOptions, front);
}
