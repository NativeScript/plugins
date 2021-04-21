import { AndroidActivityResultEventData, AndroidApplication, Application, Property, Utils, View } from '@nativescript/core';
import { GooglePayButtonType, GooglePayEvents } from './enums';
import { GooglePayRequest, PaymentCancelledEventData, PaymentErrorEventData, PaymentSuccessEventData } from './interfaces';
import { PaymentsUtil } from './payment-utils.android';

export * from './enums';
export * from './interfaces';

const JSONObject = org.json.JSONObject;
const JSONArray = org.json.JSONArray;

export class GooglePayBtn extends View {
	public cardNetworks: string;
	public authMethods: string;
	public buttonType: GooglePayButtonType;
	static tapEvent = 'tap';
	private _android: android.widget.FrameLayout;
	private _androidViewId: number;
	private _paymentsClient: com.google.android.gms.wallet.PaymentsClient;
	private _nativeBtn: android.widget.ImageButton;
	private _cardNetworksJsonArray = new JSONArray();
	private _authMethodsJsonArray = new JSONArray();
	private static TAG = 'GooglePayBtn -';
	private static LOAD_PAYMENT_DATA_REQUEST_CODE = 991;

	// Here we create a basic FrameLayout because we have to perform a check if the device can support the payment networks/methods needed
	// so during the initNativeView we will perform the check and
	// if the device supports it, we create the native button and add it to the
	// framelayout, if not we remove the FrameLayout by setting visibility to GONE.
	createNativeView() {
		this._android = new android.widget.FrameLayout(Utils.android.getApplicationContext());
		this._android.setVisibility(android.view.View.GONE);
		return this._android;
	}

	initNativeView() {
		this._androidViewId = android.view.View.generateViewId();
		this.nativeView.setId(this._androidViewId);

		// need to see if the app can use google pay APIs
		// if they can then we create the correct button
		// if they can't just return an empty FrameLayout
		// convert the string values for the card networks and auth methods into their JsonArrays

		// always using TEST environment here because we're only using this client to test if the device works with Google Pay
		this._paymentsClient = PaymentsUtil.createPaymentsClient(3, 1);
		// Card Network handling
		if (!this.cardNetworks) {
			console.log(`${GooglePayBtn.TAG} Error: cardNetworks need to be set in order to confirm that Google supports the device payments.`);
			return null;
		}
		const networkJSArray = this.cardNetworks.split(',');
		for (let i = 0; i < networkJSArray.length; i++) {
			const el = networkJSArray[i] as string;
			this._cardNetworksJsonArray.put(el.trim());
		}

		// Auth Methods handling
		if (!this.authMethods) {
			console.log(`${GooglePayBtn.TAG} Error: authMethods need to be set in order to confirm that Google supports the device payments.`);
			return null;
		}
		const authMethodsJSArray = this.authMethods.split(',');
		for (let i = 0; i < authMethodsJSArray.length; i++) {
			const el = authMethodsJSArray[i] as string;
			this._authMethodsJsonArray.put(el.trim());
		}

		const isReadyToPayJson = GooglePayBtn._getIsReadyToPayRequest(this._cardNetworksJsonArray, this._authMethodsJsonArray);

		// not able to use google pay if this happens
		if (!isReadyToPayJson.isPresent()) {
			return;
		}

		// The call to isReadyToPay is asynchronous and returns a Task. We need to provide an
		// OnCompleteListener to be triggered when the result of the call is known.
		const request = com.google.android.gms.wallet.IsReadyToPayRequest.fromJson(isReadyToPayJson.get().toString());
		const task = this._paymentsClient.isReadyToPay(request); // Task<Boolean>

		const listener = new (com.google.android.gms as any).tasks.OnCompleteListener({
			onComplete: (args) => {
				if (args.isSuccessful()) {
					// set the click listener for the native button
					const clickListener = new ClickListenerImpl(this);
					// handle button style/theme
					const ctx = Utils.android.getApplicationContext() as android.content.Context;
					const buttonType = this._mapButtonTypeToNativeValue(this.buttonType);

					let layoutId; // using if the first attempt fails

					layoutId = ctx.getResources().getIdentifier(buttonType, 'layout', ctx.getPackageName());

					if (!layoutId) {
						// now try the other approach to get the layout
						layoutId = this._getButtonLayoutId(ctx, buttonType);
					}

					if (!layoutId) {
						// this is bad and should not happen, but it is better to have a safeguard than weirdness in the app
						console.log('Error trying to find the correct Google Pay Button layout resource.');
						this._android.setVisibility(android.view.View.GONE);
						return;
					}

					// inflate the Google Pay Button layout from the google docs/guidelines
					const view = android.view.LayoutInflater.from(ctx).inflate(layoutId, null, false);

					if (!view) {
						// this is bad and should not happen, but it is better to have a safeguard than weirdness in the app
						this._android.setVisibility(android.view.View.GONE);
						return;
					}

					view.setId(android.view.View.generateViewId());
					view.setOnClickListener(clickListener);

					this._android.addView(view);
					this._android.setVisibility(android.view.View.VISIBLE);
				} else {
					console.log('Google Pay is not supported on this device.', args.getException());
					this._android.setVisibility(android.view.View.GONE);
				}
			},
		});

		task.addOnCompleteListener(Application.android.startActivity || Application.android.foregroundActivity, listener);
	}

