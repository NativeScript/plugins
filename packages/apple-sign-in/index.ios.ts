import { Device, Utils, View } from '@nativescript/core';
import { SignInOptions, User, UserFullName } from '.';
import { CredentialState, UNSUPPORTED, UserDetectionStatus } from './common';

// SHA256 digest length constant
const CC_SHA256_DIGEST_LENGTH = 32;

export class SignInError extends Error {
	#native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new SignInError(message || native?.localizedDescription);
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}
}

function randomNonce(length: number) {
	let remainingLength = length;
	let result = '';
	let error = false;
	let errorValue;
	const characterSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._';

	while (remainingLength > 0) {
		const randoms = [];

		for (let i = 0; i < 16; i++) {
			if (error) {
				break;
			}
			const random = interop.alloc(1);
			const errorCode = SecRandomCopyBytes(kSecRandomDefault, 1, random);

			if (errorCode !== errSecSuccess) {
				errorValue = errorCode;
				error = true;
				break;
			}
			randoms.push(random);
		}

		if (error) {
			break;
		}

		randoms.forEach((value) => {
			if (remainingLength === 0) {
				return;
			}

			const ref = new interop.Reference(interop.types.uint8, value);
			if (ref.value < characterSet.length) {
				const character = characterSet[ref.value];
				result += character;
				remainingLength--;
			}
		});
	}

	return result;
}

function sha256Hash(input: string): string {
	const inputData = NSString.stringWithString(input).dataUsingEncoding(NSUTF8StringEncoding);
	const hashBuffer = interop.alloc(CC_SHA256_DIGEST_LENGTH);
	CC_SHA256(inputData.bytes, inputData.length, hashBuffer);

	let inputHashed = '';
	const hashRef = new interop.Reference(interop.types.uint8, hashBuffer);
	for (let i = 0; i < CC_SHA256_DIGEST_LENGTH; i++) {
		inputHashed += hashRef[i].toString(16).padStart(2, '0');
	}
	return inputHashed;
}

export class SignIn {
	static #controller: ASAuthorizationController;
	static #delegate: ASAuthorizationControllerDelegate;
	static #presentationContextProvider: ASAuthorizationControllerPresentationContextProviding;

