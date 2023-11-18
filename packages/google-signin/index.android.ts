import { Application, AndroidActivityResultEventData, Utils } from '@nativescript/core';
import { colorSchemeProperty, ColorSchemeType, colorStyleProperty, ColorStyleType, Configuration, GoogleSignInButtonBase, IUser } from './common';
import lazy from '@nativescript/core/utils/lazy';

const REQUEST_CODE_SIGNIN = 10210;
const REQUEST_CODE_REQUEST_SCOPE = 10211;

const STYLE_STANDARD = lazy(() => com.google.android.gms.common.SignInButton.SIZE_STANDARD);
const STYLE_ICON = lazy(() => com.google.android.gms.common.SignInButton.SIZE_ICON_ONLY);
const STYLE_WIDE = lazy(() => com.google.android.gms.common.SignInButton.SIZE_WIDE);

const COLOR_DARK = lazy(() => com.google.android.gms.common.SignInButton.COLOR_DARK);
const COLOR_LIGHT = lazy(() => com.google.android.gms.common.SignInButton.COLOR_LIGHT);
const COLOR_AUTO = lazy(() => com.google.android.gms.common.SignInButton.COLOR_AUTO);

export class GoogleError extends Error {
	_native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new GoogleError(message || native?.getMessage?.());
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}
}

export class User implements IUser {
	_native: com.google.android.gms.auth.api.signin.GoogleSignInAccount;
	_grantedScopes: string[];
	_accessToken: string;
	static fromNative(account: com.google.android.gms.auth.api.signin.GoogleSignInAccount, accessToken: string = null) {
		if (account instanceof com.google.android.gms.auth.api.signin.GoogleSignInAccount) {
			const user = new User();
			user._native = account;
			user._accessToken = accessToken;
			return user;
		}
		return null;
	}

	get id() {
		return this.native.getId();
	}

	get displayName() {
		return this.native.getDisplayName();
	}

	get email() {
		return this.native.getEmail();
	}

	get givenName() {
		return this.native.getGivenName();
	}

	get familyName() {
		return this.native.getFamilyName();
	}

	get idToken() {
		return this.native.getIdToken();
	}

	get accessToken() {
		return this._accessToken;
	}

	get grantedScopes() {
		if (!this._grantedScopes) {
			const grantedScopes = [];
			const scopes = this.native.getGrantedScopes().toArray();
			const length = scopes.length;
			for (let i = 0; i < length; i++) {
				const scope = scopes[i]?.toString?.();
				if (scope) {
					grantedScopes.push(scope);
				}
			}
			this._grantedScopes = grantedScopes;
		}
		return this._grantedScopes;
	}

	get photoUrl() {
		return this.native?.getPhotoUrl?.()?.toString?.();
	}

	get serverAuthCode() {
		return this.native.getServerAuthCode();
	}

