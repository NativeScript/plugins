export * from './common';
import { BiometricIDAvailableResult, BiometricApi, VerifyBiometricOptions, VerifyBiometricWithCustomFallbackOptions, BiometricResult, ERROR_CODES } from './common';
export declare class BiometricAuth implements BiometricApi {
	available(): Promise<BiometricIDAvailableResult>;
	didBiometricDatabaseChange(): Promise<boolean>;
	/**
	 * IOS: This 'default' method uses keychain instead of localauth so the passcode fallback can be used
	 *
	 * Android: Depending on the options may or may not use crypto in conjunction with authentication.
	 *
	 * @param options options as to what to show.
	 */
	verifyBiometric(options: VerifyBiometricWithCustomFallbackOptions): Promise<BiometricResult>;
	/**
	 * IOS: This implementation uses LocalAuthentication and has no built-in passcode fallback
	 *
	 * Android: This is a passthrough to verifyFingerprint usePasscodeFallback is ignored.
	 *
	 * @param options options as to what to show.
	 * @param usePasscodeFallback indicate fallback to passcode for ios only, ignored by android use options.android.
	 */
	verifyBiometricWithCustomFallback(options: VerifyBiometricWithCustomFallbackOptions, usePasscodeFallback?: boolean): Promise<BiometricResult>;
	close(): void;
}
export { BiometricResult, ERROR_CODES };
