import { Color } from '@nativescript/core';
import { IGradient } from '../heatmap';

export function intoNativeColor(color: Color | string) {
	if (color instanceof Color) {
		return global.isAndroid ? color.android : color.ios;
	} else if (typeof color === 'string') {
		const res = new Color(color);
		return global.isAndroid ? res.android : res.ios;
	}
	return null;
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
		{ colors: [], stops: [] }
	);

	if (global.isAndroid) {
		// This is currently breaking... No idea why.
		return new com.google.maps.android.heatmaps.Gradient(colors, stops);
	} else {
		return GMUGradient.alloc().initWithColorsStartPointsColorMapSize(colors, stops, 256);
	}
}
