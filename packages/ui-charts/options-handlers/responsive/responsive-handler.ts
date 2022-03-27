import { isAndroid } from '@nativescript/core';
import { optionsBuilder } from '../helpers/helpers';

export function responsiveHandler(responsiveOptions) {
	const responsive = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIResponsive() : new HIResponsive();

	const responsiveSchema = {
		rules: 'HIRules', // array
	};

	return optionsBuilder(responsiveSchema, responsiveOptions, responsive);
}
