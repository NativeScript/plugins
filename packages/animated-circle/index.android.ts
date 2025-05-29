import { Color, Property, booleanConverter, Utils } from '@nativescript/core';
import { AnimatedCircleCommon, barColorProperty, rimColorProperty, spinBarColorProperty } from './common';

declare const at;

export const animatedProperty = new Property<AnimatedCircle, boolean>({
	name: 'animated',
	valueChanged: (target, old, newValue) => {
		target.updateAnimatedCircle();
	},
	defaultValue: false,
	valueConverter: booleanConverter,
});

export class AnimatedCircle extends AnimatedCircleCommon {
	animated: boolean;
	private _progress = 0;
	private _animateFrom = 0;
	private _animationDuration = 1000;
	private _maxValue = 100;
	private _barColor: string | Color = new Color('#3D8FF4');
	private _barWidth;
	private _rimColor = new Color('#FF5722');
	private _rimWidth;
	private _spinBarColor = new Color('green');
	private _startAngle = 0;
	private _text = '';
	private _textColor = new Color('orange');
	private _textSize = 0;
	private _fillColor = new Color('transparent');
	private _clockwise = true;

	constructor() {
		super();
	}

	createNativeView() {
		return new at.grabner.circleprogress.CircleProgressView(this._context, null);
	}

	initNativeView() {
		this.android.setAutoTextSize(true);
		this.android.setBarStrokeCap(android.graphics.Paint.Cap.ROUND);
		this.android.setTextMode(at.grabner.circleprogress.TextMode.TEXT);
		this.android.setShowTextWhileSpinning(true);
		this.android.setUnitVisible(false);
		this.android.setOuterContourSize(0);
		this.android.setInnerContourSize(0);
		this.android.setText(this.text);
		this.android.setTextColor(this._textColor.argb);
		if (this._textSize !== 0) {
			this.android.setTextSize(this._textSize);
		}
		if (this.animated) {
			this.android.setValueAnimated(this.progress);
		} else {
			this.android.setValue(this.progress);
		}
		this.android.setDirection(this.clockwise ? at.grabner.circleprogress.Direction.CW : at.grabner.circleprogress.Direction.CCW);
		this.android.setRimWidth(this.rimWidth);
		this.android.setBarWidth(this.barWidth);
		if (this.rimWidth) {
			// set rim width to bar width if no bar width provided
			this.android.setBarWidth(this.rimWidth);
		}
		this.updateAnimatedCircle();
	}

	// @ts-ignore
	get android() {
		return this.nativeView;
	}

	spin() {
		this.android?.spin();
	}

	stopSpinning() {
		this.android?.stopSpinning();
	}

	disposeNativeView() {
		super.disposeNativeView();
	}

	set progress(value: number) {
		this._progress = this.getNumber(value);
		if (this.animated) {
			this.android?.setValueAnimated(this._progress);
		} else {
			this.android?.setValue(this._progress);
		}
	}

	get progress(): number {
		return this._progress;
	}

	set animateFrom(value: number) {
		this._animateFrom = Number(value);
		this.updateAnimatedCircle();
	}

	get animateFrom(): number {
		return this._animateFrom;
	}

	set animationDuration(value: number) {
		this._animationDuration = Number(value);
		this.updateAnimatedCircle();
	}

	get animationDuration(): number {
		return this._animationDuration;
	}

	set maxValue(value: number) {
		this._maxValue = value;
		this.android?.setMaxValue(this.maxValue);
	}

	get maxValue(): number {
		return this._maxValue;
	}

	set rimColor(value: any) {
		this._rimColor = value;
		if (value instanceof Color) {
			this.android?.setRimColor(value.argb);
		} else {
			this.android?.setRimColor(new Color(value).argb);
		}
	}

	get rimColor() {
		return this._rimColor;
	}

	get barColor(): string | Color {
		if (this._barColor instanceof Color) {
			return this._barColor;
		} else if (typeof this.barColor === 'string') {
			return new Color(this._barColor);
		}
	}

	set barColor(value: string | Color) {
		if (value) {
			if (value instanceof Color) {
				this._barColor = value;
			} else {
				this._barColor = new Color(value);
			}
			this.android?.setBarColor([this._barColor.argb]);
		}
	}

	set rimWidth(value: number) {
		this._rimWidth = Number(value);
		this.android?.setRimWidth(this._rimWidth);
	}

	get rimWidth() {
		return this._rimWidth;
	}

