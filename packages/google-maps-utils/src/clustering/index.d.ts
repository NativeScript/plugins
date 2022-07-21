import { GoogleMap } from '@nativescript/google-maps';

export class ClusterItem {
	constructor(markerOptions: MarkerOptions);
}

export class ClusterRenderer {
	constructor(private map: GoogleMap, private manager: ClusterManager);
	android?: any;
	ios?: any;
	native?: any;
}

export interface IClusterManager {
	addItems: (markers: ClusterItem[]) => void;
	addItem: (marker: ClusterItem) => void;
	removeItems: (markers: ClusterItem[]) => void;
	removeItem: (marker: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: any) => void;
	android?: any;
	ios?: any;
	native?: any;
}

export class ClusterManager implements IClusterManager {
	static fromNative: (map: GoogleMap, nativeClusterManager) => ClusterManager;
	constructor(private map: GoogleMap);
	addItems: (markers: ClusterItem[]) => void;
	addItem: (marker: ClusterItem) => void;
	removeItems: (markers: ClusterItem[]) => void;
	removeItem: (marker: ClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: ClusterRenderer) => void;
	android?: any;
	ios?: any;
	native?: any;
}
