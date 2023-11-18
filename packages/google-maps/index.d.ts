import { Color, ImageSource, EventData, View } from '@nativescript/core';
import { JointType, MapType, MapViewBase } from './common';

export type FeatureTypeAdministrative = 'administrative' | 'administrative.country' | 'administrative.land_parcel' | 'administrative.locality' | 'administrative.neighborhood' | 'administrative.province';

export type FeatureTypeLandscape = 'landscape' | 'landscape.man_made' | 'landscape.natural' | 'landscape.natural.landcover' | 'landscape.natural.terrain';

export type FeatureTypePoi = 'poi' | 'poi.attraction' | 'poi.business' | 'poi.government' | 'poi.medical' | 'poi.park' | 'poi.place_of_worship' | 'poi.school' | 'poi.sports_complex';

export type FeatureTypeRoad = 'road' | 'road.arterial' | 'road.highway' | 'road.highway.controlled_access' | 'road.local';

export type FeatureTypeTransit = 'transit' | 'transit.line' | 'transit.station' | 'transit.station.airport' | 'transit.station.bus' | 'transit.station.rail';

export type FeatureTypeWater = 'water';

export type ElementTypeGeometry = 'geometry' | 'geometry.fill' | 'geometry.stroke';

export type ElementTypeLabels = 'labels' | 'labels.icon' | 'labels.text' | 'labels.text.fill' | 'labels.text.stroke';

export type StylersVisibility = 'on' | 'off' | 'simplified';

export interface Stylers {
	hue?: string;
	lightness?: number;
	saturation?: number;
	gamma?: number;
	invert_lightness?: boolean;
	visibility?: StylersVisibility;
	color?: string;
	weight?: number;
}

export interface Style {
	featureType?: 'all' | FeatureTypeAdministrative | FeatureTypeLandscape | FeatureTypePoi | FeatureTypeRoad | FeatureTypeTransit | FeatureTypeWater;
	elementType?: 'all' | ElementTypeGeometry | ElementTypeLabels;
	stylers: Stylers[];
}

export interface LocationTapEvent extends EventData {
	location: Location;
}

export interface MapTapEvent extends EventData {
	coordinate: Coordinate;
}

export interface MarkerTapEvent extends EventData {
	marker: Marker;
}

export interface MarkerDragEvent extends EventData {
	marker: Marker;
}

export interface CameraPositionEvent extends EventData {
	cameraPosition: CameraPosition;
	state: 'idle' | 'start' | 'moving';
}

export interface CameraPositionStartEvent extends CameraPositionEvent {
	isGesture: boolean;
}

export interface CircleTapEvent extends EventData {
	circle: Circle;
}

export interface PolygonTapEvent extends EventData {
	polygon: Polygon;
}

export interface PolylineTapEvent extends EventData {
	polyline: Polyline;
}

export interface PoiTapEvent extends EventData {
	poi: Poi;
}

export interface GroundOverlayTapEvent extends EventData {
	groundOverlay: GroundOverlay;
}

export interface InfoWindowEvent extends EventData {
	marker: Marker;
}

export interface MarkerInfoEvent extends EventData {
	marker: Marker;
	view?: any;
}

export interface NativeObject {
	readonly native: any;
	readonly ios: any;
	readonly android: any;
}

export interface IUISettings {
	mapToolbarEnabled: boolean;
	zoomControlsEnabled: boolean;
	zoomGesturesEnabled: boolean;
	tiltGesturesEnabled: boolean;

	setAllGesturesEnabled(param0: boolean): void;

	compassEnabled: boolean;
	scrollGesturesEnabledDuringRotateOrZoom: boolean;
	rotateGesturesEnabled: boolean;
	myLocationButtonEnabled: boolean;
	indoorLevelPickerEnabled: boolean;
	scrollGesturesEnabled: boolean;
}

