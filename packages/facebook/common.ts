export interface ILoginManager {}

export interface IAccessToken {
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
}

export interface IAuthenticationToken {
	readonly graphDomain: string;

	readonly nonce: string;

	readonly tokenString: string;
}

export interface ILoginResult {
	readonly declinedPermissions: string[];

	readonly grantedPermissions: string[];

	readonly isCancelled: boolean;

	readonly token: IAccessToken;

	readonly authenticationToken: IAuthenticationToken;
}
