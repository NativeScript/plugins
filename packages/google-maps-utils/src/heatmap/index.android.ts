import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { IGradient, IHeatmapOptions, IHeatmapTileProvider } from '.';
import { intoNativeHeatmapGradient } from '../utils/common';

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: com.google.maps.android.heatmaps.HeatmapTileProvider;

	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions) {
		if (coordinates) {
			const builder = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder();
			const data = new java.util.ArrayList();

			coordinates.forEach((coordinate) => {
				data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
			});

			if (heatmapOptions) {
				if (heatmapOptions.maxIntensity) {
					builder.maxIntensity(heatmapOptions.maxIntensity);
				}
				if (heatmapOptions.opacity) {
					builder.opacity(heatmapOptions.opacity);
				}
				if (heatmapOptions.radius) {
					builder.maxIntensity(heatmapOptions.radius);
				}
				if (heatmapOptions.gradient) {
					// TODO: Fix nativeGradient
					// builder.gradient = intoNativeHeatmapGradient(heatmapOptions.gradient);
				}
			}

			builder.data(data);
			this.#native = builder.build();
		}
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
