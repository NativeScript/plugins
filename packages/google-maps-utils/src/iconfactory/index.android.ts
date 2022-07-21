import { Color, Utils } from '@nativescript/core';
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
	#native: com.google.maps.android.ui.IconGenerator;

	constructor() {
		this.#native = new com.google.maps.android.ui.IconGenerator(Utils.ad.getApplicationContext());
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	set backgroundAsset(value: globalAndroid.graphics.drawable.Drawable) {
		this.native.setBackground(value);
	}

	set color(color: Color) {
		this.#native.setColor(color.android);
	}

	set rotation(rotation: number) {
		this.#native.setRotation(rotation);
	}

	set contentRotation(rotation: number) {
		this.#native.setContentRotation(rotation);
	}

	setStyle(style: ICON_STYLE) {
		this.#native.setStyle(style);
	}

	setTextAppearance(appearance: number) {
		this.#native.setTextAppearance(appearance);
	}

	makeIcon(text: string): globalAndroid.graphics.Bitmap {
		return this.#native.makeIcon(text);
	}
}
