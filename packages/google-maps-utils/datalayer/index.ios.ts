import { Color, encoding } from '@nativescript/core';
import { Coordinate, GoogleMap } from '@nativescript/google-maps';
import { intoColor } from '../utils/common';
import { DataLayerBase, FeatureBase, FeatureTapEventData, GeometryBase, GeometryCoordinates, IGeometryStyle, normalizeGeometryStyle } from './common';

export * from './common';

let UNIQUE_STYLE_ID = 0;

function intoJsonData(json: object | string): NSData {
	const string = typeof json === 'string' ? json : JSON.stringify(json);
	return new NSString({ UTF8String: string }).dataUsingEncoding(encoding.UTF_8);
}

function gmsPathToCoordinates(path: GMSPath): Coordinate[] {
	const coordinates: Coordinate[] = [];
	if (path) {
		const count = path.count();
		for (let i = 0; i < count; i++) {
			const coordinate = path.coordinateAtIndex(i);
			coordinates.push({
				lat: coordinate.latitude,
				lng: coordinate.longitude,
			});
		}
	}
	return coordinates;
}

function nsDictionaryToObject(dictionary: NSDictionary<string, NSObject>): Record<string, any> {
	const object = {};
	if (dictionary) {
		const keys = dictionary.allKeys;
		for (let i = 0; i < keys.count; i++) {
			const key = keys.objectAtIndex(i);
			object[`${key}`] = dictionary.objectForKey(key);
		}
	}
	return object;
}

function gmsPathsEqual(a: GMSPath, b: GMSPath): boolean {
	if (!a || !b) {
		return false;
	}
	const count = a.count();
	if (count !== b.count()) {
		return false;
	}
	for (let i = 0; i < count; i++) {
		const coordinateA = a.coordinateAtIndex(i);
		const coordinateB = b.coordinateAtIndex(i);
		if (coordinateA.latitude !== coordinateB.latitude || coordinateA.longitude !== coordinateB.longitude) {
			return false;
		}
	}
	return true;
}

/**
 * Whether a parsed GMU geometry contains the given coordinate as a point.
 * Geometry collections (Multi geometries, GeometryCollection) are searched
 * recursively. The renderer copies the same coordinate values into the markers
 * it creates, so exact equality is safe here.
 */
function geometryMatchesCoordinate(geometry: GMUGeometry, coordinate: { latitude: number; longitude: number }): boolean {
	if (!geometry) {
		return false;
	}
	if (geometry instanceof GMUPoint) {
		return geometry.coordinate.latitude === coordinate.latitude && geometry.coordinate.longitude === coordinate.longitude;
	}
	if (geometry instanceof GMUGeometryCollection) {
		const geometries = geometry.geometries;
		for (let i = 0; i < geometries.count; i++) {
			if (geometryMatchesCoordinate(geometries.objectAtIndex(i), coordinate)) {
				return true;
			}
		}
	}
	return false;
}

/**
 * Whether a parsed GMU geometry contains the given path as a line string or as
 * the outer ring of a polygon. Geometry collections are searched recursively.
 */
function geometryMatchesPath(geometry: GMUGeometry, path: GMSPath): boolean {
	if (!geometry || !path) {
		return false;
	}
	if (geometry instanceof GMULineString) {
		return gmsPathsEqual(geometry.path, path);
	}
	if (geometry instanceof GMUPolygon) {
		return geometry.paths.count > 0 && gmsPathsEqual(geometry.paths.objectAtIndex(0), path);
	}
	if (geometry instanceof GMUGeometryCollection) {
		const geometries = geometry.geometries;
		for (let i = 0; i < geometries.count; i++) {
			if (geometryMatchesPath(geometries.objectAtIndex(i), path)) {
				return true;
			}
		}
	}
	return false;
}

export class GeometryStyle implements IGeometryStyle {
	#strokeColor: Color;
	#fillColor: Color;

	width: number;
	scale: number;
	heading: number;
	anchor: [number, number];
	iconUrl: string | null;
	title: string | null;

