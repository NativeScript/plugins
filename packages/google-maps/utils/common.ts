import {Color} from "@nativescript/core";

export function intoNativeColor(color: Color | string) {
  if (color instanceof Color) {
    return global.isAndroid ? color.android : color.ios;
  } else if (typeof color === 'string') {
    const res = new Color(color)
    return global.isAndroid ? res.android : res.ios;
  }
  return null;
}
