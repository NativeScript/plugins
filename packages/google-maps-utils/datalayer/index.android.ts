import { Color, Utils } from '@nativescript/core';
import { Coordinate, CoordinateBounds, GoogleMap } from '@nativescript/google-maps';
import { addOnMarkerClickListener, addOnPolygonClickListener, addOnPolylineClickListener, attachNativeMapListeners, hasNativeMapListeners, removeOnMarkerClickListener, removeOnPolygonClickListener, removeOnPolylineClickListener } from '@nativescript/google-maps/utils';
import { intoColor } from '../utils/common';
import { DataLayerBase, FeatureBase, FeatureTapEventData, GeometryBase, GeometryCoordinates, GeometryType, IGeometryStyle, normalizeGeometryStyle } from './common';

export * from './common';

function latLngToCoordinate(latLng: com.google.android.gms.maps.model.LatLng): Coordinate {
	return {
		lat: latLng.latitude,
		lng: latLng.longitude,
	};
}

function latLngListToCoordinates(list: java.util.List<com.google.android.gms.maps.model.LatLng>): Coordinate[] {
	const coordinates: Coordinate[] = [];
	if (list) {
		for (let i = 0; i < list.size(); i++) {
			coordinates.push(latLngToCoordinate(list.get(i)));
		}
	}
	return coordinates;
}

function latLngBoundsToCoordinateBounds(bounds: com.google.android.gms.maps.model.LatLngBounds): CoordinateBounds {
	if (!bounds) {
		return null;
	}
	return {
		southwest: { lat: bounds.southwest.latitude, lng: bounds.southwest.longitude },
		northeast: { lat: bounds.northeast.latitude, lng: bounds.northeast.longitude },
	};
}

function propertiesFromKmlContainer(container: com.google.maps.android.data.kml.KmlContainer): Record<string, any> {
	const props = {};
	if (container?.hasProperties()) {
		const iter = container.getProperties().iterator();
		while (iter.hasNext()) {
			const key = iter.next();
			props[key] = container.getProperty(key);
		}
	}
	return props;
}

const COORD_EPSILON = 1e-9;

function coordinatesEqual(a: com.google.android.gms.maps.model.LatLng, b: com.google.android.gms.maps.model.LatLng): boolean {
	return !!a && !!b && Math.abs(a.latitude - b.latitude) < COORD_EPSILON && Math.abs(a.longitude - b.longitude) < COORD_EPSILON;
}

/**
 * Compares two LatLng lists for equality, tolerating a trailing coordinate that
 * duplicates the first (Google Maps closes polygon rings, the parsed geometry may not).
 */
function latLngListsMatch(a: java.util.List<com.google.android.gms.maps.model.LatLng>, b: java.util.List<com.google.android.gms.maps.model.LatLng>): boolean {
	if (!a || !b) {
		return false;
	}
	const size = (list: java.util.List<com.google.android.gms.maps.model.LatLng>) => {
		const n = list.size();
		return n > 1 && coordinatesEqual(list.get(0), list.get(n - 1)) ? n - 1 : n;
	};
	const na = size(a);
	if (na !== size(b)) {
		return false;
	}
	for (let i = 0; i < na; i++) {
		if (!coordinatesEqual(a.get(i), b.get(i))) {
			return false;
		}
	}
	return true;
}

/**
 * The android-maps-utils renderer copies the parsed geometry's coordinates into
 * the markers/polylines/polygons it draws, so a tapped overlay is matched back to
 * its feature by exact coordinate equality (mirrors the iOS implementation).
 * Multi/collection geometries are searched recursively.
 */
function geometryMatchesPoint(geometry: com.google.maps.android.data.Geometry<any>, position: com.google.android.gms.maps.model.LatLng): boolean {
	if (!geometry) {
		return false;
	}
	if (geometry instanceof com.google.maps.android.data.Point) {
		return coordinatesEqual(geometry.getGeometryObject(), position);
	}
	if (geometry instanceof com.google.maps.android.data.MultiGeometry) {
		const children = geometry.getGeometryObject() as java.util.List<com.google.maps.android.data.Geometry<any>>;
		for (let i = 0; i < children.size(); i++) {
			if (geometryMatchesPoint(children.get(i), position)) {
				return true;
			}
		}
	}
	return false;
}