	constructor(styles?: Partial<IGeometryStyle>) {
		const normalized = normalizeGeometryStyle(styles);
		if (normalized) {
			Object.assign(this, normalized);
		}
	}

	static fromNative(nativeStyle: GMUStyle): GeometryStyle {
		if (nativeStyle instanceof GMUStyle) {
			const style = new GeometryStyle();
			if (nativeStyle.hasStroke && nativeStyle.strokeColor) {
				style.strokeColor = Color.fromIosColor(nativeStyle.strokeColor);
			}
			if (nativeStyle.hasFill && nativeStyle.fillColor) {
				style.fillColor = Color.fromIosColor(nativeStyle.fillColor);
			}
			style.width = nativeStyle.width;
			style.scale = nativeStyle.scale;
			style.heading = nativeStyle.heading;
			style.anchor = [nativeStyle.anchor?.x ?? 0, nativeStyle.anchor?.y ?? 0];
			style.iconUrl = nativeStyle.iconUrl ?? null;
			style.title = nativeStyle.title ?? null;
			return style;
		}
		return null;
	}

	get strokeColor(): Color {
		return this.#strokeColor;
	}
	set strokeColor(color: Color | string) {
		this.#strokeColor = color == null ? null : intoColor(color);
	}

	get fillColor(): Color {
		return this.#fillColor;
	}
	set fillColor(color: Color | string) {
		this.#fillColor = color == null ? null : intoColor(color);
	}

	/**
	 * A `GMUStyle` built from the current property values. `GMUStyle` is
	 * immutable, so a new instance is created on each access. Delve into it
	 * for anything the shared API does not cover.
	 */
	get native(): GMUStyle {
		return new GMUStyle({
			styleID: `google-maps-utils-style-${UNIQUE_STYLE_ID++}`,
			strokeColor: this.#strokeColor?.ios ?? null,
			fillColor: this.#fillColor?.ios ?? null,
			width: this.width ?? 1,
			scale: this.scale ?? 1,
			heading: this.heading ?? 0,
			anchor: CGPointMake(this.anchor?.[0] ?? 0, this.anchor?.[1] ?? 0),
			iconUrl: this.iconUrl ?? null,
			title: this.title ?? null,
			hasFill: !!this.#fillColor,
			hasStroke: !!this.#strokeColor,
		} as any);
	}

	get ios() {
		return this.native;
	}
}

/**
 * Chains in front of the map's existing `GMSMapViewDelegate` while a data layer
 * is on the map. Feature taps are matched against the layer's parsed features;
 * unmatched taps and every other delegate message are forwarded to the previous
 * delegate, so the map events from `@nativescript/google-maps` keep working.
 */
@ObjCClass(GMSMapViewDelegate)
@NativeClass
class GMUFeatureTapDelegate extends NSObject implements GMSMapViewDelegate {
	private _owner: WeakRef<FeatureTapLayer>;
	private _next: GMSMapViewDelegate;

	static initWithOwnerNext(owner: WeakRef<FeatureTapLayer>, next: GMSMapViewDelegate): GMUFeatureTapDelegate {
		const delegate = <GMUFeatureTapDelegate>GMUFeatureTapDelegate.new();
		delegate._owner = owner;
		delegate._next = next;
		return delegate;
	}

	get next(): GMSMapViewDelegate {
		return this._next;
	}

	respondsToSelector(selector: string): boolean {
		if (super.respondsToSelector(selector)) {
			return true;
		}
		return this._next?.respondsToSelector?.(selector) ?? false;
	}

	forwardingTargetForSelector(selector: string): any {
		if (this._next?.respondsToSelector?.(selector)) {
			return this._next;
		}
		return super.forwardingTargetForSelector(selector);
	}

