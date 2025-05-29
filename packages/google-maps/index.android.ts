import { Application, Color, Device, EventData, GridLayout, ImageSource, Utils, View } from '@nativescript/core';
import {
	ActiveBuildingEvent,
	ActiveLevelEvent,
	CameraPositionEvent,
	CameraPositionStartEvent,
	CircleOptions,
	CircleTapEvent,
	Coordinate,
	CoordinateBounds,
	GroundOverlayOptions,
	GroundOverlayTapEvent,
	ICameraPosition,
	ICameraUpdate,
	ICap,
	ICircle,
	IGoogleMap,
	IGroundOverlay,
	IIndoorBuilding,
	IIndoorLevel,
	ILocation,
	IMarker,
	InfoWindowEvent,
	IPatternItem,
	IPoi,
	IPolygon,
	IPolyline,
	IProjection,
	ITileOverlay,
	ITileProvider,
	IUISettings,
	IVisibleRegion,
	LocationTapEvent,
	MapTapEvent,
	MarkerDragEvent,
	MarkerInfoEvent,
	MarkerOptions,
	MarkerTapEvent,
	PoiTapEvent,
	PolygonOptions,
	PolygonTapEvent,
	PolylineOptions,
	PolylineTapEvent,
	Style,
	TileOverlayOptions,
} from '.';
import { bearingProperty, preventDefaultMarkerTapBehaviorProperty, JointType, latProperty, lngProperty, MapType, MapViewBase, tiltProperty, zoomProperty } from './common';

import { intoNativeMarkerOptions, intoNativeCircleOptions, intoNativePolygonOptions, intoNativeGroundOverlayOptions, intoNativePolylineOptions, hueFromColor, intoNativeJointType, toJointType, intoNativeTileOverlayOptions, deserialize, serialize } from './utils';

export { hueFromColor, intoNativeMarkerOptions } from './utils';

function fromPatternImages(pattern: java.util.List<com.google.android.gms.maps.model.PatternItem>) {
	const images: PatternItem[] = [];
	const array = <androidNative.Array<com.google.android.gms.maps.model.PatternItem>>pattern.toArray();
	for (let i = 0; i < array.length; i++) {
		images.push(PatternItem.fromNative(array[i]));
	}
	return images;
}

function intoPatternImages(pattern: PatternItem[]) {
	const array = new java.util.ArrayList<com.google.android.gms.maps.model.PatternItem>();
	for (let i = 0; i < pattern.length; i++) {
		array.add(pattern[i].native);
	}
	return array;
}

let IS_OREO: boolean;
export class Location implements ILocation {
	private _native: android.location.Location;
	static {
		IS_OREO = parseInt(Device.sdkVersion) >= 26;
	}
	static fromNative(location: android.location.Location): Location {
		if (location instanceof android.location.Location) {
			const ret = new Location();
			ret._native = location;
			return ret;
		}

		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this._native;
	}

	get altitudeAccuracy(): number {
		if (IS_OREO && this.native.hasVerticalAccuracy()) {
			return this.native.getVerticalAccuracyMeters();
		}
		return 0;
	}
	get accuracy(): number {
		return this.native.getAccuracy();
	}

	get coordinate(): Coordinate {
		return {
			lat: this.native.getLatitude(),
			lng: this.native.getLongitude(),
		};
	}
	get timestamp(): Date {
		return new Date(this.native.getTime());
	}
	get altitude(): number {
		return this.native.getAltitude();
	}
	get speed(): number {
		return this.native.getSpeed();
	}
	get heading(): number {
		return this.native.getBearing();
	}
}

