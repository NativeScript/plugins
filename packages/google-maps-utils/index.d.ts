import { Color } from '@nativescript/core';
import { GoogleMap } from '@nativescript/google-maps';

// export * from './experimental/datalayer';
// export * from './experimental/iconfactory';
export * from './utils';

export function installMixins();

declare module '@nativescript/google-maps' {
	interface GoogleMap {
		heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
		clusterManager(markers: MarkerOptions[]): ClusterManager;

		addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer;
		removeGeoJson(geoJsonLayer: GeoJsonLayer): void;
	}
}

export class GoogleMapUtils {
	heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
	clusterManager(markers: MarkerOptions[]): ClusterManager;

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle): GeoJsonLayer;
	removeGeoJson(geoJsonLayer: GeoJsonLayer): void;
}

export interface IGradient {
	color: Color | string;
	stop: number;
}

export interface HeatmapOptions {
	coordinates: Coordinate[];
	opacity?: number;
	radius?: number;
	maxIntensity?: number;
	gradient?: IGradient[];
}

export interface IHeatmapTileProvider {
	setData: (coordinates: Coordinate[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
}

export class HeatmapTileProvider implements IHeatmapTileProvider {
	constructor(options: HeatmapOptions);
	static fromNative: (nativeHeatmap: any) => HeatmapTileProvider;
	setData: (coordinates: Coordinate[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
	native: any;
	android: any /*com.google.maps.android.heatmaps.HeatmapTileProvider*/;
	ios: any /*GMUHeatmapTileLayer*/;
}

export class ClusterItem {
	constructor(options: MarkerOptions);
}

export class ClusterRenderer {
	constructor(private map: GoogleMap, private manager: ClusterManager);
	android?: any;
	ios?: any;
	native?: any;
}

export interface IClusterManager {
	addItems: (clusterItems: ClusterItem[]) => void;
	addItem: (clusterItem: ClusterItem) => void;
	removeItems: (clusterItems: ClusterItem[]) => void;
	removeItem: (clusterItem: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: any) => void;
	android?: any;
	ios?: any;
	native?: any;
}

export class ClusterManager implements Partial<IClusterManager> {
	onClusterTap(cluster: any) {
		throw new Error('Method not implemented.');
	}
	static fromNative: (nativeClusterManager) => ClusterManager;
	addItems: (clusterItems: ClusterItem[]) => void;
	addItem: (clusterItem: ClusterItem) => void;
	removeItems: (clusterItems: ClusterItem[]) => void;
	removeItem: (clusterItem: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: ClusterRenderer) => void;
	android?: any;
	ios?: any;
	native?: any;
}

export interface IGeoJsonLayer {
	style: GeometryStyle;
	addLayerToMap: () => void;
	removeLayerFromMap: () => void;
}

export class GeoJsonLayer implements IGeoJsonLayer {
	ios: any;
	android: any;
	native: any;
	style: GeometryStyle;
	features: GeoJsonFeature[];
	constructor(map: GoogleMap, geojson: any, styles?: Partial<IGeometryStyle>);
	addLayerToMap: () => void;
	removeLayerFromMap: () => void;
}

export interface IGeometryStyle {
	strokeColor?: Color;
	fillColor?: Color;
	width?: number;
	scale?: number;
	heading?: number;
	anchor?: [number, number];
	iconUrl?: string | null;
	title?: string | null;
}

export interface IGeometry {
	type: string;
	geometries: any;
}

export interface IFeature {
	geometry: any;
	properties: any;
	id: any;
}