	createPaymentRequest(args: GooglePayRequest) {
		return new Promise((resolve, reject) => {
			try {
				const paymentDataRequest = new JSONObject()
					// .put('environment', 'TEST')
					.put('apiVersion', 2)
					.put('apiVersionMinor', 0);

				if (args.merchantInfo?.merchantName) {
					paymentDataRequest.put(
						'merchantInfo', // https://developers.google.com/pay/api/android/reference/request-objects#MerchantInfo
						new JSONObject().put('merchantName', args.merchantInfo.merchantName)
					);
				}

				if (args.emailRequired) {
					paymentDataRequest.put('emailRequired', args.emailRequired);
				}

				if (args.shippingAddressRequired) {
					paymentDataRequest.put('shippingAddressRequired', true);

					const countryCodesArray = new JSONArray();
					args.shippingAddressParameters.allowedCountryCodes.forEach((el) => {
						countryCodesArray.put(el);
					});
					paymentDataRequest.put('shippingAddressParameters', new JSONObject().put('allowedCountryCodes', countryCodesArray).put('phoneNumberRequired', args.shippingAddressParameters.phoneNumberRequired));
				}

				// create the payment method
				// payment method array https://developers.google.com/pay/api/android/reference/request-objects#PaymentMethod
				const paymentMethod = new JSONObject().put('type', args.allowedPaymentMethods.type);

				// https://developers.google.com/pay/api/android/reference/request-objects#CardParameters
				const parameters = new JSONObject().put('allowedAuthMethods', this._authMethodsJsonArray).put('allowedCardNetworks', this._cardNetworksJsonArray);

				if (args.allowedPaymentMethods.parameters.allowPrepaidCards) {
					parameters.put('allowPrepaidCards', args.allowedPaymentMethods.parameters.allowPrepaidCards);
				}

				if (args.allowedPaymentMethods.parameters.allowCreditCards) {
					parameters.put('allowCreditCards', args.allowedPaymentMethods.parameters.allowCreditCards);
				}

				if (args.allowedPaymentMethods.parameters.assuranceDetailsRequired) {
					parameters.put('assuranceDetailsRequired', args.allowedPaymentMethods.parameters.assuranceDetailsRequired);
				}

				// Optionally, you can add billing address/phone number associated with a CARD payment method.
				if (args.allowedPaymentMethods.parameters.billingAddressRequired) {
					parameters.put('billingAddressRequired', true);
					const billingAddressParameters = new JSONObject();
					if (args.allowedPaymentMethods.parameters.billingAddressParameters.format) {
						billingAddressParameters.put('format', args.allowedPaymentMethods.parameters.billingAddressParameters.format);
					}
					if (args.allowedPaymentMethods.parameters.billingAddressParameters.phoneNumberRequired) {
						billingAddressParameters.put('phoneNumberRequired', args.allowedPaymentMethods.parameters.billingAddressParameters.phoneNumberRequired);
					}

					parameters.put('billingAddressParameters', billingAddressParameters);
				}

				if (args.allowedPaymentMethods.tokenizationSpecification) {
					const tokenSpecification = new JSONObject().put('type', args.allowedPaymentMethods.tokenizationSpecification.type).put('parameters', new JSONObject().put('gateway', args.allowedPaymentMethods.tokenizationSpecification.parameters.gateway).put('gatewayMerchantId', args.allowedPaymentMethods.tokenizationSpecification.parameters.gatewayMerchantId));
					paymentMethod.put('tokenizationSpecification', tokenSpecification);
				}

				paymentMethod.put('parameters', parameters);

				paymentDataRequest.put('allowedPaymentMethods', new JSONArray().put(paymentMethod));

				paymentDataRequest.put('transactionInfo', this._getTransactionInfo(args));

				paymentDataRequest.finalize();

				const request = com.google.android.gms.wallet.PaymentDataRequest.fromJson(paymentDataRequest.toString());

				Application.android.on(AndroidApplication.activityResultEvent, this._onActivityResult);

				// Since loadPaymentData may show the UI asking the user to select a payment method, we use
				// AutoResolveHelper to wait for the user interacting with it. Once completed,
				// onActivityResult will be called with the result.

				// need to get the native CONST values for the values from the public user API
				// now we create the payment client for the actual payment processing
				const env = args.environment === 'development' ? 3 : 1;
				const theme = args.theme === 'light' ? 1 : 0;
				const client = PaymentsUtil.createPaymentsClient(env, theme);

				if (request !== null) {
					com.google.android.gms.wallet.AutoResolveHelper.resolveTask(client.loadPaymentData(request), Application.android.startActivity || Application.android.foregroundActivity, GooglePayBtn.LOAD_PAYMENT_DATA_REQUEST_CODE);
				}

				resolve(null);
			} catch (error) {
				// Re-enables the Google Pay payment button.
				// this._nativeBtn.setClickable(true);
				reject(error);
			}
		});
	}

