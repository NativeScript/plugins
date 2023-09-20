import { Color } from '@nativescript/core';
import { GoogleMap } from '@nativescript/google-maps';
import { intoNativeColor } from '../../../google-maps-utils/utils';
import { IGeometryStyle, IGeoJsonLayer, IFeature, IGeometry } from '.';

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

export class KmlGeometryStyle implements IGeometryStyle {
	constructor(public getPolygonOptions: com.google.android.gms.maps.model.PolygonOptions, public getPolylineOptions: com.google.android.gms.maps.model.PolylineOptions, public kerOptions: com.google.android.gms.maps.model.MarkerOptions) {}

	get strokeColor(): Color {
		return intoNativeColor(this.getPolygonOptions.getStrokeColor().toString());
	}
	fillColor: Color;
	width: number;
	scale: number;
	heading: number;
	anchor: [number, number];
	iconUrl: string;
	title: string;
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

export class GeoJsonLayer extends DataLayer<com.google.maps.android.data.geojson.GeoJsonLayer> implements IGeoJsonLayer {
	#native: com.google.maps.android.data.geojson.GeoJsonLayer;
	style: GeoJsonGeometryStyle;

	constructor(map: GoogleMap, geoJson: any, geometryStyle?: IGeometryStyle) {
		super();
		if (map && geoJson) {
			try {
				const geoJsonData = new org.json.JSONObject(JSON.stringify(geoJson));
				this.#native = new com.google.maps.android.data.geojson.GeoJsonLayer(map.native, geoJsonData);
				this.style = new GeoJsonGeometryStyle(this.#native.getDefaultPolygonStyle(), this.#native.getDefaultLineStringStyle(), this.#native.getDefaultPointStyle());

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
		if (nativeGeoJsonLayer instanceof com.google.maps.android.data.geojson.GeoJsonLayer) {
			const geoJsonLayer = new GeoJsonLayer(null, null);
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

export class KMLPlacemarkFeature extends BaseFeature<com.google.maps.android.data.kml.KmlPlacemark> {
	#native: com.google.maps.android.data.kml.KmlPlacemark;
	#style: GeoJsonGeometryStyle;

	constructor() {
		super();
	}

	static fromNative(nativeFeature: com.google.maps.android.data.kml.KmlPlacemark) {
		if (nativeFeature instanceof com.google.maps.android.data.kml.KmlPlacemark) {
			const feature = new KMLPlacemarkFeature();
			feature.#native = nativeFeature;
			return feature;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get style() {
		// this.#style = new KmlGeometryStyle(this.native.getPolygonOptions(), this.native.getPolylineOptions(), this.native.getMarkerOptions());
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
