import { CircleOptions, Coordinate, CoordinateBounds, GroundOverlayOptions, MarkerOptions, PolygonOptions, PolylineOptions, TileOverlayOptions } from '../';
import { Color, ImageSource, Utils } from '@nativescript/core';
import { intoNativeColor } from './common';
import { JointType } from '../common';

export function hueFromColor(color: Color | number) {
	const colors = Array.create('float', 3);
	if (typeof color === 'number') {
		android.graphics.Color.colorToHSV(color, colors);
	} else {
		android.graphics.Color.colorToHSV(color.android, colors);
	}

	return colors[0];
}

export function toJointType(type: number): JointType {
	switch (type) {
		case com.google.android.gms.maps.model.JointType.ROUND:
			return JointType.Round;
		case com.google.android.gms.maps.model.JointType.BEVEL:
			return JointType.Bevel;
		default:
			return JointType.Default;
	}
}

export function intoNativeJointType(type: JointType): number {
	switch (type) {
		case JointType.Round:
			return com.google.android.gms.maps.model.JointType.ROUND;
		case JointType.Bevel:
			return com.google.android.gms.maps.model.JointType.BEVEL;
		default:
			return com.google.android.gms.maps.model.JointType.DEFAULT;
	}
}

export function intoNativeMarkerOptions(options: MarkerOptions) {
	const opts = new com.google.android.gms.maps.model.MarkerOptions();
	if (typeof options?.draggable === 'boolean') {
		opts.draggable(options.draggable);
	}

	if (typeof options?.anchorU === 'number' || typeof options?.anchorV === 'number') {
		const anchorU = options?.anchorU ?? opts.getAnchorU();
		const anchorV = options?.anchorV ?? opts?.getAnchorV();
		opts.anchor(anchorU, anchorV);
	}

	if (options?.position) {
		opts.position(new com.google.android.gms.maps.model.LatLng(options.position.lat, options.position.lng));
	}

	if (options?.title) {
		opts.title(options.title);
	}

	if (options?.snippet) {
		opts.snippet(options.snippet);
	}

	if (options?.icon) {
		if (options?.icon instanceof android.graphics.Bitmap) {
			const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(options.icon);
			opts.icon(desc);
		} else if (options?.icon instanceof ImageSource) {
			const desc = com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(options.icon.android);
			opts.icon(desc);
		}
	}

	const color = intoNativeColor(options.color);

	if (color !== null) {
		opts.icon(com.google.android.gms.maps.model.BitmapDescriptorFactory.defaultMarker(hueFromColor(color)));
	}

	if (typeof options?.opacity === 'number') {
		opts.alpha(options.opacity);
	}

	if (typeof options?.rotation === 'number') {
		opts.rotation(options.rotation);
	}

	if (typeof options?.visible === 'boolean') {
		opts.visible(options.visible);
	}

	if (typeof options?.flat === 'boolean') {
		opts.flat(options.flat);
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex(options.zIndex);
	}
	return opts;
}

export function intoNativeCircleOptions(options: CircleOptions) {
	const opts = new com.google.android.gms.maps.model.CircleOptions();

	if (typeof options?.radius === 'number') {
		opts.radius(options.radius);
	}

	const strokeColor = intoNativeColor(options?.strokeColor);

	if (strokeColor !== null) {
		opts.strokeColor(strokeColor);
	}

	const fillColor = intoNativeColor(options?.fillColor);

	if (fillColor !== null) {
		opts.fillColor(fillColor);
	}

	if (typeof options?.tappable === 'boolean') {
		opts.clickable(options.tappable);
	}

	if (typeof options?.strokeWidth === 'number') {
		opts.strokeWidth(Utils.layout.toDevicePixels(options.strokeWidth));
	}

	if (options?.center) {
		opts.center(new com.google.android.gms.maps.model.LatLng(options.center.lat, options.center.lng));
	}

	if (Array.isArray(options.strokePattern)) {
		const list = new java.util.ArrayList(options.strokePattern.length);
		for (const item of options.strokePattern) {
			list.add(item.native);
		}
		opts.strokePattern(list);
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex(options.zIndex);
	}
	return opts;
}

