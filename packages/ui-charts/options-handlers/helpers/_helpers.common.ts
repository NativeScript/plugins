import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { alignObjectHandler } from '../alignObject/alignObject-handler';
import { chartHandler } from '../chart/chart-handler';
import { creditsHandler } from '../credits/credits-handler';
import { dataLabelsHandler } from '../dataLabels/dataLabels-handler';
import { dateTimeLabelFormatsHandler } from '../dateTimeLabelFormats/dateTimeLabelFormats-handler';
import { functionHandler } from '../function/function-handler';
import { hoverHandler } from '../hover/hover-handler';
import { labelHandler } from '../label/label-handler';
import { labelsHandler } from '../labels/labels-handler';
import { legendHandler } from '../legend/legend-handler';
import { markerHandler } from '../marker/marker-handler';
import { panningHandler } from '../panning/panning-handler';
import { plotOptionsHandler } from '../plotOptions/plotOptions-handler';
import { plotBandsHandler } from '../plotBands/plotBands-handler';
import { plotLinesHandler } from '../plotLines/plotLines-handler';
import { pointHandler } from '../point/point-handler';
import { resetZoomButtonHandler } from '../resetZoomButton/resetZoomButton-handler';
import { scrollablePlotAreaHandler } from '../scrollablePlotArea/scrollablePlotArea-handler';
import { seriesHandler } from '../series/series-handler';
import { stackLabelsHandler } from '../stackLabels/stackLabels-handler';
import { statesHandler } from '../states/states-handler';
import { styleHandler } from '../style/style-handler';
import { subtitleHandler } from '../subtitle/subtitle-handler';
import { titleHandler } from '../title/title-handler';
import { timeHandler } from '../time/time-handler';
import { tooltipHandler } from '../tooltip/tooltip-handler';
import { xAxisHandler } from '../xAxis/xAxis-handler';
import { yAxisHandler } from '../yAxis/yAxis-handler';
import { zAxisHandler } from '../zAxis/zAxis-handler';
import { zonesHandler } from '../zones/zones-handler';
import { backHandler } from '../frame/back/back-handler';
import { bottomHandler } from '../frame/bottom/bottom-handler';
import { frontHandler } from '../frame/front/front-handler';
import { leftHandler } from '../frame/left/left-handler';
import { rightHandler } from '../frame/right/right-handler';
import { topHandler } from '../frame/top/top-handler';
import { layoutAlgorithmHandler } from '../layoutAlgorithm/layoutAlgorithm-handler';
import { linkHandler } from '../link/link-handler';
import { exportingHandler } from '../exporting/exporting-handler';
import { frameHandler } from '../frame/frame-handler';
import { options3dHandler } from '../options3d/options3d-handler';
import { navigationHandler } from '../navigation/navigation-handler';
import { annotationsOptionsHandler } from '../annotationsOptions/annotationsOptions-handler';
import { animationOptionsObjectHandler } from '../animationOptionsObject/animationOptionsObject-handler';
import { popupHandler } from '../popup/popup-handler';
import { shapesHandler } from '../shapes/shapes-handler';
import { buttonOptionsHandler } from '../buttonOptions/buttonOptions-handler';
import { themeHandler } from '../theme/theme-handler';
import { annotationsHandler } from '../annotations/annotations-handler';
import { eventsHandler } from '../events/events-handler';

