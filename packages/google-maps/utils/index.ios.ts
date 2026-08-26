import { CircleOptions, Coordinate, CoordinateBounds, Glyph, GroundOverlayOptions, MarkerOptions, PinConfig, PolygonOptions, PolylineOptions, StyleSpan, TileOverlayOptions } from '../';
import { Color, ImageSource } from '@nativescript/core';
import { intoNativeColor } from './common';
import { CollisionBehavior } from '../common';

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

export function intoNativeCollisionBehavior(behavior: CollisionBehavior): GMSCollisionBehavior {
	switch (behavior) {
		case CollisionBehavior.OptionalAndHidesLowerPriority:
			return GMSCollisionBehavior.OptionalAndHidesLowerPriority;
		case CollisionBehavior.RequiredAndHidesOptional:
			return GMSCollisionBehavior.RequiredAndHidesOptional;
		default:
			return GMSCollisionBehavior.Required;
	}
}

export function fromNativeCollisionBehavior(behavior: GMSCollisionBehavior): CollisionBehavior {
	switch (behavior) {
		case GMSCollisionBehavior.OptionalAndHidesLowerPriority:
			return CollisionBehavior.OptionalAndHidesLowerPriority;
		case GMSCollisionBehavior.RequiredAndHidesOptional:
			return CollisionBehavior.RequiredAndHidesOptional;
		default:
			return CollisionBehavior.Required;
	}
}

export function intoNativeGlyph(glyph: Glyph): GMSPinImageGlyph {
	if (glyph?.icon) {
		let image: UIImage;
		if (glyph.icon instanceof UIImage) {
			image = glyph.icon;
		} else if (glyph.icon instanceof ImageSource) {
			image = glyph.icon.ios;
		}
		if (image) {
			return GMSPinImageGlyph.alloc().initWithImage(image);
		}
	}
	if (typeof glyph?.text === 'string') {
		const textColor = (intoNativeColor(glyph.textColor) as UIColor) ?? UIColor.whiteColor;
		return GMSPinImageGlyph.alloc().initWithTextTextColor(glyph.text, textColor);
	}
	if (glyph?.glyphColor != null) {
		return GMSPinImageGlyph.alloc().initWithGlyphColor(intoNativeColor(glyph.glyphColor) as UIColor);
	}
	return null;
}

export function intoNativePinImage(config: PinConfig): GMSPinImage {
	const options = GMSPinImageOptions.new();
	const backgroundColor = intoNativeColor(config?.backgroundColor) as UIColor;
	if (backgroundColor) {
		options.backgroundColor = backgroundColor;
	}
	const borderColor = intoNativeColor(config?.borderColor) as UIColor;
	if (borderColor) {
		options.borderColor = borderColor;
	}
	if (config?.glyph) {
		const glyph = intoNativeGlyph(config.glyph);
		if (glyph) {
			options.glyph = glyph;
		}
	}
	return GMSPinImage.pinImageWithOptions(options);
}

