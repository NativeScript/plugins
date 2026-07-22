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

declare module '@nativescript/google-maps' {
	interface GoogleMap {
		heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
		clusterManager(markers: MarkerOptions[]): ClusterManager;

		addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer;
		removeGeoJson(geoJsonLayer: GeoJsonLayer): void;

		addKml(kml: string): KmlLayer;
		removeKml(kmlLayer: KmlLayer): void;
	}
}

export class GoogleMapUtils {
	heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
	clusterManager(markers: MarkerOptions[]): ClusterManager;

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer;
	removeGeoJson(geoJsonLayer: GeoJsonLayer): void;

	addKml(kml: string): KmlLayer;
	removeKml(kmlLayer: KmlLayer): void;
}
