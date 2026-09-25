declare class GMSAddress extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): GMSAddress; // inherited from NSObject

	static new(): GMSAddress; // inherited from NSObject

	readonly administrativeArea: string | null;

	readonly coordinate: CLLocationCoordinate2D;

	readonly country: string | null;

	readonly lines: NSArray<string> | null;

	readonly locality: string | null;

	readonly postalCode: string | null;

	readonly subLocality: string | null;

	readonly thoroughfare: string | null;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	addressLine1(): string | null;

	addressLine2(): string | null;

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GMSAdvancedMarker extends GMSMarker {
	static alloc(): GMSAdvancedMarker; // inherited from NSObject

	static markerWithPosition(position: CLLocationCoordinate2D): GMSAdvancedMarker; // inherited from GMSMarker

	static new(): GMSAdvancedMarker; // inherited from NSObject

	collisionBehavior: GMSCollisionBehavior;
}

declare class GMSCALayer extends CALayer {
	static alloc(): GMSCALayer; // inherited from NSObject

	static layer(): GMSCALayer; // inherited from CALayer

	static new(): GMSCALayer; // inherited from NSObject
}

declare class GMSCameraPosition extends NSObject implements NSCopying, NSMutableCopying {
	static alloc(): GMSCameraPosition; // inherited from NSObject

	static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSCameraPosition;

	static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;

	static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraPosition;

	static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;

	static new(): GMSCameraPosition; // inherited from NSObject

	static zoomAtCoordinateForMetersPerPoints(coordinate: CLLocationCoordinate2D, meters: number, points: number): number;

	readonly bearing: number;

	readonly target: CLLocationCoordinate2D;

	readonly viewingAngle: number;

	readonly zoom: number;

	constructor(o: { latitude: number; longitude: number; zoom: number });

	constructor(o: { latitude: number; longitude: number; zoom: number; bearing: number; viewingAngle: number });

	constructor(o: { target: CLLocationCoordinate2D; zoom: number });

	constructor(o: { target: CLLocationCoordinate2D; zoom: number; bearing: number; viewingAngle: number });

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	initWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): this;

	initWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): this;

	initWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): this;

	initWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): this;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;
}

declare class GMSCameraUpdate extends NSObject {
	static alloc(): GMSCameraUpdate; // inherited from NSObject

	static fitBounds(bounds: GMSCoordinateBounds): GMSCameraUpdate;

	static fitBoundsWithEdgeInsets(bounds: GMSCoordinateBounds, edgeInsets: UIEdgeInsets): GMSCameraUpdate;

	static fitBoundsWithPadding(bounds: GMSCoordinateBounds, padding: number): GMSCameraUpdate;

	static new(): GMSCameraUpdate; // inherited from NSObject

	static scrollByXY(dX: number, dY: number): GMSCameraUpdate;

	static setCamera(camera: GMSCameraPosition): GMSCameraUpdate;

	static setTarget(target: CLLocationCoordinate2D): GMSCameraUpdate;

	static setTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraUpdate;

	static zoomBy(delta: number): GMSCameraUpdate;

	static zoomByAtPoint(zoom: number, point: CGPoint): GMSCameraUpdate;

	static zoomIn(): GMSCameraUpdate;

	static zoomOut(): GMSCameraUpdate;

	static zoomTo(zoom: number): GMSCameraUpdate;
}

declare class GMSCircle extends GMSOverlay {
	static alloc(): GMSCircle; // inherited from NSObject

	static circleWithPositionRadius(position: CLLocationCoordinate2D, radius: number): GMSCircle;

	static new(): GMSCircle; // inherited from NSObject

	fillColor: UIColor | null;

	position: CLLocationCoordinate2D;

	radius: number;

	strokeColor: UIColor | null;

	strokeWidth: number;
}

declare const enum GMSCollisionBehavior {
	Required = 0,

	RequiredAndHidesOptional = 1,

	OptionalAndHidesLowerPriority = 2,
}

declare class GMSCoordinateBounds extends NSObject {
	static alloc(): GMSCoordinateBounds; // inherited from NSObject

	static new(): GMSCoordinateBounds; // inherited from NSObject

	readonly northEast: CLLocationCoordinate2D;

	readonly southWest: CLLocationCoordinate2D;

	readonly valid: boolean;

	constructor(o: { coordinate: CLLocationCoordinate2D; coordinate2: CLLocationCoordinate2D });

	constructor(o: { path: GMSPath });

	constructor(o: { region: GMSVisibleRegion });

	containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

	includingBounds(other: GMSCoordinateBounds): GMSCoordinateBounds;

	includingCoordinate(coordinate: CLLocationCoordinate2D): GMSCoordinateBounds;

	includingPath(path: GMSPath): GMSCoordinateBounds;

	initWithCoordinateCoordinate(coord1: CLLocationCoordinate2D, coord2: CLLocationCoordinate2D): this;

	initWithPath(path: GMSPath): this;

	initWithRegion(region: GMSVisibleRegion): this;

	intersectsBounds(other: GMSCoordinateBounds): boolean;
}

declare class GMSDatasetFeature extends NSObject implements GMSFeature {
	static alloc(): GMSDatasetFeature; // inherited from NSObject

	static new(): GMSDatasetFeature; // inherited from NSObject

	readonly datasetAttributes: NSDictionary<string, string>;

