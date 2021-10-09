import { AndroidApplication, Application, AndroidActivityResultEventData, Utils } from '@nativescript/core';
import { Configuration, IUser } from './common';
import { GoogleError } from './index.ios';

const REQUEST_CODE_SIGNIN = 610210;
const REQUEST_CODE_REQUEST_SCOPE = 610211;
export class User implements IUser {
	#native: com.google.android.gms.auth.api.signin.GoogleSignInAccount;
	#grantedScopes: string[];
	#accessToken: string;
	static fromNative(account: com.google.android.gms.auth.api.signin.GoogleSignInAccount, accessToken: string = null) {
		if (account instanceof com.google.android.gms.auth.api.signin.GoogleSignInAccount) {
			const user = new User();
			user.#native = account;
			user.#accessToken = accessToken;
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
		return this.#accessToken;
	}

	get grantedScopes() {
		if (!this.#grantedScopes) {
			const grantedScopes = [];
			const scopes = this.native.getGrantedScopes().toArray();
			const length = scopes.length;
			for (let i = 0; i < length; i++) {
				const scope = scopes[i]?.toString?.();
				if (scope) {
					grantedScopes.push(scope);
				}
			}
			this.#grantedScopes = grantedScopes;
		}
		return this.#grantedScopes;
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
								Application.android.off(AndroidApplication.activityResultEvent, callback);
							},
							onError(param0) {
								reject(GoogleError.fromNative(param0));
								Application.android.off(AndroidApplication.activityResultEvent, callback);
							},
						})
					);
				}
			};
			Application.android.on(AndroidApplication.activityResultEvent, callback);

			org.nativescript.plugins.googlesignin.GoogleSignIn.User.requestScopes(JSON.stringify(scopes), this.native, Application.android.foregroundActivity || Application.android.startActivity);
		});
	}

	get native() {
		return this.#native;
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
				Application.android.foregroundActivity || Application.android.startActivity,
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
								Application.android.off(AndroidApplication.activityResultEvent, callback);
							},
							onError(param0) {
								reject(GoogleError.fromNative(param0));
								Application.android.off(AndroidApplication.activityResultEvent, callback);
							},
						})
					);
				}
			};
			Application.android.on(AndroidApplication.activityResultEvent, callback);
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
		return org.nativescript.plugins.googlesignin.GoogleSignIn.playServicesAvailable(false, Application.android.foregroundActivity || Application.android.startActivity);
	}
}
