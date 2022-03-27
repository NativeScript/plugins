import { optionsBuilder } from '../../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function backHandler(backOptions) {
	const back = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBack() : new HIBack();

	const backSchema = {
		color: 'HIColor',
		size: 'number',
		visible: 'number',
	};

	return optionsBuilder(backSchema, backOptions, back);
}
