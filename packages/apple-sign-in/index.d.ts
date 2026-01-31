import { UserDetectionStatus } from './common';
import { View } from '@nativescript/core';

export type SignInButtonType = 'default' | 'signUp' | 'continue';
export type SignInButtonStyle = 'white' | 'whiteOutline' | 'black';

export class SignInButton extends View {
	/**
	 * Button type: 'default' (Sign in with Apple), 'signUp' (Sign up with Apple), 'continue' (Continue with Apple)
	 */
	type: SignInButtonType;
	/**
	 * Button style: 'white', 'whiteOutline', 'black'
	 */
	buttonStyle: SignInButtonStyle;
}

export type SignInScopes = 'EMAIL' | 'FULL_NAME';

export interface SignInOptions {
	user?: string;
	scopes?: SignInScopes[];
	useNonce?: boolean;
	nonce?: string;
}

export interface UserFullName {
	namePrefix?: string;
	givenName?: string;
	middleName?: string;
	familyName?: string;
	nameSuffix?: string;
	nickname?: string;
}

export interface User {
	nonce?: string;
	user: string;
	fullName?: UserFullName;
	realUserStatus: UserDetectionStatus;
	authorizedScopes: SignInScopes[];
	identityToken?: string;
	email?: string;
	state: string;
	authorizationCode?: string;
}

export class SignIn {
	static #controller: ASAuthorizationController;
	static #delegate: ASAuthorizationControllerDelegate;

	public static signIn(options?: SignInOptions): Promise<User>;

	public static isSupported(): boolean;

	public static getState(userID: string): Promise<CredentialState>;
}
