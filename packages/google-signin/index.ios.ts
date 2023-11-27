import { Application, Utils, View } from '@nativescript/core';
import { colorSchemeProperty, ColorSchemeType, colorStyleProperty, ColorStyleType, Configuration, GoogleSignInButtonBase, IUser } from './common';

export class GoogleError extends Error {
	private _native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new GoogleError(message || native?.localizedDescription);
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}
}

export class User implements IUser {
	private _native: GIDGoogleUser;
	private _grantedScopes: string[];
	private _serverAuthCode: string;
	static fromNative(user: GIDGoogleUser) {
		if (user instanceof GIDGoogleUser) {
			const usr = new User();
			usr._native = user;
			return usr;
		}
		return null;
	}

	get id() {
		return this.native.userID;
	}

	get displayName() {
		return this.native?.profile?.name;
	}

	get email() {
		return this.native?.profile?.email;
	}

	get givenName() {
		return this.native?.profile?.givenName;
	}

	get familyName() {
		return this.native?.profile?.familyName;
	}

	get idToken() {
		return this.native?.idToken.tokenString;
	}

	get accessToken() {
		return this.native?.accessToken.tokenString;
	}

	get grantedScopes() {
		if (!this._grantedScopes) {
			const grantedScopes = [];
			const count = this.native.grantedScopes.count;
			for (let i = 0; i < count; i++) {
				grantedScopes.push(this.native.grantedScopes.objectAtIndex(i));
			}
			this._grantedScopes = grantedScopes;
		}

		return this._grantedScopes;
	}

	get photoUrl() {
		if (!this.native?.profile?.hasImage) {
			return null;
		}
		return this.native?.profile?.imageURLWithDimension(120)?.absoluteString;
	}

	get serverAuthCode() {
		return this._serverAuthCode;
	}

