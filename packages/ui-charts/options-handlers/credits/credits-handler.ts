import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function creditsHandler(creditsOptions) {
	const credits = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HICredits() : new HICredits();

	const creditsSchema = {
		enabled: 'number',
		href: 'string',
		position: 'HIAlignObject',
		style: 'HICSSObject',
		text: 'string',
	};

	return optionsBuilder(creditsSchema, creditsOptions, credits);
}
