import { Color } from '@nativescript/core';
import { Coordinate } from '@nativescript/google-maps';
import { intoNativeColor } from '../utils/common';

export interface IGradient {
	color: Color | string;
	stop: number;
}

/**
 * A coordinate with an associated intensity/weight, used for weighted heatmaps.
 * `intensity` defaults to `1`.
 */
export interface WeightedLatLng {
	coordinate: Coordinate;
	intensity?: number;
}

export interface HeatmapOptions {
	/** Uniform-weight points. Each is treated as a {@link WeightedLatLng} with intensity `1`. */
	coordinates?: Coordinate[];
	/** Weighted points, combined with `coordinates` if both are provided. */
	weightedData?: WeightedLatLng[];
	opacity?: number;
	radius?: number;
	maxIntensity?: number;
	gradient?: IGradient[];
}

export interface IHeatmapTileProvider {
	setData: (coordinates: Coordinate[]) => void;
	setWeightedData: (data: WeightedLatLng[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
	getTile: (x: number, y: number, z: number) => any;
}

export function intoNativeHeatmapGradient(gradients: IGradient[]): any {
	const { colors, stops } = gradients.reduce<{
		colors: any[];
		stops: number[];
	}>(
		(acc, gradient) => {
			acc.colors.push(intoNativeColor(gradient.color));
			acc.stops.push(gradient.stop);

			return acc;
		},
		{ colors: [], stops: [] },
	);

	if (global.isAndroid) {
		const _colors = Array.create('int', colors.length);
		for (let i = 0; i < colors.length; i++) {
			_colors[i] = colors[i];
		}
		const _stops = Array.create('float', stops.length);
		for (let i = 0; i < stops.length; i++) {
			_stops[i] = stops[i];
		}

		return new com.google.maps.android.heatmaps.Gradient(_colors, _stops);
	} else {
		return GMUGradient.alloc().initWithColorsStartPointsColorMapSize(colors, stops, 256);
	}
}
