export * from './common';
import { Utils } from '@nativescript/core';
import { GoogleMap } from '@nativescript/google-maps';
import { HeatmapOptions } from '..';
import { intoNativeHeatmapGradient } from './common';

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

export function intoNativeClusterManager(map: GoogleMap) {
	const manager = new com.google.maps.android.clustering.ClusterManager(Utils.ad.getApplicationContext(), map.native);

	if (map?.native?.setOnCameraIdleListener) {
		map.native.setOnCameraIdleListener(manager);
	}

	return manager;
}
