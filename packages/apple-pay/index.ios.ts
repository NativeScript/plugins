import { Frame, Property, View } from '@nativescript/core';
import { ApplePayButtonStyle, ApplePayButtonType } from './enums.ios';
import { ApplePayRequest } from './interfaces.ios';
import { PKPaymentAuthorizationViewControllerDelegateImpl } from './payment-authorization-view-controller-delegate.ios';

export * from './enums.ios';
export * from './interfaces.ios';

export function isApplePaySupported() {
	return PKPaymentAuthorizationController.canMakePayments();
}

export class ApplePayBtn extends View {
	buttonType: ApplePayButtonType;
	buttonStyle: ApplePayButtonStyle;
	applePayController: PKPaymentAuthorizationViewController;
	applePayControllerDelegate: PKPaymentAuthorizationViewControllerDelegateImpl;
	private _tapHandler: NSObject;

	createNativeView() {
		const canMakePayments = PKPaymentAuthorizationController.canMakePayments();
		const canSetupCards = PKPaymentAuthorizationController.canMakePaymentsUsingNetworks([PKPaymentNetworkAmex, PKPaymentNetworkDiscover, PKPaymentNetworkMasterCard, PKPaymentNetworkVisa]);

		// handle the button style from the property view or default to black
		let buttonStyle;
		if (this.buttonStyle) {
			buttonStyle = this._mapStyleToPKPaymentButtonStyle(this.buttonStyle);
		} else {
			buttonStyle = PKPaymentButtonStyle.Black;
		}

		let nativeView;
		if (canMakePayments) {
			// handle the button type from the property setting if set or default
			let buttonType;
			if (this.buttonType) {
				buttonType = this._mapTypeToPKPaymentButtonType(this.buttonType);
			} else {
				buttonType = PKPaymentButtonType.InStore;
			}

			nativeView = PKPaymentButton.buttonWithTypeStyle(buttonType, buttonStyle);
		} else if (canSetupCards) {
			// user can make payments so we can use the `SETUP` button
			nativeView = PKPaymentButton.buttonWithTypeStyle(PKPaymentButtonType.SetUp, buttonStyle);
		} else {
			return UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
		}

		this._tapHandler = ApplePayBtnTapHandlerImpl.initWithOwner(new WeakRef(this));

		nativeView.addTargetActionForControlEvents(this._tapHandler, 'tap', UIControlEvents.TouchUpInside);

		return nativeView;
	}

	initNativeView() {
		super.initNativeView();
	}

	disposeNativeView() {
		// teardown
		this._tapHandler = null;
		super.disposeNativeView();
	}

	createPaymentRequest(request: ApplePayRequest) {
		return new Promise((resolve, reject) => {
			try {
				const paymentRequest = PKPaymentRequest.alloc().init();
				const paymentItems: NSMutableArray<PKPaymentSummaryItem> = NSMutableArray.array();

				request.paymentItems.forEach((el) => {
					const item = new PKPaymentSummaryItem();
					item.label = el.label;
					item.type = (el.type as number) as PKPaymentSummaryItemType;
					item.amount = NSDecimalNumber.alloc().initWithDouble(el.amount);
					paymentItems.addObject(item);
				});

				paymentRequest.paymentSummaryItems = paymentItems;
				paymentRequest.merchantIdentifier = request.merchantId; // the merchant ID for this app
				paymentRequest.merchantCapabilities = request.merchantCapabilities;
				paymentRequest.countryCode = request.countryCode;
				paymentRequest.currencyCode = request.currencyCode;

				if (request.shippingContactFields) {
					const requiredShippingContactFields = NSMutableSet.alloc().init() as NSMutableSet<string>;
					request.shippingContactFields.forEach((el) => {
						requiredShippingContactFields.addObject(el);
					});
					paymentRequest.requiredShippingContactFields = requiredShippingContactFields;
				}

				if (request.billingContactFields) {
					const requiredBillingContactFields = NSMutableSet.alloc().init() as NSMutableSet<string>;
					request.billingContactFields.forEach((el) => {
						requiredBillingContactFields.addObject(el);
					});
					paymentRequest.requiredBillingContactFields = requiredBillingContactFields;
				}

				paymentRequest.supportedNetworks = NSArray.alloc().initWithArray(request.supportedNetworks) as NSArray<string>;

				try {
					this.applePayController = PKPaymentAuthorizationViewController.alloc().initWithPaymentRequest(paymentRequest);
					this.applePayControllerDelegate = PKPaymentAuthorizationViewControllerDelegateImpl.initWithOwner(this);
					this.applePayController.delegate = this.applePayControllerDelegate;
				} catch (error) {
					reject(error);
					return;
				}

				// now show the Apple Pay View Controller
				let presentationController;
				presentationController = UIApplication.sharedApplication.keyWindow?.rootViewController as UIViewController;
				if (!presentationController) {
					presentationController = Frame.topmost()?.ios.controller;
				}

				presentationController.presentViewControllerAnimatedCompletion(this.applePayController, true, (): void => {
					resolve(null);
				});
			} catch (error) {
				reject(error);
			}
		});
	}

