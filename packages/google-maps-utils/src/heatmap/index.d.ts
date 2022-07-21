import { Color } from '@nativescript/core';

export interface IHeatmapOptions {
	opacity?: number;
	radius?: number;
	maxIntensity?: number;
	gradient?: IGradient[];
}

export interface IGradient {
	color: Color | string;
	stop: number;
}

export interface IHeatmapTileProvider {
	setData: (coordinates: Coordinate[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
}

export class HeatmapTileProvider implements IHeatmapTileProvider {
	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions);
	setData: (coordinates: Coordinate[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
	native: any;
	android: any /*com.google.maps.android.heatmaps.HeatmapTileProvider*/;
	ios: any /*GMUHeatmapTileLayer*/;
}
