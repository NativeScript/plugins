import { Coordinate } from '@nativescript/google-maps';

/**
 * The distance between two coordinates, in meters.
 */
export function computeDistanceBetween(from: Coordinate, to: Coordinate): number;

/**
 * The heading from one coordinate to another, in degrees clockwise from north.
 */
export function computeHeading(from: Coordinate, to: Coordinate): number;

/**
 * The area of a closed path (polygon), in square meters.
 */
export function computeArea(path: Coordinate[]): number;

/**
 * The length of a path, in meters.
 */
export function computeLength(path: Coordinate[]): number;

/**
 * The coordinate resulting from moving `distance` meters from `from` on the
 * given `heading` (degrees clockwise from north).
 */
export function computeOffset(from: Coordinate, distance: number, heading: number): Coordinate;

/**
 * The coordinate that lies `fraction` of the way between `from` and `to`
 * along the great circle path.
 */
export function interpolate(from: Coordinate, to: Coordinate, fraction: number): Coordinate;

/**
 * Whether `point` lies inside the given polygon.
 */
export function containsLocation(point: Coordinate, polygon: Coordinate[], geodesic?: boolean): boolean;

/**
 * Whether `point` lies on or near the given path, within `tolerance` meters
 * (defaults to 0.1m, matching both native libraries).
 */
export function isLocationOnPath(point: Coordinate, path: Coordinate[], tolerance?: number, geodesic?: boolean): boolean;

/**
 * Encodes a path using the polyline encoding algorithm
 * (https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
 */
export function encodePolyline(path: Coordinate[]): string;

/**
 * Decodes a polyline encoded string into a path.
 */
export function decodePolyline(encoded: string): Coordinate[];
