import { Color, ImageSource, Utils } from '@nativescript/core';
import { intoColor } from '../utils/common';
import { ICON_STYLE, IIconFactory } from './common';

export * from './common';

export class IconFactory implements IIconFactory {
	#native: com.google.maps.android.ui.IconGenerator;

	constructor() {
		this.#native = new com.google.maps.android.ui.IconGenerator(Utils.ad.getApplicationContext());
	}

	/**
	 * The underlying `com.google.maps.android.ui.IconGenerator`. Delve into it
	 * for anything the shared API does not cover (custom content views, text
	 * appearance resources, content padding, ...).
	 */
	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get ios() {
		return null;
	}

	set backgroundAsset(value: globalAndroid.graphics.drawable.Drawable | ImageSource) {
		const drawable = value instanceof ImageSource ? new android.graphics.drawable.BitmapDrawable(value.android) : value;
		this.native.setBackground(drawable);
	}

	set color(color: Color | string) {
		this.#native.setColor(intoColor(color).android);
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

	makeIcon(text: string): ImageSource {
		return new ImageSource(this.#native.makeIcon(text ?? ''));
	}
}
