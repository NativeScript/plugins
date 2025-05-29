import { Color, encoding } from '@nativescript/core';
import { GeoJSON } from 'geojson';
import { Coordinate, GoogleMap, ITileProvider, MarkerOptions } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '@nativescript/google-maps/utils';
import { HeatmapOptions, IClusterManager, IFeature, IGeoJsonLayer, IGeometry, IGeometryStyle, IGradient, IHeatmapTileProvider, intoNativeClusterManager, intoNativeHeatmapGradient, intoNativeHeatmapProvider } from '.';
import { applyMixins } from './utils/common';

// export * from './experimental/datalayer';
// export * from './experimental/iconfactory';
export * from './utils';

let UNIQUE_STYLE_ID = 0;

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
	clusterManager(markers: MarkerOptions[]) {
		const clusterManager = ClusterManager.fromNative(intoNativeClusterManager(this as unknown as GoogleMap));

		const clusters = markers.map((marker) => new ClusterItem(marker));
		clusterManager.addItems(clusters);

		clusterManager.cluster();

		return clusterManager;
	}

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle) {
		if ((this as unknown as GoogleMap) && geoJson) {
			const style = new GeometryStyle(styleOptions);

			const jsonString = new NSString({ UTF8String: JSON.stringify(geoJson) });
			const parser = new GMUGeoJSONParser({ data: jsonString.dataUsingEncoding(encoding.UTF_8) });
			parser.parse();

			const features = parser.features;
			for (const feature of features) {
				feature.style = style.native;
			}

			const renderer = new GMUGeometryRenderer({ map: (this as unknown as GoogleMap).native, geometries: features });

			const layer = GeoJsonLayer.fromNative(renderer);

			layer.addLayerToMap();

			return layer;
		}
		return null;
	}

	removeGeoJson(geoJson: GeoJsonLayer) {
		if (geoJson) {
			geoJson.removeLayerFromMap();
		}
	}
}

export class HeatmapTileProvider implements ITileProvider, IHeatmapTileProvider {
	#native: GMUHeatmapTileLayer;

	constructor(options?: HeatmapOptions) {
		this.#native = intoNativeHeatmapProvider(options);
	}

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

export class GeometryStyle implements IGeometryStyle {
	#native: GMUStyle;

	constructor(public geometryStyles: Partial<IGeometryStyle>) {
		Object.assign(this, geometryStyles);

		this.#native = new GMUStyle({
			styleID: `google-maps-utils-style-${UNIQUE_STYLE_ID++}`,
			strokeColor: this.strokeColor?.ios ?? null,
			fillColor: this.fillColor?.ios ?? null,
			width: this.width ?? 1,
			scale: this.scale ?? 0,
			heading: this.heading ?? 0,
			anchor: CGPointMake(this.anchor?.[0] ?? 0, this.anchor?.[1] ?? 0),
			iconUrl: this.iconUrl ?? null,
			title: this.title ?? null,
			hasFill: !!this.fillColor,
			hasStroke: !!this.strokeColor,
		} as any);
	}

	strokeColor: Color;
	fillColor: Color;
	width: number;
	scale: number;
	heading: number;
	anchor: [number, number];
	iconUrl: string;
	title: string;

	get native() {
		return this.#native;
	}
}

export class GeoJsonLayer implements IGeoJsonLayer {
	#native: GMUGeometryRenderer;
	// #parser: GMUGeoJSONParser;
	style: GeometryStyle;

	// constructor(private map: GoogleMap, private geometries: any, private styles?: Partial<IGeometryStyle>) {
	// 	this.style = new GeometryStyle(styles);

	// 	const jsonString = new NSString({ UTF8String: JSON.stringify(geometries) });
	// 	this.#parser = new GMUGeoJSONParser({ data: jsonString.dataUsingEncoding(encoding.UTF_8) });
	// 	this.#parser.parse();

	// 	const features = this.#parser.features;
	// 	for (const feature of features) {
	// 		feature.style = this.style.native;
	// 	}

	// 	this.#native = new GMUGeometryRenderer({ map: this.map.native, geometries: features });
	// }

	static fromNative(nativeGeoJsonLayer: GMUGeometryRenderer) {
		if (nativeGeoJsonLayer instanceof GMUGeometryRenderer) {
			const geoJsonLayer = new GeoJsonLayer();
			geoJsonLayer.#native = nativeGeoJsonLayer;
			return geoJsonLayer;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get features() {
		// const features = [];
		// for (const feature of this.#parser.features) {
		// 	const f = feature as GMUGeometryContainer;

		// 	GeoJsonFeature.fromNative(f);
		// 	f.geometry;
		// 	f.style;
		// }
		return null;
	}

	addLayerToMap() {
		this.native.render();
	}

	removeLayerFromMap() {
		this.native.clear();
	}
}

export class GeoJsonFeature implements IFeature {
	#native: GMUGeometryCollection;

	static fromNative(nativeGeometryContainer: GMUGeometryCollection) {
		if (nativeGeometryContainer instanceof GMUGeometryCollection) {
			const geoJsonFeature = new GeoJsonFeature();
			geoJsonFeature.#native = nativeGeometryContainer;
			return geoJsonFeature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.#native;
	}

	get geometry() {
		const geometries = [];

		for (const geometry of this.native.geometries) {
			geometries.push(Geometry.fromNative(geometry));
		}

		return geometries;
	}

	get properties() {
		return;
	}

	get id() {
		return this.native.description;
	}
}

export class Geometry implements IGeometry {
	#native: GMUGeometry;

	static fromNative(nativeGeometry: GMUGeometry) {
		if (nativeGeometry) {
			const geometry = new Geometry();
			geometry.#native = nativeGeometry;
			return geometry;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.#native;
	}

	get type() {
		return this.#native.type;
	}

	get geometries() {
		return this.native;
	}
}
