import { Coordinate } from '@nativescript/google-maps';

function intoNativeLatLng(coordinate: Coordinate): com.google.android.gms.maps.model.LatLng {
	return new com.google.android.gms.maps.model.LatLng(coordinate.lat, coordinate.lng);
}

function intoNativePath(path: Coordinate[]): java.util.ArrayList<com.google.android.gms.maps.model.LatLng> {
	const nativePath = new java.util.ArrayList<com.google.android.gms.maps.model.LatLng>();
	path.forEach((coordinate) => {
		nativePath.add(intoNativeLatLng(coordinate));
	});
	return nativePath;
}

function fromNativeLatLng(latLng: com.google.android.gms.maps.model.LatLng): Coordinate {
	return {
		lat: latLng.latitude,
		lng: latLng.longitude,
	};
}

/**
 * The distance between two coordinates, in meters.
 */
export function computeDistanceBetween(from: Coordinate, to: Coordinate): number {
	return com.google.maps.android.SphericalUtil.computeDistanceBetween(intoNativeLatLng(from), intoNativeLatLng(to));
}

/**
 * The heading from one coordinate to another, in degrees clockwise from north.
 */
export function computeHeading(from: Coordinate, to: Coordinate): number {
	return com.google.maps.android.SphericalUtil.computeHeading(intoNativeLatLng(from), intoNativeLatLng(to));
}

/**
 * The area of a closed path (polygon), in square meters.
 */
export function computeArea(path: Coordinate[]): number {
	return com.google.maps.android.SphericalUtil.computeArea(intoNativePath(path));
}

/**
 * The signed area of a closed path (polygon), in square meters. The sign
 * reflects the winding order of the path (positive for counterclockwise).
 */
export function computeSignedArea(path: Coordinate[]): number {
	return com.google.maps.android.SphericalUtil.computeSignedArea(intoNativePath(path));
}

/**
 * The length of a path, in meters.
 */
export function computeLength(path: Coordinate[]): number {
	return com.google.maps.android.SphericalUtil.computeLength(intoNativePath(path));
}

/**
 * The coordinate resulting from moving `distance` meters from `from` on the
 * given `heading` (degrees clockwise from north).
 */
export function computeOffset(from: Coordinate, distance: number, heading: number): Coordinate {
	return fromNativeLatLng(com.google.maps.android.SphericalUtil.computeOffset(intoNativeLatLng(from), distance, heading));
}

/**
 * The coordinate that lies `fraction` of the way between `from` and `to`
 * along the great circle path.
 */
export function interpolate(from: Coordinate, to: Coordinate, fraction: number): Coordinate {
	return fromNativeLatLng(com.google.maps.android.SphericalUtil.interpolate(intoNativeLatLng(from), intoNativeLatLng(to), fraction));
}

/**
 * Whether `point` lies inside the given polygon.
 */
export function containsLocation(point: Coordinate, polygon: Coordinate[], geodesic: boolean = true): boolean {
	return com.google.maps.android.PolyUtil.containsLocation(intoNativeLatLng(point), intoNativePath(polygon), geodesic);
}

/**
 * Whether `point` lies on or near the given path, within `tolerance` meters
 * (defaults to 0.1m, matching both native libraries).
 */
export function isLocationOnPath(point: Coordinate, path: Coordinate[], tolerance: number = 0.1, geodesic: boolean = true): boolean {
	return com.google.maps.android.PolyUtil.isLocationOnPath(intoNativeLatLng(point), intoNativePath(path), geodesic, tolerance);
}

/**
 * Encodes a path using the polyline encoding algorithm
 * (https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
 */
export function encodePolyline(path: Coordinate[]): string {
	return com.google.maps.android.PolyUtil.encode(intoNativePath(path));
}

/**
 * Decodes a polyline encoded string into a path. Returns an empty array for
 * malformed input (matching iOS, where the native decoder returns nil).
 */
export function decodePolyline(encoded: string): Coordinate[] {
	const coordinates: Coordinate[] = [];
	try {
		const nativePath = com.google.maps.android.PolyUtil.decode(encoded);
		for (let i = 0; i < nativePath.size(); i++) {
			coordinates.push(fromNativeLatLng(nativePath.get(i)));
		}
	} catch (e) {
		// PolyUtil.decode throws IllegalArgumentException on malformed input
	}
	return coordinates;
}