	readonly datasetID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly featureType: string; // inherited from GMSFeature

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { datasetID: string; datasetAttributes: NSDictionary<string, string> });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDatasetIDDatasetAttributes(datasetID: string, datasetAttributes: NSDictionary<string, string>): this;

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

declare class GMSDatasetFeatureLayer extends GMSFeatureLayer<GMSDatasetFeature> {
	static alloc(): GMSDatasetFeatureLayer; // inherited from NSObject

	static new(): GMSDatasetFeatureLayer; // inherited from NSObject

	readonly datasetID: string;
}

interface GMSFeature extends NSObjectProtocol {
	featureType: string;
}
declare var GMSFeature: {
	prototype: GMSFeature;
};

declare class GMSFeatureLayer<T> extends NSObject {
	static alloc<T>(): GMSFeatureLayer<T>; // inherited from NSObject

	static new<T>(): GMSFeatureLayer<T>; // inherited from NSObject

	readonly available: boolean;

	readonly featureType: string;

	style: (p1: GMSFeature) => GMSFeatureStyle | null | null;

	constructor(o: { featureType: string });

	initWithFeatureType(featureType: string): this;
}

declare class GMSFeatureStyle extends NSObject implements NSCopying, NSMutableCopying {
	static alloc(): GMSFeatureStyle; // inherited from NSObject

	static new(): GMSFeatureStyle; // inherited from NSObject

	static styleWithFillColorStrokeColorStrokeWidth(fillColor: UIColor | null, strokeColor: UIColor | null, strokeWidth: number): GMSFeatureStyle;

	readonly fillColor: UIColor | null;

	readonly pointRadius: number;

	readonly strokeColor: UIColor | null;

	readonly strokeWidth: number;

	constructor(o: { fillColor: UIColor | null; strokeColor: UIColor | null; strokeWidth: number });

	copy(): GMSFeatureStyle;

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	initWithFillColorStrokeColorStrokeWidth(fillColor: UIColor | null, strokeColor: UIColor | null, strokeWidth: number): this;

	mutableCopy(): GMSMutableFeatureStyle;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;
}

declare var GMSFeatureStylePointRadiusUnspecified: number;

declare var GMSFeatureStyleStrokeWidthUnspecified: number;

declare var GMSFeatureTypeAdministrativeAreaLevel1: string;

declare var GMSFeatureTypeAdministrativeAreaLevel2: string;

declare var GMSFeatureTypeCountry: string;

declare var GMSFeatureTypeDataset: string;

declare var GMSFeatureTypeLocality: string;

declare var GMSFeatureTypePostalCode: string;

declare var GMSFeatureTypeSchoolDistrict: string;

declare const enum GMSFrameRate {
	kGMSFrameRatePowerSave = 0,

	kGMSFrameRateConservative = 1,

	kGMSFrameRateMaximum = 2,
}

declare class GMSGeocoder extends NSObject {
	static alloc(): GMSGeocoder; // inherited from NSObject

	static geocoder(): GMSGeocoder;

	static new(): GMSGeocoder; // inherited from NSObject

	reverseGeocodeCoordinateCompletionHandler(coordinate: CLLocationCoordinate2D, handler: (p1: GMSReverseGeocodeResponse | null, p2: NSError | null) => void): void;
}

declare const enum GMSGeocoderErrorCode {
	kGMSGeocoderErrorInvalidCoordinate = 1,

	kGMSGeocoderErrorInternal = 2,
}

declare function GMSGeometryArea(path: GMSPath): number;

