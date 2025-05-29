import { Utils } from '@nativescript/core';
import { BiometricIDAvailableResult, BiometricResult, ERROR_CODES, BiometricApi, VerifyBiometricOptions } from './common';
export * from './common';

const keychainItemIdentifier = 'TouchIDKey';
let keychainItemServiceName = null;

export class BiometricAuth implements BiometricApi {
	private laContext: LAContext;

	deleteKey(keyName?: string) {
		const useKeyName = keyName ?? keychainItemIdentifier;
		BiometricAuth.deleteKeyChainEntry(useKeyName);
	}

	private static get keychainItemServiceName() {
		if (keychainItemServiceName === null) {
			const bundleID = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleIdentifier');
			keychainItemServiceName = `${bundleID}.TouchID`;
		}
		return keychainItemServiceName;
	}

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
					const stateStr = state.base64EncodedStringWithOptions(NSDataBase64EncodingOptions.Encoding64CharacterLineLength);
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
					this.verifyBiometricWithCustomFallback(options).then(resolve, reject);
					return;
				}

				const keyName = options.keyName ?? keychainItemIdentifier;
				const secret = options.secret ?? 'dummy content';

				if (!options.ios?.fetchSecret) {
					if (!BiometricAuth.updateKeyChainEntry(keyName, secret)) {
						reject({
							code: ERROR_CODES.UNEXPECTED_ERROR,
							message: 'Unable to create KeyChain Entry',
						});
						return;
					} else {
						resolve({
							code: ERROR_CODES.SUCCESS,
							message: 'All OK',
						});
						return;
					}
				} else {
					BiometricAuth.fetchKey(keyName, options, resolve, reject);
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
	static fetchKey(keyName: string, options: VerifyBiometricOptions, resolve: (value: BiometricResult | PromiseLike<BiometricResult>) => void, reject: (reason?: any) => void) {
		const query = NSMutableDictionary.alloc().init();
		query.setObjectForKey(kSecClassGenericPassword, kSecClass);
		query.setObjectForKey(keyName, kSecAttrAccount);
		query.setObjectForKey(BiometricAuth.keychainItemServiceName, kSecAttrService);
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
				const stringValue = NSString.alloc().initWithDataEncoding(valuePointer.value, code);
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
	}

	/**
	 * This implementation uses LocalAuthentication and has no built-in passcode fallback
	 */
	private verifyBiometricWithCustomFallback(options: VerifyBiometricOptions): Promise<BiometricResult> {
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

	private static updateKeyChainEntry(keyName: string, secret: string): boolean {
		BiometricAuth.deleteKeyChainEntry(keyName);
		return BiometricAuth.createKeyChainEntry(keyName, secret);
	}
	private static deleteKeyChainEntry(keyName: string) {
		const query = NSMutableDictionary.alloc().init();
		query.setObjectForKey(kSecClassGenericPassword, kSecClass);
		query.setObjectForKey(keyName, kSecAttrAccount);
		query.setObjectForKey(BiometricAuth.keychainItemServiceName, kSecAttrService);

		SecItemDelete(query);
	}

	private static createKeyChainEntry(keyName: string, secret: string): boolean {
		const attributes = NSMutableDictionary.new();
		attributes.setObjectForKey(kSecClassGenericPassword, kSecClass);
		attributes.setObjectForKey(keyName, kSecAttrAccount);
		attributes.setObjectForKey(BiometricAuth.keychainItemServiceName, kSecAttrService);

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

			const result = SecItemAdd(attributes, null);
			if (result === 0) {
				return true;
			} else {
				console.log('Unable to set key result', result);
				return false;
			}
		}
	}

	close(): void {
		if (this.laContext) {
			this.laContext.invalidate();
		}
	}
}
