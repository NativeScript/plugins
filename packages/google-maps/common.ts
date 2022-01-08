import {ContentView} from '@nativescript/core';

export enum MapType {
  None = 'none',
  Normal = 'normal',
  Satellite = 'satellite',
  Terrain = 'terrain',
  Hybrid = 'hybrid'
}

export enum JointType {
  Round = 'round',
  Bevel = 'bevel',
  Default = 'default'
}

export class MapViewBase extends ContentView {
  static readyEvent = 'ready';
  static mapTapEvent = 'mapTap';
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

}
