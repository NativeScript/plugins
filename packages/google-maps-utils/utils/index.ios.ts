import { GoogleMap } from '@nativescript/google-maps';
import { ClusterRenderer, HeatmapOptions, IGradient } from '..';

export function intoNativeHeatmapProvider(options: HeatmapOptions) {
	if (!options.coordinates) {
		return;
	}

	const heatmap = GMUHeatmapTileLayer.alloc().init();

	const defaultGradient: IGradient[] = [
		{ color: 'green', stop: 0.1 },
		{ color: 'red', stop: 0.15 },
	];

	this.setGradient(options?.gradient ?? defaultGradient);
	this.opacity = options?.opacity ?? 0.7;
	this.radius = options?.radius ?? 80;
	this.setData(options.coordinates);

	return heatmap;
}

// TODO:
// setMapDelegate
export function intoNativeClusterManager(map: GoogleMap) {
	const algorithm = GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
	const renderer = new ClusterRenderer(map, null);
	return GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);
}