	private _onActivityResult = (args: AndroidActivityResultEventData) => {
		if (args.requestCode === GooglePayBtn.LOAD_PAYMENT_DATA_REQUEST_CODE) {
			// value passed in AutoResolveHelper
			switch (args.resultCode) {
				case android.app.Activity.RESULT_OK:
					const paymentData = com.google.android.gms.wallet.PaymentData.getFromIntent(args.intent) as com.google.android.gms.wallet.PaymentData;

					// Token will be null if PaymentDataRequest was not constructed using fromJson(String).
					const paymentInfo = paymentData.toJson();
					if (paymentInfo === null) {
						return null;
					}
					const x = new JSONObject(paymentInfo);

					const apiVersion = x.getInt('apiVersion');
					const apiVersionMinor = x.getInt('apiVersionMinor');
					const email = x.getString('email');
					// https://developers.google.com/pay/api/web/reference/response-objects#Address
					const shippingAddress = x.getJSONObject('shippingAddress');

					// https://developers.google.com/pay/api/web/reference/response-objects#PaymentMethodData
					const paymentMethodData = x.getJSONObject('paymentMethodData');

					const type = paymentMethodData.getString('type');
					const description = paymentMethodData.getString('description');
					const info = paymentMethodData.getJSONObject('info');
					// https://developers.google.com/pay/api/web/reference/response-objects#PaymentMethodTokenizationData
					const tokenizationData = paymentMethodData.getJSONObject('tokenizationData');
					const tokenType = tokenizationData.getString('type');
					// https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography#payment-method-token-structure
					const token = tokenizationData.getString('token');

					let protocolVersion: string;
					let signature: string;
					let signedMessage: string;

					try {
						// need it as JSONObject to grab the values
						const tokenAsObject = new JSONObject(token);

						protocolVersion = tokenAsObject.getString('protocolVersion');
						signature = tokenAsObject.getString('signature');
						signedMessage = tokenAsObject.getString('signedMessage');
					} catch (error) {
						// May not be able to parse the token OK if not
						console.log('Unable to parse token:', error);
					}

					// https://developers.google.com/pay/api/web/reference/response-objects
					this.notify(({
						eventName: GooglePayEvents.PaymentSuccess,
						object: this,
						data: {
							apiVersion,
							apiVersionMinor,
							paymentMethodData: {
								type,
								description,
								info,
								tokenizationData: {
									type: tokenType,
									token: {
										protocolVersion,
										signature,
										signedMessage,
										rawToken: token,
									},
								},
							},
							email,
							shippingAddress,
						},
					} as unknown) as PaymentSuccessEventData);

					break;
				case android.app.Activity.RESULT_CANCELED:
					// The user cancelled the payment attempt
					this.notify({
						eventName: GooglePayEvents.PaymentCancelled,
						object: this,
					} as PaymentCancelledEventData);
					break;
				case com.google.android.gms.wallet.AutoResolveHelper.RESULT_ERROR:
					const status = com.google.android.gms.wallet.AutoResolveHelper.getStatusFromIntent(args.intent);
					this.notify({
						eventName: GooglePayEvents.PaymentError,
						object: this,
						data: {
							isCanceled: status.isCanceled(),
							isInterrupted: status.isInterrupted(),
							isSuccess: status.isSuccess(),
							status: status.getStatus(),
							statusCode: status.getStatusCode(),
							statusMessage: status.getStatusMessage(),
						},
					} as PaymentErrorEventData);
					break;
			}

			// Re-enables the Google Pay payment button.
			// this._nativeBtn.setClickable(true);

			Application.android.off('activityResult', this._onActivityResult);
		}
	};

