import { ImageSource, Utils } from '@nativescript/core';
import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { addOnCameraIdleListener, addOnMarkerClickListener, hueFromColor } from '@nativescript/google-maps/utils';
import { intoNativeColor } from '../utils/common';
import { ClusterItemTapEventData, ClusterManagerBase, ClusterManagerOptions, ClusterTapEventData, IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap, options?: ClusterManagerOptions) {
	// Listener wiring is done in ClusterManager.fromNative via the shared listener hub, so the
	// manager no longer clobbers the camera-idle/marker-click listeners google-maps installs.
	const manager = new com.google.maps.android.clustering.ClusterManager<com.google.maps.android.clustering.ClusterItem>(Utils.ad.getApplicationContext(), map.native);

	if (options?.algorithm === 'grid') {
		manager.setAlgorithm(new com.google.maps.android.clustering.algo.GridBasedAlgorithm<com.google.maps.android.clustering.ClusterItem>());
	}
	if (typeof options?.animate === 'boolean') {
		manager.setAnimation(options.animate);
	}

	return manager;
}

export class ClusterItem extends com.google.maps.android.clustering.ClusterItem {
	constructor(public options: MarkerOptions) {
		super({
			getPosition: (): com.google.android.gms.maps.model.LatLng => {
				return new com.google.android.gms.maps.model.LatLng(this.options?.position?.lat ?? 0, this.options?.position?.lng ?? 0);
			},
			getSnippet: (): string => {
				return this.options?.snippet ?? '';
			},
			getTitle: (): string => {
				return this.options?.title ?? '';
			},
			getZIndex: (): any => {
				return java.lang.Float.valueOf(this.options?.zIndex ?? 0);
			},
		});
	}

	get native() {
		return this;
	}

	get android() {
		return this;
	}

	get ios() {
		return null;
	}
}

@NativeClass
export class ClusterRenderer extends com.google.maps.android.clustering.view.DefaultClusterRenderer<any> {
	constructor(map: GoogleMap, clusterManager: ClusterManager) {
		super(Utils.android.getApplicationContext(), map.native, clusterManager.native);
	}

	get native() {
		return this;
	}

	get android() {
		return this;
	}

	get ios() {
		return null;
	}

	override onBeforeClusterItemRendered(item: ClusterItem, opts: com.google.android.gms.maps.model.MarkerOptions): void {
		super.onBeforeClusterItemRendered(item, opts);

		if (typeof item.options?.draggable === 'boolean') {
			opts.draggable(item.options.draggable);
		}

		if (typeof item.options?.anchorU === 'number' || typeof item.options?.anchorV === 'number') {
			const anchorU = item.options?.anchorU ?? opts.getAnchorU();
			const anchorV = item.options?.anchorV ?? opts?.getAnchorV();
			opts.anchor(anchorU, anchorV);
		}

		if (item.options?.position) {
			opts.position(new com.google.android.gms.maps.model.LatLng(item.options.position.lat, item.options.position.lng));
		}

		if (item.options?.title) {
			opts.title(item.options.title);
		}

		if (item.options?.snippet) {
			opts.snippet(item.options.snippet);
		}

		if (item.options?.icon) {
			if (item.options?.icon instanceof android.graphics.Bitmap) {
				const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(item.options.icon);
				opts.icon(desc);
			} else if (item.options?.icon instanceof ImageSource) {
				const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(item.options.icon.android);
				opts.icon(desc);
			}
		}

		const color = intoNativeColor(item.options.color);

		if (color !== null) {
			opts.icon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(color)));
		}

		if (typeof item.options?.rotation === 'number') {
			opts.rotation(item.options.rotation);
		}

		if (typeof item.options?.flat === 'boolean') {
			opts.flat(item.options.flat);
		}

		if (typeof item.options?.zIndex === 'number') {
			opts.zIndex(item.options.zIndex);
		}
	}
}

export class ClusterManager extends ClusterManagerBase implements IClusterManager<ClusterItem> {
	#native: com.google.maps.android.clustering.ClusterManager<com.google.maps.android.clustering.ClusterItem>;

	static fromNative(nativeClusterManager: com.google.maps.android.clustering.ClusterManager<any>, map?: GoogleMap) {
		if (nativeClusterManager instanceof com.google.maps.android.clustering.ClusterManager) {
			const clusterManager = new ClusterManager();
			clusterManager.#native = nativeClusterManager;
			if (map?.native) {
				// The native ClusterManager is itself the map's OnCameraIdleListener and
				// OnMarkerClickListener; register it as a hub secondary so it re-clusters and consumes
				// cluster-marker taps without clobbering google-maps' own listeners.
				addOnCameraIdleListener(map.native, nativeClusterManager as any);
				addOnMarkerClickListener(map.native, nativeClusterManager as any);

				nativeClusterManager.setOnClusterClickListener(
					new com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<com.google.maps.android.clustering.ClusterItem>({
						onClusterClick: (cluster) => {
							clusterManager.#notifyCluster(cluster);
							return false;
						},
					}),
				);
				nativeClusterManager.setOnClusterItemClickListener(
					new com.google.maps.android.clustering.ClusterManager.OnClusterItemClickListener<com.google.maps.android.clustering.ClusterItem>({
						onClusterItemClick: (item) => {
							clusterManager.#notifyItem(item);
							return false;
						},
					}),
				);
			}
			return clusterManager;
		}
		return null;
	}

	#notifyCluster(cluster: com.google.maps.android.clustering.Cluster<com.google.maps.android.clustering.ClusterItem>) {
		const items: ClusterItem[] = [];
		const iter = cluster.getItems().iterator();
		while (iter.hasNext()) {
			// items were added as JS ClusterItem instances and come back as the same objects.
			items.push(iter.next() as unknown as ClusterItem);
		}
		const position = cluster.getPosition();
		this.notify(<ClusterTapEventData<ClusterItem>>{
			eventName: ClusterManagerBase.clusterTapEvent,
			object: this,
			position: { lat: position.latitude, lng: position.longitude },
			size: cluster.getSize(),
			items,
		});
	}

	#notifyItem(item: com.google.maps.android.clustering.ClusterItem) {
		this.notify(<ClusterItemTapEventData<ClusterItem>>{
			eventName: ClusterManagerBase.clusterItemTapEvent,
			object: this,
			item: item as unknown as ClusterItem,
		});
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get ios() {
		return null;
	}

	setRenderer(renderer: ClusterRenderer) {
		this.native.setRenderer(renderer);
	}

	addItem(clusterItem: ClusterItem) {
		this.native.addItem(clusterItem);
	}

	addItems(clusterItems: ClusterItem[]) {
		const clusterItemArray = new java.util.ArrayList();
		for (const clusterItem of clusterItems) {
			clusterItemArray.add(clusterItem);
		}
		this.native.addItems(clusterItemArray);
	}

	removeItem(clusterItem: ClusterItem) {
		this.native.removeItem(clusterItem);
	}

	removeItems(clusterItems: ClusterItem[]) {
		const clusterItemArray = new java.util.ArrayList();
		for (const clusterItem of clusterItems) {
			clusterItemArray.add(clusterItem);
		}
		this.native.removeItems(clusterItemArray);
	}

	clearItems() {
		this.native.clearItems();
	}

	cluster() {
		this.native.cluster();
	}
}
