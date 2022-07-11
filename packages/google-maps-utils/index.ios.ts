import { Color, encoding, Utils } from '@nativescript/core';
import { Coordinate, GoogleMap, ITileProvider, MapView, Marker, MarkerOptions, Poi } from '@nativescript/google-maps';
import { intoNativeMarkerOptions } from '../google-maps/utils';
import { IGeoJsonLayer, IGeometryStyle, IHeatmapOptions } from '.';
import { GoogleMapsUtilsCommon } from './common';

let UNIQUE_STYLE_ID = 0;

export class GoogleMapsUtils extends GoogleMapsUtilsCommon {
	constructor(private map: GoogleMap) {
		super();
	}

	addGeoJsonLayer(geoJson: any) {
		try {
			const layer = new GeoJsonLayer(this.map.native, geoJson);
			layer.addLayerToMap();
			return layer;
		} catch (error) {
			throw new Error(error);
		}
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
	style: GeometryStyle;

	constructor(private map: GoogleMap, private geometries: any, private styles?: Partial<IGeometryStyle>) {
		this.style = new GeometryStyle(styles);

		const jsonString = new NSString({ UTF8String: JSON.stringify(geometries) });
		const geoJsonParser = new GMUGeoJSONParser({ data: jsonString.dataUsingEncoding(encoding.UTF_8) });
		geoJsonParser.parse();

		const features = geoJsonParser.features;
		for (const feature of features) {
			feature.style = this.style.native;
		}

		this.#native = new GMUGeometryRenderer({ map: this.map.native, geometries: features });
	}

	static fromNative(nativeGeoJsonLayer: GMUGeometryRenderer) {
		if (GeoJsonLayer instanceof GMUGeometryRenderer) {
			const geoJsonLayer = new GeoJsonLayer(null, null, null);
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

	addLayerToMap() {
		this.native.render();
	}

	removeLayerFromMap() {
		this.native.clear();
	}
}

export class HeatmapTileProvider implements ITileProvider {
	#native: GMUHeatmapTileLayer;
	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions) {
		if(coordinates) {
			this.#native = GMUHeatmapTileLayer.alloc().init();

			const defaultGradient = GMUGradient.alloc().initWithColorsStartPointsColorMapSize(
				[new Color('red').ios, new Color('green').ios],
				[0.1, 0.5],
				256);
			this.setGradient(defaultGradient);
			this.opacity = heatmapOptions?.opacity ?? 0.7;
			this.radius = heatmapOptions?.radius ?? 80;
		}

		this.setData(coordinates);
	}

	get native() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.native.opacity = opacity;
	}

	setGradient(gradient: GMUGradient): void {
		this.native.gradient = gradient;
	}

	set radius(radius: number) {
		this.native.radius = radius;
	}

	set maxIntensity(maxIntensity: number) {
		this.native.maximumZoomIntensity = maxIntensity;
	}

	setData(coordinates: Coordinate[]): void {
		this.native.weightedData = coordinates.map((coordinate) => {
			return GMUWeightedLatLng.alloc().initWithCoordinateIntensity(
				CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng),
				1.0
			);
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
		this.#native = GMUDefaultClusterRenderer.alloc().initWithMapViewClusterIconGenerator(map.native, iconGenerator)
	}

	get native() {
		return this.#native;
	}
}

export class ClusterManager {
	#native: GMUClusterManager;

	constructor(map: GoogleMap) {
    const algorithm = GMUNonHierarchicalDistanceBasedAlgorithm.alloc().init();
		const renderer = new ClusterRenderer(map, null);
		this.#native = GMUClusterManager.alloc().initWithMapAlgorithmRenderer(map.native, algorithm, renderer.native);

		// TODO:
		// this.#native.setMapDelegate
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.#native;
	}

	setRenderer(renderer) {
		// Console.log('Only available for android');
	}

	addItem(clusterItem: ClusterItem) {
		this.native.addItem(clusterItem.native);
	}

	addItems(clusterItems: ClusterItem[]) {
		this.native.addItems(clusterItems.map((item) => item.native));
	}

	cluster() {
		this.native.cluster();
	}
}