	mapViewDidTapMarker(mapView: GMSMapView, marker: GMSMarker): boolean {
		if (this._owner?.get?.()._handleMarkerTap(marker)) {
			return true;
		}
		if (this._next?.respondsToSelector?.('mapView:didTapMarker:')) {
			return this._next.mapViewDidTapMarker?.(mapView, marker) ?? false;
		}
		return false;
	}

	mapViewDidTapOverlay(mapView: GMSMapView, overlay: GMSOverlay): void {
		if (this._owner?.get?.()._handleOverlayTap(overlay)) {
			return;
		}
		if (this._next?.respondsToSelector?.('mapView:didTapOverlay:')) {
			this._next.mapViewDidTapOverlay?.(mapView, overlay);
		}
	}
}

/**
 * Shared plumbing for the `featureTap` event on iOS. GMU has no tap concept of
 * its own, so while a layer is on the map a {@link GMUFeatureTapDelegate} is
 * chained in front of the map's delegate and taps are matched back to the
 * parsed features by geometry.
 */
abstract class FeatureTapLayer extends DataLayerBase<GMUGeometryRenderer> {
	#map: GMSMapView;
	#tapDelegate: GMUFeatureTapDelegate;
	#tapActive = false;

	abstract _handleMarkerTap(marker: GMSMarker): boolean;

	abstract _handleOverlayTap(overlay: GMSOverlay): boolean;

	_setMap(map: GoogleMap) {
		this.#map = map?.native ?? null;
	}

	get _tapActive(): boolean {
		return this.#tapActive;
	}

	_installTapHandler() {
		if (!this.#map || this.#tapDelegate) {
			return;
		}
		this.#tapDelegate = GMUFeatureTapDelegate.initWithOwnerNext(new WeakRef(this), this.#map.delegate);
		this.#map.delegate = this.#tapDelegate;
		this.#tapActive = true;
	}

	_uninstallTapHandler() {
		this.#tapActive = false;
		if (this.#tapDelegate) {
			// Only unlink when we are still the current delegate; if another layer
			// (or the app) chained on top of us, this node stays as a forwarder
			// until the ones above it are removed.
			if (this.#map && this.#map.delegate === this.#tapDelegate) {
				this.#map.delegate = this.#tapDelegate.next;
			}
			this.#tapDelegate = null;
		}
	}
}

export class GeoJsonLayer extends FeatureTapLayer {
	#native: GMUGeometryRenderer;
	#parser: GMUGeoJSONParser;
	style: GeometryStyle;

	constructor(map: GoogleMap, geoJson: object | string, styles?: Partial<IGeometryStyle>) {
		super();
		this._setMap(map);
		if (map && geoJson) {
			this.style = new GeometryStyle(styles);

			this.#parser = new GMUGeoJSONParser({ data: intoJsonData(geoJson) });
			this.#parser.parse();

			if (styles) {
				const nativeStyle = this.style.native;
				const features = this.#parser.features;
				for (let i = 0; i < features.count; i++) {
					features.objectAtIndex(i).style = nativeStyle;
				}
			}

			this.#native = new GMUGeometryRenderer({ map: map.native, geometries: this.#parser.features as any });
		}
	}