export class UISettings implements IUISettings, NativeObject {
	readonly android;
	compassEnabled: boolean;
	indoorLevelPickerEnabled: boolean;
	readonly ios;
	mapToolbarEnabled: boolean;
	myLocationButtonEnabled: boolean;
	readonly native;
	rotateGesturesEnabled: boolean;
	scrollGesturesEnabled: boolean;
	scrollGesturesEnabledDuringRotateOrZoom: boolean;
	tiltGesturesEnabled: boolean;
	zoomControlsEnabled: boolean;
	zoomGesturesEnabled: boolean;

	setAllGesturesEnabled(param0: boolean): void;
}

export interface MapReadyEvent extends EventData {
	map: GoogleMap;
}

export interface ActiveBuildingEvent extends EventData {
	building: IndoorBuilding;
}

export interface ActiveLevelEvent extends EventData {
	level: IndoorLevel;
}

export interface IIndoorLevel {
	readonly name: string;
	readonly shortName: string;
}

export class IndoorLevel implements IIndoorLevel {
	readonly name: string;
	readonly shortName: string;
}

export interface IIndoorBuilding {
	readonly defaultLevelIndex: number;

	readonly levels: IndoorLevel[];

	readonly underground: boolean;
}

export class IndoorBuilding implements IIndoorBuilding {
	readonly defaultLevelIndex: number;
	readonly levels: IndoorLevel[];
	readonly underground: boolean;
}

export interface ILocation {
	readonly accuracy: number;
	readonly altitudeAccuracy: number;
	readonly coordinate: Coordinate;
	readonly timestamp: Date;
	readonly altitude: number;
	readonly speed: number;
	readonly heading: number;
}

export class Location extends NativeObject implements ILocation, NativeObject {
	accuracy: number;
	altitudeAccuracy: number;
	coordinate: Coordinate;
	timestamp: Date;
	altitude: number;
	speed: number;
	heading: number;
}

export interface ICameraUpdate {}

export class CameraUpdate implements ICameraUpdate {
	static fromCoordinate(coordinate: Coordinate, zoom: number): CameraUpdate;

	static fromCoordinates(coordinates: Coordinate[], padding: number): CameraUpdate;

	static fromCoordinates(coordinates: Coordinate[], width: number, height: number, padding: number): CameraUpdate;

	static fromCameraPosition(position: CameraPosition): CameraUpdate;

	static zoomIn(): CameraUpdate;

	static zoomOut(): CameraUpdate;

	static zoomTo(value: number): CameraUpdate;

	static zoomBy(amount: number, point?: { x: number; y: number }): CameraUpdate;

	static scrollBy(x: number, y: number): CameraUpdate;
}

export interface ICameraPosition {
	target: Coordinate;
	zoom: number;
	tilt: number;
	bearing: number;
}

export class CameraPosition implements ICameraPosition, Partial<NativeObject> {
	constructor(target: Coordinate, zoom: number, bearing?: number, tilt?: number);

	bearing: number;
	target: Coordinate;
	tilt: number;
	zoom: number;
	native?: any;
}

export class MapView extends MapViewBase {
	on(event: 'ready', callback: (args: MapReadyEvent) => void, thisArg?: any);

	on(event: 'mapTap', callback: (args: MapTapEvent) => void, thisArg?: any);

	on(event: 'mapLongPress', callback: (args: MapTapEvent) => void, thisArg?: any);

	on(event: 'markerTap', callback: (args: MarkerTapEvent) => void, thisArg?: any);

	on(event: 'myLocationTap', callback: (args: MapTapEvent) => void, thisArg?: any);

	on(event: 'myLocationButtonTap', callback: (args: MarkerTapEvent) => void, thisArg?: any);

	on(event: 'markerDragStart', callback: (args: MarkerTapEvent) => void, thisArg?: any);

	on(event: 'markerDragging', callback: (args: MarkerTapEvent) => void, thisArg?: any);

	on(event: 'markerDragEnd', callback: (args: MarkerTapEvent) => void, thisArg?: any);

	on(event: 'tileRenderingStart', callback: (args: EventData) => void, thisArg?: any);

