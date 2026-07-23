import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider, intoNativeHeatmapGradient } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions) {
	if (!options?.coordinates) {
		return;
	}
	const heatmap = GMUHeatmapTileLayer.alloc().init();

	// mirrors the Android native defaults (green -> red, radius 20, opacity 0.7)
	const defaultGradient: IGradient[] = [
		{ color: 'green', stop: 0.2 },
		{ color: 'red', stop: 1.0 },
	];

	heatmap.gradient = intoNativeHeatmapGradient(options?.gradient ?? defaultGradient);
	heatmap.opacity = options?.opacity ?? 0.7;
	heatmap.radius = options?.radius ?? 20;
	if (typeof options?.maxIntensity === 'number') {
		heatmap.maximumZoomIntensity = options.maxIntensity;
	}
	heatmap.weightedData = options?.coordinates.map((coordinate) => {
		return GMUWeightedLatLng.alloc().initWithCoordinateIntensity({ latitude: coordinate.lat, longitude: coordinate.lng }, 1.0);
	}) as any;

	return heatmap;
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: GMUHeatmapTileLayer;
	#opacity: number;
	#radius: number;
	#maxIntensity: number;

	constructor(options?: HeatmapOptions) {
		this.#native = intoNativeHeatmapProvider(options);
		this.#opacity = options?.opacity ?? 0.7;
		this.#radius = options?.radius ?? 20;
		this.#maxIntensity = options?.maxIntensity;
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

	get android() {
		return null;
	}

	get ios() {
		return this.native;
	}

	get opacity(): number {
		return this.#opacity;
	}
	set opacity(opacity: number) {
		this.#opacity = opacity;
		this.native.opacity = opacity;
	}

	setGradient(gradients: IGradient[]): void {
		this.native.gradient = intoNativeHeatmapGradient(gradients);
	}

	get radius(): number {
		return this.#radius;
	}
	set radius(radius: number) {
		this.#radius = radius;
		this.native.radius = radius;
	}

	get maxIntensity(): number {
		return this.#maxIntensity;
	}
	set maxIntensity(maxIntensity: number) {
		this.#maxIntensity = maxIntensity;
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
