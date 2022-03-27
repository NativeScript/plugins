import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function themeHandler(themeOptions) {
	const theme = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITheme() : new HITheme();

	const themeSchema = {
		fill: 'HIColor',
		padding: 'number',
		stroke: 'HIColor',
		zIndex: 'number',
	};

	return optionsBuilder(themeSchema, themeOptions, theme);
}
