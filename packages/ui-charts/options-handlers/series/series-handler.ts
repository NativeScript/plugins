import { isAndroid } from '@nativescript/core';
import { optionsBuilder, toArrayList, convertJSArrayToNative, fromJSToNativePrimitive } from '../helpers/helpers';

export function seriesHandler(seriesOptions, seriesSubClass?) {
	const seriesSchema = {
		accessibility: 'HIAccessibility',
		allowPointSelect: 'number',
		animation: 'HIAnimationOptionsObject',
		animationLimit: 'number',
		boostBlending: 'string',
		boostThreshold: 'number',
		className: 'string',
		clip: 'number',
		color: 'HIColor',
		colorAxis: 'number',
		colorIndex: 'number',
		colorKey: 'string',
		connectEnds: 'number',
		connectNulls: 'number',
		crisp: 'number',
		cropThreshold: 'number',
		cursor: 'string',
		// custom: 'NSDictionary<any, any>',
		// data: 'handled manually',
		dashStyle: 'string',
		dataLabels: 'HIDataLabels', // array
		dataSorting: 'HIDataSortingOptionsObject',
		definition: 'string',
		describeSingleSeries: 'number',
		descriptionFormatter: 'HIFunction',
		dragDrop: 'HIDragDrop',
		enableMouseTracking: 'number',
		events: 'HIEvents',
		findNearestPointBy: 'string',
		getExtremesFromAll: 'number',
		id: 'string',
		includeInDataExport: 'number',
		index: 'number',
		keys: 'Array',
		label: 'HILabel',
		legendIndex: 'number',
		lineWidth: 'number',
		linecap: 'string',
		linkedTo: 'string',
		marker: 'HIMarker',
		name: 'string',
		negativeColor: 'HIColor',
		nullPointValue: 'string',
		opacity: 'number',
		point: 'HIPoint',
		pointAnnotationsDescription: 'string',
		pointDescriptionEnabledThreshold: 'number',
		pointDescriptionFormatter: 'HIFunction',
		pointInterval: 'number',
		pointIntervalUnit: 'string',
		pointPlacement: 'number',
		pointStart: 'number',
		selected: 'number',
		shadow: 'HIShadowOptionsObject',
		showCheckbox: 'number',
		showInLegend: isAndroid ? 'boolean' : 'number',
		skipKeyboardNavigation: 'number',
		softThreshold: 'number',
		stack: 'string',
		stacking: 'string',
		states: 'HIStates',
		step: 'string',
		stickyTracking: 'number',
		summary: 'HISummary',
		threshold: 'number',
		tooltip: 'HITooltip',
		turboThreshold: 'number',
		type: 'string',
		visible: 'number',
		xAxis: 'number',
		xAxisDescription: 'string',
		yAxis: 'number',
		yAxisDescription: 'string',
		zIndex: 'number',
		zoneAxis: 'string',
		zones: 'HIZones', // array
	};

	const series = isAndroid ? seriesSubClass || new com.highsoft.highcharts.common.hichartsclasses.HISeries() : seriesSubClass || new HISeries();
	const sOpts = seriesOptions;
	if (sOpts.data && isAndroid) {
		if (sOpts.data[0] !== null && typeof sOpts.data[0] !== 'undefined' && sOpts.data[0].length) {
			const data = sOpts.data.map((item) => {
				const innerArray = [];
				for (let i = 0; i < item.length; i++) {
					if (i === 0) {
						if (typeof item[0] === 'string') {
							innerArray.push(item[0]);
						} else {
							innerArray.push(new java.lang.Long(item[0]));
						}
					} else {
						innerArray.push(fromJSToNativePrimitive(item[i]));
					}
				}

				return toArrayList(innerArray);
			});
			(<any>series).setData(toArrayList(data));
		} else {
			(<any>series).setData(convertJSArrayToNative(sOpts.data));
		}
	} else if (sOpts.data) {
		(<any>series).data = new NSArray({
			array: sOpts.data.map((v) => {
				if (v instanceof Array) {
					v = v.map((i) => (i === null ? NSNull.new() : i));
				}

				return v === null ? NSNull.new() : v;
			}),
		});
	}

	return optionsBuilder(seriesSchema, seriesOptions, series);
}