	requestScopes(scopes: string[]): Promise<User> {
		return new Promise((resolve, reject) => {
			GIDSignIn.sharedInstance.signInWithPresentingViewControllerHintAdditionalScopesCompletion(GoogleSignin.topViewController, 'Requesting additional scopes', scopes, (result, error) => {
				if (error) {
					reject(GoogleError.fromNative(error));
				} else {
					this._serverAuthCode = result.serverAuthCode;
					resolve(User.fromNative(result.user));
				}
			});
		});
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class GoogleSignin {
	static _nativeConfig: GIDConfiguration;
	static _profileImageSize = 120;
	static configure(configuration: Configuration = {}): Promise<void> {
		return new Promise((resolve, reject) => {
			const pathName = configuration['googleServicePlistPath'] ? configuration['googleServicePlistPath'] : 'GoogleService-Info';

			const path = NSBundle.mainBundle.pathForResourceOfType(pathName, 'plist');

			if (!configuration['clientId'] && !path) {
				const message = 'GoogleSignin: failed to determine clientID - GoogleService-Info.plist was not found and iosClientId was not provided. To fix this error: if you have GoogleService-Info.plist file (usually downloaded from firebase) place it into the project as seen in the iOS guide. Otherwise pass clientId option to configure()';
				reject(GoogleError.fromNative(null, message));
				return;
			}
			let plist: NSDictionary<any, any>;
			let clientId;
			if (configuration['clientId']) {
				clientId = configuration['clientId'];
			} else {
				plist = NSDictionary.alloc().initWithContentsOfFile(path);
				clientId = plist.objectForKey('CLIENT_ID');
			}

			let serverClientId;
			if (configuration['serverClientId']) {
				serverClientId = configuration['serverClientId'];
			} else {
				if (!plist) {
					plist = NSDictionary.alloc().initWithContentsOfFile(path);
				}
				serverClientId = plist.objectForKey('SERVER_CLIENT_ID');
			}

			this._profileImageSize = Number(configuration['profileImageSize']) ?? 120;

			const config = GIDConfiguration.alloc().initWithClientIDServerClientIDHostedDomainOpenIDRealm(clientId, serverClientId, configuration.hostedDomain || null, configuration['openIDRealm'] || null);
			this._nativeConfig = config;
			GIDSignIn.sharedInstance.configuration = config;
			resolve();
		});
	}

	static getCurrentUser(): User | null {
		return User.fromNative(GIDSignIn.sharedInstance?.currentUser);
	}

	static isSignedIn() {
		return GIDSignIn.sharedInstance.hasPreviousSignIn();
	}

	static disconnect(): Promise<void> {
		return new Promise((resolve, reject) => {
			GIDSignIn.sharedInstance.disconnectWithCompletion((error) => {
				if (error) {
					reject(GoogleError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	static signIn() {
		return new Promise((resolve, reject) => {
			GIDSignIn.sharedInstance.signInWithPresentingViewControllerCompletion(this.topViewController, (result, error) => {
				if (error) {
					reject(GoogleError.fromNative(error));
				} else {
					resolve(User.fromNative(result?.user));
				}
			});
		});
	}

	static signInSilently(): Promise<User> {
		return new Promise((resolve, reject) => {
			GIDSignIn.sharedInstance.restorePreviousSignInWithCompletion((user, error) => {
				if (error) {
					reject(GoogleError.fromNative(error));
				} else {
					resolve(User.fromNative(user));
				}
			});
		});
	}

	static signOut(): Promise<void> {
		return new Promise((resolve, reject) => {
			GIDSignIn.sharedInstance.signOut();
			resolve();
		});
	}

	static getTokens(): Promise<{}> {
		return new Promise((resolve, reject) => {
			const user = GIDSignIn.sharedInstance?.currentUser;
			if (!user) {
				reject(new GoogleError('getTokens requires a user to be signed in'));
				return;
			}

			user.refreshTokensIfNeededWithCompletion((auth, error) => {
				if (error) {
					reject(GoogleError.fromNative(error));
				} else {
					resolve({
						idToken: auth?.idToken,
						accessToken: auth?.accessToken,
					});
				}
			});
		});
	}

	static playServicesAvailable() {
		return Promise.resolve(true);
	}

	static get topViewController(): UIViewController | undefined {
		const root = this.rootViewController;
		if (!root) {
			return undefined;
		}
		return this.findTopViewController(root);
	}

	private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow ? keyWindow.rootViewController : undefined;
	}

	private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return this.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return this.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return this.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return this.findTopViewController(selected);
		} else {
			return root;
		}
	}
}

export class GoogleSignInButton extends GoogleSignInButtonBase {
	private _tapHandler: NSObject;

	createNativeView() {
		return GIDSignInButton.new();
	}

	public initNativeView(): void {
		super.initNativeView();
		this._tapHandler = TapHandlerImpl.initWithOwner(new WeakRef(this));
		this.nativeViewProtected.addTargetActionForControlEvents(this._tapHandler, 'tap', UIControlEvents.TouchUpInside);
	}

	public disposeNativeView(): void {
		this._tapHandler = null;
		super.disposeNativeView();
	}

	[colorSchemeProperty.setNative](value: ColorSchemeType) {
		const nativeView: GIDSignInButton = this.nativeView;
		switch (value) {
			case 'dark':
				nativeView.colorScheme = GIDSignInButtonColorScheme.kGIDSignInButtonColorSchemeDark;
				break;
			case 'light':
				nativeView.colorScheme = GIDSignInButtonColorScheme.kGIDSignInButtonColorSchemeLight;
				break;
			default:
				const mode = Application.systemAppearance();
				switch (mode) {
					case 'dark':
						nativeView.colorScheme = GIDSignInButtonColorScheme.kGIDSignInButtonColorSchemeDark;
						break;
					default:
						nativeView.colorScheme = GIDSignInButtonColorScheme.kGIDSignInButtonColorSchemeLight;
						break;
				}
				break;
		}
	}

	[colorStyleProperty.setNative](value: ColorStyleType) {
		const nativeView: GIDSignInButton = this.nativeView;
		switch (value) {
			case 'wide':
				nativeView.style = GIDSignInButtonStyle.kGIDSignInButtonStyleWide;
				break;
			case 'icon':
				nativeView.style = GIDSignInButtonStyle.kGIDSignInButtonStyleIconOnly;
				break;
			default:
				nativeView.style = GIDSignInButtonStyle.kGIDSignInButtonStyleStandard;
				break;
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		const layout = Utils.layout;

		const nativeView = this.nativeViewProtected;

		if (nativeView) {
			const width = layout.getMeasureSpecSize(widthMeasureSpec);
			const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);
			const height = layout.getMeasureSpecSize(heightMeasureSpec);
			const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

			const horizontalPadding = this.effectivePaddingLeft + this.effectiveBorderLeftWidth + this.effectivePaddingRight + this.effectiveBorderRightWidth;
			let verticalPadding = this.effectivePaddingTop + this.effectiveBorderTopWidth + this.effectivePaddingBottom + this.effectiveBorderBottomWidth;

			// The default button padding for UIButton - 6dip top and bottom.
			if (verticalPadding === 0) {
				verticalPadding = layout.toDevicePixels(12);
			}

			const desiredSize = layout.measureNativeView(nativeView, width - horizontalPadding, widthMode, height - verticalPadding, heightMode);

			desiredSize.width = desiredSize.width + horizontalPadding;
			desiredSize.height = desiredSize.height + verticalPadding;

			const measureWidth = Math.max(desiredSize.width, this.effectiveMinWidth);
			const measureHeight = Math.max(desiredSize.height, this.effectiveMinHeight);

			const widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
			const heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);

			this.setMeasuredDimension(widthAndState, heightAndState);
		}
	}
}

@NativeClass
class TapHandlerImpl extends NSObject {
	private _owner: WeakRef<GoogleSignInButton>;

	public static initWithOwner(owner: WeakRef<GoogleSignInButton>): TapHandlerImpl {
		const handler = <TapHandlerImpl>TapHandlerImpl.new();
		handler._owner = owner;
		return handler;
	}

	public tap(args) {
		// _owner is a {N} view which could get destroyed when a tap initiates (protect!)
		if (this._owner) {
			const owner = this._owner?.deref();
			if (owner) {
				owner._emit(GoogleSignInButton.tapEvent);
			}
		}
	}

	public static ObjCExposedMethods = {
		tap: { returns: interop.types.void, params: [interop.types.id] },
	};
}