declare function GMSGeometryContainsLocation(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

declare function GMSGeometryDistance(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

declare function GMSGeometryHeading(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

declare function GMSGeometryInterpolate(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D, fraction: number): CLLocationCoordinate2D;

declare function GMSGeometryIsLocationOnPath(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

declare function GMSGeometryIsLocationOnPathTolerance(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean, tolerance: number): boolean;

declare function GMSGeometryLength(path: GMSPath): number;

declare function GMSGeometryOffset(from: CLLocationCoordinate2D, distance: number, heading: number): CLLocationCoordinate2D;

declare function GMSGeometrySignedArea(path: GMSPath): number;

declare class GMSGroundOverlay extends GMSOverlay {
	static alloc(): GMSGroundOverlay; // inherited from NSObject

	static groundOverlayWithBoundsIcon(bounds: GMSCoordinateBounds | null, icon: UIImage | null): GMSGroundOverlay;

	static groundOverlayWithPositionIconZoomLevel(position: CLLocationCoordinate2D, icon: UIImage | null, zoomLevel: number): GMSGroundOverlay;

	static new(): GMSGroundOverlay; // inherited from NSObject

	anchor: CGPoint;

	bearing: number;

	bounds: GMSCoordinateBounds | null;

	icon: UIImage | null;

	opacity: number;

	position: CLLocationCoordinate2D;
}

declare class GMSIndoorBuilding extends NSObject {
	static alloc(): GMSIndoorBuilding; // inherited from NSObject

	static new(): GMSIndoorBuilding; // inherited from NSObject

	readonly defaultLevelIndex: number;

	readonly levels: NSArray<GMSIndoorLevel>;

	readonly underground: boolean;
}

declare class GMSIndoorDisplay extends NSObject {
	static alloc(): GMSIndoorDisplay; // inherited from NSObject

	static new(): GMSIndoorDisplay; // inherited from NSObject

	readonly activeBuilding: GMSIndoorBuilding | null;

	activeLevel: GMSIndoorLevel | null;

	delegate: GMSIndoorDisplayDelegate | null;
}

interface GMSIndoorDisplayDelegate extends NSObjectProtocol {
	didChangeActiveBuilding?(building: GMSIndoorBuilding | null): void;

	didChangeActiveLevel?(level: GMSIndoorLevel | null): void;
}
declare var GMSIndoorDisplayDelegate: {
	prototype: GMSIndoorDisplayDelegate;
};

declare class GMSIndoorLevel extends NSObject {
	static alloc(): GMSIndoorLevel; // inherited from NSObject

	static new(): GMSIndoorLevel; // inherited from NSObject

	readonly name: string | null;

	readonly shortName: string | null;
}

declare const enum GMSLengthKind {
	kGMSLengthGeodesic = 0,

	kGMSLengthRhumb = 1,

	kGMSLengthProjected = 2,
}

declare const enum GMSMapCapabilityFlags {
	None = 0,

	AdvancedMarkers = 1,

	DataDrivenStyling = 2,

	SpritePolylines = 4,
}

declare class GMSMapID extends NSObject implements NSCopying {
	static alloc(): GMSMapID; // inherited from NSObject

	static mapIDWithIdentifier(identifier: string): GMSMapID;

	static new(): GMSMapID; // inherited from NSObject

	static readonly demoMapID: GMSMapID;

	constructor(o: { identifier: string });

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	initWithIdentifier(identifier: string): this;
}

declare class GMSMapLayer extends GMSCALayer {
	static alloc(): GMSMapLayer; // inherited from NSObject

	static layer(): GMSMapLayer; // inherited from CALayer

	static new(): GMSMapLayer; // inherited from NSObject

	cameraBearing: number;

	cameraLatitude: number;

	cameraLongitude: number;

	cameraViewingAngle: number;

	cameraZoomLevel: number;
}

interface GMSMapPoint {
	x: number;
	y: number;
}
declare var GMSMapPoint: interop.StructType<GMSMapPoint>;

declare function GMSMapPointDistance(a: GMSMapPoint, b: GMSMapPoint): number;

declare function GMSMapPointInterpolate(a: GMSMapPoint, b: GMSMapPoint, t: number): GMSMapPoint;

declare class GMSMapStyle extends NSObject {
	static alloc(): GMSMapStyle; // inherited from NSObject

	static new(): GMSMapStyle; // inherited from NSObject

	static styleWithContentsOfFileURLError(fileURL: NSURL, error?: interop.Reference<NSError>): GMSMapStyle;

	static styleWithJSONStringError(style: string, error?: interop.Reference<NSError>): GMSMapStyle;
}

declare class GMSMapView extends UIView {
	static alloc(): GMSMapView; // inherited from NSObject

	static appearance(): GMSMapView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): GMSMapView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject | null): GMSMapView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GMSMapView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject | null): GMSMapView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GMSMapView; // inherited from UIAppearance

	static mapWithFrameCamera(frame: CGRect, camera: GMSCameraPosition): GMSMapView;

	static mapWithFrameMapIDCamera(frame: CGRect, mapID: GMSMapID, camera: GMSCameraPosition): GMSMapView;

	static new(): GMSMapView; // inherited from NSObject

	buildingsEnabled: boolean;

	camera: GMSCameraPosition;

	cameraTargetBounds: GMSCoordinateBounds | null;

	delegate: GMSMapViewDelegate | null;

	readonly indoorDisplay: GMSIndoorDisplay;

	indoorEnabled: boolean;

	readonly layer: GMSMapLayer;

	readonly mapCapabilities: GMSMapCapabilityFlags;

	mapStyle: GMSMapStyle | null;

	mapType: GMSMapViewType;

	readonly maxZoom: number;

	readonly minZoom: number;

	readonly myLocation: CLLocation | null;

	myLocationEnabled: boolean;

	padding: UIEdgeInsets;

	paddingAdjustmentBehavior: GMSMapViewPaddingAdjustmentBehavior;

	preferredFrameRate: GMSFrameRate;

	readonly projection: GMSProjection;

	selectedMarker: GMSMarker | null;

	readonly settings: GMSUISettings;

	trafficEnabled: boolean;

	transitEnabled: boolean;

	constructor(o: { frame: CGRect; camera: GMSCameraPosition });

	constructor(o: { frame: CGRect; mapID: GMSMapID; camera: GMSCameraPosition });

	constructor(o: { options: GMSMapViewOptions });

	animateToBearing(bearing: number): void;

	animateToCameraPosition(cameraPosition: GMSCameraPosition): void;

	animateToLocation(location: CLLocationCoordinate2D): void;

	animateToViewingAngle(viewingAngle: number): void;

	animateToZoom(zoom: number): void;

	animateWithCameraUpdate(cameraUpdate: GMSCameraUpdate): void;

	areEqualForRenderingPositionPosition(position: GMSCameraPosition, otherPosition: GMSCameraPosition): boolean;

	cameraForBoundsInsets(bounds: GMSCoordinateBounds, insets: UIEdgeInsets): GMSCameraPosition | null;

	clear(): void;

	datasetFeatureLayerOfDatasetID(datasetID: string): GMSDatasetFeatureLayer;

	featureLayerOfFeatureType(featureType: string): GMSFeatureLayer<GMSPlaceFeature>;

	initWithFrameCamera(frame: CGRect, camera: GMSCameraPosition): this;

	initWithFrameMapIDCamera(frame: CGRect, mapID: GMSMapID, camera: GMSCameraPosition): this;

	initWithOptions(options: GMSMapViewOptions): this;

	moveCamera(update: GMSCameraUpdate): void;

	setMinZoomMaxZoom(minZoom: number, maxZoom: number): void;

	startRendering(): void;

	stopRendering(): void;
}

interface GMSMapViewDelegate extends NSObjectProtocol {
	didTapMyLocationButtonForMapView?(mapView: GMSMapView): boolean;

	mapViewDidBeginDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidChangeCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewDidChangeMapCapabilities?(mapView: GMSMapView, mapCapabilities: GMSMapCapabilityFlags): void;

	mapViewDidCloseInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidDragMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidEndDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidFinishTileRendering?(mapView: GMSMapView): void;

	mapViewDidLongPressAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidLongPressInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidStartTileRendering?(mapView: GMSMapView): void;

	mapViewDidTapAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidTapFeaturesInFeatureLayerAtLocation?(mapView: GMSMapView, features: NSArray<GMSFeature> | GMSFeature[], featureLayer: GMSFeatureLayer<any>, location: CLLocationCoordinate2D): void;

	mapViewDidTapInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidTapMarker?(mapView: GMSMapView, marker: GMSMarker): boolean;

	mapViewDidTapMyLocation?(mapView: GMSMapView, location: CLLocationCoordinate2D): void;

	mapViewDidTapOverlay?(mapView: GMSMapView, overlay: GMSOverlay): void;

	mapViewDidTapPOIWithPlaceIDNameLocation?(mapView: GMSMapView, placeID: string, name: string, location: CLLocationCoordinate2D): void;

	mapViewIdleAtCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewMarkerInfoContents?(mapView: GMSMapView, marker: GMSMarker): UIView | null;

	mapViewMarkerInfoWindow?(mapView: GMSMapView, marker: GMSMarker): UIView | null;

	mapViewSnapshotReady?(mapView: GMSMapView): void;

	mapViewWillMove?(mapView: GMSMapView, gesture: boolean): void;
}
declare var GMSMapViewDelegate: {
	prototype: GMSMapViewDelegate;
};

declare class GMSMapViewOptions extends NSObject {
	static alloc(): GMSMapViewOptions; // inherited from NSObject

	static new(): GMSMapViewOptions; // inherited from NSObject

	backgroundColor: UIColor | null;

	camera: GMSCameraPosition | null;

	frame: CGRect;

	mapID: GMSMapID | null;
}

declare const enum GMSMapViewPaddingAdjustmentBehavior {
	kGMSMapViewPaddingAdjustmentBehaviorAlways = 0,

	kGMSMapViewPaddingAdjustmentBehaviorAutomatic = 1,

	kGMSMapViewPaddingAdjustmentBehaviorNever = 2,
}

declare const enum GMSMapViewType {
	kGMSTypeNormal = 1,

	kGMSTypeSatellite = 2,

	kGMSTypeTerrain = 3,

	kGMSTypeHybrid = 4,

	kGMSTypeNone = 5,
}

declare class GMSMarker extends GMSOverlay {
	static alloc(): GMSMarker; // inherited from NSObject

	static markerImageWithColor(color: UIColor | null): UIImage;

	static markerWithPosition(position: CLLocationCoordinate2D): GMSMarker;

	static new(): GMSMarker; // inherited from NSObject

	appearAnimation: GMSMarkerAnimation;

	draggable: boolean;

	flat: boolean;

	groundAnchor: CGPoint;

	icon: UIImage | null;

	iconView: UIView | null;

	infoWindowAnchor: CGPoint;

	readonly layer: GMSMarkerLayer;

	opacity: number;

	panoramaView: GMSPanoramaView | null;

	position: CLLocationCoordinate2D;

	rotation: number;

	snippet: string | null;

	tracksInfoWindowChanges: boolean;

	tracksViewChanges: boolean;
}

declare const enum GMSMarkerAnimation {
	kGMSMarkerAnimationNone = 0,

	kGMSMarkerAnimationPop = 1,

	kGMSMarkerAnimationFadeIn = 2,
}

declare class GMSMarkerLayer extends GMSOverlayLayer {
	static alloc(): GMSMarkerLayer; // inherited from NSObject

	static layer(): GMSMarkerLayer; // inherited from CALayer

	static new(): GMSMarkerLayer; // inherited from NSObject

	latitude: number;

	longitude: number;

	rotation: number;
}

declare class GMSMutableCameraPosition extends GMSCameraPosition {
	static alloc(): GMSMutableCameraPosition; // inherited from NSObject

	static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static new(): GMSMutableCameraPosition; // inherited from NSObject

	bearing: number;

	target: CLLocationCoordinate2D;

	viewingAngle: number;

	zoom: number;
}

declare class GMSMutableFeatureStyle extends GMSFeatureStyle {
	static alloc(): GMSMutableFeatureStyle; // inherited from NSObject

	static new(): GMSMutableFeatureStyle; // inherited from NSObject

	static style(): GMSMutableFeatureStyle;

	static styleWithFillColorStrokeColorStrokeWidth(fillColor: UIColor | null, strokeColor: UIColor | null, strokeWidth: number): GMSMutableFeatureStyle; // inherited from GMSFeatureStyle

	fillColor: UIColor | null;

	pointRadius: number;

	strokeColor: UIColor | null;

	strokeWidth: number;
}

declare class GMSMutablePath extends GMSPath {
	static alloc(): GMSMutablePath; // inherited from NSObject

	static new(): GMSMutablePath; // inherited from NSObject

	static path(): GMSMutablePath; // inherited from GMSPath

	static pathFromEncodedPath(encodedPath: string): GMSMutablePath; // inherited from GMSPath

	addCoordinate(coord: CLLocationCoordinate2D): void;

	addLatitudeLongitude(latitude: number, longitude: number): void;

	insertCoordinateAtIndex(coord: CLLocationCoordinate2D, index: number): void;

	removeAllCoordinates(): void;

	removeCoordinateAtIndex(index: number): void;

	removeLastCoordinate(): void;

	replaceCoordinateAtIndexWithCoordinate(index: number, coord: CLLocationCoordinate2D): void;
}

interface GMSOrientation {
	heading: number;
	pitch: number;
}
declare var GMSOrientation: interop.StructType<GMSOrientation>;

declare class GMSOverlay extends NSObject implements NSCopying {
	static alloc(): GMSOverlay; // inherited from NSObject

	static new(): GMSOverlay; // inherited from NSObject

	map: GMSMapView | null;

	tappable: boolean;

	title: string | null;

	userData: any | null;

	zIndex: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;
}

declare class GMSOverlayLayer extends CALayer {
	static alloc(): GMSOverlayLayer; // inherited from NSObject

	static layer(): GMSOverlayLayer; // inherited from CALayer

	static new(): GMSOverlayLayer; // inherited from NSObject
}

declare class GMSPanorama extends NSObject {
	static alloc(): GMSPanorama; // inherited from NSObject

	static new(): GMSPanorama; // inherited from NSObject

	readonly coordinate: CLLocationCoordinate2D;

	readonly links: NSArray<GMSPanoramaLink>;

	readonly panoramaID: string;
}

declare class GMSPanoramaCamera extends NSObject {
	static alloc(): GMSPanoramaCamera; // inherited from NSObject

	static cameraWithHeadingPitchZoom(heading: number, pitch: number, zoom: number): GMSPanoramaCamera;

	static cameraWithHeadingPitchZoomFOV(heading: number, pitch: number, zoom: number, FOV: number): GMSPanoramaCamera;

	static cameraWithOrientationZoom(orientation: GMSOrientation, zoom: number): GMSPanoramaCamera;

	static cameraWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): GMSPanoramaCamera;

	static new(): GMSPanoramaCamera; // inherited from NSObject

	readonly FOV: number;

	readonly orientation: GMSOrientation;

	readonly zoom: number;

	constructor(o: { orientation: GMSOrientation; zoom: number; FOV: number });

	initWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): this;
}

