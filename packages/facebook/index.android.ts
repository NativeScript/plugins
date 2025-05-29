import { ILoginManager } from './common';
import { AndroidActivityResultEventData, AndroidApplication, Application } from '@nativescript/core';

function setToArray<T>(value: java.util.Set<T>, type: 'string' | 'number' | 'boolean'): T[] {
	const result = [];
	const count = value.size();
	const nativeObjects = value.toArray();
	for (let i = 0; i < count; i++) {
		let value;
		switch (type) {
			case 'boolean':
				value = Boolean(nativeObjects[i]);
				break;
			case 'string':
				value = String(nativeObjects[i]);
				break;
			case 'number':
				value = Number(nativeObjects[i]);
				break;
			default:
				value = nativeObjects[i];
				break;
		}
		result.push(value);
	}
	return result;
}

export class FacebookError extends Error {
	#native: com.facebook.FacebookException;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new FacebookError(message || native?.getMessage?.());
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}
}

export class AccessToken {
	#native: com.facebook.AccessToken;
	#declinedPermissions: string[];
	#expiredPermissions: string[];
	#permissions: string[];

	static fromNative(accessToken: com.facebook.AccessToken) {
		if (accessToken instanceof com.facebook.AccessToken) {
			const token = new AccessToken();
			token.#native = accessToken;
			return token;
		}
		return null;
	}

	get appID(): string {
		return this.native.getApplicationId?.();
	}

	get dataAccessExpirationDate(): Date {
		return new Date(this.native.getDataAccessExpirationTime().getTime());
	}

	get dataAccessExpired(): boolean {
		return this.native.isDataAccessExpired();
	}

	get declinedPermissions() {
		if (!this.#declinedPermissions) {
			this.#declinedPermissions = setToArray(this.native.getDeclinedPermissions(), 'string');
		}
		return this.#declinedPermissions;
	}

	get expirationDate(): Date {
		return new Date(this.native.getExpires().getTime());
	}

	get expired(): boolean {
		return this.native.isExpired();
	}

	get expiredPermissions(): string[] {
		if (!this.#expiredPermissions) {
			this.#expiredPermissions = setToArray(this.native.getExpiredPermissions(), 'string');
		}
		return this.#expiredPermissions;
	}

	get graphDomain(): string {
		return this.native.getGraphDomain();
	}

	get permissions(): string[] {
		if (!this.#permissions) {
			this.#permissions = setToArray(this.native.getPermissions(), 'string');
		}
		return this.#permissions;
	}

	get refreshDate(): Date {
		return new Date(this.native.getLastRefresh().getTime());
	}

	get tokenString(): string {
		return this.native.getToken();
	}

	get userID(): string {
		return this.native.getUserId();
	}

	static currentAccessToken(): AccessToken {
		return AccessToken.fromNative(com.facebook.AccessToken.getCurrentAccessToken());
	}

	static get currentAccessTokenIsActive(): boolean {
		return com.facebook.AccessToken.isCurrentAccessTokenActive();
	}

