import { Utils } from '@nativescript/core';
import { BiometricIDAvailableResult, BiometricResult, ERROR_CODES, BiometricApi, VerifyBiometricOptions } from './common';
export * from './common';

const keychainItemIdentifier = 'TouchIDKey';
let keychainItemServiceName = null;

export class BiometricAuth implements BiometricApi {
	private laContext: LAContext;

	available(): Promise<BiometricIDAvailableResult> {
		return new Promise((resolve, reject) => {
			try {
				const laContext = LAContext.new();
				const hasBio = laContext.canEvaluatePolicyError(LAPolicy.DeviceOwnerAuthenticationWithBiometrics);

				resolve({
					any: hasBio,
					touch: hasBio && laContext.biometryType === 1, // LABiometryType.TypeTouchID,
					face: hasBio && laContext.biometryType === 2, // LABiometryType.TypeFaceID,
				});
			} catch (ex) {
				console.log(`fingerprint-auth.available: ${ex}`);
				// if no identities are enrolled, there will be an exception (so not using 'reject' here)
				resolve({
					any: false,
				});
			}
		});
	}

	didBiometricDatabaseChange(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				const laContext = LAContext.new();

				// we expect the dev to have checked 'isAvailable' already so this should not return an error,
				// we do however need to run canEvaluatePolicy here in order to get a non-nil evaluatedPolicyDomainState
				if (!laContext.canEvaluatePolicyError(LAPolicy.DeviceOwnerAuthenticationWithBiometrics)) {
					reject('Not available');
					return;
				}

				// only supported on iOS9+, so check this.. if not supported just report back as false
				if (Utils.ios.MajorVersion < 9) {
					resolve(false);
					return;
				}

				const FingerprintDatabaseStateKey = 'FingerprintDatabaseStateKey';
				const state = laContext.evaluatedPolicyDomainState;
				if (state !== null) {
					const stateStr = state.base64EncodedStringWithOptions(0);
					const storedState = NSUserDefaults.standardUserDefaults.stringForKey(FingerprintDatabaseStateKey);

					// Store enrollment
					NSUserDefaults.standardUserDefaults.setObjectForKey(stateStr, FingerprintDatabaseStateKey);
					NSUserDefaults.standardUserDefaults.synchronize();

					// whenever a finger is added/changed/removed the value of the storedState changes,
					// so compare agains a value we previously stored in the context of this app
					const changed = storedState !== null && stateStr !== storedState;
					resolve(changed);
				}
			} catch (ex) {
				console.log(`Error in biometrics-auth.didBiometricDatabaseChange: ${ex}`);
				resolve(false);
			}
		});
	}

	/**
	 * this 'default' method uses keychain instead of localauth so the passcode fallback can be used
	 */
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult> {
		return new Promise((resolve, reject) => {
			try {
				if (options.pinFallback) {
					this.verifyBiometricWithCustomFallback(options, true).then(resolve, reject);
					return;
				}

				if (keychainItemServiceName === null) {
					const bundleID = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleIdentifier');
					keychainItemServiceName = `${bundleID}.TouchID`;
				}
				if (!options.ios?.fetchSecret) {
					if (!BiometricAuth.createKeyChainEntry(options)) {
						reject({
							code: ERROR_CODES.UNEXPECTED_ERROR,
							message: 'Unable to create KeyChain Entry',
						});
					}
				}
				const query = NSMutableDictionary.alloc().init();
				query.setObjectForKey(kSecClassGenericPassword, kSecClass);
				query.setObjectForKey(options.keyName ?? keychainItemIdentifier, kSecAttrAccount);
				query.setObjectForKey(keychainItemServiceName, kSecAttrService);
				query.setObjectForKey(true, kSecReturnData);

				// Note that you can only do this for Touch ID; for Face ID you need to tweak the plist value of NSFaceIDUsageDescription
				query.setObjectForKey((options !== null && options.message) || 'Scan your finger', kSecUseOperationPrompt);

				// Start the query and the fingerprint scan and/or device passcode validation
				let data: NSData;
				const valuePointer = new interop.Reference<NSData>(data);
				const res = SecItemCopyMatching(query, valuePointer);
				if (res === 0) {
					let jsString: string;
					if (options.ios?.fetchSecret) {
						const code = NSUTF8StringEncoding;
						let stringValue = NSString.alloc().initWithDataEncoding(valuePointer.value, code);
						jsString = stringValue.toString();
					}
					resolve({
						code: ERROR_CODES.SUCCESS,
						message: 'All OK' + jsString,
						decrypted: jsString,
					});
				} else {
					reject({
						code: ERROR_CODES.UNEXPECTED_ERROR,
						message: 'SecItemCopyMatching Failed',
					});
				}
			} catch (ex) {
				console.log(`Error in biometric-auth.verifyBiometric: ${ex}`);
				reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: ex,
				});
			}
		});
	}

	/**
	 * This implementation uses LocalAuthentication and has no built-in passcode fallback
	 */
	private verifyBiometricWithCustomFallback(options: VerifyBiometricOptions, usePasscodeFallback = false): Promise<BiometricResult> {
		return new Promise((resolve, reject) => {
			try {
				this.laContext = LAContext.new();
				if (!this.laContext.canEvaluatePolicyError(LAPolicy.DeviceOwnerAuthenticationWithBiometrics)) {
					reject('Not available');
					return;
				}

				const message = (options !== null && options.message) || 'Scan your finger';
				if (options !== null && options.fallbackMessage) {
					this.laContext.localizedFallbackTitle = options.fallbackMessage;
				}
				this.laContext.evaluatePolicyLocalizedReasonReply(options.ios?.customFallback ? LAPolicy.DeviceOwnerAuthenticationWithBiometrics : LAPolicy.DeviceOwnerAuthentication, message, (ok, error) => {
					if (ok) {
						resolve({
							code: ERROR_CODES.SUCCESS,
							message: 'All OK',
						});
					} else {
						let returnCode: ERROR_CODES;
						let message: string;

						switch (error.code) {
							case LAError.UserCancel: {
								returnCode = ERROR_CODES.USER_CANCELLED;
								message = 'User Canceled';
								break;
							}
							case LAError.UserFallback: {
								returnCode = ERROR_CODES.PASSWORD_FALLBACK_SELECTED;
								message = 'Fallback Button Pressed';
								break;
							}
							default: {
								returnCode = ERROR_CODES.UNEXPECTED_ERROR;
								message = error?.localizedDescription;
							}
						}
						reject({
							code: returnCode,
							message: message,
						});
					}
				});
			} catch (ex) {
				console.log(`Error in biometric-auth.verifyBiometricWithCustomFallback: ${ex}`);
				reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: ex,
				});
			}
		});
	}

	private static createKeyChainEntry(options: VerifyBiometricOptions): boolean {
		const customSecret = options.keyName && options.secret;

		const keyName = customSecret ? options.keyName : keychainItemIdentifier;
		const secret = customSecret ? options.secret : 'dummy content';

		const attributes = NSMutableDictionary.new();
		attributes.setObjectForKey(kSecClassGenericPassword, kSecClass);
		attributes.setObjectForKey(keyName, kSecAttrAccount);
		attributes.setObjectForKey(keychainItemServiceName, kSecAttrService);

		const accessControlRef = SecAccessControlCreateWithFlags(
			kCFAllocatorDefault,
			kSecAttrAccessibleWhenUnlockedThisDeviceOnly,
			2, // either SecAccessControlCreateFlags.kSecAccessControlBiometryAny (iOS 11.3+), or SecAccessControlCreateFlags.kSecAccessControlTouchIDAny (iOS < 11.3)
			null
		);
		if (accessControlRef === null) {
			console.log(`Can't store identifier '${keyName}' in the KeyChain.`);
			return false;
		} else {
			attributes.setObjectForKey(accessControlRef, kSecAttrAccessControl);
			// The content of the password is not important
			const content = NSString.stringWithString(secret);
			const nsData = content.dataUsingEncoding(NSUTF8StringEncoding);
			attributes.setObjectForKey(nsData, kSecValueData);

			SecItemAdd(attributes, null);
			return true;
		}
	}

	close(): void {
		if (this.laContext) {
			this.laContext.invalidate();
		}
	}
}
