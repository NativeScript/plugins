import { Coordinate } from '@nativescript/google-maps';

function intoNativePath(path: Coordinate[]): GMSPath {
	const nativePath = GMSMutablePath.path();
	path.forEach((coordinate) => {
		nativePath.addLatitudeLongitude(coordinate.lat, coordinate.lng);
	});
	return nativePath;
}

/**
 * The distance between two coordinates, in meters.
 */
export function computeDistanceBetween(from: Coordinate, to: Coordinate): number {
	return GMSGeometryDistance({ latitude: from.lat, longitude: from.lng }, { latitude: to.lat, longitude: to.lng });
}

/**
 * The heading from one coordinate to another, in degrees clockwise from north.
 */
export function computeHeading(from: Coordinate, to: Coordinate): number {
	return GMSGeometryHeading({ latitude: from.lat, longitude: from.lng }, { latitude: to.lat, longitude: to.lng });
}

/**
 * The area of a closed path (polygon), in square meters.
 */
export function computeArea(path: Coordinate[]): number {
	return GMSGeometryArea(intoNativePath(path));
}

/**
 * The signed area of a closed path (polygon), in square meters. The sign
 * reflects the winding order of the path (positive for counterclockwise).
 */
export function computeSignedArea(path: Coordinate[]): number {
	return GMSGeometrySignedArea(intoNativePath(path));
}

/**
 * The length of a path, in meters.
 */
export function computeLength(path: Coordinate[]): number {
	return GMSGeometryLength(intoNativePath(path));
}

/**
 * The coordinate resulting from moving `distance` meters from `from` on the
 * given `heading` (degrees clockwise from north).
 */
export function computeOffset(from: Coordinate, distance: number, heading: number): Coordinate {
	const coordinate = GMSGeometryOffset({ latitude: from.lat, longitude: from.lng }, distance, heading);
	return {
		lat: coordinate.latitude,
		lng: coordinate.longitude,
	};
}

/**
 * The coordinate that lies `fraction` of the way between `from` and `to`
 * along the great circle path.
 */
export function interpolate(from: Coordinate, to: Coordinate, fraction: number): Coordinate {
	const coordinate = GMSGeometryInterpolate({ latitude: from.lat, longitude: from.lng }, { latitude: to.lat, longitude: to.lng }, fraction);
	return {
		lat: coordinate.latitude,
		lng: coordinate.longitude,
	};
}

/**
 * Whether `point` lies inside the given polygon.
 */
export function containsLocation(point: Coordinate, polygon: Coordinate[], geodesic: boolean = true): boolean {
	return GMSGeometryContainsLocation({ latitude: point.lat, longitude: point.lng }, intoNativePath(polygon), geodesic);
}

/**
 * Whether `point` lies on or near the given path, within `tolerance` meters
 * (defaults to 0.1m, matching both native libraries).
 */
export function isLocationOnPath(point: Coordinate, path: Coordinate[], tolerance: number = 0.1, geodesic: boolean = true): boolean {
	return GMSGeometryIsLocationOnPathTolerance({ latitude: point.lat, longitude: point.lng }, intoNativePath(path), geodesic, tolerance);
}

/**
 * Encodes a path using the polyline encoding algorithm
 * (https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
 */
export function encodePolyline(path: Coordinate[]): string {
	return intoNativePath(path).encodedPath();
}

/**
 * Decodes a polyline encoded string into a path.
 */
export function decodePolyline(encoded: string): Coordinate[] {
	const coordinates: Coordinate[] = [];
	const path = GMSPath.pathFromEncodedPath(encoded);
	if (path) {
		const count = path.count();
		for (let i = 0; i < count; i++) {
			const coordinate = path.coordinateAtIndex(i);
			coordinates.push({
				lat: coordinate.latitude,
				lng: coordinate.longitude,
			});
		}
	}
	return coordinates;
}