function geometryMatchesLine(geometry: com.google.maps.android.data.Geometry<any>, points: java.util.List<com.google.android.gms.maps.model.LatLng>): boolean {
	if (!geometry) {
		return false;
	}
	if (geometry instanceof com.google.maps.android.data.LineString) {
		return latLngListsMatch(geometry.getGeometryObject() as java.util.List<com.google.android.gms.maps.model.LatLng>, points);
	}
	if (geometry instanceof com.google.maps.android.data.MultiGeometry) {
		const children = geometry.getGeometryObject() as java.util.List<com.google.maps.android.data.Geometry<any>>;
		for (let i = 0; i < children.size(); i++) {
			if (geometryMatchesLine(children.get(i), points)) {
				return true;
			}
		}
	}
	return false;
}

function geometryMatchesPolygon(geometry: com.google.maps.android.data.Geometry<any>, points: java.util.List<com.google.android.gms.maps.model.LatLng>): boolean {
	if (!geometry) {
		return false;
	}
	if (geometry instanceof com.google.maps.android.data.DataPolygon) {
		return latLngListsMatch((geometry as com.google.maps.android.data.DataPolygon<any>).getOuterBoundaryCoordinates(), points);
	}
	if (geometry instanceof com.google.maps.android.data.MultiGeometry) {
		const children = geometry.getGeometryObject() as java.util.List<com.google.maps.android.data.Geometry<any>>;
		for (let i = 0; i < children.size(); i++) {
			if (geometryMatchesPolygon(children.get(i), points)) {
				return true;
			}
		}
	}
	return false;
}

export class GeometryStyle implements IGeometryStyle {
	#polygonStyle: com.google.maps.android.data.geojson.GeoJsonPolygonStyle;
	#lineStringStyle: com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
	#pointStyle: com.google.maps.android.data.geojson.GeoJsonPointStyle;

	// Not backed by the android native styles, stored only so the shared
	// IGeometryStyle contract round-trips.
	scale: number;
	iconUrl: string | null;

	constructor(styles?: Partial<IGeometryStyle>) {
		this.#polygonStyle = new com.google.maps.android.data.geojson.GeoJsonPolygonStyle();
		this.#lineStringStyle = new com.google.maps.android.data.geojson.GeoJsonLineStringStyle();
		this.#pointStyle = new com.google.maps.android.data.geojson.GeoJsonPointStyle();

		const normalized = normalizeGeometryStyle(styles);
		if (normalized) {
			for (const key of Object.keys(normalized)) {
				if (normalized[key] != null) {
					this[key] = normalized[key];
				}
			}
		}
	}

	static fromNative(nativeStyles: { polygonStyle: com.google.maps.android.data.geojson.GeoJsonPolygonStyle; lineStringStyle: com.google.maps.android.data.geojson.GeoJsonLineStringStyle; pointStyle: com.google.maps.android.data.geojson.GeoJsonPointStyle }): GeometryStyle {
		if (nativeStyles && nativeStyles.polygonStyle && nativeStyles.lineStringStyle && nativeStyles.pointStyle) {
			const style = new GeometryStyle();
			style.#polygonStyle = nativeStyles.polygonStyle;
			style.#lineStringStyle = nativeStyles.lineStringStyle;
			style.#pointStyle = nativeStyles.pointStyle;
			return style;
		}
		return null;
	}

	/**
	 * The wrapped native styles. Delve into these for anything the shared
	 * API does not cover.
	 */
	get native() {
		return {
			polygonStyle: this.#polygonStyle,
			lineStringStyle: this.#lineStringStyle,
			pointStyle: this.#pointStyle,
		};
	}

	get android() {
		return this.native;
	}

	get ios() {
		return null;
	}

