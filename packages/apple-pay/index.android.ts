import { Utils, View } from '@nativescript/core';

export class ApplePayBtn extends View {
	createNativeView() {
		return new android.widget.FrameLayout(Utils.android.getApplicationContext());
	}

	createPaymentRequest() {
		return;
	}
}