	// Returns the PKPaymentButtonStyle for the button from the user facing value.
	private _mapStyleToPKPaymentButtonStyle(style: ApplePayButtonStyle) {
		switch (style) {
			case ApplePayButtonStyle.Black:
				return PKPaymentButtonStyle.Black;
			case ApplePayButtonStyle.White:
				return PKPaymentButtonStyle.White;
			case ApplePayButtonStyle.WhiteOutline:
				return PKPaymentButtonStyle.WhiteOutline;
			default:
				return PKPaymentButtonStyle.Black;
		}
	}

	// Returns the PKPaymentButtonType for the button from the user facing value.
	private _mapTypeToPKPaymentButtonType(type: ApplePayButtonType) {
		switch (type) {
			case ApplePayButtonType.Book:
				return PKPaymentButtonType.Book;
			case ApplePayButtonType.Buy:
				return PKPaymentButtonType.Buy;
			case ApplePayButtonType.Checkout:
				return PKPaymentButtonType.Checkout;
			case ApplePayButtonType.Donate:
				return PKPaymentButtonType.Donate;
			case ApplePayButtonType.InStore:
				return PKPaymentButtonType.InStore;
			case ApplePayButtonType.Plain:
				return PKPaymentButtonType.Plain;
			case ApplePayButtonType.Subscribe:
				return PKPaymentButtonType.Subscribe;
			default:
				return PKPaymentButtonType.InStore;
		}
	}
}

export const buttonTypeProperty = new Property<ApplePayBtn, ApplePayButtonType>({
	name: 'buttonType',
	defaultValue: ApplePayButtonType.InStore,
	affectsLayout: false,
});
buttonTypeProperty.register(ApplePayBtn);

export const buttonStyleProperty = new Property<ApplePayBtn, ApplePayButtonStyle>({
	name: 'buttonStyle',
	defaultValue: ApplePayButtonStyle.Black,
	affectsLayout: false,
});
buttonStyleProperty.register(ApplePayBtn);

const ApplePayBtnTapHandlerImpl = (<any>NSObject).extend(
	{
		tap: function (nativeButton: any, nativeEvent: UIEvent) {
			const owner: ApplePayBtn = nativeButton._owner;
			if (owner) {
				owner.notify({
					eventName: 'tap',
					object: owner,
				});
			}
		},
	},
	{
		exposedMethods: {
			tap: {
				returns: interop.types.void,
				params: [interop.types.id, interop.types.id],
			},
		},
	}
);
ApplePayBtnTapHandlerImpl.initWithOwner = function (owner: WeakRef<ApplePayBtn>) {
	const handler = ApplePayBtnTapHandlerImpl.new();
	handler._owner = owner;
	return handler;
};
