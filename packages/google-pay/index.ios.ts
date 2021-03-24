import { View } from '@nativescript/core';

export class GooglePayBtn extends View {
	createNativeView() {
		return UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
	}

	createPaymentRequest() {
		return;
	}
}