	on(event: 'tileRenderingEnd', callback: (args: EventData) => void, thisArg?: any);

	on(event: 'cameraPosition', callback: (args: CameraPositionEvent) => void, thisArg?: any);

	on(event: 'circle', callback: (args: CircleTapEvent) => void, thisArg?: any);

	on(event: 'polygon', callback: (args: PolygonTapEvent) => void, thisArg?: any);

	on(event: 'polyline', callback: (args: PolylineTapEvent) => void, thisArg?: any);

	on(event: 'poi', callback: (args: PoiTapEvent) => void, thisArg?: any);

	on(event: 'groundOverlay', callback: (args: GroundOverlayTapEvent) => void, thisArg?: any);

	on(event: 'infoWindowTap', callback: (args: InfoWindowEvent) => void, thisArg?: any);

	on(event: 'infoWindowLongPress', callback: (args: InfoWindowEvent) => void, thisArg?: any);

	on(event: 'infoWindowClose', callback: (args: InfoWindowEvent) => void, thisArg?: any);

	on(event: 'markerInfoContents', callback: (args: MarkerInfoEvent) => void, thisArg?: any);

	on(event: 'markerInfoWindow', callback: (args: MarkerInfoEvent) => void, thisArg?: any);

	on(event: 'activeBuilding', callback: (args: ActiveBuildingEvent) => void, thisArg?: any);

	on(event: 'activeLevel', callback: (args: ActiveLevelEvent) => void, thisArg?: any);
}

export interface Coordinate {
	lat: number;
	lng: number;
}

export interface CoordinateBounds {
	southwest: Coordinate;
	northeast: Coordinate;
}

export interface IMarker {
	draggable: boolean;
	position: Coordinate;
	title: string;
	snippet: string;
	icon: any /* ImageSource, UIImage & Bitmap */;
	color: Color | string;
	opacity: number;
	rotation: number;
	visible: boolean;
	flat: boolean;
	zIndex: number;
	userData: { [key: string]: any };
}

export interface MarkerOptions extends Partial<IMarker> {
	anchorU?: number;
	anchorV?: number;
}

export class Marker implements IMarker, Partial<NativeObject> {
	native?: any;
	draggable: boolean;
	position: Coordinate;
	title: string;
	snippet: string;
	icon: any; /* Image, ImageSource, UIImage & Bitmap */
	color: Color | string;
	opacity: number;
	rotation: number;
	visible: boolean;
	flat: boolean;
	zIndex: number;
	userData: { [key: string]: any };
	hideInfoWindow(): void;

	showInfoWindow(): void;
}

export interface ILocationSource {}

export class LocationSource implements ILocationSource {}

export interface IVisibleRegion {
	nearLeft: Coordinate;
	nearRight: Coordinate;
	farLeft: Coordinate;
	farRight: Coordinate;
}

export class VisibleRegion implements IVisibleRegion {
	farLeft: Coordinate;
	farRight: Coordinate;
	nearLeft: Coordinate;
	nearRight: Coordinate;
}

export interface IProjection {
	coordinateForPoint(point: { x: number; y: number }): Coordinate;

	pointForCoordinate(coordinate: Coordinate): { x: number; y: number };

	visibleRegion(): VisibleRegion;

	containsCoordinate(coordinate: Coordinate): boolean;
}

export class Projection implements IProjection, Partial<NativeObject> {
	coordinateForPoint(point: { x: number; y: number }): Coordinate;

	pointForCoordinate(coordinate: Coordinate): { x: number; y: number };

	visibleRegion(): VisibleRegion;

	containsCoordinate(coordinate: Coordinate): boolean;

	native?: any;
}

export interface TileOverlayOptions extends ITileOverlay {}

export class TileOverlay implements Partial<ITileOverlay>, Partial<NativeObject> {}

export interface IGoogleMap {
	readonly uiSettings: IUISettings;

	readonly projection: Projection;

	trafficEnabled: boolean;

	minZoomLevel: number;

	maxZoomLevel: number;

