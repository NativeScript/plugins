/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

import { EventData, View } from '@nativescript/core';
import { PKPaymentAuthorizationViewControllerDelegateImpl } from './payment-authorization-view-controller-delegate.ios';

export declare function isApplePaySupported(): boolean;
export declare class ApplePayBtn extends View {
	applePayController: PKPaymentAuthorizationViewController;
	applePayControllerDelegate: PKPaymentAuthorizationViewControllerDelegateImpl;
	applePaymentDidSucceed: boolean;
	private _tapHandler;
	createNativeView(): any;
	initNativeView(): void;
	disposeNativeView(): void;
	createPaymentRequest(request: ApplePayRequest): Promise<unknown>;
	completeTransaction(status: ApplePayTransactionStatus);
}
export interface ApplePayItems {
	label: string;
	amount: string;
	type: ApplePayPaymentItemType;
}
export declare enum ApplePayEvents {
	DidAuthorizePaymentHandler = 'DidAuthorizePaymentHandler',
	ViewControllerDidFinish = 'ViewControllerDidFinish',
	DidSelectPaymentMethodHandler = 'DidSelectPaymentMethodHandler',
	DidSelectShippingContactHandler = 'DidSelectShippingContactHandler',
	DidSelectShippingMethodHandler = 'DidSelectShippingMethodHandler',
	WillAuthorizePayment = 'WillAuthorizePayment',
	AuthorizationDidFinish = 'AuthorizationDidFinish',
	AuthorizationDidFinishEventData = 'AuthorizationDidFinishEventData',
}
export declare enum ApplePayContactFields {
	EmailAddress = 'email',
	Name = 'name',
	PhoneNumber = 'phone',
	PhoneticName = 'phoneticName',
	PostalAddress = 'post',
}
export declare enum ApplePayNetworks {
	Amex = 'Amex',
	CarteBancaire = 'CarteBancaire',
	CarteBancaires = 'CarteBancaires',
	CartesBancaires = 'CartesBancaires',
	ChinaUnionPay = 'ChinaUnionPay',
	Discover = 'Discover',
	Eftpos = 'Eftpos',
	Electron = 'Electron',
	Elo = 'Elo',
	IDCredit = 'IDCredit',
	Interac = 'Interac',
	Jcb = 'Jcb',
	Mada = 'Mada',
	Maestro = 'Maestro',
	MasterCard = 'MasterCard',
	PrivateLabel = 'PrivateLabel',
	QuicPay = 'QuicPay',
	Suica = 'Suica',
	Visa = 'Visa',
	VPay = 'VPay',
}
export declare enum ApplePayMerchantCapability {
	ThreeDS = 1,
	EMV = 2,
	Credit = 4,
	Debit = 8,
}
export declare enum ApplePayShippingMethods {}
export interface ApplePayRequest {
	paymentItems: Array<ApplePayItems>;
	merchantId: string;
	merchantCapabilities: number;
	countryCode: string;
	currencyCode: string;
	supportedNetworks: Array<ApplePayNetworks>;
	billingContactFields?: Array<ApplePayContactFields>;
	shippingContactFields?: Array<ApplePayContactFields>;
	shippingMethods?: Array<ApplePayShippingMethods>;
}

export declare enum ApplePayTransactionStatus {
	'Success' = PKPaymentAuthorizationStatus.Success,
	'Failure' = PKPaymentAuthorizationStatus.Failure,
	'InvalidBillingPostalAddress' = PKPaymentAuthorizationStatus.InvalidBillingPostalAddress,
	'InvalidShippingContact' = PKPaymentAuthorizationStatus.InvalidShippingContact,
	'InvalidShippingPostalAddress' = PKPaymentAuthorizationStatus.InvalidShippingPostalAddress,
	'PINIncorrect' = PKPaymentAuthorizationStatus.PINIncorrect,
	'PINLockout' = PKPaymentAuthorizationStatus.PINLockout,
	'PINRequired' = PKPaymentAuthorizationStatus.PINRequired,
}
export declare enum ApplePayPaymentItemType {
	'Final' = PKPaymentSummaryItemType.Final,
	'Pending' = PKPaymentSummaryItemType.Pending,
}

export interface ApplePayPaymentData {
	/**
	 * Encrypted payment data.
	 */
	data;

	/**
	 * Additional version-dependent information used to decrypt and verify the payment.
	 */
	header: {
		/**
		 * Optional. Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is nil, this key is omitted.
		 */
		applicationData?: string;

		/**
		 * Hash of the X.509 encoded public key bytes of the merchant’s certificate.
		 */
		publicKeyHash: string;

		/**
		 * Ephemeral public key bytes.
		 * EC_v1 only.
		 */
		ephemeralPublicKey: string;

		/**
		 * The symmetric key wrapped using your RSA public key.
		 * RSA_v1 only.
		 */
		wrappedKey?: string;

		/**
		 * Transaction identifier, generated on the device.
		 */
		transactionId: string;
	};

	/**
	 * Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm.
	 */
	signature;

	/**
	 * Version information about the payment token.
	 * The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data.
	 */
	version: string;
}

export interface AuthorizePaymentEventData extends EventData {
	eventName: string;
	object: any;
	data?: {
		payment: PKPayment;
		token: PKPaymentToken;
		paymentData: ApplePayPaymentData;
		billingAddress: any;
		billingContact: PKContact;
		shippingAddress: any;
		shippingContact: PKContact;
		shippingMethod: PKShippingMethod;
	};
	completion: (status: ApplePayTransactionStatus) => void;
}

export interface AuthorizationDidFinishEventData extends EventData {
	eventName: string;
	object: any;
}
