import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function buttonOptionsHandler(buttonOptionsOptions) {
	const buttonOptions = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIButtonOptions() : new HIButtonOptions();

	const buttonOptionsSchema = {
		align: 'string',
		buttonSpacing: 'number',
		enabled: 'number',
		height: 'number',
		symbolFill: 'HIColor',
		symbolSize: 'number',
		symbolStroke: 'HIColor',
		symbolStrokeWidth: 'number',
		symbolX: 'number',
		symbolY: 'number',
		text: 'string',
		theme: 'HITheme',
		verticalAlign: 'string',
		width: 'number',
		y: 'number',
	};

	return optionsBuilder(buttonOptionsSchema, buttonOptionsOptions, buttonOptions);
}
