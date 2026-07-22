import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider, intoNativeHeatmapGradient } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions) {
	if (!options.coordinates) {
		return;
	}
	const heatmap = GMUHeatmapTileLayer.alloc().init();

	const defaultGradient: IGradient[] = [
		{ color: 'green', stop: 0.1 },
		{ color: 'red', stop: 0.15 },
	];

	heatmap.gradient = intoNativeHeatmapGradient(options?.gradient ?? defaultGradient);
	heatmap.opacity = options?.opacity ?? 0.7;
	heatmap.radius = options?.radius ?? 80;
	heatmap.weightedData = options?.coordinates.map((coordinate) => {
		return GMUWeightedLatLng.alloc().initWithCoordinateIntensity({ latitude: coordinate.lat, longitude: coordinate.lng }, 1.0);
	}) as any;

	return heatmap;
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: GMUHeatmapTileLayer;

	constructor(options?: HeatmapOptions) {
		this.#native = intoNativeHeatmapProvider(options);
	}

	static fromNative(nativeHeatmap: GMUHeatmapTileLayer) {
		if (nativeHeatmap instanceof GMUHeatmapTileLayer) {
			const heatmapTileProvider = new HeatmapTileProvider();
			heatmapTileProvider.#native = nativeHeatmap;
			return heatmapTileProvider;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.native.opacity = opacity;
	}

	setGradient(gradients: IGradient[]): void {
		this.native.gradient = intoNativeHeatmapGradient(gradients);
	}

	set radius(radius: number) {
		this.native.radius = radius;
	}

	set maxIntensity(maxIntensity: number) {
		this.native.maximumZoomIntensity = maxIntensity;
	}

	setData(coordinates: Coordinate[]): void {
		this.native.weightedData = coordinates.map((coordinate) => {
			return GMUWeightedLatLng.alloc().initWithCoordinateIntensity({ latitude: coordinate.lat, longitude: coordinate.lng }, 1.0);
		}) as any;
	}

	getTile(x: number, y: number, z: number): UIImage {
		return this.native.tileForXYZoom(x, y, z);
	}
}