	requestScopes(scopes: string[]): Promise<User> {
		return new Promise((resolve, reject) => {
			const callback = (data: AndroidActivityResultEventData) => {
				if (data.requestCode === REQUEST_CODE_REQUEST_SCOPE) {
					org.nativescript.plugins.googlesignin.GoogleSignIn.getSignedInAccountFromIntent(
						data.intent,
						new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>({
							onSuccess(param0) {
								resolve(User.fromNative(param0.getUser(), param0.getAccessToken()));
								Application.android.off(Application.AndroidApplication.activityResultEvent, callback);
							},
							onError(param0) {
								reject(GoogleError.fromNative(param0));
								Application.android.off(Application.AndroidApplication.activityResultEvent, callback);
							},
						})
					);
				}
			};
			Application.android.on(Application.AndroidApplication.activityResultEvent, callback);

			org.nativescript.plugins.googlesignin.GoogleSignIn.User.requestScopes(JSON.stringify(scopes), this.native, Application.android.foregroundActivity || Application.android.startActivity);
		});
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}
export class GoogleSignin {
	static configure(configuration: Configuration = {}): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.googlesignin.GoogleSignIn.configure(
				JSON.stringify({ ...(configuration || {}), retrieveAccessToken: true }),
				Application.android.foregroundActivity || Application.android.startActivity || Utils.android.getApplicationContext(),
				new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(param0) {
						reject(GoogleError.fromNative(param0));
					},
				})
			);
		});
	}

	static getCurrentUser(): User | null {
		const user = org.nativescript.plugins.googlesignin.GoogleSignIn.getCurrentUser(Utils.android.getApplicationContext());
		if (user) {
			return User.fromNative(user.getUser(), user.getAccessToken());
		}
		return null;
	}

	static isSignedIn() {
		return org.nativescript.plugins.googlesignin.GoogleSignIn.isSignedIn(Utils.android.getApplicationContext());
	}

	static disconnect(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.googlesignin.GoogleSignIn.disconnect(
				new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(param0) {
						reject();
					},
				})
			);
		});
	}

	static signIn(): Promise<User> {
		return new Promise((resolve, reject) => {
			const callback = (data: AndroidActivityResultEventData) => {
				if (data.requestCode === REQUEST_CODE_SIGNIN) {
					org.nativescript.plugins.googlesignin.GoogleSignIn.getSignedInAccountFromIntent(
						data.intent,
						new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>({
							onSuccess(param0) {
								resolve(User.fromNative(param0.getUser(), param0.getAccessToken()));
								Application.android.off(Application.AndroidApplication.activityResultEvent, callback);
							},
							onError(param0) {
								reject(GoogleError.fromNative(param0));
								Application.android.off(Application.AndroidApplication.activityResultEvent, callback);
							},
						})
					);
				}
			};
			Application.android.on(Application.AndroidApplication.activityResultEvent, callback);
			org.nativescript.plugins.googlesignin.GoogleSignIn.signIn(Application.android.foregroundActivity || Application.android.startActivity);
		});
	}

	static signInSilently(): Promise<User> {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.googlesignin.GoogleSignIn.signInSilently(
				new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>({
					onSuccess(param0) {
						resolve(User.fromNative(param0.getUser(), param0.getAccessToken()));
					},
					onError(param0) {
						reject(GoogleError.fromNative(param0));
					},
				})
			);
		});
	}

	static signOut(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.googlesignin.GoogleSignIn.signOut(
				new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(param0) {
						reject();
					},
				})
			);
		});
	}

	static getTokens(): Promise<{
		idToken: string;
		accessToken: string;
	}> {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.googlesignin.GoogleSignIn.getTokens(
				Utils.android.getApplicationContext(),
				new org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<string>({
					onSuccess(param0) {
						resolve(JSON.parse(param0));
					},
					onError(param0) {
						reject(GoogleError.fromNative(param0));
					},
				})
			);
		});
	}

	static playServicesAvailable() {
		return new Promise((resolve, reject) => {
			resolve(org.nativescript.plugins.googlesignin.GoogleSignIn.playServicesAvailable(false, Application.android.foregroundActivity || Application.android.startActivity));
		});
	}
}

@NativeClass
@Interfaces([android.view.View.OnClickListener])
class ClickListenerImpl extends java.lang.Object implements android.view.View.OnClickListener {
	constructor(public owner: WeakRef<GoogleSignInButton>) {
		super();

		return global.__native(this);
	}

	public onClick(v: android.view.View): void {
		const owner = this.owner?.get();
		if (owner) {
			owner._emit(GoogleSignInButton.tapEvent);
		}
	}
}

export class GoogleSignInButton extends GoogleSignInButtonBase {
	clickListener: ClickListenerImpl;
	// @ts-ignore
	nativeView: com.google.android.gms.common.SignInButton;

	createNativeView() {
		return new com.google.android.gms.common.SignInButton(this._context);
	}

	initNativeView(): void {
		super.initNativeView();
		this.clickListener = new ClickListenerImpl(new WeakRef(this));
		this.nativeView.setOnClickListener(this.clickListener);
	}

	public disposeNativeView() {
		this.clickListener = null;
		super.disposeNativeView();
	}

	[colorSchemeProperty.setNative](value: ColorSchemeType) {
		const nativeView: com.google.android.gms.common.SignInButton = this.nativeView;
		switch (value) {
			case 'dark':
				nativeView.setColorScheme(COLOR_DARK());
				break;
			case 'light':
				nativeView.setColorScheme(COLOR_LIGHT());
				break;
			default:
				nativeView.setColorScheme(COLOR_AUTO());
				break;
		}
	}

	[colorStyleProperty.setNative](value: ColorStyleType) {
		const nativeView: com.google.android.gms.common.SignInButton = this.nativeView;
		switch (value) {
			case 'wide':
				nativeView.setSize(STYLE_WIDE());
				break;
			case 'icon':
				nativeView.setSize(STYLE_ICON());
				break;
			default:
				nativeView.setSize(STYLE_STANDARD());
				break;
		}
	}
}
