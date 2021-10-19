import { ILoginManager } from './common';
import { AndroidActivityResultEventData, AndroidApplication, Application } from '@nativescript/core';

function setToArray<T>(value: java.util.Set<T>): T[] {
	const result = [];
	const count = value.size();
	const nativeObjects = value.toArray();
	for (let i = 0; i < count; i++) {
		result.push(nativeObjects[i]);
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
			this.#declinedPermissions = setToArray(this.native.getDeclinedPermissions());
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
			this.#expiredPermissions = setToArray(this.native.getExpiredPermissions());
		}
		return this.#expiredPermissions;
	}

	get graphDomain(): string {
		return this.native.getGraphDomain();
	}

	get permissions(): string[] {
		if (!this.#permissions) {
			this.#permissions = setToArray(this.native.getPermissions());
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
	#declinedPermissions: string[];
	#grantedPermissions: string[];
	#isCancelled = false;
	static fromNative(logingResult: com.facebook.login.LoginResult) {
		if (logingResult instanceof com.facebook.login.LoginResult) {
			const result = new LoginResult();
			result.#native = logingResult;
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
			this.#declinedPermissions = setToArray(this.native.getRecentlyDeniedPermissions());
		}
		return this.#declinedPermissions;
	}

	get grantedPermissions(): string[] {
		if (this.isCancelled) {
			return [];
		}
		if (!this.#grantedPermissions) {
			this.#grantedPermissions = setToArray(this.native.getRecentlyGrantedPermissions());
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

	static init(){}

	static logInWithPermissions(permissions: string[], context?: any): Promise<LoginResult> {
		return new Promise((resolve, reject) => {
			if (!this.#native) {
				this.#native = com.facebook.login.LoginManager.getInstance();
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
		this.#native.logOut();
	}
}
