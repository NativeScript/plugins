/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Color, ImageSource, Utils } from '@nativescript/core';
import { Coordinate, GoogleMap, MapView, MarkerOptions } from '@nativescript/google-maps';
import { Marker } from '../google-maps/index.android';
import { intoNativeColor } from '../google-maps/utils/common';
import { hueFromColor, intoNativeMarkerOptions } from '../google-maps/utils';
import { IClusterManager, IGeoJsonLayer, IGeometryStyle, IHeatmapOptions } from '.';
import { GoogleMapsUtilsCommon } from './common';

export class GoogleMapsUtils extends GoogleMapsUtilsCommon {
	constructor(private map: GoogleMap) {
		super();
	}

	addGeoJsonLayer(geoJson: any): GeoJsonLayer {
		return new GeoJsonLayer((this.map as any)._map, geoJson);
	}
}

export class HeatmapTileProvider {
	#native: com.google.maps.android.heatmaps.HeatmapTileProvider;

	constructor(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions) {
		if (coordinates) {
			const builder = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder();
			const data = new java.util.ArrayList();

			coordinates.forEach((coordinate) => {
				data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
			});

			if (heatmapOptions) {
				if (heatmapOptions.maxIntensity) {
					builder.maxIntensity(heatmapOptions.maxIntensity);
				}
				if (heatmapOptions.opacity) {
					builder.opacity(heatmapOptions.opacity);
				}
				if (heatmapOptions.radius) {
					builder.maxIntensity(heatmapOptions.radius);
				}
			}

			builder.data(data);
			this.#native = builder.build();
		}
	}

	get native() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.native.setOpacity(opacity);
	}

	setGradient(gradient: com.google.maps.android.heatmaps.Gradient): void {
		this.native.setGradient(gradient);
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

export class GeometryStyle implements Partial<IGeometryStyle> {
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

export class GeoJsonLayer extends DataLayer<com.google.maps.android.data.geojson.GeoJsonLayer> implements IGeoJsonLayer {
	#native: com.google.maps.android.data.geojson.GeoJsonLayer;
	style: GeometryStyle;

	constructor(map: GoogleMap, geoJson: any, geometryStyle?: IGeometryStyle) {
		super();
		if (map && geoJson) {
			try {
				const geoJsonData = new org.json.JSONObject(JSON.stringify(geoJson));
				this.#native = new com.google.maps.android.data.geojson.GeoJsonLayer(map.native, geoJsonData);
				this.style = new GeometryStyle(this.#native.getDefaultPolygonStyle(), this.#native.getDefaultLineStringStyle(), this.#native.getDefaultPointStyle());

				if (geometryStyle) {
					for (const key of Object.keys(geometryStyle)) {
						if (geometryStyle?.[key]) {
							this.style[key] = geometryStyle?.[key];
						}
					}
				}
			} catch (error) {
				console.error(error);
			}
		}
	}

	static fromNative(nativeGeoJsonLayer: com.google.maps.android.data.geojson.GeoJsonLayer) {
		if (GeoJsonLayer instanceof com.google.maps.android.data.geojson.GeoJsonLayer) {
			const geoJsonLayer = new GeoJsonLayer(null, null);
			geoJsonLayer.#native = nativeGeoJsonLayer;
			return geoJsonLayer;
		}
		return null;
	}

	get native() {
		return this.#native;
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

export class KmlLayer extends DataLayer<com.google.maps.android.data.kml.KmlLayer> {
	#native: com.google.maps.android.data.kml.KmlLayer;

	constructor(mapView: com.google.android.gms.maps.GoogleMap, kml: org.json.JSONObject) {
		super();
		if (mapView && kml) {
			this.#native = new com.google.maps.android.data.kml.KmlLayer();
			this.#native.addLayerToMap();
			this.#native.addKMLToMap();
		}
	}

	get native() {
		return this.#native;
	}

	hasPlacemarks(): boolean {
		return this.native.hasPlacemarks();
	}

	getPlacemarks(): java.lang.Iterable<com.google.maps.android.data.kml.KmlPlacemark> {
		return this.native.getPlacemarks();
	}

	getGroundOverlays(): java.lang.Iterable<com.google.maps.android.data.kml.KmlGroundOverlay> {
		return this.native.getGroundOverlays();
	}
}

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
			(map.native as com.google.android.gms.maps.GoogleMap).setOnCameraIdleListener(this.#native);
		}

		const renderer = new ClusterRenderer(map, this);
		this.setRenderer(renderer);
	}

	static fromNative(nativeClusterManager: com.google.maps.android.clustering.ClusterManager<any>) {
		if (ClusterManager instanceof com.google.maps.android.clustering.ClusterManager) {
			const geoJsonLayer = new ClusterManager(null);
			geoJsonLayer.#native = nativeClusterManager;
			return geoJsonLayer;
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
