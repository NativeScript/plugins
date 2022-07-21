import { MarkerOptions, GoogleMap } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '../../../google-maps/utils';
import { IClusterManager } from '.';

export class ClusterItem {
	#native: GMSMarker;

	constructor(options: MarkerOptions) {
		this.#native = intoNativeMarkerOptions(options);
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class ClusterRenderer {
	#native: GMUClusterRenderer;

	constructor(map: GoogleMap, clusterManager: ClusterManager) {
		const iconGenerator = GMUDefaultClusterIconGenerator.alloc().init();
		this.#native = GMUDefaultClusterRenderer.alloc().initWithMapViewClusterIconGenerator(map.native, iconGenerator);
	}

	get native() {
		return this.#native;
	}
}

export class ClusterManager implements IClusterManager {
	#native: GMUClusterManager;

	constructor(map: GoogleMap) {
		const algorithm = GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
		const renderer = new ClusterRenderer(map, null);
		this.#native = GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);

		// TODO:
		// this.#native.setMapDelegate
	}

	static fromNative(map: GoogleMap, nativeClusterManager: GMUClusterManager) {
		if (nativeClusterManager instanceof GMUClusterManager) {
			const clusterManager = new ClusterManager(map);
			clusterManager.#native = nativeClusterManager;
			return clusterManager;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.#native;
	}

	setRenderer(renderer) {
		// TODO;
	}

	addItem(clusterItem: ClusterItem) {
		this.native.addItem(clusterItem.native);
	}

	addItems(clusterItems: ClusterItem[]) {
		this.native.addItems(clusterItems.map((item) => item.native));
	}

	removeItem(clusterItem: ClusterItem) {
		this.native.removeItem(clusterItem.native);
	}

	removeItems(clusterItems: ClusterItem[]) {
		clusterItems.forEach((item) => {
			this.native.removeItem(item.native);
		});
	}

	clearItems() {
		this.native.clearItems();
	}

	cluster() {
		this.native.cluster();
	}
}