	set spinBarColor(value: any) {
		this._spinBarColor = value;
		if (value instanceof Color) {
			this.android?.setSpinBarColor(value.argb);
		} else {
			this.android?.setSpinBarColor(new Color(this.spinBarColor).argb);
		}
	}

	get spinBarColor() {
		return this._spinBarColor;
	}

	get fillColor() {
		return this._fillColor;
	}

	set fillColor(value: any) {
		this._fillColor = value;
		if (value instanceof Color) {
			this.android?.setFillCircleColor(value.argb);
		} else {
			this.android?.setFillCircleColor(new Color(value).argb);
		}
	}

	set startAngle(value: number) {
		this._startAngle = value;
		this.android?.setStartAngle(this._startAngle);
	}

	get startAngle() {
		return this._startAngle;
	}

	set barWidth(value: number) {
		this._barWidth = value;
		if (this._barWidth) {
			this.android?.setBarWidth(this._barWidth);
		} else {
			if (this._rimWidth) {
				// set rim width to bar width if no bar width provided
				this.android?.setBarWidth(this._rimWidth);
			}
		}
	}

	get barWidth() {
		return this._barWidth;
	}

	set text(value: string) {
		this._text = value;
		this.android?.setText(this._text);
	}

	get text() {
		return this._text;
	}

	set textColor(value: string) {
		this._textColor = new Color(value);
		this.android?.setTextColor(this._textColor.argb);
	}

	set textSize(value: number) {
		this._textSize = Utils.layout.toDevicePixels(this.getNumber(value));
		this.android?.setTextSize(this._textSize);
	}

	get textSize() {
		return this.android ? this.android.getTextSize() : 0;
	}

	set clockwise(value: boolean) {
		this._clockwise = value;
		this.android?.setDirection(value === true ? at.grabner.circleprogress.Direction.CW : at.grabner.circleprogress.Direction.CCW);
	}

	get clockwise() {
		return this._clockwise;
	}
	// CSS Properties

	[rimColorProperty.setNative](value: any) {
		this._rimColor = value;
		if (value instanceof Color) {
			this.android?.setRimColor(value.argb);
		} else {
			this.android?.setRimColor(new Color(value).argb);
		}
	}

	[rimColorProperty.getDefault]() {
		return this._rimColor;
	}

	[barColorProperty.setNative](value: any) {
		this.barColor = value;
	}

	[barColorProperty.getDefault]() {
		return this.barColor;
	}

	[spinBarColorProperty.setNative](value: any) {
		this._spinBarColor = value;
		if (value instanceof Color) {
			this.android?.setSpinBarColor(value.argb);
		} else {
			this.android?.setSpinBarColor(new Color(this.spinBarColor).argb);
		}
	}

	[spinBarColorProperty.getDefault]() {
		return this._spinBarColor;
	}

	updateAnimatedCircle(): void {
		if (this.android) {
			if (this.animated) {
				if (this.animateFrom) {
					this.android.setValueAnimated(this.animateFrom, this.progress, this.animationDuration);
				} else {
					if (!this._animationDuration) {
						this.android.setValueAnimated(this.progress);
					} else {
						this.android.setValueAnimated(this.progress, this.animationDuration);
					}
				}
			} else {
				this.android.setValue(this.progress);
			}
			this.android.setMaxValue(this.maxValue);
			if (this.rimColor) {
				this.android.setRimColor(new Color(this.rimColor).argb);
			}
			if (this.spinBarColor) {
				this.android.setSpinBarColor(new Color(this.spinBarColor).argb);
			}
			if (this.startAngle) {
				this.android.setStartAngle(this.startAngle);
			}
			if (this.barWidth) {
				this.android.setBarWidth(this.barWidth);
			} else {
				if (this.rimWidth) {
					// set rim width to bar width if no bar width provided
					this.android.setBarWidth(this.rimWidth);
				}
			}
			if (this.rimWidth) {
				this.android.setRimWidth(this.rimWidth);
			}
			if (this.barColor) {
				this.android.setBarColor([(<Color>this.barColor).argb]);
			}
			if (this.fillColor) {
				this.android.setFillCircleColor((<Color>this.fillColor).argb);
			}

			this.android.setDirection(this.clockwise ? at.grabner.circleprogress.Direction.CW : at.grabner.circleprogress.Direction.CCW);
		}
	}

	private getNumber(value: number | string) {
		return typeof value === 'string' ? parseInt(value) : value;
	}
}

animatedProperty.register(AnimatedCircle);
