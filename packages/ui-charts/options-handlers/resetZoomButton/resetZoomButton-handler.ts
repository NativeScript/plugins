import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function resetZoomButtonHandler(exportingOptions) {
	const exporting = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIResetZoomButton() : new HIResetZoomButton();

	const exportingSchema = {
		position: 'HIAlignObject',
		relativeTo: 'string',
		theme: 'HISVGAttributes',
	};

	return optionsBuilder(exportingSchema, exportingOptions, exporting);
}
