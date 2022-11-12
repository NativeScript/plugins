import { Color } from '@nativescript/core';

export interface IIconFactory {
	setStyle(style: number);
	setTextAppearance(style: number);
	makeIcon(text: string);
	color: Color;
	backgroundAsset: any;
	rotation: number;
	contentRotation: number;
	native: any;
}

export class IconFactory implements IIconFactory {
	setStyle(style: number);
	setTextAppearance(style: number);
	makeIcon(text: string);
	color: Color;
	backgroundAsset: any;
	rotation: number;
	contentRotation: number;
	android?: any;
	ios?: any;
	native?: any;
}
