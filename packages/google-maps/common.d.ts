import { ContentView, Property } from '@nativescript/core';
export declare enum MapType {
	None = 'none',
	Normal = 'normal',
	Satellite = 'satellite',
	Terrain = 'terrain',
	Hybrid = 'hybrid',
}
export declare enum JointType {
	Round = 'round',
	Bevel = 'bevel',
	Default = 'default',
}
export declare const latProperty: Property<MapViewBase, number>;
export declare const lngProperty: Property<MapViewBase, number>;
export declare const zoomProperty: Property<MapViewBase, number>;
export declare const bearingProperty: Property<MapViewBase, number>;
export declare const tiltProperty: Property<MapViewBase, number>;
export declare const preventDefaultMarkerTapBehaviorProperty: Property<MapViewBase, boolean>;
export declare class MapViewBase extends ContentView {
	static readyEvent: string;
	static mapTapEvent: string;
	static mapLoadedEvent: string;
	static mapLongPressEvent: string;
	static markerTapEvent: string;
	static myLocationTapEvent: string;
	static myLocationButtonTapEvent: string;
	static markerDragStartEvent: string;
	static markerDraggingEvent: string;
	static markerDragEndEvent: string;
	static tileRenderingStartEvent: string;
	static tileRenderingEndEvent: string;
	static cameraPositionEvent: string;
	static circleTapEvent: string;
	static polygonTapEvent: string;
	static polylineTapEvent: string;
	static poiTapEvent: string;
	static groundOverlayTapEvent: string;
	static infoWindowTapEvent: string;
	static infoWindowLongPressEvent: string;
	static infoWindowCloseEvent: string;
	static markerInfoContentsEvent: string;
	static markerInfoWindowEvent: string;
	static activeBuildingEvent: string;
	static activeLevelEvent: string;
	lat: number;
	lng: number;
	zoom: number;
	bearing: number;
	tilt: number;
	preventDefaultMarkerTapBehavior: boolean;
}
