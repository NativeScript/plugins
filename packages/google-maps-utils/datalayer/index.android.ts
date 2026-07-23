import { Color, Utils } from '@nativescript/core';
import { Coordinate, GoogleMap } from '@nativescript/google-maps';
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
	style: GeometryStyle;

	constructor(map: GoogleMap, geoJson: object | string, styles?: Partial<IGeometryStyle>) {
		super();
		if (map && geoJson) {
			const json = typeof geoJson === 'string' ? geoJson : JSON.stringify(geoJson);
			this.#native = new com.google.maps.android.data.geojson.GeoJsonLayer(map.native, new org.json.JSONObject(json));

			this.style = GeometryStyle.fromNative({
				polygonStyle: this.#native.getDefaultPolygonStyle(),
				lineStringStyle: this.#native.getDefaultLineStringStyle(),
				pointStyle: this.#native.getDefaultPointStyle(),
			});

			const normalized = normalizeGeometryStyle(styles);
			if (normalized) {
				for (const key of Object.keys(normalized)) {
					if (normalized[key] != null) {
						this.style[key] = normalized[key];
					}
				}
			}

			this.#registerFeatureClickListener();
		}
	}

	static fromNative(nativeGeoJsonLayer: com.google.maps.android.data.geojson.GeoJsonLayer) {
		if (nativeGeoJsonLayer instanceof com.google.maps.android.data.geojson.GeoJsonLayer) {
			const geoJsonLayer = new GeoJsonLayer(null, null);
			geoJsonLayer.#native = nativeGeoJsonLayer;
			geoJsonLayer.#registerFeatureClickListener();
			return geoJsonLayer;
		}
		return null;
	}

	#registerFeatureClickListener() {
		this.#native?.setOnFeatureClickListener(
			new com.google.maps.android.data.Layer.OnFeatureClickListener({
				onFeatureClick: (feature: com.google.maps.android.data.Feature) => {
					const geoJsonFeature = GeoJsonFeature.fromNative(feature as com.google.maps.android.data.geojson.GeoJsonFeature);
					if (geoJsonFeature) {
						this.notify(<FeatureTapEventData>{
							eventName: DataLayerBase.featureTapEvent,
							object: this,
							feature: geoJsonFeature,
						});
					}
				},
			}),
		);
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

	addLayerToMap() {
		this.native.addLayerToMap();
	}

	removeLayerFromMap() {
		this.native.removeLayerFromMap();
	}
}

export class KmlLayer extends DataLayerBase<com.google.maps.android.data.kml.KmlLayer> {
	#native: com.google.maps.android.data.kml.KmlLayer;

	constructor(map: GoogleMap, kml: string) {
		super();
		if (map && kml) {
			const stream = new java.io.ByteArrayInputStream(new java.lang.String(kml).getBytes());
			this.#native = new com.google.maps.android.data.kml.KmlLayer(map.native, stream, Utils.android.getApplicationContext());
			this.#registerFeatureClickListener();
		}
	}

	static fromNative(nativeKmlLayer: com.google.maps.android.data.kml.KmlLayer) {
		if (nativeKmlLayer instanceof com.google.maps.android.data.kml.KmlLayer) {
			const kmlLayer = new KmlLayer(null, null);
			kmlLayer.#native = nativeKmlLayer;
			kmlLayer.#registerFeatureClickListener();
			return kmlLayer;
		}
		return null;
	}

	#registerFeatureClickListener() {
		this.#native?.setOnFeatureClickListener(
			new com.google.maps.android.data.Layer.OnFeatureClickListener({
				onFeatureClick: (feature: com.google.maps.android.data.Feature) => {
					const kmlFeature = KmlFeature.fromNative(feature as com.google.maps.android.data.kml.KmlPlacemark);
					if (kmlFeature) {
						this.notify(<FeatureTapEventData>{
							eventName: DataLayerBase.featureTapEvent,
							object: this,
							feature: kmlFeature,
						});
					}
				},
			}),
		);
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

	addLayerToMap() {
		this.native.addLayerToMap();
	}

	removeLayerFromMap() {
		this.native.removeLayerFromMap();
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
