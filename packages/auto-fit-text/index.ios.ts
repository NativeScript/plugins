import { Label } from '@nativescript/core';

export class AutoFitText extends Label {
	constructor() {
		super();
	}

	initNativeView(): void {
		this.nativeView.owner = this;

		const label = this.ios as UILabel;
		// label.font = label.font.fontWithSize(40);
		label.adjustsFontSizeToFitWidth = true;
		label.textAlignment = NSTextAlignment.Natural;

		super.initNativeView();
	}

	disposeNativeView(): void {
		// Remove reference from native view to this instance.
		this.nativeView.owner = null;

		// If you want to recycle nativeView and have modified the nativeView
		// without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
		// you have to reset it to its initial state here.
		super.disposeNativeView();
	}
}
