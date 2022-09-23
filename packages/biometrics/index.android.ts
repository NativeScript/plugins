import { BiometricIDAvailableResult, ERROR_CODES, BiometricApi, BiometricResult, VerifyBiometricOptions } from './common';
import { Application, AndroidActivityResultEventData, Utils, AndroidApplication, Device } from '@nativescript/core';

export * from './common';

const sdkVersion = parseInt(Device.sdkVersion);
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
	options: null,

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
			message,
		});
	},
	onAuthenticationFailed() {
		// Called on every failure
	},
	onAuthenticationSucceeded(result: androidx.biometric.BiometricPrompt.AuthenticationResult): void {
		try {
			const options: VerifyBiometricOptions = this.options;
			let cipher;
			if (!this.pinFallBack) {
				if (options?.android?.validityDuration > 0) {
					cipher = BiometricAuth.getAndInitSecretKey(options);
				} else {
					cipher = result.getCryptoObject().getCipher();
				}
			}
			BiometricAuth.performCrypto(options, cipher, this.resolve);
		} catch (error) {
			console.log(`Error in onAuthenticationSucceeded: ${error}`);
			this.reject({
				code: ERROR_CODES.UNEXPECTED_ERROR,
				message: error,
			});
		}
	},
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
						any: false,
					});
					return;
				}

				// The fingerprint API is only available from Android 6.0 (M, Api level 23)
				if (sdkVersion < 23) {
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

	/**
	 * Since we test the key to check if it is valid we need to be able to specify the key.
	 *
	 * @returns true if the key is accessed without error.
	 */
	didBiometricDatabaseChange(options?: VerifyBiometricOptions): Promise<boolean> {
		if (!options?.pinFallback) {
			// If pin fallback is used the key is never used.
			try {
				const cipher = BiometricAuth.getCipher();
				const secretKey = BiometricAuth.getSecretKey(options?.keyName ?? KEY_NAME);
				if (secretKey) {
					// No Key then there is nothing to check as it cannot have changed.
					const keyMode = javax.crypto.Cipher.ENCRYPT_MODE;
					cipher.init(keyMode, secretKey);
				}
			} catch (ex) {
				return Promise.resolve(true);
			}
		}
		return Promise.resolve(false);
	}

	private checkConfigured(): Promise<BiometricResult> {
		if (!this.keyguardManager) {
			return Promise.reject({
				code: ERROR_CODES.NOT_AVAILABLE,
				message: 'Keyguard manager not available.',
			});
		} else if (this.keyguardManager && !this.keyguardManager.isKeyguardSecure()) {
			return Promise.reject({
				code: ERROR_CODES.NOT_CONFIGURED,
				message: 'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.',
			});
		}
		return Promise.resolve({ code: ERROR_CODES.SUCCESS, message: 'OK' });
	}

	private generateCryptoObject(options: VerifyBiometricOptions): Promise<javax.crypto.Cipher> {
		if (options.pinFallback) {
			return Promise.resolve(null);
		} else {
			return BiometricAuth.generateSecretKey(options).then(() => {
				try {
					const cipher = BiometricAuth.getAndInitSecretKey(options);

					return cipher; // return the cypher not the crypto
				} catch (ex) {
					if (options?.android?.validityDuration > 0 && ex.nativeException instanceof android.security.keystore.UserNotAuthenticatedException) {
						// check for access denied will need to do bio first
						return Promise.resolve(null);
					} else {
						// handle invalid key
						if (ex.nativeException instanceof android.security.keystore.KeyPermanentlyInvalidatedException) {
							if (options?.android?.decryptText) {
								return Promise.reject({
									code: ERROR_CODES.UNEXPECTED_ERROR,
									message: 'Key permanently invalidated',
								});
							} else {
								this.deleteKey(options.keyName);
								return this.generateCryptoObject(options);
							}
						} else {
							return Promise.reject({
								code: ERROR_CODES.UNEXPECTED_ERROR,
								message: ex,
							});
						}
					}
				}
			});
		}
	}

	// Following: https://developer.android.com/training/sign-in/biometric-auth#java as a guide
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult> {
		return this.checkConfigured().then(() => {
			return this.generateCryptoObject(options).then((cipher) => {
				return new Promise<BiometricResult>((resolve, reject) => {
					if (cipher && options?.android?.validityDuration > 0 && !options?.pinFallback && (options?.secret || options?.android?.decryptText)) {
						try {
							BiometricAuth.performCrypto(options, cipher, resolve);
							return;
						} catch (onetryException) {
							// attempt failed trigger bio
						}
					}

					try {
						const pinFallback = options?.pinFallback;

						const executor = androidx.core.content.ContextCompat.getMainExecutor(Utils.android.getApplicationContext());
						const authCallback = new AuthenticationCallback();
						authCallback.resolve = resolve;
						authCallback.reject = reject;
						authCallback.toEncrypt = options?.secret;
						authCallback.toDecrypt = options?.android?.decryptText;
						authCallback.pinFallBack = pinFallback;
						authCallback.options = options;

						this.biometricPrompt = new androidx.biometric.BiometricPrompt(this.getActivity(), executor, authCallback);

						if (pinFallback && sdkVersion < 30) {
							this.promptForPin(resolve, reject, options);
						} else if (pinFallback) {
							const builder = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
								.setTitle(options.title ? options.title : 'Login')
								.setSubtitle(options.subTitle ? options.subTitle : null)
								.setDescription(options.message ? options.message : null)
								.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
								.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG | androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL); // PIN Fallback or Cancel
							this.biometricPrompt.authenticate(builder.build());
						} else if (options?.android?.validityDuration > 0) {
							const info = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
								.setTitle(options.title ? options.title : 'Login')
								.setSubtitle(options.subTitle ? options.subTitle : null)
								.setDescription(options.message ? options.message : null)
								.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
								.setNegativeButtonText(options.fallbackMessage ? options.fallbackMessage : 'Cancel') // PIN Fallback or Cancel
								.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG) // PIN Fallback or Cancel
								.build();

							this.biometricPrompt.authenticate(info);
						} else {
							const info = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
								.setTitle(options.title ? options.title : 'Login')
								.setSubtitle(options.subTitle ? options.subTitle : null)
								.setDescription(options.message ? options.message : null)
								.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
								.setNegativeButtonText(options.fallbackMessage ? options.fallbackMessage : 'Cancel') // PIN Fallback or Cancel
								.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG) // PIN Fallback or Cancel
								.build();

							this.biometricPrompt.authenticate(info, org.nativescript.plugins.fingerprint.Utils.createCryptoObject(cipher));
						}
					} catch (ex) {
						console.log(`Error in biometrics-auth.verifyBiometric: ${ex}`);
						reject({
							code: ERROR_CODES.UNEXPECTED_ERROR,
							message: ex,
						});
					}
				});
			});
		});
	}

	static performCrypto(options: VerifyBiometricOptions, cipher: javax.crypto.Cipher, resolve: (value: BiometricResult | PromiseLike<BiometricResult>) => void) {
		let encrypted: string;
		let decrypted: string;
		let iv: string;
		const toEncrypt = options?.secret;
		const toDecrypt = options?.android?.decryptText;

		if (toEncrypt) {
			const nativeString = new java.lang.String(toEncrypt.toString());
			const nativeBytes = nativeString.getBytes('UTF-8');

			const encryptedArray = cipher.doFinal(nativeBytes);
			encrypted = android.util.Base64.encodeToString(encryptedArray, android.util.Base64.DEFAULT).toString();
			iv = android.util.Base64.encodeToString(cipher.getIV(), android.util.Base64.DEFAULT).toString();
		} else if (toDecrypt) {
			const nativeBytes = android.util.Base64.decode(toDecrypt, android.util.Base64.DEFAULT);

			const decryptedBytes = cipher.doFinal(nativeBytes);
			decrypted = new java.lang.String(decryptedBytes, java.nio.charset.StandardCharsets.UTF_8).toString();
		} else if (!options?.pinFallback) {
			cipher.doFinal(SECRET_BYTE_ARRAY);
		}

		resolve({
			code: ERROR_CODES.SUCCESS,
			message: 'All OK',
			encrypted,
			decrypted,
			iv,
		});
	}

	static getAndInitSecretKey(options: VerifyBiometricOptions) {
		const cipher = BiometricAuth.getCipher();
		const secretKey = BiometricAuth.getSecretKey(options?.keyName ?? KEY_NAME);
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

	deleteKey(keyName?: string) {
		BiometricAuth.removeKey(keyName);
	}

	private static removeKey(keyName?: string) {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		if (keyStore.containsAlias(keyName ?? KEY_NAME)) {
			keyStore.deleteEntry(keyName ?? KEY_NAME);
		}
	}

	private static compareKeyDuration(keyDuration: number, optionsDuration): boolean {
		const onceOnlyDuration = optionsDuration === undefined || optionsDuration == 0 ? true : false;

		if ((onceOnlyDuration && (keyDuration === 0 || keyDuration == -1)) || keyDuration == optionsDuration) {
			return true;
		} else {
			return false;
		}
	}

	private static isKeyMatchingParameters(key: java.security.Key, options: VerifyBiometricOptions) {
		try {
			const factory = javax.crypto.SecretKeyFactory.getInstance(key.getAlgorithm(), 'AndroidKeyStore');

			const keyInfo = factory.getKeySpec(key as javax.crypto.SecretKey, android.security.keystore.KeyInfo.class) as android.security.keystore.KeyInfo;

			if (BiometricAuth.compareKeyDuration(keyInfo.getUserAuthenticationValidityDurationSeconds(), options.android?.validityDuration)) {
				// Key does not match delete
				return true;
			}
			// test strength etc.
		} catch (e) {
			// Not an Android KeyStore key.
			console.log(e);
		}
		return false;
	}

	/**
	 * Creates a symmetric key in the Android Key Store which can only be used after the user has
	 * authenticated with device credentials within the last X seconds.
	 */
	private static generateSecretKey(options: VerifyBiometricOptions): Promise<void> {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
		keyStore.load(null);

		const keyName = options?.keyName ?? KEY_NAME;
		if (options.keyName && (options.android?.decryptText || options.secret)) {
			const key = keyStore.getKey(keyName, null);
			if (key) {
				if (this.isKeyMatchingParameters(key, options)) {
					return Promise.resolve();
				}

				// if this is an encryption then delete
				if (!options.android?.decryptText) {
					BiometricAuth.removeKey(options.keyName);
				}
			}

			// need to reject as can never decrypt without a key.
			if (options.android?.decryptText) {
				return Promise.reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: `Key not available: ${keyName}`,
				});
			}
		}

		const keyGenerator = javax.crypto.KeyGenerator.getInstance(android.security.keystore.KeyProperties.KEY_ALGORITHM_AES, 'AndroidKeyStore');
		const builder = new android.security.keystore.KeyGenParameterSpec.Builder(keyName, android.security.keystore.KeyProperties.PURPOSE_ENCRYPT | android.security.keystore.KeyProperties.PURPOSE_DECRYPT).setBlockModes([android.security.keystore.KeyProperties.BLOCK_MODE_CBC]).setEncryptionPaddings([android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7]).setUserAuthenticationRequired(true);
		if (sdkVersion > 23) {
			builder.setInvalidatedByBiometricEnrollment(true);
		}
		if (options?.android?.validityDuration > 0) {
			if (sdkVersion >= 30) {
				(<any>builder).setUserAuthenticationParameters(java.lang.Integer.valueOf(options?.android?.validityDuration).intValue(), (<any>android).security.keystore.KeyProperties.AUTH_BIOMETRIC_STRONG);
			} else {
				builder.setUserAuthenticationValidityDurationSeconds(java.lang.Integer.valueOf(options?.android?.validityDuration).intValue());
			}
		}
		keyGenerator.init(builder.build());
		keyGenerator.generateKey();
		return Promise.resolve();
	}
	private promptForPin(resolve, reject, options) {
		const onActivityResult = (data: AndroidActivityResultEventData) => {
			if (data.requestCode === REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS) {
				if (data.resultCode === android.app.Activity.RESULT_OK) {
					if (!options?.pinFallBack) {
						if (options?.android?.validityDuration > 0) {
							reject({
								code: ERROR_CODES.UNEXPECTED_ERROR,
								message: 'Unable to perform Crypto Operation',
							});
						}
					} else {
						// OK = -1
						// the user has just authenticated via the ConfirmDeviceCredential activity
						resolve({
							code: ERROR_CODES.SUCCESS,
							message: 'All OK',
						});
					}
				} else {
					// the user has quit the activity without providing credentials

					reject({
						code: ERROR_CODES.USER_CANCELLED,
						message: 'User cancelled.',
					});
				}
			}
			Application.android.off(AndroidApplication.activityResultEvent, onActivityResult);
		};

		Application.android.on(AndroidApplication.activityResultEvent, onActivityResult);

		this.showAuthenticationScreen(options);
	}

	private static getSecretKey(keyName?: string) {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		return keyStore.getKey(keyName ?? KEY_NAME, null);
	}

	private static getCipher(): javax.crypto.Cipher {
		return javax.crypto.Cipher.getInstance(`${android.security.keystore.KeyProperties.KEY_ALGORITHM_AES}/${android.security.keystore.KeyProperties.BLOCK_MODE_CBC}/${android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7}`);
	}

	private getActivity(): androidx.appcompat.app.AppCompatActivity {
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
