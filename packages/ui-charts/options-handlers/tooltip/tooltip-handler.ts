import { isAndroid } from '@nativescript/core';
import { optionsBuilder } from '../helpers/helpers';

export function tooltipHandler(tooltipOptions) {
	const tooltip = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITooltip() : new HITooltip();

	const tooltipSchema = {
		animation: 'number',
		backgroundColor: 'HIColor',
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		className: 'string',
		clusterFormat: 'string',
		dateTimeLabelFormats: 'HIDateTimeLabelFormats',
		distance: 'number',
		enabled: 'number',
		followPointer: 'number',
		followTouchMove: isAndroid ? 'boolean' : 'number',
		footerFormat: 'string',
		formatter: 'HIFunction',
		headerFormat: 'string',
		headerShape: 'string',
		hideDelay: 'number',
		nodeFormat: 'string',
		nodeFormatter: 'HIFunction',
		nullFormat: 'string',
		nullFormatter: 'HIFunction',
		outside: 'number',
		padding: 'number',
		pointFormat: 'string',
		pointFormatter: 'HIFunction',
		positioner: 'HIFunction',
		shadow: 'HIShadowOptionsObject',
		shape: 'string',
		shared: 'number',
		snap: 'number',
		split: 'number',
		stickOnContact: 'number',
		style: 'HICSSObject',
		useHTML: 'number',
		valueDecimals: 'number',
		valuePrefix: 'string',
		valueSuffix: 'string',
		xDateFormat: 'string',
	};

	return optionsBuilder(tooltipSchema, tooltipOptions, tooltip);
}
