import { GoogleMapsUtilsCommon } from './common';
import { Coordinate, CoordinateBounds } from '@nativescript/google-maps';

export class GoogleMapsUtils extends GoogleMapsUtilsCommon {
	constructor(private map: com.google.android.gms.maps.GoogleMap) {
		super();
	}

	addGeoJsonLayer(geoJson: string): GeoJsonLayer {
		try {
			const geoJsonData = new org.json.JSONObject(geoJson);
			const layer = new GeoJsonLayer(this.map, geoJsonData);

			layer.addLayerToMap();
			return layer;
		} catch (error) {
			throw new Error(error);
		}
	}

	buildHeatMapProvider(coordinates: Coordinate[], heatmapOptions?: IHeatmapOptions) {
		const heatMapProvider = new HeatmapTileProvider(coordinates, heatmapOptions);
		return heatMapProvider;
	}
}

export interface IHeatmapOptions {
	opacity: number;
	radius: number;
	maxIntensity: number;
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

	build() {
		return this.#native;
	}

	set opacity(opacity: number) {
		this.#native.setOpacity(opacity);
	}

	setGradient(gradient: com.google.maps.android.heatmaps.Gradient): void {
		this.#native.setGradient(gradient);
	}

	set radius(degrees: number) {
		this.#native.setRadius(degrees);
	}

	set maxIntensity(maxIntensity: number) {
		this.#native.setMaxIntensity(maxIntensity);
	}

	setData(coordinates: Coordinate[]): void {
		const data = new java.util.ArrayList();

		coordinates.forEach((coordinate) => {
			data.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
		});

		this.#native.setData(data);
	}

	getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile {
		return this.#native.getTile(param0, param1, param2);
	}
}

export abstract class DataLayer<T extends com.google.maps.android.data.Layer> {
	abstract readonly native: T;

	setMap(map: com.google.android.gms.maps.GoogleMap) {
		this.native.setMap(map);
	}

	getDefaultPolygonStyle() {
		return this.native.getDefaultPolygonStyle();
	}

	addLayerToMap() {
		this.native.addLayerToMap();
	}

	isLayerOnMap(): boolean {
		return this.native.isLayerOnMap();
	}

	removeLayerFromMap() {
		this.native.removeLayerFromMap();
	}

	hasFeatures(): boolean {
		return this.native.hasFeatures();
	}

	getFeature(feature: any) {
		return this.native.getFeature(feature);
	}

	getFeatures(): any {
		return this.native.getFeatures();
	}

	addFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature) {
		return this.native.addFeature(feature);
	}

	removeFeature(feature: com.google.maps.android.data.geojson.GeoJsonFeature) {
		this.native.removeFeature(feature);
	}

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

export class GeoJsonLayer extends DataLayer<com.google.maps.android.data.geojson.GeoJsonLayer> {
	#native: com.google.maps.android.data.geojson.GeoJsonLayer;

	constructor(mapView: com.google.android.gms.maps.GoogleMap, geoJson: org.json.JSONObject) {
		super();
		if (mapView && geoJson) {
			this.#native = new com.google.maps.android.data.geojson.GeoJsonLayer(mapView, geoJson);
			this.#native.addLayerToMap();
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

	get bounds(): CoordinateBounds {
		const bounds = this.#native.getBoundingBox();
		if (bounds) {
			return {
				southwest: {
					lat: bounds?.southwest?.latitude,
					lng: bounds?.southwest?.longitude,
				},
				northeast: {
					lat: bounds?.northeast?.latitude,
					lng: bounds?.northeast?.longitude,
				},
			};
		}
	}

	toString() {
		return this.native.toString();
	}
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