export class MapView extends MapViewBase {
	mapView: com.google.android.gms.maps.MapView;
	lifeCycleHooks;
	createdBundle = null;
	savedBundle = null;
	_listener: com.google.android.gms.maps.OnMapReadyCallback;
	_map: com.google.android.gms.maps.GoogleMap;
	_destroyed = false;
	createNativeView() {
		this._destroyed = false;
		const ref = new WeakRef(this);
		this._listener = new com.google.android.gms.maps.OnMapReadyCallback({
			onMapReady(map: com.google.android.gms.maps.GoogleMap): void {
				const owner = ref.get?.();
				container.addView(nativeView as any);
				(<any>org).nativescript.plugins.google_maps.GoogleMaps.registerMapListeners(
					map,
					new (<any>org).nativescript.plugins.google_maps.GoogleMaps.Callback({
						onMapLoaded() {
							ref?.get?.().notify({
								eventName: MapView.mapLoadedEvent,
								object: ref?.get?.(),
							});
						},
						onCameraEvent(position: com.google.android.gms.maps.model.CameraPosition, event: string, isGesture: boolean) {
							if (event === 'start') {
								ref?.get?.().notify(<CameraPositionStartEvent>{
									eventName: MapView.cameraPositionEvent,
									object: ref?.get?.(),
									cameraPosition: CameraPosition.fromNative(position),
									state: event,
									isGesture,
								});
							} else {
								ref?.get?.().notify(<CameraPositionEvent>{
									eventName: MapView.cameraPositionEvent,
									object: ref?.get?.(),
									cameraPosition: CameraPosition.fromNative(position),
									state: event,
								});
							}
						},
						onMarkerEvent(marker: com.google.android.gms.maps.model.Marker, event: string) {
							switch (event) {
								case 'drag':
									ref?.get?.().notify(<MarkerDragEvent>{
										eventName: MapView.markerDraggingEvent,
										object: ref?.get?.(),
										marker: Marker.fromNative(marker),
									});
									break;
								case 'start':
									ref?.get?.().notify(<MarkerTapEvent>{
										eventName: MapView.markerDragStartEvent,
										object: ref?.get?.(),
										marker: Marker.fromNative(marker),
									});
									break;
								case 'end':
									ref?.get?.().notify(<MarkerTapEvent>{
										eventName: MapView.markerDragEndEvent,
										object: ref?.get?.(),
										marker: Marker.fromNative(marker),
									});
									break;
							}
						},
						onMapClickEvent(latLng: com.google.android.gms.maps.model.LatLng, isLongClick: boolean) {
							if (isLongClick) {
								ref?.get?.().notify(<MapTapEvent>{
									eventName: MapView.mapLongPressEvent,
									object: ref?.get?.(),
									coordinate: {
										lat: latLng.latitude,
										lng: latLng.longitude,
									},
								});
							} else {
								ref?.get?.().notify(<MapTapEvent>{
									eventName: MapView.mapTapEvent,
									object: ref?.get?.(),
									coordinate: {
										lat: latLng.latitude,
										lng: latLng.longitude,
									},
								});
							}
						},
						onMyLocationEvent(location?: android.location.Location) {
							if (location) {
								ref?.get?.().notify(<LocationTapEvent>{
									eventName: MapView.myLocationTapEvent,
									object: ref?.get?.(),
									location: Location.fromNative(location),
								});
							} else {
								ref?.get?.().notify(<EventData>{
									eventName: MapView.myLocationButtonTapEvent,
									object: ref?.get?.(),
								});
							}
						},
						onItemClickEvent(item, name: string) {
							switch (name) {
								case 'circle':
									ref?.get?.().notify(<CircleTapEvent>{
										eventName: MapView.circleTapEvent,
										object: ref?.get?.(),
										circle: Circle.fromNative(item),
									});
									break;
								case 'polygon':
									ref?.get?.().notify(<PolygonTapEvent>{
										eventName: MapView.polygonTapEvent,
										object: ref?.get?.(),
										polygon: Polygon.fromNative(item),
									});
									break;
								case 'polyline':
									ref?.get?.().notify(<PolylineTapEvent>{
										eventName: MapView.polylineTapEvent,
										object: ref?.get?.(),
										polyline: Polyline.fromNative(item),
									});
									break;
								case 'poi':
									ref?.get?.().notify(<PoiTapEvent>{
										eventName: MapView.poiTapEvent,
										object: ref?.get?.(),
										poi: Poi.fromNative(item),
									});
									break;
								case 'groundOverlay':
									ref?.get?.().notify(<GroundOverlayTapEvent>{
										eventName: MapView.groundOverlayTapEvent,
										object: ref?.get?.(),
										groundOverlay: GroundOverlay.fromNative(item),
									});
									break;
							}
						},
						onInfoWindowEvent(marker: com.google.android.gms.maps.model.Marker, event: string, isLongClick: boolean) {
							let info = <InfoWindowEvent>{
								eventName: MapView.infoWindowTapEvent,
								object: ref?.get?.(),
								marker: Marker.fromNative(marker),
							};

							if (event === 'click') {
								if (isLongClick) {
									info.eventName = MapView.infoWindowLongPressEvent;
								}
							} else if (event === 'close') {
								info.eventName = MapView.infoWindowCloseEvent;
							} else {
								info = null;
							}

							if (info) {
								ref?.get?.().notify?.(info);
							}
						},
						onInfoWindowAdapterEvent(marker: com.google.android.gms.maps.model.Marker, event: string) {
							const owner: MapView = ref.get?.();
							if (owner) {
								let info = <MarkerInfoEvent>{
									eventName: '',
									object: ref?.get?.(),
									marker: Marker.fromNative(marker),
									view: null,
								};

								if (event === 'contents') {
									info.eventName = MapView.markerInfoContentsEvent;
								} else if (event === 'window') {
									info.eventName = MapView.markerInfoWindowEvent;
								} else {
									info = null;
								}

								if (info) {
									owner.notify(info);
									if (info.view instanceof View) {
										let container = (<any>marker)._view as never as GridLayout;
										if (!container) {
											container = new GridLayout();
											(<any>marker)._view = container;
											const activity = Utils.android.getCurrentActivity();
											container._setupAsRootView(activity);
											container._setupUI(activity);
											container.callLoaded();
										} else {
											if (info.view.parent !== container) {
												container.removeChildren();
											}
										}

										if (!info.view.parent) {
											container.addChild(info.view);
										} else if (info.view.parent !== container) {
											(<GridLayout>info?.view?.parent)?.removeChild?.(info.view);
											container.addChild(info.view);
										}

										return info.view.nativeView;
									} else if (info.view instanceof android.view.View) {
										return info.view;
									}
								}
							}

							return null;
						},
						onIndoorEvent(object, name: string) {
							if (name === 'buildingFocused') {
								ref?.get?.().notify(<ActiveBuildingEvent>{
									eventName: MapView.activeBuildingEvent,
									object: ref?.get?.(),
									building: IndoorBuilding.fromNative(object),
								});
							} else if (name === 'levelActivated') {
								const building: com.google.android.gms.maps.model.IndoorBuilding = object;
								const level = building.getLevels().get(building.getActiveLevelIndex());
								ref?.get?.().notify(<ActiveLevelEvent>{
									eventName: MapView.activeLevelEvent,
									object: ref?.get?.(),
									level: IndoorLevel.fromNative(level),
								});
							}
						},
					}),
				);

				if (owner) {
					owner._map = map;
					owner._updateCamera(map, {
						lat: owner.lat,
						lng: owner.lng,
						bearing: owner.bearing,
						tilt: owner.tilt,
						zoom: owner.zoom,
					});
					owner._setMapClickListener(map, owner.preventDefaultMarkerTapBehavior);
				}

				ref.get?.().notify?.({
					eventName: 'ready',
					object: ref.get?.(),
					map: GoogleMap.fromNative(map),
				});
			},
		});
		const container = new android.widget.LinearLayout(this._context);
		const nativeView = new com.google.android.gms.maps.MapView(this._context);
		nativeView.onCreate(this.createdBundle);
		nativeView.onResume();
		nativeView.getMapAsync(this._listener);
		this.mapView = nativeView;
		return container;
	}

	initNativeView(): void {
		super.initNativeView();
		const ref = new WeakRef(this);
		this.lifeCycleHooks = new android.app.Application.ActivityLifecycleCallbacks(<any>{
			onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void {
				if (param0 !== Application.android.startActivity) {
					return;
				}
				const owner = ref?.get?.();
				if (owner) {
					owner.createdBundle = param1;
					if (!owner?._destroyed && owner.mapView) {
						owner.mapView.onCreate(param1);
					}
				}
			},
			onActivityStarted(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (!owner?._destroyed && owner?.mapView) {
					owner.mapView.onStart();
				}
			},
			onActivityResumed(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (!owner?._destroyed && owner?.mapView) {
					owner.mapView.onResume();
				}
			},
			onActivityPaused(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (!owner?._destroyed && owner?.mapView) {
					owner.mapView.onPause();
				}
			},
			onActivityStopped(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (!owner?._destroyed && owner?.mapView) {
					owner.mapView.onStop();
				}
			},
			onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void {
				if (param0 !== Application.android.startActivity) {
					return;
				}
				const owner = ref?.get?.();
				if (owner) {
					owner.savedBundle = param1;
					if (!owner?._destroyed && owner.mapView) {
						owner.mapView.onSaveInstanceState(param1);
					}
				}
			},
			onActivityDestroyed(param0: android.app.Activity): void {
				if (param0 !== Application.android.startActivity) {
					return;
				}
				const owner = ref?.get?.();
				if (owner) {
					owner.createdBundle = null;
					owner.savedBundle = null;
					if (!owner?._destroyed && owner.mapView) {
						owner.mapView.onDestroy();
					}
				}
			},
		});
		Utils.android.getApplication().registerActivityLifecycleCallbacks(this.lifeCycleHooks);
	}

