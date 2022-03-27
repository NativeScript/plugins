import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function panningHandler(panningOptions) {
	const panning = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPanning() : new HIPanning();

	const panningSchema = {
		enabled: isAndroid ? 'boolean' : 'number',
		type: 'string',
	};

	return optionsBuilder(panningSchema, panningOptions, panning);
}
