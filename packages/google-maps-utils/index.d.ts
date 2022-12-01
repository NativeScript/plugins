import { Color } from '@nativescript/core';
import { GoogleMap } from '@nativescript/google-maps';

export * from './experimental/datalayer';
export * from './experimental/iconfactory';
export * from './utils';

export class GoogleMapUtils {
	constructor(map: GoogleMap);

	heatmapProvider(options: HeatmapOptions): HeatmapTileProvider;
	clusterManager(markers: MarkerOptions[]): ClusterManager;
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