	buildingsEnabled: boolean;

	myLocationEnabled: boolean;

	cameraPosition: CameraPosition;

	mapStyle: Style[];

	mapType: MapType;

	snapshot(): Promise<ImageSource>;

	animateCamera(update: CameraUpdate);

	clear();

	addTileOverlay(options: TileOverlayOptions): TileOverlay;

	removeTileOverlay(overlay: TileOverlay);

	addMarker(marker: MarkerOptions): Marker;

	removeMarker(marker: Marker);

	addCircle(options: CircleOptions): Circle;

	removeCircle(circle: Circle);

	addPolygon(options: PolygonOptions): Polygon;

	removePolygon(polygon: Polygon);

	addPolyline(options: PolylineOptions): Polyline;

	removePolyline(polyline: Polyline);

	addGroundOverlay(options: GroundOverlayOptions): GroundOverlay;

	removeGroundOverlay(groundOverlay: GroundOverlay);
}

export class GoogleMap implements IGoogleMap {
	mapStyle: Style[];
	mapType: MapType;
	addTileOverlay(options: TileOverlayOptions): TileOverlay;
	removeTileOverlay(overlay: TileOverlay);
	buildingsEnabled: boolean;
	maxZoomLevel: number;
	minZoomLevel: number;
	myLocationEnabled: boolean;
	trafficEnabled: boolean;
	readonly uiSettings: IUISettings;
	cameraPosition: CameraPosition;
	readonly projection: Projection;
	readonly native: any;

	addCircle(circle: CircleOptions): Circle;

	addMarker(marker: MarkerOptions): Marker;

	clear();

	removeCircle(circle: Circle);

	removeMarker(marker: Marker);

	addGroundOverlay(options: GroundOverlayOptions): GroundOverlay;

	addPolygon(options: PolygonOptions): Polygon;

	addPolyline(options: PolylineOptions): Polyline;

	removeGroundOverlay(groundOverlay: GroundOverlay);

	removePolygon(polygon: Polygon);

	removePolyline(polyline: Polyline);

	moveCamera(update: CameraUpdate);

	animateCamera(update: CameraUpdate);

	snapshot(): Promise<ImageSource>;
}

export interface ICircle {
	radius: number;
	strokeColor: Color | string;
	fillColor: Color | string;
	visible: boolean;
	tappable: boolean;
	strokeWidth: number;
	center: Coordinate;
	strokePattern: Array<PatternItem & Partial<NativeObject>>;
	zIndex: number;
	userData: { [key: string]: any };
}

export interface CircleOptions extends Partial<ICircle> {}

export class Circle implements ICircle {
	center: Coordinate;
	fillColor: Color | string;
	radius: number;
	strokeColor: Color | string;
	strokePattern: Array<PatternItem & Partial<NativeObject>>;
	strokeWidth: number;
	tappable: boolean;
	visible: boolean;
	zIndex: number;
	userData: { [key: string]: any };
}

export interface IPolygon {
	points: Coordinate[];
	holes: Coordinate[][];
	tappable: boolean;
	strokeWidth: number;
	strokeColor: Color | string;
	fillColor: Color | string;
	strokePattern: Array<PatternItem & Partial<NativeObject>>;
	zIndex: number;
	geodesic: boolean;
	strokeJointType: JointType;
	visible: boolean;
	userData: { [key: string]: any };
}

export interface PolygonOptions extends Partial<IPolygon> {}

export class Polygon implements IPolygon {
	fillColor: Color | string;
	geodesic: boolean;
	holes: Coordinate[][];
	points: Coordinate[];
	addPoint(point: Coordinate);
	addPoints(points: Coordinate[]);
	strokeColor: Color | string;
	strokeJointType: JointType;
	strokePattern: Array<PatternItem & Partial<NativeObject>>;
	strokeWidth: number;
	tappable: boolean;
	visible: boolean;
	zIndex: number;
	userData: { [key: string]: any };
}

