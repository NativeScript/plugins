import { BiometricIDAvailableResult, ERROR_CODES, BiometricApi, BiometricResult, VerifyBiometricOptions } from './common';
import { Application, AndroidActivityResultEventData, Utils, AndroidApplication } from '@nativescript/core';
export * from './common';

const KEY_NAME = 'biometricprintauth';
const SECRET_BYTE_ARRAY = Array.create('byte', 16);
const REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS = 788; // arbitrary

const AuthenticationCallback = (<any>androidx.biometric.BiometricPrompt.AuthenticationCallback).extend({
	resolve: null,
	reject: null,
	toEncrypt: null,
	toDecrypt: null,
	IV: null,
	pinFallBack: false,
	onAuthenticationError(code: number, error: string) {
		let returnCode: ERROR_CODES;
		let message: string;

		switch (code) {
			case androidx.biometric.BiometricPrompt.ERROR_CANCELED: {
				returnCode = ERROR_CODES.USER_CANCELLED;
				message = 'User Canceled';
				break;
			}
			case androidx.biometric.BiometricPrompt.ERROR_NEGATIVE_BUTTON: {
				returnCode = ERROR_CODES.PASSWORD_FALLBACK_SELECTED;
				message = 'Negative Button Pressed';
				break;
			}
			default: {
				returnCode = ERROR_CODES.RECOVERABLE_ERROR;
				message = error;
			}
		}

		this.reject({
			code: returnCode,
			message
		});
	},
	onAuthenticationFailed() {
		// Called on every failure
	},
	onAuthenticationSucceeded(result: androidx.biometric.BiometricPrompt.AuthenticationResult): void {
		let encrypted: string;
		let decrypted: string;
		let iv: string;
		try {
			if (this.toEncrypt) {
				// Howto do the encrypt/decrypt ?
				const nativeString = new java.lang.String(this.toEncrypt.toString());
				const nativeBytes = nativeString.getBytes('UTF-8');
				const cipher = result.getCryptoObject().getCipher();
				const encryptedArray = cipher.doFinal(nativeBytes);
				encrypted = android.util.Base64.encodeToString(encryptedArray, android.util.Base64.DEFAULT).toString();
				iv = android.util.Base64.encodeToString(cipher.getIV(), android.util.Base64.DEFAULT).toString();
			} else if (this.toDecrypt) {
				const nativeBytes = android.util.Base64.decode(this.toDecrypt, android.util.Base64.DEFAULT);

				const decryptedBytes = result
					.getCryptoObject()
					.getCipher()
					.doFinal(nativeBytes);
				decrypted = new java.lang.String(decryptedBytes, java.nio.charset.StandardCharsets.UTF_8).toString();
			} else if (!this.pinFallBack) {
				result
					.getCryptoObject()
					.getCipher()
					.doFinal(SECRET_BYTE_ARRAY);
			}

			this.resolve({
				code: ERROR_CODES.SUCCESS,
				message: 'All OK',
				encrypted,
				decrypted,
				iv
			});
		} catch (error) {
			console.log(`Error in onAuthenticationSucceeded: ${error}`);
			this.reject({
				code: ERROR_CODES.UNEXPECTED_ERROR,
				message: error
			});
		}
	}
});

export class BiometricAuth implements BiometricApi {
	private keyguardManager: android.app.KeyguardManager;

	private biometricPrompt: androidx.biometric.BiometricPrompt;

	constructor() {
		this.keyguardManager = Utils.android.getApplicationContext().getSystemService('keyguard');
	}

