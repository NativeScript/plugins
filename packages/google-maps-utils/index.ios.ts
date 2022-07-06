import { Color } from '@nativescript/core';
import { IGeoJsonLayer, IGeometryStyle } from '.';
import { GoogleMapsUtilsCommon } from './common';

let UNIQUE_STYLE_ID = 0;

export class GoogleMapsUtils extends GoogleMapsUtilsCommon {
	constructor(private map: GMSMapView) {
		super();
	}

	addGeoJsonLayer(geoJson: string) {
		try {
			const layer = new GeoJsonLayer(this.map, geoJson);
			layer.addLayerToMap();
			return layer;
		} catch (error) {
			throw new Error(error);
		}
	}
}

export class GeometryStyle implements IGeometryStyle {
	#native: GMUStyle;

	constructor(public geometryStyles: IGeometryStyle) {
		Object.assign(this, geometryStyles);

		const style = {
			styleID: `google-maps-utils-style-${UNIQUE_STYLE_ID++}`,
			strokeColor: this.strokeColor.ios ?? null,
			fillColor: this.fillColor.ios ?? null,
			width: this.width ?? 0,
			scale: this.scale ?? 0,
			heading: this.heading ?? 0,
			anchor: this.anchor ?? [0,0],
			iconUrl: this.iconUrl ?? null,
			title: this.title ?? null,
			hasFill: !!this.fillColor,
			hasStroke: !!this.strokeColor,
		} as GMUStyle;

		this.#native = new GMUStyle(style);
	}

	strokeColor: Color;
	fillColor: Color;
	width: number;
	scale: number;
	heading: number;
	anchor: number[];
	iconUrl: string;
	title: string;

	get native() {
		return this.#native;
	}
}

export class GeoJsonLayer implements IGeoJsonLayer {
	#native: GMUGeometryRenderer;
	style: GeometryStyle;

	constructor(private map: GMSMapView, private geoJsonData: any, private styles?: IGeometryStyle) {
		this.style = new GeometryStyle(styles);
		this.#native = new GMUGeometryRenderer({ map: this.map, geometries: this.geoJsonData.features, styles: this.style.native });
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