// Series Handler imports
import { areaHandler } from '../series/area/area-handler';
import { arearangeHandler } from '../series/arearange/arearange-handler';
import { areasplineHandler } from '../series/areaspline/areaspline-handler';
import { areasplinerangeHandler } from '../series/areasplinerange/areasplinerange-handler';
import { barHandler } from '../series/bar/bar-handler';
import { bellcurveHandler } from '../series/bellcurve/bellcurve-handler';
import { boxplotHandler } from '../series/boxplot/boxplot-handler';
import { bubbleHandler } from '../series/bubble/bubble-handler';
import { bulletHandler } from '../series/bullet/bullet-handler';
import { columnHandler } from '../series/column/column-handler';
import { columnpyramidHandler } from '../series/columnpyramid/columnpyramid-handler';
import { columnrangeHandler } from '../series/columnrange/columnrange-handler';
import { cylinderHandler } from '../series/cylinder/cylinder-handler';
import { dependencywheelHandler } from '../series/dependencywheel/dependencywheel-handler';
import { dumbbellHandler } from '../series/dumbbell/dumbbell-handler';
import { errorbarHandler } from '../series/errorbar/errorbar-handler';
import { funnelHandler } from '../series/funnel/funnel-handler';
import { funnel3dHandler } from '../series/funnel3d/funnel3d-handler';
import { gaugeHandler } from '../series/gauge/gauge-handler';
import { heatmapHandler } from '../series/heatmap/heatmap-handler';
import { histogramHandler } from '../series/histogram/histogram-handler';
import { itemHandler } from '../series/item/item-handler';
import { lineHandler } from '../series/line/line-handler';
import { lollipopHandler } from '../series/lollipop/lollipop-handler';
import { networkgraphHandler } from '../series/networkgraph/networkgraph-handler';
import { organizationHandler } from '../series/organization/organization-handler';
import { packedbubbleHandler } from '../series/packedbubble/packedbubble-handler';
import { paretoHandler } from '../series/pareto/pareto-handler';
import { pieHandler } from '../series/pie/pie-handler';
import { polygonHandler } from '../series/polygon/polygon-handler';
import { pyramidHandler } from '../series/pyramid/pyramid-handler';
import { pyramid3dHandler } from '../series/pyramid3d/pyramid3d-handler';
import { sankeyHandler } from '../series/sankey/sankey-handler';
import { scatterHandler } from '../series/scatter/scatter-handler';
import { scatter3dHandler } from '../series/scatter3d/scatter3d-handler';
import { solidgaugeHandler } from '../series/solidgauge/solidgauge-handler';
import { splineHandler } from '../series/spline/spline-handler';
import { streamgraphHandler } from '../series/streamgraph/streamgraph-handler';
import { sunburstHandler } from '../series/sunburst/sunburst-handler';
import { tilemapHandler } from '../series/tilemap/tilemap-handler';
import { timelineHandler } from '../series/timeline/timeline-handler';
import { treemapHandler } from '../series/treemap/treemap-handler';
import { variablepieHandler } from '../series/variablepie/variablepie-handler';
import { variwideHandler } from '../series/variwide/variwide-handler';
import { vectorHandler } from '../series/vector/vector-handler';
import { vennHandler } from '../series/venn/venn-handler';
import { waterfallHandler } from '../series/waterfall/waterfall-handler';
import { windbarbHandler } from '../series/windbarb/windbarb-handler';
import { wordcloudHandler } from '../series/wordcloud/wordcloud-handler';
import { xrangeHandler } from '../series/xrange/xrange-handler';

const seriesHandlers = {
	HIArea: (options) => areaHandler(options),
	HIArearange: (options) => arearangeHandler(options),
	HIAreaspline: (options) => areasplineHandler(options),
	HIAreasplinerange: (options) => areasplinerangeHandler(options),
	HIBar: (options) => barHandler(options),
	HIBellcurve: (options) => bellcurveHandler(options),
	HIBoxplot: (options) => boxplotHandler(options),
	HIBubble: (options) => bubbleHandler(options),
	HIBullet: (options) => bulletHandler(options),
	HIColumn: (options) => columnHandler(options),
	HIColumnpyramid: (options) => columnpyramidHandler(options),
	HIColumnrange: (options) => columnrangeHandler(options),
	HICylinder: (options) => cylinderHandler(options),
	HIDependencywheel: (options) => dependencywheelHandler(options),
	HIDumbbell: (options) => dumbbellHandler(options),
	HIErrorbar: (options) => errorbarHandler(options),
	HIFunnel: (options) => funnelHandler(options),
	HIFunnel3d: (options) => funnel3dHandler(options),
	HIGauge: (options) => gaugeHandler(options),
	HIHeatmap: (options) => heatmapHandler(options),
	HIHistogram: (options) => histogramHandler(options),
	HIItem: (options) => itemHandler(options),
	HILine: (options) => lineHandler(options),
	HILollipop: (options) => lollipopHandler(options),
	HINetworkgraph: (options) => networkgraphHandler(options),
	HIOrganization: (options) => organizationHandler(options),
	HIPackedbubble: (options) => packedbubbleHandler(options),
	HIPareto: (options) => paretoHandler(options),
	HIPie: (options) => pieHandler(options),
	HIPolygon: (options) => polygonHandler(options),
	HIPyramid: (options) => pyramidHandler(options),
	HIPyramid3d: (options) => pyramid3dHandler(options),
	HISankey: (options) => sankeyHandler(options),
	HIScatter: (options) => scatterHandler(options),
	HIScatter3d: (options) => scatter3dHandler(options),
	HISolidgauge: (options) => solidgaugeHandler(options),
	HISpline: (options) => splineHandler(options),
	HIStreamgraph: (options) => streamgraphHandler(options),
	HISunburst: (options) => sunburstHandler(options),
	HITilemap: (options) => tilemapHandler(options),
	HITimeline: (options) => timelineHandler(options),
	HITreemap: (options) => treemapHandler(options),
	HIVariablepie: (options) => variablepieHandler(options),
	HIVariwide: (options) => variwideHandler(options),
	HIVector: (options) => vectorHandler(options),
	HIVenn: (options) => vennHandler(options),
	HIWaterfall: (options) => waterfallHandler(options),
	HIWindbarb: (options) => windbarbHandler(options),
	HIWordcloud: (options) => wordcloudHandler(options),
	HIXrange: (options) => xrangeHandler(options),
};

