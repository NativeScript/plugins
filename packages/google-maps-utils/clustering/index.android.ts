import { ImageSource, Utils } from '@nativescript/core';
import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { hueFromColor } from '@nativescript/google-maps/utils';
import { intoNativeColor } from '../utils/common';
import { IClusterManager } from './common';

export * from './common';

export function intoNativeClusterManager(map: GoogleMap) {
	const manager = new com.google.maps.android.clustering.ClusterManager(Utils.ad.getApplicationContext(), map.native);

	if (map?.native?.setOnCameraIdleListener) {
		// NOTE: ClusterManager must be the map's OnCameraIdleListener to re-cluster
		// on camera changes. This is a single-slot native API, so it replaces the
		// listener @nativescript/google-maps registers for its cameraPosition event.
		map.native.setOnCameraIdleListener(manager);
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

export class ClusterManager implements IClusterManager<ClusterItem> {
	#native: com.google.maps.android.clustering.ClusterManager<com.google.maps.android.clustering.ClusterItem>;

	static fromNative(nativeClusterManager: com.google.maps.android.clustering.ClusterManager<any>) {
		if (nativeClusterManager instanceof com.google.maps.android.clustering.ClusterManager) {
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
