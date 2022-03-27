import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function scrollablePlotAreaHandler(scrollablePlotAreaOptions) {
	const scrollablePlotArea = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIScrollablePlotArea() : new HIScrollablePlotArea();

	const scrollablePlotAreaSchema = {
		minHeight: 'number',
		minWidth: 'number',
		opacity: 'number',
		scrollPositionX: 'number',
		scrollPositionY: 'number',
	};

	return optionsBuilder(scrollablePlotAreaSchema, scrollablePlotAreaOptions, scrollablePlotArea);
}
