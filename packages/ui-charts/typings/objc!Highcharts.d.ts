declare class HIAccessibility extends HIChartsJSONSerializable {
	static alloc(): HIAccessibility; // inherited from NSObject

	static new(): HIAccessibility; // inherited from NSObject

	announceNewData: HIAnnounceNewData;

	axis: HIAxis;

	chartContainerLabel: string;

	chartTypes: HIChartTypes;

	credits: string;

	customComponents: any;

	defaultChartTitle: string;

	definition: string;

	drillUpButton: string;

	enabled: number;

	exporting: HIAccessibilityExporting;

	exposeAsGroupOnly: number;

	graphicContainerLabel: string;

	highContrastTheme: any;

	keyboardNavigation: HIKeyboardNavigation;

	landmarkVerbosity: string;

	legend: HIAccessibilityLegend;

	linkedDescription: string;

	point: HIPoint;

	pointDescriptionFormatter: HIFunction;

	rangeDescription: string;

	rangeSelector: HIRangeSelector;

	screenReaderSection: HIScreenReaderSection;

	series: HIAccessibilitySeries;

	seriesTypeDescriptions: HISeriesTypeDescriptions;

	sonification: HISonification;

	svgContainerLabel: string;

	svgContainerTitle: string;

	table: HITable;

	thousandsSep: string;

	typeDescription: string;

	zoom: HIZoom;

	getParams(): NSDictionary<any, any>;
}

declare class HIAccessibilityExporting extends HIChartsJSONSerializable {
	static alloc(): HIAccessibilityExporting; // inherited from NSObject

	static new(): HIAccessibilityExporting; // inherited from NSObject

	chartMenuLabel: string;

	exportRegionLabel: string;

