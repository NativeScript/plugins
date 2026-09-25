import { EventData, Observable } from '@nativescript/core';
import { Coordinate } from '@nativescript/google-maps';

/**
 * Configuration for a cluster manager, passed to `map.clusterManager(markers, options)`.
 */
export interface ClusterManagerOptions {
	/**
	 * Clustering algorithm. `'distance'` (default) groups nearby items; `'grid'` snaps items to a
	 * fixed grid (cheaper, coarser).
	 */
	algorithm?: 'distance' | 'grid';
	/** Minimum number of items before they render as a cluster rather than individual markers. */
	minClusterSize?: number;
	/** Whether clusters animate as they split/merge on zoom. Defaults to the native default (on). */
	animate?: boolean;
	/** Cluster animation duration in milliseconds. */
	animationDuration?: number;
}

export interface IClusterManager<TClusterItem = any> {
	addItems: (clusterItems: TClusterItem[]) => void;
	addItem: (clusterItem: TClusterItem) => void;
	removeItems: (clusterItems: TClusterItem[]) => void;
	removeItem: (clusterItem: TClusterItem) => void;
	clearItems: () => void;
	cluster: () => void;
	setRenderer: (clusterRenderer: any) => void;
	android?: any;
	ios?: any;
	native?: any;
}

/**
 * Fired when a cluster (a group of items) is tapped.
 */
export interface ClusterTapEventData<TClusterItem = any> extends EventData {
	/** Center position of the cluster. */
	position: Coordinate;
	/** Number of items in the cluster. */
	size: number;
	/** The items contained in the cluster. */
	items: TClusterItem[];
}

/**
 * Fired when a single (unclustered) item is tapped.
 */
export interface ClusterItemTapEventData<TClusterItem = any> extends EventData {
	item: TClusterItem;
}

/**
 * Base class for the platform `ClusterManager`s. Extends `Observable` so consumers
 * can listen for `clusterTap` / `clusterItemTap`.
 */
export abstract class ClusterManagerBase extends Observable {
	static clusterTapEvent = 'clusterTap';
	static clusterItemTapEvent = 'clusterItemTap';
}
