import { Coordinate, GoogleMap, ITileProvider, MarkerOptions } from '@nativescript/google-maps';
import { HeatmapOptions, IClusterManager, IGradient, IHeatmapTileProvider, intoNativeHeatmapGradient } from '.';
import { intoNativeMarkerOptions } from '../google-maps/utils';

export * from './experimental/datalayer';
export * from './experimental/iconfactory';
export * from './utils';

export class GoogleMapUtils {
	constructor(private map: GoogleMap) {}

	addHeatmapLayer(options: HeatmapOptions) {
		return {} as any; // HeatmapTileProvider.fromNative(this.map.addHeatmapLayer(options));
	}
	addClusterManager: (markers: MarkerOptions[]) => ClusterManager;
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: GMUHeatmapTileLayer;

	static fromNative(nativeHeatmap: GMUHeatmapTileLayer) {
		if (nativeHeatmap instanceof GMUHeatmapTileLayer) {
			const heatmapTileProvider = new HeatmapTileProvider();
			heatmapTileProvider.#native = nativeHeatmap;
			return heatmapTileProvider;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.native.opacity = opacity;
	}

	setGradient(gradients: IGradient[]): void {
		this.native.gradient = intoNativeHeatmapGradient(gradients);
	}

	set radius(radius: number) {
		this.native.radius = radius;
	}

	set maxIntensity(maxIntensity: number) {
		this.native.maximumZoomIntensity = maxIntensity;
	}

	setData(coordinates: Coordinate[]): void {
		this.native.weightedData = coordinates.map((coordinate) => {
			return GMUWeightedLatLng.alloc().initWithCoordinateIntensity(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng), 1.0);
		}) as any;
	}

	getTile(x: number, y: number, z: number): UIImage {
		return this.native.tileForXYZoom(x, y, z);
	}
}

export class ClusterItem {
	#native: GMSMarker;

	constructor(options: MarkerOptions) {
		this.#native = intoNativeMarkerOptions(options);
	}

	get native() {
		return this.#native;
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
}

export class ClusterManager implements Partial<IClusterManager> {
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

	get ios() {
		return this.#native;
	}

	setRenderer(renderer) {
		// TODO;
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
