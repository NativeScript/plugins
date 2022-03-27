import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function legendHandler(legendOptions) {
	const legend = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILegend() : new HILegend();

	const legendSchema = {
		accessibility: 'HIAccessibility',
		align: 'string',
		alignColumns: 'number',
		backgroundColor: 'HIColor',
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		bubbleLegend: 'HIBubbleLegend',
		enabled: 'number',
		floating: 'number',
		itemCheckboxStyle: 'HICSSObject',
		itemDistance: 'number',
		itemHiddenStyle: 'HICSSObject',
		itemHoverStyle: 'HICSSObject',
		itemMarginBottom: 'number',
		itemMarginTop: 'number',
		itemStyle: 'HICSSObject',
		itemWidth: 'number',
		labelFormat: 'string',
		labelFormatter: 'HIFunction',
		layout: 'string',
		legendItem: 'string',
		legendLabel: 'string',
		margin: 'number',
		maxHeight: 'number',
		navigation: 'HINavigation',
		padding: 'number',
		reversed: 'number',
		rtl: 'number',
		shadow: isAndroid ? 'boolean' : 'HICSSObject',
		squareSymbol: 'number',
		symbolHeight: 'number',
		symbolPadding: 'number',
		symbolRadius: 'number',
		symbolWidth: 'number',
		title: 'HITitle',
		useHTML: 'number',
		verticalAlign: 'string',
		width: 'number',
		x: 'number',
		y: 'number',
	};

	return optionsBuilder(legendSchema, legendOptions, legend);
}
