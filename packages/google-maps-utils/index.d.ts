import { GoogleMapsUtilsCommon } from './common';
import { Color } from '@nativescript/core';
import { MapView } from '@nativescript/google-maps';

export declare class GoogleMapsUtils extends GoogleMapsUtilsCommon {}

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
	constructor(map: MapView, geojson: any, styles?: Partial<IGeometryStyle>);
	addLayerToMap: () => void;
	removeLayerFromMap: () => void;
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
	anchor: number[];

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
