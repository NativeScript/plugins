import { isAndroid } from '@nativescript/core';
import { convertJSArrayToNative, optionsBuilder } from '../helpers/helpers';

export function zonesHandler(zonesOptions) {
	const zones = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIZones() : new HIZones();

	const zonesSchema = {
		className: 'string',
		color: 'HIColor',
		dashStyle: 'string',
		fillColor: 'HIColor',
		from: 'number',
		marker: 'HIMarker',
		to: 'number',
		value: 'number',
	};

	let zonesArray = [];
	if (zonesOptions instanceof Array) {
		zonesArray = zonesOptions.map((zoneOpts) => {
			return optionsBuilder(zonesSchema, zoneOpts, zones);
		});
	}

	return convertJSArrayToNative(zonesArray);
}