export function intoNativeMarkerOptions(options: MarkerOptions) {
	const isAdvanced = !!(options?.pinConfig || options?.collisionBehavior);
	const opts = isAdvanced ? GMSAdvancedMarker.new() : GMSMarker.new();

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

	if (typeof options?.opacity === 'number') {
		opts.opacity = options.opacity;
	}

	if (typeof options?.rotation === 'number') {
		opts.rotation = options.rotation;
	}

	if (typeof options?.visible === 'boolean') {
		opts.opacity = options.visible ? 1 : 0;
	}

	if (typeof options?.flat === 'boolean') {
		opts.flat = options.flat;
	}

	if (typeof options?.zIndex === 'number') {
		opts.zIndex = options.zIndex;
	}

	if (options?.userData) {
		opts.userData = serialize(options.userData);
	}

	if (isAdvanced) {
		if (options.collisionBehavior) {
			(opts as GMSAdvancedMarker).collisionBehavior = intoNativeCollisionBehavior(options.collisionBehavior);
		}
		// The styled pin becomes the marker icon; applied last so it wins over `color`/`icon`.
		if (options.pinConfig) {
			opts.icon = intoNativePinImage(options.pinConfig);
		}
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

	if (options?.userData) {
		opts.userData = serialize(options.userData);
	}

	return opts;
}

export function intoNativePolygonOptions(options: PolygonOptions) {
	let path;

	if (Array.isArray(options?.points)) {
		path = GMSMutablePath.path();
		for (const point of options.points) {
			path.addCoordinate(CLLocationCoordinate2DMake(point.lat, point.lng));
		}
	}

	const opts = path ? GMSPolygon.polygonWithPath(path) : GMSPolygon.new();

	if (Array.isArray(options?.holes)) {
		const nativeHoles = NSMutableArray.new<GMSMutablePath>();
		for (const hole of options.holes) {
			if (Array.isArray(hole) && hole.length) {
				const path = GMSMutablePath.path();
				for (const coordinate of hole) {
					path.addCoordinate(CLLocationCoordinate2DMake(coordinate.lat, coordinate.lng));
				}
				nativeHoles.addObject(path);
			}
		}
		opts.holes = nativeHoles;
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

	if (options?.userData) {
		opts.userData = serialize(options.userData);
	}

	return opts;
}

export function intoNativeStyleSpan(span: StyleSpan): GMSStyleSpan {
	if (span?.gradient) {
		const stroke = GMSStrokeStyle.gradientFromColorToColor(intoNativeColor(span.gradient.from) as UIColor, intoNativeColor(span.gradient.to) as UIColor);
		return typeof span.segments === 'number' ? GMSStyleSpan.spanWithStyleSegments(stroke, span.segments) : GMSStyleSpan.spanWithStyle(stroke);
	}
	const color = intoNativeColor(span?.color) as UIColor;
	if (!color) {
		return null;
	}
	return typeof span?.segments === 'number' ? GMSStyleSpan.spanWithColorSegments(color, span.segments) : GMSStyleSpan.spanWithColor(color);
}

export function intoNativeStyleSpans(spans: StyleSpan[]): NSArray<GMSStyleSpan> {
	const array = NSMutableArray.alloc<GMSStyleSpan>().init();
	spans.forEach((span) => {
		const nativeSpan = intoNativeStyleSpan(span);
		if (nativeSpan) {
			array.addObject(nativeSpan);
		}
	});
	return array;
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

	if (typeof options?.startCap === 'number') {
		// TODO
	}

	if (typeof options?.endCap === 'number') {
		// TODO
	}

	if (Array.isArray(options?.spans)) {
		opts.spans = intoNativeStyleSpans(options.spans);
	}

	if (options?.userData) {
		opts.userData = serialize(options.userData);
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

	if (typeof options?.transparency === 'number') {
		let transparency = options.transparency;
		if (transparency > 1) {
			transparency = 1;
		} else if (transparency < 1) {
			transparency = 0;
		}
		opts.opacity = 1 - transparency;
	}

	if (options?.bounds) {
		opts.bounds = new GMSCoordinateBounds({
			coordinate: CLLocationCoordinate2DMake(options.bounds.southwest.lat, options.bounds.southwest.lng),
			coordinate2: CLLocationCoordinate2DMake(options.bounds.northeast.lat, options.bounds.northeast.lng),
		});
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

	if (options?.userData) {
		opts.userData = serialize(options.userData);
	}

	return opts;
}

export function intoNativeTileOverlayOptions(options: TileOverlayOptions) {}

export function deserialize(data: any): any {
	if (data instanceof NSNull) {
		return null;
	}

	if (data instanceof NSArray) {
		const array = [];
		for (let i = 0, n = data.count; i < n; i++) {
			array[i] = deserialize(data.objectAtIndex(i));
		}
		return array;
	}

	if (data instanceof NSDictionary) {
		const dict = {};
		const allKeys = data.allKeys;
		const count = allKeys.count;
		for (let i = 0, n = count; i < n; i++) {
			const key = allKeys.objectAtIndex(i);
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
				return NSNull.new();
			}

			if (Array.isArray(data)) {
				const length = data.length;
				const array = NSMutableArray.arrayWithCapacity(length);
				for (let i = 0; i < length; i++) {
					const item = serialize(data[i]);
					array.insertObjectAtIndex(item, i);
				}
				return array;
			}

			const keys = Object.keys(data);
			const node = NSMutableDictionary.dictionaryWithCapacity(keys.length);

			for (const key of keys) {
				const value = data[key];
				node.setObjectForKey(serialize(value), key);
			}
			return node;
		}

		default:
			return NSNull.new();
	}
}

export interface NativeMapListenerPrimaries {
	onCameraIdle?: () => void;
	onMarkerClick?: (marker: any) => boolean;
	onPolygonClick?: (polygon: any) => void;
	onPolylineClick?: (polyline: any) => void;
}

export function registerNativeMapListeners(map: any, primary: NativeMapListenerPrimaries): void {}

export function hasNativeMapListeners(map: any): boolean {
	return false;
}

export function attachNativeMapListeners(map: any): void {}

export function unregisterNativeMapListeners(map: any): void {}

export function addOnCameraIdleListener(map: any, listener: any): void {}

export function removeOnCameraIdleListener(map: any, listener: any): void {}

export function addOnMarkerClickListener(map: any, listener: any): void {}

export function removeOnMarkerClickListener(map: any, listener: any): void {}

export function addOnPolygonClickListener(map: any, listener: any): void {}

export function removeOnPolygonClickListener(map: any, listener: any): void {}

export function addOnPolylineClickListener(map: any, listener: any): void {}

export function removeOnPolylineClickListener(map: any, listener: any): void {}
