import { Color, EventData, Observable } from '@nativescript/core';
import { Coordinate, GoogleMap } from '@nativescript/google-maps';

/**
 * GeoJSON geometry type names. Both the Android (`com.google.maps.android.data`)
 * and iOS (`GMU`) google-maps-utils libraries report geometry types using these
 * same GeoJSON names, so they are safe to compare cross-platform.
 */
export enum GeometryType {
	Point = 'Point',
	MultiPoint = 'MultiPoint',
	LineString = 'LineString',
	MultiLineString = 'MultiLineString',
	Polygon = 'Polygon',
	MultiPolygon = 'MultiPolygon',
	GeometryCollection = 'GeometryCollection',
}

/**
 * Style options accepted by data layers and features.
 *
 * Platform support notes:
 * - `scale` and `iconUrl` only have an effect on iOS (`GMUStyle`). On Android they
 *   are stored on the style object but not applied to the native renderer.
 * - `anchor`, `heading` and `title` apply to Point geometries only.
 */
export interface IGeometryStyle {
	/**
	 * The color for the stroke of a LineString or Polygon.
	 */
	strokeColor?: Color | string;

	/**
	 * The color for the fill of a Polygon.
	 */
	fillColor?: Color | string;

	/**
	 * The width of a LineString or Polygon stroke.
	 */
	width?: number;

	/**
	 * The scale that a Point's icon should be rendered at. (iOS only)
	 */
	scale?: number;

	/**
	 * The direction, in degrees, that a Point's icon should be rendered at.
	 */
	heading?: number;

	/**
	 * The position within an icon that is anchored to the Point.
	 */
	anchor?: [number, number];

	/**
	 * Icon Url. (iOS only)
	 */
	iconUrl?: string | null;

	/**
	 * The title of the point.
	 */
	title?: string | null;
}

/**
 * GeoJSON-shaped coordinates for a {@link GeometryBase}. Which shape you get
 * depends on the geometry `type`:
 * - Point: `Coordinate`
 * - LineString / MultiPoint: `Coordinate[]`
 * - Polygon / MultiLineString: `Coordinate[][]`
 * - MultiPolygon: `Coordinate[][][]`
 * - GeometryCollection: `null` (see `geometries` instead)
 */
export type GeometryCoordinates = Coordinate | Coordinate[] | Coordinate[][] | Coordinate[][][] | null;

/**
 * Normalizes user supplied style options so platform implementations only ever
 * deal with `Color` instances. Returns `null` when no style was supplied.
 */
export function normalizeGeometryStyle(style?: Partial<IGeometryStyle>): Partial<IGeometryStyle> | null;

/**
 * Event data for the {@link DataLayerBase.featureTapEvent} event, fired when a
 * feature rendered by a data layer is tapped on the map.
 */
export interface FeatureTapEventData<T extends FeatureBase = FeatureBase> extends EventData {
	/**
	 * The tapped feature. A `GeoJsonFeature` for `GeoJsonLayer`, a `KmlFeature`
	 * for `KmlLayer`.
	 */
	feature: T;
}

/**
 * Shared base class for data layers (GeoJSON, KML) on both platforms.
 *
 * `native` always holds the underlying native object. `android` / `ios` are
 * convenience accessors that only return the native object when running on that
 * platform, so platform-specific code can delve into the native wrappers when
 * the shared API is not enough.
 */
export abstract class DataLayerBase<T = any> extends Observable {
	/**
	 * Fired when a feature rendered by this layer is tapped on the map.
	 * Register with `layer.on(GeoJsonLayer.featureTapEvent, ...)` (or `KmlLayer`).
	 *
	 * Note: taps are only detected for layers created via the constructor (or
	 * the `addGeoJson` / `addKml` mixins), not for `fromNative` wrappers.
	 */
	static featureTapEvent: string;

	abstract readonly native: T;

	abstract readonly features: FeatureBase[];

	abstract addLayerToMap(): void;

	abstract removeLayerFromMap(): void;

	readonly android: T | null;

	readonly ios: T | null;

	on(event: 'featureTap', callback: (args: FeatureTapEventData) => void, thisArg?: any);
}

/**
 * Shared base class for a single feature (a GeoJSON feature or a KML placemark)
 * on both platforms. See {@link DataLayerBase} for the `native` / `android` /
 * `ios` escape hatches.
 */
export abstract class FeatureBase<T = any> {
	abstract readonly native: T;

	abstract readonly id: string | null;

	/**
	 * Feature properties. Reading is supported on both platforms. Writing is only
	 * supported on Android (`GMUFeature.properties` is read-only on iOS).
	 */
	abstract properties: Record<string, any>;

	abstract readonly geometry: GeometryBase | null;

	abstract style: any;

	readonly android: T | null;

	readonly ios: T | null;
}

/**
 * Shared base class for a geometry on both platforms. `type` is one of the
 * GeoJSON {@link GeometryType} names on both platforms. See {@link DataLayerBase}
 * for the `native` / `android` / `ios` escape hatches.
 */
