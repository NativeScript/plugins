declare module org {
	export module nativescript {
		export module plugins {
			export module googlesignin {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.plugins.googlesignin.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module googlesignin {
				export class GoogleSignIn {
					public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn>;
					public static Companion: org.nativescript.plugins.googlesignin.GoogleSignIn.Companion;
					public static REQUEST_CODE_SIGNIN: number;
					public static signOut(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
					public static playServicesAvailable(param0: boolean, param1: globalAndroid.app.Activity): boolean;
					public static getExecutorsCount(): number;
					public static signIn(param0: globalAndroid.app.Activity): void;
					public static signInSilently(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>): void;
					public static getTokens(param0: globalAndroid.content.Context, param1: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<string>): void;
					public static getCurrentUser(param0: globalAndroid.content.Context): org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser;
					public constructor();
					public static clearCachedAccessToken(param0: globalAndroid.content.Context, param1: string): void;
					public static revokeAccess(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
					public static isConfigured(): boolean;
					public static isSignedIn(param0: globalAndroid.content.Context): boolean;
					public static getSignedInAccountFromIntent(param0: globalAndroid.content.Intent, param1: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>): void;
					public static setExecutorsCount(param0: number): void;
					public static configure(param0: string, param1: globalAndroid.content.Context, param2: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
					public static disconnect(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
				}
				export module GoogleSignIn {
					export class Callback<T> extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.plugins.googlesignin.GoogleSignIn$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: T): void; onError(param0: any): void });
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn.Companion>;
						public revokeAccess(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
						public setExecutorsCount(param0: number): void;
						public signOut(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
						public configure(param0: string, param1: globalAndroid.content.Context, param2: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
						public getSignedInAccountFromIntent(param0: globalAndroid.content.Intent, param1: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>): void;
						public getCurrentUser(param0: globalAndroid.content.Context): org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser;
						public getTokens(param0: globalAndroid.content.Context, param1: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<string>): void;
						public isConfigured(): boolean;
						public playServicesAvailable(param0: boolean, param1: globalAndroid.app.Activity): boolean;
						public signInSilently(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>): void;
						public disconnect(param0: org.nativescript.plugins.googlesignin.GoogleSignIn.Callback<java.lang.Void>): void;
						public signIn(param0: globalAndroid.app.Activity): void;
						public isSignedIn(param0: globalAndroid.content.Context): boolean;
						public getExecutorsCount(): number;
						public clearCachedAccessToken(param0: globalAndroid.content.Context, param1: string): void;
					}
					export class GoogleUser {
						public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn.GoogleUser>;
						public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: string);
						public getUser(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
						public getAccessToken(): string;
					}
					export class User {
						public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn.User>;
						public static Companion: org.nativescript.plugins.googlesignin.GoogleSignIn.User.Companion;
						public static REQUEST_CODE_REQUEST_SCOPE: number;
						public constructor();
						public static requestScopes(param0: string, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param2: globalAndroid.app.Activity): void;
					}
					export module User {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.googlesignin.GoogleSignIn.User.Companion>;
							public requestScopes(param0: string, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param2: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.plugins.googlesignin.GoogleSignIn.Callback:1
