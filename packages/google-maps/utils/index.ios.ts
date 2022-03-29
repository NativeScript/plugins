import { CircleOptions, Coordinate, CoordinateBounds, GroundOverlayOptions, MarkerOptions, PolygonOptions, PolylineOptions, TileOverlayOptions } from '../';
import { Color, ImageSource } from '@nativescript/core';
import { intoNativeColor } from './common';

export function hueFromColor(color: Color | UIColor) {
	let nativeColor: UIColor;
	if (color instanceof Color) {
		nativeColor = color.ios;
	} else if (color instanceof UIColor) {
		nativeColor = color;
	}

	if (nativeColor) {
		const hue = new interop.Reference<number>();
		const saturation = new interop.Reference<number>();
		const brightness = new interop.Reference<number>();
		const alpha = new interop.Reference<number>();
		nativeColor.getHueSaturationBrightnessAlpha(hue, saturation, brightness, alpha);
		return hue;
	}

	return null;
}

export function intoNativeMarkerOptions(options: MarkerOptions) {
	const opts = GMSMarker.new();

	const color = intoNativeColor(options?.color);
	if (color) {
		opts.icon = GMSMarker.markerImageWithColor(color);
	}

	if (typeof options?.draggable === 'boolean') {
		opts.draggable = options.draggable;
	}

	if (typeof options?.anchorU === 'number' || typeof options?.anchorV === 'number') {
		const anchorU = options?.anchorU ?? opts.groundAnchor.x;
		const anchorV = options?.anchorV ?? opts.groundAnchor.y;
		opts.groundAnchor = CGPointMake(anchorU, anchorV);
	}

	if (options?.position) {
		opts.position = CLLocationCoordinate2DMake(options.position.lat, options.position.lng);
	}

	if (options?.title) {
		opts.title = options.title;
	}

	if (options?.snippet) {
		opts.snippet = options.snippet;
	}

	if (options?.icon) {
		if (options?.icon instanceof UIImage) {
			opts.icon = options.icon;
		} else if (options?.icon instanceof ImageSource) {
			opts.icon = options.icon.ios;
		}
	}

	if (typeof options?.rotation === 'number') {
		opts.rotation = options.rotation;
	}

	if (typeof options?.flat === 'boolean') {
		opts.flat = options.flat;
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}
	return opts;
}

export function intoNativeCircleOptions(options: CircleOptions) {
	const opts = GMSCircle.new();

	if (typeof options?.radius === 'number') {
		opts.radius = options.radius;
	}

	const strokeColor = intoNativeColor(options?.strokeColor);
	if (strokeColor !== null) {
		opts.strokeColor = strokeColor;
	}

	const fillColor = intoNativeColor(options?.fillColor);
	if (fillColor !== null) {
		opts.fillColor = fillColor;
	}

	if (typeof options?.tappable === 'boolean') {
		opts.tappable = options.tappable;
	}

	if (typeof options?.strokeWidth === 'number') {
		opts.strokeWidth = options.strokeWidth;
	}

	if (options?.center) {
		opts.position = CLLocationCoordinate2DMake(options.center.lat, options.center.lng);
	}

	if (Array.isArray(options.strokePattern)) {
		// TODO
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}
	return opts;
}

export function intoNativePolygonOptions(options: PolygonOptions) {
	let path;

	if (Array.isArray(options?.points)) {
		path = GMSMutablePath.path();
		options.points.forEach((point) => {
			path.addCoordinate(CLLocationCoordinate2DMake(point.lat, point.lng));
		});
	}

	const opts = path ? GMSPolygon.polygonWithPath(path) : GMSPolygon.new();

	if (Array.isArray(options?.holes)) {
		if (options.holes.length) {
			opts.holes = options.holes.map((hole) => {
				const res = GMSMutablePath.path();
				res.addCoordinate(CLLocationCoordinate2DMake(hole.lat, hole.lng));
			}) as any;
		}
	}

	if (typeof options?.tappable === 'boolean') {
		opts.tappable = options.tappable;
	}

	const strokeColor = intoNativeColor(options?.strokeColor);

	if (strokeColor !== null) {
		opts.strokeColor = strokeColor;
	}

	const fillColor = intoNativeColor(options?.fillColor);

	if (fillColor !== null) {
		opts.fillColor = fillColor;
	}

	if (typeof options?.strokeWidth === 'number') {
		opts.strokeWidth = options.strokeWidth;
	}

	if (typeof options?.geodesic === 'boolean') {
		opts.geodesic = options.geodesic;
	}

	if (options?.strokeJointType) {
		// TODO;
	}

	if (Array.isArray(options.strokePattern)) {
		// TODO;
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}
	return opts;
}

