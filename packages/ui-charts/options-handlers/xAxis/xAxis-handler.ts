import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function xAxisHandler(xAxisOptions) {
	const xAxisSchema = {
		accessibility: 'HIAccessibility',
		alignTicks: 'number',
		allowDecimals: 'number',
		alternateGridColor: 'HIColor',
		angle: 'number',
		breaks: 'HIBreaks', // array
		categories: 'Array',
		ceiling: 'number',
		className: 'string',
		crosshair: 'HICrosshair',
		dateTimeLabelFormats: 'HIDateTimeLabelFormats',
		endOnTick: 'number',
		events: 'HIEvents',
		floor: 'number',
		gridLineColor: 'HIColor',
		gridLineDashStyle: 'string',
		gridLineInterpolation: 'string',
		gridLineWidth: 'number',
		gridZIndex: 'number',
		height: 'number',
		id: 'string',
		labels: 'HILabels',
		left: 'number',
		lineColor: 'HIColor',
		lineWidth: 'number',
		linkedTo: 'number',
		margin: 'number',
		max: 'number',
		maxPadding: 'number',
		min: 'number',
		minPadding: 'number',
		minRange: 'number',
		minTickInterval: 'number',
		minorGridLineColor: 'HIColor',
		minorGridLineDashStyle: 'string',
		minorGridLineWidth: 'number',
		minorTickColor: 'HIColor',
		minorTickInterval: 'number',
		minorTickLength: 'number',
		minorTickPosition: 'string',
		minorTickWidth: 'number',
		minorTicks: 'number',
		offset: 'number',
		opposite: 'number',
		pane: 'number',
		plotBands: 'HIPlotBands', // array
		plotLines: 'HIPlotLines', // array
		reversed: 'number',
		reversedStacks: 'number',
		showEmpty: 'number',
		showFirstLabel: 'number',
		showLastLabel: 'number',
		softMax: 'number',
		softMin: 'number',
		startOfWeek: 'number',
		startOnTick: 'number',
		tickAmount: 'number',
		tickColor: 'HIColor',
		tickInterval: 'number',
		tickLength: 'number',
		tickPixelInterval: 'number',
		tickPosition: 'string',
		tickPositioner: 'HIFunction',
		tickPositions: 'Array',
		tickWidth: 'number',
		tickmarkPlacement: 'string',
		title: 'HITitle',
		top: 'number',
		type: 'string',
		uniqueNames: 'number',
		// units: 'NSArray<NSArray<any>>',
		visible: 'number',
		width: 'number',
		zoomEnabled: 'number',
	};

	const axisArray = [];
	if (xAxisOptions instanceof Array) {
		xAxisOptions.forEach((axisOpts) => {
			const xAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIXAxis() : new HIXAxis();
			axisArray.push(optionsBuilder(xAxisSchema, axisOpts, xAxis));
		});
	} else {
		const xAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIXAxis() : new HIXAxis();
		axisArray.push(optionsBuilder(xAxisSchema, xAxisOptions, xAxis));
	}

	return convertJSArrayToNative(axisArray);
}
