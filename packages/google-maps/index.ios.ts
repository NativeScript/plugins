import { Color, EventData, ImageSource, Utils, View } from '@nativescript/core';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
import { ActiveBuildingEvent, ActiveLevelEvent, CameraPositionEvent, CameraPositionStartEvent, CircleOptions, Coordinate, CoordinateBounds, GroundOverlayOptions, GroundOverlayTapEvent, ICameraPosition, ICameraUpdate, ICircle, IGoogleMap, IGroundOverlay, IIndoorBuilding, IIndoorLevel, IMarker, InfoWindowEvent, IPatternItem, IPoi, IPolygon, IPolyline, IProjection, ITileOverlay, ITileProvider, IUISettings, IVisibleRegion, MapTapEvent, MarkerDragEvent, MarkerInfoEvent, MarkerOptions, MarkerTapEvent, PoiTapEvent, PolygonOptions, PolylineOptions, Style, TileOverlayOptions } from '.';
import { bearingProperty, JointType, latProperty, lngProperty, MapViewBase, tiltProperty, zoomProperty } from './common';
import { deserialize, intoNativeCircleOptions, intoNativeGroundOverlayOptions, intoNativeMarkerOptions, intoNativePolygonOptions, intoNativePolylineOptions, serialize } from './utils';

export class CameraUpdate implements ICameraUpdate {
	#native: GMSCameraUpdate;

	static fromNative(nativeUpdate: GMSCameraUpdate) {
		if (nativeUpdate instanceof GMSCameraUpdate) {
			const update = new CameraUpdate();
			update.#native = nativeUpdate;
			return update;
		}
		return null;
	}

