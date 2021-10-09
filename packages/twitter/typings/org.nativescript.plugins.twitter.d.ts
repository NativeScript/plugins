declare module org {
	export module nativescript {
		export module plugins {
			export module twitter {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.plugins.twitter.BuildConfig>;
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
			export module twitter {
				export class Twitter {
					public static class: java.lang.Class<org.nativescript.plugins.twitter.Twitter>;
					public static Companion: org.nativescript.plugins.twitter.Twitter.Companion;
					public static verifyUser(param0: boolean, param1: boolean, param2: boolean, param3: org.nativescript.plugins.twitter.Twitter.Callback<com.twitter.sdk.android.core.models.User>): void;
					public constructor();
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
				}
				export module Twitter {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.plugins.twitter.Twitter.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.plugins.twitter.Twitter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onError(param0: any): void;
						});
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.plugins.twitter.Twitter.Companion>;
						public setExecutorsCount(param0: number): void;
						public verifyUser(param0: boolean, param1: boolean, param2: boolean, param3: org.nativescript.plugins.twitter.Twitter.Callback<com.twitter.sdk.android.core.models.User>): void;
						public getExecutorsCount(): number;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.plugins.twitter.Twitter.Callback:1

