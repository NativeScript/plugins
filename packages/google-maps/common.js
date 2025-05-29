import { ContentView, Property } from '@nativescript/core';
export var MapType;
(function (MapType) {
	MapType['None'] = 'none';
	MapType['Normal'] = 'normal';
	MapType['Satellite'] = 'satellite';
	MapType['Terrain'] = 'terrain';
	MapType['Hybrid'] = 'hybrid';
})(MapType || (MapType = {}));
export var JointType;
(function (JointType) {
	JointType['Round'] = 'round';
	JointType['Bevel'] = 'bevel';
	JointType['Default'] = 'default';
})(JointType || (JointType = {}));
export const latProperty = new Property({
	name: 'lat',
});
export const lngProperty = new Property({
	name: 'lng',
});
export const zoomProperty = new Property({
	name: 'zoom',
});
export const bearingProperty = new Property({
	name: 'bearing',
});
export const tiltProperty = new Property({
	name: 'tilt',
});
export const preventDefaultMarkerTapBehaviorProperty = new Property({
	name: 'preventDefaultMarkerTapBehavior',
	defaultValue: false,
});
export class MapViewBase extends ContentView {}
MapViewBase.readyEvent = 'ready';
MapViewBase.mapTapEvent = 'mapTap';
MapViewBase.mapLoadedEvent = 'mapLoaded';
MapViewBase.mapLongPressEvent = 'mapLongPress';
MapViewBase.markerTapEvent = 'markerTap';
MapViewBase.myLocationTapEvent = 'myLocationTap';
MapViewBase.myLocationButtonTapEvent = 'myLocationButtonTap';
MapViewBase.markerDragStartEvent = 'markerDragStart';
MapViewBase.markerDraggingEvent = 'markerDragging';
MapViewBase.markerDragEndEvent = 'markerDragEnd';
MapViewBase.tileRenderingStartEvent = 'tileRenderingStart';
MapViewBase.tileRenderingEndEvent = 'tileRenderingEnd';
MapViewBase.cameraPositionEvent = 'cameraPosition';
MapViewBase.circleTapEvent = 'circle';
MapViewBase.polygonTapEvent = 'polygon';
MapViewBase.polylineTapEvent = 'polyline';
MapViewBase.poiTapEvent = 'poi';
MapViewBase.groundOverlayTapEvent = 'groundOverlay';
MapViewBase.infoWindowTapEvent = 'infoWindowTap';
MapViewBase.infoWindowLongPressEvent = 'infoWindowLongPress';
MapViewBase.infoWindowCloseEvent = 'infoWindowClose';
MapViewBase.markerInfoContentsEvent = 'markerInfoContents';
MapViewBase.markerInfoWindowEvent = 'markerInfoWindow';
MapViewBase.activeBuildingEvent = 'activeBuilding';
MapViewBase.activeLevelEvent = 'activeLevel';
latProperty.register(MapViewBase);
lngProperty.register(MapViewBase);
zoomProperty.register(MapViewBase);
bearingProperty.register(MapViewBase);
tiltProperty.register(MapViewBase);
preventDefaultMarkerTapBehaviorProperty.register(MapViewBase);
//# sourceMappingURL=common.js.map
