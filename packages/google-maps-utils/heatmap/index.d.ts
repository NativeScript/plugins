import { Coordinate } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions);

export class HeatmapTileProvider implements IHeatmapTileProvider {
	constructor(options?: HeatmapOptions);
	static fromNative: (nativeHeatmap: any) => HeatmapTileProvider;
	setData: (coordinates: Coordinate[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
	/**
	 * `com.google.maps.android.heatmaps.HeatmapTileProvider` on Android,
	 * `GMUHeatmapTileLayer` on iOS.
	 */
	native: any;
	android: any;
	ios: any;
}
