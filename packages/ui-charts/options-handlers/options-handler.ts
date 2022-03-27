import { isAndroid } from '@nativescript/core';
import { optionsBuilder } from './helpers/helpers';

const chartTypesToClassName = {
	area: 'HIArea',
	arearange: 'HIArearange',
	areaspline: 'HIAreaspline',
	areasplinerange: 'HIAreasplinerange',
	bar: 'HIBar',
	bellcurve: 'HIBellcurve',
	boxplot: 'HIBoxplot',
	bubble: 'HIBubble',
	bullet: 'HIBullet',
	column: 'HIColumn',
	columnpyramid: 'HIColumnpyramid',
	columnrange: 'HIColumnrange',
	cylinder: 'HICylinder',
	dependencywheel: 'HIDependencywheel',
	dumbbell: 'HIDumbbell',
	errorbar: 'HIErrorbar',
	funnel: 'HIFunnel',
	funnel3d: 'HIFunnel3d',
	gauge: 'HIGauge',
	heatmap: 'HIHeatmap',
	histogram: 'HIHistogram',
	item: 'HIItem',
	line: 'HILine',
	lollipop: 'HILollipop',
	networkgraph: 'HINetworkgraph',
	organization: 'HIOrganization',
	packedbubble: 'HIPackedbubble',
	pareto: 'HIPareto',
	pie: 'HIPie',
	polygon: 'HIPolygon',
	pyramid: 'HIPyramid',
	pyramid3d: 'HIPyramid3d',
	sankey: 'HISankey',
	scatter: 'HIScatter',
	scatter3d: 'HIScatter3d',
	solidgauge: 'HISolidgauge',
	spline: 'HISpline',
	streamgraph: 'HIStreamgraph',
	sunburst: 'HISunburst',
	tilemap: 'HITilemap',
	timeline: 'HITimeline',
	treemap: 'HITreemap',
	variablepie: 'HIVariablepie',
	variwide: 'HIVariwide',
	vector: 'HIVector',
	venn: 'HIVenn',
	waterfall: 'HIWaterfall',
	windbarb: 'HIWindbarb',
	wordcloud: 'HIWordcloud',
	xrange: 'HIXrange',
};

export const chartTypes = Object.keys(chartTypesToClassName);

export function optionsHandler(options) {
	const hiOptions = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIOptions() : new HIOptions();

	const hiOptionsSchema = {
		accessibility: 'HIAccessibility',
		// additionalOptions: 'NSDictionary<any, any>',
		annotationsOptions: 'HIAnnotationsOptions', // array
		annotations: 'HIAnnotations', // array
		boost: 'HIBoost',
		caption: 'HICaption',
		chart: 'HIChart',
		colorAxis: 'HIColorAxis', // array
		colors: 'Array',
		credits: 'HICredits',
		data: 'HIData',
		defs: 'HIDefs',
		drilldown: 'HIDrilldown',
		exporting: 'HIExporting',
		legend: 'HILegend',
		loading: 'HILoading',
		navigation: 'HINavigation',
		noData: 'HINoData',
		pane: 'HIPane',
		plotOptions: 'HIPlotOptions',
		responsive: 'HIResponsive',
		series: 'HILine',
		subtitle: 'HISubtitle',
		time: 'HITime',
		title: 'HITitle',
		tooltip: 'HITooltip',
		xAxis: 'HIXAxis',
		yAxis: 'HIYAxis',
		zAxis: 'HIZAxis',
	};

	if (options && options.chart && options.chart.type) {
		if (chartTypesToClassName[options.chart.type]) {
			hiOptionsSchema.series = chartTypesToClassName[options.chart.type];
		}
	}

	return optionsBuilder(hiOptionsSchema, options, hiOptions);
}
