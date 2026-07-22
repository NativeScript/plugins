import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { HeatmapOptions, IGradient, IHeatmapTileProvider, intoNativeHeatmapGradient } from './common';

export * from './common';

export function intoNativeHeatmapProvider(options: HeatmapOptions) {
	if (options.coordinates) {
		const builder = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder();
		const data = new java.util.ArrayList();

		options.coordinates.forEach((coordinate) => {
			data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		});

		if (options) {
			if (typeof options?.maxIntensity === 'number') {
				builder.maxIntensity(options.maxIntensity);
			}
			if (typeof options?.opacity === 'number') {
				builder.opacity(options.opacity);
			}
			if (typeof options?.radius === 'number') {
				builder.maxIntensity(options.radius);
			}
			if (options.gradient && Array.isArray(options.gradient) && options.gradient.length > 0) {
				builder.gradient(intoNativeHeatmapGradient(options.gradient));
			}
		}

		builder.data(data);
		return builder.build();
	}
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: com.google.maps.android.heatmaps.HeatmapTileProvider;

	constructor(options?: HeatmapOptions) {
		if (options) {
			this.#native = intoNativeHeatmapProvider(options);
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

	set opacity(opacity: number) {
		this.native.setOpacity(opacity);
	}

	setGradient(gradients: IGradient[]): void {
		this.native.setGradient(intoNativeHeatmapGradient(gradients));
	}

	set radius(radius: number) {
		this.native.setRadius(radius);
	}

	set maxIntensity(maxIntensity: number) {
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
