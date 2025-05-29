interface GMUCluster extends NSObjectProtocol {
	count: number;

	items: NSArray<GMUClusterItem>;

	position: CLLocationCoordinate2D;
}
declare var GMUCluster: {
	prototype: GMUCluster;
};

interface GMUClusterAlgorithm extends NSObjectProtocol {
	addItems(items: NSArray<GMUClusterItem> | GMUClusterItem[]): void;

	clearItems(): void;

	clustersAtZoom(zoom: number): NSArray<GMUCluster>;

	removeItem(item: GMUClusterItem): void;
}
declare var GMUClusterAlgorithm: {
	prototype: GMUClusterAlgorithm;
};

interface GMUClusterIconGenerator extends NSObjectProtocol {
	iconForSize(size: number): UIImage;
}
declare var GMUClusterIconGenerator: {
	prototype: GMUClusterIconGenerator;
};

interface GMUClusterItem extends NSObjectProtocol {
	position: CLLocationCoordinate2D;

	snippet?: string;

	title?: string;
}
declare var GMUClusterItem: {
	prototype: GMUClusterItem;
};

declare class GMUClusterManager extends NSObject implements GMSMapViewDelegate {
	static alloc(): GMUClusterManager; // inherited from NSObject

	static new(): GMUClusterManager; // inherited from NSObject

	readonly algorithm: GMUClusterAlgorithm;

	readonly delegate: GMUClusterManagerDelegate;

	readonly mapDelegate: GMSMapViewDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { map: GMSMapView; algorithm: GMUClusterAlgorithm; renderer: GMUClusterRenderer });

	addItem(item: GMUClusterItem): void;

	addItems(items: NSArray<GMUClusterItem> | GMUClusterItem[]): void;

	class(): typeof NSObject;

	clearItems(): void;

	cluster(): void;

	clusterRequestCount(): number;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didTapMyLocationButtonForMapView(mapView: GMSMapView): boolean;

	initWithMapAlgorithmRenderer(mapView: GMSMapView, algorithm: GMUClusterAlgorithm, renderer: GMUClusterRenderer): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mapViewDidBeginDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidChangeCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewDidChangeMapCapabilities(mapView: GMSMapView, mapCapabilities: GMSMapCapabilityFlags): void;

	mapViewDidCloseInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidDragMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidEndDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidFinishTileRendering(mapView: GMSMapView): void;

	mapViewDidLongPressAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidLongPressInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidStartTileRendering(mapView: GMSMapView): void;

	mapViewDidTapAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidTapFeaturesInFeatureLayerAtLocation(mapView: GMSMapView, features: NSArray<GMSFeature> | GMSFeature[], featureLayer: GMSFeatureLayer<any>, location: CLLocationCoordinate2D): void;

	mapViewDidTapInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidTapMarker(mapView: GMSMapView, marker: GMSMarker): boolean;

	mapViewDidTapMyLocation(mapView: GMSMapView, location: CLLocationCoordinate2D): void;

	mapViewDidTapOverlay(mapView: GMSMapView, overlay: GMSOverlay): void;

	mapViewDidTapPOIWithPlaceIDNameLocation(mapView: GMSMapView, placeID: string, name: string, location: CLLocationCoordinate2D): void;

	mapViewIdleAtCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewMarkerInfoContents(mapView: GMSMapView, marker: GMSMarker): UIView;

	mapViewMarkerInfoWindow(mapView: GMSMapView, marker: GMSMarker): UIView;

	mapViewSnapshotReady(mapView: GMSMapView): void;

	mapViewWillMove(mapView: GMSMapView, gesture: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItem(item: GMUClusterItem): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setDelegateMapDelegate(delegate: GMUClusterManagerDelegate, mapDelegate: GMSMapViewDelegate): void;

	setMapDelegate(mapDelegate: GMSMapViewDelegate): void;
}

interface GMUClusterManagerDelegate extends NSObjectProtocol {
	clusterManagerDidTapCluster?(clusterManager: GMUClusterManager, cluster: GMUCluster): boolean;

	clusterManagerDidTapClusterItem?(clusterManager: GMUClusterManager, clusterItem: GMUClusterItem): boolean;
}
declare var GMUClusterManagerDelegate: {
	prototype: GMUClusterManagerDelegate;
};

interface GMUClusterRenderer extends NSObjectProtocol {
	renderClusters(clusters: NSArray<GMUCluster> | GMUCluster[]): void;

