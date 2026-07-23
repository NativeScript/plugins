import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider, intoNativeHeatmapGradient } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions) {
	if (options?.coordinates) {
		const builder = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder();
		const data = new java.util.ArrayList();

		options.coordinates.forEach((coordinate) => {
			data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		});

		if (typeof options?.maxIntensity === 'number') {
			builder.maxIntensity(options.maxIntensity);
		}
		if (typeof options?.opacity === 'number') {
			builder.opacity(options.opacity);
		}
		if (typeof options?.radius === 'number') {
			builder.radius(options.radius);
		}
		if (options.gradient && Array.isArray(options.gradient) && options.gradient.length > 0) {
			builder.gradient(intoNativeHeatmapGradient(options.gradient));
		}

		builder.data(data);
		return builder.build();
	}
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: com.google.maps.android.heatmaps.HeatmapTileProvider;
	#opacity: number;
	#radius: number;
	#maxIntensity: number;

	constructor(options?: HeatmapOptions) {
		if (options) {
			this.#native = intoNativeHeatmapProvider(options);
			// mirrors the native defaults so reads match what is rendered
			this.#opacity = options.opacity ?? 0.7;
			this.#radius = options.radius ?? 20;
			this.#maxIntensity = options.maxIntensity;
		}
	}

	static fromNative(nativeHeatmap: com.google.maps.android.heatmaps.HeatmapTileProvider) {
		if (nativeHeatmap instanceof com.google.maps.android.heatmaps.HeatmapTileProvider) {
			const heatmap = new HeatmapTileProvider();
			heatmap.#native = nativeHeatmap;
			return heatmap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get ios() {
		return null;
	}

	get opacity(): number {
		return this.#opacity;
	}
	set opacity(opacity: number) {
		this.#opacity = opacity;
		this.native.setOpacity(opacity);
	}

	setGradient(gradients: IGradient[]): void {
		this.native.setGradient(intoNativeHeatmapGradient(gradients));
	}

	get radius(): number {
		return this.#radius;
	}
	set radius(radius: number) {
		this.#radius = radius;
		this.native.setRadius(radius);
	}

	get maxIntensity(): number {
		return this.#maxIntensity;
	}
	set maxIntensity(maxIntensity: number) {
		this.#maxIntensity = maxIntensity;
		this.native.setMaxIntensity(maxIntensity);
	}

	setData(coordinates: Coordinate[]): void {
		const data = new java.util.ArrayList();

		coordinates.forEach((coordinate) => {
			data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		});

		this.native.setData(data);
	}

	getTile(x: number, y: number, z: number): com.google.android.gms.maps.model.Tile {
		return this.native.getTile(x, y, z);
	}
}