	static fromNative(nativeGeoJsonLayer: GMUGeometryRenderer) {
		if (nativeGeoJsonLayer instanceof GMUGeometryRenderer) {
			const geoJsonLayer = new GeoJsonLayer(null, null);
			geoJsonLayer.#native = nativeGeoJsonLayer;
			return geoJsonLayer;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get features(): GeoJsonFeature[] {
		const features: GeoJsonFeature[] = [];
		if (this.#parser) {
			const containers = this.#parser.features;
			for (let i = 0; i < containers.count; i++) {
				const feature = GeoJsonFeature.fromNative(containers.objectAtIndex(i));
				if (feature) {
					features.push(feature);
				}
			}
		}
		return features;
	}

	addLayerToMap() {
		this.native.render();
		this._installTapHandler();
	}

	removeLayerFromMap() {
		this.native.clear();
		this._uninstallTapHandler();
	}

	_handleMarkerTap(marker: GMSMarker): boolean {
		if (!this._tapActive || !this.#parser) {
			return false;
		}
		const containers = this.#parser.features;
		for (let i = 0; i < containers.count; i++) {
			const container = containers.objectAtIndex(i);
			if (geometryMatchesCoordinate(container.geometry, marker.position)) {
				const feature = GeoJsonFeature.fromNative(container);
				if (feature) {
					this.notify(<FeatureTapEventData>{
						eventName: DataLayerBase.featureTapEvent,
						object: this,
						feature,
					});
					return true;
				}
			}
		}
		return false;
	}

	_handleOverlayTap(overlay: GMSOverlay): boolean {
		if (!this._tapActive || !this.#parser) {
			return false;
		}
		let path: GMSPath = null;
		if (overlay instanceof GMSPolyline || overlay instanceof GMSPolygon) {
			path = overlay.path;
		}
		if (!path) {
			return false;
		}
		const containers = this.#parser.features;
		for (let i = 0; i < containers.count; i++) {
			const container = containers.objectAtIndex(i);
			if (geometryMatchesPath(container.geometry, path)) {
				const feature = GeoJsonFeature.fromNative(container);
				if (feature) {
					this.notify(<FeatureTapEventData>{
						eventName: DataLayerBase.featureTapEvent,
						object: this,
						feature,
					});
					return true;
				}
			}
		}
		return false;
	}
}

export class KmlLayer extends FeatureTapLayer {
	#native: GMUGeometryRenderer;
	#parser: GMUKMLParser;

	constructor(map: GoogleMap, kml: string) {
		super();
		this._setMap(map);
		if (map && kml) {
			this.#parser = new GMUKMLParser({ data: intoJsonData(kml) });
			this.#parser.parse();

			this.#native = new GMUGeometryRenderer({ map: map.native, geometries: this.#parser.placemarks as any });
		}
	}

	static fromNative(nativeKmlLayer: GMUGeometryRenderer) {
		if (nativeKmlLayer instanceof GMUGeometryRenderer) {
			const kmlLayer = new KmlLayer(null, null);
			kmlLayer.#native = nativeKmlLayer;
			return kmlLayer;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get features(): KmlFeature[] {
		const features: KmlFeature[] = [];
		if (this.#parser) {
			const placemarks = this.#parser.placemarks;
			for (let i = 0; i < placemarks.count; i++) {
				const feature = KmlFeature.fromNative(placemarks.objectAtIndex(i));
				if (feature) {
					features.push(feature);
				}
			}
		}
		return features;
	}

	hasPlacemarks(): boolean {
		return this.features.length > 0;
	}

	hasContainers(): boolean {
		// KML containers are not exposed by the iOS GMU library.
		return false;
	}

	addLayerToMap() {
		this.native.render();
		this._installTapHandler();
	}

	removeLayerFromMap() {
		this.native.clear();
		this._uninstallTapHandler();
	}

	_handleMarkerTap(marker: GMSMarker): boolean {
		if (!this._tapActive || !this.#parser) {
			return false;
		}
		const placemarks = this.#parser.placemarks;
		for (let i = 0; i < placemarks.count; i++) {
			const placemark = placemarks.objectAtIndex(i);
			if (geometryMatchesCoordinate(placemark.geometry, marker.position)) {
				const feature = KmlFeature.fromNative(placemark);
				if (feature) {
					this.notify(<FeatureTapEventData>{
						eventName: DataLayerBase.featureTapEvent,
						object: this,
						feature,
					});
					return true;
				}
			}
		}
		return false;
	}

	_handleOverlayTap(overlay: GMSOverlay): boolean {
		if (!this._tapActive || !this.#parser) {
			return false;
		}
		let path: GMSPath = null;
		if (overlay instanceof GMSPolyline || overlay instanceof GMSPolygon) {
			path = overlay.path;
		}
		if (!path) {
			return false;
		}
		const placemarks = this.#parser.placemarks;
		for (let i = 0; i < placemarks.count; i++) {
			const placemark = placemarks.objectAtIndex(i);
			if (geometryMatchesPath(placemark.geometry, path)) {
				const feature = KmlFeature.fromNative(placemark);
				if (feature) {
					this.notify(<FeatureTapEventData>{
						eventName: DataLayerBase.featureTapEvent,
						object: this,
						feature,
					});
					return true;
				}
			}
		}
		return false;
	}
}

export class GeoJsonFeature extends FeatureBase<GMUFeature> {
	#native: GMUFeature;

	static fromNative(nativeFeature: GMUFeature) {
		if (nativeFeature instanceof GMUFeature) {
			const feature = new GeoJsonFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get id(): string | null {
		return this.native.identifier ?? null;
	}

	get properties(): Record<string, any> {
		return nsDictionaryToObject(this.native.properties);
	}
	set properties(_: Record<string, any>) {
		console.warn('[google-maps-utils] GeoJsonFeature.properties is read-only on iOS (GMUFeature.properties cannot be modified).');
	}

	get geometry(): Geometry | null {
		return Geometry.fromNative(this.native.geometry);
	}

	get style(): GeometryStyle {
		return GeometryStyle.fromNative(this.native.style);
	}
	set style(style: GeometryStyle) {
		this.native.style = style?.native ?? null;
	}
}

export class KmlFeature extends FeatureBase<GMUPlacemark> {
	#native: GMUPlacemark;

	static fromNative(nativeFeature: GMUPlacemark) {
		if (nativeFeature instanceof GMUPlacemark) {
			const feature = new KmlFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get id(): string | null {
		// GMUPlacemark exposes no identifier.
		return null;
	}

	/**
	 * Mirrors the `name` / `description` properties the Android KML parser
	 * exposes for a placemark.
	 */
	get properties(): Record<string, any> {
		return {
			name: this.native.title ?? null,
			description: this.native.snippet ?? null,
		};
	}
	set properties(_: Record<string, any>) {
		console.warn('[google-maps-utils] KmlFeature.properties is read-only on iOS.');
	}

	get geometry(): Geometry | null {
		return Geometry.fromNative(this.native.geometry);
	}

	/**
	 * The KML style url this placemark references, if any.
	 */
	get styleId(): string | null {
		return this.native.styleUrl ?? null;
	}

	get style(): GeometryStyle {
		return GeometryStyle.fromNative(this.native.style);
	}
	set style(style: GeometryStyle) {
		this.native.style = style?.native ?? null;
	}
}

export class Geometry extends GeometryBase<GMUGeometry> {
	#native: GMUGeometry;

	static fromNative(nativeGeometry: GMUGeometry) {
		if (nativeGeometry) {
			const geometry = new Geometry();
			geometry.#native = nativeGeometry;
			return geometry;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get type(): string {
		return this.#native?.type ?? null;
	}

	get coordinates(): GeometryCoordinates {
		const native = this.#native;
		if (!native) {
			return null;
		}

		if (native instanceof GMUPoint) {
			return {
				lat: native.coordinate.latitude,
				lng: native.coordinate.longitude,
			};
		}

		if (native instanceof GMULineString) {
			return gmsPathToCoordinates(native.path);
		}

		if (native instanceof GMUPolygon) {
			const rings: Coordinate[][] = [];
			const paths = native.paths;
			for (let i = 0; i < paths.count; i++) {
				rings.push(gmsPathToCoordinates(paths.objectAtIndex(i)));
			}
			return rings;
		}

		return null;
	}

	get geometries(): Geometry[] | null {
		if (this.#native instanceof GMUGeometryCollection) {
			const geometries: Geometry[] = [];
			const nativeGeometries = this.#native.geometries;
			for (let i = 0; i < nativeGeometries.count; i++) {
				const geometry = Geometry.fromNative(nativeGeometries.objectAtIndex(i));
				if (geometry) {
					geometries.push(geometry);
				}
			}
			return geometries;
		}
		return null;
	}
}