declare class GMSPanoramaCameraUpdate extends NSObject {
	static alloc(): GMSPanoramaCameraUpdate; // inherited from NSObject

	static new(): GMSPanoramaCameraUpdate; // inherited from NSObject

	static rotateBy(deltaHeading: number): GMSPanoramaCameraUpdate;

	static setHeading(heading: number): GMSPanoramaCameraUpdate;

	static setPitch(pitch: number): GMSPanoramaCameraUpdate;

	static setZoom(zoom: number): GMSPanoramaCameraUpdate;
}

declare class GMSPanoramaLayer extends GMSCALayer {
	static alloc(): GMSPanoramaLayer; // inherited from NSObject

	static layer(): GMSPanoramaLayer; // inherited from CALayer

	static new(): GMSPanoramaLayer; // inherited from NSObject

	cameraFOV: number;

	cameraHeading: number;

	cameraPitch: number;

	cameraZoom: number;
}

declare class GMSPanoramaLink extends NSObject {
	static alloc(): GMSPanoramaLink; // inherited from NSObject

	static new(): GMSPanoramaLink; // inherited from NSObject

	heading: number;

	panoramaID: string;
}

declare class GMSPanoramaService extends NSObject {
	static alloc(): GMSPanoramaService; // inherited from NSObject

	static new(): GMSPanoramaService; // inherited from NSObject