	menuButtonLabel: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIAccessibilityLegend extends HIChartsJSONSerializable {
	static alloc(): HIAccessibilityLegend; // inherited from NSObject

	static new(): HIAccessibilityLegend; // inherited from NSObject

	legendItem: string;

	legendLabel: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIAccessibilitySeries extends HIChartsJSONSerializable {
	static alloc(): HIAccessibilitySeries; // inherited from NSObject

	static new(): HIAccessibilitySeries; // inherited from NSObject

	definition: string;

	summary: HISummary;

	xAxisDescription: string;

	yAxisDescription: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIActiveDataLabelStyle extends HIChartsJSONSerializable {
	static alloc(): HIActiveDataLabelStyle; // inherited from NSObject

	static new(): HIActiveDataLabelStyle; // inherited from NSObject

	color: string;

	cursor: string;

	fontWeight: string;

	textDecoration: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIAlignObject extends HIChartsJSONSerializable {
	static alloc(): HIAlignObject; // inherited from NSObject

	static new(): HIAlignObject; // inherited from NSObject

	align: string;

	alignByTranslate: number;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIAnimation extends HIChartsJSONSerializable {
	static alloc(): HIAnimation; // inherited from NSObject

	static new(): HIAnimation; // inherited from NSObject

	duration: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIAnimationOptionsObject extends HIChartsJSONSerializable {
	static alloc(): HIAnimationOptionsObject; // inherited from NSObject

	static new(): HIAnimationOptionsObject; // inherited from NSObject

	complete: HIFunction;

	duration: number;

	easing: string;

	step: HIFunction;

	getParams(): NSDictionary<any, any>;
}

declare class HIAnnotations extends HIChartsJSONSerializable {
	static alloc(): HIAnnotations; // inherited from NSObject

	static new(): HIAnnotations; // inherited from NSObject

	controlPointOptions: HIControlPointOptions;

	descriptionMultiplePoints: string;

	descriptionNoPoints: string;

	descriptionSinglePoint: string;

	draggable: string;

	events: HIEvents;

	heading: string;

	id: string;

	labelOptions: HILabelOptions;

	labels: NSArray<HILabels>;

	shapeOptions: HIShapeOptions;

	shapes: NSArray<HIShapes>;

	visible: number;

	zIndex: number;

	adjustLabelVisibility(item: HILabels): void;

	adjustShapeVisibility(item: HIShapes): void;

	destroy(): void;

	destroyLabelItem(item: HILabels): void;

	destroyShapeItem(item: HIShapes): void;

	getParams(): NSDictionary<any, any>;

	initLabel(labelOptions: HILabels): void;

	initShape(shapeOptions: HIShapes): void;

	redrawLabelItem(item: HILabels): void;

	redrawLabelItemAnimation(item: HILabels, animation: number): void;

	redrawLabelItems(items: NSArray<HILabels> | HILabels[]): void;

	redrawLabelItemsAnimation(items: NSArray<HILabels> | HILabels[], animation: number): void;

	redrawShapeItem(item: HIShapes): void;

	redrawShapeItemAnimation(item: HIShapes, animation: number): void;

	redrawShapeItems(items: NSArray<HIShapes> | HIShapes[]): void;

	redrawShapeItemsAnimation(items: NSArray<HIShapes> | HIShapes[], animation: number): void;

	remove(): void;

	setOptions(): void;

	setVisibility(): void;
}

declare class HIAnnotationsOptions extends HIChartsJSONSerializable {
	static alloc(): HIAnnotationsOptions; // inherited from NSObject

	static new(): HIAnnotationsOptions; // inherited from NSObject

	controlPointOptions: HIControlPointOptions;

	draggable: string;

	events: HIEvents;

	id: string;

	labelOptions: HILabelOptions;

	labels: NSArray<HILabels>;

	shapeOptions: HIShapeOptions;

	shapes: NSArray<HIShapes>;

	visible: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIAnnounceNewData extends HIChartsJSONSerializable {
	static alloc(): HIAnnounceNewData; // inherited from NSObject

	static new(): HIAnnounceNewData; // inherited from NSObject

	announcementFormatter: HIFunction;

	dataAnnounce: string;

	enabled: number;

	interruptUser: number;

	minAnnounceInterval: number;

	pointAnnounceMultiple: string;

	pointAnnounceSingle: string;

	seriesAnnounceMultiple: string;

	seriesAnnounceSingle: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIArea extends HISeries {
	static alloc(): HIArea; // inherited from NSObject

	static new(): HIArea; // inherited from NSObject

	fillColor: HIColor;

	fillOpacity: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	trackByArea: number;
}

declare class HIArearange extends HISeries {
	static alloc(): HIArearange; // inherited from NSObject

	static new(): HIArearange; // inherited from NSObject

	fillColor: HIColor;

	fillOpacity: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	trackByArea: number;
}

declare class HIAreaspline extends HISeries {
	static alloc(): HIAreaspline; // inherited from NSObject

	static new(): HIAreaspline; // inherited from NSObject

	fillColor: HIColor;

	fillOpacity: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	trackByArea: number;
}

declare class HIAreasplinerange extends HISeries {
	static alloc(): HIAreasplinerange; // inherited from NSObject

	static new(): HIAreasplinerange; // inherited from NSObject

	fillColor: HIColor;

	fillOpacity: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	trackByArea: number;
}

declare class HIArrow extends HIChartsJSONSerializable {
	static alloc(): HIArrow; // inherited from NSObject

	static new(): HIArrow; // inherited from NSObject

	children: NSArray<any>;

	id: string;

	markerHeight: number;

	markerWidth: number;

	refX: number;

	refY: number;

	render: number;

	tagName: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIAttr extends HIChartsJSONSerializable {
	static alloc(): HIAttr; // inherited from NSObject

	static new(): HIAttr; // inherited from NSObject

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIAttributes extends HIChartsJSONSerializable {
	static alloc(): HIAttributes; // inherited from NSObject

	static new(): HIAttributes; // inherited from NSObject

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIAxis extends HIChartsJSONSerializable {
	static alloc(): HIAxis; // inherited from NSObject

	static new(): HIAxis; // inherited from NSObject

	rangeCategories: string;

	rangeFromTo: string;

	timeRangeDays: string;

	timeRangeHours: string;

	timeRangeMinutes: string;

	timeRangeSeconds: string;

	xAxisDescriptionPlural: string;

	xAxisDescriptionSingular: string;

	yAxisDescriptionPlural: string;

	yAxisDescriptionSingular: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIBack extends HIChartsJSONSerializable {
	static alloc(): HIBack; // inherited from NSObject

	static new(): HIBack; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIBackground extends HIChartsJSONSerializable {
	static alloc(): HIBackground; // inherited from NSObject

	static new(): HIBackground; // inherited from NSObject

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderWidth: number;

	className: string;

	innerRadius: any;

	outerRadius: any;

	shape: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIBar extends HISeries {
	static alloc(): HIBar; // inherited from NSObject

	static new(): HIBar; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIBellcurve extends HISeries {
	static alloc(): HIBellcurve; // inherited from NSObject

	static new(): HIBellcurve; // inherited from NSObject

	baseSeries: any;

	fillColor: HIColor;

	fillOpacity: number;

	intervals: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	pointsInInterval: number;

	trackByArea: number;
}

declare class HIBindings extends HIChartsJSONSerializable {
	static alloc(): HIBindings; // inherited from NSObject

	static new(): HIBindings; // inherited from NSObject

	circleAnnotation: HINavigationBindingsOptionsObject;

	labelAnnotation: HINavigationBindingsOptionsObject;

	rectangleAnnotation: HINavigationBindingsOptionsObject;

	getParams(): NSDictionary<any, any>;
}

declare class HIBoost extends HIChartsJSONSerializable {
	static alloc(): HIBoost; // inherited from NSObject

	static new(): HIBoost; // inherited from NSObject

	allowForce: number;

	debug: HIDebug;

	enabled: number;

	seriesThreshold: number;

	useGPUTranslations: number;

	usePreallocated: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIBottom extends HIChartsJSONSerializable {
	static alloc(): HIBottom; // inherited from NSObject

	static new(): HIBottom; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIBoxplot extends HISeries {
	static alloc(): HIBoxplot; // inherited from NSObject

	static new(): HIBoxplot; // inherited from NSObject

	boxDashStyle: string;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	fillColor: HIColor;

	groupPadding: number;

	grouping: number;

	maxPointWidth: number;

	medianColor: HIColor;

	medianDashStyle: string;

	medianWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	stemDashStyle: string;

	stemWidth: number;

	whiskerColor: HIColor;

	whiskerDashStyle: string;

	whiskerLength: any;

	whiskerWidth: number;
}

declare class HIBreaks extends HIChartsJSONSerializable {
	static alloc(): HIBreaks; // inherited from NSObject

	static new(): HIBreaks; // inherited from NSObject

	breakSize: number;

	from: number;

	repeat: number;

	to: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIBubble extends HISeries {
	static alloc(): HIBubble; // inherited from NSObject

	static new(): HIBubble; // inherited from NSObject

	displayNegative: number;

	jitter: HIJitter;

	maxSize: any;

	minSize: any;

	sizeBy: string;

	sizeByAbsoluteValue: number;

	zMax: number;

	zMin: number;

	zThreshold: number;
}

declare class HIBubbleLegend extends HIChartsJSONSerializable {
	static alloc(): HIBubbleLegend; // inherited from NSObject

	static new(): HIBubbleLegend; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	className: string;

	color: HIColor;

	connectorClassName: string;

	connectorColor: HIColor;

	connectorDistance: number;

	connectorWidth: number;

	enabled: number;

	labels: HILabels;

	legendIndex: number;

	maxSize: number;

	minSize: number;

	ranges: NSArray<HIRanges>;

	sizeBy: string;

	sizeByAbsoluteValue: number;

	zIndex: number;

	zThreshold: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIBullet extends HISeries {
	static alloc(): HIBullet; // inherited from NSObject

	static new(): HIBullet; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	targetOptions: HITargetOptions;
}

declare class HIButtonOptions extends HIChartsJSONSerializable {
	static alloc(): HIButtonOptions; // inherited from NSObject

	static new(): HIButtonOptions; // inherited from NSObject

	align: string;

	buttonSpacing: number;

	enabled: number;

	height: number;

	symbolFill: HIColor;

	symbolSize: number;

	symbolStroke: HIColor;

	symbolStrokeWidth: number;

	symbolX: number;

	symbolY: number;

	text: string;

	theme: HITheme;

	verticalAlign: string;

	width: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIButtons extends HIChartsJSONSerializable {
	static alloc(): HIButtons; // inherited from NSObject

	static new(): HIButtons; // inherited from NSObject

	contextButton: HIContextButton;

	getParams(): NSDictionary<any, any>;
}

declare class HICSSObject extends HIChartsJSONSerializable {
	static alloc(): HICSSObject; // inherited from NSObject

	static new(): HICSSObject; // inherited from NSObject

	background: string;

	backgroundColor: string;

	border: string;

	borderRadius: number;

	color: string;

	cursor: string;

	fontFamily: string;

	fontSize: string;

	fontWeight: string;

	height: number;

	lineWidth: number;

	opacity: number;

	padding: string;

	pointerEvents: string;

	position: string;

	textAlign: string;

	textDecoration: string;

	textOutline: string;

	textOverflow: string;

	top: string;

	transition: string;

	whiteSpace: string;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HICaption extends HIChartsJSONSerializable {
	static alloc(): HICaption; // inherited from NSObject

	static new(): HICaption; // inherited from NSObject

	align: string;

	floating: number;

	margin: number;

	style: HICSSObject;

	text: string;

	useHTML: number;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIChart extends HIChartsJSONSerializable {
	static alloc(): HIChart; // inherited from NSObject

	static new(): HIChart; // inherited from NSObject

	alignTicks: number;

	animation: HIAnimationOptionsObject;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	className: string;

	colorCount: number;

	displayErrors: number;

	events: HIEvents;

	height: any;

	ignoreHiddenSeries: number;

	inverted: number;

	margin: NSArray<number>;

	marginBottom: number;

	marginLeft: number;

	marginRight: number;

	marginTop: number;

	numberFormatter: HIFunction;

	options3d: HIOptions3d;

	panKey: string;

	panning: HIPanning;

	parallelAxes: HIParallelAxes;

	parallelCoordinates: number;

	pinchType: string;

	plotBackgroundColor: HIColor;

	plotBackgroundImage: string;

	plotBorderColor: HIColor;

	plotBorderWidth: number;

	plotShadow: HICSSObject;

	polar: number;

	reflow: number;

	renderTo: string;

	resetZoomButton: HIResetZoomButton;

	scrollablePlotArea: HIScrollablePlotArea;

	selectionMarkerFill: HIColor;

	shadow: HICSSObject;

	showAxes: number;

	spacing: NSArray<number>;

	spacingBottom: number;

	spacingLeft: number;

	spacingRight: number;

	spacingTop: number;

	style: HICSSObject;

	styledMode: number;

	type: string;

	width: any;

	zoomKey: string;

	zoomType: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIChartContext extends NSObject implements NSCopying {
	static alloc(): HIChartContext; // inherited from NSObject

	static new(): HIChartContext; // inherited from NSObject

	constructor(o: { context: NSDictionary<any, any> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getProperty(param: string): any;

	initWithContext(context: NSDictionary<any, any>): this;
}

declare class HIChartTypes extends HIChartsJSONSerializable {
	static alloc(): HIChartTypes; // inherited from NSObject

	static new(): HIChartTypes; // inherited from NSObject

	barMultiple: string;

	barSingle: string;

	boxplotMultiple: string;

	boxplotSingle: string;

	bubbleMultiple: string;

	bubbleSingle: string;

	columnMultiple: string;

	columnSingle: string;

	combinationChart: string;

	defaultMultiple: string;

	defaultSingle: string;

	emptyChart: string;

	lineMultiple: string;

	lineSingle: string;

	mapTypeDescription: string;

	pieMultiple: string;

	pieSingle: string;

	scatterMultiple: string;

	scatterSingle: string;

	splineMultiple: string;

	splineSingle: string;

	unknownMap: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIChartView extends UIView {
	static addFont(path: string): void;

	static alloc(): HIChartView; // inherited from NSObject

	static appearance(): HIChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): HIChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HIChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HIChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HIChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HIChartView; // inherited from UIAppearance

	static new(): HIChartView; // inherited from NSObject

	static preload(): void;

	debug: boolean;

	delegate: HIChartViewDelegate;

	global: HIGlobal;

	lang: HILang;

	options: HIOptions;

	plugins: NSArray<any>;

	theme: string;

	viewController: UIViewController;

	static synced: number;

	addAnnotation(options: HIAnnotations): void;

	addAnnotationRedraw(options: HIAnnotations, redraw: number): void;

	addColorAxis(options: HIColorAxis): void;

	addColorAxisRedraw(options: HIColorAxis, redraw: number): void;

	addColorAxisRedrawAnimation(options: HIColorAxis, redraw: number, animation: HIAnimationOptionsObject): void;

	addCredits(options: HICredits): void;

	addSeries(options: HISeries): void;

	addSeriesAsDrilldownOptions(point: HIPoint, options: HISeries): void;

	addSeriesRedraw(options: HISeries, redraw: number): void;

	addSeriesRedrawAnimation(options: HISeries, redraw: number, animation: HIAnimationOptionsObject): void;

	addXAxis(options: HIXAxis): void;

	addXAxisRedraw(options: HIXAxis, redraw: number): void;

	addXAxisRedrawAnimation(options: HIXAxis, redraw: number, animation: HIAnimationOptionsObject): void;

	addYAxis(options: HIYAxis): void;

	addYAxisRedraw(options: HIYAxis, redraw: number): void;

	addYAxisRedrawAnimation(options: HIYAxis, redraw: number, animation: HIAnimationOptionsObject): void;

	cancelSonify(): void;

	destroy(): void;

	drillUp(): void;

	exportToCSV(): void;

	exportToPDF(): void;

	exportToPNG(): void;

	hideLoading(): void;

	loadChart(): void;

	loadJSONOptions(options: NSDictionary<any, any>): void;

	openInCloud(): void;

	pauseSonify(): void;

	print(): void;

	redraw(): void;

	reload(): void;

	removeAnnotation(annotation: HIAnnotations): void;

	removeAnnotationById(id: string): void;

	resetSonifyCursor(): void;

	resetSonifyCursorEnd(): void;

	setCaption(options: HICaption): void;

	setClassName(): void;

	setSonifyCursorToPoint(point: HIPoint): void;

	setSonifyCursorToPoints(points: NSArray<HIPoint> | HIPoint[]): void;

	setSubtitle(options: HISubtitle): void;

	setTitleSubtitleOptionsRedraw(titleOptions: HITitle, subtitleOptions: HISubtitle, redraw: number): void;

	showLoading(str: string): void;

	sonify(options: NSDictionary<any, any>): void;

	update(options: HIOptions): void;

	updateOptions(): void;

	updateRedraw(options: HIOptions, redraw: number): void;

	updateRedrawOneToOne(options: HIOptions, redraw: number, oneToOne: number): void;

	updateRedrawOneToOneAnimation(options: HIOptions, redraw: number, oneToOne: number, animation: HIAnimationOptionsObject): void;

	viewData(): void;

	zoomOut(): void;
}

interface HIChartViewDelegate extends NSObjectProtocol {
	chartViewDidLoad(chart: HIChartView): void;
}
declare var HIChartViewDelegate: {
	prototype: HIChartViewDelegate;
};

declare class HIChartsJSONSerializable extends NSObject implements NSCopying {
	static alloc(): HIChartsJSONSerializable; // inherited from NSObject

	static new(): HIChartsJSONSerializable; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class HICluster extends HIChartsJSONSerializable {
	static alloc(): HICluster; // inherited from NSObject

	static new(): HICluster; // inherited from NSObject

	allowOverlap: number;

	animation: HIAnimationOptionsObject;

	dataLabels: HIDataLabels;

	drillToCluster: number;

	enabled: number;

	events: HIEvents;

	layoutAlgorithm: HILayoutAlgorithm;

	marker: HIMarker;

	minimumClusterSize: number;

	states: HIStates;

	zones: NSArray<HIZones>;

	getParams(): NSDictionary<any, any>;
}

declare class HIColor extends HIChartsJSONSerializable {
	static alloc(): HIColor; // inherited from NSObject

	static new(): HIColor; // inherited from NSObject

	constructor(o: { hexValue: string });

	constructor(o: { linearGradient: NSDictionary<any, any>; stops: NSArray<any> | any[] });

	constructor(o: { name: string });

	constructor(o: { RGBA: number; green: number; blue: number; alpha: number });

	constructor(o: { RGB: number; green: number; blue: number });

	constructor(o: { radialGradient: NSDictionary<any, any>; stops: NSArray<any> | any[] });

	constructor(o: { UIColor: UIColor });

	getData(): any;

	initWithHexValue(string: string): this;

	initWithLinearGradientStops(gradient: NSDictionary<any, any>, stops: NSArray<any> | any[]): this;

	initWithName(name: string): this;

	initWithRGBAGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): this;

	initWithRGBGreenBlue(red: number, green: number, blue: number): this;

	initWithRadialGradientStops(gradient: NSDictionary<any, any>, stops: NSArray<any> | any[]): this;

	initWithUIColor(color: UIColor): this;
}

declare class HIColorAxis extends HIChartsJSONSerializable {
	static alloc(): HIColorAxis; // inherited from NSObject

	static new(): HIColorAxis; // inherited from NSObject

	accessibility: HIAccessibility;

	angle: number;

	ceiling: number;

	className: string;

	dataClassColor: string;

	dataClasses: NSArray<HIDataClasses>;

	endOnTick: number;

	events: HIEvents;

	floor: number;

	gridLineColor: HIColor;

	gridLineDashStyle: string;

	gridLineInterpolation: string;

	gridLineWidth: number;

	gridZIndex: number;

	id: string;

	labels: HILabels;

	layout: string;

	lineColor: HIColor;

	margin: number;

	marker: HIMarker;

	max: number;

	maxColor: HIColor;

	maxPadding: number;

	min: number;

	minColor: HIColor;

	minPadding: number;

	minorGridLineColor: HIColor;

	minorGridLineDashStyle: string;

	minorGridLineWidth: number;

	minorTickColor: HIColor;

	minorTickInterval: any;

	minorTickLength: number;

	minorTickPosition: string;

	minorTickWidth: number;

	minorTicks: number;

	reversed: number;

	showFirstLabel: number;

	showInLegend: number;

	showLastLabel: number;

	softMax: number;

	softMin: number;

	startOfWeek: number;

	startOnTick: number;

	stops: NSArray<NSArray<any>>;

	tickAmount: number;

	tickColor: HIColor;

	tickInterval: number;

	tickLength: number;

	tickPixelInterval: number;

	tickPosition: string;

	tickPositioner: HIFunction;

	tickPositions: NSArray<number>;

	tickWidth: number;

	tickmarkPlacement: string;

	type: string;

	uniqueNames: number;

	units: NSArray<NSArray<any>>;

	visible: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIColorVariation extends HIChartsJSONSerializable {
	static alloc(): HIColorVariation; // inherited from NSObject

	static new(): HIColorVariation; // inherited from NSObject

	key: string;

	to: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIColumn extends HISeries {
	static alloc(): HIColumn; // inherited from NSObject

	static new(): HIColumn; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIColumnpyramid extends HISeries {
	static alloc(): HIColumnpyramid; // inherited from NSObject

	static new(): HIColumnpyramid; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	groupPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIColumnrange extends HISeries {
	static alloc(): HIColumnrange; // inherited from NSObject

	static new(): HIColumnrange; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: any;

	pointWidth: number;
}

declare class HICondition extends HIChartsJSONSerializable {
	static alloc(): HICondition; // inherited from NSObject

	static new(): HICondition; // inherited from NSObject

	callback: HIFunction;

	maxHeight: number;

	maxWidth: number;

	minHeight: number;

	minWidth: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIContextButton extends HIChartsJSONSerializable {
	static alloc(): HIContextButton; // inherited from NSObject

	static new(): HIContextButton; // inherited from NSObject

	align: string;

	buttonSpacing: number;

	className: string;

	enabled: number;

	height: number;

	menuClassName: string;

	menuItems: NSArray<string>;

	onclick: HIFunction;

	symbol: string;

	symbolFill: HIColor;

	symbolSize: number;

	symbolStroke: HIColor;

	symbolStrokeWidth: number;

	symbolX: number;

	symbolY: number;

	text: string;

	theme: HITheme;

	titleKey: string;

	verticalAlign: string;

	width: number;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIControlPointOptions extends HIChartsJSONSerializable {
	static alloc(): HIControlPointOptions; // inherited from NSObject

	static new(): HIControlPointOptions; // inherited from NSObject

	height: number;

	positioner: HIFunction;

	style: HIStyle;

	symbol: string;

	visible: number;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HICredits extends HIChartsJSONSerializable {
	static alloc(): HICredits; // inherited from NSObject

	static new(): HICredits; // inherited from NSObject

	enabled: number;

	href: string;

	position: HIAlignObject;

	style: HICSSObject;

	text: string;

	getParams(): NSDictionary<any, any>;
}

declare class HICrosshair extends HIChartsJSONSerializable {
	static alloc(): HICrosshair; // inherited from NSObject

	static new(): HICrosshair; // inherited from NSObject

	className: string;

	color: HIColor;

	dashStyle: string;

	snap: number;

	width: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HICsv extends HIChartsJSONSerializable {
	static alloc(): HICsv; // inherited from NSObject

	static new(): HICsv; // inherited from NSObject

	columnHeaderFormatter: HIFunction;

	dateFormat: string;

	decimalPoint: string;

	itemDelimiter: string;

	lineDelimiter: string;

	getParams(): NSDictionary<any, any>;
}

declare class HICylinder extends HISeries {
	static alloc(): HICylinder; // inherited from NSObject

	static new(): HICylinder; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIData extends HIChartsJSONSerializable {
	static alloc(): HIData; // inherited from NSObject

	static new(): HIData; // inherited from NSObject

	accessibility: HIAccessibility;

	beforeParse: HIFunction;

	borderColor: HIColor;

	borderWidth: number;

	boxDashStyle: string;

	className: string;

	color: HIColor;

	colorIndex: number;

	colorValue: number;

	columns: NSArray<NSArray<any>>;

	columnsURL: string;

	complete: HIFunction;

	connectorColor: string;

	connectorWidth: number;

	csv: string;

	csvURL: string;

	custom: NSDictionary<any, any>;

	dashStyle: string;

	dataLabels: HIDataLabels;

	dataRefreshRate: number;

	dateFormat: string;

	decimalPoint: string;

	definition: string;

	direction: number;

	dragDrop: HIDragDrop;

	drilldown: string;

	enablePolling: number;

	endColumn: number;

	endRow: number;

	events: HIEvents;

	firstRowAsNames: number;

	from: string;

	googleSpreadsheetKey: string;

	googleSpreadsheetWorksheet: string;

	gradientForSides: number;

	high: number;

	id: string;

	innerRadius: any;

	isIntermediateSum: number;

	isSum: number;

	itemDelimiter: string;

	label: string;

	labelrank: number;

	legendIndex: number;

	length: number;

	lineDelimiter: string;

	low: number;

	lowColor: HIColor;

	marker: HIMarker;

	median: number;

	medianDashStyle: string;

	name: string;

	outgoing: number;

	parent: string;

	parseDate: HIFunction;

	parsed: HIFunction;

	partialFill: HIPartialFill;

	pointPadding: number;

	pointWidth: number;

	q1: number;

	q3: number;

	radius: any;

	rows: NSArray<NSArray<any>>;

	rowsURL: string;

	selected: number;

	seriesMapping: NSArray<any>;

	sets: NSArray<string>;

	sliced: number;

	startColumn: number;

	startRow: number;

	stemDashStyle: string;

	switchRowsAndColumns: number;

	table: string;

	target: number;

	targetOptions: HITargetOptions;

	to: string;

	value: number;

	weight: number;

	whiskerDashStyle: string;

	x: number;

	x2: number;

	y: number;

	z: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDataClasses extends HIChartsJSONSerializable {
	static alloc(): HIDataClasses; // inherited from NSObject

	static new(): HIDataClasses; // inherited from NSObject

	color: HIColor;

	from: number;

	name: string;

	to: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDataGrouping extends HIChartsJSONSerializable {
	static alloc(): HIDataGrouping; // inherited from NSObject

	static new(): HIDataGrouping; // inherited from NSObject

	approximation: string;

	enabled: number;

	groupPixelWidth: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDataLabels extends HIChartsJSONSerializable {
	static alloc(): HIDataLabels; // inherited from NSObject

	static new(): HIDataLabels; // inherited from NSObject

	align: string;

	alignTo: string;

	allowOverlap: number;

	alternate: number;

	attributes: HISVGAttributes;

	backgroundColor: string;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	className: string;

	color: HIColor;

	connectorColor: HIColor;

	connectorPadding: number;

	connectorShape: string;

	connectorWidth: number;

	crookDistance: string;

	crop: number;

	defer: number;

	distance: number;

	enabled: number;

	filter: HIFilter;

	format: string;

	formatter: HIFunction;

	inside: number;

	linkFormat: string;

	linkFormatter: HIFunction;

	linkTextPath: HILinkTextPath;

	nodeFormat: string;

	nodeFormatter: HIFunction;

	nullFormat: any;

	nullFormatter: HIFunction;

	overflow: string;

	padding: number;

	parentNodeFormat: string;

	parentNodeFormatter: HIFunction;

	parentNodeTextPath: HIParentNodeTextPath;

	position: string;

	rotation: number;

	rotationMode: string;

	shadow: HIShadowOptionsObject;

	shape: string;

	softConnector: number;

	style: HIStyle;

	textPath: HITextPath;

	useHTML: number;

	verticalAlign: string;

	width: number;

	x: number;

	xHigh: number;

	xLow: number;

	y: number;

	yHigh: number;

	yLow: number;

	z: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDataSorting extends HIChartsJSONSerializable {
	static alloc(): HIDataSorting; // inherited from NSObject

	static new(): HIDataSorting; // inherited from NSObject

	enabled: number;

	matchByName: number;

	sortKey: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIDataSortingOptionsObject extends HIChartsJSONSerializable {
	static alloc(): HIDataSortingOptionsObject; // inherited from NSObject

	static new(): HIDataSortingOptionsObject; // inherited from NSObject

	enabled: number;

	matchByName: number;

	sortKey: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIDateTimeLabelFormats extends HIChartsJSONSerializable {
	static alloc(): HIDateTimeLabelFormats; // inherited from NSObject

	static new(): HIDateTimeLabelFormats; // inherited from NSObject

	day: HIDay;

	hour: HIHour;

	millisecond: HIMillisecond;

	minute: HIMinute;

	month: HIMonth;

	second: HISecond;

	week: HIWeek;

	year: HIYear;

	getParams(): NSDictionary<any, any>;
}

declare class HIDay extends HIChartsJSONSerializable {
	static alloc(): HIDay; // inherited from NSObject

	static new(): HIDay; // inherited from NSObject

	main: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIDebug extends HIChartsJSONSerializable {
	static alloc(): HIDebug; // inherited from NSObject

	static new(): HIDebug; // inherited from NSObject

	showSkipSummary: number;

	timeBufferCopy: number;

	timeKDTree: number;

	timeRendering: number;

	timeSeriesProcessing: number;

	timeSetup: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDefault extends HIChartsJSONSerializable {
	static alloc(): HIDefault; // inherited from NSObject

	static new(): HIDefault; // inherited from NSObject

	className: string;

	color: HIColor;

	cursor: string;

	lineColor: HIColor;

	lineWidth: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDefs extends HIChartsJSONSerializable {
	static alloc(): HIDefs; // inherited from NSObject

	static new(): HIDefs; // inherited from NSObject

	arrow: HISVGDefinitionObject;

	reverseArrow: HISVGDefinitionObject;

	getParams(): NSDictionary<any, any>;
}

declare class HIDependencywheel extends HISeries {
	static alloc(): HIDependencywheel; // inherited from NSObject

	static new(): HIDependencywheel; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	curveFactor: number;

	levels: NSArray<HILevels>;

	linkOpacity: number;

	minLinkWidth: number;

	nodePadding: number;

	nodeWidth: number;

	nodes: NSArray<HINodes>;

	startAngle: number;
}

declare class HIDial extends HIChartsJSONSerializable {
	static alloc(): HIDial; // inherited from NSObject

	static new(): HIDial; // inherited from NSObject

	backgroundColor: HIColor;

	baseLength: string;

	baseWidth: number;

	borderColor: HIColor;

	borderWidth: number;

	radius: string;

	rearLength: string;

	topWidth: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDragDrop extends HIChartsJSONSerializable {
	static alloc(): HIDragDrop; // inherited from NSObject

	static new(): HIDragDrop; // inherited from NSObject

	dragHandle: HIDragHandle;

	dragMaxX: number;

	dragMaxY: number;

	dragMinX: number;

	dragMinY: number;

	dragPrecisionX: number;

	dragPrecisionY: number;

	dragSensitivity: number;

	draggableHigh: number;

	draggableLow: number;

	draggableQ1: number;

	draggableQ3: number;

	draggableTarget: number;

	draggableX: number;

	draggableX1: number;

	draggableX2: number;

	draggableY: number;

	groupBy: string;

	guideBox: HIGuideBox;

	liveRedraw: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDragHandle extends HIChartsJSONSerializable {
	static alloc(): HIDragHandle; // inherited from NSObject

	static new(): HIDragHandle; // inherited from NSObject

	className: string;

	color: HIColor;

	cursor: string;

	lineColor: HIColor;

	lineWidth: number;

	pathFormatter: HIFunction;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIDrillUpButton extends HIChartsJSONSerializable {
	static alloc(): HIDrillUpButton; // inherited from NSObject

	static new(): HIDrillUpButton; // inherited from NSObject

	position: HIAlignObject;

	relativeTo: string;

	theme: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIDrilldown extends HIChartsJSONSerializable {
	static alloc(): HIDrilldown; // inherited from NSObject

	static new(): HIDrilldown; // inherited from NSObject

	activeAxisLabelStyle: HICSSObject;

	activeDataLabelStyle: HICSSObject;

	allowPointDrilldown: number;

	animation: HIAnimationOptionsObject;

	drillUpButton: HIDrillUpButton;

	series: NSArray<any>;

	getParams(): NSDictionary<any, any>;
}

declare class HIDumbbell extends HISeries {
	static alloc(): HIDumbbell; // inherited from NSObject

	static new(): HIDumbbell; // inherited from NSObject

	connectorColor: string;

	connectorWidth: number;

	groupPadding: number;

	lineColor: HIColor;

	lowColor: HIColor;

	negativeFillColor: HIColor;

	pointPadding: number;

	pointRange: number;
}

declare class HIErrorbar extends HISeries {
	static alloc(): HIErrorbar; // inherited from NSObject

	static new(): HIErrorbar; // inherited from NSObject

	boxDashStyle: string;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	fillColor: HIColor;

	groupPadding: number;

	grouping: number;

	maxPointWidth: number;

	medianColor: HIColor;

	medianDashStyle: string;

	medianWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	stemDashStyle: string;

	stemWidth: number;

	whiskerColor: HIColor;

	whiskerDashStyle: string;

	whiskerLength: any;

	whiskerWidth: number;
}

declare class HIEvents extends HIChartsJSONSerializable {
	static alloc(): HIEvents; // inherited from NSObject

	static new(): HIEvents; // inherited from NSObject

	add: HIFunction;

	addSeries: HIFunction;

	afterAnimate: HIFunction;

	afterBreaks: HIFunction;

	afterPrint: HIFunction;

	afterSetExtremes: HIFunction;

	afterUpdate: HIFunction;

	beforePrint: HIFunction;

	checkboxClick: HIFunction;

	click: HIFunction;

	closePopup: HIFunction;

	deselectButton: HIFunction;

	drag: HIFunction;

	dragStart: HIFunction;

	drillToCluster: HIFunction;

	drilldown: HIFunction;

	drillup: HIFunction;

	drillupall: HIFunction;

	drop: HIFunction;

	exportData: HIFunction;

	hide: HIFunction;

	legendItemClick: HIFunction;

	load: HIFunction;

	mouseOut: HIFunction;

	mouseOver: HIFunction;

	mousemove: HIFunction;

	mouseout: HIFunction;

	mouseover: HIFunction;

	pointBreak: HIFunction;

	pointInBreak: HIFunction;

	redraw: HIFunction;

	remove: HIFunction;

	render: HIFunction;

	select: HIFunction;

	selectButton: HIFunction;

	selection: HIFunction;

	setExtremes: HIFunction;

	setRootNode: HIFunction;

	show: HIFunction;

	showPopup: HIFunction;

	unselect: HIFunction;

	update: HIFunction;

	getParams(): NSDictionary<any, any>;
}

declare class HIExportData extends HIChartsJSONSerializable {
	static alloc(): HIExportData; // inherited from NSObject

	static new(): HIExportData; // inherited from NSObject

	categoryDatetimeHeader: string;

	categoryHeader: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIExporting extends HIChartsJSONSerializable {
	static alloc(): HIExporting; // inherited from NSObject

	static new(): HIExporting; // inherited from NSObject

	accessibility: HIAccessibility;

	allowHTML: number;

	buttons: HIButtons;

	chartMenuLabel: string;

	chartOptions: NSDictionary<any, any>;

	csv: HICsv;

	enabled: number;

	error: HIFunction;

	exportRegionLabel: string;

	fallbackToExportServer: number;

	filename: string;

	formAttributes: NSDictionary<any, any>;

	libURL: string;

	menuButtonLabel: string;

	menuItemDefinitions: any;

	printMaxWidth: number;

	scale: number;

	showTable: number;

	sourceHeight: number;

	sourceWidth: number;

	tableCaption: any;

	type: string;

	url: string;

	useMultiLevelHeaders: number;

	useRowspanHeaders: number;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIFilter extends HIChartsJSONSerializable {
	static alloc(): HIFilter; // inherited from NSObject

	static new(): HIFilter; // inherited from NSObject

	operator: string;

	property: string;

	value: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIFocusBorder extends HIChartsJSONSerializable {
	static alloc(): HIFocusBorder; // inherited from NSObject

	static new(): HIFocusBorder; // inherited from NSObject

	enabled: number;

	hideBrowserFocusOutline: number;

	margin: number;

	style: HICSSObject;

	getParams(): NSDictionary<any, any>;
}

declare class HIFrame extends HIChartsJSONSerializable {
	static alloc(): HIFrame; // inherited from NSObject

	static new(): HIFrame; // inherited from NSObject

	back: HIBack;

	bottom: HIBottom;

	front: HIFront;

	left: HILeft;

	right: HIRight;

	size: number;

	top: HITop;

	visible: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIFront extends HIChartsJSONSerializable {
	static alloc(): HIFront; // inherited from NSObject

	static new(): HIFront; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIFunction extends HIChartsJSONSerializable {
	static alloc(): HIFunction; // inherited from NSObject

	static new(): HIFunction; // inherited from NSObject

	closure: (p1: HIChartContext) => void;

	jsFunction: string;

	properties: NSArray<string>;

	constructor(o: { closure: (p1: HIChartContext) => void });

	constructor(o: { closure: (p1: HIChartContext) => void; jsFunction: string });

	constructor(o: { closure: (p1: HIChartContext) => void; jsFunction: string; properties: NSArray<string> | string[] });

	constructor(o: { closure: (p1: HIChartContext) => void; properties: NSArray<string> | string[] });

	constructor(o: { JSFunction: string });

	getFunction(): any;

	initWithClosure(closure: (p1: HIChartContext) => void): this;

	initWithClosureJsFunction(closure: (p1: HIChartContext) => void, jsFunction: string): this;

	initWithClosureJsFunctionProperties(closure: (p1: HIChartContext) => void, jsFunction: string, properties: NSArray<string> | string[]): this;

	initWithClosureProperties(closure: (p1: HIChartContext) => void, properties: NSArray<string> | string[]): this;

	initWithJSFunction(jsFunction: string): this;
}

declare class HIFunnel extends HISeries {
	static alloc(): HIFunnel; // inherited from NSObject

	static new(): HIFunnel; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	colors: NSArray<HIColor>;

	depth: number;

	endAngle: number;

	fillColor: HIColor;

	height: any;

	ignoreHiddenPoint: number;

	minSize: any;

	neckHeight: any;

	neckWidth: any;

	reversed: number;

	slicedOffset: number;

	startAngle: number;

	width: any;
}

declare class HIFunnel3d extends HISeries {
	static alloc(): HIFunnel3d; // inherited from NSObject

	static new(): HIFunnel3d; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	gradientForSides: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	height: any;

	maxPointWidth: number;

	minPointLength: number;

	neckHeight: any;

	neckWidth: any;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	reversed: number;

	width: any;
}

declare class HIGauge extends HISeries {
	static alloc(): HIGauge; // inherited from NSObject

	static new(): HIGauge; // inherited from NSObject

	dial: HIDial;

	overshoot: number;

	pivot: HIPivot;

	wrap: number;
}

declare class HIGeoJSON extends HIChartsJSONSerializable {
	static alloc(): HIGeoJSON; // inherited from NSObject

	static new(): HIGeoJSON; // inherited from NSObject

	copyright: string;

	copyrightShort: string;

	crs: any;

	features: NSArray<any>;

	hcTransform: any;

	title: string;

	type: string;

	version: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIGlobal extends HIChartsJSONSerializable {
	static alloc(): HIGlobal; // inherited from NSObject

	static new(): HIGlobal; // inherited from NSObject

	VMLRadialGradientURL: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIGradientColorObject extends HIChartsJSONSerializable {
	static alloc(): HIGradientColorObject; // inherited from NSObject

	static new(): HIGradientColorObject; // inherited from NSObject

	linearGradient: HILinearGradientColorObject;

	radialGradient: HIRadialGradientColorObject;

	stops: NSArray<any>;

	getParams(): NSDictionary<any, any>;
}

declare class HIGradientColorStopObject extends HIChartsJSONSerializable {
	static alloc(): HIGradientColorStopObject; // inherited from NSObject

	static new(): HIGradientColorStopObject; // inherited from NSObject

	one: string;

	zero: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIGuideBox extends HIChartsJSONSerializable {
	static alloc(): HIGuideBox; // inherited from NSObject

	static new(): HIGuideBox; // inherited from NSObject

	defaults: HIDefault;

	getParams(): NSDictionary<any, any>;
}

declare class HIHalo extends HIChartsJSONSerializable {
	static alloc(): HIHalo; // inherited from NSObject

	static new(): HIHalo; // inherited from NSObject

	attributes: HIAttributes;

	enabled: number;

	opacity: number;

	size: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIHeatmap extends HISeries {
	static alloc(): HIHeatmap; // inherited from NSObject

	static new(): HIHeatmap; // inherited from NSObject

	colsize: number;

	nullColor: HIColor;

	pointPadding: number;

	rowsize: number;
}

declare class HIHistogram extends HISeries {
	static alloc(): HIHistogram; // inherited from NSObject

	static new(): HIHistogram; // inherited from NSObject

	baseSeries: any;

	binWidth: number;

	binsNumber: any;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIHour extends HIChartsJSONSerializable {
	static alloc(): HIHour; // inherited from NSObject

	static new(): HIHour; // inherited from NSObject

	main: string;

	range: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIHover extends HIChartsJSONSerializable {
	static alloc(): HIHover; // inherited from NSObject

	static new(): HIHover; // inherited from NSObject

	animation: HIAnimationOptionsObject;

	borderColor: string;

	brightness: number;

	color: HIColor;

	connectorWidthPlus: number;

	enabled: number;

	fillColor: HIColor;

	halo: HIHalo;

	height: number;

	heightPlus: number;

	lineColor: HIColor;

	lineWidth: number;

	lineWidthPlus: number;

	linkOpacity: number;

	opacity: number;

	radius: number;

	radiusPlus: number;

	shadow: number;

	width: number;

	widthPlus: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIInactive extends HIChartsJSONSerializable {
	static alloc(): HIInactive; // inherited from NSObject

	static new(): HIInactive; // inherited from NSObject

	animation: HIAnimationOptionsObject;

	enabled: number;

	linkOpacity: number;

	opacity: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIItem extends HISeries {
	static alloc(): HIItem; // inherited from NSObject

	static new(): HIItem; // inherited from NSObject

	center: NSArray<any>;

	colors: NSArray<HIColor>;

	endAngle: number;

	fillColor: HIColor;

	ignoreHiddenPoint: number;

	innerSize: any;

	itemPadding: number;

	layout: string;

	minSize: any;

	rows: number;

	size: any;

	startAngle: number;
}

declare class HIJitter extends HIChartsJSONSerializable {
	static alloc(): HIJitter; // inherited from NSObject

	static new(): HIJitter; // inherited from NSObject

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIKeyboardNavigation extends HIChartsJSONSerializable {
	static alloc(): HIKeyboardNavigation; // inherited from NSObject

	static new(): HIKeyboardNavigation; // inherited from NSObject

	enabled: number;

	focusBorder: HIFocusBorder;

	order: NSArray<string>;

	seriesNavigation: HISeriesNavigation;

	wrapAround: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILabel extends HIChartsJSONSerializable {
	static alloc(): HILabel; // inherited from NSObject

	static new(): HILabel; // inherited from NSObject

	align: string;

	boxesToAvoid: NSArray<HILabelIntersectBoxObject>;

	connectorAllowed: number;

	connectorNeighbourDistance: number;

	enabled: number;

	format: string;

	formatter: HIFunction;

	maxFontSize: number;

	minFontSize: number;

	onArea: number;

	rotation: number;

	style: HICSSObject;

	text: string;

	textAlign: string;

	useHTML: number;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILabelIntersectBoxObject extends HIChartsJSONSerializable {
	static alloc(): HILabelIntersectBoxObject; // inherited from NSObject

	static new(): HILabelIntersectBoxObject; // inherited from NSObject

	bottom: number;

	left: number;

	right: number;

	top: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILabelOptions extends HIChartsJSONSerializable {
	static alloc(): HILabelOptions; // inherited from NSObject

	static new(): HILabelOptions; // inherited from NSObject

	accessibility: HILabelOptionsAccessibility;

	align: string;

	allowOverlap: number;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	className: string;

	crop: number;

	distance: number;

	format: string;

	formatter: HIFunction;

	overflow: string;

	padding: number;

	shadow: HIShadowOptionsObject;

	shape: string;

	style: HICSSObject;

	text: string;

	useHTML: number;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILabelOptionsAccessibility extends HIChartsJSONSerializable {
	static alloc(): HILabelOptionsAccessibility; // inherited from NSObject

	static new(): HILabelOptionsAccessibility; // inherited from NSObject

	definition: string;

	getParams(): NSDictionary<any, any>;
}

declare class HILabels extends HIChartsJSONSerializable {
	static alloc(): HILabels; // inherited from NSObject

	static new(): HILabels; // inherited from NSObject

	accessibility: HILabelsAccessibility;

	align: string;

	allowOverlap: number;

	autoRotation: NSArray<number>;

	autoRotationLimit: number;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	className: string;

	crop: number;

	distance: any;

	enabled: number;

	format: string;

	formatter: HIFunction;

	overflow: string;

	padding: number;

	point: HIPoint;

	position3d: string;

	reserveSpace: number;

	rotation: number;

	shadow: HIShadowOptionsObject;

	shape: string;

	skew3d: number;

	staggerLines: number;

	step: number;

	style: HICSSObject;

	text: string;

	useHTML: number;

	verticalAlign: string;

	x: number;

	y: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILabelsAccessibility extends HIChartsJSONSerializable {
	static alloc(): HILabelsAccessibility; // inherited from NSObject

	static new(): HILabelsAccessibility; // inherited from NSObject

	definition: string;

	getParams(): NSDictionary<any, any>;
}

declare class HILang extends HIChartsJSONSerializable {
	static alloc(): HILang; // inherited from NSObject

	static new(): HILang; // inherited from NSObject

	accessibility: HIAccessibility;

	cancelButtonTitle: string;

	contextButtonTitle: string;

	decimalPoint: string;

	downloadCSV: string;

	downloadJPEG: string;

	downloadPDF: string;

	downloadPNG: string;

	downloadSVG: string;

	downloadXLS: string;

	drillUpText: string;

	exitFullscreen: string;

	exportData: HIExportData;

	invalidDate: string;

	loading: string;

	months: NSArray<string>;

	navigation: HINavigation;

	noData: string;

	numericSymbolMagnitude: number;

	numericSymbols: NSArray<string>;

	printChart: string;

	resetZoom: string;

	resetZoomTitle: string;

	shortMonths: NSArray<string>;

	shortWeekdays: NSArray<string>;

	thousandsSep: string;

	viewData: string;

	viewFullscreen: string;

	weekdays: NSArray<string>;

	getParams(): NSDictionary<any, any>;
}

declare class HILayoutAlgorithm extends HIChartsJSONSerializable {
	static alloc(): HILayoutAlgorithm; // inherited from NSObject

	static new(): HILayoutAlgorithm; // inherited from NSObject

	approximation: string;

	attractiveForce: HIFunction;

	bubblePadding: number;

	distance: any;

	dragBetweenSeries: number;

	enableSimulation: number;

	friction: number;

	gravitationalConstant: number;

	gridSize: any;

	initialPositionRadius: number;

	initialPositions: string;

	integration: string;

	iterations: number;

	kmeansThreshold: number;

	linkLength: number;

	maxIterations: number;

	maxSpeed: number;

	parentNodeLimit: number;

	parentNodeOptions: HIParentNodeOptions;

	repulsiveForce: HIFunction;

	seriesInteraction: number;

	splitSeries: string;

	theta: number;

	type: string;

	getParams(): NSDictionary<any, any>;
}

declare class HILeft extends HIChartsJSONSerializable {
	static alloc(): HILeft; // inherited from NSObject

	static new(): HILeft; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HILegend extends HIChartsJSONSerializable {
	static alloc(): HILegend; // inherited from NSObject

	static new(): HILegend; // inherited from NSObject

	accessibility: HIAccessibility;

	align: string;

	alignColumns: number;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	bubbleLegend: HIBubbleLegend;

	enabled: number;

	floating: number;

	itemCheckboxStyle: HICSSObject;

	itemDistance: number;

	itemHiddenStyle: HICSSObject;

	itemHoverStyle: HICSSObject;

	itemMarginBottom: number;

	itemMarginTop: number;

	itemStyle: HICSSObject;

	itemWidth: number;

	labelFormat: string;

	labelFormatter: HIFunction;

	layout: string;

	legendItem: string;

	legendLabel: string;

	margin: number;

	maxHeight: number;

	navigation: HINavigation;

	padding: number;

	reversed: number;

	rtl: number;

	shadow: HICSSObject;

	squareSymbol: number;

	symbolHeight: number;

	symbolPadding: number;

	symbolRadius: number;

	symbolWidth: number;

	title: HITitle;

	useHTML: number;

	verticalAlign: string;

	width: any;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;

	setPointText(item: HIPoint): void;

	setSeriesText(item: HISeries): void;

	update(options: HILegend): void;

	updateRedraw(options: HILegend, redraw: number): void;
}

declare class HILevelSize extends HIChartsJSONSerializable {
	static alloc(): HILevelSize; // inherited from NSObject

	static new(): HILevelSize; // inherited from NSObject

	unit: string;

	value: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILevels extends HIChartsJSONSerializable {
	static alloc(): HILevels; // inherited from NSObject

	static new(): HILevels; // inherited from NSObject

	borderColor: HIColor;

	borderDashStyle: string;

	borderWidth: number;

	color: HIColor;

	colorByPoint: number;

	colorVariation: HIColorVariation;

	dataLabels: HIDataLabels;

	layoutAlgorithm: string;

	layoutStartingDirection: string;

	level: number;

	levelSize: any;

	linkOpacity: number;

	rotation: number;

	rotationMode: string;

	states: HIStates;

	getParams(): NSDictionary<any, any>;
}

declare class HILine extends HISeries {
	static alloc(): HILine; // inherited from NSObject

	static new(): HILine; // inherited from NSObject
}

declare class HILinearGradientColorObject extends HIChartsJSONSerializable {
	static alloc(): HILinearGradientColorObject; // inherited from NSObject

	static new(): HILinearGradientColorObject; // inherited from NSObject

	x1: number;

	x2: number;

	y1: number;

	y2: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILink extends HIChartsJSONSerializable {
	static alloc(): HILink; // inherited from NSObject

	static new(): HILink; // inherited from NSObject

	color: string;

	dashStyle: string;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILinkTextPath extends HIChartsJSONSerializable {
	static alloc(): HILinkTextPath; // inherited from NSObject

	static new(): HILinkTextPath; // inherited from NSObject

	enabled: number;

	getParams(): NSDictionary<any, any>;
}

declare class HILoading extends HIChartsJSONSerializable {
	static alloc(): HILoading; // inherited from NSObject

	static new(): HILoading; // inherited from NSObject

	hideDuration: number;

	labelStyle: HICSSObject;

	showDuration: number;

	style: HICSSObject;

	getParams(): NSDictionary<any, any>;
}

declare class HILollipop extends HISeries {
	static alloc(): HILollipop; // inherited from NSObject

	static new(): HILollipop; // inherited from NSObject

	connectorColor: string;

	connectorWidth: number;

	groupPadding: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	pointPadding: number;

	pointRange: number;
}

declare class HIMarker extends HIChartsJSONSerializable {
	static alloc(): HIMarker; // inherited from NSObject

	static new(): HIMarker; // inherited from NSObject

	animation: HIAnimationOptionsObject;

	color: HIColor;

	enabled: number;

	enabledThreshold: number;

	fillColor: HIColor;

	fillOpacity: number;

	height: number;

	lineColor: string;

	lineWidth: number;

	radius: number;

	states: HIStates;

	symbol: string;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIMillisecond extends HIChartsJSONSerializable {
	static alloc(): HIMillisecond; // inherited from NSObject

	static new(): HIMillisecond; // inherited from NSObject

	main: string;

	range: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIMinute extends HIChartsJSONSerializable {
	static alloc(): HIMinute; // inherited from NSObject

	static new(): HIMinute; // inherited from NSObject

	main: string;

	range: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIMonth extends HIChartsJSONSerializable {
	static alloc(): HIMonth; // inherited from NSObject

	static new(): HIMonth; // inherited from NSObject

	main: string;

	getParams(): NSDictionary<any, any>;
}

declare class HINavigation extends HIChartsJSONSerializable {
	static alloc(): HINavigation; // inherited from NSObject

	static new(): HINavigation; // inherited from NSObject

	activeColor: HIColor;

	animation: HIAnimationOptionsObject;

	annotationsOptions: HIAnnotationsOptions;

	arrowSize: number;

	bindings: HIBindings;

	bindingsClassName: string;

	buttonOptions: HIButtonOptions;

	enabled: number;

	events: HIEvents;

	iconsURL: string;

	inactiveColor: HIColor;

	menuItemHoverStyle: HICSSObject;

	menuItemStyle: HICSSObject;

	menuStyle: HICSSObject;

	popup: HIPopup;

	style: HICSSObject;

	getParams(): NSDictionary<any, any>;
}

declare class HINavigationBindingsOptionsObject extends HIChartsJSONSerializable {
	static alloc(): HINavigationBindingsOptionsObject; // inherited from NSObject

	static new(): HINavigationBindingsOptionsObject; // inherited from NSObject

	className: string;

	end: HIFunction;

	initial: HIFunction;

	start: HIFunction;

	steps: NSArray<HIFunction>;

	getParams(): NSDictionary<any, any>;
}

declare class HINetworkgraph extends HISeries {
	static alloc(): HINetworkgraph; // inherited from NSObject

	static new(): HINetworkgraph; // inherited from NSObject

	draggable: number;

	layoutAlgorithm: HILayoutAlgorithm;

	link: HILink;

	nodes: NSArray<HINodes>;
}

declare class HINoData extends HIChartsJSONSerializable {
	static alloc(): HINoData; // inherited from NSObject

	static new(): HINoData; // inherited from NSObject

	attr: HISVGAttributes;

	position: HIAlignObject;

	style: HICSSObject;

	useHTML: number;

	getParams(): NSDictionary<any, any>;
}

declare class HINodes extends HIChartsJSONSerializable {
	static alloc(): HINodes; // inherited from NSObject

	static new(): HINodes; // inherited from NSObject

	color: HIColor;

	colorIndex: number;

	column: number;

	dataLabels: NSArray<HIDataLabels>;

	definition: string;

	id: string;

	image: string;

	layout: string;

	level: number;

	mass: number;

	name: string;

	offset: any;

	title: string;

	getParams(): NSDictionary<any, any>;
}

declare class HINormal extends HIChartsJSONSerializable {
	static alloc(): HINormal; // inherited from NSObject

	static new(): HINormal; // inherited from NSObject

	animation: HIAnimationOptionsObject;

	getParams(): NSDictionary<any, any>;
}

declare class HIOptions extends HIChartsJSONSerializable {
	static alloc(): HIOptions; // inherited from NSObject

	static new(): HIOptions; // inherited from NSObject

	accessibility: HIAccessibility;

	additionalOptions: NSDictionary<any, any>;

	annotations: NSArray<HIAnnotations>;

	boost: HIBoost;

	caption: HICaption;

	chart: HIChart;

	colorAxis: NSArray<HIColorAxis>;

	colors: NSArray<string>;

	credits: HICredits;

	data: HIData;

	defs: HIDefs;

	drilldown: HIDrilldown;

	exporting: HIExporting;

	legend: HILegend;

	loading: HILoading;

	navigation: HINavigation;

	noData: HINoData;

	pane: HIPane;

	plotOptions: HIPlotOptions;

	responsive: HIResponsive;

	series: NSArray<HISeries>;

	subtitle: HISubtitle;

	time: HITime;

	title: HITitle;

	tooltip: HITooltip;

	xAxis: NSArray<HIXAxis>;

	yAxis: NSArray<HIYAxis>;

	zAxis: NSArray<HIZAxis>;

	getParams(): NSDictionary<any, any>;
}

declare class HIOptions3d extends HIChartsJSONSerializable {
	static alloc(): HIOptions3d; // inherited from NSObject

	static new(): HIOptions3d; // inherited from NSObject

	alpha: number;

	axisLabelPosition: string;

	beta: number;

	depth: number;

	enabled: number;

	fitToPlot: number;

	frame: HIFrame;

	viewDistance: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIOrganization extends HISeries {
	static alloc(): HIOrganization; // inherited from NSObject

	static new(): HIOrganization; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	hangingIndent: number;

	levels: NSArray<HILevels>;

	linkColor: HIColor;

	linkLineWidth: number;

	linkOpacity: number;

	linkRadius: number;

	minLinkWidth: number;

	nodePadding: number;

	nodeWidth: number;

	nodes: NSArray<HINodes>;
}

declare class HIPackedbubble extends HISeries {
	static alloc(): HIPackedbubble; // inherited from NSObject

	static new(): HIPackedbubble; // inherited from NSObject

	displayNegative: number;

	draggable: number;

	layoutAlgorithm: HILayoutAlgorithm;

	maxSize: any;

	minSize: any;

	parentNode: HIParentNode;

	sizeBy: string;

	useSimulation: number;

	zThreshold: number;
}

declare class HIPane extends HIChartsJSONSerializable {
	static alloc(): HIPane; // inherited from NSObject

	static new(): HIPane; // inherited from NSObject

	background: NSArray<HIBackground>;

	center: NSArray<any>;

	endAngle: number;

	innerSize: any;

	size: any;

	startAngle: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPanning extends HIChartsJSONSerializable {
	static alloc(): HIPanning; // inherited from NSObject

	static new(): HIPanning; // inherited from NSObject

	enabled: number;

	type: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIParallelAxes extends HIChartsJSONSerializable {
	static alloc(): HIParallelAxes; // inherited from NSObject

	static new(): HIParallelAxes; // inherited from NSObject

	accessibility: HIAccessibility;

	alignTicks: number;

	allowDecimals: number;

	categories: NSArray<string>;

	ceiling: number;

	className: string;

	crosshair: HICrosshair;

	dateTimeLabelFormats: HIDateTimeLabelFormats;

	endOnTick: number;

	events: HIEvents;

	floor: number;

	gridZIndex: number;

	height: any;

	labels: HILabels;

	left: any;

	lineColor: HIColor;

	lineWidth: number;

	linkedTo: number;

	margin: number;

	max: number;

	maxPadding: number;

	min: number;

	minPadding: number;

	minRange: number;

	minTickInterval: number;

	minorTickColor: HIColor;

	minorTickInterval: any;

	minorTickLength: number;

	minorTickPosition: string;

	minorTickWidth: number;

	minorTicks: number;

	offset: number;

	opposite: number;

	pane: number;

	reversed: number;

	reversedStacks: number;

	showEmpty: number;

	showFirstLabel: number;

	showLastLabel: number;

	softMax: number;

	softMin: number;

	startOfWeek: number;

	startOnTick: number;

	tickAmount: number;

	tickColor: HIColor;

	tickInterval: number;

	tickLength: number;

	tickPixelInterval: number;

	tickPosition: string;

	tickPositioner: HIFunction;

	tickPositions: NSArray<number>;

	tickWidth: number;

	tickmarkPlacement: string;

	title: any;

	tooltipValueFormat: string;

	top: any;

	type: string;

	uniqueNames: number;

	units: NSArray<NSArray<any>>;

	visible: number;

	width: any;

	zoomEnabled: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIParentNode extends HIChartsJSONSerializable {
	static alloc(): HIParentNode; // inherited from NSObject

	static new(): HIParentNode; // inherited from NSObject

	allowPointSelect: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIParentNodeOptions extends HIChartsJSONSerializable {
	static alloc(): HIParentNodeOptions; // inherited from NSObject

	static new(): HIParentNodeOptions; // inherited from NSObject

	friction: number;

	gravitationalConstant: number;

	initialPositionRadius: number;

	initialPositions: string;

	integration: string;

	linkLength: number;

	marker: HIMarker;

	maxIterations: number;

	maxSpeed: number;

	seriesInteraction: number;

	type: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIParentNodeTextPath extends HIChartsJSONSerializable {
	static alloc(): HIParentNodeTextPath; // inherited from NSObject

	static new(): HIParentNodeTextPath; // inherited from NSObject

	enabled: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPareto extends HISeries {
	static alloc(): HIPareto; // inherited from NSObject

	static new(): HIPareto; // inherited from NSObject

	baseSeries: any;
}

declare class HIPartialFill extends HIChartsJSONSerializable {
	static alloc(): HIPartialFill; // inherited from NSObject

	static new(): HIPartialFill; // inherited from NSObject

	amount: number;

	fill: HIColor;

	getParams(): NSDictionary<any, any>;
}

declare class HIPatternObject extends HIChartsJSONSerializable {
	static alloc(): HIPatternObject; // inherited from NSObject

	static new(): HIPatternObject; // inherited from NSObject

	animation: HIAnimationOptionsObject;

	pattern: HIPatternOptionsObject;

	patternIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPatternOptionsObject extends HIChartsJSONSerializable {
	static alloc(): HIPatternOptionsObject; // inherited from NSObject

	static new(): HIPatternOptionsObject; // inherited from NSObject

	aspectRatio: number;

	backgroundColor: string;

	color: string;

	height: number;

	id: string;

	image: string;

	opacity: number;

	path: HISVGAttributes;

	patternTransform: string;

	width: number;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPie extends HISeries {
	static alloc(): HIPie; // inherited from NSObject

	static new(): HIPie; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	colors: NSArray<HIColor>;

	depth: number;

	endAngle: number;

	fillColor: HIColor;

	ignoreHiddenPoint: number;

	innerSize: any;

	minSize: any;

	size: any;

	slicedOffset: number;

	startAngle: number;
}

declare class HIPivot extends HIChartsJSONSerializable {
	static alloc(): HIPivot; // inherited from NSObject

	static new(): HIPivot; // inherited from NSObject

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderWidth: number;

	radius: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPlotBands extends HIChartsJSONSerializable {
	static alloc(): HIPlotBands; // inherited from NSObject

	static new(): HIPlotBands; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	className: string;

	color: HIColor;

	events: HIEvents;

	from: number;

	id: string;

	innerRadius: any;

	label: HILabel;

	outerRadius: any;

	thickness: any;

	to: number;

	zIndex: number;

	destroy(): void;

	getParams(): NSDictionary<any, any>;
}

declare class HIPlotLines extends HIChartsJSONSerializable {
	static alloc(): HIPlotLines; // inherited from NSObject

	static new(): HIPlotLines; // inherited from NSObject

	className: string;

	color: HIColor;

	dashStyle: string;

	events: HIEvents;

	id: string;

	label: HILabel;

	value: number;

	width: number;

	zIndex: number;

	destroy(): void;

	getParams(): NSDictionary<any, any>;
}

declare class HIPlotOptions extends HIChartsJSONSerializable {
	static alloc(): HIPlotOptions; // inherited from NSObject

	static new(): HIPlotOptions; // inherited from NSObject

	area: HIArea;

	arearange: HIArearange;

	areaspline: HIAreaspline;

	areasplinerange: HIAreasplinerange;

	bar: HIBar;

	bellcurve: HIBellcurve;

	boxplot: HIBoxplot;

	bubble: HIBubble;

	bullet: HIBullet;

	column: HIColumn;

	columnpyramid: HIColumnpyramid;

	columnrange: HIColumnrange;

	cylinder: HICylinder;

	dependencywheel: HIDependencywheel;

	dumbbell: HIDumbbell;

	errorbar: HIErrorbar;

	funnel: HIFunnel;

	funnel3d: HIFunnel3d;

	gauge: HIGauge;

	heatmap: HIHeatmap;

	histogram: HIHistogram;

	item: HIItem;

	line: HILine;

	lollipop: HILollipop;

	networkgraph: HINetworkgraph;

	organization: HIOrganization;

	packedbubble: HIPackedbubble;

	pareto: HIPareto;

	pie: HIPie;

	polygon: HIPolygon;

	pyramid: HIPyramid;

	pyramid3d: HIPyramid3d;

	sankey: HISankey;

	scatter: HIScatter;

	scatter3d: HIScatter3d;

	series: HISeries;

	solidgauge: HISolidgauge;

	spline: HISpline;

	streamgraph: HIStreamgraph;

	sunburst: HISunburst;

	tilemap: HITilemap;

	timeline: HITimeline;

	treemap: HITreemap;

	variablepie: HIVariablepie;

	variwide: HIVariwide;

	vector: HIVector;

	venn: HIVenn;

	waterfall: HIWaterfall;

	windbarb: HIWindbarb;

	wordcloud: HIWordcloud;

	xrange: HIXrange;

	getParams(): NSDictionary<any, any>;
}

declare class HIPoint extends HIChartsJSONSerializable {
	static alloc(): HIPoint; // inherited from NSObject

	static new(): HIPoint; // inherited from NSObject

	dateFormat: string;

	dateFormatter: HIFunction;

	descriptionFormatter: HIFunction;

	events: HIEvents;

	valueDecimals: number;

	valueDescriptionFormat: string;

	valuePrefix: string;

	valueSuffix: string;

	x: number;

	xAxis: any;

	y: number;

	yAxis: any;

	cancelSonify(): void;

	getParams(): NSDictionary<any, any>;

	onMouseOut(): void;

	onMouseOver(): void;

	remove(redraw: number): void;

	removeAnimation(redraw: number, animation: HIAnimationOptionsObject): void;

	select(): void;

	selectAccumulate(selected: number, accumulate: number): void;

	setNestedPropertyValueKey(object: any, value: any, key: string): void;

	setState(): void;

	setStateMove(state: string, move: number): void;

	sonify(options: NSDictionary<any, any>): void;

	tooltipFormatter(pointFormat: string): void;

	update(options: HIPoint): void;

	updateRedraw(options: HIPoint, redraw: number): void;

	updateRedrawAnimation(options: HIPoint, redraw: number, animation: HIAnimationOptionsObject): void;
}

declare class HIPoints extends HIChartsJSONSerializable {
	static alloc(): HIPoints; // inherited from NSObject

	static new(): HIPoints; // inherited from NSObject

	x: number;

	xAxis: any;

	y: number;

	yAxis: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIPolygon extends HISeries {
	static alloc(): HIPolygon; // inherited from NSObject

	static new(): HIPolygon; // inherited from NSObject

	trackByArea: number;
}

declare class HIPopup extends HIChartsJSONSerializable {
	static alloc(): HIPopup; // inherited from NSObject

	static new(): HIPopup; // inherited from NSObject

	addButton: string;

	arrowLine: string;

	arrowRay: string;

	arrowSegment: string;

	background: string;

	backgroundColor: string;

	backgroundColors: string;

	borderColor: string;

	borderRadius: string;

	borderWidth: string;

	circle: string;

	color: string;

	connector: string;

	crooked3: string;

	crooked5: string;

	crosshairX: string;

	crosshairY: string;

	editButton: string;

	elliott3: string;

	elliott5: string;

	fibonacci: string;

	fill: string;

	flags: string;

	fontSize: string;

	format: string;

	height: string;

	horizontalLine: string;

	infinityLine: string;

	innerBackground: string;

	label: string;

	labelOptions: string;

	labels: string;

	line: string;

	lines: string;

	measure: string;

	measureX: string;

	measureXY: string;

	measureY: string;

	name: string;

	outerBackground: string;

	padding: string;

	parallelChannel: string;

	pitchfork: string;

	ray: string;

	rectangle: string;

	removeButton: string;

	saveButton: string;

	segment: string;

	series: string;

	shapeOptions: string;

	shapes: string;

	simpleShapes: string;

	stroke: string;

	strokeWidth: string;

	style: string;

	title: string;

	tunnel: string;

	typeOptions: string;

	verticalArrow: string;

	verticalCounter: string;

	verticalLabel: string;

	verticalLine: string;

	volume: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIPosition extends HIChartsJSONSerializable {
	static alloc(): HIPosition; // inherited from NSObject

	static new(): HIPosition; // inherited from NSObject

	align: string;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIPyramid extends HISeries {
	static alloc(): HIPyramid; // inherited from NSObject

	static new(): HIPyramid; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	colors: NSArray<HIColor>;

	depth: number;

	endAngle: number;

	fillColor: HIColor;

	height: any;

	ignoreHiddenPoint: number;

	minSize: any;

	neckHeight: string;

	neckWidth: string;

	reversed: number;

	slicedOffset: number;

	startAngle: number;

	width: any;
}

declare class HIPyramid3d extends HISeries {
	static alloc(): HIPyramid3d; // inherited from NSObject

	static new(): HIPyramid3d; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	gradientForSides: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	height: any;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	reversed: number;

	width: any;
}

declare class HIRadialGradientColorObject extends HIChartsJSONSerializable {
	static alloc(): HIRadialGradientColorObject; // inherited from NSObject

	static new(): HIRadialGradientColorObject; // inherited from NSObject

	cx: number;

	cy: number;

	r: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIRangeSelector extends HIChartsJSONSerializable {
	static alloc(): HIRangeSelector; // inherited from NSObject

	static new(): HIRangeSelector; // inherited from NSObject

	buttonText: string;

	maxInputLabel: string;

	minInputLabel: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIRanges extends HIChartsJSONSerializable {
	static alloc(): HIRanges; // inherited from NSObject

	static new(): HIRanges; // inherited from NSObject

	borderColor: HIColor;

	color: HIColor;

	connectorColor: HIColor;

	value: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIResetZoomButton extends HIChartsJSONSerializable {
	static alloc(): HIResetZoomButton; // inherited from NSObject

	static new(): HIResetZoomButton; // inherited from NSObject

	position: HIAlignObject;

	relativeTo: string;

	theme: HISVGAttributes;

	getParams(): NSDictionary<any, any>;
}

declare class HIResponsive extends HIChartsJSONSerializable {
	static alloc(): HIResponsive; // inherited from NSObject

	static new(): HIResponsive; // inherited from NSObject

	rules: NSArray<HIRules>;

	getParams(): NSDictionary<any, any>;
}

declare class HIReverseArrow extends HIChartsJSONSerializable {
	static alloc(): HIReverseArrow; // inherited from NSObject

	static new(): HIReverseArrow; // inherited from NSObject

	id: string;

	markerHeight: number;

	markerWidth: number;

	refX: number;

	refY: number;

	render: number;

	tagName: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIRight extends HIChartsJSONSerializable {
	static alloc(): HIRight; // inherited from NSObject

	static new(): HIRight; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HIRotation extends HIChartsJSONSerializable {
	static alloc(): HIRotation; // inherited from NSObject

	static new(): HIRotation; // inherited from NSObject

	from: number;

	orientations: number;

	to: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIRules extends HIChartsJSONSerializable {
	static alloc(): HIRules; // inherited from NSObject

	static new(): HIRules; // inherited from NSObject

	chartOptions: NSDictionary<any, any>;

	condition: HICondition;

	getParams(): NSDictionary<any, any>;
}

declare class HISVGAttributes extends HIChartsJSONSerializable {
	static alloc(): HISVGAttributes; // inherited from NSObject

	static new(): HISVGAttributes; // inherited from NSObject

	d: NSArray<any>;

	fill: HIColor;

	inverted: number;

	matrix: NSArray<number>;

	rotation: number;

	rotationOriginX: number;

	rotationOriginY: number;

	scaleX: number;

	scaleY: number;

	stroke: HIColor;

	style: HICSSObject;

	translateX: number;

	translateY: number;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISVGDefinitionObject extends HIChartsJSONSerializable {
	static alloc(): HISVGDefinitionObject; // inherited from NSObject

	static new(): HISVGDefinitionObject; // inherited from NSObject

	children: NSArray<any>;

	tagName: string;

	textContent: string;

	getParams(): NSDictionary<any, any>;
}

declare class HISankey extends HISeries {
	static alloc(): HISankey; // inherited from NSObject

	static new(): HISankey; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	curveFactor: number;

	levels: NSArray<HILevels>;

	linkOpacity: number;

	minLinkWidth: number;

	nodePadding: number;

	nodeWidth: number;

	nodes: NSArray<HINodes>;
}

declare class HIScatter extends HISeries {
	static alloc(): HIScatter; // inherited from NSObject

	static new(): HIScatter; // inherited from NSObject

	cluster: HICluster;

	jitter: HIJitter;
}

declare class HIScatter3d extends HISeries {
	static alloc(): HIScatter3d; // inherited from NSObject

	static new(): HIScatter3d; // inherited from NSObject

	jitter: HIJitter;
}

declare class HIScreenReaderSection extends HIChartsJSONSerializable {
	static alloc(): HIScreenReaderSection; // inherited from NSObject

	static new(): HIScreenReaderSection; // inherited from NSObject

	afterChartFormat: string;

	afterChartFormatter: HIFunction;

	afterRegionLabel: string;

	annotations: HIAnnotations;

	axisRangeDateFormat: string;

	beforeChartFormat: string;

	beforeChartFormatter: HIFunction;

	beforeRegionLabel: string;

	endOfChartMarker: string;

	onPlayAsSoundClick: HIFunction;

	onViewDataTableClick: HIFunction;

	getParams(): NSDictionary<any, any>;
}

declare class HIScrollablePlotArea extends HIChartsJSONSerializable {
	static alloc(): HIScrollablePlotArea; // inherited from NSObject

	static new(): HIScrollablePlotArea; // inherited from NSObject

	minHeight: number;

	minWidth: number;

	opacity: number;

	scrollPositionX: number;

	scrollPositionY: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISecond extends HIChartsJSONSerializable {
	static alloc(): HISecond; // inherited from NSObject

	static new(): HISecond; // inherited from NSObject

	main: string;

	range: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISelect extends HIChartsJSONSerializable {
	static alloc(): HISelect; // inherited from NSObject

	static new(): HISelect; // inherited from NSObject

	animation: HIAnimation;

	borderColor: HIColor;

	color: HIColor;

	enabled: number;

	fillColor: HIColor;

	halo: HIHalo;

	height: number;

	heightPlus: number;

	lineColor: HIColor;

	lineWidth: number;

	lineWidthPlus: number;

	radius: number;

	width: number;

	widthPlus: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISeries extends HIChartsJSONSerializable {
	static alloc(): HISeries; // inherited from NSObject

	static new(): HISeries; // inherited from NSObject

	accessibility: HIAccessibility;

	allowPointSelect: number;

	animation: HIAnimationOptionsObject;

	animationLimit: number;

	boostBlending: string;

	boostThreshold: number;

	className: string;

	clip: number;

	color: HIColor;

	colorAxis: any;

	colorIndex: number;

	colorKey: string;

	connectEnds: number;

	connectNulls: number;

	crisp: number;

	cropThreshold: number;

	cursor: string;

	custom: NSDictionary<any, any>;

	dashStyle: string;

	data: NSArray<any>;

	dataLabels: NSArray<HIDataLabels>;

	dataSorting: HIDataSortingOptionsObject;

	definition: string;

	describeSingleSeries: number;

	descriptionFormatter: HIFunction;

	dragDrop: HIDragDrop;

	enableMouseTracking: number;

	events: HIEvents;

	findNearestPointBy: string;

	getExtremesFromAll: number;

	id: string;

	includeInDataExport: number;

	index: number;

	keys: NSArray<string>;

	label: HILabel;

	legendIndex: number;

	lineWidth: number;

	linecap: string;

	linkedTo: string;

	marker: HIMarker;

	name: string;

	negativeColor: HIColor;

	nullPointValue: string;

	opacity: number;

	point: HIPoint;

	pointAnnotationsDescription: string;

	pointDescriptionEnabledThreshold: number;

	pointDescriptionFormatter: HIFunction;

	pointInterval: number;

	pointIntervalUnit: string;

	pointPlacement: any;

	pointStart: number;

	selected: number;

	shadow: HIShadowOptionsObject;

	showCheckbox: number;

	showInLegend: number;

	skipKeyboardNavigation: number;

	softThreshold: number;

	stack: string;

	stacking: string;

	states: HIStates;

	step: string;

	stickyTracking: number;

	summary: HISummary;

	threshold: number;

	tooltip: HITooltip;

	turboThreshold: number;

	type: string;

	visible: number;

	xAxis: any;

	xAxisDescription: string;

	yAxis: any;

	yAxisDescription: string;

	zIndex: number;

	zoneAxis: string;

	zones: NSArray<HIZones>;

	addPoint(options: HIData): void;

	addPointRedraw(options: HIData, redraw: number): void;

	addPointRedrawShift(options: HIData, redraw: number, shift: number): void;

	addPointRedrawShiftAnimation(options: HIData, redraw: number, shift: number, animation: HIAnimationOptionsObject): void;

	animate(init: number): void;

	drawGraph(): void;

	drawPoints(): void;

	getParams(): NSDictionary<any, any>;

	hide(): void;

	onMouseOut(): void;

	onMouseOver(): void;

	remove(): void;

	removeAnimation(redraw: number, animation: HIAnimationOptionsObject): void;

	removeAnimationWithEvent(redraw: number, animation: HIAnimationOptionsObject, withEvent: number): void;

	removePoint(i: number): void;

	removePointRedraw(i: number, redraw: number): void;

	removePointRedrawAnimation(i: number, redraw: number, animation: HIAnimationOptionsObject): void;

	render(): void;

	select(): void;

	setOptions(itemOptions: HISeries): void;

	setSeriesData(data: NSArray<any> | any[]): void;

	setSeriesDataRedraw(data: NSArray<any> | any[], redraw: number): void;

	setSeriesDataRedrawAnimation(data: NSArray<any> | any[], redraw: number, animation: HIAnimationOptionsObject): void;

	setSeriesDataRedrawAnimationUpdatePoints(data: NSArray<any> | any[], redraw: number, animation: HIAnimationOptionsObject, updatePoints: number): void;

	setSeriesVisible(): void;

	setSeriesVisibleRedraw(visible: number, redraw: number): void;

	setState(): void;

	show(): void;

	sonify(options: NSDictionary<any, any>): void;

	translate(): void;

	update(options: HISeries): void;

	updateRedraw(options: HISeries, redraw: number): void;
}

declare class HISeriesNavigation extends HIChartsJSONSerializable {
	static alloc(): HISeriesNavigation; // inherited from NSObject

	static new(): HISeriesNavigation; // inherited from NSObject

	mode: string;

	pointNavigationEnabledThreshold: number;

	skipNullPoints: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISeriesTypeDescriptions extends HIChartsJSONSerializable {
	static alloc(): HISeriesTypeDescriptions; // inherited from NSObject

	static new(): HISeriesTypeDescriptions; // inherited from NSObject

	arearange: string;

	areasplinerange: string;

	boxplot: string;

	bubble: string;

	columnrange: string;

	errorbar: string;

	funnel: string;

	pyramid: string;

	waterfall: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIShadowOptionsObject extends HIChartsJSONSerializable {
	static alloc(): HIShadowOptionsObject; // inherited from NSObject

	static new(): HIShadowOptionsObject; // inherited from NSObject

	color: string;

	offsetX: number;

	offsetY: number;

	opacity: number;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIShapeOptions extends HIChartsJSONSerializable {
	static alloc(): HIShapeOptions; // inherited from NSObject

	static new(): HIShapeOptions; // inherited from NSObject

	dashStyle: string;

	fill: HIColor;

	height: number;

	r: number;

	snap: number;

	src: string;

	stroke: HIColor;

	strokeWidth: number;

	type: string;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIShapes extends HIChartsJSONSerializable {
	static alloc(): HIShapes; // inherited from NSObject

	static new(): HIShapes; // inherited from NSObject

	dashStyle: string;

	fill: HIColor;

	height: number;

	markerEnd: string;

	markerStart: string;

	point: HIPoint;

	points: NSArray<HIPoints>;

	r: number;

	snap: number;

	src: string;

	stroke: HIColor;

	strokeWidth: number;

	type: string;

	width: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISolidgauge extends HISeries {
	static alloc(): HISolidgauge; // inherited from NSObject

	static new(): HISolidgauge; // inherited from NSObject

	colorByPoint: number;

	innerRadius: any;

	overshoot: number;

	radius: any;

	rounded: number;
}

declare class HISonification extends HIChartsJSONSerializable {
	static alloc(): HISonification; // inherited from NSObject

	static new(): HISonification; // inherited from NSObject

	playAsSoundButtonText: string;

	playAsSoundClickAnnouncement: string;

	getParams(): NSDictionary<any, any>;
}

declare class HISpline extends HISeries {
	static alloc(): HISpline; // inherited from NSObject

	static new(): HISpline; // inherited from NSObject
}

declare class HIStackLabels extends HIChartsJSONSerializable {
	static alloc(): HIStackLabels; // inherited from NSObject

	static new(): HIStackLabels; // inherited from NSObject

	align: string;

	allowOverlap: number;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	crop: number;

	enabled: number;

	format: string;

	formatter: HIFunction;

	overflow: string;

	rotation: number;

	style: HICSSObject;

	textAlign: string;

	useHTML: number;

	verticalAlign: string;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIStates extends HIChartsJSONSerializable {
	static alloc(): HIStates; // inherited from NSObject

	static new(): HIStates; // inherited from NSObject

	hover: HIHover;

	inactive: HIInactive;

	normal: HINormal;

	select: HISelect;

	getParams(): NSDictionary<any, any>;
}

declare class HIStreamgraph extends HISeries {
	static alloc(): HIStreamgraph; // inherited from NSObject

	static new(): HIStreamgraph; // inherited from NSObject

	fillColor: HIColor;

	fillOpacity: number;

	lineColor: HIColor;

	negativeFillColor: HIColor;

	trackByArea: number;
}

declare class HIStyle extends HIChartsJSONSerializable {
	static alloc(): HIStyle; // inherited from NSObject

	static new(): HIStyle; // inherited from NSObject

	borderRadius: number;

	color: string;

	cursor: string;

	fill: string;

	fontSize: string;

	fontWeight: string;

	lineWidth: number;

	stroke: string;

	strokeWidth: number;

	textOutline: string;

	textOverflow: string;

	transition: string;

	whiteSpace: string;

	getParams(): NSDictionary<any, any>;
}

declare class HISubtitle extends HIChartsJSONSerializable {
	static alloc(): HISubtitle; // inherited from NSObject

	static new(): HISubtitle; // inherited from NSObject

	align: string;

	floating: number;

	style: HICSSObject;

	text: string;

	useHTML: number;

	verticalAlign: string;

	widthAdjust: number;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HISummary extends HIChartsJSONSerializable {
	static alloc(): HISummary; // inherited from NSObject

	static new(): HISummary; // inherited from NSObject

	bar: string;

	barCombination: string;

	boxplot: string;

	boxplotCombination: string;

	bubble: string;

	bubbleCombination: string;

	column: string;

	columnCombination: string;

	defaultCombination: string;

	defaults: string;

	line: string;

	lineCombination: string;

	map: string;

	mapCombination: string;

	mapbubble: string;

	mapbubbleCombination: string;

	mapline: string;

	maplineCombination: string;

	pie: string;

	pieCombination: string;

	scatter: string;

	scatterCombination: string;

	spline: string;

	splineCombination: string;

	getParams(): NSDictionary<any, any>;
}

declare class HISunburst extends HISeries {
	static alloc(): HISunburst; // inherited from NSObject

	static new(): HISunburst; // inherited from NSObject

	allowTraversingTree: number;

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	fillColor: HIColor;

	levelIsConstant: number;

	levelSize: HILevelSize;

	levels: NSArray<HILevels>;

	rootId: string;

	size: any;

	slicedOffset: number;

	startAngle: number;

	traverseUpButton: HITraverseUpButton;
}

declare class HITable extends HIChartsJSONSerializable {
	static alloc(): HITable; // inherited from NSObject

	static new(): HITable; // inherited from NSObject

	tableSummary: string;

	viewAsDataTableButtonText: string;

	getParams(): NSDictionary<any, any>;
}

declare class HITargetOptions extends HIChartsJSONSerializable {
	static alloc(): HITargetOptions; // inherited from NSObject

	static new(): HITargetOptions; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	color: HIColor;

	height: number;

	width: any;

	getParams(): NSDictionary<any, any>;
}

declare class HITextPath extends HIChartsJSONSerializable {
	static alloc(): HITextPath; // inherited from NSObject

	static new(): HITextPath; // inherited from NSObject

	attributes: HISVGAttributes;

	enabled: number;

	getParams(): NSDictionary<any, any>;
}

declare class HITheme extends HIChartsJSONSerializable {
	static alloc(): HITheme; // inherited from NSObject

	static new(): HITheme; // inherited from NSObject

	fill: HIColor;

	padding: number;

	stroke: HIColor;

	zIndex: number;

	getParams(): NSDictionary<any, any>;
}

declare class HITilemap extends HISeries {
	static alloc(): HITilemap; // inherited from NSObject

	static new(): HITilemap; // inherited from NSObject

	colsize: number;

	nullColor: HIColor;

	pointPadding: number;

	rowsize: number;

	tileShape: string;
}

declare class HITime extends HIChartsJSONSerializable {
	static alloc(): HITime; // inherited from NSObject

	static new(): HITime; // inherited from NSObject

	Date: any;

	getTimezoneOffset: HIFunction;

	timezone: string;

	timezoneOffset: number;

	useUTC: number;

	getParams(): NSDictionary<any, any>;
}

declare class HITimeline extends HISeries {
	static alloc(): HITimeline; // inherited from NSObject

	static new(): HITimeline; // inherited from NSObject

	colorByPoint: number;

	ignoreHiddenPoint: number;

	legendType: string;
}

declare class HITitle extends HIChartsJSONSerializable {
	static alloc(): HITitle; // inherited from NSObject

	static new(): HITitle; // inherited from NSObject

	align: string;

	floating: number;

	margin: number;

	offset: number;

	position3d: string;

	reserveSpace: number;

	rotation: number;

	skew3d: number;

	style: HICSSObject;

	text: string;

	textAlign: string;

	useHTML: number;

	verticalAlign: string;

	widthAdjust: number;

	x: number;

	y: number;

	getParams(): NSDictionary<any, any>;
}

declare class HITooltip extends HIChartsJSONSerializable {
	static alloc(): HITooltip; // inherited from NSObject

	static new(): HITooltip; // inherited from NSObject

	animation: number;

	backgroundColor: HIColor;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	className: string;

	clusterFormat: any;

	dateTimeLabelFormats: HIDateTimeLabelFormats;

	distance: number;

	enabled: number;

	followPointer: number;

	followTouchMove: number;

	footerFormat: string;

	formatter: HIFunction;

	headerFormat: string;

	headerShape: string;

	hideDelay: number;

	nodeFormat: string;

	nodeFormatter: HIFunction;

	nullFormat: string;

	nullFormatter: HIFunction;

	outside: number;

	padding: number;

	pointFormat: string;

	pointFormatter: HIFunction;

	positioner: HIFunction;

	shadow: HIShadowOptionsObject;

	shape: string;

	shared: number;

	snap: number;

	split: number;

	stickOnContact: number;

	style: HICSSObject;

	useHTML: number;

	valueDecimals: number;

	valuePrefix: string;

	valueSuffix: string;

	xDateFormat: string;

	defaultFormatter(tooltip: HITooltip): void;

	destroy(): void;

	getLabel(): void;

	getParams(): NSDictionary<any, any>;

	hide(): void;

	refreshByPoint(point: HIPoint): void;

	refreshByPoints(points: NSArray<HIPoint> | HIPoint[]): void;

	update(options: HITooltip): void;
}

declare class HITop extends HIChartsJSONSerializable {
	static alloc(): HITop; // inherited from NSObject

	static new(): HITop; // inherited from NSObject

	color: HIColor;

	size: number;

	visible: any;

	getParams(): NSDictionary<any, any>;
}

declare class HITraverseUpButton extends HIChartsJSONSerializable {
	static alloc(): HITraverseUpButton; // inherited from NSObject

	static new(): HITraverseUpButton; // inherited from NSObject

	position: HIPosition;

	getParams(): NSDictionary<any, any>;
}

declare class HITreemap extends HISeries {
	static alloc(): HITreemap; // inherited from NSObject

	static new(): HITreemap; // inherited from NSObject

	allowTraversingTree: number;

	alternateStartingDirection: number;

	cluster: HICluster;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	ignoreHiddenPoint: number;

	interactByLeaf: number;

	layoutAlgorithm: string;

	layoutStartingDirection: string;

	levelIsConstant: number;

	levels: NSArray<HILevels>;

	sortIndex: number;

	traverseUpButton: HITraverseUpButton;
}

declare class HIVariablepie extends HISeries {
	static alloc(): HIVariablepie; // inherited from NSObject

	static new(): HIVariablepie; // inherited from NSObject

	borderColor: HIColor;

	borderWidth: number;

	center: NSArray<any>;

	colors: NSArray<HIColor>;

	depth: number;

	endAngle: number;

	fillColor: HIColor;

	ignoreHiddenPoint: number;

	innerSize: any;

	maxPointSize: any;

	minPointSize: any;

	minSize: any;

	size: any;

	sizeBy: string;

	slicedOffset: number;

	startAngle: number;

	zMax: number;

	zMin: number;
}

declare class HIVariwide extends HISeries {
	static alloc(): HIVariwide; // inherited from NSObject

	static new(): HIVariwide; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	groupPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;
}

declare class HIVector extends HISeries {
	static alloc(): HIVector; // inherited from NSObject

	static new(): HIVector; // inherited from NSObject

	cluster: HICluster;

	rotationOrigin: string;

	vectorLength: number;
}

declare class HIVenn extends HISeries {
	static alloc(): HIVenn; // inherited from NSObject

	static new(): HIVenn; // inherited from NSObject

	borderDashStyle: string;

	brighten: number;

	cluster: HICluster;

	colorByPoint: number;
}

declare class HIWaterfall extends HISeries {
	static alloc(): HIWaterfall; // inherited from NSObject

	static new(): HIWaterfall; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	lineColor: HIColor;

	maxPointWidth: number;

	minPointLength: number;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	upColor: HIColor;
}

declare class HIWeek extends HIChartsJSONSerializable {
	static alloc(): HIWeek; // inherited from NSObject

	static new(): HIWeek; // inherited from NSObject

	main: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIWindbarb extends HISeries {
	static alloc(): HIWindbarb; // inherited from NSObject

	static new(): HIWindbarb; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	dataGrouping: HIDataGrouping;

	depth: number;

	edgeColor: HIColor;

	edgeWidth: number;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	onSeries: string;

	pointPadding: number;

	pointRange: number;

	pointWidth: number;

	vectorLength: number;

	xOffset: number;

	yOffset: number;
}

declare class HIWordcloud extends HISeries {
	static alloc(): HIWordcloud; // inherited from NSObject

	static new(): HIWordcloud; // inherited from NSObject

	allowExtendPlayingField: number;

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	edgeWidth: number;

	maxFontSize: number;

	minFontSize: number;

	placementStrategy: string;

	rotation: HIRotation;

	spiral: string;

	style: HICSSObject;
}

declare class HIXAxis extends HIChartsJSONSerializable {
	static alloc(): HIXAxis; // inherited from NSObject

	static new(): HIXAxis; // inherited from NSObject

	accessibility: HIAccessibility;

	alignTicks: number;

	allowDecimals: number;

	alternateGridColor: HIColor;

	angle: number;

	breaks: NSArray<HIBreaks>;

	categories: NSArray<string>;

	ceiling: number;

	className: string;

	crosshair: HICrosshair;

	dateTimeLabelFormats: HIDateTimeLabelFormats;

	endOnTick: number;

	events: HIEvents;

	floor: number;

	gridLineColor: HIColor;

	gridLineDashStyle: string;

	gridLineInterpolation: string;

	gridLineWidth: number;

	gridZIndex: number;

	height: any;

	id: string;

	labels: HILabels;

	left: any;

	lineColor: HIColor;

	lineWidth: number;

	linkedTo: number;

	margin: number;

	max: number;

	maxPadding: number;

	min: number;

	minPadding: number;

	minRange: number;

	minTickInterval: number;

	minorGridLineColor: HIColor;

	minorGridLineDashStyle: string;

	minorGridLineWidth: number;

	minorTickColor: HIColor;

	minorTickInterval: any;

	minorTickLength: number;

	minorTickPosition: string;

	minorTickWidth: number;

	minorTicks: number;

	offset: number;

	opposite: number;

	pane: number;

	plotBands: NSArray<HIPlotBands>;

	plotLines: NSArray<HIPlotLines>;

	reversed: number;

	reversedStacks: number;

	showEmpty: number;

	showFirstLabel: number;

	showLastLabel: number;

	softMax: number;

	softMin: number;

	startOfWeek: number;

	startOnTick: number;

	tickAmount: number;

	tickColor: HIColor;

	tickInterval: number;

	tickLength: number;

	tickPixelInterval: number;

	tickPosition: string;

	tickPositioner: HIFunction;

	tickPositions: NSArray<number>;

	tickWidth: number;

	tickmarkPlacement: string;

	title: HITitle;

	top: any;

	type: string;

	uniqueNames: number;

	units: NSArray<NSArray<any>>;

	visible: number;

	width: any;

	zoomEnabled: number;

	addPlotBand(options: HIPlotBands): void;

	addPlotLine(options: HIPlotLines): void;

	addTitle(display: number): void;

	drawCrosshair(): void;

	getParams(): NSDictionary<any, any>;

	hideCrosshair(): void;

	remove(): void;

	removePlotBand(id: string): void;

	removePlotLine(id: string): void;

	renderLine(): void;

	renderMinorTick(pos: number): void;

	renderTickIndex(pos: number, i: number): void;

	setAxisCategories(categories: NSArray<string> | string[]): void;

	setAxisCategoriesRedraw(categories: NSArray<string> | string[], redraw: number): void;

	setAxisTitle(title: HITitle): void;

	setAxisTitleRedraw(title: HITitle, redraw: number): void;

	setExtremes(): void;

	setExtremesNewMax(newMin: number, newMax: number): void;

	setExtremesNewMaxRedraw(newMin: number, newMax: number, redraw: number): void;

	setExtremesNewMaxRedrawAnimation(newMin: number, newMax: number, redraw: number, animation: HIAnimationOptionsObject): void;

	setTickPositions(): void;

	update(options: HIXAxis): void;

	updateRedraw(options: HIXAxis, redraw: number): void;
}

declare class HIXrange extends HISeries {
	static alloc(): HIXrange; // inherited from NSObject

	static new(): HIXrange; // inherited from NSObject

	borderColor: HIColor;

	borderRadius: number;

	borderWidth: number;

	centerInCategory: number;

	colorByPoint: number;

	colors: NSArray<HIColor>;

	groupPadding: number;

	groupZPadding: number;

	grouping: number;

	maxPointWidth: number;

	minPointLength: number;

	partialFill: HIPartialFill;

	pointPadding: number;

	pointWidth: number;
}

declare class HIYAxis extends HIChartsJSONSerializable {
	static alloc(): HIYAxis; // inherited from NSObject

	static new(): HIYAxis; // inherited from NSObject

	accessibility: HIAccessibility;

	alignTicks: number;

	allowDecimals: number;

	alternateGridColor: HIColor;

	angle: number;

	breaks: NSArray<HIBreaks>;

	categories: NSArray<string>;

	ceiling: number;

	className: string;

	crosshair: HICrosshair;

	dateTimeLabelFormats: HIDateTimeLabelFormats;

	endOnTick: number;

	events: HIEvents;

	floor: number;

	gridLineColor: HIColor;

	gridLineDashStyle: string;

	gridLineInterpolation: string;

	gridLineWidth: number;

	gridZIndex: number;

	height: any;

	id: string;

	labels: HILabels;

	left: any;

	lineColor: HIColor;

	lineWidth: number;

	linkedTo: number;

	margin: number;

	max: number;

	maxColor: HIColor;

	maxPadding: number;

	min: number;

	minColor: HIColor;

	minPadding: number;

	minRange: number;

	minTickInterval: number;

	minorGridLineColor: HIColor;

	minorGridLineDashStyle: string;

	minorGridLineWidth: number;

	minorTickColor: HIColor;

	minorTickInterval: any;

	minorTickLength: number;

	minorTickPosition: string;

	minorTickWidth: number;

	minorTicks: number;

	offset: number;

	opposite: number;

	pane: number;

	plotBands: NSArray<HIPlotBands>;

	plotLines: NSArray<HIPlotLines>;

	reversed: number;

	reversedStacks: number;

	showEmpty: number;

	showFirstLabel: number;

	showLastLabel: number;

	softMax: number;

	softMin: number;

	stackLabels: HIStackLabels;

	startOfWeek: number;

	startOnTick: number;

	stops: NSArray<HIGradientColorStopObject>;

	tickAmount: number;

	tickColor: HIColor;

	tickInterval: number;

	tickLength: number;

	tickPixelInterval: number;

	tickPosition: string;

	tickPositioner: HIFunction;

	tickPositions: NSArray<number>;

	tickWidth: number;

	tickmarkPlacement: string;

	title: HITitle;

	tooltipValueFormat: string;

	top: any;

	type: string;

	uniqueNames: number;

	units: NSArray<NSArray<any>>;

	visible: number;

	width: any;

	zoomEnabled: number;

	addPlotBand(options: HIPlotBands): void;

	addPlotLine(options: HIPlotLines): void;

	addTitle(display: number): void;

	drawCrosshair(): void;

	getParams(): NSDictionary<any, any>;

	hideCrosshair(): void;

	remove(): void;

	removePlotBand(id: string): void;

	removePlotLine(id: string): void;

	renderLine(): void;

	renderMinorTick(pos: number): void;

	renderTickIndex(pos: number, i: number): void;

	setAxisCategories(categories: NSArray<string> | string[]): void;

	setAxisCategoriesRedraw(categories: NSArray<string> | string[], redraw: number): void;

	setAxisTitle(title: HITitle): void;

	setAxisTitleRedraw(title: HITitle, redraw: number): void;

	setExtremes(): void;

	setExtremesNewMax(newMin: number, newMax: number): void;

	setExtremesNewMaxRedraw(newMin: number, newMax: number, redraw: number): void;

	setExtremesNewMaxRedrawAnimation(newMin: number, newMax: number, redraw: number, animation: HIAnimationOptionsObject): void;

	setTickPositions(): void;

	update(options: HIYAxis): void;

	updateRedraw(options: HIYAxis, redraw: number): void;
}

declare class HIYear extends HIChartsJSONSerializable {
	static alloc(): HIYear; // inherited from NSObject

	static new(): HIYear; // inherited from NSObject

	main: string;

	getParams(): NSDictionary<any, any>;
}

declare class HIZAxis extends HIChartsJSONSerializable {
	static alloc(): HIZAxis; // inherited from NSObject

	static new(): HIZAxis; // inherited from NSObject

	accessibility: HIAccessibility;

	alignTicks: number;

	allowDecimals: number;

	alternateGridColor: HIColor;

	angle: number;

	categories: NSArray<string>;

	ceiling: number;

	className: string;

	dateTimeLabelFormats: HIDateTimeLabelFormats;

	endOnTick: number;

	events: HIEvents;

	floor: number;

	gridLineColor: HIColor;

	gridLineDashStyle: string;

	gridLineInterpolation: string;

	gridLineWidth: number;

	gridZIndex: number;

	id: string;

	labels: HILabels;

	linkedTo: number;

	margin: number;

	max: number;

	maxPadding: number;

	min: number;

	minPadding: number;

	minRange: number;

	minTickInterval: number;

	minorGridLineColor: HIColor;

	minorGridLineDashStyle: string;

	minorGridLineWidth: number;

	minorTickColor: HIColor;

	minorTickInterval: any;

	minorTickLength: number;

	minorTickPosition: string;

	minorTickWidth: number;

	minorTicks: number;

	offset: number;

	opposite: number;

	pane: number;

	plotBands: NSArray<HIPlotBands>;

	plotLines: NSArray<HIPlotLines>;

	reversed: number;

	reversedStacks: number;

	showFirstLabel: number;

	showLastLabel: number;

	softMax: number;

	softMin: number;

	startOfWeek: number;

	startOnTick: number;

	tickAmount: number;

	tickColor: HIColor;

	tickInterval: number;

	tickLength: number;

	tickPixelInterval: number;

	tickPosition: string;

	tickPositioner: HIFunction;

	tickPositions: NSArray<number>;

	tickWidth: number;

	tickmarkPlacement: string;

	title: HITitle;

	type: string;

	uniqueNames: number;

	units: NSArray<NSArray<any>>;

	visible: number;

	zoomEnabled: number;

	addPlotBand(options: HIPlotBands): void;

	addPlotLine(options: HIPlotLines): void;

	addTitle(display: number): void;

	drawCrosshair(): void;

	getParams(): NSDictionary<any, any>;

	hideCrosshair(): void;

	remove(): void;

	removePlotBand(id: string): void;

	removePlotLine(id: string): void;

	renderLine(): void;

	renderMinorTick(pos: number): void;

	renderTickIndex(pos: number, i: number): void;

	setAxisCategories(categories: NSArray<string> | string[]): void;

	setAxisCategoriesRedraw(categories: NSArray<string> | string[], redraw: number): void;

	setAxisTitle(title: HITitle): void;

	setAxisTitleRedraw(title: HITitle, redraw: number): void;

	setExtremes(): void;

	setExtremesNewMax(newMin: number, newMax: number): void;

	setExtremesNewMaxRedraw(newMin: number, newMax: number, redraw: number): void;

	setExtremesNewMaxRedrawAnimation(newMin: number, newMax: number, redraw: number, animation: HIAnimationOptionsObject): void;

	setTickPositions(): void;

	update(options: HIZAxis): void;

	updateRedraw(options: HIZAxis, redraw: number): void;
}

declare class HIZones extends HIChartsJSONSerializable {
	static alloc(): HIZones; // inherited from NSObject

	static new(): HIZones; // inherited from NSObject

	className: string;

	color: HIColor;

	dashStyle: string;

	fillColor: HIColor;

	from: number;

	marker: HIMarker;

	to: number;

	value: number;

	getParams(): NSDictionary<any, any>;
}

declare class HIZoom extends HIChartsJSONSerializable {
	static alloc(): HIZoom; // inherited from NSObject

	static new(): HIZoom; // inherited from NSObject

	mapZoomIn: string;

	mapZoomOut: string;

	resetZoomButton: string;

	getParams(): NSDictionary<any, any>;
}

declare var HighchartsVersionNumber: number;

declare var HighchartsVersionString: interop.Reference<number>;