	disposeNativeView() {
		Utils.android.getApplication().unregisterActivityLifecycleCallbacks(this.lifeCycleHooks);
		this.lifeCycleHooks = null;
		this._map = null;
		super.disposeNativeView();
		this._destroyed = true;
	}

	[latProperty.setNative](value) {
		if (this._map) {
			this._updateCamera(this._map, {
				lat: value,
			});
		}
	}

	[lngProperty.setNative](value) {
		if (this._map) {
			this._updateCamera(this._map, {
				lng: value,
			});
		}
	}

	[zoomProperty.setNative](value) {
		if (this._map) {
			this._updateCamera(this._map, {
				zoom: value,
			});
		}
	}

	[tiltProperty.setNative](value) {
		if (this._map) {
			this._updateCamera(this._map, {
				tilt: value,
			});
		}
	}

	[bearingProperty.setNative](value) {
		if (this._map) {
			this._updateCamera(this._map, {
				bearing: value,
			});
		}
	}

	[preventDefaultMarkerTapBehaviorProperty.setNative](value) {
		if (this._map) {
			this._setMapClickListener(this._map, value);
		}
	}

	_updateCamera(
		map,
		owner: {
			lat?;
			lng?;
			zoom?;
			tilt?;
			bearing?;
		},
	) {
		const googleMap = GoogleMap.fromNative(map);
		if (googleMap) {
			const position = CameraPosition.fromNative(map.getCameraPosition());

			let changed = false;
			if (!Utils.isNullOrUndefined(owner.lat)) {
				position.target = {
					lat: typeof owner.lat === 'string' ? parseFloat(owner.lat) : owner.lat,
					lng: position.target.lng,
				};
				changed = true;
			}

			if (!Utils.isNullOrUndefined(owner.lng)) {
				position.target = {
					lat: position.target.lat,
					lng: typeof owner.lng === 'string' ? parseFloat(owner.lng) : owner.lng,
				};
				changed = true;
			}

			if (!Utils.isNullOrUndefined(owner.zoom)) {
				position.zoom = typeof owner.zoom === 'string' ? parseFloat(owner.zoom) : owner.zoom;
				changed = true;
			}

			if (!Utils.isNullOrUndefined(owner.tilt)) {
				position.tilt = typeof owner.tilt === 'string' ? parseFloat(owner.tilt) : owner.tilt;
				changed = true;
			}

			if (!Utils.isNullOrUndefined(owner.bearing)) {
				position.bearing = typeof owner.bearing === 'string' ? parseFloat(owner.bearing) : owner.bearing;
				changed = true;
			}

			if (changed) {
				googleMap.cameraPosition = position;
			}
		}
	}

	_setMapClickListener(map, preventDefaultMarkerTapBehavior) {
		map.setOnMarkerClickListener(
			new com.google.android.gms.maps.GoogleMap.OnMarkerClickListener({
				onMarkerClick: (marker) => {
					this.notify(<MarkerTapEvent>{
						eventName: MapView.markerTapEvent,
						object: this,
						marker: Marker.fromNative(marker),
					});

					return preventDefaultMarkerTapBehavior;
				},
			}),
		);
	}
}

export class IndoorLevel implements IIndoorLevel {
	_native: com.google.android.gms.maps.model.IndoorLevel;

