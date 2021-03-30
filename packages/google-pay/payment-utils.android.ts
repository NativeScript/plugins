/// <reference path="../../node_modules/@nativescript/types/index.d.ts" />
import { Application } from '@nativescript/core';

/**
 * Contains helper static methods for dealing with the Payments API.
 *
 * <p>Many of the parameters used in the code are optional and are set here merely to call out their
 * existence. Please consult the documentation to learn more and feel free to remove ones not
 * relevant to your implementation.
 */
export class PaymentsUtil {
	public static CENTS_IN_A_UNIT = new java.math.BigDecimal(100);

	/**
	 * Creates an instance of {@link PaymentsClient} for use in an {@link Activity} using the
	 * environment and theme set in {@link Constants}.
	 */
	public static createPaymentsClient(environment, theme) {
		const walletOptions = new com.google.android.gms.wallet.Wallet.WalletOptions.Builder().setEnvironment(environment).setTheme(theme).build();
		return com.google.android.gms.wallet.Wallet.getPaymentsClient(Application.android.startActivity || Application.android.foregroundActivity, walletOptions);
	}

	/**
	 * Converts cents to a string format accepted by {@link PaymentsUtil#getPaymentDataRequest}.
	 *
	 * @param cents value of the price in cents.
	 */
	public static centsToString(cents) {
		return new java.math.BigDecimal(cents).divide(PaymentsUtil.CENTS_IN_A_UNIT, java.math.RoundingMode.HALF_EVEN).setScale(2, java.math.RoundingMode.HALF_EVEN).toString();
	}
}
