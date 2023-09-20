import { Color, encoding } from '@nativescript/core';
import { GoogleMap } from '@nativescript/google-maps';
import { IGeometryStyle, IGeoJsonLayer, IFeature, IGeometry } from '.';

let UNIQUE_STYLE_ID = 0;

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
	#parser: GMUGeoJSONParser;
	style: GeometryStyle;

	constructor(private map: GoogleMap, private geometries: any, private styles?: Partial<IGeometryStyle>) {
		this.style = new GeometryStyle(styles);

		const jsonString = new NSString({ UTF8String: JSON.stringify(geometries) });
		this.#parser = new GMUGeoJSONParser({ data: jsonString.dataUsingEncoding(encoding.UTF_8) });
		this.#parser.parse();

		const features = this.#parser.features;
		for (const feature of features) {
			feature.style = this.style.native;
		}

		this.#native = new GMUGeometryRenderer({ map: this.map.native, geometries: features });
	}

	static fromNative(nativeGeoJsonLayer: GMUGeometryRenderer) {
		if (nativeGeoJsonLayer instanceof GMUGeometryRenderer) {
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
			console.log(nativeGeometry.class().name);
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