	static fromCoordinate(coordinate: Coordinate, zoom?: number) {
		if (typeof zoom === 'number') {
			return CameraUpdate.fromNative(GMSCameraUpdate.setTargetZoom(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng), zoom));
		} else {
			return CameraUpdate.fromNative(GMSCameraUpdate.setTarget(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng)));
		}
	}

	static fromCameraPosition(position: CameraPosition) {
		return CameraUpdate.fromNative(GMSCameraUpdate.setCamera(position.native));
	}

	static zoomIn() {
		return CameraUpdate.fromNative(GMSCameraUpdate.zoomIn());
	}

	static zoomOut() {
		return CameraUpdate.fromNative(GMSCameraUpdate.zoomOut());
	}

	static zoomTo(value: number) {
		return CameraUpdate.fromNative(GMSCameraUpdate.zoomTo(value));
	}

	static zoomBy(amount: number, point?: { x: number; y: number }) {
		if (typeof point?.x === 'number' && typeof point.y === 'number') {
			return CameraUpdate.fromNative(GMSCameraUpdate.zoomByAtPoint(amount, CGPointMake(point.x, point.y)));
		} else {
			return CameraUpdate.fromNative(GMSCameraUpdate.zoomBy(amount));
		}
	}

	static scrollBy(x: number, y: number) {
		return CameraUpdate.fromNative(GMSCameraUpdate.scrollByXY(x, y));
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class CameraPosition implements ICameraPosition {
	#native: GMSCameraPosition;

	constructor(target: Coordinate, zoom: number, bearing?: number, tilt?: number) {
		if (target && typeof zoom === 'number') {
			if (arguments.length === 2) {
				this.#native = GMSCameraPosition.cameraWithLatitudeLongitudeZoom(target.lat, target.lng, zoom);
			} else {
				if (typeof bearing === 'number' && typeof tilt === 'number') {
					this.#native = GMSCameraPosition.cameraWithLatitudeLongitudeZoomBearingViewingAngle(target.lat, target.lng, zoom, bearing, tilt);
				} else {
					const native = GMSCameraPosition.cameraWithLatitudeLongitudeZoom(target.lat, target.lng, zoom);

					this.#native = GMSCameraPosition.cameraWithTargetZoomBearingViewingAngle(native.target, native.zoom, bearing ?? native.bearing, tilt ?? native.viewingAngle);
				}
			}
		}
	}

	static fromNative(nativePosition: GMSCameraPosition) {
		if (nativePosition instanceof GMSCameraPosition) {
			const position = new CameraPosition(null, null);
			position.#native = nativePosition;
			return position;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get bearing(): number {
		return this.native.bearing;
	}

	set bearing(value) {
		this.#native = GMSCameraPosition.cameraWithTargetZoomBearingViewingAngle(this.native.target, this.native.zoom, value, this.native.viewingAngle);
	}

	get target(): Coordinate {
		return {
			lat: this.native.target.latitude,
			lng: this.native.target.longitude,
		};
	}

	set target(value) {
		this.#native = GMSCameraPosition.cameraWithTargetZoomBearingViewingAngle(CLLocationCoordinate2DMake(value.lat, value.lng), this.native.zoom, this.native.bearing, this.native.viewingAngle);
	}

	get tilt(): number {
		return this.native.viewingAngle;
	}

	set tilt(value) {
		this.#native = GMSCameraPosition.cameraWithTargetZoomBearingViewingAngle(this.native.target, this.native.zoom, this.native.bearing, value);
	}

	get zoom(): number {
		return this.native.zoom;
	}

	set zoom(value) {
		this.#native = GMSCameraPosition.cameraWithTargetZoomBearingViewingAngle(this.native.target, value, this.native.bearing, this.native.viewingAngle);
	}
}

@ObjCClass(GMSMapViewDelegate)
@NativeClass
class GMSMapViewDelegateImpl extends NSObject implements GMSMapViewDelegate {
	_owner: WeakRef<MapView>;
	_pendingSnapshotResolveQueue: any[];
	_pendingSnapshotRejectQueue: any[];

	static initWithOwner(owner: WeakRef<MapView>): GMSMapViewDelegateImpl {
		const delegate = <GMSMapViewDelegateImpl>GMSMapViewDelegateImpl.new();
		delegate._owner = owner;
		delegate._pendingSnapshotResolveQueue = [];
		delegate._pendingSnapshotRejectQueue = [];
		return delegate;
	}

	didTapMyLocationButtonForMapView(mapView: GMSMapView): boolean {
		this._owner?.get?.().notify?.({
			eventName: MapView.myLocationButtonTapEvent,
			object: this._owner?.get?.(),
		});
		return true;
	}

	mapViewDidBeginDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify?.(<MarkerDragEvent>{
			eventName: MapView.markerDragStartEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidChangeCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void {
		this._owner?.get?.().notify?.(<CameraPositionEvent>{
			eventName: MapView.cameraPositionEvent,
			state: 'moving',
			object: this._owner?.get?.(),
			cameraPosition: CameraPosition.fromNative(position),
		});
	}

	mapViewDidCloseInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify(<InfoWindowEvent>{
			eventName: MapView.infoWindowCloseEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidDragMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify(<MarkerDragEvent>{
			eventName: MapView.markerDraggingEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidEndDraggingMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify(<MarkerDragEvent>{
			eventName: MapView.markerDragEndEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidFinishTileRendering(mapView: GMSMapView): void {
		this._owner?.get?.().notify({
			eventName: MapView.tileRenderingEndEvent,
			object: this._owner?.get?.(),
		});
	}

	mapViewDidLongPressAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void {
		this._owner?.get?.().notify(<EventData & MapTapEvent>{
			eventName: MapView.mapLongPressEvent,
			object: this._owner?.get?.(),
			coordinate: {
				lat: coordinate.latitude,
				lng: coordinate.longitude,
			},
		});
	}

	mapViewDidLongPressInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify(<InfoWindowEvent>{
			eventName: MapView.infoWindowLongPressEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidStartTileRendering(mapView: GMSMapView): void {
		this._owner?.get?.().notify({
			eventName: MapView.tileRenderingStartEvent,
			object: this._owner?.get?.(),
		});
	}

	mapViewDidTapAtCoordinate(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void {
		this._owner?.get?.().notify(<EventData & MapTapEvent>{
			eventName: MapView.mapTapEvent,
			object: this._owner?.get?.(),
			coordinate: {
				lat: coordinate.latitude,
				lng: coordinate.longitude,
			},
		});
	}

	mapViewDidTapInfoWindowOfMarker(mapView: GMSMapView, marker: GMSMarker): void {
		this._owner?.get?.().notify(<InfoWindowEvent>{
			eventName: MapView.infoWindowTapEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
	}

	mapViewDidTapMarker(mapView: GMSMapView, marker: GMSMarker): boolean {
		this._owner?.get?.().notify(<EventData & MarkerTapEvent>{
			eventName: MapView.markerTapEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
		});
		return false;
	}

	mapViewDidTapMyLocation(mapView: GMSMapView, location: CLLocationCoordinate2D): void {
		this._owner?.get?.().notify(<MapTapEvent>{
			eventName: MapView.markerTapEvent,
			object: this._owner?.get?.(),
			coordinate: {
				lat: location.latitude,
				lng: location.longitude,
			},
		});
	}

	mapViewDidTapOverlay(mapView: GMSMapView, overlay: GMSOverlay): void {
		if (overlay instanceof GMSGroundOverlay) {
			this._owner?.get?.().notify?.(<GroundOverlayTapEvent>{
				eventName: MapView.groundOverlayTapEvent,
				object: this._owner?.get?.(),
				groundOverlay: GroundOverlay.fromNative(overlay),
			});
		}
	}

	mapViewDidTapPOIWithPlaceIDNameLocation(mapView: GMSMapView, placeID: string, name: string, location: CLLocationCoordinate2D): void {
		this._owner?.get?.().notify?.(<PoiTapEvent>{
			eventName: MapView.poiTapEvent,
			object: this._owner?.get?.(),
			poi: Poi.fromNative(placeID, name, location),
		});
	}

	mapViewIdleAtCameraPosition(mapView: GMSMapView, position: GMSCameraPosition): void {
		this._owner?.get?.().notify?.(<CameraPositionEvent>{
			eventName: MapView.cameraPositionEvent,
			state: 'idle',
			object: this._owner?.get?.(),
			cameraPosition: CameraPosition.fromNative(position),
		});
	}

	mapViewMarkerInfoContents(mapView: GMSMapView, marker: GMSMarker): UIView {
		const event = <MarkerInfoEvent>{
			eventName: MapView.markerInfoContentsEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
			view: null,
		};
		this._owner?.get?.().notify?.(event);

		if (event.view instanceof View) {
			return event.view.ios;
		}
		return null;
	}

	mapViewMarkerInfoWindow(mapView: GMSMapView, marker: GMSMarker): UIView {
		const event = <MarkerInfoEvent>{
			eventName: MapView.markerInfoWindowEvent,
			object: this._owner?.get?.(),
			marker: Marker.fromNative(marker),
			view: null,
		};
		this._owner?.get?.().notify?.(event);

		if (event.view instanceof View) {
			return event.view.ios;
		}
		return null;
	}

	mapViewSnapshotReady(mapView: GMSMapView): void {
		if (this._pendingSnapshotResolveQueue.length) {
			try {
				const format = UIGraphicsImageRendererFormat.defaultFormat();
				format.scale = UIScreen.mainScreen.scale;
				const renderer = UIGraphicsImageRenderer.alloc().initWithSizeFormat(mapView.frame.size, format);

				const image = renderer.imageWithActions((ctx) => {
					mapView.layer.renderInContext(ctx.CGContext);
				});
				const next = this._pendingSnapshotResolveQueue.shift();
				next(new ImageSource(image));
				this._pendingSnapshotRejectQueue.shift();
			} catch (e) {
				const next = this._pendingSnapshotResolveQueue.shift();
				next(e);
				this._pendingSnapshotResolveQueue.shift();
			}
		}
	}

	mapViewWillMove(mapView: GMSMapView, gesture: boolean): void {
		this._owner?.get?.().notify?.(<CameraPositionStartEvent>{
			eventName: MapView.cameraPositionEvent,
			state: 'start',
			object: this._owner?.get?.(),
			cameraPosition: CameraPosition.fromNative(mapView.camera),
			isGesture: gesture,
		});
	}
}

@ObjCClass(GMSIndoorDisplayDelegate)
@NativeClass
class GMSIndoorDisplayDelegateImpl extends NSObject implements GMSIndoorDisplayDelegate {
	_owner: WeakRef<MapView>;

	static initWithOwner(owner: WeakRef<MapView>): GMSIndoorDisplayDelegateImpl {
		const delegate = <GMSIndoorDisplayDelegateImpl>GMSIndoorDisplayDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	didChangeActiveBuilding(building: GMSIndoorBuilding): void {
		this._owner?.get?.().notify?.(<ActiveBuildingEvent>{
			eventName: MapView.activeBuildingEvent,
			object: this._owner?.get?.(),
			building: IndoorBuilding.fromNative(building),
		});
	}

	didChangeActiveLevel(level: GMSIndoorLevel): void {
		this._owner?.get?.().notify?.(<ActiveLevelEvent>{
			eventName: MapView.activeLevelEvent,
			object: this._owner?.get?.(),
			level: IndoorLevel.fromNative(level),
		});
	}
}

@NativeClass
class GMSSyncTileLayerImpl extends GMSSyncTileLayer {
	_callback: (x: number, y: number, zoom: number) => Tile;

	static initWithCallback(callback: (x: number, y: number, zoom: number) => Tile): GMSSyncTileLayerImpl {
		const delegate = <GMSSyncTileLayerImpl>GMSSyncTileLayerImpl.new();
		delegate._callback = callback;
		return delegate;
	}

	tileForXYZoom(x: number, y: number, zoom: number): UIImage {
		return this._callback(x, y, zoom).native;
	}
}

export class MapView extends MapViewBase {
	nativeView: GMSMapView;
	#delegate: GMSMapViewDelegateImpl;
	#indoorDelegate: GMSIndoorDisplayDelegateImpl;
	static #didInit = false;

	static #init() {
		if (this.#didInit) {
			return;
		}
		const info = NSBundle.mainBundle.pathForResourceOfType('Info', '.plist');
		const dict = NSDictionary.dictionaryWithContentsOfFile(info);
		const APIKey = dict.objectForKey('TNSGoogleMapsAPIKey') as string;
		if (APIKey) {
			GMSServices.provideAPIKey(APIKey);
		} else {
			console.error('Failed to load APIKey');
		}
		this.#didInit = true;
	}

	createNativeView() {
		MapView.#init();
		const nativeView = GMSMapView.mapWithFrameCamera(CGRectZero, null);
		this.#delegate = GMSMapViewDelegateImpl.initWithOwner(new WeakRef(this));
		this.#indoorDelegate = GMSIndoorDisplayDelegateImpl.initWithOwner(new WeakRef(this));
		return nativeView;
	}

	initNativeView(): void {
		super.initNativeView();
		this.nativeView.delegate = this.#delegate;
		this.nativeView.indoorDisplay.delegate = this.#indoorDelegate;
	}

	#isReady = false;
	public onLoaded(): void {
		super.onLoaded();
		if (!this.#isReady) {
			this._updateCamera(this.nativeView, {
				lat: this.lat,
				lng: this.lng,
				bearing: this.bearing,
				tilt: this.tilt,
				zoom: this.zoom,
			});

			this.notify({
				eventName: 'ready',
				object: this,
				map: GoogleMap.fromNative(this.nativeView),
			});
			this.#isReady = true;
		}
	}

	[latProperty.setNative](value) {
		if (this.nativeView) {
			this._updateCamera(this.nativeView, {
				lat: value,
			});
		}
	}

	[lngProperty.setNative](value) {
		if (this.nativeView) {
			this._updateCamera(this.nativeView, {
				lng: value,
			});
		}
	}

	[zoomProperty.setNative](value) {
		if (this.nativeView) {
			this._updateCamera(this.nativeView, {
				zoom: value,
			});
		}
	}

	[tiltProperty.setNative](value) {
		if (this.nativeView) {
			this._updateCamera(this.nativeView, {
				tilt: value,
			});
		}
	}

	[bearingProperty.setNative](value) {
		if (this.nativeView) {
			this._updateCamera(this.nativeView, {
				bearing: value,
			});
		}
	}

	_updateCamera(
		map: GMSMapView,
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
			const position = CameraPosition.fromNative(map.camera);

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

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}
}

export class IndoorLevel implements IIndoorLevel {
	#native: GMSIndoorLevel;

	static fromNative(nativeIndoorLevel: GMSIndoorLevel) {
		if (nativeIndoorLevel instanceof GMSIndoorLevel) {
			const indoorLevel = new IndoorLevel();
			indoorLevel.#native = nativeIndoorLevel;
			return indoorLevel;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get name(): string {
		return this.native.name;
	}

	get shortName(): string {
		return this.native.shortName;
	}
}

export class IndoorBuilding implements IIndoorBuilding {
	#native: GMSIndoorBuilding;

	static fromNative(nativeIndoorBuilding: GMSIndoorBuilding) {
		if (nativeIndoorBuilding instanceof GMSIndoorBuilding) {
			const indoorBuilding = new IndoorBuilding();
			indoorBuilding.#native = nativeIndoorBuilding;
			return indoorBuilding;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get defaultLevelIndex(): number {
		return this.native.defaultLevelIndex;
	}

	get levels(): IndoorLevel[] {
		const result: IndoorLevel[] = [];
		const levels = this.native.levels;
		const count = levels.count;
		for (let i = 0; i < count; i++) {
			result.push(IndoorLevel.fromNative(levels.objectAtIndex(i)));
		}

		return result;
	}

	get underground(): boolean {
		return this.native.underground;
	}
}

export class UISettings implements IUISettings {
	#native: GMSUISettings;

	static fromNative(nativeUiSettings: GMSUISettings) {
		if (nativeUiSettings instanceof GMSUISettings) {
			const settings = new UISettings();
			settings.#native = nativeUiSettings;
			return settings;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	mapToolbarEnabled: boolean;
	zoomControlsEnabled: boolean;

	get zoomGesturesEnabled(): boolean {
		return this.native.zoomGestures;
	}

	set zoomGesturesEnabled(value) {
		this.native.zoomGestures = value;
	}

	get tiltGesturesEnabled(): boolean {
		return this.native.tiltGestures;
	}

	set tiltGesturesEnabled(value) {
		this.native.tiltGestures = value;
	}

	setAllGesturesEnabled(value: boolean): void {
		this.native.setAllGesturesEnabled(value);
	}

	get compassEnabled(): boolean {
		return this.native.compassButton;
	}

	set compassEnabled(value) {
		this.native.compassButton = value;
	}

	get scrollGesturesEnabledDuringRotateOrZoom(): boolean {
		return this.native.allowScrollGesturesDuringRotateOrZoom;
	}

	set scrollGesturesEnabledDuringRotateOrZoom(value) {
		this.native.allowScrollGesturesDuringRotateOrZoom = value;
	}

	get rotateGesturesEnabled(): boolean {
		return this.native.rotateGestures;
	}

	set rotateGesturesEnabled(value) {
		this.native.rotateGestures = value;
	}

	get myLocationButtonEnabled(): boolean {
		return this.native.myLocationButton;
	}

	set myLocationButtonEnabled(value) {
		this.native.myLocationButton = value;
	}

	get indoorLevelPickerEnabled(): boolean {
		return this.native.indoorPicker;
	}

	set indoorLevelPickerEnabled(value) {
		this.native.indoorPicker = value;
	}

	get scrollGesturesEnabled(): boolean {
		return this.native.scrollGestures;
	}

	set scrollGesturesEnabled(value) {
		this.native.scrollGestures = value;
	}
}

export class GoogleMap implements IGoogleMap {
	#native: GMSMapView;

	static fromNative(nativeMap: GMSMapView) {
		if (nativeMap instanceof GMSMapView) {
			const map = new GoogleMap();
			map.#native = nativeMap;
			return map;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get buildingsEnabled(): boolean {
		return this.native.buildingsEnabled;
	}

	set buildingsEnabled(value) {
		this.native.buildingsEnabled = value;
	}

	get cameraPosition(): CameraPosition {
		return CameraPosition.fromNative(this.native.camera);
	}

	set cameraPosition(value) {
		this.native.camera = value.native;
	}

	get maxZoomLevel(): number {
		return this.native.maxZoom;
	}

	set maxZoomLevel(value) {
		this.native.setMinZoomMaxZoom(this.native.minZoom, value);
	}

	get minZoomLevel(): number {
		return this.native.minZoom;
	}

	set minZoomLevel(value) {
		this.native.setMinZoomMaxZoom(value, this.native.maxZoom);
	}

	get myLocationEnabled(): boolean {
		return this.native.myLocationEnabled;
	}

	set myLocationEnabled(value) {
		this.native.myLocationEnabled = value;
	}

	get trafficEnabled(): boolean {
		return this.native.trafficEnabled;
	}

	set trafficEnabled(value) {
		this.native.trafficEnabled = value;
	}

	get uiSettings(): IUISettings {
		return UISettings.fromNative(this.native.settings);
	}

	#mapStyle: Style;
	get mapStyle() {
		return this.#mapStyle;
	}

	set mapStyle(value) {
		try {
			const style = JSON.stringify(value);
			this.native.mapStyle = GMSMapStyle.styleWithJSONStringError(style);
		} catch (e) {
			console.error(e);
		}
	}

	clear() {
		this.native.clear();
	}

	addMarker(options: MarkerOptions) {
		const marker = Marker.fromNative(intoNativeMarkerOptions(options));
		marker.native.map = this.native;
		return marker;
	}

	removeMarker(marker: Marker) {
		marker.native.map = null;
	}

	addCircle(options: CircleOptions): Circle {
		const circle = Circle.fromNative(intoNativeCircleOptions(options));
		circle.native.map = this.native;
		return circle;
	}

	addGroundOverlay(options: GroundOverlayOptions): GroundOverlay {
		const groundOverlay = GroundOverlay.fromNative(intoNativeGroundOverlayOptions(options));
		groundOverlay.native.map = this.native;
		return groundOverlay;
	}

	addPolygon(options: PolygonOptions): Polygon {
		const polygon = Polygon.fromNative(intoNativePolygonOptions(options));
		polygon.native.map = this.native;
		return polygon;
	}

	addPolyline(options: PolylineOptions): Polyline {
		const polyline = Polyline.fromNative(intoNativePolylineOptions(options));
		polyline.native.map = this.native;
		return polyline;
	}

	animateCamera(update: CameraUpdate) {
		this.native.animateWithCameraUpdate(update.native);
	}

	removeCircle(circle: Circle) {
		circle.native.map = null;
	}

	removeGroundOverlay(groundOverlay: GroundOverlay) {
		groundOverlay.native.map = null;
	}

	removePolygon(polygon: Polygon) {
		polygon.native.map = null;
	}

	removePolyline(polyline: Polyline) {
		polyline.native.map = null;
	}

	get projection(): Projection {
		return Projection.fromNative(this.native.projection);
	}

	snapshot(): Promise<ImageSource> {
		return new Promise((resolve, reject) => {
			const delegate = <GMSMapViewDelegateImpl>this.native.delegate;
			delegate._pendingSnapshotRejectQueue.push(reject);
			delegate._pendingSnapshotResolveQueue.push(resolve);
			this.native.snapshotViewAfterScreenUpdates(true);
		});
	}

	addTileOverlay(options: TileOverlayOptions): TileOverlay {
		if (options?.tileProvider?.native) {
			if (options?.tileProvider?.native instanceof GMSTileLayer) {
				const overlay = TileOverlay.fromNative(options?.tileProvider?.native);
				overlay.zIndex = options.zIndex;
				overlay.fadeIn = options.fadeIn;
				options.tileProvider.native.map = this.native;
				return overlay;
			}
		}
		return null;
	}

	removeTileOverlay(overlay: TileOverlay) {
		overlay.native.map = null;
	}
}

abstract class OverLayBase {
	abstract readonly native;
	get userData(): { [key: string]: any } {
		if (this.native.userData instanceof NSDictionary) {
			return deserialize(this.native.userData);
		}

		return {};
	}

	set userData(data: { [key: string]: any }) {
		if (data && typeof data === 'object') {
			this.native.userData = serialize(data);
		} else {
			this.native.userData = null;
		}
	}
}

export class Marker extends OverLayBase implements IMarker {
	#native: GMSMarker;
	#color = new Color('red');
	static fromNative(nativeMarker: GMSMarker) {
		if (nativeMarker instanceof GMSMarker) {
			const marker = new Marker();
			marker.#native = nativeMarker;
			marker.#icon = new ImageSource();
			return marker;
		}
		return null;
	}

	get color(): string | Color {
		return this.#color;
	}

	set color(value: string | Color) {
		if (value instanceof Color) {
			this.#color = value;
			this.native.icon = GMSMarker.markerImageWithColor(value.ios);
		} else if (typeof value === 'string') {
			this.#color = new Color(value);
			this.native.icon = GMSMarker.markerImageWithColor(this.#color.ios);
		}
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	#icon: ImageSource = null;
	get icon(): any {
		if (this.#icon?.ios === this.native.icon) {
			return this.#icon;
		} else if (this.native.icon) {
			this.#icon.setNativeSource(this.native.icon);
		}
		return this.#icon;
	}

	set icon(value) {
		if (value instanceof UIImage) {
			this.native.icon = value;
			this.#icon.setNativeSource(value);
		} else if (value instanceof ImageSource) {
			this.#icon = value;
			this.native.icon = value.ios;
		}
	}

	get draggable(): boolean {
		return this.native.draggable;
	}

	set draggable(value: boolean) {
		this.native.draggable = value;
	}

	get position() {
		return {
			lat: this.native.position.latitude,
			lng: this.native.position.longitude,
		};
	}

	set position(latlng: { lat: number; lng: number }) {
		this.native.position = CLLocationCoordinate2DMake(latlng.lat, latlng.lng);
	}

	get title() {
		return this.native.title;
	}

	set title(value: string) {
		this.native.title = value;
	}

	get snippet() {
		return this.native.snippet;
	}

	set snippet(value: string) {
		this.native.snippet = value;
	}

	get rotation(): number {
		return this.native.rotation;
	}

	set rotation(value: number) {
		this.native.rotation = value;
	}

	get flat(): boolean {
		return this.native.flat;
	}

	set flat(value: boolean) {
		this.native.flat = value;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}

	get zIndex() {
		return this.native.zIndex;
	}

	hideInfoWindow() {
		const map = this.native.map;
		if (map?.selectedMarker === this.native) {
			map.selectedMarker = null;
		}
	}

	showInfoWindow() {
		const map = this.native.map;
		if (map) {
			map.selectedMarker = this.native;
		}
	}
}

export class Circle extends OverLayBase implements ICircle {
	#native: GMSCircle;

	static fromNative(nativeCircle: GMSCircle) {
		if (nativeCircle instanceof GMSCircle) {
			const circle = new Circle();
			circle.#native = nativeCircle;
			return circle;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get radius(): number {
		return this.native.radius;
	}

	set radius(value) {
		this.native.radius = value;
	}

	get strokeColor(): Color {
		return Color.fromIosColor(this.native.strokeColor);
	}

	set strokeColor(value: string | Color) {
		if (value instanceof Color) {
			this.native.strokeColor = value.ios;
		} else if (typeof value === 'string') {
			this.native.strokeColor = new Color(value).ios;
		}
	}

	get center(): Coordinate {
		const center = this.native.position;
		return {
			lat: center.latitude,
			lng: center.longitude,
		};
	}

	set center(value) {
		this.native.position = CLLocationCoordinate2DMake(value.lat, value.lng);
	}

	get fillColor(): Color {
		return Color.fromIosColor(this.native.fillColor);
	}

	set fillColor(value: string | Color) {
		if (value instanceof Color) {
			this.native.fillColor = value.ios;
		} else if (typeof value === 'string') {
			this.native.fillColor = new Color(value).ios;
		}
	}

	get tappable(): boolean {
		return this.native.tappable;
	}

	set tappable(value) {
		this.native.tappable = value;
	}

	get strokeWidth(): number {
		return this.native.strokeWidth;
	}

	set strokeWidth(value) {
		this.native.strokeWidth = value;
	}

	get zIndex(): number {
		return this.native.zIndex;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}

	strokePattern: any;
	visible: boolean;
}

export class Polygon extends OverLayBase implements IPolygon {
	#native: GMSPolygon;

	static fromNative(nativePolygon: GMSPolygon) {
		if (nativePolygon instanceof GMSPolygon) {
			const polygon = new Polygon();
			polygon.#native = nativePolygon;
			return polygon;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get points(): Coordinate[] {
		const count = this.native.path.count();
		const points: Coordinate[] = [];
		for (let i = 0; i < count; i++) {
			const point = this.native.path.coordinateAtIndex(i);
			points.push({
				lat: point.latitude,
				lng: point.longitude,
			});
		}
		return points;
	}

	set points(value) {
		const points = GMSMutablePath.path();
		if (Array.isArray(value)) {
			value.forEach((point) => {
				points.addCoordinate(CLLocationCoordinate2DMake(point.lat, point.lng));
			});
		}

		this.native.path = points;
	}

	get holes(): Coordinate[] {
		const count = this.native.holes.count;
		const holes: Coordinate[] = [];
		for (let i = 0; i < count; i++) {
			const hole = this.native.holes.objectAtIndex(i);
			const coord = hole.coordinateAtIndex(0);
			holes.push({
				lat: coord.latitude,
				lng: coord.longitude,
			});
		}
		return holes;
	}

	set holes(value) {
		const holes = [];
		if (Array.isArray(value)) {
			value.forEach((hole) => {
				const path = GMSMutablePath.path();
				path.addCoordinate(CLLocationCoordinate2DMake(hole.lat, hole.lng));
				holes.push(path);
			});
		}
		this.native.holes = holes as any;
	}

	get tappable(): boolean {
		return this.native.tappable;
	}

	set tappable(value) {
		this.native.tappable = value;
	}

	get strokeWidth(): number {
		return this.native.strokeWidth;
	}

	set strokeWidth(value) {
		this.native.strokeWidth = value;
	}

	get strokeColor(): Color {
		return Color.fromIosColor(this.native.strokeColor);
	}

	set strokeColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.strokeColor = value.ios;
		} else if (typeof value === 'string') {
			this.native.strokeColor = new Color(value).ios;
		}
	}

	strokePattern: any[];

	get zIndex(): number {
		return this.native.zIndex;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}

	get geodesic(): boolean {
		return this.native.geodesic;
	}

	set geodesic(value) {
		this.native.geodesic = value;
	}

	strokeJointType: JointType;

	visible: boolean;

	get fillColor(): Color {
		return Color.fromIosColor(this.native.fillColor);
	}

	set fillColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.fillColor = value.ios;
		} else if (typeof value === 'string') {
			this.native.fillColor = new Color(value).ios;
		}
	}
}

export class Polyline extends OverLayBase implements IPolyline {
	#native: GMSPolyline;

	static fromNative(nativePolyline: GMSPolyline) {
		if (nativePolyline instanceof GMSPolyline) {
			const polyline = new Polyline();
			polyline.#native = nativePolyline;
			return polyline;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get width(): number {
		return this.native.strokeWidth;
	}

	set width(value) {
		this.native.strokeWidth = value;
	}

	get points(): Coordinate[] {
		const count = this.native.path.count();
		const points: Coordinate[] = [];
		for (let i = 0; i < count; i++) {
			const point = this.native.path.coordinateAtIndex(i);
			points.push({
				lat: point.latitude,
				lng: point.longitude,
			});
		}
		return points;
	}

	set points(value) {
		const points = GMSMutablePath.path();
		if (Array.isArray(value)) {
			value.forEach((point) => {
				points.addCoordinate(CLLocationCoordinate2DMake(point.lat, point.lng));
			});
		}

		this.native.path = points;
	}

	get tappable(): boolean {
		return this.native.tappable;
	}

	set tappable(value) {
		this.native.tappable = value;
	}

	get geodesic(): boolean {
		return this.native.geodesic;
	}

	set geodesic(value) {
		this.native.geodesic = value;
	}

	visible: boolean;

	get zIndex(): number {
		return this.native.zIndex;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}

	jointType: JointType;
	pattern: any[];

	get color(): Color {
		return Color.fromIosColor(this.native.strokeColor);
	}

	set color(value: string | Color) {
		if (value instanceof Color) {
			this.native.strokeColor = value.ios;
		} else if (typeof value === 'string') {
			this.native.strokeColor = new Color(value).ios;
		}
	}

	startCap: any;
	endCap: any;
}

export class GroundOverlay extends OverLayBase implements IGroundOverlay {
	#native: GMSGroundOverlay;

	constructor() {
		super();
		this.#image = new ImageSource();
	}

	static fromNative(nativeGroundOverlayOptions: GMSGroundOverlay) {
		if (nativeGroundOverlayOptions instanceof GMSGroundOverlay) {
			const groundOverlayOptions = new GroundOverlay();
			groundOverlayOptions.#native = nativeGroundOverlayOptions;
			return groundOverlayOptions;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	width: number;

	get zIndex(): number {
		return this.native.zIndex;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}

	visible: boolean;
	transparency: number;

	get position(): Coordinate {
		return {
			lat: this.native.position.latitude,
			lng: this.native.position.longitude,
		};
	}

	set position(value) {
		this.native.position = CLLocationCoordinate2DMake(value.lat, value.lng);
	}

	height: number;

	get anchorU(): number {
		return this.native.anchor.x;
	}

	set anchorU(value) {
		const anchor = this.native.anchor;
		this.native.anchor = CGPointMake(value, anchor.y);
	}

	get anchorV(): number {
		return this.native.anchor.y;
	}

	set anchorV(value) {
		const anchor = this.native.anchor;
		this.native.anchor = CGPointMake(anchor.x, value);
	}

	get bounds(): CoordinateBounds {
		return {
			southwest: {
				lat: this.native.bounds.southWest.latitude,
				lng: this.native.bounds.southWest.longitude,
			},
			northeast: {
				lat: this.native.bounds.northEast.latitude,
				lng: this.native.bounds.northEast.longitude,
			},
		};
	}

	get tappable(): boolean {
		return this.native.tappable;
	}

	set tappable(value) {
		this.native.tappable = value;
	}

	get bearing(): number {
		return this.native.bearing;
	}

	set bearing(value) {
		this.native.bearing = value;
	}

	#image: ImageSource;
	get image(): ImageSource {
		return this.#image;
	}

	set image(value) {
		if (value instanceof UIImage) {
			this.native.icon = value;
			this.#image.setNativeSource(value);
		} else if (value instanceof ImageSource) {
			this.#image = value;
			this.native.icon = value.ios;
		}
	}
}

export class Poi implements IPoi {
	#name: string;
	#placeId: string;
	#coord: CLLocationCoordinate2D;

	static fromNative(placeID: string, name: string, location: CLLocationCoordinate2D) {
		if (arguments.length === 3) {
			const poi = new Poi();
			poi.#placeId = placeID;
			poi.#name = name;
			poi.#coord = location;
		}
		return null;
	}

	get native() {
		return undefined;
	}

	get ios() {
		return this.native;
	}

	get coordinate(): Coordinate {
		return {
			lat: this.#coord.latitude,
			lng: this.#coord.longitude,
		};
	}

	get name(): string {
		return this.#name;
	}

	get placeId(): string {
		return this.#placeId;
	}
}

export class TileOverlay implements Partial<ITileOverlay> {
	#native: GMSTileLayer;

	static fromNative(nativeOverlay: GMSTileLayer) {
		if (nativeOverlay instanceof GMSTileLayer) {
			const overlay = new TileOverlay();
			overlay.#native = nativeOverlay;
			return overlay;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get fadeIn(): boolean {
		return this.native.fadeIn;
	}

	set fadeIn(value) {
		this.native.fadeIn = value;
	}

	get zIndex(): number {
		return this.native.zIndex;
	}

	set zIndex(value) {
		this.native.zIndex = value;
	}
}

export class Tile {
	#native: UIImage;
	static #NONE;

	static get NONE() {
		if (!this.#NONE) {
			this.#NONE = Tile.fromNative(kGMSTileLayerNoTile);
		}
		return this.#NONE;
	}

	static fromNative(nativeTile: UIImage) {
		if (nativeTile instanceof UIImage) {
			const tileTile = new Tile();
			tileTile.#native = nativeTile;
			return tileTile;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class TileProvider implements ITileProvider {
	#native: GMSTileLayer;

	constructor(callback: (x: number, y: number, zoom: number) => Tile) {
		if (typeof callback === 'function') {
			this.#native = GMSSyncTileLayerImpl.initWithCallback(callback);
		}
	}

	static fromNative(nativeTileProvider: GMSSyncTileLayer) {
		if (nativeTileProvider instanceof GMSSyncTileLayer) {
			const tileTileProvider = new TileProvider(null);
			tileTileProvider.#native = nativeTileProvider;
			return tileTileProvider;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class UrlTileProvider extends TileProvider {
	#native: GMSURLTileLayer;

	constructor(callback: (x: number, y: number, zoom: number) => string, size: number = 256) {
		super(null);
		const ref = new WeakRef(this);
		this.#native = GMSURLTileLayer.tileLayerWithURLConstructor((x, y, zoom) => {
			return NSURL.URLWithString(callback(x, y, zoom));
		});
		this.#native.tileSize = size;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class Projection implements IProjection {
	#native: GMSProjection;

	static fromNative(nativeProjection: GMSProjection) {
		if (nativeProjection instanceof GMSProjection) {
			const projection = new Projection();
			projection.#native = nativeProjection;
			return projection;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	coordinateForPoint(point: { x: number; y: number }): Coordinate {
		const location = this.native.coordinateForPoint(CGPointMake(point.x, point.y));
		return {
			lat: location.latitude,
			lng: location.longitude,
		};
	}

	visibleRegion(): VisibleRegion {
		return VisibleRegion.fromNative(this.native.visibleRegion());
	}

	pointForCoordinate(coordinate: Coordinate): { x: number; y: number } {
		const point = this.native.pointForCoordinate(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng));
		return { x: point.x, y: point.y };
	}
}

export class VisibleRegion implements IVisibleRegion {
	#native: GMSVisibleRegion;

	static fromNative(nativeVisibleRegion: GMSVisibleRegion) {
		if (nativeVisibleRegion instanceof GMSVisibleRegion) {
			const region = new VisibleRegion();
			region.#native = nativeVisibleRegion;
			return region;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
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

export class PatternItem implements IPatternItem {}
