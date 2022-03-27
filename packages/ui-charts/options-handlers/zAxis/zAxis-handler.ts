import { optionsBuilder, convertJSArrayToNative } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function zAxisHandler(zAxisOptions) {
	const zAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIZAxis() : new HIZAxis();

	const zAxisSchema = {
		accessibility: 'HIAccessibility',
		alignTicks: 'number',
		allowDecimals: 'number',
		alternateGridColor: 'HIColor',
		angle: 'number',
		categories: 'Array',
		ceiling: 'number',
		className: 'string',
		dateTimeLabelFormats: 'HIDateTimeLabelFormats',
		endOnTick: 'number',
		events: 'HIEvents',
		floor: 'number',
		gridLineColor: 'HIColor',
		gridLineDashStyle: 'string',
		gridLineInterpolation: 'string',
		gridLineWidth: 'number',
		gridZIndex: 'number',
		id: 'string',
		labels: 'HILabels',
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
		type: 'string',
		uniqueNames: 'number',
		// units: 'NSArray<NSArray<any>>',
		visible: 'number',
		zoomEnabled: 'number',
	};

	const axisArray = [];
	if (zAxisOptions instanceof Array) {
		zAxisOptions.forEach((axisOpts) => {
			const zAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIZAxis() : new HIZAxis();
			axisArray.push(optionsBuilder(zAxisSchema, axisOpts, zAxis));
		});
	} else {
		const zAxis = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIZAxis() : new HIZAxis();
		axisArray.push(optionsBuilder(zAxisSchema, zAxisOptions, zAxis));
	}

	return convertJSArrayToNative(axisArray);
}
