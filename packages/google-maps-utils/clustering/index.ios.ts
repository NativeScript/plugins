import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '@nativescript/google-maps/utils';
import { ClusterItemTapEventData, ClusterManagerBase, ClusterManagerOptions, ClusterTapEventData, IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap, options?: ClusterManagerOptions) {
	const algorithm = options?.algorithm === 'grid' ? GMUGridBasedClusterAlgorithm.alloc().init() : GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
	const renderer = new ClusterRenderer(map, null);

	const nativeRenderer = renderer.native as GMUDefaultClusterRenderer;
	if (typeof options?.minClusterSize === 'number') {
		nativeRenderer.minimumClusterSize = options.minClusterSize;
	}
	if (typeof options?.animate === 'boolean') {
		nativeRenderer.animatesClusters = options.animate;
	}
	if (typeof options?.animationDuration === 'number') {
		// GMU uses seconds; the shared API takes milliseconds.
		nativeRenderer.animationDuration = options.animationDuration / 1000;
	}

	// Delegate wiring (re-cluster on camera idle + tap events) is done in ClusterManager.fromNative.
	return GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);
}

/**
 * Bridges GMUClusterManager cluster/item taps to the `ClusterManager`'s `clusterTap` /
 * `clusterItemTap` events.
 */
@NativeClass
@ObjCClass(GMUClusterManagerDelegate)
class GMUClusterManagerDelegateImpl extends NSObject implements GMUClusterManagerDelegate {
	private _owner: WeakRef<ClusterManager>;

	static initWithOwner(owner: WeakRef<ClusterManager>): GMUClusterManagerDelegateImpl {
		const delegate = <GMUClusterManagerDelegateImpl>GMUClusterManagerDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	clusterManagerDidTapCluster(clusterManager: GMUClusterManager, cluster: GMUCluster): boolean {
		this._owner?.get?.()?._notifyCluster(cluster);
		// false => let GMU perform its default behavior (zoom into the cluster).
		return false;
	}

	clusterManagerDidTapClusterItem(clusterManager: GMUClusterManager, clusterItem: GMUClusterItem): boolean {
		this._owner?.get?.()?._notifyItem(clusterItem);
		return false;
	}
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

export class ClusterManager extends ClusterManagerBase implements IClusterManager<ClusterItem> {
	#native: GMUClusterManager;
	#delegate: GMUClusterManagerDelegateImpl;
	// GMU hands tapped items back as the native GMSMarker; keep a registry to resolve the wrapper.
	#items = new Map<GMSMarker, ClusterItem>();

	static fromNative(nativeClusterManager: GMUClusterManager, map?: GoogleMap) {
		if (nativeClusterManager instanceof GMUClusterManager) {
			const clusterManager = new ClusterManager();
			clusterManager.#native = nativeClusterManager;
			if (map?.native) {
				// GMUClusterManager is itself a GMSMapViewDelegate: install it in front of the current
				// delegate so it re-clusters on camera idle and forwards everything else to the previous
				// delegate. Its own delegate surfaces the cluster/item tap events.
				clusterManager.#delegate = GMUClusterManagerDelegateImpl.initWithOwner(new WeakRef(clusterManager));
				nativeClusterManager.setDelegateMapDelegate(clusterManager.#delegate, map.native.delegate);
				map.native.delegate = nativeClusterManager;
			}
			return clusterManager;
		}
		return null;
	}

	_notifyCluster(cluster: GMUCluster) {
		const items: ClusterItem[] = [];
		const nativeItems = cluster.items;
		for (let i = 0; i < nativeItems.count; i++) {
			const wrapper = this.#items.get(nativeItems.objectAtIndex(i) as unknown as GMSMarker);
			if (wrapper) {
				items.push(wrapper);
			}
		}
		this.notify(<ClusterTapEventData<ClusterItem>>{
			eventName: ClusterManagerBase.clusterTapEvent,
			object: this,
			position: { lat: cluster.position.latitude, lng: cluster.position.longitude },
			size: cluster.count,
			items,
		});
	}

	_notifyItem(item: GMUClusterItem) {
		this.notify(<ClusterItemTapEventData<ClusterItem>>{
			eventName: ClusterManagerBase.clusterItemTapEvent,
			object: this,
			item: this.#items.get(item as unknown as GMSMarker) ?? null,
		});
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
		this.#items.set(clusterItem.native, clusterItem);
		this.native.addItem(clusterItem.native);
	}

	addItems(clusterItems: ClusterItem[]) {
		clusterItems.forEach((item) => this.#items.set(item.native, item));
		this.native.addItems(clusterItems.map((item) => item.native));
	}

	removeItem(clusterItem: ClusterItem) {
		this.#items.delete(clusterItem.native);
		this.native.removeItem(clusterItem.native);
	}

	removeItems(clusterItems: ClusterItem[]) {
		clusterItems.forEach((item) => {
			this.#items.delete(item.native);
			this.native.removeItem(item.native);
		});
	}

	clearItems() {
		this.#items.clear();
		this.native.clearItems();
	}

	cluster() {
		this.native.cluster();
	}
}
