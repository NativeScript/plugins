import { Label } from '@nativescript/core';

declare var me: any;

export class AutoFitText extends Label {
	public createNativeView(): Object {
		const textField: android.widget.TextView = super.createNativeView() as android.widget.TextView;
		textField.setMaxLines(1);
		textField.setSingleLine();
		textField.setMaxHeight(200);
		textField.setMinHeight(40);
		textField.setTextAlignment(android.widget.TextView.TEXT_ALIGNMENT_CENTER);

		me.grantland.widget.AutofitHelper.create(textField);
		return textField;
	}

	initNativeView(): void {
		this.nativeView.owner = this;
		super.initNativeView();
	}

	disposeNativeView(): void {
		this.nativeView.owner = null;
		super.disposeNativeView();
	}
}
