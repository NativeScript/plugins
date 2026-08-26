import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { ClusterManagerBase, ClusterManagerOptions, IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap, options?: ClusterManagerOptions);

export class ClusterItem {
	constructor(options: MarkerOptions);
	options?: MarkerOptions;
	/**
	 * `com.google.maps.android.clustering.ClusterItem` implementation on Android,
	 * `GMSMarker` on iOS.
	 */
	native: any;
	android: any; // com.google.maps.android.clustering.ClusterItem
	ios: any; // GMSMarker
}

export class ClusterRenderer {
	constructor(map: GoogleMap, manager: ClusterManager);
	android?: any;
	ios?: any;
	native?: any;
}

export class ClusterManager extends ClusterManagerBase implements IClusterManager<ClusterItem> {
	static fromNative: (nativeClusterManager: any, map?: GoogleMap) => ClusterManager | null;
	addItems: (clusterItems: ClusterItem[]) => void;
	addItem: (clusterItem: ClusterItem) => void;
	removeItems: (clusterItems: ClusterItem[]) => void;
	removeItem: (clusterItem: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	/**
	 * No-op on iOS — `GMUClusterManager` takes its renderer when it is created.
	 */
	setRenderer: (clusterRenderer: ClusterRenderer) => void;
	/**
	 * `com.google.maps.android.clustering.ClusterManager` on Android,
	 * `GMUClusterManager` on iOS.
	 */
	native: any;
	android: any;
	ios: any;
}
