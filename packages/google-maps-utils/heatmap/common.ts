import { Color } from '@nativescript/core';
import { Coordinate } from '@nativescript/google-maps';
import { intoNativeColor } from '../utils/common';

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
