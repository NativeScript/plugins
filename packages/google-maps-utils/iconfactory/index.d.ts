import { Color, ImageSource } from '@nativescript/core';
import { ICON_STYLE, IIconFactory } from './common';

export * from './common';

export class IconFactory implements IIconFactory {
	constructor();

	/**
	 * `com.google.maps.android.ui.IconGenerator` on Android. On iOS there is no
	 * underlying native object (`null`) — icons are rendered in JavaScript.
	 */
	readonly native: any;

	readonly android: any;

	readonly ios: any;

	/**
	 * The icon's main (background / bubble) color.
	 */
	color: Color | string;

	/**
	 * Custom background. `globalAndroid.graphics.drawable.Drawable` or
	 * `ImageSource` on Android, `UIImage` or `ImageSource` on iOS.
	 */
	backgroundAsset: any;

	/**
	 * Rotation of the whole icon, in degrees clockwise.
	 */
	rotation: number;

	/**
	 * Rotation of the text content inside the icon, in degrees clockwise.
	 */
	contentRotation: number;

	setStyle(style: ICON_STYLE): void;

	/**
	 * Renders an icon with the given text. The returned `ImageSource` can be
	 * used directly as a marker icon (`MarkerOptions.icon`).
	 */
	makeIcon(text: string): ImageSource;
}