export function intoNativePolygonOptions(options: PolygonOptions) {
	const opts = new com.google.android.gms.maps.model.PolygonOptions();

	if (Array.isArray(options?.points)) {
		for (const point of options.points) {
			opts.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		}
	}

	if (Array.isArray(options?.holes)) {
		for (const hole of options.holes) {
			if (Array.isArray(hole) && hole.length) {
				const nativeHole = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>(hole.length);
				for (const coordinate of hole) {
					nativeHole.add(new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng));
				}
				opts.addHole(nativeHole);
			}
		}
	}

	if (typeof options?.tappable === 'boolean') {
		opts.clickable(options.tappable);
	}

	const strokeColor = intoNativeColor(options?.strokeColor);

	if (strokeColor !== null) {
		opts.strokeColor(strokeColor);
	}

	const fillColor = intoNativeColor(options?.fillColor);

	if (fillColor !== null) {
		opts.fillColor(fillColor);
	}

	if (typeof options?.strokeWidth === 'number') {
		opts.strokeWidth(Utils.layout.toDevicePixels(options.strokeWidth));
	}

	if (typeof options?.geodesic === 'boolean') {
		opts.geodesic(options.geodesic);
	}

	if (options?.strokeJointType) {
		opts.strokeJointType(intoNativeJointType(options.strokeJointType));
	}

	if (Array.isArray(options.strokePattern)) {
		const list = new java.util.ArrayList(options.strokePattern.length);
		for (const item of options.strokePattern) {
			list.add(item.native);
		}
		opts.strokePattern(list);
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex(options.zIndex);
	}
	return opts;
}

export function intoNativePolylineOptions(options: PolylineOptions) {
	const opts = new com.google.android.gms.maps.model.PolylineOptions();

	if (typeof options?.width === 'number') {
		opts.width(Utils.layout.toDevicePixels(options.width));
	}

	if (Array.isArray(options?.points)) {
		for (const point of options.points) {
			opts.add(new com.google.android.gms.maps.model.LatLng(point.lat, point.lng));
		}
	}

	if (typeof options?.tappable === 'boolean') {
		opts.clickable(options.tappable);
	}

	const color = intoNativeColor(options?.color);

	if (color !== null) {
		opts.color(color);
	}

	if (typeof options?.geodesic === 'boolean') {
		opts.geodesic(options.geodesic);
	}

	if (options?.jointType) {
		opts.jointType(intoNativeJointType(options.jointType));
	}

	if (Array.isArray(options.pattern)) {
		const list = new java.util.ArrayList(options.pattern.length);
		for (const item of options.pattern) {
			list.add(item.native);
		}
		opts.pattern(list);
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex(options.zIndex);
	}

	if (options?.startCap?.native) {
		opts.startCap(options.startCap.native);
	}

	if (options?.endCap?.native) {
		opts.endCap(options.endCap.native);
	}
	return opts;
}

export function intoNativeGroundOverlayOptions(options: GroundOverlayOptions) {
	const opts = new com.google.android.gms.maps.model.GroundOverlayOptions();

	if (options?.position) {
		const coords = <Coordinate>options.position;
		opts.position(new com.google.android.gms.maps.model.LatLng(coords.lat, coords.lng), options.width);
	}

	if (typeof options?.width === 'number') {
		opts.position(opts.getLocation(), options.width);
	}

	if (typeof options?.height === 'number') {
		opts.position(opts.getLocation(), opts.getWidth(), options.height);
	}

	if (options?.bounds) {
		opts.positionFromBounds(new com.google.android.gms.maps.model.LatLngBounds(new com.google.android.gms.maps.model.LatLng(options.bounds.southwest.lat, options.bounds.southwest.lng), new com.google.android.gms.maps.model.LatLng(options.bounds.northeast.lat, options.bounds.northeast.lng)));
	}

	if (typeof options?.transparency === 'number') {
		opts.transparency(options.transparency);
	}

	if (typeof options?.anchorU === 'number' || typeof options?.anchorV === 'number') {
		opts.anchor(options?.anchorU ?? opts.getAnchorU(), options?.anchorV ?? opts.getAnchorV());
	}

	if (typeof options?.tappable === 'boolean') {
		opts.clickable(options.tappable);
	}

	if (typeof options?.tappable === 'boolean') {
		opts.clickable(options.tappable);
	}

	if (typeof options?.bearing === 'number') {
		opts.bearing(options.bearing);
	}

	if (options?.image instanceof android.graphics.Bitmap) {
		opts.image(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(options?.image));
	} else if (options?.image instanceof ImageSource) {
		opts.image(com.google.android.gms.maps.model.BitmapDescriptorFactory.fromBitmap(options?.image.android));
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex(options.zIndex);
	}

	return opts;
}