	available(): Promise<BiometricIDAvailableResult> {
		return new Promise((resolve, reject) => {
			try {
				if (!this.keyguardManager || !this.keyguardManager.isKeyguardSecure()) {
					resolve({
						any: false
					});
					return;
				}

				// The fingerprint API is only available from Android 6.0 (M, Api level 23)
				if (android.os.Build.VERSION.SDK_INT < 23) {
					reject(`Your api version doesn't support fingerprint authentication`);
					return;
				}

				const biometricManager = androidx.biometric.BiometricManager.from(Utils.android.getApplicationContext());
				const biometricConstants = androidx.biometric.BiometricManager;
				const biometricNoHardwareErrors: Array<number> = [biometricConstants.BIOMETRIC_ERROR_HW_UNAVAILABLE, biometricConstants.BIOMETRIC_ERROR_NO_HARDWARE, biometricConstants.BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED, biometricConstants.BIOMETRIC_ERROR_UNSUPPORTED];
				const canAuthenticate = biometricManager.canAuthenticate(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG);
				if (!biometricManager || biometricNoHardwareErrors.includes(canAuthenticate)) {
					// Device doesn't support biometric authentication
					reject(`Device doesn't support biometric authentication or requires an update`);
				} else if (canAuthenticate === androidx.biometric.BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED || canAuthenticate == biometricConstants.BIOMETRIC_STATUS_UNKNOWN) {
					// If the user has not enrolled any biometrics, they still might have the device secure so we can fallback
					// to present the user with the swipe, password, pin device security screen regardless
					// the developer can handle this resolve by checking the `touch` property and determine if they want to use the
					// verifyFingerprint method or not since they'll know the user has no finger prints enrolled but do have a security option enabled
					// https://developer.android.com/reference/android/app/KeyguardManager.html#isDeviceSecure() only 23+
					if (this.keyguardManager.isDeviceSecure()) {
						resolve({
							any: true,
							biometrics: false
						});
					} else {
						reject(`User hasn't enrolled any biometrics to authenticate with`);
					}
				} else {
					// Phone has biometric hardware and is enrolled
					resolve({
						any: true,
						biometrics: true
					});
				}
			} catch (ex) {
				console.log(`fingerprint-auth.available: ${ex}`);
				reject(ex);
			}
		});
	}

