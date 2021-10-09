export interface Configuration {
	scopes?: string[];
	signInOptions?: 'default' | 'games';
	clientId?: string;
	accountName?: string;
	hostedDomain?: string;
}

export interface IUser {
	readonly id: string;

	readonly displayName: string;

	readonly email: string;

	readonly givenName: string;

	readonly familyName: string;

	readonly idToken: string;

	readonly accessToken: string;

	readonly grantedScopes: string[];

	readonly photoUrl: string;

	readonly serverAuthCode: string;

	requestScopes(scopes: string[]): Promise<IUser>;
}