export interface IPolyline {
	width: number;
	points: Coordinate[];
	tappable: boolean;
	geodesic: boolean;
	visible: boolean;
	zIndex: number;
	jointType: JointType;
	pattern: Array<PatternItem & Partial<NativeObject>>;
	color: Color | string;
	startCap: Cap & Partial<NativeObject>;
	endCap: Cap & Partial<NativeObject>;
	userData: { [key: string]: any };
}

export interface PolylineOptions extends Partial<IPolyline> {}

/** A polyline is a list of points, where line segments are drawn between consecutive points. */
export class Polyline extends NativeObject implements IPolyline {
	/**
	 * Line segment width in screen pixels. The width is constant and independent of the camera's
	 * zoom level.
	 */
	width: number;
	/**
	 * The vertices of the line. Line segments are drawn between consecutive points. A polyline is
	 * not closed by default; to form a closed polyline, the start and end points must be the same.
	 */
	points: Coordinate[];

	addPoint(point: Coordinate);

	addPoints(points: Coordinate[]);

	/**
	 * If you want to handle events fired when the user clicks the polyline, set this property to
	 * `true`. You can change this value at any time. The default is `false`.
	 */
	tappable: boolean;
	/**
	 * Indicates whether the segments of the polyline should be drawn as geodesics, as opposed to
	 * straight lines on the Mercator projection. A geodesic is the shortest path between two points
	 * on the Earth's surface. The geodesic curve is constructed assuming the Earth is a sphere.
	 */
	geodesic: boolean;
	/**
	 * Indicates if the polyline is visible or invisible, i.e., whether it is drawn on the map.
	 * An invisible polyline is not drawn, but retains all of its other properties.
	 * The default is `true`, i.e., visible.
	 */
	visible: boolean;
	/**
	 * The order in which this tile overlay is drawn with respect to other overlays (including
	 * {@link GroundOverlay}s, {@link TileOverlay}s, {@link Circle}s, and {@link Polygon}s but
	 * not {@link Marker}s). An overlay with a larger z-index is drawn over overlays with smaller
	 * z-indices. The order of overlays with the same z-index is arbitrary. The default zIndex is `0`.
	 */
	zIndex: number;
	/**
	 * The joint type defines the shape to be used when joining adjacent line segments at all vertices
	 * of the polyline except the start and end vertices. See {@link JointType} for supported joint
	 * types. The default value is {@link JointType.Default}.
	 */
	jointType: JointType;
	/**
	 * Solid (default) or a sequence of {@link PatternItem} objects to be repeated along the line.
	 * Available {@link PatternItem} types: {@link Gap} (defined by gap length in pixels),
	 * {@link Dash} (defined by line width and dash length in pixels) and {@link Dot} (circular,
	 * centered on the line, diameter defined by line width in pixels).
	 */
	pattern: Array<PatternItem & Partial<NativeObject>>;
	/**
	 * Line segment color in ARGB format, the same format used by {@link Color}. The default value is
	 * black (0xff000000).
	 */
	color: string | Color;
	/**
	 * Defines the shape to be used at the start of a polyline.
	 * Supported cap types: {@link ButtCap}, {@link SquareCap}, {@link RoundCap} (applicable for solid
	 * stroke pattern) and {@link CustomCap} (applicable for any stroke pattern).
	 * Default is {@link ButtCap}.
	 */
	startCap: Cap & Partial<NativeObject>;
	/**
	 * Defines the shape to be used at the end of a polyline.
	 * Supported cap types: {@link ButtCap}, {@link SquareCap}, {@link RoundCap} (applicable for solid
	 * stroke pattern) and {@link CustomCap} (applicable for any stroke pattern).
	 * Default is {@link ButtCap}.
	 */
	endCap: Cap & Partial<NativeObject>;
	userData: { [key: string]: any };
}

export interface IGroundOverlay {
	zIndex: number;
	visible: boolean;
	transparency: number;
	position: Coordinate;
	bounds: CoordinateBounds;
	tappable: boolean;
	bearing: number;
	image: ImageSource;
	readonly width: number;
	readonly height: number;
	userData: { [key: string]: any };
}

