import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function bottomHandler(bottomOptions) {
	const bottom = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBottom() : new HIBottom();

	const bottomSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(bottomSchema, bottomOptions, bottom);
}
