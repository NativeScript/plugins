export enum ApplePayEvents {
	/**
	 * Tells the delegate that the user has authorized the payment request and asks for a result.
	 */
	DidAuthorizePaymentHandler = 'DidAuthorizePaymentHandler',

	/**
	 * Tells the delegate that payment authorization has completed.
	 */
	AuthorizationDidFinish = 'AuthorizationDidFinish',
	DidSelectPaymentMethodHandler = 'DidSelectPaymentMethodHandler',
	DidSelectShippingContactHandler = 'DidSelectShippingContactHandler',
	DidSelectShippingMethodHandler = 'DidSelectShippingMethodHandler',
	WillAuthorizePayment = 'WillAuthorizePayment',
}

export enum ApplePayContactFields {
	/**
	 * Indicates an email address field.
	 */
	EmailAddress = 'email',

	/**
	 * Indicates a name field.
	 */
	Name = 'name',

	/**
	 * Indicates a phone number field.
	 */
	PhoneNumber = 'phone',

	/**
	 * Indicates a phonetic name field.
	 */
	PhoneticName = 'phoneticName',

	/**
	 * Indicates a postal address field.
	 */
	PostalAddress = 'post',
}

export enum ApplePayNetworks {
	Amex = 'AmEx',
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

export enum ApplePayMerchantCapability {
	ThreeDS = PKMerchantCapability.Capability3DS,
	EMV = PKMerchantCapability.CapabilityEMV,
	Credit = PKMerchantCapability.CapabilityCredit,
	Debit = PKMerchantCapability.CapabilityDebit,
}

export enum ApplePayShippingMethods {}

export enum ApplePayTransactionStatus {
	'Success' = PKPaymentAuthorizationStatus.Success,
	'Failure' = PKPaymentAuthorizationStatus.Failure,
	'InvalidBillingPostalAddress' = PKPaymentAuthorizationStatus.InvalidBillingPostalAddress,
	'InvalidShippingPostalAddress' = PKPaymentAuthorizationStatus.InvalidShippingPostalAddress,
	'InvalidShippingContact' = PKPaymentAuthorizationStatus.InvalidShippingContact,
	'PINRequired' = PKPaymentAuthorizationStatus.PINRequired,
	'PINIncorrect' = PKPaymentAuthorizationStatus.PINIncorrect,
	'PINLockout' = PKPaymentAuthorizationStatus.PINLockout,
}

export enum ApplePayPaymentItemType {
	'Final' = PKPaymentSummaryItemType.Final,
	'Pending' = PKPaymentSummaryItemType.Pending,
}

export enum ApplePayButtonType {
	'Plain' = PKPaymentButtonType.Plain,
	'Buy' = PKPaymentButtonType.Buy,
	'Book' = PKPaymentButtonType.Book,
	'Checkout' = PKPaymentButtonType.Checkout,
	'Donate' = PKPaymentButtonType.Donate,
	'InStore' = PKPaymentButtonType.Book,
	'Subscribe' = PKPaymentButtonType.Subscribe,
}

export enum ApplePayButtonStyle {
	'White' = PKPaymentButtonStyle.White,
	'WhiteOutline' = PKPaymentButtonStyle.WhiteOutline,
	'Black' = PKPaymentButtonStyle.Black,
}
