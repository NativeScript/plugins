# @nativescript/google-pay

```shell
ns plugin add @nativescript/google-pay
```

## Usage

```xml
<android>
    <GooglePayBtn
        cardNetworks="VISA, AMEX, DISCOVER"
        authMethods="PAN_ONLY, CRYPTOGRAM_3DS"
        tap="onGooglePayTap"
        width="100%"
        height="40"
        buttonType="PAY_BLACK"
    ></GooglePayBtn>
</android>
```

```ts

import {
  AllowedPaymentMethodsType,
  BillingAddressParametersFormat,
  CheckoutOptionValue,
  GooglePayBtn,
  GooglePayEvents,
  GooglePayRequest,
  PaymentCancelledEventData,
  PaymentErrorEventData,
  PaymentSuccessEventData,
  TokenizationSpecificationType,
  TotalPriceStatusValue
} from '@nativescript/google-pay';

async onGooglePayTap(args) {
    try {

      if (global.isAndroid) {

        const googlePayBtn = args.object as GooglePayBtn;

        // setup the event listeners
        googlePayBtn.once(
          GooglePayEvents.PaymentCancelled,
          (args: PaymentCancelledEventData) => {
            console.log('payment cancelled, not much to do here');
          }
        );

        googlePayBtn.once(
          GooglePayEvents.PaymentSuccess,
          async (args: PaymentSuccessEventData) => {
            // this is where you handle the response with the token from google pay to send to payment provider
            const payloadToBackend = {
              amount: 25.20,
              method: '3DS',
              '3DS': {
                signature:
                  args.data.paymentMethodData.tokenizationData.token.signature,
                type: 'G', // for Google
                version:
                  args.data.paymentMethodData.tokenizationData.token
                    .protocolVersion,
                data:
                  args.data.paymentMethodData.tokenizationData.token
                    .signedMessage
              }
            };

            // send your payload to your payment provider here
            const result = await someHttpCallToPaymentProvider(
              payloadToBackend
            );

            if (result && result.value === true) {
              // now show the user the confirmation screen
            } else {
                // show the user that something went wrong here
            }
          }
        );

        googlePayBtn.once(
          GooglePayEvents.PaymentError,
          (args: PaymentErrorEventData) => {
            // TODO: let user know some error happened
          }
        );

        const options = {
          environment: 'development', // change this to production when in prod mode
          theme: 'light',
          merchantInfo: {
            merchantName: 'YOUR_MERCHANT_NAME'
          },
          allowedPaymentMethods: {
            type: AllowedPaymentMethodsType.CARD,
            parameters: {
              allowPrepaidCards: true,
              allowCreditCards: true,
              billingAddressRequired: true,
              billingAddressParameters: {
                format: BillingAddressParametersFormat.MIN, // FULL
                phoneNumberRequired: true
              }
            },
            tokenizationSpecification: {
              type: TokenizationSpecificationType.PAYMENT_GATEWAY,
              parameters: {
                gateway: 'example',
                gatewayMerchantId: EXAMPLE_MERCHANT_ID
              }
            }
          },
          transactionInfo: {
            currencyCode: 'USD',
            countryCode: 'US',
            // transactionId: '283999292929929', // A unique ID that identifies a transaction attempt. Merchants can use an existing ID or generate a specific one for Google Pay transaction attempts. This field is required when you send callbacks to the Google Transaction Events API.
            totalPriceStatus: TotalPriceStatusValue.FINAL,
            totalPrice: 25.20,
            totalPriceLabel: 'Total',
            checkoutOption: CheckoutOptionValue.DEFAULT
          },
          emailRequired: true,
          shippingAddressRequired: true,
          shippingAddressParameters: {
            allowedCountryCodes: ['US'],
            phoneNumberRequired: true
          }
        } as GooglePayRequest;

        // this creates the payment request to the Google Pay SDK and will present the user with the payment sheet to complete the transaction
        googlePayBtn.createPaymentRequest(options).catch(err => {
          console.log('error with create payment request', err);
        });
      }
    } catch (error) {
      console.log('Error with google pay', error);
    }
  }
```

# API

## Methods

| Name                 | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| createPaymentRequest | Creates the Google Pay payment request and presents the user with the payment sheet. |

## Enums

### GooglePayAuthMethods