	private static _getIsReadyToPayRequest(networks, authMethods) {
		try {
			const cardPaymentMethod = new JSONObject().put('type', 'CARD');

			const parameters = new JSONObject()
				.put('allowedAuthMethods', authMethods)
				.put('allowedCardNetworks', networks)
				// Optionally, you can add billing address/phone number associated with a CARD payment method.
				.put('billingAddressRequired', true);

			const billingAddressParameters = new JSONObject().put('format', 'FULL');

			parameters.put('billingAddressParameters', billingAddressParameters);

			cardPaymentMethod.put('parameters', parameters);

			const isReadyToPayRequest = new JSONObject().put('apiVersion', 2).put('apiVersionMinor', 0).put('allowedPaymentMethods', new JSONArray().put(cardPaymentMethod));

			return java.util.Optional.of(isReadyToPayRequest);
		} catch (ex) {
			console.log(ex);
			return java.util.Optional.empty();
		}
	}

	private _getTransactionInfo(args: GooglePayRequest) {
		const transactionInfo = new JSONObject();

		const displayItemsArray = new JSONArray();
		// displayItems may not be supported on the GooglePay Android API anymore
		// https://developers.google.com/pay/api/android/reference/request-objects#TransactionInfo
		// it is not listed in the object anymore
		if (args.transactionInfo?.displayItems?.length >= 1) {
			args.transactionInfo.displayItems.forEach((el) => {
				const item = new JSONObject();
				item.put('label', el.label).put('type', el.type).put('price', el.price);
				displayItemsArray.put(item);
			});

			transactionInfo.put('displayItems', displayItemsArray);
		}

		transactionInfo.put('currencyCode', args.transactionInfo.currencyCode);
		transactionInfo.put('totalPriceStatus', args.transactionInfo.totalPriceStatus);
		if (args.transactionInfo.countryCode) {
			transactionInfo.put('countryCode', args.transactionInfo.countryCode);
		}
		if (args.transactionInfo.transactionId) {
			transactionInfo.put('transactionId', args.transactionInfo.transactionId);
		}
		if (args.transactionInfo.totalPrice) {
			transactionInfo.put('totalPrice', args.transactionInfo.totalPrice);
		}
		if (args.transactionInfo.totalPriceLabel) {
			transactionInfo.put('totalPriceLabel', args.transactionInfo.totalPriceLabel);
		}
		if (args.transactionInfo.checkoutOption) {
			transactionInfo.put('checkoutOption', args.transactionInfo.checkoutOption);
		}

		return transactionInfo;
	}

	private _getButtonLayoutId(ctx, buttonType) {
		try {
			const nstudioClassLayout = java.lang.Class.forName(`io.nstudio.googlepay.R$layout`);
			const value = parseInt(String(nstudioClassLayout.getDeclaredField(buttonType).get(null)));
			return value;
		} catch (e) {
			console.log('Error getting the google payment button layout from the app resources.', e);
			return null;
		}
	}

	private _mapButtonTypeToNativeValue(type: GooglePayButtonType) {
		const value = type.toLowerCase();
		switch (value) {
			case GooglePayButtonType.PAY_WHITE.toLowerCase():
				return 'googlepay_white_button';
			case GooglePayButtonType.PAY_WHITE_NO_SHADOW.toLowerCase():
				return 'googlepay_white_button_no_shadow';
			case GooglePayButtonType.BUY_WHITE.toLowerCase():
				return 'buy_with_googlepay_white_button';
			case GooglePayButtonType.BUY_WHITE_NO_SHADOW.toLowerCase():
				return 'buy_with_googlepay_white_button_no_shadow';
			case GooglePayButtonType.PAY_BLACK.toLowerCase():
				return 'googlepay_black_button';
			case GooglePayButtonType.BUY_BLACK.toLowerCase():
				return 'buy_with_googlepay_black_button';
			case GooglePayButtonType.DONATE_BLACK.toLowerCase():
				return 'donate_with_googlepay_black_button';
			default:
				return 'buy_with_googlepay_black_button';
		}
	}
}

export const cardNetworksProperty = new Property<GooglePayBtn, string>({
	name: 'cardNetworks',
	defaultValue: '',
	affectsLayout: false,
});
cardNetworksProperty.register(GooglePayBtn);

export const authMethodsProperty = new Property<GooglePayBtn, string>({
	name: 'authMethods',
	defaultValue: '',
	affectsLayout: false,
});
authMethodsProperty.register(GooglePayBtn);

export const buttonType = new Property<GooglePayBtn, string>({
	name: 'buttonType',
	defaultValue: 'light',
	affectsLayout: false,
});
buttonType.register(GooglePayBtn);

interface ClickListener {
	new (owner: GooglePayBtn): android.view.View.OnClickListener;
}

@NativeClass()
@Interfaces([android.view.View.OnClickListener])
class ClickListenerImpl extends java.lang.Object implements android.view.View.OnClickListener {
	constructor(public owner: GooglePayBtn) {
		super();
		return global.__native(this);
	}

	onClick(v: android.view.View): void {
		// Disable the Google Pay payment button.
		// v.setClickable(false);
		this.owner?._emit('tap');
	}
}