	public static signIn(options?: SignInOptions) {
		return new Promise<User>((resolve, reject) => {
			if (!SignIn.isSupported()) {
				reject(UNSUPPORTED);
			}
			ensureClass();

			this.#delegate = ASAuthorizationControllerDelegateImpl.initWithCallback(resolve, reject);
			(this.#delegate as any)._options = options;

			const provider = ASAuthorizationAppleIDProvider.new();
			const request = provider.createRequest();
			if (options?.user) {
				request.user = options.user;
			}

			if (options?.scopes) {
				request.requestedScopes = options.scopes
					.map((item) => {
						switch (item) {
							case 'EMAIL':
								return ASAuthorizationScopeEmail;
							case 'FULL_NAME':
								return ASAuthorizationScopeFullName;
							default:
								return null;
						}
					})
					.filter((item) => item !== null) as any;
			}

			if (options?.useNonce) {
				if (options.nonce) {
					request.nonce = sha256Hash(options.nonce);
				} else {
					const nonce = randomNonce(32);
					request.nonce = sha256Hash(nonce);
					(this.#delegate as any)._options.nonce = nonce;
				}
			}

			this.#controller = ASAuthorizationController.alloc().initWithAuthorizationRequests([request]);

			// Set up presentation context provider (required by Apple)
			this.#presentationContextProvider = ASAuthorizationControllerPresentationContextProvidingImpl.new();
			this.#controller.presentationContextProvider = this.#presentationContextProvider;

			this.#controller.delegate = this.#delegate;
			this.#controller.performRequests();
		});
	}

	public static isSupported() {
		return Utils.SDK_VERSION >= 13;
	}

	public static getState(userID: string) {
		return new Promise<CredentialState>((resolve, reject) => {
			if (!SignIn.isSupported()) {
				reject(UNSUPPORTED);
			}
			const provider = ASAuthorizationAppleIDProvider.new();
			provider.getCredentialStateForUserIDCompletion(userID, (state, error) => {
				if (error) {
					reject(SignInError.fromNative(error));
				} else {
					resolve(getCredentialState(state));
				}
			});
		});
	}
}

export type SignInButtonType = 'default' | 'signUp' | 'continue';
export type SignInButtonStyle = 'white' | 'whiteOutline' | 'black';

export class SignInButton extends View {
	// Button type: signIn (default), signUp, continue
	public type: SignInButtonType = 'default';
	// Button style: white, whiteOutline, black
	public buttonStyle: SignInButtonStyle = 'black';

	createNativeView(): Object {
		const buttonType = this.getButtonType();
		const buttonStyleValue = this.getButtonStyle();
		return ASAuthorizationAppleIDButton.alloc().initWithAuthorizationButtonTypeAuthorizationButtonStyle(buttonType, buttonStyleValue);
	}

	private getButtonType(): ASAuthorizationAppleIDButtonType {
		switch (this.type) {
			case 'signUp':
				return ASAuthorizationAppleIDButtonType.SignUp;
			case 'continue':
				return ASAuthorizationAppleIDButtonType.Continue;
			case 'default':
			default:
				return ASAuthorizationAppleIDButtonType.Default;
		}
	}

	private getButtonStyle(): ASAuthorizationAppleIDButtonStyle {
		switch (this.buttonStyle) {
			case 'white':
				return ASAuthorizationAppleIDButtonStyle.White;
			case 'whiteOutline':
				return ASAuthorizationAppleIDButtonStyle.WhiteOutline;
			case 'black':
			default:
				return ASAuthorizationAppleIDButtonStyle.Black;
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}
}

function getCredentialState(state: ASAuthorizationAppleIDProviderCredentialState): CredentialState {
	switch (state) {
		case ASAuthorizationAppleIDProviderCredentialState.Authorized:
			return CredentialState.Authorized;
		case ASAuthorizationAppleIDProviderCredentialState.Revoked:
			return CredentialState.Revoked;
		case ASAuthorizationAppleIDProviderCredentialState.Transferred:
			return CredentialState.Transferred;
		default:
			if (state !== ASAuthorizationAppleIDProviderCredentialState.NotFound) {
				console.info('Invalid state for getState: ' + state + ', please report an issue at the plugin repo!');
			}
			return CredentialState.NotFound;
	}
}

function getRealUserStatus(status: ASUserDetectionStatus): UserDetectionStatus {
	switch (status) {
		case ASUserDetectionStatus.LikelyReal:
			return UserDetectionStatus.LikelyReal;
		case ASUserDetectionStatus.Unsupported:
			return UserDetectionStatus.Unsupported;
		default:
			return UserDetectionStatus.Unknown;
	}
}

let ASAuthorizationControllerDelegateImpl;
let ASAuthorizationControllerPresentationContextProvidingImpl;

function ensureClass() {
	if (!SignIn.isSupported()) {
		return;
	}

	if (ASAuthorizationControllerDelegateImpl && ASAuthorizationControllerPresentationContextProvidingImpl) {
		return;
	}

	// Presentation context provider - required by Apple for presenting the authorization UI
	@NativeClass()
	class ASAuthorizationControllerPresentationContextProvidingExt extends NSObject implements ASAuthorizationControllerPresentationContextProviding {
		static ObjCProtocols = [ASAuthorizationControllerPresentationContextProviding];
		presentationAnchorForAuthorizationController(controller: ASAuthorizationController): UIWindow {
			// Return the key window for presenting the authorization UI
			if (typeof UIApplication !== 'undefined') {
				// iOS 13+ approach
				const scenes = UIApplication.sharedApplication.connectedScenes;
				const sceneEnumerator = scenes.objectEnumerator();
				let scene: UIScene;
				while ((scene = sceneEnumerator.nextObject())) {
					if (scene.activationState === UISceneActivationState.ForegroundActive && scene instanceof UIWindowScene) {
						const windows = (scene as UIWindowScene).windows;
						for (let i = 0; i < windows.count; i++) {
							const window = windows.objectAtIndex(i);
							if (window.isKeyWindow) {
								return window;
							}
						}
					}
				}
				// Fallback for older code paths
				return UIApplication.sharedApplication.keyWindow || UIApplication.sharedApplication.windows.firstObject;
			}
			return null;
		}
	}

	ASAuthorizationControllerPresentationContextProvidingImpl = ASAuthorizationControllerPresentationContextProvidingExt;

	@NativeClass()
	class ASAuthorizationControllerDelegateExt extends NSObject implements ASAuthorizationControllerDelegate {
		static ObjCProtocols = [ASAuthorizationControllerDelegate];
		_resolve;
		_reject;
		_options: SignInOptions;

		static initWithCallback(resolve, reject) {
			const delegate = <ASAuthorizationControllerDelegateExt>ASAuthorizationControllerDelegateExt.new();
			delegate._resolve = resolve;
			delegate._reject = reject;
			return delegate;
		}

		authorizationControllerDidCompleteWithAuthorization(controller: ASAuthorizationController, authorization: ASAuthorization): void {
			const credential = authorization.credential as ASAuthorizationAppleIDCredential;
			let identityToken = null;
			const identityTokenData = credential.valueForKey('identityToken');

			if (identityTokenData) {
				identityToken = NSString.alloc().initWithDataEncoding(identityTokenData, NSUTF8StringEncoding);
			}

			let authorizationCode = null;
			const authorizationCodeData = credential.valueForKey('authorizationCode');

			if (authorizationCodeData) {
				authorizationCode = NSString.alloc().initWithDataEncoding(authorizationCodeData, NSUTF8StringEncoding);
			}

			let fullName: UserFullName = null;

			const fullNameData = credential.fullName;
			if (fullNameData) {
				fullName = {};
				fullName.namePrefix = fullNameData.namePrefix;
				fullName.givenName = fullNameData.givenName;
				fullName.middleName = fullNameData.middleName;
				fullName.familyName = fullNameData.familyName;
				fullName.nameSuffix = fullNameData.nameSuffix;
				fullName.nickname = fullNameData.nickname;
			}

			this._resolve({
				nonce: this._options?.nonce || null,
				user: credential.user,
				fullName,
				realUserStatus: getRealUserStatus(credential.realUserStatus),
				authorizedScopes: credential.authorizedScopes,
				identityToken,
				email: credential.email || null,
				state: credential.state,
				authorizationCode,
			});
		}

		authorizationControllerDidCompleteWithError(controller: ASAuthorizationController, error: NSError): void {
			this._reject?.(SignInError.fromNative(error));
		}
	}

	ASAuthorizationControllerDelegateImpl = ASAuthorizationControllerDelegateExt;
}