	requestPanoramaNearCoordinateCallback(coordinate: CLLocationCoordinate2D, callback: (p1: GMSPanorama | null, p2: NSError | null) => void): void;

	requestPanoramaNearCoordinateRadiusCallback(coordinate: CLLocationCoordinate2D, radius: number, callback: (p1: GMSPanorama | null, p2: NSError | null) => void): void;

	requestPanoramaNearCoordinateRadiusSourceCallback(coordinate: CLLocationCoordinate2D, radius: number, source: GMSPanoramaSource, callback: (p1: GMSPanorama | null, p2: NSError | null) => void): void;

	requestPanoramaNearCoordinateSourceCallback(coordinate: CLLocationCoordinate2D, source: GMSPanoramaSource, callback: (p1: GMSPanorama | null, p2: NSError | null) => void): void;

	requestPanoramaWithIDCallback(panoramaID: string, callback: (p1: GMSPanorama | null, p2: NSError | null) => void): void;
}

declare const enum GMSPanoramaSource {
	kGMSPanoramaSourceDefault = 0,

	kGMSPanoramaSourceOutside = 1,
}

declare class GMSPanoramaView extends UIView {
	static alloc(): GMSPanoramaView; // inherited from NSObject

	static appearance(): GMSPanoramaView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): GMSPanoramaView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject | null): GMSPanoramaView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GMSPanoramaView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject | null): GMSPanoramaView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GMSPanoramaView; // inherited from UIAppearance

	static new(): GMSPanoramaView; // inherited from NSObject

	static panoramaWithFrameNearCoordinate(frame: CGRect, coordinate: CLLocationCoordinate2D): GMSPanoramaView;

	static panoramaWithFrameNearCoordinateRadius(frame: CGRect, coordinate: CLLocationCoordinate2D, radius: number): GMSPanoramaView;

	static panoramaWithFrameNearCoordinateRadiusSource(frame: CGRect, coordinate: CLLocationCoordinate2D, radius: number, source: GMSPanoramaSource): GMSPanoramaView;

	static panoramaWithFrameNearCoordinateSource(frame: CGRect, coordinate: CLLocationCoordinate2D, source: GMSPanoramaSource): GMSPanoramaView;

	camera: GMSPanoramaCamera;

	delegate: GMSPanoramaViewDelegate | null;

	readonly layer: GMSPanoramaLayer;

	navigationGestures: boolean;

	navigationLinksHidden: boolean;

	orientationGestures: boolean;

	panorama: GMSPanorama | null;

	streetNamesHidden: boolean;

	zoomGestures: boolean;

	animateToCameraAnimationDuration(camera: GMSPanoramaCamera, duration: number): void;

	moveNearCoordinate(coordinate: CLLocationCoordinate2D): void;

	moveNearCoordinateRadius(coordinate: CLLocationCoordinate2D, radius: number): void;

	moveNearCoordinateRadiusSource(coordinate: CLLocationCoordinate2D, radius: number, source: GMSPanoramaSource): void;

	moveNearCoordinateSource(coordinate: CLLocationCoordinate2D, source: GMSPanoramaSource): void;

	moveToPanoramaID(panoramaID: string): void;

	orientationForPoint(point: CGPoint): GMSOrientation;

	pointForOrientation(orientation: GMSOrientation): CGPoint;

	setAllGesturesEnabled(enabled: boolean): void;

	updateCameraAnimationDuration(cameraUpdate: GMSPanoramaCameraUpdate, duration: number): void;
}

