import { Color } from '@nativescript/core';
import { AnimatedCircleCommon } from './common';

declare const at;

export class AnimatedCircle extends AnimatedCircleCommon {
	private _android: any;
	private _progress: number;
	private _animateFrom: number;
	private _animationDuration = 1000;
	private _animated: boolean;
	private _maxValue = 100;
	private _barColor = new Color('#3D8FF4');
	private _barWidth: number;
	private _rimColor: Color;
	private _rimWidth = 5;
	private _spinBarColor = new Color('green');
	private _startAngle: number;
	private _text = '';
	private _textColor = new Color('orange');
	private _textSize = 8;
	private _fillColor: Color;
	clockwise = true;

	constructor() {
		super();
	}

	createNativeView() {
		return new at.grabner.circleprogress.CircleProgressView(this._context, null);
	}

	initNativeView() {
		this.android.setAutoTextSize(false);
		this.android.setBarStrokeCap(android.graphics.Paint.Cap.ROUND);
		this.android.setTextMode(at.grabner.circleprogress.TextMode.TEXT);
		this.android.setShowTextWhileSpinning(true);
		this.android.setTextScale(1.1);
		this.android.setTextSize(300);
		this.android.setUnitVisible(false);
		this.android.setOuterContourSize(0);
		this.android.setInnerContourSize(0);
		this.updateAnimatedCircle();
	}

	// @ts-ignore
	get android() {
		return this.nativeView;
	}

	spin() {
		this.android.spin();
	}

	stopSpinning() {
		this.android.stopSpinning();
	}

	disposeNativeView() {
		super.disposeNativeView();
	}

	set progress(value: number) {
		this._progress = Number(value);
		this.updateAnimatedCircle();
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

	set animated(value: boolean) {
		this._animated = Boolean(value);
		this.updateAnimatedCircle();
	}

	get animated(): boolean {
		return this._animated;
	}

	set maxValue(value: number) {
		this._maxValue = Number(value);
		this._updateMaxValue(value);
	}

	get maxValue(): number {
		return this._maxValue;
	}

	set rimColor(value: any) {
		this._rimColor = value;
		this._updateRimColor(value);
	}

	get rimColor() {
		return this._rimColor;
	}

	get barColor(): Color {
		return this._barColor;
	}

	set barColor(value: Color) {
		this._barColor = value;
		this._updateBarColor(value);
	}

	set rimWidth(value: number) {
		this._rimWidth = Number(value);
		this._updateRimWidth(value);
	}

	get rimWidth() {
		return this._rimWidth;
	}

	set spinBarColor(value: any) {
		this._spinBarColor = value;
		this._updateSpinBarColor(value);
	}

	get spinBarColor() {
		return this._spinBarColor;
	}

	set startAngle(value: number) {
		this._startAngle = Number(value);
		this._updateStartAngle(value);
	}

	get startAngle() {
		return this._startAngle;
	}

	set barWidth(value: number) {
		this._barWidth = Number(value);
		this._updateBarWidth(value);
	}

	get barWidth() {
		return this._barWidth;
	}

	set text(value: string) {
		this._text = value;
		this._updateText(value);
	}

	get text() {
		return this.android.getText();
	}

	set textColor(value: string) {
		this._textColor = new Color(value);
		this._updateTextColor(this._textColor);
	}

	set textSize(value: number) {
		this._textSize = value;
		this._updateTextSize(value);
	}

	get textSize() {
		return this.android.getTextSize();
	}

	set fillColor(value: Color) {
		this._fillColor = value;
		this._updateFillColor(value);
	}

	private _updateBarWidth(value) {
		this.android?.setBarWidth(this.barWidth);
	}
	private _updateTextColor(value) {
		this.android?.setTextColor(value.argb);
	}

	private _updateText(value: string) {
		this.android?.setText(value);
	}

	private _updateMaxValue(value) {
		this.android?.setMaxValue(value);
	}

	private _updateRimWidth(value) {
		this.android?.setRimWidth(value);
	}

	private _updateRimColor(value) {
		this.android?.setRimColor(new Color(value).argb);
	}

	private _updateBarColor(value) {
		this.android?.setBarColor([new Color(value).argb]);
	}

	private _updateSpinBarColor(value: Color) {
		this.android?.setSpinBarColor(value.argb);
	}

	private _updateStartAngle(value: number) {
		this.android?.setStartAngle(value);
	}

	private _updateTextSize(value: number) {
		this.android?.setTextSize(value);
	}

	private _updateFillColor(value) {
		this.android?.setFillCircleColor(value.argb);
	}

	private updateAnimatedCircle(): void {
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

			this.android.setDirection(this.clockwise ? at.grabner.circleprogress.Direction.CW : at.grabner.circleprogress.Direction.CCW);
		}
	}
}
