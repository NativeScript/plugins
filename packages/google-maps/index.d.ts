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
	readonly native;
	readonly ios;
	readonly android;
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

export class Location implements ILocation, NativeObject {
	ios: any;
	android: any;
	native: any;
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
	icon: any /* Image, ImageSource, UIImage & Bitmap */;
	color: Color | string;
	rotation: number;
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
	rotation: number;
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
}

export class Projection implements IProjection {
	coordinateForPoint(point: { x: number; y: number }): Coordinate;

	pointForCoordinate(coordinate: Coordinate): { x: number; y: number };

	visibleRegion(): VisibleRegion;
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
	strokePattern: PatternItem & Partial<NativeObject>[];
	zIndex: number;
	userData: { [key: string]: any };
}

export interface CircleOptions extends Partial<ICircle> {}

export class Circle implements ICircle {
	center: Coordinate;
	fillColor: Color | string;
	radius: number;
	strokeColor: Color | string;
	strokePattern: PatternItem & Partial<NativeObject>[];
	strokeWidth: number;
	tappable: boolean;
	visible: boolean;
	zIndex: number;
	userData: { [key: string]: any };
}

export interface IPolygon {
	points: Coordinate[];
	holes: Coordinate[];
	tappable: boolean;
	strokeWidth: number;
	strokeColor: Color | string;
	fillColor: Color | string;
	strokePattern: PatternItem & Partial<NativeObject>[];
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
	holes: Coordinate[];
	points: Coordinate[];
	strokeColor: Color | string;
	strokeJointType: JointType;
	strokePattern: PatternItem & Partial<NativeObject>[];
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
	pattern: PatternItem & Partial<NativeObject>[];
	color: Color | string;
	startCap: Cap & Partial<NativeObject>;
	endCap: Cap & Partial<NativeObject>;
	userData: { [key: string]: any };
}

export interface PolylineOptions extends Partial<IPolyline> {}

export class Polyline implements IPolyline {
	width: number;
	points: Coordinate[];
	tappable: boolean;
	geodesic: boolean;
	visible: boolean;
	zIndex: number;
	jointType: JointType;
	pattern: PatternItem & Partial<NativeObject>[];
	color: string | Color;
	startCap: Cap & Partial<NativeObject>;
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

export class Cap implements ICap {}

export class ButtCap extends Cap {}

export class RoundCap extends Cap {}

export class SquareCap extends Cap {}

export class CustomCap extends Cap {}

export interface IPatternItem {}

export class PatternItem implements IPatternItem {}

export class Dash extends PatternItem {
	constructor(width: number);
}

export class Gap extends PatternItem {
	constructor(width: number);
}

export class Dot extends PatternItem {}

export interface ITileOverlay {
	fadeIn: boolean;
	transparency: number;
	visible: boolean;
	tileProvider: TileProvider & Partial<NativeObject>;
	zIndex: number;
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