export abstract class GeometryBase<T = any> {
	abstract readonly native: T;

	abstract readonly type: string;

	/**
	 * GeoJSON-shaped coordinates (using `{ lat, lng }` objects), or `null` for
	 * geometry collections.
	 */
	abstract readonly coordinates: GeometryCoordinates;

	/**
	 * Child geometries for Multi* / GeometryCollection types, `null` otherwise.
	 */
	abstract readonly geometries: GeometryBase[] | null;

	readonly android: T | null;

	readonly ios: T | null;
}

/**
 * Style applied to a data layer or feature. On Android it wraps the native
 * `GeoJsonPolygonStyle` / `GeoJsonLineStringStyle` / `GeoJsonPointStyle` triple
 * (mutations are reflected on the map), on iOS it builds an immutable `GMUStyle`
 * from the current property values.
 */
export class GeometryStyle implements IGeometryStyle {
	constructor(styles?: Partial<IGeometryStyle>);

	static fromNative(nativeStyle: any): GeometryStyle;

	strokeColor: Color;

	fillColor: Color;

	width: number;

	scale: number;

	heading: number;

	anchor: [number, number];

	iconUrl: string | null;

	title: string | null;

	/**
	 * Android: `{ polygonStyle, lineStringStyle, pointStyle }`. iOS: a `GMUStyle`.
	 */
	readonly native: any;

	readonly android: any;

	readonly ios: any;
}

export class GeoJsonLayer extends DataLayerBase implements IGeoJsonLayer {
	constructor(map: GoogleMap, geoJson: object | string, styles?: Partial<IGeometryStyle>);

	static fromNative(nativeGeoJsonLayer: any): GeoJsonLayer;

	/**
	 * `com.google.maps.android.data.geojson.GeoJsonLayer` on Android,
	 * `GMUGeometryRenderer` on iOS.
	 */
	readonly native: any;

	style: GeometryStyle;

	readonly features: GeoJsonFeature[];

	addLayerToMap(): void;

	removeLayerFromMap(): void;

	on(event: 'featureTap', callback: (args: FeatureTapEventData<GeoJsonFeature>) => void, thisArg?: any);
}

export class KmlLayer extends DataLayerBase {
	constructor(map: GoogleMap, kml: string);

	static fromNative(nativeKmlLayer: any): KmlLayer;

	/**
	 * `com.google.maps.android.data.kml.KmlLayer` on Android,
	 * `GMUGeometryRenderer` on iOS.
	 */
	readonly native: any;

	readonly features: KmlFeature[];

	hasPlacemarks(): boolean;

	/**
	 * Always `false` on iOS — KML containers are not exposed by the GMU library.
	 */
	hasContainers(): boolean;

	addLayerToMap(): void;

	removeLayerFromMap(): void;

	on(event: 'featureTap', callback: (args: FeatureTapEventData<KmlFeature>) => void, thisArg?: any);
}

export class GeoJsonFeature extends FeatureBase implements IFeature {
	static fromNative(nativeFeature: any): GeoJsonFeature;

	/**
	 * `com.google.maps.android.data.geojson.GeoJsonFeature` on Android,
	 * `GMUFeature` on iOS.
	 */
	readonly native: any;

	readonly id: string | null;

	properties: Record<string, any>;

	readonly geometry: Geometry | null;

	style: GeometryStyle;
}

export class KmlFeature extends FeatureBase implements IFeature {
	static fromNative(nativeFeature: any): KmlFeature;

	/**
	 * `com.google.maps.android.data.kml.KmlPlacemark` on Android,
	 * `GMUPlacemark` on iOS.
	 */
	readonly native: any;

	readonly id: string | null;

	properties: Record<string, any>;

	readonly geometry: Geometry | null;

	/**
	 * The KML style url this placemark references, if any.
	 */
	readonly styleId: string | null;

	/**
	 * Always `null` on Android — KML styles are resolved when the layer is
	 * parsed. Delve into `native` for styling details.
	 */
	readonly style: GeometryStyle | null;
}

export class Geometry<T = any> extends GeometryBase<T> implements IGeometry {
	static fromNative(nativeGeometry: any): Geometry;

	/**
	 * `com.google.maps.android.data.Geometry` subclass on Android,
	 * `GMUGeometry` on iOS.
	 */
	readonly native: T;

	readonly type: string;

	readonly coordinates: GeometryCoordinates;

	readonly geometries: Geometry[] | null;
}

export interface IGeoJsonLayer {
	style: GeometryStyle;
	addLayerToMap(): void;
	removeLayerFromMap(): void;
}

export interface IFeature {
	id: string | null;
	properties: Record<string, any>;
	geometry: Geometry | null;
}

export interface IGeometry {
	type: string;
	coordinates: GeometryCoordinates;
	geometries: Geometry[] | null;
}
