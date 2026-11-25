import { CircleOptions, GroundOverlayOptions, PolygonOptions, PolylineOptions, MarkerOptions, TileOverlayOptions, Glyph, PinConfig, StyleSpan } from '.';
import { CollisionBehavior, JointType } from '../common';

export function intoNativeMarkerOptions(options: MarkerOptions);

export function intoNativeCollisionBehavior(behavior: CollisionBehavior): any;

export function fromNativeCollisionBehavior(behavior: any): CollisionBehavior;

export function intoNativeGlyph(glyph: Glyph): any;

/** Android only: builds a native `PinConfig`. */
export function intoNativePinConfig(config: PinConfig): any;

/** iOS only: builds a native `GMSPinImage`. */
export function intoNativePinImage(config: PinConfig): any;

export function intoNativeStyleSpan(span: StyleSpan): any;

export function intoNativeStyleSpans(spans: StyleSpan[]): any;

export function intoNativeCircleOptions(options: CircleOptions);

export function intoNativePolygonOptions(options: PolygonOptions);

export function intoNativePolylineOptions(options: PolylineOptions);

export function intoNativeGroundOverlayOptions(options: GroundOverlayOptions);

export function intoNativeTileOverlayOptions(options: TileOverlayOptions);

export function toJointType(type: number): JointType;

export function intoNativeJointType(type: JointType): number;

export function hueFromColor(color: any): number;

export function deserialize(data): any;

export function serialize(data: any): any;

export interface NativeMapListenerPrimaries {
	onCameraIdle?: () => void;
	onMarkerClick?: (marker: any) => boolean;
	onPolygonClick?: (polygon: any) => void;
	onPolylineClick?: (polyline: any) => void;
}

export function registerNativeMapListeners(map: any, primary: NativeMapListenerPrimaries): void;
export function hasNativeMapListeners(map: any): boolean;
export function attachNativeMapListeners(map: any): void;
export function unregisterNativeMapListeners(map: any): void;
export function addOnCameraIdleListener(map: any, listener: any): void;
export function removeOnCameraIdleListener(map: any, listener: any): void;
export function addOnMarkerClickListener(map: any, listener: any): void;
export function removeOnMarkerClickListener(map: any, listener: any): void;
export function addOnPolygonClickListener(map: any, listener: any): void;
export function removeOnPolygonClickListener(map: any, listener: any): void;
export function addOnPolylineClickListener(map: any, listener: any): void;
export function removeOnPolylineClickListener(map: any, listener: any): void;
