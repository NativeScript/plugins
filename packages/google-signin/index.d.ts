import { AndroidApplication, Application, AndroidActivityResultEventData, Utils } from '@nativescript/core';
import { Configuration, IUser, GoogleSignInButtonBase, ColorStyleType, ColorSchemeType } from './common';

export { colorSchemeProperty, colorStyleProperty } from './common';
import { GoogleError } from './index.ios';

declare class User implements IUser {
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

	readonly native;
	readonly android;
	readonly ios;
}
declare class GoogleSignin {
	static configure(configuration: Configuration): Promise<void>;

	static getCurrentUser(): User | null;

	static isSignedIn(): boolean;

	static disconnect(): Promise<void>;

	static signIn(): Promise<User>;

	static signInSilently(): Promise<User>;

	static signOut(): Promise<void>;

	static getTokens(): Promise<{
		idToken: string;
		accessToken: string;
	}>;

	static playServicesAvailable(): Promise<boolean>;
}

declare class GoogleSignInButton extends GoogleSignInButtonBase {
	colorScheme: ColorSchemeType;
	colorStyle: ColorStyleType;
}
