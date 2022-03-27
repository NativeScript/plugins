import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function accessibilityHandler(accessibilityOptions) {
	const accessibility = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAccessibility() : new HIAccessibility();

	const accessibilitySchema = {
		announceNewData: 'HIAnnounceNewData',
		axis: 'HIAxis',
		chartContainerLabel: 'string',
		chartTypes: 'HIChartTypes',
		credits: 'string',
		// customComponents: 'any',
		defaultChartTitle: 'string',
		definition: 'string',
		drillUpButton: 'string',
		enabled: 'number',
		exporting: 'HIAccessibilityExporting',
		exposeAsGroupOnly: 'number',
		graphicContainerLabel: 'string',
		// highContrastTheme: 'any',
		keyboardNavigation: 'HIKeyboardNavigation',
		landmarkVerbosity: 'string',
		legend: 'HIAccessibilityLegend',
		linkedDescription: 'string',
		point: 'HIPoint',
		pointDescriptionFormatter: 'HIFunction',
		rangeDescription: 'string',
		rangeSelector: 'HIRangeSelector',
		screenReaderSection: 'HIScreenReaderSection',
		series: 'HIAccessibilitySeries',
		seriesTypeDescriptions: 'HISeriesTypeDescriptions',
		sonification: 'HISonification',
		svgContainerLabel: 'string',
		svgContainerTitle: 'string',
		table: 'HITable',
		thousandsSep: 'string',
		typeDescription: 'string',
		zoom: 'HIZoom',
	};

	return optionsBuilder(accessibilitySchema, accessibilityOptions, accessibility);
}
