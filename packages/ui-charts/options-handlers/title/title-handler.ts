import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function titleHandler(titleOptions) {
	const title = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITitle() : new HITitle();

	const titleSchema = {
		align: 'string',
		floating: 'number',
		margin: 'number',
		offset: 'number',
		position3d: 'string',
		reserveSpace: 'number',
		rotation: 'number',
		skew3d: 'number',
		style: 'HICSSObject',
		text: 'string',
		textAlign: 'string',
		useHTML: 'number',
		verticalAlign: 'string',
		widthAdjust: 'number',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(titleSchema, titleOptions, title);
}