| Key            | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PAN_ONLY       | This authentication method is associated with payment cards stored on file with the user's Google Account. Returned payment data includes personal account number (PAN) with the expiration month and the expiration year. |
| CRYPTOGRAM_3DS | This authentication method is associated with cards stored as Android device tokens. Returned payment data includes a 3-D Secure (3DS) cryptogram generated on the device.                                                 |

### GooglePayCardNetworks

| Key        | Value        |
| ---------- | ------------ |
| AMEX       | 'AMEX'       |
| DISCOVER   | 'DISCOVER'   |
| INTERAC    | 'INTERAC'    |
| JCB        | 'JCB'        |
| MASTERCARD | 'MASTERCARD' |
| VISA       | 'VISA'       |

### GooglePayEvents

| Key              | Value              |
| ---------------- | ------------------ |
| PaymentCancelled | 'PaymentCancelled' |
| PaymentError     | 'PaymentError'     |
| PaymentSuccess   | 'PaymentSuccess'   |

### TokenizationSpecificationType

| Key             | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PAYMENT_GATEWAY | To retrieve payment and customer information from a payment gateway that's supported by the Google Pay API, set type to PAYMENT_GATEWAY                                                                                                                                                                     |
| DIRECT          | The Direct integration allows merchants to decrypt the Google Pay response on their servers. To qualify, you must be Payments Card Industry (PCI) Data Security Standard (DSS) Level 1 compliant. Your servers also need to have the required infrastructure to securely handle users' payment credentials. |

### BillingAddressParametersFormat

| Key  | Description                                                            |
| ---- | ---------------------------------------------------------------------- |
| MIN  | Name, country code, and postal code (default).                         |
| FULL | Name, street address, locality, region, country code, and postal code. |

### AllowedPaymentMethodsType

| Key  | Value  |
| ---- | ------ |
| CARD | 'CARD' |

### TotalPriceStatusValue

| Key                 | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| NOT_CURRENTLY_KNOWN | Used for a capability check. Do not use this property if the transaction is processed in an EEA country.             |
| ESTIMATED           | Total price may adjust based on the details of the response, such as sales tax collected based on a billing address. |
| FINAL               | Total price doesn't change from the amount presented to the shopper.                                                 |

### CheckoutOptionValue

| Key                          | Description                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DEFAULT                      | Standard text applies for the given totalPriceStatus (default).                                                                                                    |
| COMPLETE_IMMEDITATE_PURCHASE | The selected payment method is charged immediately after the payer confirms their selections. This option is only available when totalPriceStatus is set to FINAL. |

### GooglePayButtonType

| Key                 | Value                 |
| ------------------- | --------------------- |
| PAY_WHITE           | 'PAY_WHITE'           |
| PAY_WHITE_NO_SHADOW | 'PAY_WHITE_NO_SHADOW' |
| BUY_WHITE           | 'BUY_WHITE'           |
| BUY_WHITE_NO_SHADOW | 'BUY_WHITE_NO_SHADOW' |
| PAY_BLACK           | 'PAY_BLACK'           |
| BUY_BLACK           | 'BUY_BLACK'           |
| DONATE_BLACK        | 'DONATE_BLACK'        |

## Interfaces

### GooglePayRequest