export const typesMap = {
	string: (options) => options,
	HIAccessibility: (options) => accessibilityHandler(options),
	HIAlignObject: (options) => alignObjectHandler(options),
	HIAnnotations: (options) => annotationsHandler(options),
	HIAnnotationsOptions: (options) => annotationsOptionsHandler(options),
	HIAnimationOptionsObject: (options) => animationOptionsObjectHandler(options),
	// 'HIBoost': (options) => boostHandler(options),
	HIButtonOptions: (options) => buttonOptionsHandler(options),
	// 'HICaption': (options) => captionHandler(options),
	HIChart: (options) => chartHandler(options),
	HICredits: (options) => creditsHandler(options),
	HICSSObject: (options) => styleHandler(options),
	HIDateTimeLabelFormats: (options) => dateTimeLabelFormatsHandler(options),
	HIDataLabels: (options) => dataLabelsHandler(options),
	// 'HIColorAxis': (options) => colorAxisHandler(options),
	// 'HICredits': (options) => creditsHandler(options),
	// 'HIData': (options) => dataHandler(options),
	// 'HIDefs': (options) => defsHandler(options),
	// 'HIDrilldown': (options) => drilldownHandler(options),
	HIExporting: (options) => exportingHandler(options),
	HIEvents: (options) => eventsHandler(options),
	HIFunction: (options) => functionHandler(options),
	HIHover: (options) => hoverHandler(options),
	HILabel: (options) => labelHandler(options),
	HILabels: (options) => labelsHandler(options),
	HILayoutAlgorithm: (options) => layoutAlgorithmHandler(options),
	HILegend: (options) => legendHandler(options),
	HILink: (options) => linkHandler(options),
	HIMarker: (options) => markerHandler(options),
	// 'HILoading': (options) => loadingHandler(options),
	HINavigation: (options) => navigationHandler(options),
	// 'HINoData': (options) => noDataHandler(options),
	HIOptions3d: (options) => options3dHandler(options),
	// 'HIPane': (options) => paneHandler(options),
	HIPanning: (options) => panningHandler(options),
	HIPoint: (options) => pointHandler(options),
	HIPopup: (options) => popupHandler(options),
	HIPlotOptions: (options) => plotOptionsHandler(options),
	HIPlotBands: (options) => plotBandsHandler(options),
	HIPlotLines: (options) => plotLinesHandler(options),
	// 'HIResponsive': (options) => responsiveHandler(options),
	HIResetZoomButton: (options) => resetZoomButtonHandler(options),
	HIScrollablePlotArea: (options) => scrollablePlotAreaHandler(options),
	HISeries: (options) => seriesHandler(options),
	HIShapes: (options) => shapesHandler(options),
	HIStackLabels: (options) => stackLabelsHandler(options),
	HIStates: (options) => statesHandler(options),
	HISubtitle: (options) => subtitleHandler(options),
	HITime: (options) => timeHandler(options),
	HITitle: (options) => titleHandler(options),
	HITheme: (options) => themeHandler(options),
	HITooltip: (options) => tooltipHandler(options),
	HIXAxis: (options) => xAxisHandler(options),
	HIYAxis: (options) => yAxisHandler(options),
	HIZAxis: (options) => zAxisHandler(options),
	HIZones: (options) => zonesHandler(options),

	// Frame handlers
	HIFrame: (options) => frameHandler(options),
	HIBack: (options) => backHandler(options),
	HIBottom: (options) => bottomHandler(options),
	HIFront: (options) => frontHandler(options),
	HILeft: (options) => leftHandler(options),
	HIRight: (options) => rightHandler(options),
	HITop: (options) => topHandler(options),

	// Series handlers
	...seriesHandlers,
};
