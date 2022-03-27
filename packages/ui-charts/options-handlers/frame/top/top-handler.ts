import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function topHandler(topOptions) {
	const top = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITop() : new HITop();

	const topSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(topSchema, topOptions, top);
}