	toJSON() {
		return {
			appID: this.appID,
			dataAccessExpirationDate: this.dataAccessExpirationDate,
			dataAccessExpired: this.dataAccessExpired,
			declinedPermissions: this.declinedPermissions,
			expirationDate: this.expirationDate,
			expired: this.expired,
			expiredPermissions: this.expiredPermissions,
			graphDomain: this.graphDomain,
			permissions: this.permissions,
			refreshDate: this.refreshDate,
			tokenString: this.tokenString,
			userID: this.userID,
		};
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class AuthenticationToken {
	#native: com.facebook.AuthenticationToken;

	static fromNative(authenticationToken: com.facebook.AuthenticationToken) {
		if (authenticationToken instanceof com.facebook.AuthenticationToken) {
			const token = new AuthenticationToken();
			token.#native = authenticationToken;
			return token;
		}
		return null;
	}

	get nonce(): string {
		return this.native.getExpectedNonce();
	}

	get tokenString(): string {
		return this.native.getToken();
	}

	static currentAuthenticationToken(): AuthenticationToken {
		return AuthenticationToken.fromNative(com.facebook.AuthenticationToken.getCurrentAuthenticationToken());
	}

	toJSON() {
		return {
			nonce: this.nonce,
			tokenString: this.tokenString,
		};
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class LoginResult {
	#native: com.facebook.login.LoginResult;
	#token: AccessToken;
	#authenticationToken: AuthenticationToken;
	#declinedPermissions: string[];
	#grantedPermissions: string[];
	#isCancelled = false;
	static fromNative(loginResult: com.facebook.login.LoginResult) {
		if (loginResult instanceof com.facebook.login.LoginResult) {
			const result = new LoginResult();
			result.#native = loginResult;
			return result;
		}
		return null;
	}

	static fromCancelled() {
		const result = new LoginResult();
		result.#isCancelled = true;
		return result;
	}

	get declinedPermissions(): string[] {
		if (this.isCancelled) {
			return [];
		}
		if (!this.#declinedPermissions) {
			this.#declinedPermissions = setToArray(this.native.getRecentlyDeniedPermissions(), 'string');
		}
		return this.#declinedPermissions;
	}

	get grantedPermissions(): string[] {
		if (this.isCancelled) {
			return [];
		}
		if (!this.#grantedPermissions) {
			this.#grantedPermissions = setToArray(this.native.getRecentlyGrantedPermissions(), 'string');
		}
		return this.#grantedPermissions;
	}

	get isCancelled(): boolean {
		return this.#isCancelled;
	}

	get token(): AccessToken {
		if (this.#isCancelled) {
			return null;
		}
		if (!this.#token) {
			this.#token = AccessToken.fromNative(this.native.getAccessToken());
		}
		return this.#token;
	}

	get authenticationToken(): AuthenticationToken {
		if (!this.#authenticationToken) {
			this.#authenticationToken = AuthenticationToken.fromNative(this.native.getAuthenticationToken());
		}
		return this.#authenticationToken;
	}

	toJSON() {
		return {
			declinedPermissions: this.declinedPermissions,
			grantedPermissions: this.grantedPermissions,
			isCancelled: this.isCancelled,
			token: this.token,
			authenticationToken: this.authenticationToken,
		};
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class LoginManager implements ILoginManager {
	static #native: com.facebook.login.LoginManager;
	static #callbackManager: com.facebook.CallbackManager;
	private static ensureNative() {
		if (!LoginManager.#native) {
			LoginManager.#native = com.facebook.login.LoginManager.getInstance();
		}
	}

	static init() {
		LoginManager.ensureNative();
	}

	static logInWithPermissions(permissions: string[], context?: any): Promise<LoginResult> {
		return new Promise((resolve, reject) => {
			LoginManager.ensureNative();
			if (!this.#callbackManager) {
				this.#callbackManager = com.facebook.CallbackManager.Factory.create();
				Application.android.on(AndroidApplication.activityResultEvent, (data: AndroidActivityResultEventData) => {
					this.#callbackManager.onActivityResult(data.requestCode, data.resultCode, data.intent);
				});
			}
			this.#native.registerCallback(
				this.#callbackManager,
				new com.facebook.FacebookCallback<com.facebook.login.LoginResult>({
					onCancel() {
						resolve(LoginResult.fromCancelled());
					},
					onSuccess(param0) {
						resolve(LoginResult.fromNative(param0));
					},
					onError(param0: com.facebook.FacebookException) {
						reject(FacebookError.fromNative(param0 as any));
					},
				})
			);
			this.#native.logIn(<android.app.Activity>context || Application.android.foregroundActivity || Application.android.startActivity, java.util.Arrays.asList(permissions));
		});
	}

	static logout() {
		LoginManager.ensureNative();
		this.#native.logOut();
	}
}
