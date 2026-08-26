import { Color, ImageSource } from '@nativescript/core';

/**
 * Icon style presets. Values match the Android `IconGenerator.STYLE_*`
 * constants. On iOS they map to the text/background color pairs in
 * {@link ICON_STYLE_COLORS} (the GMU library ships no icon generator, so the
 * iOS implementation renders its own approximation of the Android bubbles).
 */
export enum ICON_STYLE {
	STYLE_DEFAULT = 1,
	STYLE_WHITE = 2,
	STYLE_RED = 3,
	STYLE_BLUE = 4,
	STYLE_GREEN = 5,
	STYLE_ORANGE = 7,
	STYLE_PURPLE = 6,
}

/**
 * Text/background color pairs used by the iOS renderer for each
 * {@link ICON_STYLE} preset, approximating the Android `IconGenerator` styles.
 */
export const ICON_STYLE_COLORS: Record<ICON_STYLE, { background: string; text: string }> = {
	[ICON_STYLE.STYLE_DEFAULT]: { background: '#0099CC', text: '#FFFFFF' },
	[ICON_STYLE.STYLE_WHITE]: { background: '#FFFFFF', text: '#000000' },
	[ICON_STYLE.STYLE_RED]: { background: '#CC0000', text: '#FFFFFF' },
	[ICON_STYLE.STYLE_BLUE]: { background: '#0099CC', text: '#FFFFFF' },
	[ICON_STYLE.STYLE_GREEN]: { background: '#669900', text: '#FFFFFF' },
	[ICON_STYLE.STYLE_ORANGE]: { background: '#FF8800', text: '#FFFFFF' },
	[ICON_STYLE.STYLE_PURPLE]: { background: '#9933CC', text: '#FFFFFF' },
};

export interface IIconFactory {
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

	native: any;
	android?: any;
	ios?: any;
}
