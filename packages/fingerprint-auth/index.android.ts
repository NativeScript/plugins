import { Application, Utils } from '@nativescript/core';
import { BiometricIDAvailableResult, ERROR_CODES, FingerprintAuthApi, VerifyFingerprintOptions, VerifyFingerprintWithCustomFallbackOptions } from './common';

declare const com: any;

const KEY_NAME = 'fingerprintauth';
const SECRET_BYTE_ARRAY = Array.create('byte', 16);
const AuthenticationCallback = (<any>androidx).biometric.BiometricPrompt.AuthenticationCallback.extend({
	resolve: null,
	reject: null,
	onAuthenticationError(code, error) {
		this.reject({
			code: ERROR_CODES.RECOVERABLE_ERROR,
			message: error,
		});
	},
	onAuthenticationFailed() {
		this.reject({
			code: ERROR_CODES.NOT_RECOGNIZED,
			message: 'Fingerprint not recognized.',
		});
	},
	onAuthenticationSucceeded(result): void {
		result.getCryptoObject().getCipher().doFinal(SECRET_BYTE_ARRAY);
		this.resolve();
	},
});

export class FingerprintAuth implements FingerprintAuthApi {
	private keyguardManager: android.app.KeyguardManager;

	private biometricPrompt: any;

	constructor() {
		this.keyguardManager = Utils.android.getApplicationContext().getSystemService('keyguard');
	}

	available(): Promise<BiometricIDAvailableResult> {
		return new Promise((resolve, reject) => {
			try {
				if (!this.keyguardManager || !this.keyguardManager.isKeyguardSecure()) {
					resolve({
						any: false,
					});
					return;
				}

				// The fingerprint API is only available from Android 6.0 (M, Api level 23)
				if (android.os.Build.VERSION.SDK_INT < 23) {
					reject(`Your api version doesn't support fingerprint authentication`);
					return;
				}

				const biometricManager = (<any>androidx).biometric.BiometricManager.from(Utils.android.getApplicationContext());
				const biometricConstants = (<any>androidx).biometric.BiometricManager;
				const biometricNoHardwareErrors: Array<number> = [biometricConstants.BIOMETRIC_ERROR_HW_UNAVAILABLE, biometricConstants.BIOMETRIC_ERROR_NO_HARDWARE, biometricConstants.BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED, biometricConstants.BIOMETRIC_ERROR_UNSUPPORTED, biometricConstants.BIOMETRIC_ERROR_UNKNOWN];

				if (!biometricManager || biometricNoHardwareErrors.includes(biometricManager.canAuthenticate())) {
					// Device doesn't support biometric authentication
					reject(`Device doesn't support biometric authentication or requires an update`);
				} else if (biometricManager.canAuthenticate() === (<any>androidx).biometric.BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED) {
					// If the user has not enrolled any biometrics, they still might have the device secure so we can fallback
					// to present the user with the swipe, password, pin device security screen regardless
					// the developer can handle this resolve by checking the `touch` property and determine if they want to use the
					// verifyFingerprint method or not since they'll know the user has no finger prints enrolled but do have a security option enabled
					// https://developer.android.com/reference/android/app/KeyguardManager.html#isDeviceSecure() only 23+
					if (this.keyguardManager.isDeviceSecure()) {
						resolve({
							any: true,
							biometrics: false,
						});
					} else {
						reject(`User hasn't enrolled any biometrics to authenticate with`);
					}
				} else {
					// Phone has biometric hardware and is enrolled
					resolve({
						any: true,
						biometrics: true,
					});
				}
			} catch (ex) {
				console.log(`fingerprint-auth.available: ${ex}`);
				reject(ex);
			}
		});
	}

	didFingerprintDatabaseChange(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			// not implemented for Android
			// TODO should be possible..
			resolve(false);
		});
	}

	// Following: https://developer.android.com/training/sign-in/biometric-auth#java as a guide
	verifyFingerprint(options: VerifyFingerprintWithCustomFallbackOptions, pinFallback: boolean = false): Promise<void | string> {
		return new Promise((resolve, reject) => {
			try {
				if (!this.keyguardManager) {
					reject({
						code: ERROR_CODES.NOT_AVAILABLE,
						message: 'Keyguard manager not available.',
					});
				}

				if (this.keyguardManager && !this.keyguardManager.isKeyguardSecure()) {
					reject({
						code: ERROR_CODES.NOT_CONFIGURED,
						message: 'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.',
					});
				}

				FingerprintAuth.generateSecretKey();

				const cipher = this.getCipher();
				const secretKey = this.getSecretKey();
				cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, secretKey);
				const cryptoObject = new (<any>androidx).biometric.BiometricPrompt.CryptoObject(cipher);

				const executor = (<any>androidx).core.content.ContextCompat.getMainExecutor(Utils.android.getApplicationContext());
				let authCallback = new AuthenticationCallback();
				authCallback.resolve = resolve;
				authCallback.reject = reject;

				this.biometricPrompt = new (<any>androidx).biometric.BiometricPrompt(this.getActivity(), executor, authCallback);

				if (pinFallback) {
					const info = new (<any>androidx).biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : "Login")
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setAllowedAuthenticators((<any>androidx).biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG | (<any>androidx).biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL) // PIN Fallback or Cancel
						.build();

					this.biometricPrompt.authenticate(info, cryptoObject);
				} else {
					const info = new (<any>androidx).biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : "Login")
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setNegativeButtonText(options.fallbackMessage ? options.fallbackMessage : 'Enter your password') // PIN Fallback or Cancel
						.setAllowedAuthenticators((<any>androidx).biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG) // PIN Fallback or Cancel
						.build();

					this.biometricPrompt.authenticate(info, cryptoObject);
				}
			} catch (ex) {
				console.log(`Error in fingerprint-auth.verifyFingerprint: ${ex}`);
				reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: ex,
				});
			}
		});
	}

	verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions): Promise<any> {
		return this.verifyFingerprint(options, false);
	}

	close(): void {
		this.biometricPrompt.cancelAuthentication();
	}

	/**
	 * Creates a symmetric key in the Android Key Store which can only be used after the user has
	 * authenticated with device credentials within the last X seconds.
	 */
	private static generateSecretKey(): void {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
		keyStore.load(null);
		const keyGenerator = javax.crypto.KeyGenerator.getInstance(android.security.keystore.KeyProperties.KEY_ALGORITHM_AES, 'AndroidKeyStore');

		keyGenerator.init(
			new android.security.keystore.KeyGenParameterSpec.Builder(KEY_NAME, android.security.keystore.KeyProperties.PURPOSE_ENCRYPT | android.security.keystore.KeyProperties.PURPOSE_DECRYPT)
				.setBlockModes([android.security.keystore.KeyProperties.BLOCK_MODE_CBC])
				.setEncryptionPaddings([android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7])
				.setUserAuthenticationRequired(true)
				.setInvalidatedByBiometricEnrollment(true)
				// .setUserAuthenticationValidityDurationSeconds(duration ? duration : 5)
				.build()
		);
		keyGenerator.generateKey();
	}

	private getSecretKey() {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		return keyStore.getKey(KEY_NAME, null);
	}

	private getCipher(): javax.crypto.Cipher {
		return javax.crypto.Cipher.getInstance(`${android.security.keystore.KeyProperties.KEY_ALGORITHM_AES}/${android.security.keystore.KeyProperties.BLOCK_MODE_CBC}/${android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7}`);
	}

	private getActivity(): any /* android.app.Activity */ {
		return Application.android.foregroundActivity || Application.android.startActivity;
	}
}