```ts
interface GooglePayRequest {
	/**
	 * Sets the ENVIRONMENT for testing Google Pay
	 */
	environment: 'development' | 'production';

	/**
	 * Sets the theme for the payment sheet UI.
	 */
	theme: 'dark' | 'light';
	/**
	 * Major API version. The value is 2 for this specification.
	 */
	apiVersion: number;
	/**
	 * Minor API version. The value is 0 for this specification.
	 */
	apiVersionMinor: number;
	merchantInfo: {
		/**
		 * Merchant name encoded as UTF-8. Merchant name is rendered in the payment sheet. In TEST environment, or if a merchant isn't recognized, a “Pay Unverified Merchant” message is displayed in the payment sheet.
		 */
		merchantName: string;
	};

	allowedPaymentMethods: {
		/**
		 * A short identifier for the supported payment method.
		 * Only CARD and PAYPAL currently are supported entries
		 */
		type: string;

		parameters: {
			/**
			 * Fields supported to authenticate a card transaction.
			 * PAN_ONLY: This authentication method is associated with payment cards stored on file with the user's Google Account. Returned payment data includes personal account number (PAN) with the expiration month and the expiration year.
			 * CRYPTOGRAM_3DS: This authentication method is associated with cards stored as Android device tokens. Returned payment data includes a 3-D Secure (3DS) cryptogram generated on the device.
			 */
			allowedAuthMethods: Array<string>;

			/**
			 * One or more card networks that you support, also supported by the Google Pay API.
			 * AMEX
			 * DISCOVER
			 * INTERAC
			 * JCB
			 * MASTERCARD
			 * VISA
			 */
			allowedCardNetworks: string;

			/**
			 * Set to false if you don't support prepaid cards. Default: The prepaid card class is supported for the card networks specified.
			 */
			allowPrepaidCards?: boolean;

			/**
			 * Set to false if you don't support credit cards. Default: The credit card class is supported for the card networks specified.
			 */
			allowCreditCards?: boolean;

			/**
			 * Set to true to request assuranceDetails. This object provides information about the validation performed on the returned payment data.
			 */
			assuranceDetailsRequired?: boolean;

			/**
			 * Set to true if you require a billing address. A billing address should only be requested if it's required to process the transaction. Additional data requests can increase friction in the checkout process and lead to a lower conversion rate.
			 */
			billingAddressRequired?: boolean;

			/**
			 * The expected fields returned if billingAddressRequired is set to true.
			 */
			billingAddressParameters?: {
				/**
				 * Billing address format required to complete the transaction.
				 * MIN: Name, country code, and postal code (default).
				 * FULL: Name, street address, locality, region, country code, and postal code.
				 */
				format?: string;

				/**
				 * Set to true if a phone number is required to process the transaction.
				 */
				phoneNumberRequired?: boolean;
			};
		};

		/**
		 * Configure an account or decryption provider to receive payment information.
		 * This property is required for the CARD payment method.
		 */
		tokenizationSpecification?: {
			/**
			 * A payment method tokenization type is supported for the given PaymentMethod.
			 * For CARD payment method, use PAYMENT_GATEWAY or DIRECT.
			 * For PAYPAL PaymentMethod, use DIRECT with no parameter.
			 */
			type: TokenizationSpecificationType;

			/**
			 * Parameters specific to the selected payment method tokenization type.
			 */
			parameters: {
				gateway: string;
				gatewayMerchantId: string;
			};
		};
	};

	/**
	 * Details about the authorization of the transaction based upon whether the user agrees to the transaction or not. Includes total price and price status.
	 * https://developers.google.com/pay/api/android/reference/request-objects#TransactionInfo
	 */
	transactionInfo: {
		/**
		 * Array containing the transaction items for the transaction (item, shipping, tax, etc.)
		 */
		displayItems: Array<GoogelPayDisplayItems>;
		/**
		 * ISO 4217 alphabetic currency code.
		 */
		currencyCode: string;

		/**
		 * ISO 3166-1 alpha-2 country code where the transaction is processed. This is required for merchants based in European Economic Area (EEA) countries.
		 */
		countryCode?: string;

		/**
		 * A unique ID that identifies a transaction attempt. Merchants may use an existing ID or generate a specific one for Google Pay transaction attempts. This field is required when you send callbacks to the Google Transaction Events API.
		 */
		transactionId?: string;

		/**
		 * The status of the total price used.
		 */
		totalPriceStatus: TotalPriceStatusValue;

		/**
		 * Total monetary value of the transaction with an optional decimal precision of two decimal places. This field is required unless totalPriceStatus is set to NOT_CURRENTLY_KNOWN.
		 * The format of the string should follow the regex format: ^[0-9]+(\.[0-9][0-9])?$
		 */
		totalPrice?: string;

		/**
		 * Custom label for the total price within the display items.
		 */
		totalPriceLabel?: string;

		/**
		 * Affects the submit button text displayed in the Google Pay payment sheet.
		 */
		checkoutOption?: CheckoutOptionValue;
	};

	/**
	 * Set to true to request an email address.
	 */
	emailRequired?: boolean;

	/**
	 * Set to true to request a full shipping address.
	 */
	shippingAddressRequired?: boolean;

	/**
	 * If shippingAddressParameters is set to true, specify shipping address restrictions.
	 */
	shippingAddressParameters?: {
		/**
		 * ISO 3166-1 alpha-2 country code values of the countries where shipping is allowed. If this object isn't specified, all shipping address countries are allowed.
		 */
		allowedCountryCodes?: Array<string>;
		/**
		 * Set to true if a phone number is required for the provided shipping address.
		 */
		phoneNumberRequired?: boolean;
	};
}
```