	static fromNative(nativeIndoorLevel: com.google.android.gms.maps.model.IndoorLevel) {
		if (nativeIndoorLevel instanceof com.google.android.gms.maps.model.IndoorLevel) {
			const indoorLevel = new IndoorLevel();
			indoorLevel._native = nativeIndoorLevel;
			return indoorLevel;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get name(): string {
		return this.native.getName();
	}

	get shortName(): string {
		return this.native.getShortName();
	}
}

export class IndoorBuilding implements IIndoorBuilding {
	_native: com.google.android.gms.maps.model.IndoorBuilding;

	static fromNative(nativeIndoorBuilding: com.google.android.gms.maps.model.IndoorBuilding) {
		if (nativeIndoorBuilding instanceof com.google.android.gms.maps.model.IndoorBuilding) {
			const indoorBuilding = new IndoorBuilding();
			indoorBuilding._native = nativeIndoorBuilding;
			return indoorBuilding;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get defaultLevelIndex(): number {
		return this.native.getDefaultLevelIndex();
	}

	get levels(): IndoorLevel[] {
		const result: IndoorLevel[] = [];
		const levels = this.native.getLevels().toArray();
		for (let i = 0; i < levels.length; i++) {
			result.push(IndoorLevel.fromNative(levels[i]));
		}

		return result;
	}

	get underground(): boolean {
		return this.native.isUnderground();
	}
}

export class UISettings implements IUISettings {
	_native: com.google.android.gms.maps.UiSettings;

	static fromNative(nativeUiSettings: com.google.android.gms.maps.UiSettings) {
		if (nativeUiSettings instanceof com.google.android.gms.maps.UiSettings) {
			const settings = new UISettings();
			settings._native = nativeUiSettings;
			return settings;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get mapToolbarEnabled(): boolean {
		return this.native.isMapToolbarEnabled();
	}

	set mapToolbarEnabled(value) {
		this.native.setMapToolbarEnabled(value);
	}

	get zoomControlsEnabled(): boolean {
		return this.native.isZoomControlsEnabled();
	}

	set zoomControlsEnabled(value) {
		this.native.setZoomControlsEnabled(value);
	}

	get zoomGesturesEnabled(): boolean {
		return this.native.isZoomGesturesEnabled();
	}

	set zoomGesturesEnabled(value) {
		this.native.setZoomGesturesEnabled(value);
	}

	get tiltGesturesEnabled(): boolean {
		return this.native.isTiltGesturesEnabled();
	}

	set tiltGesturesEnabled(value) {
		this.native.setTiltGesturesEnabled(value);
	}

	setAllGesturesEnabled(value: boolean): void {
		this.native.setAllGesturesEnabled(value);
	}

	get compassEnabled(): boolean {
		return this.native.isCompassEnabled();
	}

	set compassEnabled(value) {
		this.native.setCompassEnabled(value);
	}

	get scrollGesturesEnabledDuringRotateOrZoom(): boolean {
		return this.native.isScrollGesturesEnabledDuringRotateOrZoom();
	}

	set scrollGesturesEnabledDuringRotateOrZoom(value) {
		this.native.setScrollGesturesEnabledDuringRotateOrZoom(value);
	}

	get rotateGesturesEnabled(): boolean {
		return this.native.isRotateGesturesEnabled();
	}

	set rotateGesturesEnabled(value) {
		this.native.setRotateGesturesEnabled(value);
	}

	get myLocationButtonEnabled(): boolean {
		return this.native.isMyLocationButtonEnabled();
	}

	set myLocationButtonEnabled(value) {
		this.native.setMyLocationButtonEnabled(value);
	}

	get indoorLevelPickerEnabled(): boolean {
		return this.native.isIndoorLevelPickerEnabled();
	}

	set indoorLevelPickerEnabled(value) {
		this.native.setIndoorLevelPickerEnabled(value);
	}

	get scrollGesturesEnabled(): boolean {
		return this.native.isScrollGesturesEnabled();
	}

	set scrollGesturesEnabled(value) {
		this.native.setScrollGesturesEnabled(value);
	}
}

export class GoogleMap implements IGoogleMap {
	_native: com.google.android.gms.maps.GoogleMap;

	static fromNative(nativeMap: com.google.android.gms.maps.GoogleMap) {
		if (nativeMap instanceof com.google.android.gms.maps.GoogleMap) {
			const map = new GoogleMap();
			map._native = nativeMap;
			return map;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get cameraPosition() {
		return CameraPosition.fromNative(this.native.getCameraPosition());
	}

	set cameraPosition(value) {
		this.native.moveCamera(CameraUpdate.fromCameraPosition(value).native);
	}

	set mapType(type: MapType) {
		switch (type) {
			case MapType.None:
				this.native.setMapType(com.google.android.gms.maps.GoogleMap.MAP_TYPE_NONE);
				break;
			case MapType.Normal:
				this.native.setMapType(com.google.android.gms.maps.GoogleMap.MAP_TYPE_NORMAL);
				break;
			case MapType.Satellite:
				this.native.setMapType(com.google.android.gms.maps.GoogleMap.MAP_TYPE_SATELLITE);
				break;
			case MapType.Terrain:
				this.native.setMapType(com.google.android.gms.maps.GoogleMap.MAP_TYPE_TERRAIN);
				break;
			case MapType.Hybrid:
				this.native.setMapType(com.google.android.gms.maps.GoogleMap.MAP_TYPE_HYBRID);
				break;
		}
	}

	get mapType(): MapType {
		switch (this.native.getMapType()) {
			case com.google.android.gms.maps.GoogleMap.MAP_TYPE_NONE:
				return MapType.None;
			case com.google.android.gms.maps.GoogleMap.MAP_TYPE_NORMAL:
				return MapType.Normal;
			case com.google.android.gms.maps.GoogleMap.MAP_TYPE_SATELLITE:
				return MapType.Satellite;
			case com.google.android.gms.maps.GoogleMap.MAP_TYPE_TERRAIN:
				return MapType.Terrain;
			case com.google.android.gms.maps.GoogleMap.MAP_TYPE_HYBRID:
				return MapType.Hybrid;
		}
	}

	get uiSettings() {
		return UISettings.fromNative(this.native.getUiSettings());
	}

	get trafficEnabled(): boolean {
		return this.native.isTrafficEnabled();
	}

	set trafficEnabled(value) {
		this.native.setTrafficEnabled(value);
	}

	get maxZoomLevel(): number {
		return this.native.getMaxZoomLevel();
	}

	set maxZoomLevel(value) {
		this.native.setMaxZoomPreference(value);
	}

	set minZoomLevel(value) {
		this.native.setMinZoomPreference(value);
	}

	get minZoomLevel(): number {
		return this.native.getMinZoomLevel();
	}

	get buildingsEnabled(): boolean {
		return this.native.isBuildingsEnabled();
	}

	set buildingsEnabled(value) {
		this.native.setBuildingsEnabled(value);
	}

	get myLocationEnabled(): boolean {
		return this.native.isMyLocationEnabled();
	}

	set myLocationEnabled(value) {
		this.native.setMyLocationEnabled(value);
	}

	get projection(): Projection {
		return Projection.fromNative(this.native.getProjection());
	}

	_mapStyle: Style[];
	get mapStyle() {
		return this._mapStyle;
	}

	set mapStyle(value) {
		this._mapStyle = value;
		try {
			const style = new com.google.android.gms.maps.model.MapStyleOptions(JSON.stringify(value));
			this.native.setMapStyle(style);
		} catch (e) {
			console.error(e);
		}
	}

	moveCamera(update: CameraUpdate) {
		this.native.moveCamera(update.native);
	}

	animateCamera(update: CameraUpdate) {
		this.native.animateCamera(update.native);
	}

	clear() {
		this.native.clear();
	}

	addMarker(options: MarkerOptions) {
		const marker = Marker.fromNative(this.native.addMarker(intoNativeMarkerOptions(options)));
		if (options?.userData) {
			marker.userData = options.userData;
		}
		return marker;
	}

	removeMarker(marker: Marker) {
		marker?.native?.remove?.();
	}

	addCircle(options: CircleOptions): Circle {
		const circle = Circle.fromNative(this.native.addCircle(intoNativeCircleOptions(options)));
		if (options?.userData) {
			circle.userData = options.userData;
		}
		return circle;
	}

	removeCircle(circle: Circle) {
		circle?.native?.remove?.();
	}

	addPolygon(options: PolygonOptions): Polygon {
		const poly = Polygon.fromNative(this.native.addPolygon(intoNativePolygonOptions(options)));
		if (options?.userData) {
			poly.userData = options.userData;
		}
		return poly;
	}

	removePolygon(polygon: Polygon) {
		polygon?.native?.remove?.();
	}

	addPolyline(options: PolylineOptions): Polyline {
		const polyline = Polyline.fromNative(this.native.addPolyline(intoNativePolylineOptions(options)));
		if (options?.userData) {
			polyline.userData = options.userData;
		}
		return polyline;
	}

	removePolyline(polyline: Polyline) {
		polyline?.native?.remove?.();
	}

	addGroundOverlay(options: GroundOverlayOptions): GroundOverlay {
		const overlay = GroundOverlay.fromNative(this.native.addGroundOverlay(intoNativeGroundOverlayOptions(options)));
		if (options?.userData) {
			overlay.userData = options.userData;
		}
		return overlay;
	}

	removeGroundOverlay(groundOverlay: GroundOverlay) {
		groundOverlay?.native?.remove?.();
	}

	snapshot(): Promise<ImageSource> {
		return new Promise((resolve, reject) => {
			this.native.snapshot(
				new com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback({
					onSnapshotReady(ss: android.graphics.Bitmap): void {
						resolve(new ImageSource(ss));
					},
				}),
			);
		});
	}

	addTileOverlay(options: TileOverlayOptions): TileOverlay {
		return TileOverlay.fromNative(this.native.addTileOverlay(intoNativeTileOverlayOptions(options)));
	}

	removeTileOverlay(overlay: TileOverlay) {
		overlay?.native?.remove?.();
	}
}

export class CameraUpdate implements ICameraUpdate {
	_native: com.google.android.gms.maps.CameraUpdate;

	static fromNative(nativeUpdate: com.google.android.gms.maps.CameraUpdate) {
		if (nativeUpdate instanceof com.google.android.gms.maps.CameraUpdate) {
			const update = new CameraUpdate();
			update._native = nativeUpdate;
			return update;
		}
		return null;
	}

	static fromCoordinate(coordinate: Coordinate, zoom?: number) {
		if (typeof zoom === 'number') {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng), zoom));
		} else {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.newLatLng(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng)));
		}
	}

	static fromCoordinates(coordinates: Coordinate[], padding: number);
	static fromCoordinates(coordinates: Coordinate[], width: number, height?: number, padding?: number) {
		if (!Array.isArray(coordinates)) {
			return null;
		}
		const bounds = new com.google.android.gms.maps.model.LatLngBounds.Builder();
		coordinates.forEach((coord) => {
			bounds.include(new com.google.android.gms.maps.model.LatLng(coord.lat, coord.lng));
		});

		if (arguments.length == 2) {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.newLatLngBounds(bounds.build(), width));
		} else {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.newLatLngBounds(bounds.build(), width, height, padding));
		}
	}

	static fromCameraPosition(position: CameraPosition) {
		return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.newCameraPosition(position.native));
	}

