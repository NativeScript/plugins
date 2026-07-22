import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap);

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

export class ClusterManager implements IClusterManager<ClusterItem> {
	static fromNative: (nativeClusterManager) => ClusterManager;
	addItems: (clusterItems: ClusterItem[]) => void;
	addItem: (clusterItem: ClusterItem) => void;
	removeItems: (clusterItems: ClusterItem[]) => void;
	removeItem: (clusterItem: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: ClusterRenderer) => void;
	/**
	 * `com.google.maps.android.clustering.ClusterManager` on Android,
	 * `GMUClusterManager` on iOS.
	 */
	native: any;
	android: any;
	ios: any;
}
