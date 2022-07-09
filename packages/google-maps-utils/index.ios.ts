import { Color, encoding } from '@nativescript/core';
import { GoogleMap, MapView } from '@nativescript/google-maps';
import { IGeoJsonLayer, IGeometryStyle } from '.';
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
