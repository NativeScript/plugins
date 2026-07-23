import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';
import { GeoJSON } from 'geojson';
import { ClusterItem, ClusterManager, ClusterManagerOptions, ClusterRenderer, intoNativeClusterManager } from './clustering';
import { GeoJsonLayer, IGeometryStyle, KmlLayer } from './datalayer';
import { HeatmapOptions, HeatmapTileProvider } from './heatmap';
import { applyMixins } from './utils/common';

export * from './clustering';
export * from './datalayer';
export * from './geometry';
export * from './heatmap';
export * from './iconfactory';
export * from './utils';

let mixinInstalled = false;
export function overrideGoogleMap() {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const GMap = require('@nativescript/google-maps').GoogleMap;
	applyMixins(GMap, [GoogleMapUtils], { after: true });
}

export function installMixins() {
	if (!mixinInstalled) {
		mixinInstalled = true;
		overrideGoogleMap();
	}
}

export class GoogleMapUtils {
	heatmapProvider(options: HeatmapOptions) {
		return new HeatmapTileProvider(options);
	}

	clusterManager(markers: MarkerOptions[], options?: ClusterManagerOptions) {
		const GMap = this as unknown as GoogleMap;
		const clusterManager = ClusterManager.fromNative(intoNativeClusterManager(GMap, options), GMap);
		const renderer = new ClusterRenderer(GMap, clusterManager);
		if (typeof options?.minClusterSize === 'number') {
			renderer.native.setMinClusterSize(options.minClusterSize);
		}
		if (typeof options?.animate === 'boolean') {
			renderer.native.setAnimation(options.animate);
		}
		if (typeof options?.animationDuration === 'number') {
			renderer.native.setAnimationDuration(options.animationDuration);
		}
		clusterManager.setRenderer(renderer);

		const clusters = markers.map((marker) => new ClusterItem(marker));
		clusterManager.addItems(clusters);

		clusterManager.cluster();

		return clusterManager;
	}

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle) {
		if ((this as unknown as GoogleMap) && geoJson) {
			const geoJsonLayer = new GeoJsonLayer(this as unknown as GoogleMap, geoJson, styleOptions);
			geoJsonLayer.addLayerToMap();
			return geoJsonLayer;
		}
		return null;
	}

	removeGeoJson(geoJson: GeoJsonLayer) {
		if (geoJson) {
			geoJson.removeLayerFromMap();
		}
	}

	addKml(kml: string) {
		if ((this as unknown as GoogleMap) && kml) {
			const kmlLayer = new KmlLayer(this as unknown as GoogleMap, kml);
			kmlLayer.addLayerToMap();
			return kmlLayer;
		}
		return null;
	}

	removeKml(kml: KmlLayer) {
		if (kml) {
			kml.removeLayerFromMap();
		}
	}
}
