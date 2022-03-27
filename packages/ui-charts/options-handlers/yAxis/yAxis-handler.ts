import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function yAxisHandler(yAxisOptions) {
	const yAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIYAxis() : new HIYAxis();

	const yAxisSchema = {
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
		maxColor: 'HIColor',
		maxPadding: 'number',
		min: 'number',
		minColor: 'HIColor',
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
		stackLabels: 'HIStackLabels',
		startOfWeek: 'number',
		startOnTick: 'number',
		stops: 'HIGradientColorStopObject', // array
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
		tooltipValueFormat: 'string',
		top: 'number',
		type: 'string',
		uniqueNames: 'number',
		// units: 'NSArray<NSArray<any>>',
		visible: 'number',
		width: 'number',
		zoomEnabled: 'number',
	};

	const axisArray = [];
	if (yAxisOptions instanceof Array) {
		yAxisOptions.forEach((axisOpts) => {
			const yAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIYAxis() : new HIYAxis();
			axisArray.push(optionsBuilder(yAxisSchema, axisOpts, yAxis));
		});
	} else {
		const yAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIYAxis() : new HIYAxis();
		axisArray.push(optionsBuilder(yAxisSchema, yAxisOptions, yAxis));
	}

	return convertJSArrayToNative(axisArray);
}
