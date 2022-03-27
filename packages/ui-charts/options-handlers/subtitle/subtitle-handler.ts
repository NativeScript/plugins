import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function subtitleHandler(subtitleOptions) {
	const subtitle = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HISubtitle() : new HISubtitle();

	const subtitleSchema = {
		align: 'string',
		floating: 'number',
		style: 'HICSSObject',
		text: 'string',
		useHTML: 'number',
		verticalAlign: 'string',
		widthAdjust: 'number',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(subtitleSchema, subtitleOptions, subtitle);
}
