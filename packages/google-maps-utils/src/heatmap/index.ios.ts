import { Coordinate, ITileProvider } from '@nativescript/google-maps';
import { IGradient, IHeatmapOptions, IHeatmapTileProvider } from '.';
import { intoNativeHeatmapGradient } from '../utils/common';

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: GMUHeatmapTileLayer;
	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions) {
		if (coordinates) {
			this.#native = GMUHeatmapTileLayer.alloc().init();

			const defaultGradient: IGradient[] = [
				{ color: 'green', stop: 0.1 },
				{ color: 'red', stop: 0.15 },
			];
			this.setGradient(heatmapOptions?.gradient ?? defaultGradient);
			this.opacity = heatmapOptions?.opacity ?? 0.7;
			this.radius = heatmapOptions?.radius ?? 80;
		}

		this.setData(coordinates);
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
			return GMUWeightedLatLng.alloc().initWithCoordinateIntensity(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng), 1.0);
		}) as any;
	}

	getTile(x: number, y: number, z: number): UIImage {
		return this.native.tileForXYZoom(x, y, z);
	}
}
