import { Color, ImageSource, Utils } from '@nativescript/core';
import { Coordinate, GoogleMap, ITileProvider, MarkerOptions } from '@nativescript/google-maps';
import { hueFromColor } from '@nativescript/google-maps/utils';
import { GeoJSON } from 'geojson';
import { HeatmapOptions, IClusterManager, IFeature, IGeoJsonLayer, IGeometry, IGeometryStyle, IGradient, IHeatmapTileProvider } from '.';
import { intoNativeClusterManager, intoNativeColor, intoNativeHeatmapGradient, intoNativeHeatmapProvider } from './utils';
import { applyMixins } from './utils/common';

// export * from './experimental/datalayer';
// export * from './experimental/iconfactory';
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
	clusterManager(markers: MarkerOptions[]) {
		const GMap = this as unknown as GoogleMap;
		const clusterManager = ClusterManager.fromNative(intoNativeClusterManager(GMap));
		const renderer = new ClusterRenderer(GMap, clusterManager);
		clusterManager.setRenderer(renderer);

		const clusters = markers.map((marker) => new ClusterItem(marker));
		clusterManager.addItems(clusters);

		clusterManager.cluster();

		return clusterManager;
	}

	addGeoJson(geoJson: GeoJSON, styleOptions: IGeometryStyle) {
		if ((this as unknown as GoogleMap) && geoJson) {
			const geoJsonData = new org.json.JSONObject(JSON.stringify(geoJson));
			const native = new com.google.maps.android.data.geojson.GeoJsonLayer((this as unknown as GoogleMap).native, geoJsonData);
			const style = new GeoJsonGeometryStyle(native.getDefaultPolygonStyle(), native.getDefaultLineStringStyle(), native.getDefaultPointStyle());

			if (styleOptions) {
				for (const key of Object.keys(styleOptions)) {
					if (styleOptions?.[key]) {
						style[key] = styleOptions?.[key];
					}
				}
			}

			native.addLayerToMap();

			return GeoJsonLayer.fromNative(native);
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
	#native: com.google.maps.android.heatmaps.HeatmapTileProvider;

	constructor(options?: HeatmapOptions) {
		if (options) {
			this.#native = intoNativeHeatmapProvider(options);
		}
	}

	static fromNative(nativeHeatmap: com.google.maps.android.heatmaps.HeatmapTileProvider) {
		if (nativeHeatmap instanceof com.google.maps.android.heatmaps.HeatmapTileProvider) {
			const heatmap = new HeatmapTileProvider();
			heatmap.#native = nativeHeatmap;
			return heatmap;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.native.setOpacity(opacity);
	}

	setGradient(gradients: IGradient[]): void {
		this.native.setGradient(intoNativeHeatmapGradient(gradients));
	}

	set radius(radius: number) {
		this.native.setRadius(radius);
	}

	set maxIntensity(maxIntensity: number) {
		this.native.setMaxIntensity(maxIntensity);
	}

	setData(coordinates: Coordinate[]): void {
		const data = new java.util.ArrayList();

		coordinates.forEach((coordinate) => {
			data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		});

		this.native.setData(data);
	}

	getTile(x: number, y: number, z: number): com.google.android.gms.maps.model.Tile {
		return this.native.getTile(x, y, z);
	}
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
}

@NativeClass
export class ClusterRenderer extends com.google.maps.android.clustering.view.DefaultClusterRenderer<any> {
	constructor(map: GoogleMap, clusterManager: ClusterManager) {
		super(Utils.android.getApplicationContext(), map.native, clusterManager.native);
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

	static fromNative(nativeClusterManager: com.google.maps.android.clustering.ClusterManager<any>) {
		if (nativeClusterManager instanceof com.google.maps.android.clustering.ClusterManager) {
			const clusterManager = new ClusterManager();
			clusterManager.#native = nativeClusterManager;
			return clusterManager;
		}
		return null;
	}

	private setListeners() {
		this.#native.setOnClusterClickListener(
			new com.google.maps.android.clustering.ClusterManager.OnClusterClickListener<com.google.maps.android.clustering.ClusterItem>({
				onClusterClick: (cluster: com.google.maps.android.clustering.Cluster<com.google.maps.android.clustering.ClusterItem>): boolean => {
					return false;
				},
			})
		);
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

/**
 * EXPERIMENTAL - DO NOT USE
 */
export abstract class DataLayer<T extends com.google.maps.android.data.Layer> {
	abstract readonly native: T;

	// setMap(map: com.google.android.gms.maps.GoogleMap) {
	// 	this.native.setMap(map);
	// }

	// getDefaultPolygonStyle() {
	// 	return this.native.getDefaultPolygonStyle();
	// }

	addLayerToMap() {
		this.native.addLayerToMap();
	}

	// isLayerOnMap(): boolean {
	// 	return this.native.isLayerOnMap();
	// }

	removeLayerFromMap() {
		this.native.removeLayerFromMap();
	}

	// hasFeatures(): boolean {
	// 	return this.native.hasFeatures();
	// }

	// getFeature(feature: any) {
	// 	return this.native.getFeature(feature);
	// }

	// getFeatures(): any {
	// 	return this.native.getFeatures();
	// }

	// addFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature) {
	// 	return this.native.addFeature(feature);
	// }

	// removeFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature) {
	// 	this.native.removeFeature(feature);
	// }

	get android() {
		return this.native;
	}

	// public hasContainers(): boolean;
	// public addKMLToMap(): void;
	// public getDefaultPointStyle(): com.google.maps.android.data.geojson.GeoJsonPointStyle;
	// public setOnFeatureClickListener(param0: com.google.maps.android.data.Layer.OnFeatureClickListener): void;
	// public removeFeature(param0: com.google.maps.android.data.Feature): void;
	// public getMap(): com.google.android.gms.maps.GoogleMap;
	// public addGeoJsonToMap(): void;
	// public getDefaultLineStringStyle(): com.google.maps.android.data.geojson.GeoJsonLineStringStyle;
	// public storeRenderer(param0: com.google.maps.android.data.Renderer): void;
	// public getContainers(): java.lang.Iterable<com.google.maps.android.data.kml.KmlContainer>;
	// public getContainerFeature(param0: any): com.google.maps.android.data.Feature;
	// public getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay>;
}

export class GeoJsonGeometryStyle implements Partial<IGeometryStyle> {
	constructor(private polygonStyle: com.google.maps.android.data.geojson.GeoJsonPolygonStyle, private lineStyle: com.google.maps.android.data.geojson.GeoJsonLineStringStyle, private pointStyle: com.google.maps.android.data.geojson.GeoJsonPointStyle) {}

	get strokeColor() {
		return new Color(this.polygonStyle.getStrokeColor());
	}
	set strokeColor(color: Color) {
		this.polygonStyle.setStrokeColor(color.android);
		this.lineStyle.setColor(color.android);
	}

	get fillColor() {
		return new Color(this.polygonStyle.getFillColor());
	}
	set fillColor(color: Color) {
		this.polygonStyle.setFillColor(color.android);
	}

	get width(): number {
		return this.lineStyle.getWidth();
	}
	set width(width: number) {
		this.lineStyle.setWidth(width);
		this.polygonStyle.setStrokeWidth(width);
	}

	get title() {
		return this.pointStyle.getTitle();
	}
	set title(title: string) {
		this.pointStyle.setTitle(title);
	}

	get heading(): number {
		return this.pointStyle.getRotation();
	}
	set heading(rotation: number) {
		// Marker roation or rotation???
		this.pointStyle.setRotation(rotation);
		// this.pointStyle.setMarkerRotation(rotation);
	}
}

abstract class BaseFeature<T extends com.google.maps.android.data.Feature> implements IFeature {
	abstract style: any;
	abstract readonly native: T;

	get android() {
		return this.native;
	}

	get geometry() {
		return Geometry.fromNative(this.native.getGeometry());
	}

	get id() {
		return this.native.getId();
	}

	get properties() {
		const props = {};

		const iter = this.native.getPropertyKeys().iterator();
		while (iter.hasNext()) {
			const key = iter.next();
			props[key] = this.native.getProperty(key);
		}

		return props;
	}
	set properties(value: any) {
		Object.entries(value).forEach(([key, value]: [string, string]) => {
			this.native.setProperty(key, value);
		});
	}
}

export class GeoJsonFeature extends BaseFeature<com.google.maps.android.data.geojson.GeoJsonFeature> {
	#native: com.google.maps.android.data.geojson.GeoJsonFeature;
	#style: GeoJsonGeometryStyle;

	constructor() {
		super();
	}

	static fromNative(nativeFeature: com.google.maps.android.data.geojson.GeoJsonFeature) {
		if (nativeFeature instanceof com.google.maps.android.data.geojson.GeoJsonFeature) {
			const feature = new GeoJsonFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get style() {
		this.#style = new GeoJsonGeometryStyle(this.native.getPolygonStyle(), this.native.getLineStringStyle(), this.native.getPointStyle());
		return this.#style;
	}
}

export class Geometry<T = any> implements IGeometry {
	#native: com.google.maps.android.data.Geometry<T>;

	static fromNative(nativeGeometry: com.google.maps.android.data.Geometry<any>) {
		if (nativeGeometry instanceof com.google.maps.android.data.Geometry) {
			const geometry = new Geometry<typeof nativeGeometry>();
			geometry.#native = nativeGeometry;
			return geometry;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get type() {
		return this.native.getGeometryType();
	}

	get geometries() {
		return this.native.getGeometryObject();
	}
}

export class GeoJsonLayer extends DataLayer<com.google.maps.android.data.geojson.GeoJsonLayer> implements IGeoJsonLayer {
	#native: com.google.maps.android.data.geojson.GeoJsonLayer;
	style: GeoJsonGeometryStyle;

	static fromNative(nativeGeoJsonLayer: com.google.maps.android.data.geojson.GeoJsonLayer) {
		if (nativeGeoJsonLayer instanceof com.google.maps.android.data.geojson.GeoJsonLayer) {
			const geoJsonLayer = new GeoJsonLayer();
			geoJsonLayer.#native = nativeGeoJsonLayer;
			return geoJsonLayer;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get features() {
		const features: GeoJsonFeature[] = [];
		const nativeFeatures: java.lang.Iterable<com.google.maps.android.data.geojson.GeoJsonFeature> = this.native.getFeatures();

		const iter = nativeFeatures.iterator();
		while (iter.hasNext()) {
			const feature = iter.next();
			features.push(GeoJsonFeature.fromNative(feature));
		}

		return features;
	}

	// get bounds(): CoordinateBounds {
	// 	const bounds = this.#native.getBoundingBox();
	// 	if (bounds) {
	// 		return {
	// 			southwest: {
	// 				lat: bounds?.southwest?.latitude,
	// 				lng: bounds?.southwest?.longitude,
	// 			},
	// 			northeast: {
	// 				lat: bounds?.northeast?.latitude,
	// 				lng: bounds?.northeast?.longitude,
	// 			},
	// 		};
	// 	}
	// }

	// toString() {
	// 	return this.native.toString();
	// }
}