	// Following: https://stackoverflow.com/questions/61193681/check-if-the-user-changed-biometric-fingerprint-in-android as a guide
	didBiometricDatabaseChange(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			const options = {};
			const cipher = this.getCipher();
			var secretKey = this.getSecretKey(KEY_NAME);
			if (secretKey === null) {
				BiometricAuth.generateSecretKey(options, reject);
				secretKey = this.getSecretKey(KEY_NAME);
			}
			try {
				cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, secretKey);
			} catch (ex) {
				console.log(`Error in biometrics-auth.verifyBiometric: ${ex}`);
				try {
					BiometricAuth.generateSecretKey(options, reject);
					resolve(true);
				} catch (e) {
					console.log(`Error when generating new key: ${ex}`);
				}
			}
			resolve(false);
		});
	}

	// Following: https://developer.android.com/training/sign-in/biometric-auth#java as a guide
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult> {
		return new Promise<BiometricResult>((resolve, reject) => {
			try {
				if (!this.keyguardManager) {
					reject({
						code: ERROR_CODES.NOT_AVAILABLE,
						message: 'Keyguard manager not available.'
					});
				}

				if (this.keyguardManager && !this.keyguardManager.isKeyguardSecure()) {
					reject({
						code: ERROR_CODES.NOT_CONFIGURED,
						message: 'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.'
					});
				}
				const pinFallback = options?.pinFallback;

				let cryptoObject;

				if (!pinFallback) {
					BiometricAuth.generateSecretKey(options, reject);

					const cipher = this.getAndInitSecretKey(options, reject);
					cryptoObject = org.nativescript.plugins.fingerprint.Utils.createCryptoObject(cipher);
				}

				const executor = androidx.core.content.ContextCompat.getMainExecutor(Utils.android.getApplicationContext());
				const authCallback = new AuthenticationCallback();
				authCallback.resolve = resolve;
				authCallback.reject = reject;
				authCallback.toEncrypt = options?.secret;
				authCallback.toDecrypt = options?.android?.decryptText;
				authCallback.pinFallBack = pinFallback;
				this.biometricPrompt = new androidx.biometric.BiometricPrompt(this.getActivity(), executor, authCallback);

				if (pinFallback && android.os.Build.VERSION.SDK_INT < 30) {
					this.promptForPin(resolve, reject, options);
				} else if (pinFallback) {
					const builder = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : 'Login')
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG | androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL); // PIN Fallback or Cancel
					this.biometricPrompt.authenticate(builder.build());
				} else {
					const info = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : 'Login')
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setNegativeButtonText(options.fallbackMessage ? options.fallbackMessage : 'Cancel') // PIN Fallback or Cancel
						.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG) // PIN Fallback or Cancel
						.build();

					this.biometricPrompt.authenticate(info, cryptoObject);
				}
			} catch (ex) {
				console.log(`Error in biometrics-auth.verifyBiometric: ${ex}`);
				reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: ex
				});
			}
		});
	}

	getAndInitSecretKey(options: VerifyBiometricOptions, reject, doNotRetry: boolean = false) {
		const cipher = this.getCipher();
		const secretKey = this.getSecretKey(options?.keyName ?? KEY_NAME);
		const keyMode = options?.android?.decryptText ? javax.crypto.Cipher.DECRYPT_MODE : javax.crypto.Cipher.ENCRYPT_MODE;

		if (keyMode === javax.crypto.Cipher.DECRYPT_MODE) {
			const initializationVector = android.util.Base64.decode(options.android?.iv, android.util.Base64.DEFAULT);
			cipher.init(keyMode, secretKey, new javax.crypto.spec.IvParameterSpec(initializationVector));
		} else {
			cipher.init(keyMode, secretKey);
		}
		return cipher;
	}

	verifyBiometricWithCustomFallback(options: VerifyBiometricOptions): Promise<BiometricResult> {
		return this.verifyBiometric(options);
	}

	close(): void {
		this.biometricPrompt?.cancelAuthentication();
	}

	/**
	 * Creates a symmetric key in the Android Key Store which can only be used after the user has
	 * authenticated with device credentials within the last X seconds.
	 */
	private static generateSecretKey(options: VerifyBiometricOptions, reject): void {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
		keyStore.load(null);

		const keyName = options?.keyName ?? KEY_NAME;
		if (options.keyName && (options.android?.decryptText || options.secret)) {
			const key = keyStore.getKey(keyName, null);
			if (key) return;
			// key already exists
			else {
				// need to reject as can neve decrypt without a key.
				if (options.android?.decryptText) {
					reject({
						code: ERROR_CODES.UNEXPECTED_ERROR,
						message: `Key not available: ${keyName}`
					});
				}
			}
		}

		const keyGenerator = javax.crypto.KeyGenerator.getInstance(android.security.keystore.KeyProperties.KEY_ALGORITHM_AES, 'AndroidKeyStore');
		const builder = new android.security.keystore.KeyGenParameterSpec.Builder(keyName, android.security.keystore.KeyProperties.PURPOSE_ENCRYPT | android.security.keystore.KeyProperties.PURPOSE_DECRYPT)
			.setBlockModes([android.security.keystore.KeyProperties.BLOCK_MODE_CBC])
			.setEncryptionPaddings([android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7])
			.setUserAuthenticationRequired(true);
		if (android.os.Build.VERSION.SDK_INT > 23) {
			builder.setInvalidatedByBiometricEnrollment(true);
		}
		keyGenerator.init(builder.build());
		keyGenerator.generateKey();
	}
	public promptForPin(resolve, reject, options) {
		const onActivityResult = (data: AndroidActivityResultEventData) => {
			if (data.requestCode === REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS) {
				if (data.resultCode === android.app.Activity.RESULT_OK) {
					// OK = -1
					// the user has just authenticated via the ConfirmDeviceCredential activity
					resolve({
						code: ERROR_CODES.SUCCESS,
						message: 'All OK'
					});
				} else {
					// the user has quit the activity without providing credendials

					reject({
						code: ERROR_CODES.USER_CANCELLED,
						message: 'User cancelled.'
					});
				}
			}
			Application.android.off(AndroidApplication.activityResultEvent, onActivityResult);
		};

		Application.android.on(AndroidApplication.activityResultEvent, onActivityResult);

		this.showAuthenticationScreen(options);
	}
	private getSecretKey(keyName?: string) {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		return keyStore.getKey(keyName ?? KEY_NAME, null);
	}
	private deleteSecretKey(keyName?: string) {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		if (keyStore.containsAlias(keyName ?? KEY_NAME)) {
			keyStore.deleteEntry(keyName ?? KEY_NAME);
		}
	}
	private getCipher(): javax.crypto.Cipher {
		return javax.crypto.Cipher.getInstance(`${android.security.keystore.KeyProperties.KEY_ALGORITHM_AES}/${android.security.keystore.KeyProperties.BLOCK_MODE_CBC}/${android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7}`);
	}

	private getActivity(): any /* android.app.Activity */ {
		return Application.android.foregroundActivity || Application.android.startActivity;
	}

	/**
	 * Starts the built-in Android ConfirmDeviceCredential activity.
	 */
	private showAuthenticationScreen(options): void {
		// https://developer.android.com/reference/android/app/KeyguardManager#createConfirmDeviceCredentialIntent(java.lang.CharSequence,%2520java.lang.CharSequence)
		const intent = this.keyguardManager.createConfirmDeviceCredentialIntent(options && options.title ? options.title : null, options && options.fallbackMessage ? options.fallbackMessage : null);
		if (intent !== null) {
			this.getActivity().startActivityForResult(intent, REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS);
		}
	}
}
