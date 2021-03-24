import { ApplePayBtn, ApplePayEvents, AuthorizationDidFinishEventData, AuthorizePaymentEventData } from './index.ios';

@NativeClass()
class PKPaymentAuthorizationViewControllerDelegateImpl extends NSObject implements PKPaymentAuthorizationViewControllerDelegate {
	static ObjCProtocols = [PKPaymentAuthorizationViewControllerDelegate];
	owner: WeakRef<ApplePayBtn>;

	static initWithOwner(owner: ApplePayBtn) {
		const delegate = <PKPaymentAuthorizationViewControllerDelegateImpl>PKPaymentAuthorizationViewControllerDelegateImpl.new();
		delegate.owner = new WeakRef(owner);
		return delegate;
	}

	/**
	 * Tells the delegate that payment authorization finished.
	 * This delegate method is called every time a payment finishes.
	 * A payment may finish because authorization was completed in
	 * paymentAuthorizationViewController:didAuthorizePayment:handler:,
	 * because authorization timed out, or because the user canceled the payment.
	 * @param controller
	 */
	paymentAuthorizationViewControllerDidFinish(controller: PKPaymentAuthorizationViewController) {
		const owner = this.owner?.get();

		// if the payment successful, do a small delay so the viewcontroller finished the UI animation
		setTimeout(() => {
			console.log('dismissing the view controller for payment auth view');
			controller.dismissViewControllerAnimatedCompletion(true, null);
		}, 1000);

		owner?.notify({
			eventName: ApplePayEvents.AuthorizationDidFinish,
			object: owner,
		} as AuthorizationDidFinishEventData);
	}

	/**
	 * Tells the delegate that the user has authorized the payment request and asks for a result.
	 * @param controller
	 * @param payment
	 * @param completion
	 */
	paymentAuthorizationViewControllerDidAuthorizePaymentHandler(controller, payment: PKPayment, completion) {
		const owner = this.owner?.get();

		const pData = NSJSONSerialization.JSONObjectWithDataOptionsError(payment.token.paymentData, null);
		const paymentData = this._deserialize(pData);

		const eventData = {
			eventName: ApplePayEvents.DidAuthorizePaymentHandler,
			object: owner,
			data: {
				payment,
				paymentData,
				token: payment.token,
				billingAddress: payment.billingAddress,
				billingContact: payment.billingContact,
				shippingAddress: payment.shippingAddress,
				shippingContact: payment.shippingContact,
				shippingMethod: payment.shippingMethod,
			},
			completion,
		} as AuthorizePaymentEventData;
		owner?.notify(eventData);
	}

	// /**
	//  * Tells the delegate that the payment method has changed and asks for an updated payment request.
	//  * @param controller
	//  * @param paymentMethod
	//  * @param completion
	//  */
	// paymentAuthorizationViewControllerDidSelectPaymentMethodHandler(
	//   controller,
	//   paymentMethod: PKPaymentMethod,
	//   completion
	// ) {
	//   completion(PKPaymentAuthorizationStatus.Success);
	//   const owner = this.owner?.get();
	//   owner.notify({
	//     eventName: ApplePayEvents.DidSelectPaymentMethodHandler,
	//     object: owner,
	//     data: {
	//       paymentMethod
	//     }
	//   });
	// }

	// /**
	//  * Tells the delegate that the user selected a shipping address and asks for an updated payment request.
	//  * @param controller
	//  * @param contact
	//  * @param completion
	//  */
	// paymentAuthorizationViewControllerDidSelectShippingContactHandler(
	//   controller,
	//   contact: PKContact,
	//   completion
	// ) {
	//   // completion();
	//   const owner = this.owner?.get();
	//   owner?.notify({
	//     eventName: ApplePayEvents.DidSelectShippingContactHandler,
	//     object: owner,
	//     data: {
	//       contact,
	//     }
	//   });
	// }

	// /**
	//  * Tells the delegate that the user selected a shipping method and asks for an updated payment request.
	//  * @param controller
	//  * @param shippingMethod
	//  * @param completion
	//  */
	// paymentAuthorizationViewControllerDidSelectShippingMethodHandler(
	//   controller,
	//   shippingMethod: PKShippingMethod,
	//   completion
	// ) {
	//   // completion();
	//   const owner = this.owner?.get();
	//   owner?.notify({
	//     eventName: ApplePayEvents.DidSelectShippingMethodHandler,
	//     object: owner,
	//     data: {
	//       shippingMethod,
	//     }
	//   });
	// }

	// /**
	//  * Tells the delegate that the user is authorizing the payment request.
	//  * This method is called before the payment request is authorized but after the user has authenticated by using either a passcode, Touch ID, or Face ID.
	//  * @param controller
	//  */
	// paymentAuthorizationViewControllerWillAuthorizePayment(controller) {
	//   const owner = this.owner?.get();
	//   owner?.notify({
	//     eventName: ApplePayEvents.WillAuthorizePayment,
	//     object: owner,
	//     data: {
	//       controller
	//     }
	//   });
	// }

	private _deserialize(data): any {
		if (data instanceof NSNull) {
			return null;
		}
		if (data instanceof NSArray) {
			const array = [];
			for (let i = 0, n = data.count; i < n; i++) {
				array[i] = this._deserialize(data.objectAtIndex(i));
			}
			return array;
		}
		if (data instanceof NSDictionary) {
			const dict = {};
			for (let i = 0, n = data.allKeys.count; i < n; i++) {
				const key = data.allKeys.objectAtIndex(i);
				dict[key] = this._deserialize(data.objectForKey(key));
			}
			return dict;
		}
		return data;
	}
}

export { PKPaymentAuthorizationViewControllerDelegateImpl };