	static zoomIn() {
		return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.zoomIn());
	}

	static zoomOut() {
		return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.zoomOut());
	}

	static zoomTo(value: number) {
		return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.zoomTo(value));
	}

	static zoomBy(amount: number, point?: { x: number; y: number }) {
		if (typeof point?.x === 'number' && typeof point.y === 'number') {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.zoomBy(amount, new android.graphics.Point(point.x, point.y)));
		} else {
			return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.zoomBy(amount));
		}
	}

	static scrollBy(x: number, y: number) {
		return CameraUpdate.fromNative(com.google.android.gms.maps.CameraUpdateFactory.scrollBy(x, y));
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class CameraPosition implements ICameraPosition {
	_native: com.google.android.gms.maps.model.CameraPosition;

	constructor(target: Coordinate, zoom: number, bearing?: number, tilt?: number) {
		if (target && typeof zoom === 'number') {
			const builder = com.google.android.gms.maps.model.CameraPosition.builder();

			builder.target(new com.google.android.gms.maps.model.LatLng(target.lat, target.lng));

			builder.zoom(zoom);

			if (typeof bearing === 'number') {
				builder.bearing(bearing);
			}

			if (typeof tilt === 'number') {
				builder.tilt(tilt);
			}

			this._native = builder.build();
		}
	}

	static fromNative(nativePosition: com.google.android.gms.maps.model.CameraPosition) {
		if (nativePosition instanceof com.google.android.gms.maps.model.CameraPosition) {
			const position = new CameraPosition(null, null);
			position._native = nativePosition;
			return position;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get bearing(): number {
		return this.native.bearing;
	}

	set bearing(value) {
		this._native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, this.native.zoom, this.native.tilt, value);
	}

	get target(): Coordinate {
		return {
			lat: this.native.target.latitude,
			lng: this.native.target.longitude,
		};
	}

	set target(value) {
		this._native = new com.google.android.gms.maps.model.CameraPosition(new com.google.android.gms.maps.model.LatLng(value.lat, value.lng), this.native.zoom, this.native.tilt, this.native.bearing);
	}

	get tilt(): number {
		return this.native.tilt;
	}

	set tilt(value) {
		this._native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, this.native.zoom, value, this.native.bearing);
	}

	get zoom(): number {
		return this.native.zoom;
	}

	set zoom(value) {
		this._native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, value, this.native.tilt, this.native.bearing);
	}

	toJSON() {
		return {
			target: this.target,
			tilt: this.tilt,
			bearing: this.bearing,
			zoom: this.zoom,
		};
	}
}

abstract class OverLayBase {
	abstract readonly native;
	get userData(): { [key: string]: any } {
		const userData = this.native.getUserData();
		if (userData instanceof java.util.HashMap) {
			return deserialize(userData);
		}

		return {};
	}

	set userData(data: { [key: string]: any }) {
		if (data && typeof data === 'object') {
			this.native.setUserData(serialize(data));
		} else {
			this.native.setUserData(null);
		}
	}
}

export class Marker extends OverLayBase implements IMarker {
	_native: com.google.android.gms.maps.model.Marker;
	_color: Color;
	_icon: ImageSource;

	constructor() {
		super();
		this._icon = new ImageSource();
		this._color = new Color('red');
	}

	static fromNative(nativeMarker: com.google.android.gms.maps.model.Marker) {
		if (nativeMarker instanceof com.google.android.gms.maps.model.Marker) {
			const marker = new Marker();
			marker._native = nativeMarker;
			return marker;
		}
		return null;
	}

	_setIcon(icon) {
		this._icon = icon;
	}

	_setColor(color) {
		this._color = color;
	}

	get rotation(): number {
		return this.native.getRotation();
	}

	set rotation(value) {
		this.native.setRotation(value);
	}

	get visible(): boolean {
		return this.native.isVisible();
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get flat(): boolean {
		return this.native.isFlat();
	}

	set flat(value) {
		this.native.setFlat(value);
	}

	get color(): Color {
		return this._color;
	}

	set color(value: string | Color) {
		if (value instanceof Color) {
			this._color = value;
			this.native.setIcon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(this._color)));
		} else if (typeof value === 'string') {
			this._color = new Color(value);
			this.native.setIcon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(this._color)));
		}
	}

	get opacity(): number {
		return this.native.getAlpha();
	}

	set opacity(value) {
		this.native.setAlpha(value);
	}

	get icon(): any {
		return this._icon;
	}

	set icon(value) {
		if (value instanceof android.graphics.Bitmap) {
			const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(value);
			this.native.setIcon(desc);
			this._icon.setNativeSource(value);
		} else if (value instanceof ImageSource) {
			this._icon = value;
			const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(value.android);
			this.native.setIcon(desc);
		}
	}

	get draggable(): boolean {
		return this.native.isDraggable();
	}

	set draggable(value: boolean) {
		this.native.setDraggable(value);
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get position() {
		const position = this.native.getPosition();
		return {
			lat: position.latitude,
			lng: position.longitude,
		};
	}

	set position(latlng: { lat: number; lng: number }) {
		const position = new com.google.android.gms.maps.model.LatLng(latlng.lat, latlng.lng);
		this.native.setPosition(position);
	}

	get title() {
		return this.native.getTitle();
	}

	set title(value: string) {
		this.native.setTitle(value);
	}

	get snippet() {
		return this.native.getSnippet();
	}

	set snippet(value: string) {
		this.native.setSnippet(value);
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}

	hideInfoWindow() {
		this.native.hideInfoWindow();
	}

	showInfoWindow() {
		this.native.showInfoWindow();
	}
}

export class Circle extends OverLayBase implements ICircle {
	_native: com.google.android.gms.maps.model.Circle;

