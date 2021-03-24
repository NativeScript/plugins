import { EventData } from '@nativescript/core';
import { ApplePayContactFields, ApplePayNetworks, ApplePayPaymentItemType, ApplePayShippingMethods, ApplePayTransactionStatus } from './enums.ios';

export interface ApplePayRequest {
	paymentItems: Array<ApplePayItems>;
	merchantId: string; // the merchant ID for this app
	merchantCapabilities: number;
	countryCode: string;
	currencyCode: string;
	supportedNetworks: Array<ApplePayNetworks>;
	billingContactFields?: Array<ApplePayContactFields>;
	shippingContactFields?: Array<ApplePayContactFields>;
	shippingMethods?: Array<ApplePayShippingMethods>;
}

export interface ApplePayItems {
	label: string;
	amount: number;
	type: ApplePayPaymentItemType;
}

export interface AuthorizePaymentEventData extends EventData {
	eventName: string;
	object: any;
	data?: {
		payment: PKPayment;
		token: PKPaymentToken;
		paymentData: ApplePayPaymentData;
		billingAddress;
		billingContact: PKContact;
		shippingAddress;
		shippingContact: PKContact;
		shippingMethod: PKShippingMethod;
	};
	completion: (status: ApplePayTransactionStatus) => void;
}

export interface AuthorizationDidFinishEventData extends EventData {
	eventName: string;
	object: any;
}

export interface ApplePayPaymentData {
	/**
	 * Encrypted payment data.
	 */
	data;

	/**
	 * Additional version-dependent information used to decrypt and verify the payment.
	 */
	header;

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