export interface GroundOverlayOptions extends Partial<IGroundOverlay> {
	width?: number;
	height?: number;
	anchorU?: number;
	anchorV?: number;
}

export class GroundOverlay implements IGroundOverlay {
	zIndex: number;
	visible: boolean;
	transparency: number;
	position: Coordinate;
	bounds: CoordinateBounds;
	tappable: boolean;
	bearing: number;
	image: ImageSource;
	width: number;
	height: number;
	userData: { [key: string]: any };
}

export interface IPoi {
	coordinate: Coordinate;
	placeId: string;
	name: string;
}

export class Poi implements IPoi {
	coordinate: Coordinate;
	placeId: string;
	name: string;
}

export interface ICap {}

/** Immutable cap that can be applied at the start or end vertex of a {@link Polyline}. */
export class Cap extends NativeObject implements ICap {}

/**
 * Cap that is squared off exactly at the start or end vertex of a {@link Polyline} with solid
 * stroke pattern, equivalent to having no additional cap beyond the start or end vertex. This is
 * the default cap type at start and end vertices of {@link Polyline}s with solid stroke pattern.
 */
export class ButtCap extends Cap {}

/**
 * Cap that is a semicircle with radius equal to half the stroke width, centered at the start or
 * end vertex of a {@link Polyline} with solid stroke pattern.
 */
export class RoundCap extends Cap {}

/**
 * Cap that is squared off after extending half the stroke width beyond the start or end vertex of
 * a {@link Polyline} with solid stroke pattern.
 */
export class SquareCap extends Cap {}

/**
 * Bitmap overlay centered at the start or end vertex of a {@link Polyline}, orientated according
 * to the direction of the line's first or last edge and scaled with respect to the line's stroke
 * width. CustomCap can be applied to {@link Polyline} with any stroke pattern.
 */
export class CustomCap extends Cap {
	/**
	 * Creates an instance of CustomCap.
	 * @param image Cap image. Must not be null.
	 * @param refWidth Stroke width, in pixels, for which the cap bitmap at its native dimension is
	 * designed. Must be positive.
	 */
	constructor(image: ImageSource, refWidth?: number);
}

export interface IPatternItem {}

/**
 * Immutable item used in the stroke pattern for a {@link Polyline} or the outline of a
 * {@link Polygon} or {@link Circle}.
 */
export class PatternItem extends NativeObject implements IPatternItem {}

/**
 * An immutable class representing a dash used in the stroke pattern for a {@link Polyline} or the
 * outline of a {@link Polygon} or {@link Circle}.
 */
export class Dash extends PatternItem {
	/**
	 * Creates an instance of Dash.
	 * @param length Length in pixels. Negative value will be clamped to zero.
	 */
	constructor(length: number);
}

/**
 * An immutable class representing a gap used in the stroke pattern for a {@link Polyline} or the
 * outline of a {@link Polygon} or {@link Circle}.
 */
export class Gap extends PatternItem {
	/**
	 * Creates an instance of Gap.
	 * @param length Length in pixels. Negative value will be clamped to zero.
	 */
	constructor(length: number);
}

/**
 * An immutable class representing a dot used in the stroke pattern for a {@link Polyline} or the
 * outline of a {@link Polygon} or {@link Circle}.
 */
export class Dot extends PatternItem {}

export interface ITileOverlay {
	fadeIn: boolean;
	transparency: number;
	visible: boolean;
	tileProvider: TileProvider & Partial<NativeObject>;
	zIndex: number;
	clearTileCache(): void;
}

export class Tile {
	static fromImageSource(source: ImageSource): Tile | null;
}

export interface ITileProvider {}

export class TileProvider implements ITileProvider {
	constructor(callback: (x: number, y: number, zoom: number) => Tile);
}

export class UrlTileProvider extends TileProvider {
	constructor(callback: (x: number, y: number, zoom: number) => string, size?: number);
}

export { MapType, JointType };
