import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function linkHandler(linkOptions) {
	const link = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILink() : new HILink();

	const linkSchema = {
		color: 'string',
		dashStyle: 'string',
		width: 'number',
	};

	return optionsBuilder(linkSchema, linkOptions, link);
}
