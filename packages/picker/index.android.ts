import { PickerField as PickerFieldCommon } from './common';

export class PickerField extends PickerFieldCommon {
	initNativeView() {
		super.initNativeView();
		this.nativeTextViewProtected.setFocusable(false);
		this.nativeTextViewProtected.setLongClickable(false);
	}
}
