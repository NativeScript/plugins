import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '@nativescript/google-maps/utils';
import { IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap) {
	const algorithm = GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
	const renderer = new ClusterRenderer(map, null);
	const manager = GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);

	// GMUClusterManager is itself a GMSMapViewDelegate: install it in front of the
	// current delegate so it re-clusters on camera idle, and forward everything
	// else to the previous delegate via setMapDelegate.
	manager.setMapDelegate(map.native.delegate);
	map.native.delegate = manager;

	return manager;
}

export class ClusterItem {
	#native: GMSMarker;

	constructor(public options: MarkerOptions) {
		this.#native = intoNativeMarkerOptions(options);
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

	get android() {
		return null;
	}

	get ios() {
		return this.native;
	}
}

export class ClusterManager implements IClusterManager<ClusterItem> {
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

	get android() {
		return null;
	}

	get ios() {
		return this.#native;
	}

	setRenderer(renderer: ClusterRenderer) {
		// Not supported on iOS: GMUClusterManager takes its renderer at init time.
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
