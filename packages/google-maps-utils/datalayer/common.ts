import { Color, EventData, Observable } from '@nativescript/core';
import { Coordinate } from '@nativescript/google-maps';

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
export function normalizeGeometryStyle(style?: Partial<IGeometryStyle>): Partial<IGeometryStyle> | null {
	if (!style) {
		return null;
	}
	const normalized = { ...style };
	if (typeof normalized.strokeColor === 'string') {
		normalized.strokeColor = new Color(normalized.strokeColor);
	}
	if (typeof normalized.fillColor === 'string') {
		normalized.fillColor = new Color(normalized.fillColor);
	}
	return normalized;
}

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
 * `native` always holds the underlying native object
 * (`com.google.maps.android.data.Layer` subclass on Android, `GMUGeometryRenderer`
 * on iOS). `android` / `ios` are convenience accessors that only return the native
 * object when running on that platform, so platform-specific code can delve into
 * the native wrappers when the shared API is not enough.
 */
export abstract class DataLayerBase<T = any> extends Observable {
	/**
	 * Fired when a feature rendered by this layer is tapped on the map.
	 * Register with `layer.on(GeoJsonLayer.featureTapEvent, ...)` (or `KmlLayer`).
	 *
	 * Note: on iOS, taps are only detected for layers created via the constructor
	 * (or the `addGeoJson` / `addKml` mixins) — the GMU renderer does not expose
	 * the features behind a `fromNative` wrapper.
	 */
	static featureTapEvent = 'featureTap';

	abstract readonly native: T;

	abstract readonly features: FeatureBase[];

	abstract addLayerToMap(): void;

	abstract removeLayerFromMap(): void;

	get android(): T | null {
		return global.isAndroid ? this.native : null;
	}

	get ios(): T | null {
		return global.isIOS ? this.native : null;
	}
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

	get android(): T | null {
		return global.isAndroid ? this.native : null;
	}

	get ios(): T | null {
		return global.isIOS ? this.native : null;
	}
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

	get android(): T | null {
		return global.isAndroid ? this.native : null;
	}

	get ios(): T | null {
		return global.isIOS ? this.native : null;
	}
}
