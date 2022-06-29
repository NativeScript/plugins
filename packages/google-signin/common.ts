import { CSSType, Property, View } from '@nativescript/core';

export interface Configuration {
	scopes?: string[];
	signInOptions?: 'default' | 'games';
	clientId?: string;
	serverClientId?: string;
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

export type ColorSchemeType = 'dark' | 'light' | 'auto';

export type ColorStyleType = 'standard' | 'wide' | 'icon';

export const colorSchemeProperty = new Property<GoogleSignInButtonBase, ColorSchemeType>({
	name: 'colorScheme',
	defaultValue: 'auto',
});
export const colorStyleProperty = new Property<GoogleSignInButtonBase, ColorStyleType>({
	name: 'colorStyle',
	defaultValue: 'standard',
});

@CSSType('GoogleSignInButton')
export class GoogleSignInButtonBase extends View {
	colorScheme: ColorSchemeType;
	colorStyle: ColorStyleType;
}

colorSchemeProperty.register(GoogleSignInButtonBase);
colorStyleProperty.register(GoogleSignInButtonBase);
