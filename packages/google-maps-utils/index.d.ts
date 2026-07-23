import { MarkerOptions } from '@nativescript/google-maps';
import { GeoJSON } from 'geojson';
import { ClusterManager } from './clustering';
import { GeoJsonLayer, IGeometryStyle, KmlLayer } from './datalayer';
import { HeatmapOptions, HeatmapTileProvider } from './heatmap';

export * from './clustering';
export * from './datalayer';
export * from './geometry';
export * from './heatmap';
export * from './iconfactory';
export * from './utils';

export function installMixins();

/**
 * Applies the `GoogleMapUtils` mixins onto the `GoogleMap` class again (already
 * done once by `installMixins`). Useful when the google-maps module was
 * re-required after mixins were installed.
 */
export function overrideGoogleMap();

declare module '@nativescript/google-maps' {
	interface GoogleMap {
		heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
		clusterManager(markers: MarkerOptions[]): ClusterManager;

		addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer | null;
		removeGeoJson(geoJsonLayer: GeoJsonLayer): void;

		addKml(kml: string): KmlLayer | null;
		removeKml(kmlLayer: KmlLayer): void;
	}
}

export class GoogleMapUtils {
	heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
	clusterManager(markers: MarkerOptions[]): ClusterManager;

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer | null;
	removeGeoJson(geoJsonLayer: GeoJsonLayer): void;

	addKml(kml: string): KmlLayer | null;
	removeKml(kmlLayer: KmlLayer): void;
}
