declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export abstract class AuthToken {
						public static class: java.lang.Class<com.twitter.sdk.android.core.AuthToken>;
						public createdAt: number;
						public isExpired(): boolean;
						public constructor();
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class AuthTokenAdapter extends java.lang.Object {
						public static class: java.lang.Class<com.twitter.sdk.android.core.AuthTokenAdapter>;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.twitter.sdk.android.core.AuthToken;
						public constructor();
						public serialize(param0: com.twitter.sdk.android.core.AuthToken, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class BuildConfig {
						public static class: java.lang.Class<com.twitter.sdk.android.core.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public static ARTIFACT_ID: string;
						public static BUILD_NUMBER: string;
						public static BUILD_TIME: number;
						public static GROUP: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export abstract class Callback<T>  extends retrofit2.Callback<any> {
						public static class: java.lang.Class<com.twitter.sdk.android.core.Callback<any>>;
						public constructor();
						public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
						public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
						public success(param0: com.twitter.sdk.android.core.Result<any>): void;
						public failure(param0: com.twitter.sdk.android.core.TwitterException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class DefaultLogger extends com.twitter.sdk.android.core.Logger {
						public static class: java.lang.Class<com.twitter.sdk.android.core.DefaultLogger>;
						public e(param0: string, param1: string, param2: java.lang.Throwable): void;
						public constructor();
						public w(param0: string, param1: string): void;
						public v(param0: string, param1: string): void;
						public log(param0: number, param1: string, param2: string): void;
						public getLogLevel(): number;
						public w(param0: string, param1: string, param2: java.lang.Throwable): void;
						public log(param0: number, param1: string, param2: string, param3: boolean): void;
						public e(param0: string, param1: string): void;
						public isLoggable(param0: string, param1: number): boolean;
						public d(param0: string, param1: string): void;
						public i(param0: string, param1: string, param2: java.lang.Throwable): void;
						public d(param0: string, param1: string, param2: java.lang.Throwable): void;
						public constructor(param0: number);
						public v(param0: string, param1: string, param2: java.lang.Throwable): void;
						public setLogLevel(param0: number): void;
						public i(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class GuestSession extends com.twitter.sdk.android.core.Session<com.twitter.sdk.android.core.internal.oauth.GuestAuthToken> {
						public static class: java.lang.Class<com.twitter.sdk.android.core.GuestSession>;
						public static LOGGED_OUT_USER_ID: number;
						public constructor(param0: com.twitter.sdk.android.core.internal.oauth.GuestAuthToken);
						public constructor(param0: any, param1: number);
					}
					export module GuestSession {
						export class Serializer extends com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<com.twitter.sdk.android.core.GuestSession> {
							public static class: java.lang.Class<com.twitter.sdk.android.core.GuestSession.Serializer>;
							public constructor();
							public deserialize(param0: string): com.twitter.sdk.android.core.GuestSession;
							public deserialize(param0: string): any;
							public serialize(param0: any): string;
							public serialize(param0: com.twitter.sdk.android.core.GuestSession): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class GuestSessionProvider {
						public static class: java.lang.Class<com.twitter.sdk.android.core.GuestSessionProvider>;
						public constructor(param0: com.twitter.sdk.android.core.internal.oauth.OAuth2Service, param1: com.twitter.sdk.android.core.SessionManager<com.twitter.sdk.android.core.GuestSession>);
						public getCurrentSession(): com.twitter.sdk.android.core.GuestSession;
						public refreshCurrentSession(param0: com.twitter.sdk.android.core.GuestSession): com.twitter.sdk.android.core.GuestSession;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class IntentUtils {
						public static class: java.lang.Class<com.twitter.sdk.android.core.IntentUtils>;
						public constructor();
						public static safeStartActivity(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
						public static isActivityAvailable(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class Logger {
						public static class: java.lang.Class<com.twitter.sdk.android.core.Logger>;
						/**
						 * Constructs a new instance of the com.twitter.sdk.android.core.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isLoggable(param0: string, param1: number): boolean;
							getLogLevel(): number;
							setLogLevel(param0: number): void;
							d(param0: string, param1: string, param2: java.lang.Throwable): void;
							v(param0: string, param1: string, param2: java.lang.Throwable): void;
							i(param0: string, param1: string, param2: java.lang.Throwable): void;
							w(param0: string, param1: string, param2: java.lang.Throwable): void;
							e(param0: string, param1: string, param2: java.lang.Throwable): void;
							d(param0: string, param1: string): void;
							v(param0: string, param1: string): void;
							i(param0: string, param1: string): void;
							w(param0: string, param1: string): void;
							e(param0: string, param1: string): void;
							log(param0: number, param1: string, param2: string): void;
							log(param0: number, param1: string, param2: string, param3: boolean): void;
						});
						public constructor();
						public e(param0: string, param1: string, param2: java.lang.Throwable): void;
						public w(param0: string, param1: string): void;
						public v(param0: string, param1: string): void;
						public log(param0: number, param1: string, param2: string): void;
						public getLogLevel(): number;
						public w(param0: string, param1: string, param2: java.lang.Throwable): void;
						public log(param0: number, param1: string, param2: string, param3: boolean): void;
						public e(param0: string, param1: string): void;
						public isLoggable(param0: string, param1: number): boolean;
						public d(param0: string, param1: string): void;
						public i(param0: string, param1: string, param2: java.lang.Throwable): void;
						public d(param0: string, param1: string, param2: java.lang.Throwable): void;
						public v(param0: string, param1: string, param2: java.lang.Throwable): void;
						public setLogLevel(param0: number): void;
						public i(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class OAuthSigning {
						public static class: java.lang.Class<com.twitter.sdk.android.core.OAuthSigning>;
						public getAuthorizationHeader(param0: string, param1: string, param2: java.util.Map<string,string>): string;
						public getOAuthEchoHeaders(param0: string, param1: string, param2: java.util.Map<string,string>): java.util.Map<string,string>;
						public getOAuthEchoHeadersForVerifyCredentials(): java.util.Map<string,string>;
						public constructor(param0: com.twitter.sdk.android.core.TwitterAuthConfig, param1: com.twitter.sdk.android.core.TwitterAuthToken);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class PersistedSessionManager<T>  extends com.twitter.sdk.android.core.SessionManager<any> {
						public static class: java.lang.Class<com.twitter.sdk.android.core.PersistedSessionManager<any>>;
						public setSession(param0: number, param1: any): void;
						public clearActiveSession(): void;
						public clearSession(param0: number): void;
						public constructor(param0: com.twitter.sdk.android.core.internal.persistence.PreferenceStore, param1: com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<any>, param2: string, param3: string);
						public getSessionMap(): java.util.Map<java.lang.Long,any>;
						public setActiveSession(param0: any): void;
						public getActiveSession(): any;
						public getSession(param0: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class Result<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.twitter.sdk.android.core.Result<any>>;
						public data: T;
						public response: retrofit2.Response;
						public constructor(param0: T, param1: retrofit2.Response);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class Session<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.twitter.sdk.android.core.Session<any>>;
						public getAuthToken(): T;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: T, param1: number);
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class SessionManager<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.twitter.sdk.android.core.SessionManager<any>>;
						/**
						 * Constructs a new instance of the com.twitter.sdk.android.core.SessionManager<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getActiveSession(): T;
							setActiveSession(param0: T): void;
							clearActiveSession(): void;
							getSession(param0: number): T;
							setSession(param0: number, param1: T): void;
							clearSession(param0: number): void;
							getSessionMap(): java.util.Map<java.lang.Long,T>;
						});
						public constructor();
						public getSessionMap(): java.util.Map<java.lang.Long,T>;
						public getActiveSession(): T;
						public clearActiveSession(): void;
						public clearSession(param0: number): void;
						public getSession(param0: number): T;
						public setSession(param0: number, param1: T): void;
						public setActiveSession(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class Twitter {
						public static class: java.lang.Class<com.twitter.sdk.android.core.Twitter>;
						public static TAG: string;
						public getContext(param0: string): globalAndroid.content.Context;
						public getTwitterAuthConfig(): com.twitter.sdk.android.core.TwitterAuthConfig;
						public static isDebug(): boolean;
						public static getInstance(): com.twitter.sdk.android.core.Twitter;
						public getActivityLifecycleManager(): com.twitter.sdk.android.core.internal.ActivityLifecycleManager;
						public static initialize(param0: globalAndroid.content.Context): void;
						public getExecutorService(): java.util.concurrent.ExecutorService;
						public static getLogger(): com.twitter.sdk.android.core.Logger;
						public static initialize(param0: com.twitter.sdk.android.core.TwitterConfig): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterApiClient {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterApiClient>;
						public getMediaService(): com.twitter.sdk.android.core.services.MediaService;
						public constructor();
						public getSearchService(): com.twitter.sdk.android.core.services.SearchService;
						public getCollectionService(): com.twitter.sdk.android.core.services.CollectionService;
						public getFavoriteService(): com.twitter.sdk.android.core.services.FavoriteService;
						public getService(param0: java.lang.Class): any;
						public getListService(): com.twitter.sdk.android.core.services.ListService;
						public constructor(param0: okhttp3.OkHttpClient);
						public getStatusesService(): com.twitter.sdk.android.core.services.StatusesService;
						public getAccountService(): com.twitter.sdk.android.core.services.AccountService;
						public constructor(param0: com.twitter.sdk.android.core.TwitterSession);
						public constructor(param0: com.twitter.sdk.android.core.TwitterSession, param1: okhttp3.OkHttpClient);
						public getConfigurationService(): com.twitter.sdk.android.core.services.ConfigurationService;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterApiErrorConstants {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterApiErrorConstants>;
						public static RATE_LIMIT_EXCEEDED: number;
						public static COULD_NOT_AUTHENTICATE: number;
						public static CLIENT_NOT_PRIVILEGED: number;
						public static PAGE_NOT_EXIST: number;
						public static UNKNOWN_ERROR: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterApiException extends com.twitter.sdk.android.core.TwitterException {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterApiException>;
						public static DEFAULT_ERROR_CODE: number;
						public constructor(param0: retrofit2.Response);
						public getStatusCode(): number;
						public getErrorMessage(): string;
						public getTwitterRateLimit(): com.twitter.sdk.android.core.TwitterRateLimit;
						public static readApiError(param0: retrofit2.Response): com.twitter.sdk.android.core.models.ApiError;
						public getErrorCode(): number;
						public static readApiRateLimit(param0: retrofit2.Response): com.twitter.sdk.android.core.TwitterRateLimit;
						public getResponse(): retrofit2.Response;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterAuthConfig {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterAuthConfig>;
						public static DEFAULT_AUTH_REQUEST_CODE: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.twitter.sdk.android.core.TwitterAuthConfig>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getConsumerKey(): string;
						public constructor(param0: string, param1: string);
						public getConsumerSecret(): string;
						public getRequestCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterAuthException extends com.twitter.sdk.android.core.TwitterException {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterAuthException>;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterAuthToken extends com.twitter.sdk.android.core.AuthToken {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterAuthToken>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.twitter.sdk.android.core.TwitterAuthToken>;
						public token: string;
						public secret: string;
						public isExpired(): boolean;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterConfig {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterConfig>;
					}
					export module TwitterConfig {
						export class Builder {
							public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterConfig.Builder>;
							public debug(param0: boolean): com.twitter.sdk.android.core.TwitterConfig.Builder;
							public executorService(param0: java.util.concurrent.ExecutorService): com.twitter.sdk.android.core.TwitterConfig.Builder;
							public twitterAuthConfig(param0: com.twitter.sdk.android.core.TwitterAuthConfig): com.twitter.sdk.android.core.TwitterConfig.Builder;
							public build(): com.twitter.sdk.android.core.TwitterConfig;
							public logger(param0: com.twitter.sdk.android.core.Logger): com.twitter.sdk.android.core.TwitterConfig.Builder;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterContext {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterContext>;
						public getDatabasePath(param0: string): java.io.File;
						public getFilesDir(): java.io.File;
						public getSharedPreferences(param0: string, param1: number): globalAndroid.content.SharedPreferences;
						public openOrCreateDatabase(param0: string, param1: number, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory): globalAndroid.database.sqlite.SQLiteDatabase;
						public getCacheDir(): java.io.File;
						public getExternalFilesDir(param0: string): java.io.File;
						public openOrCreateDatabase(param0: string, param1: number, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: globalAndroid.database.DatabaseErrorHandler): globalAndroid.database.sqlite.SQLiteDatabase;
						public getExternalCacheDir(): java.io.File;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterCore {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterCore>;
						public static TAG: string;
						public static getInstance(): com.twitter.sdk.android.core.TwitterCore;
						public getGuestSessionProvider(): com.twitter.sdk.android.core.GuestSessionProvider;
						public getApiClient(param0: com.twitter.sdk.android.core.TwitterSession): com.twitter.sdk.android.core.TwitterApiClient;
						public addGuestApiClient(param0: com.twitter.sdk.android.core.TwitterApiClient): void;
						public getVersion(): string;
						public getGuestApiClient(): com.twitter.sdk.android.core.TwitterApiClient;
						public getAuthConfig(): com.twitter.sdk.android.core.TwitterAuthConfig;
						public getApiClient(): com.twitter.sdk.android.core.TwitterApiClient;
						public getIdentifier(): string;
						public addApiClient(param0: com.twitter.sdk.android.core.TwitterSession, param1: com.twitter.sdk.android.core.TwitterApiClient): void;
						public getSessionManager(): com.twitter.sdk.android.core.SessionManager<com.twitter.sdk.android.core.TwitterSession>;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterException {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterException>;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterRateLimit {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterRateLimit>;
						public getRemaining(): number;
						public getLimit(): number;
						public getReset(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export class TwitterSession extends com.twitter.sdk.android.core.Session<com.twitter.sdk.android.core.TwitterAuthToken> {
						public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterSession>;
						public static UNKNOWN_USER_ID: number;
						public static UNKNOWN_USER_NAME: string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getUserName(): string;
						public getUserId(): number;
						public constructor(param0: com.twitter.sdk.android.core.TwitterAuthToken, param1: number, param2: string);
						public constructor(param0: any, param1: number);
					}
					export module TwitterSession {
						export class Serializer extends com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<com.twitter.sdk.android.core.TwitterSession> {
							public static class: java.lang.Class<com.twitter.sdk.android.core.TwitterSession.Serializer>;
							public serialize(param0: com.twitter.sdk.android.core.TwitterSession): string;
							public deserialize(param0: string): any;
							public serialize(param0: any): string;
							public deserialize(param0: string): com.twitter.sdk.android.core.TwitterSession;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export abstract class AuthHandler {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.AuthHandler>;
							public requestCode: number;
							public handleOnActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
							public authorize(param0: globalAndroid.app.Activity): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class AuthState {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.AuthState>;
							public isAuthorizeInProgress(): boolean;
							public beginAuthorize(param0: globalAndroid.app.Activity, param1: com.twitter.sdk.android.core.identity.AuthHandler): boolean;
							public endAuthorize(): void;
							public getAuthHandler(): com.twitter.sdk.android.core.identity.AuthHandler;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class OAuthActivity implements com.twitter.sdk.android.core.identity.OAuthController.Listener {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthActivity>;
							public constructor();
							public onComplete(param0: number, param1: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onBackPressed(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class OAuthController extends com.twitter.sdk.android.core.identity.OAuthWebViewClient.Listener {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthController>;
							public onError(param0: com.twitter.sdk.android.core.identity.WebViewException): void;
							public handleAuthError(param0: number, param1: com.twitter.sdk.android.core.TwitterAuthException): void;
							public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
							public onSuccess(param0: globalAndroid.os.Bundle): void;
						}
						export module OAuthController {
							export class Listener {
								public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthController.Listener>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.identity.OAuthController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: number, param1: globalAndroid.content.Intent): void;
								});
								public constructor();
								public onComplete(param0: number, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class OAuthHandler extends com.twitter.sdk.android.core.identity.AuthHandler {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthHandler>;
							public authorize(param0: globalAndroid.app.Activity): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class OAuthWebChromeClient {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthWebChromeClient>;
							public onConsoleMessage(param0: globalAndroid.webkit.ConsoleMessage): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class OAuthWebViewClient {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthWebViewClient>;
							public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
							public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
							public onReceivedError(param0: globalAndroid.webkit.WebView, param1: number, param2: string, param3: string): void;
							public onReceivedSslError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.SslErrorHandler, param2: globalAndroid.net.http.SslError): void;
						}
						export module OAuthWebViewClient {
							export class Listener {
								public static class: java.lang.Class<com.twitter.sdk.android.core.identity.OAuthWebViewClient.Listener>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.identity.OAuthWebViewClient$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
									onSuccess(param0: globalAndroid.os.Bundle): void;
									onError(param0: com.twitter.sdk.android.core.identity.WebViewException): void;
								});
								public constructor();
								public onError(param0: com.twitter.sdk.android.core.identity.WebViewException): void;
								public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
								public onSuccess(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class SSOAuthHandler extends com.twitter.sdk.android.core.identity.AuthHandler {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.SSOAuthHandler>;
							public static availableSSOPackage(param0: globalAndroid.content.pm.PackageManager): string;
							public static isAvailable(param0: globalAndroid.content.Context): boolean;
							public authorize(param0: globalAndroid.app.Activity): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class TwitterAuthClient {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.TwitterAuthClient>;
							public constructor();
							public cancelAuthorize(): void;
							public requestEmail(param0: com.twitter.sdk.android.core.TwitterSession, param1: com.twitter.sdk.android.core.Callback<string>): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public getRequestCode(): number;
							public authorize(param0: globalAndroid.app.Activity, param1: com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.TwitterSession>): void;
						}
						export module TwitterAuthClient {
							export class AuthStateLazyHolder {
								public static class: java.lang.Class<com.twitter.sdk.android.core.identity.TwitterAuthClient.AuthStateLazyHolder>;
							}
							export class CallbackWrapper extends com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.TwitterSession> {
								public static class: java.lang.Class<com.twitter.sdk.android.core.identity.TwitterAuthClient.CallbackWrapper>;
								public success(param0: com.twitter.sdk.android.core.Result<any>): void;
								public success(param0: com.twitter.sdk.android.core.Result<com.twitter.sdk.android.core.TwitterSession>): void;
								public failure(param0: com.twitter.sdk.android.core.TwitterException): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class TwitterLoginButton {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.TwitterLoginButton>;
							public setCallback(param0: com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.TwitterSession>): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public getCallback(): com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.TwitterSession>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getActivity(): globalAndroid.app.Activity;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module TwitterLoginButton {
							export class LoginClickListener {
								public static class: java.lang.Class<com.twitter.sdk.android.core.identity.TwitterLoginButton.LoginClickListener>;
								public onClick(param0: globalAndroid.view.View): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module identity {
						export class WebViewException {
							public static class: java.lang.Class<com.twitter.sdk.android.core.identity.WebViewException>;
							public getFailingUrl(): string;
							public getErrorCode(): number;
							public getDescription(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class ActivityLifecycleManager {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.ActivityLifecycleManager>;
							public resetCallbacks(): void;
							public constructor(param0: globalAndroid.content.Context);
							public registerCallbacks(param0: com.twitter.sdk.android.core.internal.ActivityLifecycleManager.Callbacks): boolean;
						}
						export module ActivityLifecycleManager {
							export class ActivityLifecycleCallbacksWrapper {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.ActivityLifecycleManager.ActivityLifecycleCallbacksWrapper>;
							}
							export abstract class Callbacks {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.ActivityLifecycleManager.Callbacks>;
								public onActivityResumed(param0: globalAndroid.app.Activity): void;
								public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
								public onActivityPaused(param0: globalAndroid.app.Activity): void;
								public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
								public onActivityStopped(param0: globalAndroid.app.Activity): void;
								public constructor();
								public onActivityStarted(param0: globalAndroid.app.Activity): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class CommonUtils {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.CommonUtils>;
							public constructor();
							public static logControlled(param0: globalAndroid.content.Context, param1: string): void;
							public static logControlledError(param0: globalAndroid.content.Context, param1: string, param2: java.lang.Throwable): void;
							public static logControlled(param0: globalAndroid.content.Context, param1: number, param2: string, param3: string): void;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: androidNative.Array<number>): void;
							public static closeOrLog(param0: java.io.Closeable, param1: string): void;
							public static streamToString(param0: java.io.InputStream): string;
							public static getBooleanResourceValue(param0: globalAndroid.content.Context, param1: string, param2: boolean): boolean;
							public static getStringResourceValue(param0: globalAndroid.content.Context, param1: string, param2: string): string;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static logOrThrowIllegalStateException(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class CurrentTimeProvider {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.CurrentTimeProvider>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.internal.CurrentTimeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentTimeMillis(): number;
							});
							public constructor();
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class ExecutorUtils {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.ExecutorUtils>;
							public static buildThreadPoolExecutorService(param0: string): java.util.concurrent.ExecutorService;
							public static buildSingleThreadScheduledExecutorService(param0: string): java.util.concurrent.ScheduledExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class SessionMonitor<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.SessionMonitor<any>>;
							public monitorState: com.twitter.sdk.android.core.internal.SessionMonitor.MonitorState;
							public triggerVerificationIfNecessary(): void;
							public constructor(param0: com.twitter.sdk.android.core.SessionManager<T>, param1: java.util.concurrent.ExecutorService, param2: com.twitter.sdk.android.core.internal.SessionVerifier<T>);
							public verifyAll(): void;
							public monitorActivityLifecycle(param0: com.twitter.sdk.android.core.internal.ActivityLifecycleManager): void;
						}
						export module SessionMonitor {
							export class MonitorState {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.SessionMonitor.MonitorState>;
								public verifying: boolean;
								public lastVerification: number;
								public beginVerification(param0: number): boolean;
								public endVerification(param0: number): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class SessionVerifier<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.SessionVerifier<any>>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.internal.SessionVerifier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								verifySession(param0: T): void;
							});
							public constructor();
							public verifySession(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class SystemCurrentTimeProvider extends com.twitter.sdk.android.core.internal.CurrentTimeProvider {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.SystemCurrentTimeProvider>;
							public constructor();
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class TwitterApi {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.TwitterApi>;
							public static BASE_HOST: string;
							public static BASE_HOST_URL: string;
							public constructor();
							public static buildUserAgent(param0: string, param1: string): string;
							public constructor(param0: string);
							public getBaseHostUrl(): string;
							public buildUponBaseHostUrl(param0: androidNative.Array<string>): globalAndroid.net.Uri.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class TwitterApiConstants {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.TwitterApiConstants>;
							public constructor();
						}
						export module TwitterApiConstants {
							export class Errors {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.TwitterApiConstants.Errors>;
								public static APP_AUTH_ERROR_CODE: number;
								public static ALREADY_FAVORITED: number;
								public static ALREADY_UNFAVORITED: number;
								public static GUEST_AUTH_ERROR_CODE: number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class TwitterSessionVerifier extends com.twitter.sdk.android.core.internal.SessionVerifier<com.twitter.sdk.android.core.TwitterSession> {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.TwitterSessionVerifier>;
							public constructor();
							public verifySession(param0: any): void;
							public verifySession(param0: com.twitter.sdk.android.core.TwitterSession): void;
						}
						export module TwitterSessionVerifier {
							export class AccountServiceProvider {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.TwitterSessionVerifier.AccountServiceProvider>;
								public getAccountService(param0: com.twitter.sdk.android.core.TwitterSession): com.twitter.sdk.android.core.services.AccountService;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class UserUtils {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.UserUtils>;
							public static formatScreenName(param0: string): string;
							public static getProfileImageUrlHttps(param0: com.twitter.sdk.android.core.models.User, param1: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize): string;
						}
						export module UserUtils {
							export class AvatarSize {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.UserUtils.AvatarSize>;
								public static NORMAL: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static BIGGER: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static MINI: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static ORIGINAL: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static REASONABLY_SMALL: com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static valueOf(param0: string): com.twitter.sdk.android.core.internal.UserUtils.AvatarSize;
								public static values(): androidNative.Array<com.twitter.sdk.android.core.internal.UserUtils.AvatarSize>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export class VineCardUtils {
							public static class: java.lang.Class<com.twitter.sdk.android.core.internal.VineCardUtils>;
							public static PLAYER_CARD: string;
							public static VINE_CARD: string;
							public static VINE_USER_ID: number;
							public static getImageValue(param0: com.twitter.sdk.android.core.models.Card): com.twitter.sdk.android.core.models.ImageValue;
							public static getStreamUrl(param0: com.twitter.sdk.android.core.models.Card): string;
							public static isVine(param0: com.twitter.sdk.android.core.models.Card): boolean;
							public static getPublisherId(param0: com.twitter.sdk.android.core.models.Card): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class GuestAuthInterceptor {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.GuestAuthInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor(param0: com.twitter.sdk.android.core.GuestSessionProvider);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class GuestAuthNetworkInterceptor {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.GuestAuthNetworkInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class GuestAuthenticator {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.GuestAuthenticator>;
								public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
								public constructor(param0: com.twitter.sdk.android.core.GuestSessionProvider);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class OAuth1aInterceptor {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.OAuth1aInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor(param0: com.twitter.sdk.android.core.Session<any>, param1: com.twitter.sdk.android.core.TwitterAuthConfig);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class OkHttpClientHelper {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.OkHttpClientHelper>;
								public static getCustomOkHttpClient(param0: okhttp3.OkHttpClient, param1: com.twitter.sdk.android.core.Session<any>, param2: com.twitter.sdk.android.core.TwitterAuthConfig): okhttp3.OkHttpClient;
								public static getCertificatePinner(): okhttp3.CertificatePinner;
								public constructor();
								public static getOkHttpClient(param0: com.twitter.sdk.android.core.Session<any>, param1: com.twitter.sdk.android.core.TwitterAuthConfig): okhttp3.OkHttpClient;
								public static getCustomOkHttpClient(param0: okhttp3.OkHttpClient, param1: com.twitter.sdk.android.core.GuestSessionProvider): okhttp3.OkHttpClient;
								public static getOkHttpClient(param0: com.twitter.sdk.android.core.GuestSessionProvider): okhttp3.OkHttpClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module network {
							export class UrlUtils {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.network.UrlUtils>;
								public static UTF8: string;
								public static getQueryParams(param0: string, param1: boolean): java.util.TreeMap<string,string>;
								public static urlDecode(param0: string): string;
								public static getQueryParams(param0: java.net.URI, param1: boolean): java.util.TreeMap<string,string>;
								public static percentEncode(param0: string): string;
								public static urlEncode(param0: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class GuestAuthToken extends com.twitter.sdk.android.core.internal.oauth.OAuth2Token {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.GuestAuthToken>;
								public static HEADER_GUEST_TOKEN: string;
								public constructor(param0: string, param1: string, param2: string, param3: number);
								public constructor(param0: number);
								public constructor(param0: string, param1: string);
								public constructor(param0: string, param1: string, param2: number);
								public equals(param0: any): boolean;
								public isExpired(): boolean;
								public constructor();
								public constructor(param0: string, param1: string, param2: string);
								public hashCode(): number;
								public getGuestToken(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class GuestTokenResponse {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.GuestTokenResponse>;
								public guestToken: string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuth1aHeaders {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth1aHeaders>;
								public static HEADER_AUTH_SERVICE_PROVIDER: string;
								public static HEADER_AUTH_CREDENTIALS: string;
								public getOAuthEchoHeaders(param0: com.twitter.sdk.android.core.TwitterAuthConfig, param1: com.twitter.sdk.android.core.TwitterAuthToken, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): java.util.Map<string,string>;
								public getAuthorizationHeader(param0: com.twitter.sdk.android.core.TwitterAuthConfig, param1: com.twitter.sdk.android.core.TwitterAuthToken, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuth1aParameters {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth1aParameters>;
								public getAuthorizationHeader(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuth1aService extends com.twitter.sdk.android.core.internal.oauth.OAuthService {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth1aService>;
								public constructor(param0: com.twitter.sdk.android.core.TwitterCore, param1: com.twitter.sdk.android.core.internal.TwitterApi);
								public requestTempToken(param0: com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.internal.oauth.OAuthResponse>): void;
								public getAuthorizeUrl(param0: com.twitter.sdk.android.core.TwitterAuthToken): string;
								public buildCallbackUrl(param0: com.twitter.sdk.android.core.TwitterAuthConfig): string;
								public static parseAuthResponse(param0: string): com.twitter.sdk.android.core.internal.oauth.OAuthResponse;
								public requestAccessToken(param0: com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.internal.oauth.OAuthResponse>, param1: com.twitter.sdk.android.core.TwitterAuthToken, param2: string): void;
							}
							export module OAuth1aService {
								export class OAuthApi {
									public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth1aService.OAuthApi>;
									/**
									 * Constructs a new instance of the com.twitter.sdk.android.core.internal.oauth.OAuth1aService$OAuthApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getTempToken(param0: string): retrofit2.Call<okhttp3.ResponseBody>;
										getAccessToken(param0: string, param1: string): retrofit2.Call<okhttp3.ResponseBody>;
									});
									public constructor();
									public getTempToken(param0: string): retrofit2.Call<okhttp3.ResponseBody>;
									public getAccessToken(param0: string, param1: string): retrofit2.Call<okhttp3.ResponseBody>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuth2Service extends com.twitter.sdk.android.core.internal.oauth.OAuthService {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth2Service>;
								public constructor(param0: com.twitter.sdk.android.core.TwitterCore, param1: com.twitter.sdk.android.core.internal.TwitterApi);
								public requestGuestAuthToken(param0: com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.internal.oauth.GuestAuthToken>): void;
							}
							export module OAuth2Service {
								export class OAuth2Api {
									public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth2Service.OAuth2Api>;
									/**
									 * Constructs a new instance of the com.twitter.sdk.android.core.internal.oauth.OAuth2Service$OAuth2Api interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getGuestToken(param0: string): retrofit2.Call<com.twitter.sdk.android.core.internal.oauth.GuestTokenResponse>;
										getAppAuthToken(param0: string, param1: string): retrofit2.Call<com.twitter.sdk.android.core.internal.oauth.OAuth2Token>;
									});
									public constructor();
									public getGuestToken(param0: string): retrofit2.Call<com.twitter.sdk.android.core.internal.oauth.GuestTokenResponse>;
									public getAppAuthToken(param0: string, param1: string): retrofit2.Call<com.twitter.sdk.android.core.internal.oauth.OAuth2Token>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuth2Token extends com.twitter.sdk.android.core.AuthToken {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuth2Token>;
								public static TOKEN_TYPE_BEARER: string;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.twitter.sdk.android.core.internal.oauth.OAuth2Token>;
								public constructor(param0: number);
								public describeContents(): number;
								public getAccessToken(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: string, param1: string, param2: number);
								public getTokenType(): string;
								public equals(param0: any): boolean;
								public isExpired(): boolean;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuthConstants {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuthConstants>;
								public static HEADER_AUTHORIZATION: string;
								public static HEADER_GUEST_TOKEN: string;
								public static PARAM_CALLBACK: string;
								public static PARAM_CONSUMER_KEY: string;
								public static PARAM_NONCE: string;
								public static PARAM_SIGNATURE_METHOD: string;
								public static PARAM_TIMESTAMP: string;
								public static PARAM_TOKEN: string;
								public static PARAM_TOKEN_SECRET: string;
								public static PARAM_VERSION: string;
								public static PARAM_SIGNATURE: string;
								public static PARAM_VERIFIER: string;
								public static AUTHORIZATION_BASIC: string;
								public static AUTHORIZATION_BEARER: string;
								public static PARAM_GRANT_TYPE: string;
								public static GRANT_TYPE_CLIENT_CREDENTIALS: string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export class OAuthResponse {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuthResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.twitter.sdk.android.core.internal.oauth.OAuthResponse>;
								public authToken: com.twitter.sdk.android.core.TwitterAuthToken;
								public userName: string;
								public userId: number;
								public toString(): string;
								public describeContents(): number;
								public constructor(param0: com.twitter.sdk.android.core.TwitterAuthToken, param1: string, param2: number);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module oauth {
							export abstract class OAuthService {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.oauth.OAuthService>;
								public getUserAgent(): string;
								public getApi(): com.twitter.sdk.android.core.internal.TwitterApi;
								public getRetrofit(): retrofit2.Retrofit;
								public getTwitterCore(): com.twitter.sdk.android.core.TwitterCore;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class FileStore {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.FileStore>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.internal.persistence.FileStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCacheDir(): java.io.File;
									getExternalCacheDir(): java.io.File;
									getFilesDir(): java.io.File;
									getExternalFilesDir(): java.io.File;
								});
								public constructor();
								public getExternalFilesDir(): java.io.File;
								public getExternalCacheDir(): java.io.File;
								public getCacheDir(): java.io.File;
								public getFilesDir(): java.io.File;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class FileStoreImpl extends com.twitter.sdk.android.core.internal.persistence.FileStore {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.FileStoreImpl>;
								public getExternalFilesDir(): java.io.File;
								public getExternalCacheDir(): java.io.File;
								public getCacheDir(): java.io.File;
								public getFilesDir(): java.io.File;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class PersistenceStrategy<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.PersistenceStrategy<any>>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.internal.persistence.PersistenceStrategy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									save(param0: T): void;
									restore(): T;
									clear(): void;
								});
								public constructor();
								public clear(): void;
								public save(param0: T): void;
								public restore(): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class PreferenceStore {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.PreferenceStore>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.internal.persistence.PreferenceStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									get(): globalAndroid.content.SharedPreferences;
									edit(): globalAndroid.content.SharedPreferences.Editor;
									save(param0: globalAndroid.content.SharedPreferences.Editor): boolean;
								});
								public constructor();
								public get(): globalAndroid.content.SharedPreferences;
								public save(param0: globalAndroid.content.SharedPreferences.Editor): boolean;
								public edit(): globalAndroid.content.SharedPreferences.Editor;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class PreferenceStoreImpl extends com.twitter.sdk.android.core.internal.persistence.PreferenceStore {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.PreferenceStoreImpl>;
								public constructor(param0: globalAndroid.content.Context, param1: string);
								public get(): globalAndroid.content.SharedPreferences;
								public save(param0: globalAndroid.content.SharedPreferences.Editor): boolean;
								public edit(): globalAndroid.content.SharedPreferences.Editor;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class PreferenceStoreStrategy<T>  extends com.twitter.sdk.android.core.internal.persistence.PersistenceStrategy<any> {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.PreferenceStoreStrategy<any>>;
								public restore(): any;
								public clear(): void;
								public save(param0: any): void;
								public constructor(param0: com.twitter.sdk.android.core.internal.persistence.PreferenceStore, param1: com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<any>, param2: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module internal {
						export module persistence {
							export class SerializationStrategy<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<any>>;
								/**
								 * Constructs a new instance of the com.twitter.sdk.android.core.internal.persistence.SerializationStrategy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									serialize(param0: T): string;
									deserialize(param0: string): T;
								});
								public constructor();
								public deserialize(param0: string): T;
								public serialize(param0: T): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class ApiError {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.ApiError>;
							public message: string;
							public code: number;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class ApiErrors {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.ApiErrors>;
							public errors: java.util.List<com.twitter.sdk.android.core.models.ApiError>;
							public constructor(param0: java.util.List<com.twitter.sdk.android.core.models.ApiError>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class BindingValues {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.BindingValues>;
							public constructor();
							public get(param0: string): any;
							public constructor(param0: java.util.Map<string,any>);
							public containsKey(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class BindingValuesAdapter extends java.lang.Object {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.BindingValuesAdapter>;
							public constructor();
							public serialize(param0: com.twitter.sdk.android.core.models.BindingValues, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.twitter.sdk.android.core.models.BindingValues;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Card {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Card>;
							public bindingValues: com.twitter.sdk.android.core.models.BindingValues;
							public name: string;
							public constructor(param0: com.twitter.sdk.android.core.models.BindingValues, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Configuration {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Configuration>;
							public dmTextCharacterLimit: number;
							public nonUsernamePaths: java.util.List<string>;
							public photoSizeLimit: number;
							public photoSizes: com.twitter.sdk.android.core.models.MediaEntity.Sizes;
							public shortUrlLengthHttps: number;
							public constructor(param0: number, param1: java.util.List<string>, param2: number, param3: com.twitter.sdk.android.core.models.MediaEntity.Sizes, param4: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Coordinates {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Coordinates>;
							public static INDEX_LONGITUDE: number;
							public static INDEX_LATITUDE: number;
							public coordinates: java.util.List<java.lang.Double>;
							public type: string;
							public getLatitude(): java.lang.Double;
							public getLongitude(): java.lang.Double;
							public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Entity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Entity>;
							public indices: java.util.List<java.lang.Integer>;
							public getStart(): number;
							public getEnd(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class HashtagEntity extends com.twitter.sdk.android.core.models.Entity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.HashtagEntity>;
							public text: string;
							public constructor(param0: string, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Identifiable {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Identifiable>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.models.Identifiable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(): number;
							});
							public constructor();
							public getId(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Image {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Image>;
							public w: number;
							public h: number;
							public imageType: string;
							public constructor(param0: number, param1: number, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class ImageValue {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.ImageValue>;
							public height: number;
							public width: number;
							public url: string;
							public alt: string;
							public constructor(param0: number, param1: number, param2: string, param3: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Media {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Media>;
							public mediaId: number;
							public mediaIdString: string;
							public size: number;
							public image: com.twitter.sdk.android.core.models.Image;
							public constructor(param0: number, param1: string, param2: number, param3: com.twitter.sdk.android.core.models.Image);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class MediaEntity extends com.twitter.sdk.android.core.models.UrlEntity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.MediaEntity>;
							public id: number;
							public idStr: string;
							public mediaUrl: string;
							public mediaUrlHttps: string;
							public sizes: com.twitter.sdk.android.core.models.MediaEntity.Sizes;
							public sourceStatusId: number;
							public sourceStatusIdStr: string;
							public type: string;
							public videoInfo: com.twitter.sdk.android.core.models.VideoInfo;
							public altText: string;
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string, param7: string, param8: string, param9: com.twitter.sdk.android.core.models.MediaEntity.Sizes, param10: number, param11: string, param12: string, param13: com.twitter.sdk.android.core.models.VideoInfo, param14: string);
						}
						export module MediaEntity {
							export class Size {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.MediaEntity.Size>;
								public w: number;
								public h: number;
								public resize: string;
								public constructor(param0: number, param1: number, param2: string);
							}
							export class Sizes {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.MediaEntity.Sizes>;
								public medium: com.twitter.sdk.android.core.models.MediaEntity.Size;
								public thumb: com.twitter.sdk.android.core.models.MediaEntity.Size;
								public small: com.twitter.sdk.android.core.models.MediaEntity.Size;
								public large: com.twitter.sdk.android.core.models.MediaEntity.Size;
								public constructor(param0: com.twitter.sdk.android.core.models.MediaEntity.Size, param1: com.twitter.sdk.android.core.models.MediaEntity.Size, param2: com.twitter.sdk.android.core.models.MediaEntity.Size, param3: com.twitter.sdk.android.core.models.MediaEntity.Size);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class MentionEntity extends com.twitter.sdk.android.core.models.Entity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.MentionEntity>;
							public id: number;
							public idStr: string;
							public name: string;
							public screenName: string;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: number, param5: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class ModelUtils {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.ModelUtils>;
							public static getSafeList(param0: java.util.List): java.util.List;
							public static getSafeMap(param0: java.util.Map): java.util.Map;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Place {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Place>;
							public attributes: java.util.Map<string,string>;
							public boundingBox: com.twitter.sdk.android.core.models.Place.BoundingBox;
							public country: string;
							public countryCode: string;
							public fullName: string;
							public id: string;
							public name: string;
							public placeType: string;
							public url: string;
							public constructor(param0: java.util.Map<string,string>, param1: com.twitter.sdk.android.core.models.Place.BoundingBox, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
						}
						export module Place {
							export class BoundingBox {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.Place.BoundingBox>;
								public coordinates: java.util.List<java.util.List<java.util.List<java.lang.Double>>>;
								public type: string;
								public constructor(param0: java.util.List<java.util.List<java.util.List<java.lang.Double>>>, param1: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class SafeListAdapter {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.SafeListAdapter>;
							public constructor();
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class SafeMapAdapter {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.SafeMapAdapter>;
							public constructor();
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Search {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Search>;
							public tweets: java.util.List<com.twitter.sdk.android.core.models.Tweet>;
							public searchMetadata: com.twitter.sdk.android.core.models.SearchMetadata;
							public constructor(param0: java.util.List<com.twitter.sdk.android.core.models.Tweet>, param1: com.twitter.sdk.android.core.models.SearchMetadata);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class SearchMetadata {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.SearchMetadata>;
							public maxId: number;
							public sinceId: number;
							public refreshUrl: string;
							public nextResults: string;
							public count: number;
							public completedIn: number;
							public sinceIdStr: string;
							public query: string;
							public maxIdStr: string;
							public constructor(param0: number, param1: number, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class SymbolEntity extends com.twitter.sdk.android.core.models.Entity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.SymbolEntity>;
							public text: string;
							public constructor(param0: string, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class Tweet extends com.twitter.sdk.android.core.models.Identifiable {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.Tweet>;
							public static INVALID_ID: number;
							public coordinates: com.twitter.sdk.android.core.models.Coordinates;
							public createdAt: string;
							public currentUserRetweet: any;
							public entities: com.twitter.sdk.android.core.models.TweetEntities;
							public extendedEntities: com.twitter.sdk.android.core.models.TweetEntities;
							public favoriteCount: java.lang.Integer;
							public favorited: boolean;
							public filterLevel: string;
							public id: number;
							public idStr: string;
							public inReplyToScreenName: string;
							public inReplyToStatusId: number;
							public inReplyToStatusIdStr: string;
							public inReplyToUserId: number;
							public inReplyToUserIdStr: string;
							public lang: string;
							public place: com.twitter.sdk.android.core.models.Place;
							public possiblySensitive: boolean;
							public scopes: any;
							public quotedStatusId: number;
							public quotedStatusIdStr: string;
							public quotedStatus: com.twitter.sdk.android.core.models.Tweet;
							public retweetCount: number;
							public retweeted: boolean;
							public retweetedStatus: com.twitter.sdk.android.core.models.Tweet;
							public source: string;
							public text: string;
							public displayTextRange: java.util.List<java.lang.Integer>;
							public truncated: boolean;
							public user: com.twitter.sdk.android.core.models.User;
							public withheldCopyright: boolean;
							public withheldInCountries: java.util.List<string>;
							public withheldScope: string;
							public card: com.twitter.sdk.android.core.models.Card;
							public constructor(param0: com.twitter.sdk.android.core.models.Coordinates, param1: string, param2: any, param3: com.twitter.sdk.android.core.models.TweetEntities, param4: com.twitter.sdk.android.core.models.TweetEntities, param5: java.lang.Integer, param6: boolean, param7: string, param8: number, param9: string, param10: string, param11: number, param12: string, param13: number, param14: string, param15: string, param16: com.twitter.sdk.android.core.models.Place, param17: boolean, param18: any, param19: number, param20: string, param21: com.twitter.sdk.android.core.models.Tweet, param22: number, param23: boolean, param24: com.twitter.sdk.android.core.models.Tweet, param25: string, param26: string, param27: java.util.List<java.lang.Integer>, param28: boolean, param29: com.twitter.sdk.android.core.models.User, param30: boolean, param31: java.util.List<string>, param32: string, param33: com.twitter.sdk.android.core.models.Card);
							public hashCode(): number;
							public getId(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class TweetBuilder {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.TweetBuilder>;
							public setCoordinates(param0: com.twitter.sdk.android.core.models.Coordinates): com.twitter.sdk.android.core.models.TweetBuilder;
							public setRetweetedStatus(param0: com.twitter.sdk.android.core.models.Tweet): com.twitter.sdk.android.core.models.TweetBuilder;
							public setUser(param0: com.twitter.sdk.android.core.models.User): com.twitter.sdk.android.core.models.TweetBuilder;
							public setLang(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setCurrentUserRetweet(param0: any): com.twitter.sdk.android.core.models.TweetBuilder;
							public setId(param0: number): com.twitter.sdk.android.core.models.TweetBuilder;
							public setInReplyToStatusId(param0: number): com.twitter.sdk.android.core.models.TweetBuilder;
							public setEntities(param0: com.twitter.sdk.android.core.models.TweetEntities): com.twitter.sdk.android.core.models.TweetBuilder;
							public setPossiblySensitive(param0: boolean): com.twitter.sdk.android.core.models.TweetBuilder;
							public setInReplyToUserId(param0: number): com.twitter.sdk.android.core.models.TweetBuilder;
							public setWithheldCopyright(param0: boolean): com.twitter.sdk.android.core.models.TweetBuilder;
							public setInReplyToStatusIdStr(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setWithheldInCountries(param0: java.util.List<string>): com.twitter.sdk.android.core.models.TweetBuilder;
							public setFilterLevel(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setExtendedEntities(param0: com.twitter.sdk.android.core.models.TweetEntities): com.twitter.sdk.android.core.models.TweetBuilder;
							public setFavoriteCount(param0: java.lang.Integer): com.twitter.sdk.android.core.models.TweetBuilder;
							public setPlace(param0: com.twitter.sdk.android.core.models.Place): com.twitter.sdk.android.core.models.TweetBuilder;
							public setWithheldScope(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setCreatedAt(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setFavorited(param0: boolean): com.twitter.sdk.android.core.models.TweetBuilder;
							public setSource(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public constructor();
							public setInReplyToUserIdStr(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setDisplayTextRange(param0: java.util.List<java.lang.Integer>): com.twitter.sdk.android.core.models.TweetBuilder;
							public setRetweeted(param0: boolean): com.twitter.sdk.android.core.models.TweetBuilder;
							public setInReplyToScreenName(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setQuotedStatus(param0: com.twitter.sdk.android.core.models.Tweet): com.twitter.sdk.android.core.models.TweetBuilder;
							public setQuotedStatusIdStr(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setText(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public build(): com.twitter.sdk.android.core.models.Tweet;
							public copy(param0: com.twitter.sdk.android.core.models.Tweet): com.twitter.sdk.android.core.models.TweetBuilder;
							public setRetweetCount(param0: number): com.twitter.sdk.android.core.models.TweetBuilder;
							public setIdStr(param0: string): com.twitter.sdk.android.core.models.TweetBuilder;
							public setQuotedStatusId(param0: number): com.twitter.sdk.android.core.models.TweetBuilder;
							public setTruncated(param0: boolean): com.twitter.sdk.android.core.models.TweetBuilder;
							public setCard(param0: com.twitter.sdk.android.core.models.Card): com.twitter.sdk.android.core.models.TweetBuilder;
							public setScopes(param0: any): com.twitter.sdk.android.core.models.TweetBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class TweetEntities {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.TweetEntities>;
							public urls: java.util.List<com.twitter.sdk.android.core.models.UrlEntity>;
							public userMentions: java.util.List<com.twitter.sdk.android.core.models.MentionEntity>;
							public media: java.util.List<com.twitter.sdk.android.core.models.MediaEntity>;
							public hashtags: java.util.List<com.twitter.sdk.android.core.models.HashtagEntity>;
							public symbols: java.util.List<com.twitter.sdk.android.core.models.SymbolEntity>;
							public constructor(param0: java.util.List<com.twitter.sdk.android.core.models.UrlEntity>, param1: java.util.List<com.twitter.sdk.android.core.models.MentionEntity>, param2: java.util.List<com.twitter.sdk.android.core.models.MediaEntity>, param3: java.util.List<com.twitter.sdk.android.core.models.HashtagEntity>, param4: java.util.List<com.twitter.sdk.android.core.models.SymbolEntity>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class TwitterCollection {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection>;
							public contents: com.twitter.sdk.android.core.models.TwitterCollection.Content;
							public metadata: com.twitter.sdk.android.core.models.TwitterCollection.Metadata;
							public constructor(param0: com.twitter.sdk.android.core.models.TwitterCollection.Content, param1: com.twitter.sdk.android.core.models.TwitterCollection.Metadata);
						}
						export module TwitterCollection {
							export class Content {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection.Content>;
								public tweetMap: java.util.Map<java.lang.Long,com.twitter.sdk.android.core.models.Tweet>;
								public userMap: java.util.Map<java.lang.Long,com.twitter.sdk.android.core.models.User>;
								public constructor(param0: java.util.Map<java.lang.Long,com.twitter.sdk.android.core.models.Tweet>, param1: java.util.Map<java.lang.Long,com.twitter.sdk.android.core.models.User>);
							}
							export class Metadata {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection.Metadata>;
								public timelineId: string;
								public position: com.twitter.sdk.android.core.models.TwitterCollection.Metadata.Position;
								public timelineItems: java.util.List<com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem>;
								public constructor(param0: string, param1: com.twitter.sdk.android.core.models.TwitterCollection.Metadata.Position, param2: java.util.List<com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem>);
							}
							export module Metadata {
								export class Position {
									public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection.Metadata.Position>;
									public minPosition: java.lang.Long;
									public maxPosition: java.lang.Long;
									public constructor(param0: java.lang.Long, param1: java.lang.Long);
								}
							}
							export class TimelineItem {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem>;
								public tweetItem: com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem.TweetItem;
								public constructor(param0: com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem.TweetItem);
							}
							export module TimelineItem {
								export class TweetItem {
									public static class: java.lang.Class<com.twitter.sdk.android.core.models.TwitterCollection.TimelineItem.TweetItem>;
									public id: java.lang.Long;
									public constructor(param0: java.lang.Long);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class UrlEntity extends com.twitter.sdk.android.core.models.Entity {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.UrlEntity>;
							public url: string;
							public expandedUrl: string;
							public displayUrl: string;
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class User extends com.twitter.sdk.android.core.models.Identifiable {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.User>;
							public static INVALID_ID: number;
							public contributorsEnabled: boolean;
							public createdAt: string;
							public defaultProfile: boolean;
							public defaultProfileImage: boolean;
							public description: string;
							public email: string;
							public entities: com.twitter.sdk.android.core.models.UserEntities;
							public favouritesCount: number;
							public followRequestSent: boolean;
							public followersCount: number;
							public friendsCount: number;
							public geoEnabled: boolean;
							public id: number;
							public idStr: string;
							public isTranslator: boolean;
							public lang: string;
							public listedCount: number;
							public location: string;
							public name: string;
							public profileBackgroundColor: string;
							public profileBackgroundImageUrl: string;
							public profileBackgroundImageUrlHttps: string;
							public profileBackgroundTile: boolean;
							public profileBannerUrl: string;
							public profileImageUrl: string;
							public profileImageUrlHttps: string;
							public profileLinkColor: string;
							public profileSidebarBorderColor: string;
							public profileSidebarFillColor: string;
							public profileTextColor: string;
							public profileUseBackgroundImage: boolean;
							public protectedUser: boolean;
							public screenName: string;
							public showAllInlineMedia: boolean;
							public status: com.twitter.sdk.android.core.models.Tweet;
							public statusesCount: number;
							public timeZone: string;
							public url: string;
							public utcOffset: number;
							public verified: boolean;
							public withheldInCountries: java.util.List<string>;
							public withheldScope: string;
							public getId(): number;
							public constructor(param0: boolean, param1: string, param2: boolean, param3: boolean, param4: string, param5: string, param6: com.twitter.sdk.android.core.models.UserEntities, param7: number, param8: boolean, param9: number, param10: number, param11: boolean, param12: number, param13: string, param14: boolean, param15: string, param16: number, param17: string, param18: string, param19: string, param20: string, param21: string, param22: boolean, param23: string, param24: string, param25: string, param26: string, param27: string, param28: string, param29: string, param30: boolean, param31: boolean, param32: string, param33: boolean, param34: com.twitter.sdk.android.core.models.Tweet, param35: number, param36: string, param37: string, param38: number, param39: boolean, param40: java.util.List<string>, param41: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class UserBuilder {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.UserBuilder>;
							public setShowAllInlineMedia(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setUrl(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setIsTranslator(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileLinkColor(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setWithheldInCountries(param0: java.util.List<string>): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileBackgroundImageUrl(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setFriendsCount(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setLang(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileBackgroundImageUrlHttps(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setDefaultProfile(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setScreenName(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setFavouritesCount(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setFollowRequestSent(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setLocation(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setContributorsEnabled(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setVerified(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setWithheldScope(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setDefaultProfileImage(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileUseBackgroundImage(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public constructor();
							public setId(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setGeoEnabled(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setCreatedAt(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileImageUrl(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileSidebarBorderColor(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setListedCount(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public build(): com.twitter.sdk.android.core.models.User;
							public setProfileBackgroundColor(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileTextColor(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProtectedUser(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setUtcOffset(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setDescription(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setEntities(param0: com.twitter.sdk.android.core.models.UserEntities): com.twitter.sdk.android.core.models.UserBuilder;
							public setIdStr(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setName(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileBannerUrl(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setTimeZone(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setEmail(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setFollowersCount(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileImageUrlHttps(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileBackgroundTile(param0: boolean): com.twitter.sdk.android.core.models.UserBuilder;
							public setStatusesCount(param0: number): com.twitter.sdk.android.core.models.UserBuilder;
							public setProfileSidebarFillColor(param0: string): com.twitter.sdk.android.core.models.UserBuilder;
							public setStatus(param0: com.twitter.sdk.android.core.models.Tweet): com.twitter.sdk.android.core.models.UserBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class UserEntities {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.UserEntities>;
							public url: com.twitter.sdk.android.core.models.UserEntities.UrlEntities;
							public description: com.twitter.sdk.android.core.models.UserEntities.UrlEntities;
							public constructor(param0: com.twitter.sdk.android.core.models.UserEntities.UrlEntities, param1: com.twitter.sdk.android.core.models.UserEntities.UrlEntities);
						}
						export module UserEntities {
							export class UrlEntities {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.UserEntities.UrlEntities>;
								public urls: java.util.List<com.twitter.sdk.android.core.models.UrlEntity>;
								public constructor(param0: java.util.List<com.twitter.sdk.android.core.models.UrlEntity>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class UserValue {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.UserValue>;
							public idStr: string;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module models {
						export class VideoInfo {
							public static class: java.lang.Class<com.twitter.sdk.android.core.models.VideoInfo>;
							public aspectRatio: java.util.List<java.lang.Integer>;
							public durationMillis: number;
							public variants: java.util.List<com.twitter.sdk.android.core.models.VideoInfo.Variant>;
							public constructor(param0: java.util.List<java.lang.Integer>, param1: number, param2: java.util.List<com.twitter.sdk.android.core.models.VideoInfo.Variant>);
						}
						export module VideoInfo {
							export class Variant {
								public static class: java.lang.Class<com.twitter.sdk.android.core.models.VideoInfo.Variant>;
								public bitrate: number;
								public contentType: string;
								public url: string;
								public constructor(param0: number, param1: string, param2: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class AccountService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.AccountService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.AccountService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								verifyCredentials(param0: java.lang.Boolean, param1: java.lang.Boolean, param2: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.User>;
							});
							public constructor();
							public verifyCredentials(param0: java.lang.Boolean, param1: java.lang.Boolean, param2: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.User>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class CollectionService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.CollectionService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.CollectionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								collection(param0: string, param1: java.lang.Integer, param2: java.lang.Long, param3: java.lang.Long): retrofit2.Call<com.twitter.sdk.android.core.models.TwitterCollection>;
							});
							public constructor();
							public collection(param0: string, param1: java.lang.Integer, param2: java.lang.Long, param3: java.lang.Long): retrofit2.Call<com.twitter.sdk.android.core.models.TwitterCollection>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class ConfigurationService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.ConfigurationService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.ConfigurationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								configuration(): retrofit2.Call<com.twitter.sdk.android.core.models.Configuration>;
							});
							public constructor();
							public configuration(): retrofit2.Call<com.twitter.sdk.android.core.models.Configuration>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class FavoriteService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.FavoriteService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.FavoriteService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								list(param0: java.lang.Long, param1: string, param2: java.lang.Integer, param3: string, param4: string, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								destroy(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
								create(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							});
							public constructor();
							public destroy(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public create(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public list(param0: java.lang.Long, param1: string, param2: java.lang.Integer, param3: string, param4: string, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class ListService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.ListService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.ListService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								statuses(param0: java.lang.Long, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long, param5: java.lang.Long, param6: java.lang.Integer, param7: java.lang.Boolean, param8: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							});
							public constructor();
							public statuses(param0: java.lang.Long, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long, param5: java.lang.Long, param6: java.lang.Integer, param7: java.lang.Boolean, param8: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class MediaService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.MediaService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.MediaService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								upload(param0: okhttp3.RequestBody, param1: okhttp3.RequestBody, param2: okhttp3.RequestBody): retrofit2.Call<com.twitter.sdk.android.core.models.Media>;
							});
							public constructor();
							public upload(param0: okhttp3.RequestBody, param1: okhttp3.RequestBody, param2: okhttp3.RequestBody): retrofit2.Call<com.twitter.sdk.android.core.models.Media>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class SearchService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.SearchService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.SearchService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								tweets(param0: string, param1: com.twitter.sdk.android.core.services.params.Geocode, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: string, param7: java.lang.Long, param8: java.lang.Long, param9: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Search>;
							});
							public constructor();
							public tweets(param0: string, param1: com.twitter.sdk.android.core.services.params.Geocode, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: string, param7: java.lang.Long, param8: java.lang.Long, param9: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Search>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export class StatusesService {
							public static class: java.lang.Class<com.twitter.sdk.android.core.services.StatusesService>;
							/**
							 * Constructs a new instance of the com.twitter.sdk.android.core.services.StatusesService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								mentionsTimeline(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								userTimeline(param0: java.lang.Long, param1: string, param2: java.lang.Integer, param3: java.lang.Long, param4: java.lang.Long, param5: java.lang.Boolean, param6: java.lang.Boolean, param7: java.lang.Boolean, param8: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								homeTimeline(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean, param6: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								retweetsOfMe(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								show(param0: java.lang.Long, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
								lookup(param0: string, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
								update(param0: string, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Double, param4: java.lang.Double, param5: string, param6: java.lang.Boolean, param7: java.lang.Boolean, param8: string): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
								retweet(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
								destroy(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
								unretweet(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							});
							public constructor();
							public mentionsTimeline(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							public lookup(param0: string, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							public update(param0: string, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Double, param4: java.lang.Double, param5: string, param6: java.lang.Boolean, param7: java.lang.Boolean, param8: string): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public userTimeline(param0: java.lang.Long, param1: string, param2: java.lang.Integer, param3: java.lang.Long, param4: java.lang.Long, param5: java.lang.Boolean, param6: java.lang.Boolean, param7: java.lang.Boolean, param8: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							public retweetsOfMe(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							public show(param0: java.lang.Long, param1: java.lang.Boolean, param2: java.lang.Boolean, param3: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public destroy(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public unretweet(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
							public homeTimeline(param0: java.lang.Integer, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: java.lang.Boolean, param6: java.lang.Boolean): retrofit2.Call<java.util.List<com.twitter.sdk.android.core.models.Tweet>>;
							public retweet(param0: java.lang.Long, param1: java.lang.Boolean): retrofit2.Call<com.twitter.sdk.android.core.models.Tweet>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module twitter {
		export module sdk {
			export module android {
				export module core {
					export module services {
						export module params {
							export class Geocode {
								public static class: java.lang.Class<com.twitter.sdk.android.core.services.params.Geocode>;
								public latitude: number;
								public longitude: number;
								public radius: number;
								public distance: com.twitter.sdk.android.core.services.params.Geocode.Distance;
								public toString(): string;
								public constructor(param0: number, param1: number, param2: number, param3: com.twitter.sdk.android.core.services.params.Geocode.Distance);
							}
							export module Geocode {
								export class Distance {
									public static class: java.lang.Class<com.twitter.sdk.android.core.services.params.Geocode.Distance>;
									public static MILES: com.twitter.sdk.android.core.services.params.Geocode.Distance;
									public static KILOMETERS: com.twitter.sdk.android.core.services.params.Geocode.Distance;
									public identifier: string;
									public static values(): androidNative.Array<com.twitter.sdk.android.core.services.params.Geocode.Distance>;
									public static valueOf(param0: string): com.twitter.sdk.android.core.services.params.Geocode.Distance;
								}
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.twitter.sdk.android.core.Callback:1
//com.twitter.sdk.android.core.PersistedSessionManager:1
//com.twitter.sdk.android.core.Result:1
//com.twitter.sdk.android.core.Session:1
//com.twitter.sdk.android.core.SessionManager:1
//com.twitter.sdk.android.core.internal.SessionMonitor:1
//com.twitter.sdk.android.core.internal.SessionVerifier:1
//com.twitter.sdk.android.core.internal.persistence.PersistenceStrategy:1
//com.twitter.sdk.android.core.internal.persistence.PreferenceStoreStrategy:1
//com.twitter.sdk.android.core.internal.persistence.SerializationStrategy:1

