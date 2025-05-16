import { ILoginManager } from './common';

function setToArray<T>(value: NSSet<T>): T[] {
	const result = [];
	const nativeObjects = value.allObjects;
	const count = value.count;
	for (let i = 0; i < count; i++) {
		result.push(nativeObjects.objectAtIndex(i));
	}
	return result;
}

export class FacebookError extends Error {
	#native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new FacebookError(message || native?.localizedDescription);
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}
}

export class AccessToken {
	#native: FBSDKAccessToken;
	#declinedPermissions: string[];
	#expiredPermissions: string[];
	#permissions: string[];
	static fromNative(accessToken: FBSDKAccessToken) {
		if (accessToken instanceof FBSDKAccessToken) {
			const token = new AccessToken();
			token.#native = accessToken;
			return token;
		}
		return null;
	}

	get appID(): string {
		return this.native.appID;
	}

	get dataAccessExpirationDate(): Date {
		return this.native.dataAccessExpirationDate;
	}

	get dataAccessExpired(): boolean {
		return this.native.dataAccessExpired;
	}

	get declinedPermissions(): string[] {
		if (!this.#declinedPermissions) {
			this.#declinedPermissions = setToArray(this.native.declinedPermissions);
		}
		return this.#declinedPermissions;
	}

	get expirationDate(): Date {
		return this.native.expirationDate;
	}

	get expired(): boolean {
		return this.native.expired;
	}

	get expiredPermissions() {
		if (!this.#expiredPermissions) {
			this.#expiredPermissions = setToArray(this.native.expiredPermissions);
		}
		return this.#expiredPermissions;
	}

	get graphDomain(): string {
		return FBSDKAccessToken.tokenCache?.authenticationToken?.graphDomain;
	}

	get permissions(): string[] {
		if (!this.#permissions) {
			this.#permissions = setToArray(this.native.permissions);
		}
		return this.#permissions;
	}

	get refreshDate(): Date {
		return this.native.refreshDate;
	}

	get tokenString(): string {
		return this.native.tokenString;
	}

	get userID(): string {
		return this.native.userID;
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

	get ios() {
		return this.native;
	}

	static currentAccessToken(): AccessToken {
		return AccessToken.fromNative(FBSDKAccessToken.currentAccessToken);
	}

	static get currentAccessTokenIsActive(): boolean {
		return FBSDKAccessToken.currentAccessTokenIsActive;
	}
}

export class AuthenticationToken {
	#native: FBSDKAuthenticationToken;

	static fromNative(authenticationToken: FBSDKAuthenticationToken) {
		if (authenticationToken instanceof FBSDKAuthenticationToken) {
			const token = new AuthenticationToken();
			token.#native = authenticationToken;
			return token;
		}
		return null;
	}

	get graphDomain(): string {
		return FBSDKAuthenticationToken.tokenCache?.authenticationToken?.graphDomain;
	}

	get nonce(): string {
		return this.native.nonce;
	}

	get tokenString(): string {
		return this.native.tokenString;
	}

	static currentAuthenticationToken(): AuthenticationToken {
		return AuthenticationToken.fromNative(FBSDKAuthenticationToken.currentAuthenticationToken);
	}

	toJSON() {
		return {
			graphDomain: this.graphDomain,
			nonce: this.nonce,
			tokenString: this.tokenString,
		};
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class LoginResult {
	#native: FBSDKLoginManagerLoginResult;
	#token: AccessToken;
	#authenticationToken: AuthenticationToken;
	#declinedPermissions: string[];
	#grantedPermissions: string[];

	static fromNative(loginResult: FBSDKLoginManagerLoginResult) {
		if (loginResult instanceof FBSDKLoginManagerLoginResult) {
			const result = new LoginResult();
			result.#native = loginResult;
			return result;
		}
		return null;
	}

	get declinedPermissions(): string[] {
		if (!this.#declinedPermissions) {
			this.#declinedPermissions = setToArray(this.native.declinedPermissions);
		}
		return this.#declinedPermissions;
	}

	get grantedPermissions(): string[] {
		if (!this.#grantedPermissions) {
			this.#grantedPermissions = setToArray(this.native.grantedPermissions);
		}
		return this.#grantedPermissions;
	}

	get isCancelled(): boolean {
		return this.native.isCancelled;
	}

	get token(): AccessToken {
		if (!this.#token) {
			this.#token = AccessToken.fromNative(this.native.token);
		}
		return this.#token;
	}

	get authenticationToken(): AuthenticationToken {
		if (!this.#authenticationToken) {
			this.#authenticationToken = AuthenticationToken.fromNative(this.native.authenticationToken);
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

	get ios() {
		return this.native;
	}
}

export class LoginManager implements ILoginManager {
	static #native: FBSDKLoginManager;
	static init() {
		if (!this.#native) {
			this.#native = FBSDKLoginManager.new();
		}
	}

	static logInWithPermissions(permissions: string[], context?: any): Promise<LoginResult> {
		return new Promise((resolve, reject) => {
			this.#native.logInWithPermissionsFromViewControllerHandler(NSArray.arrayWithArray(permissions), <UIViewController>context || this.topViewController, (result, error) => {
				if (error) {
					reject(FacebookError.fromNative(error));
				} else {
					resolve(LoginResult.fromNative(result));
				}
			});
		});
	}

	static logout() {
		this.#native.logOut();
	}

	private static get topViewController(): UIViewController | undefined {
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
