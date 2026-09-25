import { Coordinate } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions);

export class HeatmapTileProvider implements IHeatmapTileProvider {
	constructor(options?: HeatmapOptions);
	static fromNative: (nativeHeatmap: any) => HeatmapTileProvider | null;
	setData: (coordinates: Coordinate[]) => void;
	setWeightedData: (data: import('./common').WeightedLatLng[]) => void;
	setGradient: (gradient: IGradient[]) => void;
	opacity: number;
	radius: number;
	maxIntensity: number;
	/**
	 * The rendered tile image for the given tile coordinates.
	 * `com.google.android.gms.maps.model.Tile` on Android, `UIImage` on iOS.
	 */
	getTile: (x: number, y: number, z: number) => any;
	/**
	 * `com.google.maps.android.heatmaps.HeatmapTileProvider` on Android,
	 * `GMUHeatmapTileLayer` on iOS.
	 */
	native: any;
	android: any;
	ios: any;
}
