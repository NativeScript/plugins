import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function langHandler(langOptions) {
	const lang = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILang() : new HILang();

	const langSchema = {
		accessibility: 'HIAccessibility',
		cancelButtonTitle: 'string',
		contextButtonTitle: 'string',
		decimalPoint: 'string',
		downloadCSV: 'string',
		downloadJPEG: 'string',
		downloadPDF: 'string',
		downloadPNG: 'string',
		downloadSVG: 'string',
		downloadXLS: 'string',
		drillUpText: 'string',
		exitFullscreen: 'string',
		exportData: 'HIExportData',
		invalidDate: 'string',
		loading: 'string',
		months: 'Array',
		navigation: 'HINavigation',
		noData: 'string',
		numericSymbolMagnitude: 'number',
		numericSymbols: 'Array',
		printChart: 'string',
		resetZoom: 'string',
		resetZoomTitle: 'string',
		shortMonths: 'Array',
		shortWeekdays: 'Array',
		thousandsSep: 'string',
		viewData: 'string',
		viewFullscreen: 'string',
		weekdays: 'Array',
	};

	return optionsBuilder(langSchema, langOptions, lang);
}
