import { ContentView, Property } from '@nativescript/core';
import { Coordinate } from '.';

export enum MapType {
	None = 'none',
	Normal = 'normal',
	Satellite = 'satellite',
	Terrain = 'terrain',
	Hybrid = 'hybrid',
}

export enum JointType {
	Round = 'round',
	Bevel = 'bevel',
	Default = 'default',
}

export const latProperty = new Property<MapViewBase, number>({
	name: 'lat',
});

export const lngProperty = new Property<MapViewBase, number>({
	name: 'lng',
});

export const zoomProperty = new Property<MapViewBase, number>({
	name: 'zoom',
});

export const bearingProperty = new Property<MapViewBase, number>({
	name: 'bearing',
});

export const tiltProperty = new Property<MapViewBase, number>({
	name: 'tilt',
});

export const preventDefaultMarkerTapBehaviorProperty = new Property<MapViewBase, boolean>({
	name: 'preventDefaultMarkerTapBehavior',
	defaultValue: false,
});

export class MapViewBase extends ContentView {
	static readyEvent = 'ready';
	static mapTapEvent = 'mapTap';
	static mapLoadedEvent = 'mapLoaded';
	static mapLongPressEvent = 'mapLongPress';
	static markerTapEvent = 'markerTap';
	static myLocationTapEvent = 'myLocationTap';
	static myLocationButtonTapEvent = 'myLocationButtonTap';
	static markerDragStartEvent = 'markerDragStart';
	static markerDraggingEvent = 'markerDragging';
	static markerDragEndEvent = 'markerDragEnd';

	static tileRenderingStartEvent = 'tileRenderingStart';
	static tileRenderingEndEvent = 'tileRenderingEnd';

	static cameraPositionEvent = 'cameraPosition';

	static circleTapEvent = 'circle';
	static polygonTapEvent = 'polygon';
	static polylineTapEvent = 'polyline';
	static poiTapEvent = 'poi';
	static groundOverlayTapEvent = 'groundOverlay';

	static infoWindowTapEvent = 'infoWindowTap';
	static infoWindowLongPressEvent = 'infoWindowLongPress';
	static infoWindowCloseEvent = 'infoWindowClose';

	static markerInfoContentsEvent = 'markerInfoContents';
	static markerInfoWindowEvent = 'markerInfoWindow';

	static activeBuildingEvent = 'activeBuilding';
	static activeLevelEvent = 'activeLevel';

	lat: number;
	lng: number;
	zoom: number;
	bearing: number;
	tilt: number;
	preventDefaultMarkerTapBehavior: boolean;
}

latProperty.register(MapViewBase);
lngProperty.register(MapViewBase);
zoomProperty.register(MapViewBase);
bearingProperty.register(MapViewBase);
tiltProperty.register(MapViewBase);
preventDefaultMarkerTapBehaviorProperty.register(MapViewBase);