interface GMSPanoramaViewDelegate extends NSObjectProtocol {
	panoramaViewDidFinishRendering?(panoramaView: GMSPanoramaView): void;

	panoramaViewDidMoveCamera?(panoramaView: GMSPanoramaView, camera: GMSPanoramaCamera): void;

	panoramaViewDidMoveToPanorama?(view: GMSPanoramaView, panorama: GMSPanorama | null): void;

	panoramaViewDidMoveToPanoramaNearCoordinate?(view: GMSPanoramaView, panorama: GMSPanorama, coordinate: CLLocationCoordinate2D): void;

	panoramaViewDidStartRendering?(panoramaView: GMSPanoramaView): void;

	panoramaViewDidTap?(panoramaView: GMSPanoramaView, point: CGPoint): void;

	panoramaViewDidTapMarker?(panoramaView: GMSPanoramaView, marker: GMSMarker): boolean;

	panoramaViewErrorOnMoveNearCoordinate?(view: GMSPanoramaView, error: NSError, coordinate: CLLocationCoordinate2D): void;

	panoramaViewErrorOnMoveToPanoramaID?(view: GMSPanoramaView, error: NSError, panoramaID: string): void;

	panoramaViewWillMoveToPanoramaID?(view: GMSPanoramaView, panoramaID: string): void;
}
declare var GMSPanoramaViewDelegate: {
	prototype: GMSPanoramaViewDelegate;
};

declare class GMSPath extends NSObject implements NSCopying, NSMutableCopying {
	static alloc(): GMSPath; // inherited from NSObject

	static new(): GMSPath; // inherited from NSObject

	static path(): GMSPath;

	static pathFromEncodedPath(encodedPath: string): GMSPath;

	constructor(o: { path: GMSPath });

	coordinateAtIndex(index: number): CLLocationCoordinate2D;

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	count(): number;

	encodedPath(): string;

	initWithPath(path: GMSPath): this;

	lengthOfKind(kind: GMSLengthKind): number;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	pathOffsetByLatitudeLongitude(deltaLatitude: number, deltaLongitude: number): this;

	segmentsForLengthKind(length: number, kind: GMSLengthKind): number;
}

declare class GMSPinImage extends UIImage {
	static alloc(): GMSPinImage; // inherited from NSObject

	static new(): GMSPinImage; // inherited from NSObject

	static objectWithItemProviderDataTypeIdentifierError(data: NSData, typeIdentifier: string, error?: interop.Reference<NSError>): GMSPinImage; // inherited from NSItemProviderReading

	static pinImageWithOptions(options: GMSPinImageOptions): GMSPinImage;
}

declare class GMSPinImageGlyph extends NSObject {
	static alloc(): GMSPinImageGlyph; // inherited from NSObject

