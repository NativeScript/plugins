import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '@nativescript/google-maps/utils';
import { IClusterManager } from './common';

export * from './common';

// TODO:
// setMapDelegate
export function intoNativeClusterManager(map: GoogleMap) {
	const algorithm = GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
	const renderer = new ClusterRenderer(map, null);
	return GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);
}

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

export class ClusterManager implements Partial<IClusterManager<ClusterItem>> {
	#native: GMUClusterManager;

	static fromNative(nativeClusterManager: GMUClusterManager) {
		if (nativeClusterManager instanceof GMUClusterManager) {
			const clusterManager = new ClusterManager();
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
