import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function statesHandler(statesOptions) {
	const states = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIStates() : new HIStates();

	const statesSchema = {
		hover: 'HIHover',
		inactive: 'HIInactive',
		normal: 'HINormal',
		select: 'HISelect',
	};

	return optionsBuilder(statesSchema, statesOptions, states);
}
