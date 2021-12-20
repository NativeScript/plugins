export * from './common';
import { BiometricIDAvailableResult, BiometricApi, VerifyBiometricOptions, BiometricResult, ERROR_CODES } from './common';
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
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult>;

	close(): void;
}
export { BiometricResult, ERROR_CODES };