	static new(): GMSPinImageGlyph; // inherited from NSObject

	readonly glyphColor: UIColor | null;

	readonly image: UIImage | null;

	readonly text: string | null;

	readonly textColor: UIColor | null;

	constructor(o: { glyphColor: UIColor });

	constructor(o: { image: UIImage });

	constructor(o: { text: string; textColor: UIColor });

	initWithGlyphColor(glyphColor: UIColor): this;

	initWithImage(image: UIImage): this;

	initWithTextTextColor(text: string, textColor: UIColor): this;
}

declare class GMSPinImageOptions extends NSObject {
	static alloc(): GMSPinImageOptions; // inherited from NSObject

	static new(): GMSPinImageOptions; // inherited from NSObject

	backgroundColor: UIColor | null;

	borderColor: UIColor | null;

	glyph: GMSPinImageGlyph | null;
}

declare class GMSPlaceFeature extends NSObject implements GMSFeature {
	static alloc(): GMSPlaceFeature; // inherited from NSObject

	static new(): GMSPlaceFeature; // inherited from NSObject

	readonly featureType: string;

	readonly placeID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { featureType: string; placeID: string });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFeatureTypePlaceID(featureType: string, placeID: string): this;

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

declare class GMSPolygon extends GMSOverlay {
	static alloc(): GMSPolygon; // inherited from NSObject

	static new(): GMSPolygon; // inherited from NSObject

	static polygonWithPath(path: GMSPath | null): GMSPolygon;

	fillColor: UIColor | null;

	geodesic: boolean;

	holes: NSArray<GMSPath> | null;

	readonly layer: GMSPolygonLayer;

	path: GMSPath | null;

	strokeColor: UIColor | null;

	strokeWidth: number;
}

declare class GMSPolygonLayer extends GMSOverlayLayer {
	static alloc(): GMSPolygonLayer; // inherited from NSObject

	static layer(): GMSPolygonLayer; // inherited from CALayer

	static new(): GMSPolygonLayer; // inherited from NSObject

	fillColor: any | null;

	strokeColor: any | null;

	strokeWidth: number;
}

declare class GMSPolyline extends GMSOverlay {
	static alloc(): GMSPolyline; // inherited from NSObject

	static new(): GMSPolyline; // inherited from NSObject

	static polylineWithPath(path: GMSPath | null): GMSPolyline;

	geodesic: boolean;

	path: GMSPath | null;

	spans: NSArray<GMSStyleSpan> | null;

	strokeColor: UIColor;

	strokeWidth: number;
}

declare function GMSProject(coordinate: CLLocationCoordinate2D): GMSMapPoint;

declare class GMSProjection extends NSObject {
	static alloc(): GMSProjection; // inherited from NSObject

	static new(): GMSProjection; // inherited from NSObject

	containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

	coordinateForPoint(point: CGPoint): CLLocationCoordinate2D;

	pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;

	pointsForMetersAtCoordinate(meters: number, coordinate: CLLocationCoordinate2D): number;

	visibleRegion(): GMSVisibleRegion;
}

declare class GMSReverseGeocodeResponse extends NSObject implements NSCopying {
	static alloc(): GMSReverseGeocodeResponse; // inherited from NSObject

	static new(): GMSReverseGeocodeResponse; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any> | ArrayBufferLike | ArrayBufferView | null): any;

	firstResult(): GMSAddress | null;

	results(): NSArray<GMSAddress> | null;
}

declare class GMSServices extends NSObject {
	static SDKLongVersion(): string;

	static SDKVersion(): string;

	static addInternalUsageAttributionID(internalUsageAttributionID: string): void;

	static alloc(): GMSServices; // inherited from NSObject

	static new(): GMSServices; // inherited from NSObject

	static openSourceLicenseInfo(): string;

	static provideAPIKey(APIKey: string): boolean;

	static provideAPIOptions(APIOptions: NSArray<string> | string[]): boolean;

	static setAbnormalTerminationReportingEnabled(enabled: boolean): void;

	static sharedServices(): NSObjectProtocol;
}

declare class GMSSpriteStyle extends GMSStampStyle {
	static alloc(): GMSSpriteStyle; // inherited from NSObject

	static new(): GMSSpriteStyle; // inherited from NSObject

	static spriteStyleWithImage(image: UIImage): GMSSpriteStyle;

	constructor(o: { image: UIImage });

	initWithImage(image: UIImage): this;
}

declare class GMSStampStyle extends NSObject {
	static alloc(): GMSStampStyle; // inherited from NSObject

	static new(): GMSStampStyle; // inherited from NSObject

	readonly stampImage: UIImage;
}

declare class GMSStrokeStyle extends NSObject {
	static alloc(): GMSStrokeStyle; // inherited from NSObject

	static gradientFromColorToColor(fromColor: UIColor, toColor: UIColor): GMSStrokeStyle;

	static new(): GMSStrokeStyle; // inherited from NSObject

	static solidColor(color: UIColor): GMSStrokeStyle;

	static transparentStrokeWithStampStyle(stampStyle: GMSStampStyle): GMSStrokeStyle;

	stampStyle: GMSStampStyle | null;
}

declare function GMSStyleHashForString(string: string): number;

declare class GMSStyleSpan extends NSObject {
	static alloc(): GMSStyleSpan; // inherited from NSObject

