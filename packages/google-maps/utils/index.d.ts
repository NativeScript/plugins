import {
  CircleOptions,
  GroundOverlayOptions,
  PolygonOptions,
  PolylineOptions,
  MarkerOptions,
  TileOverlayOptions
} from ".";
import {JointType} from "../common";

export function intoNativeMarkerOptions(options: MarkerOptions);

export function intoNativeCircleOptions(options: CircleOptions);

export function intoNativePolygonOptions(options: PolygonOptions);

export function intoNativePolylineOptions(options: PolylineOptions);

export function intoNativeGroundOverlayOptions(options: GroundOverlayOptions);

export function intoNativeTileOverlayOptions(options: TileOverlayOptions);

export function toJointType(type: number): JointType;

export function intoNativeJointType(type: JointType): number;

export function hueFromColor(color: any): number;

