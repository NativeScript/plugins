export enum GooglePayAuthMethods {
	/**
	 * This authentication method is associated with payment cards stored on file with the user's Google Account.
	 * Returned payment data includes personal account number (PAN) with the expiration month and the expiration year.
	 */
	'PAN_ONLY' = 'PAN_ONLY',

	/**
	 * This authentication method is associated with cards stored as Android device tokens.
	 * Returned payment data includes a 3-D Secure (3DS) cryptogram generated on the device.
	 */
	'CRYPTOGRAM_3DS' = 'CRYPTOGRAM_3DS',
}

export enum GooglePayCardNetworks {
	'AMEX' = 'AMEX',
	'DISCOVER' = 'DISCOVER',
	'INTERAC' = 'INTERAC',
	'JCB' = 'JCB',
	'MASTERCARD' = 'MASTERCARD',
	'VISA' = 'VISA',
}

export enum GooglePayEvents {
	PaymentCancelled = 'PaymentCancelled',
	PaymentError = 'PaymentError',
	PaymentSuccess = 'PaymentSuccess',
}

/**
 * A payment method tokenization type is supported for the given PaymentMethod.
 * For CARD payment method, use PAYMENT_GATEWAY or DIRECT.
 * For PAYPAL PaymentMethod, use DIRECT with no parameter.
 * @link - https://developers.google.com/pay/api/android/reference/request-objects#gateway
 */
export enum TokenizationSpecificationType {
	/**
	 * To retrieve payment and customer information from a payment gateway that's supported by the Google Pay API, set type to PAYMENT_GATEWAY
	 */
	PAYMENT_GATEWAY = 'PAYMENT_GATEWAY',

	/**
	 * The Direct integration allows merchants to decrypt the Google Pay response on their servers.
	 * To qualify, you must be Payments Card Industry (PCI) Data Security Standard (DSS) Level 1 compliant.
	 * Your servers also need to have the required infrastructure to securely handle users' payment credentials.
	 */
	DIRECT = 'DIRECT',
}

/**
 * Billing address format required to complete the transaction.
 */
export enum BillingAddressParametersFormat {
	/**
	 * Name, country code, and postal code (default).
	 */
	MIN = 'MIN',

	/**
	 * Name, street address, locality, region, country code, and postal code.
	 */
	FULL = 'FULL',
}

/**
 * A short identifier for the supported payment method.
 */
export enum AllowedPaymentMethodsType {
	CARD = 'CARD',
}

export enum TotalPriceStatusValue {
	/**
	 * Used for a capability check. Do not use this property if the transaction is processed in an EEA country.
	 */
	NOT_CURRENTLY_KNOWN = 'NOT_CURRENTLY_KNOWN',

	/**
	 * Total price may adjust based on the details of the response, such as sales tax collected based on a billing address.
	 */
	ESTIMATED = 'ESTIMATED',

	/**
	 * Total price doesn't change from the amount presented to the shopper.
	 */
	FINAL = 'FINAL',
}

/**
 * Affects the submit button text displayed in the Google Pay payment sheet.
 */
export enum CheckoutOptionValue {
	/**
	 * Standard text applies for the given totalPriceStatus (default).
	 */
	DEFAULT = 'DEFAULT',

	/**
	 * The selected payment method is charged immediately after the payer confirms their selections. This option is only available when totalPriceStatus is set to FINAL.
	 */
	COMPLETE_IMMEDITATE_PURCHASE = 'COMPLETE_IMMEDIATE_PURCHASE',
}

export enum GooglePayButtonType {
	'PAY_WHITE' = 'PAY_WHITE',
	'PAY_WHITE_NO_SHADOW' = 'PAY_WHITE_NO_SHADOW',
	'BUY_WHITE' = 'BUY_WHITE',
	'BUY_WHITE_NO_SHADOW' = 'BUY_WHITE_NO_SHADOW',
	// Black Buttons
	'PAY_BLACK' = 'PAY_BLACK',
	'BUY_BLACK' = 'BUY_BLACK',
	'DONATE_BLACK' = 'DONATE_BLACK',
}