### PaymentCancelledEventData

```ts
interface PaymentCancelledEventData extends EventData {
	eventName: string;
	object: any;
}
```

### PaymentErrorEventData

```ts
interface PaymentErrorEventData extends EventData {
	eventName: string;
	object: any;
	data: {
		statusCode: number;
	};
}
```

### PaymentSuccessEventData

```ts
interface PaymentSuccessEventData extends EventData {
	eventName: string;
	object: any;
	data: {
		/**
		 * Data about the selected payment method.
		 */
		paymentMethodData: {
			/**
			 * PaymentMethod type selected in the Google Pay payment sheet.
			 */
			type: string;

			/**
			 * User-facing message to describe the payment method that funds this transaction.
			 */
			description: string;

			/**
			 * The value of this property depends on the payment method type returned. For CARD, see CardInfo.
			 */
			info: {
				/**
				 * The details about the card. This value is commonly the last four digits of the selected payment account number.
				 */
				cardDetails: string;

				/**
				 * This object provides information about the validation performed on the returned payment data if assuranceDetailsRequired is set to true in the CardParameters.
				 */
				assuranceDetails: {
					/**
					 * If true, indicates that Cardholder possession validation has been performed on returned payment credential.
					 */
					accountVerified: boolean;

					/**
					 * If true, indicates that identification and verifications (ID&V) was performed on the returned payment credential.
					 * If false, the same risk-based authentication can be performed as you would for card transactions. This risk-based authentication can include, but not limited to, step-up with 3D Secure protocol if applicable.
					 */
					cardHolderAuthenticated: boolean;
				};

				/**
				 * The payment card network of the selected payment. Returned values match the format of allowedCardNetworks in CardParameters.
				 * This card network value should not be displayed to the buyer. It's used when the details of a buyer's card are needed. For example, if customer support needs this value to identify the card a buyer used for their transaction. For a user-visible description, use the description property of PaymentMethodData instead.
				 */
				cardNetwork: string;

				/**
				 * The billing address associated with the provided payment method, if billingAddressRequired is set to true in CardParameters.
				 */
				billingAddress?: Address;
			};

			/**
			 * Payment tokenization data for the selected payment method.
			 */
			tokenizationData: {
				/**
				 * 	The type of tokenization to be applied to the selected payment method. This value matches the type set in PaymentMethodTokenizationSpecification.
				 */
				type: string;

				/**
				 * The generated payment method token.
				 * PAYMENT_GATEWAY: JSON object string that contains a chargeable token issued by your gateway.
				 * DIRECT: protocolVersion, signature, and a signedMessage for decryption. See Payment method token structure for more information.
				 */
				token: {
					/**
					 * Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed.
					 */
					protocolVersion: string;

					/**
					 * Verifies that the message came from Google. It's base64-encoded, and created with ECDSA by the intermediate signing key.
					 */
					signature: string;

					/**
					 * A JSON object serialized as a string that contains the encryptedMessage, ephemeralPublicKey, and tag. It's serialized to simplify the signature verification process.
					 */
					signedMessage: string;
				};
			};
		};

		/**
		 * Email address, if emailRequired is set to true in the PaymentDataRequest. If another request has the property set to true there's no effect.
		 */
		email: string;

		/**
		 * Shipping address, if shippingAddressRequired is set to true in the PaymentDataRequest.
		 */
		shippingAddress: Address;
	};
}
```

### Address

```ts
Address {
	/**
	 * The full name of the addressee.
	 */
	name;

	/**
	 * The postal or ZIP code.
	 */
	postalCode;

	/**
	 * ISO 3166-1 alpha-2 country code.
	 */
	countryCode;

	/**
	 * A telephone number, if phoneNumberRequired is set to true in the PaymentDataRequest.
	 */
	phoneNumber;

	/**
	 * The first line of the address.
	 */
	address1;

	/**
	 * The second line of the address.
	 */
	address2;

	/**
	 * The third line of the address.
	 */
	address3;

	/**
	 * City, town, neighborhood, or suburb.
	 */
	locality;

	/**
	 * A country subdivision, such as a state or province.
	 */
	administrativeArea;

	/**
	 * The sorting code.
	 */
	sortingCode;
}
```

### GooglePayDisplayItems

```ts
interface GoogelPayDisplayItems {
	label: string;
	type: string;
	price: string;
}
```

## License

Apache License Version 2.0