	update(): void;
}
declare var GMUClusterRenderer: {
	prototype: GMUClusterRenderer;
};

interface GMUClusterRendererDelegate extends NSObjectProtocol {
	rendererDidRenderMarker?(renderer: GMUClusterRenderer, marker: GMSMarker): void;

	rendererMarkerForObject?(renderer: GMUClusterRenderer, object: any): GMSMarker;

	rendererWillRenderMarker?(renderer: GMUClusterRenderer, marker: GMSMarker): void;
}
declare var GMUClusterRendererDelegate: {
	prototype: GMUClusterRendererDelegate;
};

declare class GMUDefaultClusterIconGenerator extends NSObject implements GMUClusterIconGenerator {
	static alloc(): GMUDefaultClusterIconGenerator; // inherited from NSObject

	static new(): GMUDefaultClusterIconGenerator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { buckets: NSArray<number> | number[] });

	constructor(o: { buckets: NSArray<number> | number[]; backgroundColors: NSArray<UIColor> | UIColor[] });

	constructor(o: { buckets: NSArray<number> | number[]; backgroundImages: NSArray<UIImage> | UIImage[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	iconForSize(size: number): UIImage;

	iconForTextWithBaseImage(text: string, image: UIImage): UIImage;

	iconForTextWithBucketIndex(text: string, bucketIndex: number): UIImage;

	initWithBuckets(buckets: NSArray<number> | number[]): this;

	initWithBucketsBackgroundColors(buckets: NSArray<number> | number[], backgroundColors: NSArray<UIColor> | UIColor[]): this;

	initWithBucketsBackgroundImages(buckets: NSArray<number> | number[], backgroundImages: NSArray<UIImage> | UIImage[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUDefaultClusterRenderer extends NSObject implements GMUClusterRenderer {
	static alloc(): GMUDefaultClusterRenderer; // inherited from NSObject

	static new(): GMUDefaultClusterRenderer; // inherited from NSObject

	animatesClusters: boolean;

	animationDuration: number;

	delegate: GMUClusterRendererDelegate;

	readonly markers: NSArray<GMSMarker>;

	maximumClusterZoom: number;

	minimumClusterSize: number;

	zIndex: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { mapView: GMSMapView; clusterIconGenerator: GMUClusterIconGenerator });

	class(): typeof NSObject;

	clearMarkersAnimated(markers: NSArray<GMSMarker> | GMSMarker[]): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithMapViewClusterIconGenerator(mapView: GMSMapView, iconGenerator: GMUClusterIconGenerator): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderClusters(clusters: NSArray<GMUCluster> | GMUCluster[]): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldRenderAsClusterAtZoom(cluster: GMUCluster, zoom: number): boolean;

	update(): void;

	visibleClustersFromClusters(clusters: NSArray<GMUCluster> | GMUCluster[]): NSArray<GMUCluster>;
}

declare class GMUFeature extends NSObject implements GMUGeometryContainer {
	static alloc(): GMUFeature; // inherited from NSObject

	static new(): GMUFeature; // inherited from NSObject

	readonly boundingBox: GMSCoordinateBounds;

	readonly identifier: string;

	readonly properties: NSDictionary<string, NSObject>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly geometry: GMUGeometry; // inherited from GMUGeometryContainer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	style: GMUStyle; // inherited from GMUGeometryContainer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { geometry: GMUGeometry; identifier: string; properties: NSDictionary<string, NSObject>; boundingBox: GMSCoordinateBounds });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithGeometryIdentifierPropertiesBoundingBox(geometry: GMUGeometry, identifier: string, properties: NSDictionary<string, NSObject>, boundingBox: GMSCoordinateBounds): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUGeoJSONParser extends NSObject {
	static alloc(): GMUGeoJSONParser; // inherited from NSObject

	static new(): GMUGeoJSONParser; // inherited from NSObject

	readonly features: NSArray<GMUGeometryContainer>;

	constructor(o: { data: NSData });

	constructor(o: { stream: NSInputStream });

	constructor(o: { URL: NSURL });

	initWithData(data: NSData): this;

	initWithStream(stream: NSInputStream): this;

	initWithURL(url: NSURL): this;

	parse(): void;
}

interface GMUGeometry extends NSObjectProtocol {
	type: string;
}
declare var GMUGeometry: {
	prototype: GMUGeometry;
};

declare class GMUGeometryCollection extends NSObject implements GMUGeometry {
	static alloc(): GMUGeometryCollection; // inherited from NSObject

	static new(): GMUGeometryCollection; // inherited from NSObject

	readonly geometries: NSArray<GMUGeometry>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from GMUGeometry

	readonly; // inherited from NSObjectProtocol

	constructor(o: { geometries: NSArray<GMUGeometry> | GMUGeometry[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithGeometries(geometries: NSArray<GMUGeometry> | GMUGeometry[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface GMUGeometryContainer extends NSObjectProtocol {
	geometry: GMUGeometry;

	style: GMUStyle;
}
declare var GMUGeometryContainer: {
	prototype: GMUGeometryContainer;
};

declare class GMUGeometryRenderer extends NSObject {
	static alloc(): GMUGeometryRenderer; // inherited from NSObject

	static imageFromPath(path: string): UIImage;

	static new(): GMUGeometryRenderer; // inherited from NSObject

	constructor(o: { map: GMSMapView; geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[] });

	constructor(o: { map: GMSMapView; geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[]; styles: NSArray<GMUStyle> | GMUStyle[] });

	constructor(o: { map: GMSMapView; geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[]; styles: NSArray<GMUStyle> | GMUStyle[]; styleMaps: NSArray<GMUStyleMap> | GMUStyleMap[] });

	clear(): void;

	getStyleFromStyleMaps(styleUrl: string): GMUStyle;

	initWithMapGeometries(map: GMSMapView, geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[]): this;

	initWithMapGeometriesStyles(map: GMSMapView, geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[], styles: NSArray<GMUStyle> | GMUStyle[]): this;

	initWithMapGeometriesStylesStyleMaps(map: GMSMapView, geometries: NSArray<GMUGeometryContainer> | GMUGeometryContainer[], styles: NSArray<GMUStyle> | GMUStyle[], styleMaps: NSArray<GMUStyleMap> | GMUStyleMap[]): this;

	mapOverlays(): NSArray<GMSOverlay>;

	render(): void;
}

declare class GMUGradient extends NSObject {
	static alloc(): GMUGradient; // inherited from NSObject

	static new(): GMUGradient; // inherited from NSObject

	readonly colors: NSArray<UIColor>;

	readonly mapSize: number;

	readonly startPoints: NSArray<number>;

	constructor(o: { colors: NSArray<UIColor> | UIColor[]; startPoints: NSArray<number> | number[]; colorMapSize: number });

	generateColorMap(): NSArray<UIColor>;

	initWithColorsStartPointsColorMapSize(colors: NSArray<UIColor> | UIColor[], startPoints: NSArray<number> | number[], mapSize: number): this;
}

declare class GMUGridBasedClusterAlgorithm extends NSObject implements GMUClusterAlgorithm {
	static alloc(): GMUGridBasedClusterAlgorithm; // inherited from NSObject

	static new(): GMUGridBasedClusterAlgorithm; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	addItems(items: NSArray<GMUClusterItem> | GMUClusterItem[]): void;

	class(): typeof NSObject;

	clearItems(): void;

	clustersAtZoom(zoom: number): NSArray<GMUCluster>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItem(item: GMUClusterItem): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUGroundOverlay extends NSObject implements GMUGeometry {
	static alloc(): GMUGroundOverlay; // inherited from NSObject

	static new(): GMUGroundOverlay; // inherited from NSObject

	readonly href: string;

	readonly northEast: CLLocationCoordinate2D;

	readonly rotation: number;

	readonly southWest: CLLocationCoordinate2D;

	readonly zIndex: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from GMUGeometry

	readonly; // inherited from NSObjectProtocol

	constructor(o: { coordinate: CLLocationCoordinate2D; southWest: CLLocationCoordinate2D; zIndex: number; rotation: number; href: string });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCoordinateSouthWestZIndexRotationHref(northEast: CLLocationCoordinate2D, southWest: CLLocationCoordinate2D, zIndex: number, rotation: number, href: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUHeatmapTileLayer extends GMSSyncTileLayer {
	static alloc(): GMUHeatmapTileLayer; // inherited from NSObject

	static new(): GMUHeatmapTileLayer; // inherited from NSObject

	gradient: GMUGradient;

	maximumZoomIntensity: number;

	minimumZoomIntensity: number;

	radius: number;

	weightedData: NSArray<GMUWeightedLatLng>;
}

declare class GMUKMLParser extends NSObject {
	static alloc(): GMUKMLParser; // inherited from NSObject

	static new(): GMUKMLParser; // inherited from NSObject

	readonly placemarks: NSArray<GMUGeometryContainer>;

	readonly styleMaps: NSArray<GMUStyleMap>;

	readonly styles: NSArray<GMUStyle>;

	constructor(o: { data: NSData });

	constructor(o: { stream: NSInputStream });

	constructor(o: { URL: NSURL });

	initWithData(data: NSData): this;

	initWithStream(stream: NSInputStream): this;

	initWithURL(url: NSURL): this;

	parse(): void;
}

declare class GMULineString extends NSObject implements GMUGeometry {
	static alloc(): GMULineString; // inherited from NSObject

	static new(): GMULineString; // inherited from NSObject

	readonly path: GMSPath;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from GMUGeometry

	readonly; // inherited from NSObjectProtocol

	constructor(o: { path: GMSPath });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPath(path: GMSPath): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUNonHierarchicalDistanceBasedAlgorithm extends NSObject implements GMUClusterAlgorithm {
	static alloc(): GMUNonHierarchicalDistanceBasedAlgorithm; // inherited from NSObject

	static new(): GMUNonHierarchicalDistanceBasedAlgorithm; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { clusterDistancePoints: number });

	addItems(items: NSArray<GMUClusterItem> | GMUClusterItem[]): void;

	class(): typeof NSObject;

	clearItems(): void;

	clustersAtZoom(zoom: number): NSArray<GMUCluster>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithClusterDistancePoints(clusterDistancePoints: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItem(item: GMUClusterItem): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUPair extends NSObject {
	static alloc(): GMUPair; // inherited from NSObject

	static new(): GMUPair; // inherited from NSObject

	readonly key: string;

	readonly styleUrl: string;

	constructor(o: { key: string; styleUrl: string });

	initWithKeyStyleUrl(styleID: string, strokeColor: string): this;
}

declare class GMUPlacemark extends NSObject implements GMUGeometryContainer {
	static alloc(): GMUPlacemark; // inherited from NSObject

	static new(): GMUPlacemark; // inherited from NSObject

	readonly snippet: string;

	readonly styleUrl: string;

	readonly title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly geometry: GMUGeometry; // inherited from GMUGeometryContainer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	style: GMUStyle; // inherited from GMUGeometryContainer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { geometry: GMUGeometry; title: string; snippet: string; style: GMUStyle; styleUrl: string });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithGeometryTitleSnippetStyleStyleUrl(geometry: GMUGeometry, title: string, snippet: string, style: GMUStyle, styleUrl: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUPoint extends NSObject implements GMUGeometry {
	static alloc(): GMUPoint; // inherited from NSObject

	static new(): GMUPoint; // inherited from NSObject

	readonly coordinate: CLLocationCoordinate2D;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from GMUGeometry

	readonly; // inherited from NSObjectProtocol

	constructor(o: { coordinate: CLLocationCoordinate2D });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCoordinate(coordinate: CLLocationCoordinate2D): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUPolygon extends NSObject implements GMUGeometry {
	static alloc(): GMUPolygon; // inherited from NSObject

	static new(): GMUPolygon; // inherited from NSObject

	readonly paths: NSArray<GMSPath>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from GMUGeometry

	readonly; // inherited from NSObjectProtocol

	constructor(o: { paths: NSArray<GMSPath> | GMSPath[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPaths(paths: NSArray<GMSPath> | GMSPath[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUSimpleClusterAlgorithm extends NSObject implements GMUClusterAlgorithm {
	static alloc(): GMUSimpleClusterAlgorithm; // inherited from NSObject

	static new(): GMUSimpleClusterAlgorithm; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	addItems(items: NSArray<GMUClusterItem> | GMUClusterItem[]): void;

	class(): typeof NSObject;

	clearItems(): void;

	clustersAtZoom(zoom: number): NSArray<GMUCluster>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItem(item: GMUClusterItem): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUStaticCluster extends NSObject implements GMUCluster {
	static alloc(): GMUStaticCluster; // inherited from NSObject

	static new(): GMUStaticCluster; // inherited from NSObject

	readonly count: number; // inherited from GMUCluster

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly items: NSArray<GMUClusterItem>; // inherited from GMUCluster

	readonly position: CLLocationCoordinate2D; // inherited from GMUCluster

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { position: CLLocationCoordinate2D });

	addItem(item: GMUClusterItem): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPosition(position: CLLocationCoordinate2D): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItem(item: GMUClusterItem): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUStyle extends NSObject {
	static alloc(): GMUStyle; // inherited from NSObject

	static new(): GMUStyle; // inherited from NSObject

	readonly anchor: CGPoint;

	readonly fillColor: UIColor;

	readonly hasFill: boolean;

	readonly hasStroke: boolean;

	readonly heading: number;

	readonly iconUrl: string;

	readonly scale: number;

	readonly strokeColor: UIColor;

	readonly styleID: string;

	readonly title: string;

	readonly width: number;

	constructor(o: { styleID: string; strokeColor: UIColor; fillColor: UIColor; width: number; scale: number; heading: number; anchor: CGPoint; iconUrl: string; title: string; hasFill: boolean; hasStroke: boolean });

	initWithStyleIDStrokeColorFillColorWidthScaleHeadingAnchorIconUrlTitleHasFillHasStroke(styleID: string, strokeColor: UIColor, fillColor: UIColor, width: number, scale: number, heading: number, anchor: CGPoint, iconUrl: string, title: string, hasFill: boolean, hasStroke: boolean): this;
}

declare class GMUStyleMap extends NSObject {
	static alloc(): GMUStyleMap; // inherited from NSObject

	static new(): GMUStyleMap; // inherited from NSObject

	readonly pairs: NSArray<GMUPair>;

	readonly styleMapId: string;

	constructor(o: { id: string; pairs: NSArray<GMUPair> | GMUPair[] });

	initWithIdPairs(styleMapId: string, pairs: NSArray<GMUPair> | GMUPair[]): this;
}

declare class GMUWeightedLatLng extends NSObject implements GQTPointQuadTreeItem {
	static alloc(): GMUWeightedLatLng; // inherited from NSObject

	static new(): GMUWeightedLatLng; // inherited from NSObject

	readonly intensity: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { coordinate: CLLocationCoordinate2D; intensity: number });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCoordinateIntensity(coordinate: CLLocationCoordinate2D, intensity: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	point(): GQTPoint;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GMUWrappingDictionaryKey extends NSObject implements NSCopying {
	static alloc(): GMUWrappingDictionaryKey; // inherited from NSObject

	static new(): GMUWrappingDictionaryKey; // inherited from NSObject

	constructor(o: { object: any });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithObject(object: any): this;
}

interface GQTBounds {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}
declare var GQTBounds: interop.StructType<GQTBounds>;

interface GQTPoint {
	x: number;
	y: number;
}
declare var GQTPoint: interop.StructType<GQTPoint>;

declare class GQTPointQuadTree extends NSObject {
	static alloc(): GQTPointQuadTree; // inherited from NSObject

	static new(): GQTPointQuadTree; // inherited from NSObject

	constructor(o: { bounds: GQTBounds });

	add(item: GQTPointQuadTreeItem): boolean;

	clear(): void;

	count(): number;

	initWithBounds(bounds: GQTBounds): this;

	remove(item: GQTPointQuadTreeItem): boolean;

	searchWithBounds(bounds: GQTBounds): NSArray<any>;
}

declare class GQTPointQuadTreeChild extends NSObject {
	static alloc(): GQTPointQuadTreeChild; // inherited from NSObject

	static new(): GQTPointQuadTreeChild; // inherited from NSObject

	addWithOwnBoundsAtDepth(item: GQTPointQuadTreeItem, bounds: GQTBounds, depth: number): void;

	removeWithOwnBounds(item: GQTPointQuadTreeItem, bounds: GQTBounds): boolean;

	searchWithBoundsWithOwnBoundsResults(searchBounds: GQTBounds, ownBounds: GQTBounds, accumulator: NSMutableArray<any>): void;

	splitWithOwnBoundsAtDepth(ownBounds: GQTBounds, depth: number): void;
}

interface GQTPointQuadTreeItem extends NSObjectProtocol {
	point(): GQTPoint;
}
declare var GQTPointQuadTreeItem: {
	prototype: GQTPointQuadTreeItem;
};

declare var GoogleMapsUtilsVersionNumber: number;

declare var GoogleMapsUtilsVersionNumberVar: number;

declare var GoogleMapsUtilsVersionString: interop.Reference<number>;

declare var GoogleMapsUtilsVersionStringVar: interop.Reference<number>;

declare class HeatmapInterpolationPoints extends NSObject {
	static alloc(): HeatmapInterpolationPoints; // inherited from NSObject

	static new(): HeatmapInterpolationPoints; // inherited from NSObject
}
