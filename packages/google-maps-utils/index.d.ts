import { Color } from '@nativescript/core';
import { Coordinate, GoogleMap, Marker, MarkerOptions } from '@nativescript/google-maps';
import { GoogleMapsUtilsCommon } from './common';

export declare class GoogleMapsUtils extends GoogleMapsUtilsCommon {}

export class ClusterItem {
	constructor(markerOptions: MarkerOptions);
}

export interface IClusterManager {
	native: any;
}

export class ClusterRenderer {
	constructor(private map: GoogleMap, private manager: ClusterManager);
}

export class ClusterManager implements IClusterManager {
	constructor(private map: GoogleMap);
	addItems: (markers: ClusterItem[]) => void;
	addItem: (marker: ClusterItem) => void;
	cluster: () => void;
	setRenderer(clusterRenderer: ClusterRenderer): () => void;
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
	constructor(map: GoogleMap, geojson: any, styles?: Partial<IGeometryStyle>);
	addLayerToMap: () => void;
	removeLayerFromMap: () => void;
}

export interface IHeatmapOptions {
	opacity: number;
	radius: number;
	maxIntensity: number;
}

export class HeatmapTileProvider {
	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions);
	build: () => void;
	setData: (coordinates: Coordinate[]) => void;
	opacity: number;
	native: any;
}

export interface IGeometryStyle {
	/**
	 * The color for the stroke of a LineString or Polygon.
	 */
	strokeColor: Color;

	/**
	 * The color for the fill of a Polygon.
	 */
	fillColor: Color;

	/**
	 * The width of a LineString
	 */
	width: number;

	/**
	 * The scale that a Point's icon should be rendered at.
	 */
	scale: number;

	/**
	 * The direction, in degrees, that a Point's icon should be rendered at.
	 */
	heading: number;

	/**
	 * The position within an icon that is anchored to the Point.
	 */
	anchor: [number, number];

	/**
	 * Icon Url
	 */
	iconUrl: string | null;

	/**
	 * The title of the point
	 */
	title: string | null;
	// hasFill: boolean;
	// hasStroke: boolean;
}
