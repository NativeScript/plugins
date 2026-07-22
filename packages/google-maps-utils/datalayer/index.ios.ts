import { Color, encoding } from '@nativescript/core';
import { Coordinate, GoogleMap } from '@nativescript/google-maps';
import { intoColor } from '../utils/common';
import { DataLayerBase, FeatureBase, GeometryBase, GeometryCoordinates, IGeometryStyle, normalizeGeometryStyle } from './common';

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

export class GeoJsonLayer extends DataLayerBase<GMUGeometryRenderer> {
	#native: GMUGeometryRenderer;
	#parser: GMUGeoJSONParser;
	style: GeometryStyle;

	constructor(map: GoogleMap, geoJson: object | string, styles?: Partial<IGeometryStyle>) {
		super();
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
	}

	removeLayerFromMap() {
		this.native.clear();
	}
}

export class KmlLayer extends DataLayerBase<GMUGeometryRenderer> {
	#native: GMUGeometryRenderer;
	#parser: GMUKMLParser;

	constructor(map: GoogleMap, kml: string) {
		super();
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
	}

	removeLayerFromMap() {
		this.native.clear();
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
