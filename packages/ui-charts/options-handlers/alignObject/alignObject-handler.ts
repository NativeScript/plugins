import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function alignObjectHandler(exportingOptions) {
	const exporting = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAlignObject() : new HIAlignObject();

	const exportingSchema = {
		align: 'string',
		alignByTranslate: 'number',
		verticalAlign: 'string',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(exportingSchema, exportingOptions, exporting);
}
