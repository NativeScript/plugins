import { ContentView, TextView } from '@nativescript/core';

/**
 * No longer needed.
 * @deprecated This class is not needed anymore. Instead use:
 * IQKeyboardToolbarManager.shared.isEnabled = true;
 */
export class PreviousNextView extends ContentView {
	createNativeView() {
		return UIView.new();
	}
}

export class TextViewWithHint extends TextView {
	createNativeView() {
		const view = IQTextView.new();
		this.nativeView = view;
		view.placeholder = this.hint;
		return view;
	}
}
