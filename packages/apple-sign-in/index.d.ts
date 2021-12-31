import { UserDetectionStatus } from './common';
import { View } from '@nativescript/core';

export class SignInButton extends View { }


export type SignInScopes = "EMAIL" | "FULL_NAME";

export interface SignInOptions {
    user?: string;
    scopes?: SignInScopes[],
    useNonce?: boolean,
    nonce?: string
}

export interface UserFullName {
    namePrefix?: string,
    givenName?: string,
    middleName?: string,
    familyName?: string,
    nameSuffix?: string,
    nickname?: string
}

export interface User {
    nonce?: string,
    user: string,
    fullName?: UserFullName,
    realUserStatus: UserDetectionStatus,
    authorizedScopes: SignInScopes[],
    identityToken?: string,
    email?: string,
    state: string,
    authorizationCode?: string
}

export class SignIn {
    static #controller: ASAuthorizationController;
    static #delegate: ASAuthorizationControllerDelegate;

    public static signIn(
        options?: SignInOptions
    ): Promise<User>;

    public static isSupported(): boolean;

    public static getState(userID: string): Promise<CredentialState>;
}