	get strokeColor(): Color {
		return new Color(this.#polygonStyle.getStrokeColor());
	}
	set strokeColor(color: Color | string) {
		const nativeColor = intoColor(color).android;
		this.#polygonStyle.setStrokeColor(nativeColor);
		this.#lineStringStyle.setColor(nativeColor);
	}

	get fillColor(): Color {
		return new Color(this.#polygonStyle.getFillColor());
	}
	set fillColor(color: Color | string) {
		this.#polygonStyle.setFillColor(intoColor(color).android);
	}

	get width(): number {
		return this.#lineStringStyle.getWidth();
	}
	set width(width: number) {
		this.#lineStringStyle.setWidth(width);
		this.#polygonStyle.setStrokeWidth(width);
	}

	get title(): string {
		return this.#pointStyle.getTitle();
	}
	set title(title: string) {
		this.#pointStyle.setTitle(title);
	}

	get heading(): number {
		return this.#pointStyle.getRotation();
	}
	set heading(rotation: number) {
		this.#pointStyle.setRotation(rotation);
	}

	get anchor(): [number, number] {
		return [this.#pointStyle.getAnchorU(), this.#pointStyle.getAnchorV()];
	}
	set anchor(anchor: [number, number]) {
		this.#pointStyle.setAnchor(anchor?.[0] ?? 0, anchor?.[1] ?? 0);
	}
}

export class GeoJsonLayer extends DataLayerBase<com.google.maps.android.data.geojson.GeoJsonLayer> {
	#native: com.google.maps.android.data.geojson.GeoJsonLayer;
	#map: com.google.android.gms.maps.GoogleMap;
	#markerClickListener: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener;
	#polygonClickListener: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener;
	#polylineClickListener: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener;
	style: GeometryStyle;

	constructor(map: GoogleMap, geoJson: object | string, styles?: Partial<IGeometryStyle>) {
		super();
		if (map && geoJson) {
			this.#map = map.native;
			const json = typeof geoJson === 'string' ? geoJson : JSON.stringify(geoJson);
			this.#native = new com.google.maps.android.data.geojson.GeoJsonLayer(map.native, new org.json.JSONObject(json));

			this.style = GeometryStyle.fromNative({
				polygonStyle: this.#native.getDefaultPolygonStyle(),
				lineStringStyle: this.#native.getDefaultLineStringStyle(),
				pointStyle: this.#native.getDefaultPointStyle(),
			});

			// Google Maps only dispatches polygon/polyline click events for overlays flagged clickable,
			// and the renderer takes that flag from the style. Markers are always clickable. Enable it on
			// the default styles and on each feature's own style (a feature may carry its own) so the
			// featureTap handlers below actually receive polygon/line taps.
			this.#native.getDefaultPolygonStyle().setClickable(true);
			this.#native.getDefaultLineStringStyle().setClickable(true);
			const clickableIter = this.#native.getFeatures().iterator();
			while (clickableIter.hasNext()) {
				const feature = clickableIter.next();
				feature.getPolygonStyle()?.setClickable(true);
				feature.getLineStringStyle()?.setClickable(true);
			}

			const normalized = normalizeGeometryStyle(styles);
			if (normalized) {
				for (const key of Object.keys(normalized)) {
					if (normalized[key] != null) {
						this.style[key] = normalized[key];
					}
				}
			}
		}
	}

	static fromNative(nativeGeoJsonLayer: com.google.maps.android.data.geojson.GeoJsonLayer) {
		if (nativeGeoJsonLayer instanceof com.google.maps.android.data.geojson.GeoJsonLayer) {
			const geoJsonLayer = new GeoJsonLayer(null, null);
			geoJsonLayer.#native = nativeGeoJsonLayer;
			// No map reference, so featureTap wiring is skipped (mirrors the iOS behavior).
			return geoJsonLayer;
		}
		return null;
	}

	#notifyFeature(nativeFeature: com.google.maps.android.data.geojson.GeoJsonFeature) {
		const feature = GeoJsonFeature.fromNative(nativeFeature);
		if (feature) {
			this.notify(<FeatureTapEventData>{
				eventName: DataLayerBase.featureTapEvent,
				object: this,
				feature,
			});
		}
	}

	#eachFeature(match: (feature: com.google.maps.android.data.geojson.GeoJsonFeature) => boolean): boolean {
		if (!this.#native) {
			return false;
		}
		const iter = this.#native.getFeatures().iterator();
		while (iter.hasNext()) {
			if (match(iter.next())) {
				return true;
			}
		}
		return false;
	}

	#installTapHandlers() {
		if (!this.#map) {
			return;
		}
		if (!this.#markerClickListener) {
			this.#markerClickListener = new com.google.android.gms.maps.GoogleMap.OnMarkerClickListener({
				onMarkerClick: (marker) =>
					this.#eachFeature((feature) => {
						if (geometryMatchesPoint(feature.getGeometry(), marker.getPosition())) {
							this.#notifyFeature(feature);
							return true;
						}
						return false;
					}),
			});
			this.#polygonClickListener = new com.google.android.gms.maps.GoogleMap.OnPolygonClickListener({
				onPolygonClick: (polygon) => {
					console.log('[google-maps-utils][debug] GeoJson polygon click reached datalayer secondary');
					const matched = this.#eachFeature((feature) => {
						if (geometryMatchesPolygon(feature.getGeometry(), polygon.getPoints())) {
							this.#notifyFeature(feature);
							return true;
						}
						return false;
					});
					console.log('[google-maps-utils][debug] GeoJson polygon matched a feature:', matched);
				},
			});
			this.#polylineClickListener = new com.google.android.gms.maps.GoogleMap.OnPolylineClickListener({
				onPolylineClick: (polyline) => {
					this.#eachFeature((feature) => {
						if (geometryMatchesLine(feature.getGeometry(), polyline.getPoints())) {
							this.#notifyFeature(feature);
							return true;
						}
						return false;
					});
				},
			});
		}
		console.log('[google-maps-utils][debug] installing tap handlers; listener hub present:', hasNativeMapListeners(this.#map));
		addOnMarkerClickListener(this.#map, this.#markerClickListener);
		addOnPolygonClickListener(this.#map, this.#polygonClickListener);
		addOnPolylineClickListener(this.#map, this.#polylineClickListener);
	}

	#uninstallTapHandlers() {
		if (!this.#map || !this.#markerClickListener) {
			return;
		}
		removeOnMarkerClickListener(this.#map, this.#markerClickListener);
		removeOnPolygonClickListener(this.#map, this.#polygonClickListener);
		removeOnPolylineClickListener(this.#map, this.#polylineClickListener);
	}

	get native() {
		return this.#native;
	}

	get features(): GeoJsonFeature[] {
		const features: GeoJsonFeature[] = [];
		if (this.#native) {
			const nativeFeatures = this.#native.getFeatures();
			const iter = nativeFeatures.iterator();
			while (iter.hasNext()) {
				const feature = GeoJsonFeature.fromNative(iter.next());
				if (feature) {
					features.push(feature);
				}
			}
		}
		return features;
	}

	/** Bounding box that contains every feature in the layer, or `null` if empty. */
	get boundingBox(): CoordinateBounds {
		return latLngBoundsToCoordinateBounds(this.#native?.getBoundingBox());
	}

	/** Adds a feature to the layer (and to the map if the layer is displayed). */
	addFeature(feature: GeoJsonFeature) {
		this.#native?.addFeature(feature?.native);
	}

	/** Removes a feature from the layer. */
	removeFeature(feature: GeoJsonFeature) {
		this.#native?.removeFeature(feature?.native);
	}

	addLayerToMap() {
		this.native.addLayerToMap();
		if (this.#map) {
			// The renderer just replaced the map's click listeners; restore the hub's dispatchers on
			// top, then register this layer's feature-matching handlers as secondaries.
			attachNativeMapListeners(this.#map);
			this.#installTapHandlers();
		}
	}

	removeLayerFromMap() {
		this.#uninstallTapHandlers();
		this.native.removeLayerFromMap();
		if (this.#map) {
			attachNativeMapListeners(this.#map);
		}
	}
}

export class KmlLayer extends DataLayerBase<com.google.maps.android.data.kml.KmlLayer> {
	#native: com.google.maps.android.data.kml.KmlLayer;

	#map: com.google.android.gms.maps.GoogleMap;
	#markerClickListener: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener;
	#polygonClickListener: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener;
	#polylineClickListener: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener;

	constructor(map: GoogleMap, kml: string) {
		super();
		if (map && kml) {
			this.#map = map.native;
			const stream = new java.io.ByteArrayInputStream(new java.lang.String(kml).getBytes());
			this.#native = new com.google.maps.android.data.kml.KmlLayer(map.native, stream, Utils.android.getApplicationContext());
		}
	}

	static fromNative(nativeKmlLayer: com.google.maps.android.data.kml.KmlLayer) {
		if (nativeKmlLayer instanceof com.google.maps.android.data.kml.KmlLayer) {
			const kmlLayer = new KmlLayer(null, null);
			kmlLayer.#native = nativeKmlLayer;
			// No map reference, so featureTap wiring is skipped (mirrors the iOS behavior).
			return kmlLayer;
		}
		return null;
	}

	#notifyFeature(nativeFeature: com.google.maps.android.data.kml.KmlPlacemark) {
		const feature = KmlFeature.fromNative(nativeFeature);
		if (feature) {
			this.notify(<FeatureTapEventData>{
				eventName: DataLayerBase.featureTapEvent,
				object: this,
				feature,
			});
		}
	}

	#eachPlacemark(match: (placemark: com.google.maps.android.data.kml.KmlPlacemark) => boolean): boolean {
		if (!this.#native || !this.#native.hasPlacemarks()) {
			return false;
		}
		const iter = this.#native.getPlacemarks().iterator();
		while (iter.hasNext()) {
			const placemark = iter.next();
			if (placemark instanceof com.google.maps.android.data.kml.KmlPlacemark && match(placemark)) {
				return true;
			}
		}
		return false;
	}

	#installTapHandlers() {
		if (!this.#map) {
			return;
		}
		if (!this.#markerClickListener) {
			this.#markerClickListener = new com.google.android.gms.maps.GoogleMap.OnMarkerClickListener({
				onMarkerClick: (marker) =>
					this.#eachPlacemark((placemark) => {
						if (geometryMatchesPoint(placemark.getGeometry(), marker.getPosition())) {
							this.#notifyFeature(placemark);
							return true;
						}
						return false;
					}),
			});
			this.#polygonClickListener = new com.google.android.gms.maps.GoogleMap.OnPolygonClickListener({
				onPolygonClick: (polygon) => {
					this.#eachPlacemark((placemark) => {
						if (geometryMatchesPolygon(placemark.getGeometry(), polygon.getPoints())) {
							this.#notifyFeature(placemark);
							return true;
						}
						return false;
					});
				},
			});
			this.#polylineClickListener = new com.google.android.gms.maps.GoogleMap.OnPolylineClickListener({
				onPolylineClick: (polyline) => {
					this.#eachPlacemark((placemark) => {
						if (geometryMatchesLine(placemark.getGeometry(), polyline.getPoints())) {
							this.#notifyFeature(placemark);
							return true;
						}
						return false;
					});
				},
			});
		}
		console.log('[google-maps-utils][debug] installing tap handlers; listener hub present:', hasNativeMapListeners(this.#map));
		addOnMarkerClickListener(this.#map, this.#markerClickListener);
		addOnPolygonClickListener(this.#map, this.#polygonClickListener);
		addOnPolylineClickListener(this.#map, this.#polylineClickListener);
	}

	#uninstallTapHandlers() {
		if (!this.#map || !this.#markerClickListener) {
			return;
		}
		removeOnMarkerClickListener(this.#map, this.#markerClickListener);
		removeOnPolygonClickListener(this.#map, this.#polygonClickListener);
		removeOnPolylineClickListener(this.#map, this.#polylineClickListener);
	}

	get native() {
		return this.#native;
	}

	get features(): KmlFeature[] {
		const features: KmlFeature[] = [];
		if (this.#native && this.#native.hasPlacemarks()) {
			const iter = this.#native.getPlacemarks().iterator();
			while (iter.hasNext()) {
				const feature = KmlFeature.fromNative(iter.next());
				if (feature) {
					features.push(feature);
				}
			}
		}
		return features;
	}

	hasPlacemarks(): boolean {
		return this.native.hasPlacemarks();
	}

	hasContainers(): boolean {
		return this.native.hasContainers();
	}

	/** Top-level KML `<Folder>` / `<Document>` containers, if any. */
	get containers(): KmlContainer[] {
		const containers: KmlContainer[] = [];
		if (this.#native?.hasContainers()) {
			const iter = this.#native.getContainers().iterator();
			while (iter.hasNext()) {
				const container = KmlContainer.fromNative(iter.next());
				if (container) {
					containers.push(container);
				}
			}
		}
		return containers;
	}

	/** KML `<GroundOverlay>` elements parsed from the document. */
	get groundOverlays(): KmlGroundOverlay[] {
		const overlays: KmlGroundOverlay[] = [];
		const nativeOverlays = this.#native?.getGroundOverlays();
		if (nativeOverlays) {
			const iter = nativeOverlays.iterator();
			while (iter.hasNext()) {
				const overlay = KmlGroundOverlay.fromNative(iter.next());
				if (overlay) {
					overlays.push(overlay);
				}
			}
		}
		return overlays;
	}

	hasGroundOverlays(): boolean {
		return this.groundOverlays.length > 0;
	}

	addLayerToMap() {
		// Flag polygon/polyline placemarks clickable so their taps reach the featureTap handlers
		// (markers are always clickable). KML has no style-level clickable flag, so it is set on each
		// placemark's overlay options before rendering.
		if (this.#map && this.#native?.hasPlacemarks()) {
			const iter = this.#native.getPlacemarks().iterator();
			while (iter.hasNext()) {
				const placemark = iter.next();
				if (placemark instanceof com.google.maps.android.data.kml.KmlPlacemark) {
					placemark.getPolygonOptions()?.clickable(true);
					placemark.getPolylineOptions()?.clickable(true);
				}
			}
		}
		this.native.addLayerToMap();
		if (this.#map) {
			attachNativeMapListeners(this.#map);
			this.#installTapHandlers();
		}
	}

	removeLayerFromMap() {
		this.#uninstallTapHandlers();
		this.native.removeLayerFromMap();
		if (this.#map) {
			attachNativeMapListeners(this.#map);
		}
	}
}

abstract class BaseFeature<T extends com.google.maps.android.data.Feature> extends FeatureBase<T> {
	get id(): string | null {
		return this.native.getId() ?? null;
	}

	get properties(): Record<string, any> {
		const props = {};

		const iter = this.native.getPropertyKeys().iterator();
		while (iter.hasNext()) {
			const key = iter.next();
			props[key] = this.native.getProperty(key);
		}

		return props;
	}
	set properties(value: Record<string, any>) {
		Object.entries(value).forEach(([key, value]: [string, string]) => {
			this.native.setProperty(key, value);
		});
	}

	get geometry(): Geometry | null {
		return Geometry.fromNative(this.native.getGeometry());
	}
}

export class GeoJsonFeature extends BaseFeature<com.google.maps.android.data.geojson.GeoJsonFeature> {
	#native: com.google.maps.android.data.geojson.GeoJsonFeature;

	static fromNative(nativeFeature: com.google.maps.android.data.geojson.GeoJsonFeature) {
		if (nativeFeature instanceof com.google.maps.android.data.geojson.GeoJsonFeature) {
			const feature = new GeoJsonFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	/** Bounding box of this feature, or `null` if it has none. */
	get boundingBox(): CoordinateBounds {
		return latLngBoundsToCoordinateBounds(this.native.getBoundingBox());
	}

	get style(): GeometryStyle {
		return GeometryStyle.fromNative({
			polygonStyle: this.native.getPolygonStyle(),
			lineStringStyle: this.native.getLineStringStyle(),
			pointStyle: this.native.getPointStyle(),
		});
	}
	set style(style: GeometryStyle) {
		const nativeStyles = style?.native;
		if (nativeStyles) {
			this.native.setPolygonStyle(nativeStyles.polygonStyle);
			this.native.setLineStringStyle(nativeStyles.lineStringStyle);
			this.native.setPointStyle(nativeStyles.pointStyle);
		}
	}
}

export class KmlFeature extends BaseFeature<com.google.maps.android.data.kml.KmlPlacemark> {
	#native: com.google.maps.android.data.kml.KmlPlacemark;

	static fromNative(nativeFeature: com.google.maps.android.data.kml.KmlPlacemark) {
		if (nativeFeature instanceof com.google.maps.android.data.kml.KmlPlacemark) {
			const feature = new KmlFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	/**
	 * The KML style url this placemark references, if any.
	 */
	get styleId(): string | null {
		return this.native.getStyleId() ?? null;
	}

	/**
	 * KML feature styles are resolved when the layer is parsed, so there is no
	 * mutable shared style object. Delve into `native` (`getInlineStyle()`,
	 * `getPolygonOptions()`, ...) for styling details.
	 */
	get style(): null {
		return null;
	}
}

export class KmlContainer {
	#native: com.google.maps.android.data.kml.KmlContainer;

	static fromNative(nativeContainer: com.google.maps.android.data.kml.KmlContainer) {
		if (nativeContainer instanceof com.google.maps.android.data.kml.KmlContainer) {
			const container = new KmlContainer();
			container.#native = nativeContainer;
			return container;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.#native;
	}

	get ios() {
		return null;
	}

	get properties(): Record<string, any> {
		return propertiesFromKmlContainer(this.#native);
	}

	/** Nested containers. */
	get containers(): KmlContainer[] {
		const containers: KmlContainer[] = [];
		if (this.#native?.hasContainers()) {
			const iter = this.#native.getContainers().iterator();
			while (iter.hasNext()) {
				const container = KmlContainer.fromNative(iter.next());
				if (container) {
					containers.push(container);
				}
			}
		}
		return containers;
	}

	/** Placemarks directly inside this container. */
	get placemarks(): KmlFeature[] {
		const placemarks: KmlFeature[] = [];
		if (this.#native?.hasPlacemarks()) {
			const iter = this.#native.getPlacemarks().iterator();
			while (iter.hasNext()) {
				const placemark = KmlFeature.fromNative(iter.next());
				if (placemark) {
					placemarks.push(placemark);
				}
			}
		}
		return placemarks;
	}

	hasContainers(): boolean {
		return this.#native.hasContainers();
	}

	hasPlacemarks(): boolean {
		return this.#native.hasPlacemarks();
	}
}

export class KmlGroundOverlay {
	#native: com.google.maps.android.data.kml.KmlGroundOverlay;

	static fromNative(nativeOverlay: com.google.maps.android.data.kml.KmlGroundOverlay) {
		if (nativeOverlay instanceof com.google.maps.android.data.kml.KmlGroundOverlay) {
			const overlay = new KmlGroundOverlay();
			overlay.#native = nativeOverlay;
			return overlay;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.#native;
	}

	get ios() {
		return null;
	}

	get imageUrl(): string {
		return this.#native.getImageUrl();
	}

	/** The geographic box the overlay image is drawn in. */
	get bounds(): CoordinateBounds {
		return latLngBoundsToCoordinateBounds(this.#native.getLatLngBox());
	}

	get properties(): Record<string, any> {
		const props = {};
		const iter = this.#native.getProperties().iterator();
		while (iter.hasNext()) {
			const key = iter.next();
			props[key] = this.#native.getProperty(key);
		}
		return props;
	}
}

export class Geometry<T = any> extends GeometryBase<com.google.maps.android.data.Geometry<T>> {
	#native: com.google.maps.android.data.Geometry<T>;

	static fromNative(nativeGeometry: com.google.maps.android.data.Geometry<any>) {
		if (nativeGeometry instanceof com.google.maps.android.data.Geometry) {
			const geometry = new Geometry<typeof nativeGeometry>();
			geometry.#native = nativeGeometry;
			return geometry;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get type(): string {
		return this.native.getGeometryType();
	}

	get coordinates(): GeometryCoordinates {
		const native = this.#native;
		if (!native) {
			return null;
		}

		if (native instanceof com.google.maps.android.data.Point) {
			return latLngToCoordinate(native.getGeometryObject());
		}

		if (native instanceof com.google.maps.android.data.DataPolygon) {
			const rings: Coordinate[][] = [latLngListToCoordinates(native.getOuterBoundaryCoordinates())];
			const innerBoundaries = native.getInnerBoundaryCoordinates();
			for (let i = 0; i < innerBoundaries.size(); i++) {
				rings.push(latLngListToCoordinates(innerBoundaries.get(i)));
			}
			return rings;
		}

		if (native instanceof com.google.maps.android.data.LineString) {
			return latLngListToCoordinates(native.getGeometryObject());
		}

		if (native instanceof com.google.maps.android.data.MultiGeometry) {
			if (this.type === GeometryType.GeometryCollection) {
				return null;
			}
			return (this.geometries?.map((geometry) => geometry.coordinates) ?? null) as GeometryCoordinates;
		}

		return null;
	}

	get geometries(): Geometry[] | null {
		const native = this.#native;
		if (native instanceof com.google.maps.android.data.MultiGeometry) {
			const geometries: Geometry[] = [];
			const nativeGeometries = native.getGeometryObject() as java.util.List<com.google.maps.android.data.Geometry<any>>;
			for (let i = 0; i < nativeGeometries.size(); i++) {
				const geometry = Geometry.fromNative(nativeGeometries.get(i));
				if (geometry) {
					geometries.push(geometry);
				}
			}
			return geometries;
		}
		return null;
	}
}
