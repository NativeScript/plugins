import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function exportingHandler(exportingOptions) {
	const exporting = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIExporting() : new HIExporting();

	const exportingSchema = {
		accessibility: 'HIAccessibility',
		allowHTML: 'number',
		buttons: 'HIButtons',
		chartMenuLabel: 'string',
		// chartOptions: 'NSDictionary<any, any>',
		csv: 'HICsv',
		enabled: 'number',
		error: 'HIFunction',
		exportRegionLabel: 'string',
		fallbackToExportServer: 'number',
		filename: 'string',
		// formAttributes: 'NSDictionary<any, any>',
		libURL: 'string',
		menuButtonLabel: 'string',
		menuItemDefinitions: 'number',
		printMaxWidth: 'number',
		scale: 'number',
		showTable: 'number',
		sourceHeight: 'number',
		sourceWidth: 'number',
		tableCaption: 'number',
		type: 'string',
		url: 'string',
		useMultiLevelHeaders: 'number',
		useRowspanHeaders: 'number',
		width: 'number',
	};

	return optionsBuilder(exportingSchema, exportingOptions, exporting);
}