	static new(): GMSStyleSpan; // inherited from NSObject

	static spanWithColor(color: UIColor): GMSStyleSpan;

	static spanWithColorSegments(color: UIColor, segments: number): GMSStyleSpan;

	static spanWithStyle(style: GMSStrokeStyle): GMSStyleSpan;

	static spanWithStyleSegments(style: GMSStrokeStyle, segments: number): GMSStyleSpan;

	readonly segments: number;

	readonly style: GMSStrokeStyle;
}

declare function GMSStyleSpans(path: GMSPath, styles: NSArray<GMSStrokeStyle> | GMSStrokeStyle[], lengths: NSArray<number> | number[], lengthKind: GMSLengthKind): NSArray<GMSStyleSpan>;

declare function GMSStyleSpansOffset(path: GMSPath, styles: NSArray<GMSStrokeStyle> | GMSStrokeStyle[], lengths: NSArray<number> | number[], lengthKind: GMSLengthKind, lengthOffset: number): NSArray<GMSStyleSpan>;

declare class GMSSyncTileLayer extends GMSTileLayer {
	static alloc(): GMSSyncTileLayer; // inherited from NSObject

	static new(): GMSSyncTileLayer; // inherited from NSObject

	tileForXYZoom(x: number, y: number, zoom: number): UIImage | null;
}

declare class GMSTextureStyle extends GMSStampStyle {
	static alloc(): GMSTextureStyle; // inherited from NSObject

	static new(): GMSTextureStyle; // inherited from NSObject

	static textureStyleWithImage(image: UIImage): GMSTextureStyle;

	constructor(o: { image: UIImage });

	initWithImage(image: UIImage): this;
}

declare class GMSTileLayer extends NSObject {
	static alloc(): GMSTileLayer; // inherited from NSObject

	static new(): GMSTileLayer; // inherited from NSObject

	fadeIn: boolean;

	map: GMSMapView | null;

	opacity: number;

	tileSize: number;

	zIndex: number;

	clearTileCache(): void;

	requestTileForXYZoomReceiver(x: number, y: number, zoom: number, receiver: GMSTileReceiver): void;
}

interface GMSTileReceiver extends NSObjectProtocol {
	receiveTileWithXYZoomImage(x: number, y: number, zoom: number, image: UIImage | null): void;
}
declare var GMSTileReceiver: {
	prototype: GMSTileReceiver;
};

declare class GMSUISettings extends NSObject {
	static alloc(): GMSUISettings; // inherited from NSObject

	static new(): GMSUISettings; // inherited from NSObject

	allowScrollGesturesDuringRotateOrZoom: boolean;

	compassButton: boolean;

	consumesGesturesInView: boolean;

	indoorPicker: boolean;

	myLocationButton: boolean;

	rotateGestures: boolean;

	scrollGestures: boolean;

	tiltGestures: boolean;

	zoomGestures: boolean;

	setAllGesturesEnabled(enabled: boolean): void;
}

declare class GMSURLTileLayer extends GMSTileLayer {
	static alloc(): GMSURLTileLayer; // inherited from NSObject

	static new(): GMSURLTileLayer; // inherited from NSObject

	static tileLayerWithURLConstructor(constructor: (p1: number, p2: number, p3: number) => NSURL | null): GMSURLTileLayer;

	userAgent: string | null;
}

declare function GMSUnproject(point: GMSMapPoint): CLLocationCoordinate2D;

interface GMSVisibleRegion {
	nearLeft: CLLocationCoordinate2D;
	nearRight: CLLocationCoordinate2D;
	farLeft: CLLocationCoordinate2D;
	farRight: CLLocationCoordinate2D;
}
declare var GMSVisibleRegion: interop.StructType<GMSVisibleRegion>;

declare var kGMSAccessibilityCompass: string;

declare var kGMSAccessibilityMyLocation: string;

declare var kGMSAccessibilityOutOfQuota: string;

declare var kGMSEarthRadius: number;

declare var kGMSEquatorProjectedMeter: number;

declare var kGMSGroundOverlayDefaultAnchor: CGPoint;

declare var kGMSLayerCameraBearingKey: string;

declare var kGMSLayerCameraLatitudeKey: string;

declare var kGMSLayerCameraLongitudeKey: string;

declare var kGMSLayerCameraViewingAngleKey: string;

declare var kGMSLayerCameraZoomLevelKey: string;

declare var kGMSLayerPanoramaFOVKey: string;

declare var kGMSLayerPanoramaHeadingKey: string;

declare var kGMSLayerPanoramaPitchKey: string;

declare var kGMSLayerPanoramaZoomKey: string;

declare var kGMSMarkerDefaultGroundAnchor: CGPoint;

declare var kGMSMarkerDefaultInfoWindowAnchor: CGPoint;

declare var kGMSMarkerLayerLatitude: string;

declare var kGMSMarkerLayerLongitude: string;

declare var kGMSMarkerLayerOpacity: string;

declare var kGMSMarkerLayerRotation: string;

declare var kGMSMaxZoomLevel: number;

declare var kGMSMinZoomLevel: number;

declare var kGMSPolygonLayerFillColor: string;

declare var kGMSPolygonLayerStrokeColor: string;

declare var kGMSPolygonLayerStrokeWidth: string;

declare var kGMSTileLayerNoTile: UIImage;
