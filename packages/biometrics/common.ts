export enum ERROR_CODES {
	PASSWORD_FALLBACK_SELECTED = -3, // historically this is what iOS uses, so using that as well
	SUCCESS = 0,
	DEVELOPER_ERROR = 10,
	NOT_AVAILABLE = 20,
	NOT_CONFIGURED = 30,
	NOT_RECOGNIZED = 40,
	RECOVERABLE_ERROR = 50,
	USER_CANCELLED = 60,
	UNEXPECTED_ERROR = 70,
}

export interface VerifyBiometricOptions {
	/**
	 * The required title in the fingerprint page for android.
	 * Default: whatever the device default is ('Confirm your password' is likely)
	 */
	title?: string;
	/**
	 * The optional subtitle in the fingerprint page for android.
	 * Default: Empty
	 */
	subTitle?: string;
	/**
	 * The optional message in the fingerprint dialog on ios and page description on android.
	 * Default: 'Scan your finger' on iOS and the device default on Android (which is likely 'Enter your device password to continue').
	 */
	message?: string; // Used IOS
	/**
	 * The optional confirm button after biometrics have been verified in the fingerprint page for android.
	 * Default: False
	 */
	confirm?: boolean;

	/**
	 * The optional button label when scanning the fingerprint fails.
	 * Default: 'Enter password'.
	 *
	 * Android:  When pinFallback is true this will be the text displayed on the pin dialog.
	 * 			 When pinFallback is false this will be the Negative button text on the Biometric Prompt.
	 */
	fallbackMessage?: string; // Used IOS

	/***
	 * Allow Fallback to Pin - note if true no cryptographic operations will happen and face id is not available on android.
	 */
	pinFallback?: boolean;
	/**
	 * Name of the key to use for crypto operations.
	 *
	 * Will be created if it does not exist.
	 * Is not used if pinFallback is true.
	 */
	keyName?: string;

	/**
	 * If set and pinFallback is true, and keyName is set then this string will be encrypted via the Biometric controlled Key (Android ) or stored (IOS).
	 */
	secret?: string;

	android?: AndroidOptions;
	ios?: IOSOptions;
}

export interface IOSOptions {
	/** Allow a custom fallback from biometrics */
	customFallback?: boolean;

	/** Attempt to fetch secret from the specified key */
	fetchSecret?: boolean;
}
export interface AndroidOptions {
	/**
	 * If set and pinFallback is true, and keyName is set then this string will be decrypted via the Biometric controlled Key.
	 */
	decryptText?: string;

	/**
	 * Required id decryptText is set.
	 *
	 * Retrieved from the result of an encryption.
	 */
	iv?: string;

	/**
	 * The period in seconds for which operations on the key are valid without triggering a biometric prompt.
	 */
	validityDuration?: number;
}

export interface BiometricIDAvailableResult {
	/**
	 * Has Bio
	 *
	 * Note: will be true if no bio available on android but device is secure ( has pin etc. set).
	 */
	any: boolean;
	/***
	 * IOS Only
	 */
	touch?: boolean;
	/***
	 * IOS Only
	 */
	face?: boolean;
	/***
	 * Android Only indicates one of Face/Fingerprint available.
	 */
	biometrics?: boolean;
}

//noinspection JSUnusedGlobalSymbols
export interface BiometricApi {
	available(): Promise<BiometricIDAvailableResult>;

	didBiometricDatabaseChange(): Promise<boolean>;
	/**
	 * This (recommended) method uses keychain instead of localauth so the passcode fallback can be used.
	 * On Android, when 'useCustomAndroidUI' is set to 'true', and the user opted for manually entering the password,
	 * this method may return a string (the entered password) for you to compare to the actual password.
	 */
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult>;

	/**
	 * Note will not do anything on android if using pin fallback.
	 */
	close(): void;

	/**
	 *
	 * When using encryption backed biometrics keys are generated, this allow you to remove the key.
	 *
	 * @param keyName Optional keyName to delete, if not supplied will delete the default key.
	 */
	deleteKey(keyName?: string): void;
}

export interface BiometricResult {
	code: ERROR_CODES;
	message: string;
	encrypted?: string;
	decrypted?: string;
	iv?: string;
}
