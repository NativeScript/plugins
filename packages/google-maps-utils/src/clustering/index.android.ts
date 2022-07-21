import { Utils, ImageSource } from '@nativescript/core';
import { MarkerOptions, GoogleMap } from '@nativescript/google-maps';
import { hueFromColor } from '../../../google-maps/utils';
import { IClusterManager } from '.';
import { intoNativeColor } from '../utils/common';

export class ClusterItem extends com.google.maps.android.clustering.ClusterItem {
	constructor(public options: MarkerOptions) {
		super({
			getPosition: (): com.google.android.gms.maps.model.LatLng => {
				return new com.google.android.gms.maps.model.LatLng(options?.position?.lat ?? 0, options?.position?.lng ?? 0);
			},
			getSnippet: (): string => {
				return this.options?.snippet ?? '';
			},
			getTitle: (): string => {
				return this.options?.title ?? '';
			},
		});
	}
}

@NativeClass()
export class ClusterRenderer extends com.google.maps.android.clustering.view.DefaultClusterRenderer<any> {
	constructor(map: GoogleMap, clusterManager: ClusterManager) {
		super(Utils.ad.getApplicationContext(), map.native, clusterManager.native);
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

export class ClusterManager implements IClusterManager {
	#native: com.google.maps.android.clustering.ClusterManager<com.google.maps.android.clustering.ClusterItem>;

	constructor(private map: GoogleMap) {
		this.#native = new com.google.maps.android.clustering.ClusterManager(Utils.ad.getApplicationContext(), map.native);

		if (map?.native?.setOnCameraIdleListener) {
			map.native.setOnCameraIdleListener(this.#native);
		}

		const renderer = new ClusterRenderer(map, this);
		this.setRenderer(renderer);
	}

	static fromNative(map: GoogleMap, nativeClusterManager: com.google.maps.android.clustering.ClusterManager<any>) {
		if (nativeClusterManager instanceof com.google.maps.android.clustering.ClusterManager) {
			const clusterManager = new ClusterManager(map);
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
		this.native.removeItems(clusterItems as any);
	}

	clearItems() {
		this.native.clearItems();
	}

	cluster() {
		this.native.cluster();
	}
}
