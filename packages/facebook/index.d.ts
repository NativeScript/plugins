import { IAccessToken, ILoginResult } from './common';
export declare class FacebookError extends Error {
	readonly native: any;
}

export declare class AccessToken implements IAccessToken {
	readonly appID: string;

	readonly dataAccessExpirationDate: Date;

	readonly dataAccessExpired: boolean;

	readonly declinedPermissions: string[];

	readonly expirationDate: Date;

	readonly expired: boolean;

	readonly expiredPermissions: string[];

	readonly graphDomain: string;

	readonly permissions: string[];

	readonly refreshDate: Date;

	readonly tokenString: string;

	readonly userID: string;

	static currentAccessToken(): AccessToken;

	static readonly currentAccessTokenIsActive: boolean;

	readonly native;

	readonly android;

	readonly ios;
}

export declare class LoginResult implements ILoginResult {
	readonly declinedPermissions: string[];

	readonly grantedPermissions: string[];

	readonly isCancelled: boolean;

	readonly token: AccessToken;

	readonly native;

	readonly android;

	readonly ios;
}

export declare class LoginManager implements ILoginManager {
	static init();

	static logInWithPermissions(permissions: string[]): Promise<LoginResult>;

	static logout();
}
