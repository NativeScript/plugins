import { Color } from '@nativescript/core';
import { IIconFactory } from '.';

export enum ICON_STYLE {
	STYLE_DEFAULT = 1,
	STYLE_WHITE = 2,
	STYLE_RED = 3,
	STYLE_BLUE = 4,
	STYLE_GREEN = 5,
	STYLE_ORANGE = 7,
	STYLE_PURPLE = 6,
}

export class IconFactory implements IIconFactory {
	// Not provided in iOS google-maps-util library. Need to roll our own impl.
	setStyle(style: number) {
		console.error('Method not implemented.');
	}
	makeIcon(text: string) {
		console.error('Method not implemented.');
		return GMSMarker.markerImageWithColor(new Color('red').ios);
	}
	setTextAppearance(style: number) {
		console.error('Method not implemented.');
	}

	color: Color;
	backgroundAsset: any;
	rotation: number;
	contentRotation: number;
	ios: any;
	native: any;
}
