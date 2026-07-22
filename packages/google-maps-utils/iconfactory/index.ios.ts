import { Color, ImageSource } from '@nativescript/core';
import { intoColor } from '../utils/common';
import { ICON_STYLE, ICON_STYLE_COLORS, IIconFactory } from './common';

export * from './common';

const DEFAULT_FONT_SIZE = 12;
const HORIZONTAL_PADDING = 8;
const VERTICAL_PADDING = 4;

/**
 * Text marker icon factory for iOS. The GMU library ships no equivalent of
 * the Android `IconGenerator`, so this renders its own approximation: text
 * (bold system font) on a rounded bubble.
 */
export class IconFactory implements IIconFactory {
	#color: Color;
	#textColor: Color;
	#backgroundAsset: UIImage;
	#rotation = 0;
	#contentRotation = 0;

	constructor() {
		this.setStyle(ICON_STYLE.STYLE_DEFAULT);
	}

	/**
	 * There is no underlying native object on iOS — icons are rendered in
	 * JavaScript. Style the factory through its properties and use the
	 * returned `ImageSource.ios` to delve further.
	 */
	get native() {
		return null;
	}

	get ios() {
		return null;
	}

	set color(color: Color | string) {
		this.#color = intoColor(color);
	}

	set backgroundAsset(value: UIImage | ImageSource) {
		this.#backgroundAsset = value instanceof ImageSource ? value.ios : value;
	}

	set rotation(rotation: number) {
		this.#rotation = rotation ?? 0;
	}

	set contentRotation(rotation: number) {
		this.#contentRotation = rotation ?? 0;
	}

	setStyle(style: ICON_STYLE) {
		const colors = ICON_STYLE_COLORS[style] ?? ICON_STYLE_COLORS[ICON_STYLE.STYLE_DEFAULT];
		this.#color = new Color(colors.background);
		this.#textColor = new Color(colors.text);
	}

	makeIcon(text: string): ImageSource {
		const nsText = NSString.stringWithUTF8String(text ?? '');
		const attributes = NSDictionary.dictionaryWithObjectsForKeys([UIFont.boldSystemFontOfSize(DEFAULT_FONT_SIZE), this.#textColor.ios], [NSFontAttributeName, NSForegroundColorAttributeName]);
		const textSize = nsText.sizeWithAttributes(attributes);

		const contentWidth = Math.ceil(textSize.width + HORIZONTAL_PADDING * 2);
		const contentHeight = Math.ceil(textSize.height + VERTICAL_PADDING * 2);

		// Expand the canvas so the rotated icon is not clipped.
		const radians = (this.#rotation * Math.PI) / 180;
		const cos = Math.abs(Math.cos(radians));
		const sin = Math.abs(Math.sin(radians));
		const width = Math.ceil(contentWidth * cos + contentHeight * sin);
		const height = Math.ceil(contentWidth * sin + contentHeight * cos);

		UIGraphicsBeginImageContextWithOptions(CGSizeMake(width, height), false, 0);
		const context = UIGraphicsGetCurrentContext();

		CGContextTranslateCTM(context, width / 2, height / 2);
		if (this.#rotation) {
			CGContextRotateCTM(context, radians);
		}
		CGContextTranslateCTM(context, -contentWidth / 2, -contentHeight / 2);

		const rect = CGRectMake(0, 0, contentWidth, contentHeight);
		if (this.#backgroundAsset) {
			this.#backgroundAsset.drawInRect(rect);
		} else {
			this.#color.ios.setFill();
			UIBezierPath.bezierPathWithRoundedRectCornerRadius(rect, contentHeight / 2).fill();
		}

		CGContextSaveGState(context);
		CGContextTranslateCTM(context, contentWidth / 2, contentHeight / 2);
		if (this.#contentRotation) {
			CGContextRotateCTM(context, (this.#contentRotation * Math.PI) / 180);
		}
		nsText.drawAtPointWithAttributes(CGPointMake(-textSize.width / 2, -textSize.height / 2), attributes);
		CGContextRestoreGState(context);

		const image = UIGraphicsGetImageFromCurrentImageContext();
		UIGraphicsEndImageContext();
		return new ImageSource(image);
	}
}