export function intoNativeTileOverlayOptions(options: TileOverlayOptions) {
	const opts = new com.google.android.gms.maps.model.TileOverlayOptions();

	if (typeof options?.fadeIn === 'boolean') {
		opts.fadeIn(options.fadeIn);
	}

	if (typeof options?.transparency === 'number') {
		opts.transparency(options.transparency);
	}

	if (typeof options?.visible === 'number') {
		opts.visible(options.visible);
	}

	if (options?.tileProvider) {
		opts.tileProvider(options.tileProvider.native);
	}

	if (options?.zIndex) {
		opts.zIndex(options.zIndex);
	}

	return opts;
}

export function deserialize(data) {
	if (data === null || typeof data !== 'object') {
		return data;
	}
	let store;

	switch (data.getClass().getName()) {
		case 'java.lang.String': {
			return String(data);
		}

		case 'java.lang.Boolean': {
			return String(data) === 'true';
		}

		case 'java.lang.Float':
		case 'java.lang.Integer':
		case 'java.lang.Long':
		case 'java.lang.Double':
		case 'java.lang.Short': {
			return Number(data);
		}

		case 'org.json.JSONArray': {
			store = [];
			for (let j = 0; j < data.length(); j++) {
				store[j] = deserialize(data.get(j));
			}
			break;
		}
		case 'org.json.JSONObject': {
			store = {};
			const i = data.keys();
			while (i.hasNext()) {
				const key = i.next();
				store[key] = deserialize(data.get(key));
			}
			break;
		}

		case 'androidx.collection.SimpleArrayMap': {
			const count = data.size();
			for (let l = 0; l < count; l++) {
				const key = data.keyAt(l);
				store[key] = deserialize(data.get(key));
			}
			break;
		}

		case 'androidx.collection.ArrayMap':
		case 'android.os.Bundle':
		case 'java.util.HashMap':
		case 'java.util.Map': {
			store = {};
			const keys = data.keySet().toArray();
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				store[key] = deserialize(data.get(key));
			}
			break;
		}

		case 'java.util.Date': {
			return new Date((data as java.util.Date).getTime());
		}
		default:
			if (typeof data === 'object' && data instanceof java.util.List) {
				const array = [];
				const size = data.size();
				for (let i = 0, n = size; i < n; i++) {
					array[i] = deserialize(data.get(i));
				}
				store = array;
			} else {
				store = null;
			}
			break;
	}
	return store;
}

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

export function serialize(data: any): any {
	let store;
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			if (typeof data === 'string') {
				return java.lang.String.valueOf(data);
			}
			return java.lang.Boolean.valueOf(data);
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (numberIs64Bit(data)) {
				if (hasDecimals) {
					return java.lang.Double.valueOf(data);
				} else {
					return java.lang.Long.valueOf(data);
				}
			} else {
				if (hasDecimals) {
					return java.lang.Float.valueOf(data);
				} else {
					return java.lang.Integer.valueOf(data);
				}
			}
		}

		case 'object': {
			if (!data) {
				return null;
			}

			if (data instanceof Date) {
				return new java.util.Date(data.getTime());
			}

			if (Array.isArray(data)) {
				store = new java.util.ArrayList(data.length);
				for (const item of data) {
					store.add(serialize(item));
				}
				return store;
			}

			if (data.native) {
				return data.native;
			}

			const keys = Object.keys(data);
			store = new java.util.HashMap(keys.length);
			for (const key of keys) {
				const value = data[key];
				store.put(key, serialize(value));
			}
			return store;
		}

		default:
			return null;
	}
}