export function intoNativePolylineOptions(options: PolylineOptions) {
	let path;

	if (Array.isArray(options?.points)) {
		path = GMSMutablePath.path();
		options.points.forEach((point) => {
			path.addCoordinate(CLLocationCoordinate2DMake(point.lat, point.lng));
		});
	}

	const opts = path ? GMSPolyline.polylineWithPath(path) : GMSPolyline.new();

	if (typeof options?.width === 'number') {
		opts.strokeWidth = options.width;
	}

	if (typeof options?.tappable === 'boolean') {
		opts.tappable = options.tappable;
	}

	const color = intoNativeColor(options?.color);

	if (color !== null) {
		opts.strokeColor = color;
	}

	if (typeof options?.geodesic === 'boolean') {
		opts.geodesic = options.geodesic;
	}

	if (options?.jointType) {
		// TODO
	}

	if (Array.isArray(options.pattern)) {
		// TODO
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}

	if (typeof options?.startCap) {
		// TODO
	}

	if (typeof options?.endCap) {
		// TODO
	}
	return opts;
}

export function intoNativeGroundOverlayOptions(options: GroundOverlayOptions) {
	const opts = GMSGroundOverlay.new();

	if (typeof options?.width === 'number') {
		// TODO
	}

	if (typeof options?.height === 'number') {
		// TODO
	}

	if (typeof options?.transparency) {
		// TODO
	}

	if (typeof options?.anchorU === 'number' || typeof options?.anchorV === 'number') {
		opts.anchor = CGPointMake(options?.anchorU ?? opts.anchor.x, options?.anchorV ?? opts.anchor.y);
	}

	if (typeof options?.tappable === 'boolean') {
		opts.tappable = options.tappable;
	}

	if (options?.position) {
		const coords = <Coordinate>options.position;
		opts.position = CLLocationCoordinate2DMake(coords.lat, coords.lng);
	}

	if (typeof options?.tappable === 'boolean') {
		opts.tappable = options.tappable;
	}

	if (typeof options?.bearing === 'number') {
		opts.bearing = options.bearing;
	}

	if (options?.image instanceof UIImage) {
		opts.icon = options.image;
	} else if (options?.image instanceof ImageSource) {
		opts.icon = options.image.ios;
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}

	return opts;
}

export function intoNativeTileOverlayOptions(options: TileOverlayOptions) {}

export function deserialize(data: any): any {
	if (data instanceof NSNull) {
		return null;
	}

	if (data instanceof NSArray) {
		let array = [];
		for (let i = 0, n = data.count; i < n; i++) {
			array[i] = deserialize(data.objectAtIndex(i));
		}
		return array;
	}

	if (data instanceof NSDictionary) {
		let dict = {};
		for (let i = 0, n = data.allKeys.count; i < n; i++) {
			let key = data.allKeys.objectAtIndex(i);
			dict[key] = deserialize(data.objectForKey(key));
		}
		return dict;
	}

	return data;
}

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

export function serialize(data: any): any {
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (numberIs64Bit(data)) {
				if (hasDecimals) {
					return NSNumber.numberWithDouble(data);
				} else {
					return NSNumber.numberWithLongLong(data);
				}
			} else {
				if (hasDecimals) {
					return NSNumber.numberWithFloat(data);
				} else {
					return data;
				}
			}
		}

		case 'object': {
			if (data instanceof Date) {
				return NSDate.dateWithTimeIntervalSince1970(data.getTime() / 1000);
			}

			if (!data) {
				return null;
			}

			if (Array.isArray(data)) {
				return NSArray.arrayWithArray((<any>data).map(serialize));
			}

			let node = {} as any;
			Object.keys(data).forEach(function (key) {
				let value = data[key];
				node[key] = serialize(value);
			});
			return NSDictionary.dictionaryWithDictionary(node);
		}

		default:
			return null;
	}
}
