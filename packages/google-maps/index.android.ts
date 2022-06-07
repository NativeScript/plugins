import { Application, Color, EventData, ImageSource, Utils, View } from '@nativescript/core';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
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
import { bearingProperty, JointType, latProperty, lngProperty, MapType, MapViewBase, tiltProperty, zoomProperty } from './common';

import { intoNativeMarkerOptions, intoNativeCircleOptions, intoNativePolygonOptions, intoNativeGroundOverlayOptions, intoNativePolylineOptions, hueFromColor, intoNativeJointType, toJointType, intoNativeTileOverlayOptions, deserialize, serialize } from './utils';

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

export class MapView extends MapViewBase {
	mapView: com.google.android.gms.maps.MapView;
	lifeCycleHooks;
	createdBundle = null;
	savedBundle = null;
	#listener: com.google.android.gms.maps.OnMapReadyCallback;
	_map: com.google.android.gms.maps.GoogleMap;
	constructor() {
		super();
		const ref = new WeakRef(this);
		this.lifeCycleHooks = new android.app.Application.ActivityLifecycleCallbacks(<any>{
			onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void {
				if (param0 !== Application.android.startActivity) {
					return;
				}
				const owner = ref?.get?.();
				if (owner) {
					owner.createdBundle = param1;
					if (owner.mapView) {
						owner.mapView.onCreate(param1);
					}
				}
			},
			onActivityStarted(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (owner?.mapView) {
					owner.mapView.onStart();
				}
			},
			onActivityResumed(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (owner?.mapView) {
					owner.mapView.onResume();
				}
			},
			onActivityPaused(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (owner?.mapView) {
					owner.mapView.onPause();
				}
			},
			onActivityStopped(param0: android.app.Activity): void {
				const owner = ref?.get?.();
				if (owner?.mapView) {
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
					if (owner.mapView) {
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
					if (owner.mapView) {
						owner.mapView.onDestroy();
					}
				}
			},
		});
		Utils.android.getApplication().registerActivityLifecycleCallbacks(this.lifeCycleHooks);
	}

	createNativeView() {
		const ref = new WeakRef(this);
		this.#listener = new com.google.android.gms.maps.OnMapReadyCallback({
			onMapReady(map: com.google.android.gms.maps.GoogleMap): void {
				const owner = ref.get?.();
				container.addView(nativeView as any);
				(<any>org).nativescript.plugins.google_maps.GoogleMaps.registerMapListeners(
					map,
					new (<any>org).nativescript.plugins.google_maps.GoogleMaps.Callback({
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
								case 'click':
									ref?.get?.().notify(<MarkerTapEvent>{
										eventName: MapView.markerTapEvent,
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
								ref?.get?.().notify({
									eventName: MapView.myLocationButtonTapEvent,
									object: ref?.get?.(),
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
										if (!info.view.parent && !info.view?.nativeView) {
											owner._addView(info.view);
										}
										if (info.view.nativeView && !(<any>marker)._view) {
											(<any>marker)._view = new android.widget.RelativeLayout(owner._context);
										}
										const parent = info.view.nativeView?.getParent?.();
										if (info.view.nativeView && parent !== (<any>marker)._view) {
											if (parent && parent.removeView) {
												parent.removeView(info.view.nativeView);
											}
											const container: android.widget.RelativeLayout = (<any>marker)._view;
											container.addView(info.view.nativeView);
										}
										return (<any>marker)?._view ?? null;
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
					})
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
		nativeView.getMapAsync(this.#listener);
		this.mapView = nativeView;
		nativeView.onCreate(this.createdBundle);
		nativeView.onResume();
		return container;
	}

	initNativeView(): void {
		super.initNativeView();
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

	_updateCamera(
		map,
		owner: {
			lat?;
			lng?;
			zoom?;
			tilt?;
			bearing?;
		}
	) {
		const googleMap = GoogleMap.fromNative(map);
		if (googleMap) {
			const position = CameraPosition.fromNative(map.getCameraPosition());

			let changed = false;
			if (!isNullOrUndefined(owner.lat)) {
				position.target = {
					lat: typeof owner.lat === 'string' ? parseFloat(owner.lat) : owner.lat,
					lng: position.target.lng,
				};
				changed = true;
			}

			if (!isNullOrUndefined(owner.lng)) {
				position.target = {
					lat: position.target.lat,
					lng: typeof owner.lng === 'string' ? parseFloat(owner.lng) : owner.lng,
				};
				changed = true;
			}

			if (!isNullOrUndefined(owner.zoom)) {
				position.zoom = typeof owner.zoom === 'string' ? parseFloat(owner.zoom) : owner.zoom;
				changed = true;
			}

			if (!isNullOrUndefined(owner.tilt)) {
				position.tilt = typeof owner.tilt === 'string' ? parseFloat(owner.tilt) : owner.tilt;
				changed = true;
			}

			if (!isNullOrUndefined(owner.bearing)) {
				position.bearing = typeof owner.bearing === 'string' ? parseFloat(owner.bearing) : owner.bearing;
				changed = true;
			}

			if (changed) {
				googleMap.cameraPosition = position;
			}
		}
	}
}

export class IndoorLevel implements IIndoorLevel {
	#native: com.google.android.gms.maps.model.IndoorLevel;

	static fromNative(nativeIndoorLevel: com.google.android.gms.maps.model.IndoorLevel) {
		if (nativeIndoorLevel instanceof com.google.android.gms.maps.model.IndoorLevel) {
			const indoorLevel = new IndoorLevel();
			indoorLevel.#native = nativeIndoorLevel;
			return indoorLevel;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.android.gms.maps.model.IndoorBuilding;

	static fromNative(nativeIndoorBuilding: com.google.android.gms.maps.model.IndoorBuilding) {
		if (nativeIndoorBuilding instanceof com.google.android.gms.maps.model.IndoorBuilding) {
			const indoorBuilding = new IndoorBuilding();
			indoorBuilding.#native = nativeIndoorBuilding;
			return indoorBuilding;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.android.gms.maps.UiSettings;

	static fromNative(nativeUiSettings: com.google.android.gms.maps.UiSettings) {
		if (nativeUiSettings instanceof com.google.android.gms.maps.UiSettings) {
			const settings = new UISettings();
			settings.#native = nativeUiSettings;
			return settings;
		}
		return null;
	}

	get native() {
		return this.#native;
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

	get myLocationButtonEnabled(): boolean {
		return this.native.isMyLocationButtonEnabled();
	}

	get indoorLevelPickerEnabled(): boolean {
		return this.native.isIndoorLevelPickerEnabled();
	}

	get scrollGesturesEnabled(): boolean {
		return this.native.isScrollGesturesEnabled();
	}
}

export class GoogleMap implements IGoogleMap {
	#native: com.google.android.gms.maps.GoogleMap;

	static fromNative(nativeMap: com.google.android.gms.maps.GoogleMap) {
		if (nativeMap instanceof com.google.android.gms.maps.GoogleMap) {
			const map = new GoogleMap();
			map.#native = nativeMap;
			return map;
		}
		return null;
	}

	get native() {
		return this.#native;
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

	#mapStyle: Style;
	get mapStyle() {
		return this.#mapStyle;
	}

	set mapStyle(value) {
		try {
			const style = new com.google.android.gms.maps.model.MapStyleOptions(JSON.stringify(value));
			this.native.setMapStyle(style);
		} catch (e) {
			console.error(e);
		}
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
		return Circle.fromNative(this.native.addCircle(intoNativeCircleOptions(options)));
	}

	removeCircle(circle: Circle) {
		circle?.native?.remove?.();
	}

	addPolygon(options: PolygonOptions): Polygon {
		return Polygon.fromNative(this.native.addPolygon(intoNativePolygonOptions(options)));
	}

	removePolygon(polygon: Polygon) {
		polygon?.native?.remove?.();
	}

	addPolyline(options: PolylineOptions): Polyline {
		return Polyline.fromNative(this.native.addPolyline(intoNativePolylineOptions(options)));
	}

	removePolyline(polyline: Polyline) {
		polyline?.native?.remove?.();
	}

	addGroundOverlay(options: GroundOverlayOptions): GroundOverlay {
		return GroundOverlay.fromNative(this.native.addGroundOverlay(intoNativeGroundOverlayOptions(options)));
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
				})
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
	#native: com.google.android.gms.maps.CameraUpdate;

	static fromNative(nativeUpdate: com.google.android.gms.maps.CameraUpdate) {
		if (nativeUpdate instanceof com.google.android.gms.maps.CameraUpdate) {
			const update = new CameraUpdate();
			update.#native = nativeUpdate;
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
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class CameraPosition implements ICameraPosition {
	#native: com.google.android.gms.maps.model.CameraPosition;

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

			this.#native = builder.build();
		}
	}

	static fromNative(nativePosition: com.google.android.gms.maps.model.CameraPosition) {
		if (nativePosition instanceof com.google.android.gms.maps.model.CameraPosition) {
			const position = new CameraPosition(null, null);
			position.#native = nativePosition;
			return position;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get bearing(): number {
		return this.native.bearing;
	}

	set bearing(value) {
		this.#native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, this.native.zoom, this.native.tilt, value);
	}

	get target(): Coordinate {
		return {
			lat: this.native.target.latitude,
			lng: this.native.target.longitude,
		};
	}

	set target(value) {
		this.#native = new com.google.android.gms.maps.model.CameraPosition(new com.google.android.gms.maps.model.LatLng(value.lat, value.lng), this.native.zoom, this.native.tilt, this.native.bearing);
	}

	get tilt(): number {
		return this.native.tilt;
	}

	set tilt(value) {
		this.#native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, this.native.zoom, value, this.native.bearing);
	}

	get zoom(): number {
		return this.native.zoom;
	}

	set zoom(value) {
		this.#native = new com.google.android.gms.maps.model.CameraPosition(this.native.target, value, this.native.tilt, this.native.bearing);
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
	#native: com.google.android.gms.maps.model.Marker;
	#color: Color;
	#icon: ImageSource;

	constructor() {
		super();
		this.#icon = new ImageSource();
		this.#color = new Color('red');
	}

	static fromNative(nativeMarker: com.google.android.gms.maps.model.Marker) {
		if (nativeMarker instanceof com.google.android.gms.maps.model.Marker) {
			const marker = new Marker();
			marker.#native = nativeMarker;
			return marker;
		}
		return null;
	}

	_setIcon(icon) {
		this.#icon = icon;
	}

	_setColor(color) {
		this.#color = color;
	}

	get rotation(): number {
		return this.native.getRotation();
	}

	set rotation(value) {
		this.native.setRotation(value);
	}

	get flat(): boolean {
		return this.native.isFlat();
	}

	set flat(value) {
		this.native.setFlat(value);
	}

	get color(): Color {
		return this.#color;
	}

	set color(value: string | Color) {
		if (value instanceof Color) {
			this.#color = value;
			this.native.setIcon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(this.#color)));
		} else if (typeof value === 'string') {
			this.#color = new Color(value);
			this.native.setIcon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(this.#color)));
		}
	}

	get icon(): any {
		return this.#icon;
	}

	set icon(value) {
		if (value instanceof android.graphics.Bitmap) {
			const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(value);
			this.native.setIcon(desc);
			this.#icon.setNativeSource(value);
		} else if (value instanceof ImageSource) {
			this.#icon = value;
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
		return this.#native;
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
	#native: com.google.android.gms.maps.model.Circle;

	static fromNative(nativeCircle: com.google.android.gms.maps.model.Circle) {
		if (nativeCircle instanceof com.google.android.gms.maps.model.Circle) {
			const circle = new Circle();
			circle.#native = nativeCircle;
			return circle;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.android.gms.maps.model.Polygon;

	static fromNative(nativePolygon: com.google.android.gms.maps.model.Polygon) {
		if (nativePolygon instanceof com.google.android.gms.maps.model.Polygon) {
			const polygon = new Polygon();
			polygon.#native = nativePolygon;
			return polygon;
		}
		return null;
	}

	get native() {
		return this.#native;
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

	get holes(): Coordinate[] {
		const array: androidNative.Array<com.google.android.gms.maps.model.LatLng> = this.native.getHoles().toArray();
		const holes: Coordinate[] = [];
		for (let i = 0; i < array.length; i++) {
			const hole = array[i];
			holes.push({
				lat: hole.latitude,
				lng: hole.longitude,
			});
		}
		return holes;
	}

	set holes(value) {
		if (Array.isArray(value)) {
			const nativeArray = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>();
			value.forEach((hole) => {
				nativeArray.add(new com.google.android.gms.maps.model.LatLng(hole.lat, hole.lng));
			});
			this.native.setHoles(nativeArray);
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
	#native: com.google.android.gms.maps.model.Polyline;

	static fromNative(nativePolyline: com.google.android.gms.maps.model.Polyline) {
		if (nativePolyline instanceof com.google.android.gms.maps.model.Polyline) {
			const polyline = new Polyline();
			polyline.#native = nativePolyline;
			return polyline;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get width(): number {
		return this.native.getWidth();
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
	#native: com.google.android.gms.maps.model.GroundOverlay;

	constructor() {
		super();
		this.#image = new ImageSource();
	}

	static fromNative(nativeGroundOverlayOptions: com.google.android.gms.maps.model.GroundOverlay) {
		if (nativeGroundOverlayOptions instanceof com.google.android.gms.maps.model.GroundOverlay) {
			const groundOverlayOptions = new GroundOverlay();
			groundOverlayOptions.#native = nativeGroundOverlayOptions;
			return groundOverlayOptions;
		}
		return null;
	}

	get native() {
		return this.#native;
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

	#image: ImageSource;
	get image(): ImageSource {
		return this.#image;
	}
}

export class Poi implements IPoi {
	#native: com.google.android.gms.maps.model.PointOfInterest;

	static fromNative(nativePoi: com.google.android.gms.maps.model.PointOfInterest) {
		if (nativePoi instanceof com.google.android.gms.maps.model.PointOfInterest) {
			const poi = new Poi();
			poi.#native = nativePoi;
			return poi;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.android.gms.maps.model.TileOverlay;

	static fromNative(nativeOverlay: com.google.android.gms.maps.model.TileOverlay) {
		if (nativeOverlay instanceof com.google.android.gms.maps.model.TileOverlay) {
			const overlay = new TileOverlay();
			overlay.#native = nativeOverlay;
			return overlay;
		}
		return null;
	}

	get native() {
		return this.#native;
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
}

export class Tile {
	#native: com.google.android.gms.maps.model.Tile;
	static #NONE;

	static get NONE() {
		if (!this.#NONE) {
			this.#NONE = Tile.fromNative(com.google.android.gms.maps.model.TileProvider.NO_TILE);
		}
		return this.#NONE;
	}

	static fromNative(nativeTile: com.google.android.gms.maps.model.Tile) {
		if (nativeTile instanceof com.google.android.gms.maps.model.Tile) {
			const tileTile = new Tile();
			tileTile.#native = nativeTile;
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
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class TileProvider implements ITileProvider {
	#native: com.google.android.gms.maps.model.TileProvider;
	#callback: (x: number, y: number, zoom: number) => Tile;

	constructor(callback: (x: number, y: number, zoom: number) => Tile) {
		if (typeof callback === 'function') {
			this.#callback = callback;
			const ref = new WeakRef(this);
			this.#native = new com.google.android.gms.maps.model.TileProvider(<any>{
				getTile(x: number, y: number, zoom: number): com.google.android.gms.maps.model.Tile {
					const owner = ref.get();
					if (owner) {
						return owner.#callback(x, y, zoom)?.native || null;
					}
					return null;
				},
			});
		}
	}

	static fromNative(nativeTileProvider: com.google.android.gms.maps.model.TileProvider) {
		if (nativeTileProvider instanceof com.google.android.gms.maps.model.TileProvider) {
			const tileTileProvider = new TileProvider(null);
			tileTileProvider.#native = nativeTileProvider;
			return tileTileProvider;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class UrlTileProvider extends TileProvider {
	#native: com.google.android.gms.maps.model.UrlTileProvider;

	#callback: (x: number, y: number, zoom: number) => string;

	constructor(callback: (x: number, y: number, zoom: number) => string, size: number = 256) {
		super(null);
		this.#callback = callback;
		const ref = new WeakRef(this);
		const provider = (<any>com).google.android.gms.maps.model.UrlTileProvider.extend(<com.google.android.gms.maps.model.UrlTileProvider>{
			getTileUrl(x: number, y: number, zoom: number): java.net.URL {
				const owner = ref.get();
				if (owner) {
					return new java.net.URL(owner.#callback(x, y, zoom) || null);
				}
				return null;
			},
		});
		this.#native = new provider(size, size);
	}

	get native() {
		return this.#native;
	}
}

export class Projection implements IProjection {
	#native: com.google.android.gms.maps.Projection;

	static fromNative(nativeProjection: com.google.android.gms.maps.Projection) {
		if (nativeProjection instanceof com.google.android.gms.maps.Projection) {
			const projection = new Projection();
			projection.#native = nativeProjection;
			return projection;
		}
		return null;
	}

	get native() {
		return this.#native;
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
}

export class VisibleRegion implements IVisibleRegion {
	#native: com.google.android.gms.maps.model.VisibleRegion;

	static fromNative(nativeVisibleRegion: com.google.android.gms.maps.model.VisibleRegion) {
		if (nativeVisibleRegion instanceof com.google.android.gms.maps.model.VisibleRegion) {
			const region = new VisibleRegion();
			region.#native = nativeVisibleRegion;
			return region;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.android.gms.maps.model.Cap;

	static fromNative(nativeCap: com.google.android.gms.maps.model.Cap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.Cap) {
			const cap = new Cap();
			cap.#native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class ButtCap extends Cap {
	#native: com.google.android.gms.maps.model.ButtCap;

	static fromNative(nativeCap: com.google.android.gms.maps.model.ButtCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.ButtCap) {
			const cap = new ButtCap();
			cap.#native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class RoundCap extends Cap {
	#native: com.google.android.gms.maps.model.RoundCap;

	static fromNative(nativeCap: com.google.android.gms.maps.model.RoundCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.RoundCap) {
			const cap = new RoundCap();
			cap.#native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class SquareCap extends Cap {
	#native: com.google.android.gms.maps.model.SquareCap;

	static fromNative(nativeCap: com.google.android.gms.maps.model.SquareCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.SquareCap) {
			const cap = new SquareCap();
			cap.#native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class CustomCap extends Cap {
	#native: com.google.android.gms.maps.model.CustomCap;

	constructor(image?: ImageSource, width?: number) {
		super();
		if (typeof width === 'number') {
			this.#native = new com.google.android.gms.maps.model.CustomCap(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(image.android), Utils.layout.toDevicePixels(width));
		} else if (image) {
			this.#native = new com.google.android.gms.maps.model.CustomCap(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(image.android));
		}
	}

	static fromNative(nativeCap: com.google.android.gms.maps.model.CustomCap) {
		if (nativeCap instanceof com.google.android.gms.maps.model.CustomCap) {
			const cap = new CustomCap();
			cap.#native = nativeCap;
			return cap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class PatternItem implements IPatternItem {
	#native: com.google.android.gms.maps.model.PatternItem;

	static fromNative(nativePattern: com.google.android.gms.maps.model.PatternItem) {
		if (nativePattern instanceof com.google.android.gms.maps.model.PatternItem) {
			const pattern = new PatternItem();
			pattern.#native = nativePattern;
			return pattern;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class Dash extends PatternItem {
	#native: com.google.android.gms.maps.model.Dash;

	constructor(length: number) {
		super();
		this.#native = new com.google.android.gms.maps.model.Dash(Utils.layout.toDevicePixels(length));
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class Gap extends PatternItem {
	#native: com.google.android.gms.maps.model.Gap;

	constructor(length: number) {
		super();
		this.#native = new com.google.android.gms.maps.model.Gap(Utils.layout.toDevicePixels(length));
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class Dot extends PatternItem {
	#native: com.google.android.gms.maps.model.Dot;

	constructor(length: number) {
		super();
		this.#native = new com.google.android.gms.maps.model.Dot();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}