	static fromNative(nativeCircle: com.google.android.gms.maps.model.Circle) {
		if (nativeCircle instanceof com.google.android.gms.maps.model.Circle) {
			const circle = new Circle();
			circle._native = nativeCircle;
			return circle;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get radius(): number {
		return this.native.getRadius();
	}

	set radius(value) {
		this.native.setRadius(value);
	}

	get strokeColor(): Color {
		return new Color(this.native.getStrokeColor());
	}

	set strokeColor(value: string | Color) {
		if (value instanceof Color) {
			this.native.setStrokeColor(value.android);
		} else if (typeof value === 'string') {
			this.native.setStrokeColor(new Color(value).android);
		}
	}

	get center(): Coordinate {
		const center = this.native.getCenter();
		return {
			lat: center.latitude,
			lng: center.longitude,
		};
	}

	set center(value) {
		this.native.setCenter(new com.google.android.gms.maps.model.LatLng(value.lat, value.lng));
	}

	get fillColor(): Color {
		return new Color(this.native.getFillColor());
	}

	set fillColor(value: string | Color) {
		if (value instanceof Color) {
			this.native.setFillColor(value.android);
		} else if (typeof value === 'string') {
			this.native.setFillColor(new Color(value).android);
		}
	}

	get visible(): boolean {
		return this.native.isVisible();
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get tappable(): boolean {
		return this.native.isClickable();
	}

	set tappable(value) {
		this.native.setClickable(value);
	}

	get strokeWidth(): number {
		return this.native.getStrokeWidth();
	}

	set strokeWidth(value) {
		this.native.setStrokeWidth(value);
	}

	get strokePattern(): PatternItem[] {
		return fromPatternImages(this.native.getStrokePattern());
	}

	set strokePattern(value) {
		this.native.setStrokePattern(intoPatternImages(value));
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}
}

export class Polygon extends OverLayBase implements IPolygon {
	_native: com.google.android.gms.maps.model.Polygon;

	static fromNative(nativePolygon: com.google.android.gms.maps.model.Polygon) {
		if (nativePolygon instanceof com.google.android.gms.maps.model.Polygon) {
			const polygon = new Polygon();
			polygon._native = nativePolygon;
			return polygon;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get points(): Coordinate[] {
		const array: androidNative.Array<com.google.android.gms.maps.model.LatLng> = this.native.getPoints().toArray();
		const points: Coordinate[] = [];
		for (let i = 0; i < array.length; i++) {
			const point = array[i];
			points.push({
				lat: point.latitude,
				lng: point.longitude,
			});
		}
		return points;
	}

	set points(value) {
		if (Array.isArray(value)) {
			const nativeArray = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>();
			value.forEach((point) => {
				nativeArray.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
			});
			this.native.setPoints(nativeArray);
		}
	}

	addPoint(point: Coordinate) {
		const points = this.native.getPoints();
		points.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		this.native.setPoints(points);
	}

	addPoints(points: Coordinate[]) {
		const nativePoints = this.native.getPoints();
		points.forEach((point) => {
			nativePoints.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		});
		this.native.setPoints(nativePoints);
	}

	get holes(): Coordinate[][] {
		const array: androidNative.Array<java.util.List<com.google.android.gms.maps.model.LatLng>> = this.native.getHoles().toArray();
		const holes: Coordinate[][] = [];
		for (let i = 0; i < array.length; i++) {
			const nativeHole = array[i].toArray();
			const hole: Coordinate[] = [];
			for (let j = 0; j < nativeHole.length; j++) {
				hole.push({
					lat: nativeHole[j].latitude,
					lng: nativeHole[j].longitude,
				});
			}
			holes.push(hole);
		}
		return holes;
	}

	set holes(value: Coordinate[][]) {
		if (Array.isArray(value)) {
			const nativeHoles = new java.util.ArrayList<java.util.ArrayList<com.google.android.gms.maps.model.LatLng>>();
			value.forEach((hole) => {
				if (Array.isArray(hole) && hole.length) {
					const nativeHole = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>();
					hole.forEach((coordinate) => {
						nativeHole.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
					});
					nativeHoles.add(nativeHole);
				}
			});
			this.native.setHoles(nativeHoles);
		}
	}

	get tappable(): boolean {
		return this.native.isClickable();
	}

	set tappable(value) {
		this.native.setClickable(value);
	}

	get strokeWidth(): number {
		return this.native.getStrokeWidth();
	}

	set strokeWidth(value) {
		this.native.setStrokeWidth(value);
	}

	get strokeColor(): Color {
		return new Color(this.native.getStrokeColor());
	}

	set strokeColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.setStrokeColor(value.android);
		} else if (typeof value === 'string') {
			this.native.setStrokeColor(new Color(value).android);
		}
	}

	get strokePattern(): PatternItem[] {
		return fromPatternImages(this.native.getStrokePattern());
	}

	set strokePattern(value) {
		this.native.setStrokePattern(intoPatternImages(value));
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}

	get geodesic(): boolean {
		return this.native.isGeodesic();
	}

	set geodesic(value) {
		this.native.setGeodesic(value);
	}

	get strokeJointType(): JointType {
		switch (this.native.getStrokeJointType()) {
			case com.google.android.gms.maps.model.JointType.ROUND:
				return JointType.Round;
			case com.google.android.gms.maps.model.JointType.BEVEL:
				return JointType.Bevel;
			default:
				return JointType.Default;
		}
	}

	set strokeJointType(value) {
		this.native.setStrokeJointType(intoNativeJointType(value));
	}

	get visible(): boolean {
		return this.native.isVisible();
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get fillColor(): Color {
		return new Color(this.native.getFillColor());
	}

	set fillColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.setFillColor(value.android);
		} else if (typeof value === 'string') {
			this.native.setFillColor(new Color(value).android);
		}
	}
}

export class Polyline extends OverLayBase implements IPolyline {
	_native: com.google.android.gms.maps.model.Polyline;

	static fromNative(nativePolyline: com.google.android.gms.maps.model.Polyline) {
		if (nativePolyline instanceof com.google.android.gms.maps.model.Polyline) {
			const polyline = new Polyline();
			polyline._native = nativePolyline;
			return polyline;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get width(): number {
		return this.native.getWidth();
	}

	set width(value) {
		this.native.setWidth(value);
	}

	get points(): Coordinate[] {
		const array: androidNative.Array<com.google.android.gms.maps.model.LatLng> = this.native.getPoints().toArray();
		const points: Coordinate[] = [];
		for (let i = 0; i < array.length; i++) {
			const point = array[i];
			points.push({
				lat: point.latitude,
				lng: point.longitude,
			});
		}
		return points;
	}

	set points(value) {
		if (Array.isArray(value)) {
			const nativeArray = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>();
			value.forEach((point) => {
				nativeArray.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
			});
			this.native.setPoints(nativeArray);
		}
	}

	addPoint(point: Coordinate) {
		const points = this.native.getPoints();
		points.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		this.native.setPoints(points);
	}

	addPoints(points: Coordinate[]) {
		const nativePoints = this.native.getPoints();
		points.forEach((point) => {
			nativePoints.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		});
		this.native.setPoints(nativePoints);
	}

	get tappable(): boolean {
		return this.native.isClickable();
	}

	set tappable(value) {
		this.native.setClickable(value);
	}

	get geodesic(): boolean {
		return this.native.isGeodesic();
	}

	set geodesic(value) {
		this.native.setGeodesic(value);
	}

	get visible(): boolean {
		return this.native.isVisible();
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}

	get jointType(): JointType {
		return toJointType(this.native.getJointType());
	}

	set jointType(value) {
		this.native.setJointType(intoNativeJointType(value));
	}

	get pattern(): PatternItem[] {
		return fromPatternImages(this.native.getPattern());
	}

	set pattern(value) {
		this.native.setPattern(intoPatternImages(value));
	}

	get color(): Color {
		return new Color(this.native.getColor());
	}

	set color(value: string | Color) {
		if (value instanceof Color) {
			this.native.setColor(value.android);
		} else if (typeof value === 'string') {
			this.native.setColor(new Color(value).android);
		}
	}

	get startCap(): Cap {
		return Cap.fromNative(this.native.getStartCap());
	}

	set startCap(cap: Cap) {
		this.native.setStartCap(cap.native);
	}

	get endCap(): Cap {
		return Cap.fromNative(this.native.getEndCap());
	}

	set endCap(cap: Cap) {
		this.native.setEndCap(cap.native);
	}
}

export class GroundOverlay extends OverLayBase implements IGroundOverlay {
	_native: com.google.android.gms.maps.model.GroundOverlay;

	constructor() {
		super();
		this._image = new ImageSource();
	}

	static fromNative(nativeGroundOverlayOptions: com.google.android.gms.maps.model.GroundOverlay) {
		if (nativeGroundOverlayOptions instanceof com.google.android.gms.maps.model.GroundOverlay) {
			const groundOverlayOptions = new GroundOverlay();
			groundOverlayOptions._native = nativeGroundOverlayOptions;
			return groundOverlayOptions;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get visible() {
		return this.native.isVisible();
	}

	get transparency(): number {
		return this.native.getTransparency();
	}

	set transparency(value) {
		this.native.setTransparency(value);
	}

	set position(value) {
		this.native.setPosition(new com.google.android.gms.maps.model.LatLng(value.lat, value.lng));
	}

	get position(): Coordinate {
		const coord = this.native.getPosition();
		return {
			lat: coord.latitude,
			lng: coord.longitude,
		};
	}

	get width(): number {
		return this.native.getWidth();
	}

	get height(): number {
		return this.native.getHeight();
	}

	get bounds(): CoordinateBounds {
		const bounds = this.native.getBounds();
		return {
			southwest: {
				lat: bounds.southwest.latitude,
				lng: bounds.southwest.longitude,
			},
			northeast: {
				lat: bounds.northeast.latitude,
				lng: bounds.northeast.longitude,
			},
		};
	}

	get tappable(): boolean {
		return this.native.isClickable();
	}

	set tappable(value) {
		this.native.setClickable(value);
	}

	get bearing(): number {
		return this.native.getBearing();
	}

	set bearing(value) {
		this.native.setBearing(value);
	}

	_image: ImageSource;
	get image(): ImageSource {
		return this._image;
	}
}

export class Poi implements IPoi {
	_native: com.google.android.gms.maps.model.PointOfInterest;

	static fromNative(nativePoi: com.google.android.gms.maps.model.PointOfInterest) {
		if (nativePoi instanceof com.google.android.gms.maps.model.PointOfInterest) {
			const poi = new Poi();
			poi._native = nativePoi;
			return poi;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get coordinate(): Coordinate {
		const coord = this.native.latLng;
		return {
			lat: coord.latitude,
			lng: coord.longitude,
		};
	}

	get name(): string {
		return this.native.name;
	}

	get placeId(): string {
		return this.native.placeId;
	}
}

export class TileOverlay implements Partial<ITileOverlay> {
	_native: com.google.android.gms.maps.model.TileOverlay;

	static fromNative(nativeOverlay: com.google.android.gms.maps.model.TileOverlay) {
		if (nativeOverlay instanceof com.google.android.gms.maps.model.TileOverlay) {
			const overlay = new TileOverlay();
			overlay._native = nativeOverlay;
			return overlay;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get fadeIn(): boolean {
		return this.native.getFadeIn();
	}

	set fadeIn(value) {
		this.native.setFadeIn(value);
	}

	get transparency(): number {
		return this.native.getTransparency();
	}

	set transparency(value) {
		this.native.setTransparency(value);
	}

	get visible(): boolean {
		return this.native.isVisible();
	}

	set visible(value) {
		this.native.setVisible(value);
	}

	get zIndex(): number {
		return this.native.getZIndex();
	}

	set zIndex(value) {
		this.native.setZIndex(value);
	}

	clearTileCache() {
		this.native.clearTileCache();
	}
}

export class Tile {
	_native: com.google.android.gms.maps.model.Tile;
	static _NONE;

	static get NONE() {
		if (!this._NONE) {
			this._NONE = Tile.fromNative(com.google.android.gms.maps.model.TileProvider.NO_TILE);
		}
		return this._NONE;
	}

	static fromNative(nativeTile: com.google.android.gms.maps.model.Tile) {
		if (nativeTile instanceof com.google.android.gms.maps.model.Tile) {
			const tileTile = new Tile();
			tileTile._native = nativeTile;
			return tileTile;
		}
		return null;
	}

	static fromImageSource(source: ImageSource): Tile | null {
		if (source instanceof ImageSource && source.android) {
			return Tile.fromNative((org as any).nativescript.plugins.google_maps.GoogleMaps.bitmapToTile(source.android));
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class TileProvider implements ITileProvider {
	_native: com.google.android.gms.maps.model.TileProvider;
	_callback: (x: number, y: number, zoom: number) => Tile;

	constructor(callback: (x: number, y: number, zoom: number) => Tile) {
		if (typeof callback === 'function') {
			this._callback = callback;
			const ref = new WeakRef(this);
			this._native = new com.google.android.gms.maps.model.TileProvider(<any>{
				getTile(x: number, y: number, zoom: number): com.google.android.gms.maps.model.Tile {
					const owner = ref.get();
					if (owner) {
						return owner._callback(x, y, zoom)?.native || null;
					}
					return null;
				},
			});
		}
	}

	static fromNative(nativeTileProvider: com.google.android.gms.maps.model.TileProvider) {
		if (nativeTileProvider instanceof com.google.android.gms.maps.model.TileProvider) {
			const tileTileProvider = new TileProvider(null);
			tileTileProvider._native = nativeTileProvider;
			return tileTileProvider;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class UrlTileProvider extends TileProvider {
	_native: com.google.android.gms.maps.model.UrlTileProvider;

	// @ts-ignore
	_callback: (x: number, y: number, zoom: number) => string;

	constructor(callback: (x: number, y: number, zoom: number) => string, size = 256) {
		super(null);
		this._callback = callback;
		const ref = new WeakRef(this);
		const provider = (<any>com).google.android.gms.maps.model.UrlTileProvider.extend(<com.google.android.gms.maps.model.UrlTileProvider>{
			getTileUrl(x: number, y: number, zoom: number): java.net.URL {
				const owner = ref.get();
				if (owner) {
					return new java.net.URL(owner._callback(x, y, zoom) || null);
				}
				return null;
			},
		});
		this._native = new provider(size, size);
	}

	get native() {
		return this._native;
	}
}

export class Projection implements IProjection {
	_native: com.google.android.gms.maps.Projection;

	static fromNative(nativeProjection: com.google.android.gms.maps.Projection) {
		if (nativeProjection instanceof com.google.android.gms.maps.Projection) {
			const projection = new Projection();
			projection._native = nativeProjection;
			return projection;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	coordinateForPoint(point: { x: number; y: number }): Coordinate {
		const location = this.native.fromScreenLocation(new android.graphics.Point(point.x, point.y));
		return {
			lat: location.latitude,
			lng: location.longitude,
		};
	}

	visibleRegion(): VisibleRegion {
		return VisibleRegion.fromNative(this.native.getVisibleRegion());
	}

	pointForCoordinate(coordinate: Coordinate): { x: number; y: number } {
		const point = this.native.toScreenLocation(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		return { x: point.x, y: point.y };
	}

	containsCoordinate(coordinate: Coordinate): boolean {
		const visibleRegion = this.native.getVisibleRegion();
		if (visibleRegion) {
			return visibleRegion?.latLngBounds?.contains?.(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		}
		return false;
	}
}

export class VisibleRegion implements IVisibleRegion {
	_native: com.google.android.gms.maps.model.VisibleRegion;

	static fromNative(nativeVisibleRegion: com.google.android.gms.maps.model.VisibleRegion) {
		if (nativeVisibleRegion instanceof com.google.android.gms.maps.model.VisibleRegion) {
			const region = new VisibleRegion();
			region._native = nativeVisibleRegion;
			return region;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get farLeft(): Coordinate {
		return {
			lat: this.native.farLeft.latitude,
			lng: this.native.farLeft.longitude,
		};
	}

	get farRight(): Coordinate {
		return {
			lat: this.native.farRight.latitude,
			lng: this.native.farRight.longitude,
		};
	}

	get nearLeft(): Coordinate {
		return {
			lat: this.native.nearLeft.latitude,
			lng: this.native.nearLeft.longitude,
		};
	}

	get nearRight(): Coordinate {
		return {
			lat: this.native.nearRight.latitude,
			lng: this.native.nearRight.longitude,
		};
	}
}

export class Cap implements ICap {
	_native: com.google.android.gms.maps.model.Cap;

	static fromNative(nativeCap: com.google.android.gms.maps.model.Cap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.Cap) {
			const cap = new Cap();
			cap._native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class ButtCap extends Cap {
	_native: com.google.android.gms.maps.model.ButtCap;

	constructor();
	constructor(nativeCap: com.google.android.gms.maps.model.ButtCap);
	constructor(nativeCap?: com.google.android.gms.maps.model.ButtCap) {
		super();
		this._native = nativeCap || new com.google.android.gms.maps.model.ButtCap();
	}

	static fromNative(nativeCap: com.google.android.gms.maps.model.ButtCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.ButtCap) {
			return new ButtCap(nativeCap);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class RoundCap extends Cap {
	_native: com.google.android.gms.maps.model.RoundCap;

	constructor();
	constructor(nativeCap: com.google.android.gms.maps.model.RoundCap);
	constructor(nativeCap?: com.google.android.gms.maps.model.RoundCap) {
		super();
		this._native = nativeCap || new com.google.android.gms.maps.model.RoundCap();
	}

	static fromNative(nativeCap: com.google.android.gms.maps.model.RoundCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.RoundCap) {
			return new RoundCap(nativeCap);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class SquareCap extends Cap {
	_native: com.google.android.gms.maps.model.SquareCap;

	constructor();
	constructor(nativeCap: com.google.android.gms.maps.model.SquareCap);
	constructor(nativeCap?: com.google.android.gms.maps.model.SquareCap) {
		super();
		this._native = nativeCap || new com.google.android.gms.maps.model.SquareCap();
	}

	static fromNative(nativeCap: com.google.android.gms.maps.model.SquareCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.SquareCap) {
			return new SquareCap(nativeCap);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class CustomCap extends Cap {
	_native: com.google.android.gms.maps.model.CustomCap;

	constructor(image: ImageSource, refWidth?: number);
	constructor(nativeCap: com.google.android.gms.maps.model.CustomCap);
	constructor(nativeCapOrImage: com.google.android.gms.maps.model.CustomCap | ImageSource, refWidth?: number) {
		super();
		if (nativeCapOrImage instanceof com.google.android.gms.maps.model.CustomCap) {
			this._native = nativeCapOrImage;
		} else {
			if (typeof refWidth === 'number') {
				this._native = new com.google.android.gms.maps.model.CustomCap(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(nativeCapOrImage.android), refWidth);
			} else if (nativeCapOrImage) {
				this._native = new com.google.android.gms.maps.model.CustomCap(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(nativeCapOrImage.android));
			}
		}
	}

	static fromNative(nativeCap: com.google.android.gms.maps.model.CustomCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.CustomCap) {
			return new CustomCap(nativeCap);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class PatternItem implements IPatternItem {
	_native: com.google.android.gms.maps.model.PatternItem;

	static fromNative(nativePattern: com.google.android.gms.maps.model.PatternItem) {
		if (nativePattern instanceof com.google.android.gms.maps.model.PatternItem) {
			const pattern = new PatternItem();
			pattern._native = nativePattern;
			return pattern;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class Dash extends PatternItem {
	_native: com.google.android.gms.maps.model.Dash;

	constructor(length: number) {
		super();
		this._native = new com.google.android.gms.maps.model.Dash(Utils.layout.toDevicePixels(length));
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class Gap extends PatternItem {
	_native: com.google.android.gms.maps.model.Gap;

	constructor(length: number) {
		super();
		this._native = new com.google.android.gms.maps.model.Gap(Utils.layout.toDevicePixels(length));
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class Dot extends PatternItem {
	_native: com.google.android.gms.maps.model.Dot;

	constructor() {
		super();
		this._native = new com.google.android.gms.maps.model.Dot();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export { MapType, JointType };
