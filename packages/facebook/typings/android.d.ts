declare module com {
	export module facebook {
		export class AccessToken {
			public static class: java.lang.Class<com.facebook.AccessToken>;
			public static ACCESS_TOKEN_KEY: string;
			public static EXPIRES_IN_KEY: string;
			public static USER_ID_KEY: string;
			public static DATA_ACCESS_EXPIRATION_TIME: string;
			public static GRAPH_DOMAIN: string;
			public static DEFAULT_GRAPH_DOMAIN: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AccessToken>;
			public static Companion: com.facebook.AccessToken.Companion;
			public equals(param0: any): boolean;
			public getPermissions(): java.util.Set<string>;
			public isDataAccessExpired(): boolean;
			public isInstagramToken(): boolean;
			public static isLoggedInWithInstagram(): boolean;
			public static getPermissionsFromBundle$facebook_core_release(param0: globalAndroid.os.Bundle, param1: string): java.util.List<string>;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date, param10: string);
			public static refreshCurrentAccessTokenAsync(): void;
			public static createFromRefresh$facebook_core_release(param0: com.facebook.AccessToken, param1: globalAndroid.os.Bundle): com.facebook.AccessToken;
			public getExpires(): java.util.Date;
			public getUserId(): string;
			public isExpired(): boolean;
			public static isCurrentAccessTokenActive(): boolean;
			public static createFromNativeLinkingIntent(param0: globalAndroid.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
			public static createFromJSONObject$facebook_core_release(param0: org.json.JSONObject): com.facebook.AccessToken;
			public getDeclinedPermissions(): java.util.Set<string>;
			public getGraphDomain(): string;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date);
			public getToken(): string;
			public getExpiredPermissions(): java.util.Set<string>;
			public getApplicationId(): string;
			public static isDataAccessActive(): boolean;
			public static refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: globalAndroid.os.Parcel);
			public static createFromLegacyCache$facebook_core_release(param0: globalAndroid.os.Bundle): com.facebook.AccessToken;
			public toJSONObject$facebook_core_release(): org.json.JSONObject;
			public toString(): string;
			public getSource(): com.facebook.AccessTokenSource;
			public getLastRefresh(): java.util.Date;
			public describeContents(): number;
			public static getCurrentAccessToken(): com.facebook.AccessToken;
			public static expireCurrentAccessToken(): void;
			public getDataAccessExpirationTime(): java.util.Date;
			public hashCode(): number;
			public static setCurrentAccessToken(param0: com.facebook.AccessToken): void;
		}
		export module AccessToken {
			export class AccessTokenCreationCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenCreationCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: com.facebook.AccessToken): void;
					onError(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public onSuccess(param0: com.facebook.AccessToken): void;
				public onError(param0: com.facebook.FacebookException): void;
			}
			export class AccessTokenRefreshCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenRefreshCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					OnTokenRefreshed(param0: com.facebook.AccessToken): void;
					OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
			}
			export class Companion {
				public static class: java.lang.Class<com.facebook.AccessToken.Companion>;
				public refreshCurrentAccessTokenAsync(): void;
				public isDataAccessActive(): boolean;
				public getPermissionsFromBundle$facebook_core_release(param0: globalAndroid.os.Bundle, param1: string): java.util.List<string>;
				public setCurrentAccessToken(param0: com.facebook.AccessToken): void;
				public isLoggedInWithInstagram(): boolean;
				public createFromJSONObject$facebook_core_release(param0: org.json.JSONObject): com.facebook.AccessToken;
				public expireCurrentAccessToken(): void;
				public createFromNativeLinkingIntent(param0: globalAndroid.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
				public createExpired$facebook_core_release(param0: com.facebook.AccessToken): com.facebook.AccessToken;
				public createFromRefresh$facebook_core_release(param0: com.facebook.AccessToken, param1: globalAndroid.os.Bundle): com.facebook.AccessToken;
				public getCurrentAccessToken(): com.facebook.AccessToken;
				public isCurrentAccessTokenActive(): boolean;
				public refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
				public createFromLegacyCache$facebook_core_release(param0: globalAndroid.os.Bundle): com.facebook.AccessToken;
			}
			export class WhenMappings {
				public static class: java.lang.Class<com.facebook.AccessToken.WhenMappings>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenCache {
			public static class: java.lang.Class<com.facebook.AccessTokenCache>;
			public static CACHED_ACCESS_TOKEN_KEY: string;
			public static Companion: com.facebook.AccessTokenCache.Companion;
			public clear(): void;
			public constructor();
			public load(): com.facebook.AccessToken;
			public save(param0: com.facebook.AccessToken): void;
			public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory);
		}
		export module AccessTokenCache {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AccessTokenCache.Companion>;
			}
			export class SharedPreferencesTokenCachingStrategyFactory {
				public static class: java.lang.Class<com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory>;
				public create(): com.facebook.LegacyTokenHelper;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenManager {
			public static class: java.lang.Class<com.facebook.AccessTokenManager>;
			public static TAG: string;
			public static ACTION_CURRENT_ACCESS_TOKEN_CHANGED: string;
			public static EXTRA_OLD_ACCESS_TOKEN: string;
			public static EXTRA_NEW_ACCESS_TOKEN: string;
			public static SHARED_PREFERENCES_NAME: string;
			public static Companion: com.facebook.AccessTokenManager.Companion;
			public loadCurrentAccessToken(): boolean;
			public currentAccessTokenChanged(): void;
			public constructor(param0: androidx.localbroadcastmanager.content.LocalBroadcastManager, param1: com.facebook.AccessTokenCache);
			public getCurrentAccessToken(): com.facebook.AccessToken;
			public setCurrentAccessToken(param0: com.facebook.AccessToken): void;
			public static getInstance(): com.facebook.AccessTokenManager;
			public extendAccessTokenIfNeeded(): void;
			public refreshCurrentAccessToken(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
		}
		export module AccessTokenManager {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.Companion>;
				public getInstance(): com.facebook.AccessTokenManager;
			}
			export class FacebookRefreshTokenInfo extends com.facebook.AccessTokenManager.RefreshTokenInfo {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.FacebookRefreshTokenInfo>;
				public getGrantType(): string;
				public getGraphPath(): string;
				public constructor();
			}
			export class InstagramRefreshTokenInfo extends com.facebook.AccessTokenManager.RefreshTokenInfo {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.InstagramRefreshTokenInfo>;
				public getGrantType(): string;
				public getGraphPath(): string;
				public constructor();
			}
			export class RefreshResult {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshResult>;
				public getExpiresAt(): number;
				public getExpiresIn(): number;
				public setAccessToken(param0: string): void;
				public getGraphDomain(): string;
				public setExpiresAt(param0: number): void;
				public getAccessToken(): string;
				public setDataAccessExpirationTime(param0: java.lang.Long): void;
				public setExpiresIn(param0: number): void;
				public getDataAccessExpirationTime(): java.lang.Long;
				public setGraphDomain(param0: string): void;
				public constructor();
			}
			export class RefreshTokenInfo {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshTokenInfo>;
				/**
				 * Constructs a new instance of the com.facebook.AccessTokenManager$RefreshTokenInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getGraphPath(): string;
					getGrantType(): string;
				});
				public constructor();
				public getGrantType(): string;
				public getGraphPath(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenSource {
			public static class: java.lang.Class<com.facebook.AccessTokenSource>;
			public static NONE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_WEB: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_NATIVE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_SERVICE: com.facebook.AccessTokenSource;
			public static WEB_VIEW: com.facebook.AccessTokenSource;
			public static CHROME_CUSTOM_TAB: com.facebook.AccessTokenSource;
			public static TEST_USER: com.facebook.AccessTokenSource;
			public static CLIENT_TOKEN: com.facebook.AccessTokenSource;
			public static DEVICE_AUTH: com.facebook.AccessTokenSource;
			public static INSTAGRAM_APPLICATION_WEB: com.facebook.AccessTokenSource;
			public static INSTAGRAM_CUSTOM_CHROME_TAB: com.facebook.AccessTokenSource;
			public static INSTAGRAM_WEB_VIEW: com.facebook.AccessTokenSource;
			public static values(): androidNative.Array<com.facebook.AccessTokenSource>;
			public static valueOf(param0: string): com.facebook.AccessTokenSource;
			public fromInstagram(): boolean;
			public canExtendToken(): boolean;
		}
		export module AccessTokenSource {
			export class WhenMappings {
				public static class: java.lang.Class<com.facebook.AccessTokenSource.WhenMappings>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export abstract class AccessTokenTracker {
			public static class: java.lang.Class<com.facebook.AccessTokenTracker>;
			public onCurrentAccessTokenChanged(param0: com.facebook.AccessToken, param1: com.facebook.AccessToken): void;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
		}
		export module AccessTokenTracker {
			export class CurrentAccessTokenBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.AccessTokenTracker.CurrentAccessTokenBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AuthenticationToken {
			public static class: java.lang.Class<com.facebook.AuthenticationToken>;
			public static AUTHENTICATION_TOKEN_KEY: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationToken>;
			public static Companion: com.facebook.AuthenticationToken.Companion;
			public constructor(param0: string, param1: string);
			public equals(param0: any): boolean;
			public getHeader(): com.facebook.AuthenticationTokenHeader;
			public getToken(): string;
			public describeContents(): number;
			public getSignature(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: globalAndroid.os.Parcel);
			public getExpectedNonce(): string;
			public getClaims(): com.facebook.AuthenticationTokenClaims;
			public hashCode(): number;
		}
		export module AuthenticationToken {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AuthenticationToken.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AuthenticationTokenCache {
			public static class: java.lang.Class<com.facebook.AuthenticationTokenCache>;
			public static CACHED_AUTHENTICATION_TOKEN_KEY: string;
			public static CACHED_AUTHENTICATION_TOKEN_NONCE_KEY: string;
			public static Companion: com.facebook.AuthenticationTokenCache.Companion;
			public save(param0: com.facebook.AuthenticationToken): void;
			public clear(): void;
			public load(): com.facebook.AuthenticationToken;
			public constructor(param0: globalAndroid.content.SharedPreferences);
			public constructor();
		}
		export module AuthenticationTokenCache {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AuthenticationTokenCache.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AuthenticationTokenClaims {
			public static class: java.lang.Class<com.facebook.AuthenticationTokenClaims>;
			public static MAX_TIME_SINCE_TOKEN_ISSUED: number;
			public static JSON_KEY_JIT: string;
			public static JSON_KEY_ISS: string;
			public static JSON_KEY_AUD: string;
			public static JSON_KEY_NONCE: string;
			public static JSON_KEY_EXP: string;
			public static JSON_KEY_IAT: string;
			public static JSON_KEY_SUB: string;
			public static JSON_KEY_NAME: string;
			public static JSON_KEY_GIVEN_NAME: string;
			public static JSON_KEY_MIDDLE_NAME: string;
			public static JSON_KEY_FAMILY_NAME: string;
			public static JSON_KEY_EMAIL: string;
			public static JSON_KEY_PICTURE: string;
			public static JSON_KEY_USER_FRIENDS: string;
			public static JSON_KEY_USER_BIRTHDAY: string;
			public static JSON_KEY_USER_AGE_RANGE: string;
			public static JSON_KEY_USER_HOMETOWN: string;
			public static JSON_KEY_USER_GENDER: string;
			public static JSON_KEY_USER_LINK: string;
			public static JSON_KEY_USER_LOCATION: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationTokenClaims>;
			public static Companion: com.facebook.AuthenticationTokenClaims.Companion;
			public getNonce(): string;
			public equals(param0: any): boolean;
			public getFamilyName(): string;
			public getJti(): string;
			public getPicture(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string);
			public getUserHometown(): java.util.Map<string,string>;
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string);
			public getExp(): number;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string);
			public getUserAgeRange(): java.util.Map<string,java.lang.Integer>;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string);
			public getAud(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string, param15: java.util.Map<string,java.lang.Integer>, param16: java.util.Map<string,string>, param17: java.util.Map<string,string>, param18: string);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string, param15: java.util.Map<string,java.lang.Integer>);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string);
			public getUserLocation(): java.util.Map<string,string>;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: globalAndroid.os.Parcel);
			public getUserBirthday(): string;
			public getUserLink(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string);
			public toJSONObject$facebook_core_release(): org.json.JSONObject;
			public toString(): string;
			public getName(): string;
			public getMiddleName(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string, param15: java.util.Map<string,java.lang.Integer>, param16: java.util.Map<string,string>, param17: java.util.Map<string,string>);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string, param15: java.util.Map<string,java.lang.Integer>, param16: java.util.Map<string,string>);
			public getIat(): number;
			public getSub(): string;
			public describeContents(): number;
			public getGivenName(): string;
			public getIss(): string;
			public toEnCodedString(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: java.util.Collection<string>, param14: string, param15: java.util.Map<string,java.lang.Integer>, param16: java.util.Map<string,string>, param17: java.util.Map<string,string>, param18: string, param19: string);
			public getUserGender(): string;
			public getUserFriends(): java.util.Set<string>;
			public getEmail(): string;
			public hashCode(): number;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string);
		}
		export module AuthenticationTokenClaims {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AuthenticationTokenClaims.Companion>;
				public getNullableString$facebook_core_release(param0: org.json.JSONObject, param1: string): string;
				public createFromJSONObject$facebook_core_release(param0: org.json.JSONObject): com.facebook.AuthenticationTokenClaims;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AuthenticationTokenHeader {
			public static class: java.lang.Class<com.facebook.AuthenticationTokenHeader>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AuthenticationTokenHeader>;
			public static Companion: com.facebook.AuthenticationTokenHeader.Companion;
			public equals(param0: any): boolean;
			public getKid(): string;
			public constructor(param0: string, param1: string, param2: string);
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: globalAndroid.os.Parcel);
			public getAlg(): string;
			public toJSONObject$facebook_core_release(): org.json.JSONObject;
			public toString(): string;
			public describeContents(): number;
			public toEnCodedString(): string;
			public getTyp(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
		export module AuthenticationTokenHeader {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AuthenticationTokenHeader.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AuthenticationTokenManager {
			public static class: java.lang.Class<com.facebook.AuthenticationTokenManager>;
			public static TAG: string;
			public static ACTION_CURRENT_AUTHENTICATION_TOKEN_CHANGED: string;
			public static EXTRA_OLD_AUTHENTICATION_TOKEN: string;
			public static EXTRA_NEW_AUTHENTICATION_TOKEN: string;
			public static SHARED_PREFERENCES_NAME: string;
			public static Companion: com.facebook.AuthenticationTokenManager.Companion;
			public static getInstance(): com.facebook.AuthenticationTokenManager;
			public getCurrentAuthenticationToken(): com.facebook.AuthenticationToken;
			public setCurrentAuthenticationToken(param0: com.facebook.AuthenticationToken): void;
			public loadCurrentAuthenticationToken(): boolean;
			public constructor(param0: androidx.localbroadcastmanager.content.LocalBroadcastManager, param1: com.facebook.AuthenticationTokenCache);
			public currentAuthenticationTokenChanged(): void;
		}
		export module AuthenticationTokenManager {
			export class Companion {
				public static class: java.lang.Class<com.facebook.AuthenticationTokenManager.Companion>;
				public getInstance(): com.facebook.AuthenticationTokenManager;
			}
			export class CurrentAuthenticationTokenChangedBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.AuthenticationTokenManager.CurrentAuthenticationTokenChangedBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export class CallbackManager {
			public static class: java.lang.Class<com.facebook.CallbackManager>;
			/**
			 * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
			});
			public constructor();
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
		}
		export module CallbackManager {
			export class Factory {
				public static class: java.lang.Class<com.facebook.CallbackManager.Factory>;
				public static INSTANCE: com.facebook.CallbackManager.Factory;
				public static create(): com.facebook.CallbackManager;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class CurrentAccessTokenExpirationBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.CurrentAccessTokenExpirationBroadcastReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class CustomTabActivity {
			public static class: java.lang.Class<com.facebook.CustomTabActivity>;
			public static CUSTOM_TAB_REDIRECT_ACTION: string;
			public static DESTROY_ACTION: string;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public constructor();
			public onDestroy(): void;
		}
	}
}

declare module com {
	export module facebook {
		export class CustomTabMainActivity {
			public static class: java.lang.Class<com.facebook.CustomTabMainActivity>;
			public static EXTRA_ACTION: string;
			public static EXTRA_PARAMS: string;
			public static EXTRA_CHROME_PACKAGE: string;
			public static EXTRA_URL: string;
			public static EXTRA_TARGET_APP: string;
			public static REFRESH_ACTION: string;
			public static NO_ACTIVITY_EXCEPTION: string;
			public onResume(): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onNewIntent(param0: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookActivity {
			public static class: java.lang.Class<com.facebook.FacebookActivity>;
			public static PASS_THROUGH_CANCEL_ACTION: string;
			public getFragment(): androidx.fragment.app.Fragment;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
			public constructor();
			public getCurrentFragment(): androidx.fragment.app.Fragment;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookAuthorizationException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookAuthorizationException>;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.FacebookBroadcastReceiver>;
			public onFailedAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
			public onSuccessfulAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class FacebookButtonBase {
			public static class: java.lang.Class<com.facebook.FacebookButtonBase>;
			public getAndroidxActivityResultRegistryOwner(): androidx.activity.result.ActivityResultRegistryOwner;
			public getFragment(): androidx.fragment.app.Fragment;
			public getCompoundPaddingLeft(): number;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
			public getRequestCode(): number;
			public onDraw(param0: globalAndroid.graphics.Canvas): void;
			public getCompoundPaddingRight(): number;
			public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
			public measureTextWidth(param0: string): number;
			public setFragment(param0: androidx.fragment.app.Fragment): void;
			public getDefaultRequestCode(): number;
			public getActivity(): globalAndroid.app.Activity;
			public setInternalOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public getNativeFragment(): globalAndroid.app.Fragment;
			public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public setFragment(param0: globalAndroid.app.Fragment): void;
			public callExternalOnClickListener(param0: globalAndroid.view.View): void;
			public onAttachedToWindow(): void;
			public getDefaultStyleResource(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookCallback<RESULT>  extends java.lang.Object {
			public static class: java.lang.Class<com.facebook.FacebookCallback<any>>;
			/**
			 * Constructs a new instance of the com.facebook.FacebookCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onSuccess(param0: RESULT): void;
				onCancel(): void;
				onError(param0: com.facebook.FacebookException): void;
			});
			public constructor();
			public onCancel(): void;
			public onSuccess(param0: RESULT): void;
			public onError(param0: com.facebook.FacebookException): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookContentProvider {
			public static class: java.lang.Class<com.facebook.FacebookContentProvider>;
			public static Companion: com.facebook.FacebookContentProvider.Companion;
			public onCreate(): boolean;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
			public openFile(param0: globalAndroid.net.Uri, param1: string): globalAndroid.os.ParcelFileDescriptor;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
			public constructor();
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public static getAttachmentUrl(param0: string, param1: java.util.UUID, param2: string): string;
			public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
			public getType(param0: globalAndroid.net.Uri): string;
		}
		export module FacebookContentProvider {
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookContentProvider.Companion>;
				public getAttachmentUrl(param0: string, param1: java.util.UUID, param2: string): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialog<CONTENT, RESULT>  extends java.lang.Object {
			public static class: java.lang.Class<com.facebook.FacebookDialog<any,any>>;
			/**
			 * Constructs a new instance of the com.facebook.FacebookDialog<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canShow(param0: CONTENT): boolean;
				show(param0: CONTENT): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>, param2: number): void;
			});
			public constructor();
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>, param2: number): void;
			public canShow(param0: CONTENT): boolean;
			public show(param0: CONTENT): void;
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialogException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookDialogException>;
			public constructor(param0: string, param1: number, param2: string);
			public getErrorCode(): number;
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public getFailingUrl(): string;
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookException>;
			public static serialVersionUID: number;
			public static Companion: com.facebook.FacebookException.Companion;
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
		export module FacebookException {
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookException.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookGraphResponseException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookGraphResponseException>;
			public toString(): string;
			public constructor(param0: com.facebook.GraphResponse, param1: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getGraphResponse(): com.facebook.GraphResponse;
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookOperationCanceledException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException>;
			public static serialVersionUID: number;
			public static Companion: com.facebook.FacebookOperationCanceledException.Companion;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
		export module FacebookOperationCanceledException {
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookRequestError {
			public static class: java.lang.Class<com.facebook.FacebookRequestError>;
			public static INVALID_ERROR_CODE: number;
			public static INVALID_HTTP_STATUS_CODE: number;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.FacebookRequestError>;
			public static Companion: com.facebook.FacebookRequestError.Companion;
			public constructor(param0: number, param1: string, param2: string);
			public getErrorCode(): number;
			public getCategory(): com.facebook.FacebookRequestError.Category;
			public getConnection(): java.net.HttpURLConnection;
			public getErrorUserMessage(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public static checkResponseAndCreateError(param0: org.json.JSONObject, param1: any, param2: java.net.HttpURLConnection): com.facebook.FacebookRequestError;
			public getBatchRequestResult(): any;
			public getRequestResult(): org.json.JSONObject;
			public constructor(param0: java.net.HttpURLConnection, param1: java.lang.Exception);
			public getSubErrorCode(): number;
			public static getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
			public getErrorMessage(): string;
			public toString(): string;
			public describeContents(): number;
			public getErrorRecoveryMessage(): string;
			public getErrorType(): string;
			public getErrorUserTitle(): string;
			public getRequestStatusCode(): number;
			public getRequestResultBody(): org.json.JSONObject;
			public getException(): com.facebook.FacebookException;
		}
		export module FacebookRequestError {
			export class Category {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Category>;
				public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
				public static OTHER: com.facebook.FacebookRequestError.Category;
				public static TRANSIENT: com.facebook.FacebookRequestError.Category;
				public static values(): androidNative.Array<com.facebook.FacebookRequestError.Category>;
				public static valueOf(param0: string): com.facebook.FacebookRequestError.Category;
			}
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Companion>;
				public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public checkResponseAndCreateError(param0: org.json.JSONObject, param1: any, param2: java.net.HttpURLConnection): com.facebook.FacebookRequestError;
				public getHTTP_RANGE_SUCCESS$facebook_core_release(): com.facebook.FacebookRequestError.Range;
			}
			export class Range {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Range>;
				public constructor(param0: number, param1: number);
				public contains(param0: number): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdk {
			public static class: java.lang.Class<com.facebook.FacebookSdk>;
			public static CALLBACK_OFFSET_CHANGED_AFTER_INIT: string;
			public static CALLBACK_OFFSET_NEGATIVE: string;
			public static APP_EVENT_PREFERENCES: string;
			public static DATA_PROCESSING_OPTIONS_PREFERENCES: string;
			public static APPLICATION_ID_PROPERTY: string;
			public static APPLICATION_NAME_PROPERTY: string;
			public static CLIENT_TOKEN_PROPERTY: string;
			public static WEB_DIALOG_THEME: string;
			public static AUTO_INIT_ENABLED_PROPERTY: string;
			public static AUTO_LOG_APP_EVENTS_ENABLED_PROPERTY: string;
			public static CODELESS_DEBUG_LOG_ENABLED_PROPERTY: string;
			public static ADVERTISER_ID_COLLECTION_ENABLED_PROPERTY: string;
			public static CALLBACK_OFFSET_PROPERTY: string;
			public static MONITOR_ENABLED_PROPERTY: string;
			public static DATA_PROCESSION_OPTIONS: string;
			public static DATA_PROCESSION_OPTIONS_COUNTRY: string;
			public static DATA_PROCESSION_OPTIONS_STATE: string;
			public static hasCustomTabsPrefetching: boolean;
			public static ignoreAppSwitchToLoggedOut: boolean;
			public static bypassAppSwitch: boolean;
			public static INSTAGRAM: string;
			public static GAMING: string;
			public static FACEBOOK_COM: string;
			public static FB_GG: string;
			public static INSTAGRAM_COM: string;
			public static INSTANCE: com.facebook.FacebookSdk;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number): void;
			public static publishInstallAsync(param0: globalAndroid.content.Context, param1: string): void;
			public static setFacebookDomain(param0: string): void;
			public static getCodelessDebugLogEnabled(): boolean;
			public static clearLoggingBehaviors(): void;
			public static getApplicationSignature(param0: globalAndroid.content.Context): string;
			public static getInstagramDomain(): string;
			public static setExecutor(param0: java.util.concurrent.Executor): void;
			public static setApplicationName(param0: string): void;
			public static getCodelessSetupEnabled(): boolean;
			public static setAutoLogAppEventsEnabled(param0: boolean): void;
			public static setOnProgressThreshold(param0: number): void;
			public static isInitialized(): boolean;
			public static setLegacyTokenUpgradeSupported(param0: boolean): void;
			public static setDataProcessingOptions(param0: androidNative.Array<string>): void;
			public static getApplicationId(): string;
			public static setDataProcessingOptions(param0: androidNative.Array<string>, param1: number, param2: number): void;
			public static setAutoInitEnabled(param0: boolean): void;
			public static setAdvertiserIDCollectionEnabled(param0: boolean): void;
			public static addLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static getAutoInitEnabled(): boolean;
			public static setCodelessDebugLogEnabled(param0: boolean): void;
			public static setMonitorEnabled(param0: boolean): void;
			public static loadDefaultsFromMetadata$facebook_core_release(param0: globalAndroid.content.Context): void;
			public static getAutoLogAppEventsEnabled(): boolean;
			public static fullyInitialize(): void;
			public static setCacheDir(param0: java.io.File): void;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context): void;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: com.facebook.FacebookSdk.InitializeCallback): void;
			public static setLimitEventAndDataUsage(param0: globalAndroid.content.Context, param1: boolean): void;
			public static getExecutor(): java.util.concurrent.Executor;
			public static isDebugEnabled(): boolean;
			public static setIsDebugEnabled(param0: boolean): void;
			public static getGraphApiVersion(): string;
			public static getAdvertiserIDCollectionEnabled(): boolean;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.FacebookSdk.InitializeCallback): void;
			public static isFullyInitialized(): boolean;
			public static getCallbackRequestCodeOffset(): number;
			public static isFacebookRequestCode(param0: number): boolean;
			public static getOnProgressThreshold(): number;
			public static setGraphApiVersion(param0: string): void;
			public static getGraphDomain(): string;
			public static getLimitEventAndDataUsage(param0: globalAndroid.content.Context): boolean;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static getLoggingBehaviors(): java.util.Set<com.facebook.LoggingBehavior>;
			public static getApplicationName(): string;
			public static getMonitorEnabled(): boolean;
			public static setGraphRequestCreator$facebook_core_release(param0: com.facebook.FacebookSdk.GraphRequestCreator): void;
			public static getFacebookDomain(): string;
			public static setApplicationId(param0: string): void;
			public static getClientToken(): string;
			public static setClientToken(param0: string): void;
			public static getCacheDir(): java.io.File;
			public static isLoggingBehaviorEnabled(param0: com.facebook.LoggingBehavior): boolean;
			public static getSdkVersion(): string;
			public static isLegacyTokenUpgradeSupported(): boolean;
			public static removeLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
		}
		export module FacebookSdk {
			export class GraphRequestCreator {
				public static class: java.lang.Class<com.facebook.FacebookSdk.GraphRequestCreator>;
				/**
				 * Constructs a new instance of the com.facebook.FacebookSdk$GraphRequestCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				});
				public constructor();
				public createPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			}
			export class InitializeCallback {
				public static class: java.lang.Class<com.facebook.FacebookSdk.InitializeCallback>;
				/**
				 * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInitialized(): void;
				});
				public constructor();
				public onInitialized(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkNotInitializedException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException>;
			public static serialVersionUID: number;
			public static Companion: com.facebook.FacebookSdkNotInitializedException.Companion;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
		export module FacebookSdkNotInitializedException {
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkVersion {
			public static class: java.lang.Class<com.facebook.FacebookSdkVersion>;
			public static BUILD: string;
			public static INSTANCE: com.facebook.FacebookSdkVersion;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookServiceException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookServiceException>;
			public static Companion: com.facebook.FacebookServiceException.Companion;
			public toString(): string;
			public constructor(param0: com.facebook.FacebookRequestError, param1: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getRequestError(): com.facebook.FacebookRequestError;
			public constructor(param0: string, param1: androidNative.Array<any>);
		}
		export module FacebookServiceException {
			export class Companion {
				public static class: java.lang.Class<com.facebook.FacebookServiceException.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequest {
			public static class: java.lang.Class<com.facebook.GraphRequest>;
			public static MAXIMUM_BATCH_SIZE: number;
			public static TAG: string;
			public static ACCESS_TOKEN_PARAM: string;
			public static FIELDS_PARAM: string;
			public static Companion: com.facebook.GraphRequest.Companion;
			public constructor(param0: com.facebook.AccessToken, param1: java.net.URL);
			public static toHttpConnection(param0: androidNative.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public constructor(param0: com.facebook.AccessToken);
			public setVersion(param0: string): void;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback, param5: string);
			public static executeConnectionAsync(param0: globalAndroid.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public static serializeToUrlConnection$facebook_core_release(param0: com.facebook.GraphRequestBatch, param1: java.net.HttpURLConnection): void;
			public getCallback(): com.facebook.GraphRequest.Callback;
			public static executeBatchAndWait(param0: androidNative.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
			public static runCallbacks$facebook_core_release(param0: com.facebook.GraphRequestBatch, param1: java.util.List<com.facebook.GraphResponse>): void;
			public static shouldWarnOnMissingFieldsParam$facebook_core_release(param0: com.facebook.GraphRequest): boolean;
			public getTag(): any;
			public setCallback(param0: com.facebook.GraphRequest.Callback): void;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.graphics.Bitmap, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static toHttpConnection(param0: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public static executeBatchAsync(param0: androidNative.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle);
			public getParameters(): globalAndroid.os.Bundle;
			public getBatchEntryDependsOn(): string;
			public constructor(param0: com.facebook.AccessToken, param1: string);
			public constructor();
			public static executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getGraphObject(): org.json.JSONObject;
			public setForceApplicationRequest(param0: boolean): void;
			public static setDefaultBatchApplicationId(param0: string): void;
			public static executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
			public static executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public static getDefaultBatchApplicationId(): string;
			/** @deprecated */
			public setSkipClientToken(param0: boolean): void;
			public static newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static executeBatchAndWait(param0: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAndWait(): com.facebook.GraphResponse;
			public getUrlForSingleRequest(): string;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.net.Uri, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
			public static newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setBatchEntryName(param0: string): void;
			public setGraphPath(param0: string): void;
			public setParameters(param0: globalAndroid.os.Bundle): void;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public getBatchEntryOmitResultOnSuccess(): boolean;
			public static toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
			public getRelativeUrlForBatchedRequest(): string;
			public setTag(param0: any): void;
			public setBatchEntryOmitResultOnSuccess(param0: boolean): void;
			public static executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod);
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public static validateFieldsParamForGetRequests$facebook_core_release(param0: com.facebook.GraphRequestBatch): void;
			public static executeBatchAsync(param0: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public setAccessToken(param0: com.facebook.AccessToken): void;
			public setHttpMethod(param0: com.facebook.HttpMethod): void;
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public toString(): string;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback);
			public getAccessToken(): com.facebook.AccessToken;
			public setGraphObject(param0: org.json.JSONObject): void;
			public getHttpMethod(): com.facebook.HttpMethod;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public getBatchEntryName(): string;
			public getVersion(): string;
			public getGraphPath(): string;
			public setBatchEntryDependsOn(param0: string): void;
			public static newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: globalAndroid.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
		}
		export module GraphRequest {
			export class Attachment {
				public static class: java.lang.Class<com.facebook.GraphRequest.Attachment>;
				public constructor(param0: com.facebook.GraphRequest, param1: any);
				public getRequest(): com.facebook.GraphRequest;
				public getValue(): any;
			}
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
			}
			export class Companion {
				public static class: java.lang.Class<com.facebook.GraphRequest.Companion>;
				public newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
				public validateFieldsParamForGetRequests$facebook_core_release(param0: com.facebook.GraphRequestBatch): void;
				public newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: globalAndroid.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
				public runCallbacks$facebook_core_release(param0: com.facebook.GraphRequestBatch, param1: java.util.List<com.facebook.GraphResponse>): void;
				public executeBatchAndWait(param0: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
				public executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
				public newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public getDefaultBatchApplicationId(): string;
				public newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.net.Uri, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public toHttpConnection(param0: androidNative.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
				public toHttpConnection(param0: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
				public executeBatchAsync(param0: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
				public executeBatchAndWait(param0: androidNative.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
				public executeBatchAsync(param0: androidNative.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
				public executeConnectionAsync(param0: globalAndroid.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
				public newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
				public newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.graphics.Bitmap, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
				public serializeToUrlConnection$facebook_core_release(param0: com.facebook.GraphRequestBatch, param1: java.net.HttpURLConnection): void;
				public newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
				public executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
				public setDefaultBatchApplicationId(param0: string): void;
				public newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
				public shouldWarnOnMissingFieldsParam$facebook_core_release(param0: com.facebook.GraphRequest): boolean;
				public newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				public executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
				public executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
			}
			export class GraphJSONArrayCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONArrayCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
			}
			export class GraphJSONObjectCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONObjectCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
			}
			export class KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.KeyValueSerializer>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeString(param0: string, param1: string): void;
				});
				public constructor();
				public writeString(param0: string, param1: string): void;
			}
			export class OnProgressCallback extends com.facebook.GraphRequest.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onProgress(param0: number, param1: number): void;
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
				public onProgress(param0: number, param1: number): void;
			}
			export class ParcelableResourceWithMimeType<RESOURCE>  extends globalAndroid.os.Parcelable {
				public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public static Companion: com.facebook.GraphRequest.ParcelableResourceWithMimeType.Companion;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: any, param1: string);
				public getResource(): any;
				public getMimeType(): string;
				public describeContents(): number;
			}
			export module ParcelableResourceWithMimeType {
				export class Companion {
					public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType.Companion>;
				}
			}
			export class Serializer extends com.facebook.GraphRequest.KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.Serializer>;
				public writeString(param0: string, param1: string): void;
				public writeFile(param0: string, param1: globalAndroid.os.ParcelFileDescriptor, param2: string): void;
				public writeBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
				public writeContentDisposition(param0: string, param1: string, param2: string): void;
				public writeRecordBoundary(): void;
				public write(param0: string, param1: androidNative.Array<any>): void;
				public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.Logger, param2: boolean);
				public writeRequestsAsJson(param0: string, param1: org.json.JSONArray, param2: java.util.Collection<com.facebook.GraphRequest>): void;
				public writeContentUri(param0: string, param1: globalAndroid.net.Uri, param2: string): void;
				public writeLine(param0: string, param1: androidNative.Array<any>): void;
				public writeObject(param0: string, param1: any, param2: com.facebook.GraphRequest): void;
				public writeBytes(param0: string, param1: androidNative.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.util.List<any>> {
			public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask>;
			public static Companion: com.facebook.GraphRequestAsyncTask.Companion;
			public constructor(param0: androidNative.Array<com.facebook.GraphRequest>);
			public constructor(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>);
			public toString(): string;
			public onPostExecute(param0: java.util.List<com.facebook.GraphResponse>): void;
			public getException(): java.lang.Exception;
			public doInBackground(param0: androidNative.Array<java.lang.Void>): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch);
			public constructor(param0: java.net.HttpURLConnection, param1: androidNative.Array<com.facebook.GraphRequest>);
			public onPreExecute(): void;
			public getRequests(): com.facebook.GraphRequestBatch;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public constructor(param0: com.facebook.GraphRequestBatch);
		}
		export module GraphRequestAsyncTask {
			export class Companion {
				public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestBatch extends java.util.AbstractList<com.facebook.GraphRequest> {
			public static class: java.lang.Class<com.facebook.GraphRequestBatch>;
			public static Companion: com.facebook.GraphRequestBatch.Companion;
			public constructor(param0: androidNative.Array<com.facebook.GraphRequest>);
			public add(param0: com.facebook.GraphRequest): boolean;
			public getCallbackHandler(): globalAndroid.os.Handler;
			public getSize(): number;
			public contains(param0: any): boolean;
			public addCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public removeAt(param0: number): com.facebook.GraphRequest;
			public set(param0: number, param1: com.facebook.GraphRequest): com.facebook.GraphRequest;
			public remove(param0: com.facebook.GraphRequest): boolean;
			public getTimeout(): number;
			public indexOf(param0: com.facebook.GraphRequest): number;
			public getCallbacks(): java.util.List<com.facebook.GraphRequestBatch.Callback>;
			public getBatchApplicationId(): string;
			public clear(): void;
			public setTimeout(param0: number): void;
			public lastIndexOf(param0: com.facebook.GraphRequest): number;
			public get(param0: number): com.facebook.GraphRequest;
			public size(): number;
			public add(param0: number, param1: com.facebook.GraphRequest): void;
			public removeCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public constructor();
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public remove(param0: any): boolean;
			public contains(param0: com.facebook.GraphRequest): boolean;
			public getId(): string;
			public lastIndexOf(param0: any): number;
			public setBatchApplicationId(param0: string): void;
			public remove(param0: number): com.facebook.GraphRequest;
			public indexOf(param0: any): number;
			public getRequests(): java.util.List<com.facebook.GraphRequest>;
			public executeAndWait(): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: com.facebook.GraphRequestBatch);
			public setCallbackHandler(param0: globalAndroid.os.Handler): void;
		}
		export module GraphRequestBatch {
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
			export class Companion {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.Companion>;
			}
			export class OnProgressCallback extends com.facebook.GraphRequestBatch.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphResponse {
			public static class: java.lang.Class<com.facebook.GraphResponse>;
			public static NON_JSON_RESPONSE_PROPERTY: string;
			public static SUCCESS_KEY: string;
			public static Companion: com.facebook.GraphResponse.Companion;
			public getRequestForPagedResults(param0: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
			public getJSONArray(): org.json.JSONArray;
			public getRequest(): com.facebook.GraphRequest;
			public static constructErrorResponses(param0: java.util.List<com.facebook.GraphRequest>, param1: java.net.HttpURLConnection, param2: com.facebook.FacebookException): java.util.List<com.facebook.GraphResponse>;
			public getConnection(): java.net.HttpURLConnection;
			public getRawResponse(): string;
			public static createResponsesFromString$facebook_core_release(param0: string, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public getJsonArray(): org.json.JSONArray;
			public getJSONObject(): org.json.JSONObject;
			public constructor(param0: com.facebook.GraphRequest, param1: java.net.HttpURLConnection, param2: string, param3: org.json.JSONObject, param4: org.json.JSONArray, param5: com.facebook.FacebookRequestError);
			public constructor(param0: com.facebook.GraphRequest, param1: java.net.HttpURLConnection, param2: string, param3: org.json.JSONArray);
			public getJsonObject(): org.json.JSONObject;
			public toString(): string;
			public constructor(param0: com.facebook.GraphRequest, param1: java.net.HttpURLConnection, param2: com.facebook.FacebookRequestError);
			public constructor(param0: com.facebook.GraphRequest, param1: java.net.HttpURLConnection, param2: string, param3: org.json.JSONObject);
			public static createResponsesFromStream$facebook_core_release(param0: java.io.InputStream, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public getError(): com.facebook.FacebookRequestError;
			public static fromHttpConnection$facebook_core_release(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
		}
		export module GraphResponse {
			export class Companion {
				public static class: java.lang.Class<com.facebook.GraphResponse.Companion>;
				public fromHttpConnection$facebook_core_release(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
				public createResponsesFromString$facebook_core_release(param0: string, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
				public createResponsesFromStream$facebook_core_release(param0: java.io.InputStream, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
				public constructErrorResponses(param0: java.util.List<com.facebook.GraphRequest>, param1: java.net.HttpURLConnection, param2: com.facebook.FacebookException): java.util.List<com.facebook.GraphResponse>;
			}
			export class PagingDirection {
				public static class: java.lang.Class<com.facebook.GraphResponse.PagingDirection>;
				public static NEXT: com.facebook.GraphResponse.PagingDirection;
				public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
				public static values(): androidNative.Array<com.facebook.GraphResponse.PagingDirection>;
				public static valueOf(param0: string): com.facebook.GraphResponse.PagingDirection;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class HttpMethod {
			public static class: java.lang.Class<com.facebook.HttpMethod>;
			public static GET: com.facebook.HttpMethod;
			public static POST: com.facebook.HttpMethod;
			public static DELETE: com.facebook.HttpMethod;
			public static values(): androidNative.Array<com.facebook.HttpMethod>;
			public static valueOf(param0: string): com.facebook.HttpMethod;
		}
	}
}

declare module com {
	export module facebook {
		export class LegacyTokenHelper {
			public static class: java.lang.Class<com.facebook.LegacyTokenHelper>;
			public static TOKEN_KEY: string;
			public static EXPIRATION_DATE_KEY: string;
			public static LAST_REFRESH_DATE_KEY: string;
			public static TOKEN_SOURCE_KEY: string;
			public static PERMISSIONS_KEY: string;
			public static DECLINED_PERMISSIONS_KEY: string;
			public static EXPIRED_PERMISSIONS_KEY: string;
			public static APPLICATION_ID_KEY: string;
			public static DEFAULT_CACHE_KEY: string;
			public static Companion: com.facebook.LegacyTokenHelper.Companion;
			public clear(): void;
			public static putLastRefreshDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static putSource(param0: globalAndroid.os.Bundle, param1: com.facebook.AccessTokenSource): void;
			public static putApplicationId(param0: globalAndroid.os.Bundle, param1: string): void;
			public constructor(param0: globalAndroid.content.Context, param1: string);
			public static putPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
			public static getLastRefreshDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public load(): globalAndroid.os.Bundle;
			public static getToken(param0: globalAndroid.os.Bundle): string;
			public static putExpirationDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static getExpirationDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public static putExpirationMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public save(param0: globalAndroid.os.Bundle): void;
			public static getApplicationId(param0: globalAndroid.os.Bundle): string;
			public static hasTokenInformation(param0: globalAndroid.os.Bundle): boolean;
			public static getSource(param0: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
			public static putExpiredPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
			public static putToken(param0: globalAndroid.os.Bundle, param1: string): void;
			public static getPermissions(param0: globalAndroid.os.Bundle): java.util.Set<string>;
			public static getExpirationMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putLastRefreshMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public static getLastRefreshMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putDeclinedPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
		}
		export module LegacyTokenHelper {
			export class Companion {
				public static class: java.lang.Class<com.facebook.LegacyTokenHelper.Companion>;
				public hasTokenInformation(param0: globalAndroid.os.Bundle): boolean;
				public getPermissions(param0: globalAndroid.os.Bundle): java.util.Set<string>;
				public getLastRefreshDate(param0: globalAndroid.os.Bundle): java.util.Date;
				public putToken(param0: globalAndroid.os.Bundle, param1: string): void;
				public putApplicationId(param0: globalAndroid.os.Bundle, param1: string): void;
				public putSource(param0: globalAndroid.os.Bundle, param1: com.facebook.AccessTokenSource): void;
				public putLastRefreshMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
				public getSource(param0: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
				public putPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
				public putLastRefreshDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
				public getLastRefreshMilliseconds(param0: globalAndroid.os.Bundle): number;
				public getExpirationMilliseconds(param0: globalAndroid.os.Bundle): number;
				public getToken(param0: globalAndroid.os.Bundle): string;
				public getExpirationDate(param0: globalAndroid.os.Bundle): java.util.Date;
				public putExpirationMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
				public putExpiredPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
				public getApplicationId(param0: globalAndroid.os.Bundle): string;
				public putDeclinedPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
				public putExpirationDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class LoggingBehavior {
			public static class: java.lang.Class<com.facebook.LoggingBehavior>;
			public static REQUESTS: com.facebook.LoggingBehavior;
			public static INCLUDE_ACCESS_TOKENS: com.facebook.LoggingBehavior;
			public static INCLUDE_RAW_RESPONSES: com.facebook.LoggingBehavior;
			public static CACHE: com.facebook.LoggingBehavior;
			public static APP_EVENTS: com.facebook.LoggingBehavior;
			public static DEVELOPER_ERRORS: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_WARNING: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_INFO: com.facebook.LoggingBehavior;
			public static values(): androidNative.Array<com.facebook.LoggingBehavior>;
			public static valueOf(param0: string): com.facebook.LoggingBehavior;
		}
	}
}

declare module com {
	export module facebook {
		export class LoginStatusCallback {
			public static class: java.lang.Class<com.facebook.LoginStatusCallback>;
			/**
			 * Constructs a new instance of the com.facebook.LoginStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCompleted(param0: com.facebook.AccessToken): void;
				onFailure(): void;
				onError(param0: java.lang.Exception): void;
			});
			public constructor();
			public onCompleted(param0: com.facebook.AccessToken): void;
			public onFailure(): void;
			public onError(param0: java.lang.Exception): void;
		}
	}
}

declare module com {
	export module facebook {
		export class Profile {
			public static class: java.lang.Class<com.facebook.Profile>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.Profile>;
			public static Companion: com.facebook.Profile.Companion;
			public static fetchProfileForCurrentAccessToken(): void;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.net.Uri);
			public getProfilePictureUri(param0: number, param1: number): globalAndroid.net.Uri;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.net.Uri, param6: globalAndroid.net.Uri);
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public toJSONObject(): org.json.JSONObject;
			public getId(): string;
			public getMiddleName(): string;
			public getName(): string;
			public getFirstName(): string;
			public describeContents(): number;
			public constructor(param0: org.json.JSONObject);
			public getLastName(): string;
			public static getCurrentProfile(): com.facebook.Profile;
			public getLinkUri(): globalAndroid.net.Uri;
			public static setCurrentProfile(param0: com.facebook.Profile): void;
			public getPictureUri(): globalAndroid.net.Uri;
			public hashCode(): number;
		}
		export module Profile {
			export class Companion {
				public static class: java.lang.Class<com.facebook.Profile.Companion>;
				public fetchProfileForCurrentAccessToken(): void;
				public getCurrentProfile(): com.facebook.Profile;
				public setCurrentProfile(param0: com.facebook.Profile): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileCache {
			public static class: java.lang.Class<com.facebook.ProfileCache>;
			public static CACHED_PROFILE_KEY: string;
			public static SHARED_PREFERENCES_NAME: string;
			public static Companion: com.facebook.ProfileCache.Companion;
			public clear(): void;
			public save(param0: com.facebook.Profile): void;
			public load(): com.facebook.Profile;
			public constructor();
		}
		export module ProfileCache {
			export class Companion {
				public static class: java.lang.Class<com.facebook.ProfileCache.Companion>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileManager {
			public static class: java.lang.Class<com.facebook.ProfileManager>;
			public static ACTION_CURRENT_PROFILE_CHANGED: string;
			public static EXTRA_OLD_PROFILE: string;
			public static EXTRA_NEW_PROFILE: string;
			public static Companion: com.facebook.ProfileManager.Companion;
			public constructor(param0: androidx.localbroadcastmanager.content.LocalBroadcastManager, param1: com.facebook.ProfileCache);
			public setCurrentProfile(param0: com.facebook.Profile): void;
			public static getInstance(): com.facebook.ProfileManager;
			public loadCurrentProfile(): boolean;
			public getCurrentProfile(): com.facebook.Profile;
		}
		export module ProfileManager {
			export class Companion {
				public static class: java.lang.Class<com.facebook.ProfileManager.Companion>;
				public getInstance(): com.facebook.ProfileManager;
			}
		}
	}
}

declare module com {
	export module facebook {
		export abstract class ProfileTracker {
			public static class: java.lang.Class<com.facebook.ProfileTracker>;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
			public onCurrentProfileChanged(param0: com.facebook.Profile, param1: com.facebook.Profile): void;
		}
		export module ProfileTracker {
			export class ProfileBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.ProfileTracker.ProfileBroadcastReceiver>;
				public constructor(param0: com.facebook.ProfileTracker);
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressNoopOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressNoopOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public getProgressMap(): java.util.Map<com.facebook.GraphRequest,com.facebook.RequestProgress>;
			public write(param0: number): void;
			public constructor(param0: globalAndroid.os.Handler);
			public getMaxProgress(): number;
			public write(param0: androidNative.Array<number>): void;
			public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
			public addProgress(param0: number): void;
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public getMaxProgress(): number;
			public getBatchProgress(): number;
			public constructor(param0: java.io.OutputStream, param1: com.facebook.GraphRequestBatch, param2: java.util.Map<com.facebook.GraphRequest,com.facebook.RequestProgress>, param3: number);
			public close(): void;
			public write(param0: androidNative.Array<number>): void;
			public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestOutputStream {
			public static class: java.lang.Class<com.facebook.RequestOutputStream>;
			/**
			 * Constructs a new instance of the com.facebook.RequestOutputStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setCurrentRequest(param0: com.facebook.GraphRequest): void;
			});
			public constructor();
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestProgress {
			public static class: java.lang.Class<com.facebook.RequestProgress>;
			public getProgress(): number;
			public reportProgress(): void;
			public getMaxProgress(): number;
			public constructor(param0: globalAndroid.os.Handler, param1: com.facebook.GraphRequest);
			public addToMax(param0: number): void;
			public addProgress(param0: number): void;
		}
	}
}

declare module com {
	export module facebook {
		export class ShareGraphRequest {
			public static class: java.lang.Class<com.facebook.ShareGraphRequest>;
			public static createOpenGraphObject(param0: com.facebook.share.model.ShareOpenGraphObject): com.facebook.GraphRequest;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class UserSettingsManager {
			public static class: java.lang.Class<com.facebook.UserSettingsManager>;
			public static INSTANCE: com.facebook.UserSettingsManager;
			public static getAutoLogAppEventsEnabled(): boolean;
			public static getCodelessSetupEnabled(): boolean;
			public static setAutoLogAppEventsEnabled(param0: boolean): void;
			public static getMonitorEnabled(): boolean;
			public static logIfAutoAppLinkEnabled(): void;
			public static setAutoInitEnabled(param0: boolean): void;
			public static setAdvertiserIDCollectionEnabled(param0: boolean): void;
			public static getAutoInitEnabled(): boolean;
			public static setMonitorEnabled(param0: boolean): void;
			public static getAdvertiserIDCollectionEnabled(): boolean;
		}
		export module UserSettingsManager {
			export class UserSetting {
				public static class: java.lang.Class<com.facebook.UserSettingsManager.UserSetting>;
				public setDefaultVal(param0: boolean): void;
				public setValue(param0: java.lang.Boolean): void;
				public setLastTS(param0: number): void;
				public getDefaultVal(): boolean;
				public constructor(param0: boolean, param1: string);
				public getValue(): java.lang.Boolean;
				public setKey(param0: string): void;
				public getLastTS(): number;
				public getValue(): boolean;
				public getKey(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class WebDialog {
			public static class: java.lang.Class<com.facebook.WebDialog>;
			public static setWebDialogTheme(param0: number): void;
			public static getWebDialogTheme(): number;
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AccessTokenAppIdPair {
				public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair>;
				public static Companion: com.facebook.appevents.AccessTokenAppIdPair.Companion;
				public constructor(param0: com.facebook.AccessToken);
				public getAccessTokenString(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getApplicationId(): string;
				public constructor(param0: string, param1: string);
			}
			export module AccessTokenAppIdPair {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.Companion>;
				}
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1>;
					public static Companion: com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1.Companion;
					public constructor(param0: string, param1: string);
				}
				export module SerializationProxyV1 {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AnalyticsUserIDStore {
				public static class: java.lang.Class<com.facebook.appevents.AnalyticsUserIDStore>;
				public static INSTANCE: com.facebook.appevents.AnalyticsUserIDStore;
				public static setUserID(param0: string): void;
				public static initStore(): void;
				public static getUserID(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEvent {
				public static class: java.lang.Class<com.facebook.appevents.AppEvent>;
				public static Companion: com.facebook.appevents.AppEvent.Companion;
				public getJSONObject(): org.json.JSONObject;
				public constructor(param0: string, param1: string, param2: java.lang.Double, param3: globalAndroid.os.Bundle, param4: boolean, param5: boolean, param6: java.util.UUID);
				public isImplicit(): boolean;
				public getJsonObject(): org.json.JSONObject;
				public getIsImplicit(): boolean;
				public getName(): string;
				public isChecksumValid(): boolean;
				public toString(): string;
			}
			export module AppEvent {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.Companion>;
				}
				export class SerializationProxyV2 {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2>;
					public static Companion: com.facebook.appevents.AppEvent.SerializationProxyV2.Companion;
					public constructor(param0: string, param1: boolean, param2: boolean, param3: string);
				}
				export module SerializationProxyV2 {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventCollection {
				public static class: java.lang.Class<com.facebook.appevents.AppEventCollection>;
				public addEvent(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public addPersistedEvents(param0: com.facebook.appevents.PersistedEvents): void;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): com.facebook.appevents.SessionEventsState;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public getEventCount(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventQueue {
				public static class: java.lang.Class<com.facebook.appevents.AppEventQueue>;
				public static INSTANCE: com.facebook.appevents.AppEventQueue;
				public static flush(param0: com.facebook.appevents.FlushReason): void;
				public static add(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public static buildRequests(param0: com.facebook.appevents.AppEventCollection, param1: com.facebook.appevents.FlushStatistics): java.util.List<com.facebook.GraphRequest>;
				public static buildRequestForSession(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.SessionEventsState, param2: boolean, param3: com.facebook.appevents.FlushStatistics): com.facebook.GraphRequest;
				public static sendEventsToServer(param0: com.facebook.appevents.FlushReason, param1: com.facebook.appevents.AppEventCollection): com.facebook.appevents.FlushStatistics;
				public static persistToDisk(): void;
				public static getKeySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public static handleResponse(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.GraphRequest, param2: com.facebook.GraphResponse, param3: com.facebook.appevents.SessionEventsState, param4: com.facebook.appevents.FlushStatistics): void;
				public static flushAndWait(param0: com.facebook.appevents.FlushReason): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventStore {
				public static class: java.lang.Class<com.facebook.appevents.AppEventStore>;
				public static INSTANCE: com.facebook.appevents.AppEventStore;
				public static persistEvents(param0: com.facebook.appevents.AppEventCollection): void;
				public static readAndClearStore(): com.facebook.appevents.PersistedEvents;
				public static saveEventsToDisk$facebook_core_release(param0: com.facebook.appevents.PersistedEvents): void;
				public static persistEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.SessionEventsState): void;
			}
			export module AppEventStore {
				export class MovedClassObjectInputStream {
					public static class: java.lang.Class<com.facebook.appevents.AppEventStore.MovedClassObjectInputStream>;
					public static Companion: com.facebook.appevents.AppEventStore.MovedClassObjectInputStream.Companion;
					public constructor(param0: java.io.InputStream);
					public readClassDescriptor(): java.io.ObjectStreamClass;
				}
				export module MovedClassObjectInputStream {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.AppEventStore.MovedClassObjectInputStream.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsConstants {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsConstants>;
				public static EVENT_NAME_ACTIVATED_APP: string;
				public static EVENT_NAME_DEACTIVATED_APP: string;
				public static EVENT_NAME_SESSION_INTERRUPTIONS: string;
				public static EVENT_NAME_TIME_BETWEEN_SESSIONS: string;
				public static EVENT_NAME_COMPLETED_REGISTRATION: string;
				public static EVENT_NAME_VIEWED_CONTENT: string;
				public static EVENT_NAME_SEARCHED: string;
				public static EVENT_NAME_RATED: string;
				public static EVENT_NAME_COMPLETED_TUTORIAL: string;
				public static EVENT_NAME_PUSH_TOKEN_OBTAINED: string;
				public static EVENT_NAME_ADDED_TO_CART: string;
				public static EVENT_NAME_ADDED_TO_WISHLIST: string;
				public static EVENT_NAME_INITIATED_CHECKOUT: string;
				public static EVENT_NAME_ADDED_PAYMENT_INFO: string;
				public static EVENT_NAME_PURCHASED: string;
				public static EVENT_NAME_ACHIEVED_LEVEL: string;
				public static EVENT_NAME_UNLOCKED_ACHIEVEMENT: string;
				public static EVENT_NAME_SPENT_CREDITS: string;
				public static EVENT_NAME_CONTACT: string;
				public static EVENT_NAME_CUSTOMIZE_PRODUCT: string;
				public static EVENT_NAME_DONATE: string;
				public static EVENT_NAME_FIND_LOCATION: string;
				public static EVENT_NAME_SCHEDULE: string;
				public static EVENT_NAME_START_TRIAL: string;
				public static EVENT_NAME_SUBMIT_APPLICATION: string;
				public static EVENT_NAME_SUBSCRIBE: string;
				public static EVENT_NAME_AD_IMPRESSION: string;
				public static EVENT_NAME_AD_CLICK: string;
				public static EVENT_NAME_LIVE_STREAMING_START: string;
				public static EVENT_NAME_LIVE_STREAMING_STOP: string;
				public static EVENT_NAME_LIVE_STREAMING_PAUSE: string;
				public static EVENT_NAME_LIVE_STREAMING_RESUME: string;
				public static EVENT_NAME_LIVE_STREAMING_ERROR: string;
				public static EVENT_NAME_LIVE_STREAMING_UPDATE_STATUS: string;
				public static EVENT_NAME_PRODUCT_CATALOG_UPDATE: string;
				public static EVENT_PARAM_LIVE_STREAMING_PREV_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_ERROR: string;
				public static EVENT_PARAM_CURRENCY: string;
				public static EVENT_PARAM_REGISTRATION_METHOD: string;
				public static EVENT_PARAM_CONTENT_TYPE: string;
				public static EVENT_PARAM_CONTENT: string;
				public static EVENT_PARAM_CONTENT_ID: string;
				public static EVENT_PARAM_SEARCH_STRING: string;
				public static EVENT_PARAM_SUCCESS: string;
				public static EVENT_PARAM_MAX_RATING_VALUE: string;
				public static EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string;
				public static EVENT_PARAM_NUM_ITEMS: string;
				public static EVENT_PARAM_LEVEL: string;
				public static EVENT_PARAM_DESCRIPTION: string;
				public static EVENT_PARAM_SOURCE_APPLICATION: string;
				public static EVENT_PARAM_PACKAGE_FP: string;
				public static EVENT_PARAM_APP_CERT_HASH: string;
				public static EVENT_PARAM_VALUE_YES: string;
				public static EVENT_PARAM_VALUE_NO: string;
				public static EVENT_PARAM_AD_TYPE: string;
				public static EVENT_PARAM_ORDER_ID: string;
				public static EVENT_PARAM_VALUE_TO_SUM: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_0: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_1: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_2: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_3: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_4: string;
				public static EVENT_PARAM_PRODUCT_CATEGORY: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_PACKAGE: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_NAME: string;
				public static INSTANCE: com.facebook.appevents.AppEventsConstants;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLogger {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger>;
				public static ACTION_APP_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_FLUSH_RESULT: string;
				public static Companion: com.facebook.appevents.AppEventsLogger.Companion;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
				public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
				public static initializeLib(param0: globalAndroid.content.Context, param1: string): void;
				public logEvent(param0: string, param1: number): void;
				public static newLogger(param0: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
				public flush(): void;
				public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
				public static setUserID(param0: string): void;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public logProductItem(param0: string, param1: com.facebook.appevents.AppEventsLogger.ProductAvailability, param2: com.facebook.appevents.AppEventsLogger.ProductCondition, param3: string, param4: string, param5: string, param6: string, param7: java.math.BigDecimal, param8: java.util.Currency, param9: string, param10: string, param11: string, param12: globalAndroid.os.Bundle): void;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public getApplicationId(): string;
				public static activateApp(param0: globalAndroid.app.Application): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static getUserID(): string;
				public static clearUserData(): void;
				public logEvent(param0: string): void;
				public static setPushNotificationsRegistrationId(param0: string): void;
				public static setInstallReferrer(param0: string): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle): void;
				public static augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle, param1: string): void;
				public static getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public static setUserData(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static activateApp(param0: globalAndroid.app.Application, param1: string): void;
				public static getUserData(): string;
				public static clearUserID(): void;
				public static onContextStop(): void;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
			}
			export module AppEventsLogger {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.Companion>;
					public getUserID(): string;
					public getUserData(): string;
					public activateApp(param0: globalAndroid.app.Application, param1: string): void;
					public setUserData(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): void;
					public initializeLib(param0: globalAndroid.content.Context, param1: string): void;
					public setUserID(param0: string): void;
					public getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
					public clearUserData(): void;
					public onContextStop(): void;
					public clearUserID(): void;
					public newLogger(param0: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
					public newLogger(param0: globalAndroid.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
					public setInstallReferrer(param0: string): void;
					public setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
					public setPushNotificationsRegistrationId(param0: string): void;
					public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public activateApp(param0: globalAndroid.app.Application): void;
					public newLogger(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
					public augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
					public newLogger(param0: globalAndroid.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				}
				export class FlushBehavior {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
				}
				export class ProductAvailability {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
					public static IN_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static OUT_OF_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static PREORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static AVALIABLE_FOR_ORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static DISCONTINUED: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
				}
				export class ProductCondition {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductCondition>;
					public static NEW: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static REFURBISHED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static USED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static values(): androidNative.Array<com.facebook.appevents.AppEventsLogger.ProductCondition>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLoggerImpl {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsLoggerImpl>;
				public static Companion: com.facebook.appevents.AppEventsLoggerImpl.Companion;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
				public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle, param3: boolean): void;
				public logEvent(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle, param3: boolean, param4: java.util.UUID): void;
				public static getInstallReferrer(): string;
				public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
				public static initializeLib(param0: globalAndroid.content.Context, param1: string): void;
				public logEvent(param0: string, param1: number): void;
				public flush(): void;
				public logEventImplicitly(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
				public logSdkEvent(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken);
				public logProductItem(param0: string, param1: com.facebook.appevents.AppEventsLogger.ProductAvailability, param2: com.facebook.appevents.AppEventsLogger.ProductCondition, param3: string, param4: string, param5: string, param6: string, param7: java.math.BigDecimal, param8: java.util.Currency, param9: string, param10: string, param11: string, param12: globalAndroid.os.Bundle): void;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public getApplicationId(): string;
				public logEvent(param0: string): void;
				public static setPushNotificationsRegistrationId(param0: string): void;
				public logEventImplicitly(param0: string, param1: java.math.BigDecimal, param2: java.util.Currency, param3: globalAndroid.os.Bundle): void;
				public static getPushNotificationsRegistrationId(): string;
				public static setInstallReferrer(param0: string): void;
				public constructor(param0: string, param1: string, param2: com.facebook.AccessToken);
				public static augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle, param1: string): void;
				public static getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public static getAnalyticsExecutor(): java.util.concurrent.Executor;
				public logEventFromSE(param0: string, param1: string): void;
				public static activateApp(param0: globalAndroid.app.Application, param1: string): void;
				public static onContextStop(): void;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
				public static functionDEPRECATED(param0: string): void;
			}
			export module AppEventsLoggerImpl {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLoggerImpl.Companion>;
					public getPushNotificationsRegistrationId(): string;
					public activateApp(param0: globalAndroid.app.Application, param1: string): void;
					public initializeLib(param0: globalAndroid.content.Context, param1: string): void;
					public eagerFlush(): void;
					public getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
					public onContextStop(): void;
					public functionDEPRECATED(param0: string): void;
					public getAnalyticsExecutor(): java.util.concurrent.Executor;
					public getInstallReferrer(): string;
					public setInstallReferrer(param0: string): void;
					public setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
					public setPushNotificationsRegistrationId(param0: string): void;
					public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsManager {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsManager>;
				public static INSTANCE: com.facebook.appevents.AppEventsManager;
				public static start(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FacebookSDKJSInterface {
				public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface>;
				public static Companion: com.facebook.appevents.FacebookSDKJSInterface.Companion;
				public sendEvent(param0: string, param1: string, param2: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public getProtocol(): string;
			}
			export module FacebookSDKJSInterface {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface.Companion>;
					public getTAG(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushReason {
				public static class: java.lang.Class<com.facebook.appevents.FlushReason>;
				public static EXPLICIT: com.facebook.appevents.FlushReason;
				public static TIMER: com.facebook.appevents.FlushReason;
				public static SESSION_CHANGE: com.facebook.appevents.FlushReason;
				public static PERSISTED_EVENTS: com.facebook.appevents.FlushReason;
				public static EVENT_THRESHOLD: com.facebook.appevents.FlushReason;
				public static EAGER_FLUSHING_EVENT: com.facebook.appevents.FlushReason;
				public static values(): androidNative.Array<com.facebook.appevents.FlushReason>;
				public static valueOf(param0: string): com.facebook.appevents.FlushReason;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushResult {
				public static class: java.lang.Class<com.facebook.appevents.FlushResult>;
				public static SUCCESS: com.facebook.appevents.FlushResult;
				public static SERVER_ERROR: com.facebook.appevents.FlushResult;
				public static NO_CONNECTIVITY: com.facebook.appevents.FlushResult;
				public static UNKNOWN_ERROR: com.facebook.appevents.FlushResult;
				public static values(): androidNative.Array<com.facebook.appevents.FlushResult>;
				public static valueOf(param0: string): com.facebook.appevents.FlushResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushStatistics {
				public static class: java.lang.Class<com.facebook.appevents.FlushStatistics>;
				public setResult(param0: com.facebook.appevents.FlushResult): void;
				public getResult(): com.facebook.appevents.FlushResult;
				public setNumEvents(param0: number): void;
				public getNumEvents(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class InternalAppEventsLogger {
				public static class: java.lang.Class<com.facebook.appevents.InternalAppEventsLogger>;
				public static Companion: com.facebook.appevents.InternalAppEventsLogger.Companion;
				public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public logEventImplicitly(param0: string, param1: java.math.BigDecimal, param2: java.util.Currency, param3: globalAndroid.os.Bundle): void;
				public static getPushNotificationsRegistrationId(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: string, param1: string, param2: com.facebook.AccessToken);
				public constructor(param0: com.facebook.appevents.AppEventsLoggerImpl);
				public static setUserData(param0: globalAndroid.os.Bundle): void;
				public logChangedSettingsEvent(param0: globalAndroid.os.Bundle): void;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public logEventImplicitly(param0: string): void;
				public logEventImplicitly(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public flush(): void;
				public logEventImplicitly(param0: string, param1: globalAndroid.os.Bundle): void;
				public static getAnalyticsExecutor(): java.util.concurrent.Executor;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public logEventFromSE(param0: string, param1: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public static setInternalUserData(param0: java.util.Map<string,string>): void;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
			}
			export module InternalAppEventsLogger {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.InternalAppEventsLogger.Companion>;
					public getPushNotificationsRegistrationId(): string;
					public getAnalyticsExecutor(): java.util.concurrent.Executor;
					public setUserData(param0: globalAndroid.os.Bundle): void;
					public getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public setInternalUserData(param0: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class PerformanceGuardian {
				public static class: java.lang.Class<com.facebook.appevents.PerformanceGuardian>;
				public static INSTANCE: com.facebook.appevents.PerformanceGuardian;
				public static isBannedActivity(param0: string, param1: com.facebook.appevents.PerformanceGuardian.UseCase): boolean;
				public static limitProcessTime(param0: string, param1: com.facebook.appevents.PerformanceGuardian.UseCase, param2: number, param3: number): void;
			}
			export module PerformanceGuardian {
				export class UseCase {
					public static class: java.lang.Class<com.facebook.appevents.PerformanceGuardian.UseCase>;
					public static CODELESS: com.facebook.appevents.PerformanceGuardian.UseCase;
					public static SUGGESTED_EVENT: com.facebook.appevents.PerformanceGuardian.UseCase;
					public static values(): androidNative.Array<com.facebook.appevents.PerformanceGuardian.UseCase>;
					public static valueOf(param0: string): com.facebook.appevents.PerformanceGuardian.UseCase;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.facebook.appevents.PerformanceGuardian.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class PersistedEvents {
				public static class: java.lang.Class<com.facebook.appevents.PersistedEvents>;
				public static Companion: com.facebook.appevents.PersistedEvents.Companion;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public containsKey(param0: com.facebook.appevents.AccessTokenAppIdPair): boolean;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): java.util.List<com.facebook.appevents.AppEvent>;
				public constructor(param0: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair,java.util.List<com.facebook.appevents.AppEvent>>);
				public addEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: java.util.List<com.facebook.appevents.AppEvent>): void;
				public constructor();
			}
			export module PersistedEvents {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.Companion>;
				}
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1>;
					public static Companion: com.facebook.appevents.PersistedEvents.SerializationProxyV1.Companion;
					public constructor(param0: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair,java.util.List<com.facebook.appevents.AppEvent>>);
				}
				export module SerializationProxyV1 {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class SessionEventsState {
				public static class: java.lang.Class<com.facebook.appevents.SessionEventsState>;
				public static Companion: com.facebook.appevents.SessionEventsState.Companion;
				public constructor(param0: com.facebook.internal.AttributionIdentifiers, param1: string);
				public clearInFlightAndStats(param0: boolean): void;
				public addEvent(param0: com.facebook.appevents.AppEvent): void;
				public populateRequest(param0: com.facebook.GraphRequest, param1: globalAndroid.content.Context, param2: boolean, param3: boolean): number;
				public accumulatePersistedEvents(param0: java.util.List<com.facebook.appevents.AppEvent>): void;
				public getAccumulatedEventCount(): number;
				public getEventsToPersist(): java.util.List<com.facebook.appevents.AppEvent>;
			}
			export module SessionEventsState {
				export class Companion {
					public static class: java.lang.Class<com.facebook.appevents.SessionEventsState.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class UserDataStore {
				public static class: java.lang.Class<com.facebook.appevents.UserDataStore>;
				public static EMAIL: string;
				public static FIRST_NAME: string;
				public static LAST_NAME: string;
				public static PHONE: string;
				public static DATE_OF_BIRTH: string;
				public static GENDER: string;
				public static CITY: string;
				public static STATE: string;
				public static ZIP: string;
				public static COUNTRY: string;
				public static INSTANCE: com.facebook.appevents.UserDataStore;
				public static getHashedUserData$facebook_core_release(): string;
				public static setUserDataAndHash(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): void;
				public static clear(): void;
				public static initStore(): void;
				public static setInternalUd(param0: java.util.Map<string,string>): void;
				public static setUserDataAndHash(param0: globalAndroid.os.Bundle): void;
				public static getAllHashedUserData(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataIndexer {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataIndexer>;
					public static INSTANCE: com.facebook.appevents.aam.MetadataIndexer;
					public static enable(): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataMatcher {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataMatcher>;
					public static INSTANCE: com.facebook.appevents.aam.MetadataMatcher;
					public static matchIndicator(param0: java.util.List<string>, param1: java.util.List<string>): boolean;
					public static getCurrentViewIndicators(param0: globalAndroid.view.View): java.util.List<string>;
					public static getAroundViewIndicators(param0: globalAndroid.view.View): java.util.List<string>;
					public static matchValue(param0: string, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataRule {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataRule>;
					public static Companion: com.facebook.appevents.aam.MetadataRule.Companion;
					public static getEnabledRuleNames(): java.util.Set<string>;
					public getName(): string;
					public static updateRules(param0: string): void;
					public getValRule(): string;
					public getKeyRules(): java.util.List<string>;
					public static getRules(): java.util.Set<com.facebook.appevents.aam.MetadataRule>;
				}
				export module MetadataRule {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.aam.MetadataRule.Companion>;
						public getEnabledRuleNames(): java.util.Set<string>;
						public getRules(): java.util.Set<com.facebook.appevents.aam.MetadataRule>;
						public updateRules(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataViewObserver {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataViewObserver>;
					public static Companion: com.facebook.appevents.aam.MetadataViewObserver.Companion;
					public static startTrackingActivity(param0: globalAndroid.app.Activity): void;
					public static stopTrackingActivity(param0: globalAndroid.app.Activity): void;
					public onGlobalFocusChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				}
				export module MetadataViewObserver {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.aam.MetadataViewObserver.Companion>;
						public startTrackingActivity(param0: globalAndroid.app.Activity): void;
						public stopTrackingActivity(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessLoggingEventListener {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener>;
					public static INSTANCE: com.facebook.appevents.codeless.CodelessLoggingEventListener;
					public updateParameters$facebook_core_release(param0: globalAndroid.os.Bundle): void;
					public static logEvent$facebook_core_release(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): void;
					public static getOnClickListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener;
					public static getOnItemClickListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.widget.AdapterView<any>): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener;
				}
				export module CodelessLoggingEventListener {
					export class AutoLoggingOnClickListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener>;
						public getSupportCodelessLogging(): boolean;
						public setSupportCodelessLogging(param0: boolean): void;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
						public onClick(param0: globalAndroid.view.View): void;
					}
					export class AutoLoggingOnItemClickListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener>;
						public getSupportCodelessLogging(): boolean;
						public setSupportCodelessLogging(param0: boolean): void;
						public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.widget.AdapterView<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessManager {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessManager>;
					public static INSTANCE: com.facebook.appevents.codeless.CodelessManager;
					public static disable(): void;
					public static updateAppIndexing$facebook_core_release(param0: boolean): void;
					public static isDebugOnEmulator$facebook_core_release(): boolean;
					public static getCurrentDeviceSessionID$facebook_core_release(): string;
					public static getIsAppIndexingEnabled$facebook_core_release(): boolean;
					public static enable(): void;
					public static onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public static checkCodelessSession$facebook_core_release(param0: string): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
					public static onActivityPaused(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessMatcher {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher>;
					public static Companion: com.facebook.appevents.codeless.CodelessMatcher.Companion;
					public add(param0: globalAndroid.app.Activity): void;
					public remove(param0: globalAndroid.app.Activity): void;
					public static getParameters(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): globalAndroid.os.Bundle;
					public static getInstance(): com.facebook.appevents.codeless.CodelessMatcher;
					public destroy(param0: globalAndroid.app.Activity): void;
				}
				export module CodelessMatcher {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.Companion>;
						public getParameters(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): globalAndroid.os.Bundle;
						public getInstance(): com.facebook.appevents.codeless.CodelessMatcher;
					}
					export class MatchedView {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public constructor(param0: globalAndroid.view.View, param1: string);
						public getView(): globalAndroid.view.View;
						public getViewMapKey(): string;
					}
					export class ViewMatcher {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher>;
						public static Companion: com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher.Companion;
						public run(): void;
						public onScrollChanged(): void;
						public onGlobalLayout(): void;
						public static findViewByPath(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param3: number, param4: number, param5: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public constructor(param0: globalAndroid.view.View, param1: globalAndroid.os.Handler, param2: java.util.HashSet<string>, param3: string);
					}
					export module ViewMatcher {
						export class Companion {
							public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher.Companion>;
							public findViewByPath(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param3: number, param4: number, param5: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class RCTCodelessLoggingEventListener {
					public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener>;
					public static INSTANCE: com.facebook.appevents.codeless.RCTCodelessLoggingEventListener;
					public static getOnTouchListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener;
				}
				export module RCTCodelessLoggingEventListener {
					export class AutoLoggingOnTouchListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener>;
						public getSupportCodelessLogging(): boolean;
						public setSupportCodelessLogging(param0: boolean): void;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class ViewIndexer {
					public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer>;
					public static Companion: com.facebook.appevents.codeless.ViewIndexer.Companion;
					public unschedule(): void;
					public static buildAppIndexingRequest(param0: string, param1: com.facebook.AccessToken, param2: string, param3: string): com.facebook.GraphRequest;
					public processRequest(param0: com.facebook.GraphRequest, param1: string): void;
					public static sendToServerUnityInstance(param0: string): void;
					public schedule(): void;
					public constructor(param0: globalAndroid.app.Activity);
				}
				export module ViewIndexer {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer.Companion>;
						public buildAppIndexingRequest(param0: string, param1: com.facebook.AccessToken, param2: string, param3: string): com.facebook.GraphRequest;
						public sendToServerUnityInstance(param0: string): void;
					}
					export class ScreenshotTaker extends java.util.concurrent.Callable<string> {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer.ScreenshotTaker>;
						public call(): string;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class ViewIndexingTrigger {
					public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger>;
					public static Companion: com.facebook.appevents.codeless.ViewIndexingTrigger.Companion;
					public setOnShakeListener(param0: com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener): void;
					public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
					public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
					public constructor();
				}
				export module ViewIndexingTrigger {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger.Companion>;
					}
					export class OnShakeListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener>;
						/**
						 * Constructs a new instance of the com.facebook.appevents.codeless.ViewIndexingTrigger$OnShakeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShake(): void;
						});
						public constructor();
						public onShake(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class Constants {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.Constants>;
						public static MAX_TREE_DEPTH: number;
						public static IS_CODELESS_EVENT_KEY: string;
						public static EVENT_MAPPING_PATH_TYPE_KEY: string;
						public static PATH_TYPE_RELATIVE: string;
						public static PATH_TYPE_ABSOLUTE: string;
						public static PLATFORM: string;
						public static APP_INDEXING_SCHEDULE_INTERVAL_MS: number;
						public static APP_INDEXING_ENABLED: string;
						public static DEVICE_SESSION_ID: string;
						public static EXTINFO: string;
						public static APP_INDEXING: string;
						public static BUTTON_SAMPLING: string;
						public static INSTANCE: com.facebook.appevents.codeless.internal.Constants;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class EventBinding {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding>;
						public static Companion: com.facebook.appevents.codeless.internal.EventBinding.Companion;
						public getViewParameters(): java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public getAppVersion(): string;
						public getActivityName(): string;
						public static getInstanceFromJson(param0: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
						public getEventName(): string;
						public getMethod(): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
						public static parseArray(param0: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
						public getViewPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public getComponentId(): string;
						public getPathType(): string;
						public constructor(param0: string, param1: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod, param2: com.facebook.appevents.codeless.internal.EventBinding.ActionType, param3: string, param4: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param5: java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>, param6: string, param7: string, param8: string);
						public getType(): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
					}
					export module EventBinding {
						export class ActionType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
							public static CLICK: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static SELECTED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static TEXT_CHANGED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
						}
						export class Companion {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.Companion>;
							public parseArray(param0: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
							public getInstanceFromJson(param0: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
						}
						export class MappingMethod {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
							public static MANUAL: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static INFERENCE: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ParameterComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public static Companion: com.facebook.appevents.codeless.internal.ParameterComponent.Companion;
						public getValue(): string;
						public constructor(param0: org.json.JSONObject);
						public getPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public getName(): string;
						public getPathType(): string;
					}
					export module ParameterComponent {
						export class Companion {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class PathComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent>;
						public static Companion: com.facebook.appevents.codeless.internal.PathComponent.Companion;
						public getHint(): string;
						public getMatchBitmask(): number;
						public getTag(): string;
						public constructor(param0: org.json.JSONObject);
						public getClassName(): string;
						public getIndex(): number;
						public getDescription(): string;
						public getText(): string;
						public getId(): number;
					}
					export module PathComponent {
						export class Companion {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.Companion>;
						}
						export class MatchBitmaskType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
							public static ID: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TEXT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TAG: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static DESCRIPTION: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static HINT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static values(): androidNative.Array<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class SensitiveUserDataUtils {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.SensitiveUserDataUtils>;
						public static INSTANCE: com.facebook.appevents.codeless.internal.SensitiveUserDataUtils;
						public static isSensitiveUserData(param0: globalAndroid.view.View): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class UnityReflection {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.UnityReflection>;
						public static INSTANCE: com.facebook.appevents.codeless.internal.UnityReflection;
						public static captureViewHierarchy(): void;
						public static sendMessage(param0: string, param1: string, param2: string): void;
						public static sendEventMapping(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ViewHierarchy {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ViewHierarchy>;
						public static INSTANCE: com.facebook.appevents.codeless.internal.ViewHierarchy;
						public static getDictionaryOfView(param0: globalAndroid.view.View): org.json.JSONObject;
						public static getClassTypeBitmask(param0: globalAndroid.view.View): number;
						public static getTextOfView(param0: globalAndroid.view.View): string;
						public static getExistingOnClickListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnClickListener;
						public static getExistingOnTouchListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
						public static setOnClickListener(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnClickListener): void;
						public static updateBasicInfoOfView(param0: globalAndroid.view.View, param1: org.json.JSONObject): void;
						public static getChildrenOfView(param0: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
						public isRCTButton(param0: globalAndroid.view.View, param1: globalAndroid.view.View): boolean;
						public static getParentOfView(param0: globalAndroid.view.View): globalAndroid.view.ViewGroup;
						public static getHintOfView(param0: globalAndroid.view.View): string;
						public static findRCTRootView(param0: globalAndroid.view.View): globalAndroid.view.View;
						public static updateAppearanceOfView(param0: globalAndroid.view.View, param1: org.json.JSONObject, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module eventdeactivation {
				export class EventDeactivationManager {
					public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager>;
					public static INSTANCE: com.facebook.appevents.eventdeactivation.EventDeactivationManager;
					public static processEvents(param0: java.util.List<com.facebook.appevents.AppEvent>): void;
					public static processDeprecatedParameters(param0: java.util.Map<string,string>, param1: string): void;
					public static enable(): void;
				}
				export module EventDeactivationManager {
					export class DeprecatedParamFilter {
						public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager.DeprecatedParamFilter>;
						public setDeprecateParams(param0: java.util.List<string>): void;
						public getEventName(): string;
						public setEventName(param0: string): void;
						public constructor(param0: string, param1: java.util.List<string>);
						public getDeprecateParams(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseActivityLifecycleTracker>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseActivityLifecycleTracker;
					public static startIapLogging(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseAutoLogger {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseAutoLogger>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseAutoLogger;
					public static startIapLogging(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseBillingClientWrapper {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper>;
					public static Companion: com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.Companion;
					public queryPurchase(param0: string, param1: java.lang.Runnable): void;
					public static getOrCreateInstance(param0: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper;
					public queryPurchaseHistory(param0: string, param1: java.lang.Runnable): void;
				}
				export module InAppPurchaseBillingClientWrapper {
					export class BillingClientStateListenerWrapper {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.BillingClientStateListenerWrapper>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
						public constructor();
					}
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.Companion>;
						public getSkuDetailsMap(): java.util.Map<string,org.json.JSONObject>;
						public isServiceConnected(): java.util.concurrent.atomic.AtomicBoolean;
						public getPurchaseDetailsMap(): java.util.Map<string,org.json.JSONObject>;
						public getOrCreateInstance(param0: globalAndroid.content.Context): com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper;
					}
					export class PurchaseHistoryResponseListenerWrapper {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.PurchaseHistoryResponseListenerWrapper>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
						public getRunnable(): java.lang.Runnable;
						public constructor(param0: java.lang.Runnable);
						public setRunnable(param0: java.lang.Runnable): void;
					}
					export class PurchasesUpdatedListenerWrapper {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.PurchasesUpdatedListenerWrapper>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
						public constructor();
					}
					export class SkuDetailsResponseListenerWrapper {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseBillingClientWrapper.SkuDetailsResponseListenerWrapper>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
						public getRunnable(): java.lang.Runnable;
						public parseSkuDetails(param0: java.util.List<any>): void;
						public constructor(param0: java.lang.Runnable);
						public setRunnable(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseEventManager {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseEventManager>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseEventManager;
					public static asInterface(param0: globalAndroid.content.Context, param1: globalAndroid.os.IBinder): any;
					public static getPurchasesInapp(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
					public static getSkuDetails(param0: globalAndroid.content.Context, param1: java.util.ArrayList<string>, param2: any, param3: boolean): java.util.Map<string,string>;
					public hasFreeTrialPeirod(param0: string): boolean;
					public static getPurchasesSubs(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
					public static clearSkuDetailsCache(): void;
					public static getPurchaseHistoryInapp(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseLoggerManager {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseLoggerManager>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseLoggerManager;
					public static filterPurchaseLogging(param0: java.util.Map<string,org.json.JSONObject>, param1: java.util.Map<string,any>): void;
					public cacheDeDupPurchase$facebook_core_release(param0: java.util.Map<string,org.json.JSONObject>): java.util.Map<string,org.json.JSONObject>;
					public static eligibleQueryPurchaseHistory(): boolean;
					public constructLoggingReadyMap$facebook_core_release(param0: java.util.Map<string,any>, param1: java.util.Map<string,any>): java.util.Map<string,string>;
					public clearOutdatedProductInfoInCache$facebook_core_release(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseManager {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseManager>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseManager;
					public static startTracking(): void;
					public static enableAutoLogging(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseSkuDetailsWrapper {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper>;
					public static Companion: com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper.Companion;
					public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.reflect.Method, param3: java.lang.reflect.Method, param4: java.lang.reflect.Method, param5: java.lang.reflect.Method);
					public static getOrCreateInstance(): com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper;
					public getSkuDetailsParams(param0: string, param1: java.util.List<string>): any;
					public getSkuDetailsParamsClazz(): java.lang.Class<any>;
				}
				export module InAppPurchaseSkuDetailsWrapper {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper.Companion>;
						public getOrCreateInstance(): com.facebook.appevents.iap.InAppPurchaseSkuDetailsWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module iap {
				export class InAppPurchaseUtils {
					public static class: java.lang.Class<com.facebook.appevents.iap.InAppPurchaseUtils>;
					public static INSTANCE: com.facebook.appevents.iap.InAppPurchaseUtils;
					public static getClass(param0: string): java.lang.Class<any>;
					public static getMethod(param0: java.lang.Class<any>, param1: string, param2: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
					public static invokeMethod(param0: java.lang.Class<any>, param1: java.lang.reflect.Method, param2: any, param3: androidNative.Array<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module integrity {
				export class IntegrityManager {
					public static class: java.lang.Class<com.facebook.appevents.integrity.IntegrityManager>;
					public static INTEGRITY_TYPE_NONE: string;
					public static INTEGRITY_TYPE_ADDRESS: string;
					public static INTEGRITY_TYPE_HEALTH: string;
					public static INSTANCE: com.facebook.appevents.integrity.IntegrityManager;
					public static processParameters(param0: java.util.Map<string,string>): void;
					public static enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class ActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.internal.ActivityLifecycleTracker>;
					public static INSTANCE: com.facebook.appevents.internal.ActivityLifecycleTracker;
					public static isInBackground(): boolean;
					public static getCurrentSessionGuid(): java.util.UUID;
					public static isTracking(): boolean;
					public static startTracking(param0: globalAndroid.app.Application, param1: string): void;
					public static getCurrentActivity(): globalAndroid.app.Activity;
					public static onActivityCreated(param0: globalAndroid.app.Activity): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventUtility>;
					public static INSTANCE: com.facebook.appevents.internal.AppEventUtility;
					public static assertIsNotMainThread(): void;
					public static getRootView(param0: globalAndroid.app.Activity): globalAndroid.view.View;
					public static bytesToHex(param0: androidNative.Array<number>): string;
					public static getAppVersion(): string;
					public static assertIsMainThread(): void;
					public static normalizePrice(param0: string): number;
					public static isEmulator(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventsLoggerUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility>;
					public static INSTANCE: com.facebook.appevents.internal.AppEventsLoggerUtility;
					public static getJSONObjectForGraphAPICall(param0: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean, param4: globalAndroid.content.Context): org.json.JSONObject;
				}
				export module AppEventsLoggerUtility {
					export class GraphAPIActivityType {
						public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
						public static MOBILE_INSTALL_EVENT: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static CUSTOM_APP_EVENTS: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static values(): androidNative.Array<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
						public static valueOf(param0: string): com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AutomaticAnalyticsLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger>;
					public static INSTANCE: com.facebook.appevents.internal.AutomaticAnalyticsLogger;
					public static logPurchase(param0: string, param1: string, param2: boolean): void;
					public static isImplicitPurchaseLoggingEnabled(): boolean;
					public static logActivateAppEvent(): void;
					public static logActivityTimeSpentEvent(param0: string, param1: number): void;
				}
				export module AutomaticAnalyticsLogger {
					export class PurchaseLoggingParameters {
						public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>;
						public getPurchaseAmount(): java.math.BigDecimal;
						public getCurrency(): java.util.Currency;
						public getParam(): globalAndroid.os.Bundle;
						public setPurchaseAmount(param0: java.math.BigDecimal): void;
						public setParam(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle);
						public setCurrency(param0: java.util.Currency): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class Constants {
					public static class: java.lang.Class<com.facebook.appevents.internal.Constants>;
					public static LOG_TIME_APP_EVENT_KEY: string;
					public static EVENT_NAME_EVENT_KEY: string;
					public static EVENT_NAME_MD5_EVENT_KEY: string;
					public static AA_TIME_SPENT_EVENT_NAME: string;
					public static AA_TIME_SPENT_SCREEN_PARAMETER_NAME: string;
					public static IAP_PRODUCT_ID: string;
					public static IAP_PURCHASE_TIME: string;
					public static IAP_PURCHASE_TOKEN: string;
					public static IAP_PRODUCT_TYPE: string;
					public static IAP_PRODUCT_TITLE: string;
					public static IAP_PRODUCT_DESCRIPTION: string;
					public static IAP_PACKAGE_NAME: string;
					public static IAP_SUBSCRIPTION_AUTORENEWING: string;
					public static IAP_SUBSCRIPTION_PERIOD: string;
					public static IAP_FREE_TRIAL_PERIOD: string;
					public static IAP_INTRO_PRICE_AMOUNT_MICROS: string;
					public static IAP_INTRO_PRICE_CYCLES: string;
					public static EVENT_PARAM_PRODUCT_ITEM_ID: string;
					public static EVENT_PARAM_PRODUCT_AVAILABILITY: string;
					public static EVENT_PARAM_PRODUCT_CONDITION: string;
					public static EVENT_PARAM_PRODUCT_DESCRIPTION: string;
					public static EVENT_PARAM_PRODUCT_IMAGE_LINK: string;
					public static EVENT_PARAM_PRODUCT_LINK: string;
					public static EVENT_PARAM_PRODUCT_TITLE: string;
					public static EVENT_PARAM_PRODUCT_GTIN: string;
					public static EVENT_PARAM_PRODUCT_MPN: string;
					public static EVENT_PARAM_PRODUCT_BRAND: string;
					public static EVENT_PARAM_PRODUCT_PRICE_AMOUNT: string;
					public static EVENT_PARAM_PRODUCT_PRICE_CURRENCY: string;
					public static INSTANCE: com.facebook.appevents.internal.Constants;
					public static getDefaultAppEventsSessionTimeoutInSeconds(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class FileDownloadTask extends globalAndroid.os.AsyncTask<string,java.lang.Void,java.lang.Boolean> {
					public static class: java.lang.Class<com.facebook.appevents.internal.FileDownloadTask>;
					public onPostExecute(param0: boolean): void;
					public constructor(param0: string, param1: java.io.File, param2: com.facebook.appevents.internal.FileDownloadTask.Callback);
					public doInBackground(param0: androidNative.Array<string>): java.lang.Boolean;
				}
				export module FileDownloadTask {
					export class Callback {
						public static class: java.lang.Class<com.facebook.appevents.internal.FileDownloadTask.Callback>;
						/**
						 * Constructs a new instance of the com.facebook.appevents.internal.FileDownloadTask$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: java.io.File): void;
						});
						public constructor();
						public onComplete(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class HashUtils {
					public static class: java.lang.Class<com.facebook.appevents.internal.HashUtils>;
					public static INSTANCE: com.facebook.appevents.internal.HashUtils;
					public static computeChecksumWithPackageManager(param0: globalAndroid.content.Context, param1: java.lang.Long): string;
					public static computeChecksum(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo>;
					public static Companion: com.facebook.appevents.internal.SessionInfo.Companion;
					public getDiskRestoreTime(): java.lang.Long;
					public getSourceApplicationInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public static getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
					public getInterruptionCount(): number;
					public getSessionId(): java.util.UUID;
					public static clearSavedSessionFromDisk(): void;
					public incrementInterruptionCount(): void;
					public setDiskRestoreTime(param0: java.lang.Long): void;
					public setSourceApplicationInfo(param0: com.facebook.appevents.internal.SourceApplicationInfo): void;
					public writeSessionToDisk(): void;
					public getSessionLastEventTime(): java.lang.Long;
					public setSessionLastEventTime(param0: java.lang.Long): void;
					public getSessionLength(): number;
					public getSessionStartTime(): java.lang.Long;
					public setSessionId(param0: java.util.UUID): void;
					public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.util.UUID);
					public constructor(param0: java.lang.Long, param1: java.lang.Long);
				}
				export module SessionInfo {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo.Companion>;
						public getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
						public clearSavedSessionFromDisk(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionLogger>;
					public static INSTANCE: com.facebook.appevents.internal.SessionLogger;
					public static logDeactivateApp(param0: string, param1: com.facebook.appevents.internal.SessionInfo, param2: string): void;
					public computePackageChecksum(param0: globalAndroid.content.Context): string;
					public static logActivateApp(param0: string, param1: com.facebook.appevents.internal.SourceApplicationInfo, param2: string, param3: globalAndroid.content.Context): void;
					public static getQuantaIndex(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SourceApplicationInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo>;
					public static Companion: com.facebook.appevents.internal.SourceApplicationInfo.Companion;
					public writeSourceApplicationInfoToDisk(): void;
					public toString(): string;
					public static clearSavedSourceApplicationInfoFromDisk(): void;
					public getCallingApplicationPackage(): string;
					public static getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public isOpenedByAppLink(): boolean;
				}
				export module SourceApplicationInfo {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Companion>;
						public clearSavedSourceApplicationInfoFromDisk(): void;
						public getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					}
					export class Factory {
						public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Factory>;
						public static INSTANCE: com.facebook.appevents.internal.SourceApplicationInfo.Factory;
						public static create(param0: globalAndroid.app.Activity): com.facebook.appevents.internal.SourceApplicationInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class ViewHierarchyConstants {
					public static class: java.lang.Class<com.facebook.appevents.internal.ViewHierarchyConstants>;
					public static ID_KEY: string;
					public static CLASS_NAME_KEY: string;
					public static CLASS_TYPE_BITMASK_KEY: string;
					public static TEXT_KEY: string;
					public static DESC_KEY: string;
					public static DIMENSION_KEY: string;
					public static IS_USER_INPUT_KEY: string;
					public static TAG_KEY: string;
					public static CHILDREN_VIEW_KEY: string;
					public static HINT_KEY: string;
					public static DIMENSION_TOP_KEY: string;
					public static DIMENSION_LEFT_KEY: string;
					public static DIMENSION_WIDTH_KEY: string;
					public static DIMENSION_HEIGHT_KEY: string;
					public static DIMENSION_SCROLL_X_KEY: string;
					public static DIMENSION_SCROLL_Y_KEY: string;
					public static DIMENSION_VISIBILITY_KEY: string;
					public static TEXT_SIZE: string;
					public static TEXT_IS_BOLD: string;
					public static TEXT_IS_ITALIC: string;
					public static TEXT_STYLE: string;
					public static ICON_BITMAP: string;
					public static INPUT_TYPE_KEY: string;
					public static IS_INTERACTED_KEY: string;
					public static SCREEN_NAME_KEY: string;
					public static VIEW_KEY: string;
					public static ENGLISH: string;
					public static GERMAN: string;
					public static SPANISH: string;
					public static JAPANESE: string;
					public static VIEW_CONTENT: string;
					public static SEARCH: string;
					public static ADD_TO_CART: string;
					public static ADD_TO_WISHLIST: string;
					public static INITIATE_CHECKOUT: string;
					public static ADD_PAYMENT_INFO: string;
					public static PURCHASE: string;
					public static LEAD: string;
					public static COMPLETE_REGISTRATION: string;
					public static BUTTON_TEXT: string;
					public static PAGE_TITLE: string;
					public static RESOLVED_DOCUMENT_LINK: string;
					public static BUTTON_ID: string;
					public static TEXTVIEW_BITMASK: number;
					public static IMAGEVIEW_BITMASK: number;
					public static BUTTON_BITMASK: number;
					public static CLICKABLE_VIEW_BITMASK: number;
					public static REACT_NATIVE_BUTTON_BITMASK: number;
					public static ADAPTER_VIEW_ITEM_BITMASK: number;
					public static LABEL_BITMASK: number;
					public static INPUT_BITMASK: number;
					public static PICKER_BITMASK: number;
					public static SWITCH_BITMASK: number;
					public static RADIO_GROUP_BITMASK: number;
					public static CHECKBOX_BITMASK: number;
					public static RATINGBAR_BITMASK: number;
					public static INSTANCE: com.facebook.appevents.internal.ViewHierarchyConstants;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class MTensor {
					public static class: java.lang.Class<com.facebook.appevents.ml.MTensor>;
					public static Companion: com.facebook.appevents.ml.MTensor.Companion;
					public getShapeSize(): number;
					public reshape(param0: androidNative.Array<number>): void;
					public getData(): androidNative.Array<number>;
					public getShape(param0: number): number;
					public constructor(param0: androidNative.Array<number>);
				}
				export module MTensor {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.ml.MTensor.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Model {
					public static class: java.lang.Class<com.facebook.appevents.ml.Model>;
					public static Companion: com.facebook.appevents.ml.Model.Companion;
					public predictOnMTML(param0: com.facebook.appevents.ml.MTensor, param1: androidNative.Array<string>, param2: string): com.facebook.appevents.ml.MTensor;
				}
				export module Model {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.ml.Model.Companion>;
						public build(param0: java.io.File): com.facebook.appevents.ml.Model;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class ModelManager {
					public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager>;
					public static INSTANCE: com.facebook.appevents.ml.ModelManager;
					public static getRuleFile(param0: com.facebook.appevents.ml.ModelManager.Task): java.io.File;
					public static predict(param0: com.facebook.appevents.ml.ModelManager.Task, param1: androidNative.Array<androidNative.Array<number>>, param2: androidNative.Array<string>): androidNative.Array<string>;
					public static enable(): void;
				}
				export module ModelManager {
					export class Task {
						public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.Task>;
						public static MTML_INTEGRITY_DETECT: com.facebook.appevents.ml.ModelManager.Task;
						public static MTML_APP_EVENT_PREDICTION: com.facebook.appevents.ml.ModelManager.Task;
						public toKey(): string;
						public static values(): androidNative.Array<com.facebook.appevents.ml.ModelManager.Task>;
						public toUseCase(): string;
						public static valueOf(param0: string): com.facebook.appevents.ml.ModelManager.Task;
					}
					export module Task {
						export class WhenMappings {
							public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.Task.WhenMappings>;
						}
					}
					export class TaskHandler {
						public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.TaskHandler>;
						public static Companion: com.facebook.appevents.ml.ModelManager.TaskHandler.Companion;
						public setVersionId(param0: number): void;
						public getRuleFile(): java.io.File;
						public getRuleUri(): string;
						public getThresholds(): androidNative.Array<number>;
						public getModel(): com.facebook.appevents.ml.Model;
						public setUseCase(param0: string): void;
						public setModel(param0: com.facebook.appevents.ml.Model): void;
						public setOnPostExecute(param0: java.lang.Runnable): com.facebook.appevents.ml.ModelManager.TaskHandler;
						public setRuleFile(param0: java.io.File): void;
						public getUseCase(): string;
						public getVersionId(): number;
						public constructor(param0: string, param1: string, param2: string, param3: number, param4: androidNative.Array<number>);
						public getAssetUri(): string;
						public setRuleUri(param0: string): void;
						public setThresholds(param0: androidNative.Array<number>): void;
						public setAssetUri(param0: string): void;
					}
					export module TaskHandler {
						export class Companion {
							public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.TaskHandler.Companion>;
							public execute(param0: com.facebook.appevents.ml.ModelManager.TaskHandler): void;
							public execute(param0: com.facebook.appevents.ml.ModelManager.TaskHandler, param1: java.util.List<com.facebook.appevents.ml.ModelManager.TaskHandler>): void;
							public build(param0: org.json.JSONObject): com.facebook.appevents.ml.ModelManager.TaskHandler;
						}
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Operator {
					public static class: java.lang.Class<com.facebook.appevents.ml.Operator>;
					public static INSTANCE: com.facebook.appevents.ml.Operator;
					public static addmv(param0: com.facebook.appevents.ml.MTensor, param1: com.facebook.appevents.ml.MTensor): void;
					public static flatten(param0: com.facebook.appevents.ml.MTensor, param1: number): void;
					public static transpose3D(param0: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
					public static mul(param0: com.facebook.appevents.ml.MTensor, param1: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
					public static concatenate(param0: androidNative.Array<com.facebook.appevents.ml.MTensor>): com.facebook.appevents.ml.MTensor;
					public static softmax(param0: com.facebook.appevents.ml.MTensor): void;
					public static maxPool1D(param0: com.facebook.appevents.ml.MTensor, param1: number): com.facebook.appevents.ml.MTensor;
					public static transpose2D(param0: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
					public static conv1D(param0: com.facebook.appevents.ml.MTensor, param1: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
					public static dense(param0: com.facebook.appevents.ml.MTensor, param1: com.facebook.appevents.ml.MTensor, param2: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
					public static relu(param0: com.facebook.appevents.ml.MTensor): void;
					public static embedding(param0: androidNative.Array<string>, param1: number, param2: com.facebook.appevents.ml.MTensor): com.facebook.appevents.ml.MTensor;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Utils {
					public static class: java.lang.Class<com.facebook.appevents.ml.Utils>;
					public static INSTANCE: com.facebook.appevents.ml.Utils;
					public vectorize(param0: string, param1: number): androidNative.Array<number>;
					public static parseModelWeights(param0: java.io.File): java.util.Map<string,com.facebook.appevents.ml.MTensor>;
					public normalizeString(param0: string): string;
					public static getMlDir(): java.io.File;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ondeviceprocessing {
				export class OnDeviceProcessingManager {
					public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.OnDeviceProcessingManager>;
					public static INSTANCE: com.facebook.appevents.ondeviceprocessing.OnDeviceProcessingManager;
					public static sendCustomEventAsync(param0: string, param1: com.facebook.appevents.AppEvent): void;
					public static sendInstallEventAsync(param0: string, param1: string): void;
					public static isOnDeviceProcessingEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ondeviceprocessing {
				export class RemoteServiceParametersHelper {
					public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceParametersHelper>;
					public static INSTANCE: com.facebook.appevents.ondeviceprocessing.RemoteServiceParametersHelper;
					public static buildEventsBundle(param0: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType, param1: string, param2: java.util.List<com.facebook.appevents.AppEvent>): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ondeviceprocessing {
				export class RemoteServiceWrapper {
					public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper>;
					public static RECEIVER_SERVICE_ACTION: string;
					public static RECEIVER_SERVICE_PACKAGE: string;
					public static RECEIVER_SERVICE_PACKAGE_WAKIZASHI: string;
					public static INSTANCE: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper;
					public static isServiceAvailable(): boolean;
					public static sendCustomEvents(param0: string, param1: java.util.List<com.facebook.appevents.AppEvent>): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
					public static sendInstallEvent(param0: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
				}
				export module RemoteServiceWrapper {
					export class EventType {
						public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType>;
						public static MOBILE_APP_INSTALL: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
						public static CUSTOM_APP_EVENTS: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
						public static values(): androidNative.Array<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType>;
						public static valueOf(param0: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.EventType;
						public toString(): string;
					}
					export class RemoteServiceConnection {
						public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.RemoteServiceConnection>;
						public onNullBinding(param0: globalAndroid.content.ComponentName): void;
						public constructor();
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public getBinder(): globalAndroid.os.IBinder;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					}
					export class ServiceResult {
						public static class: java.lang.Class<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult>;
						public static OPERATION_SUCCESS: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
						public static SERVICE_NOT_AVAILABLE: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
						public static SERVICE_ERROR: com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
						public static values(): androidNative.Array<com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult>;
						public static valueOf(param0: string): com.facebook.appevents.ondeviceprocessing.RemoteServiceWrapper.ServiceResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module restrictivedatafilter {
				export class RestrictiveDataManager {
					public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager>;
					public static INSTANCE: com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager;
					public static processParameters(param0: java.util.Map<string,string>, param1: string): void;
					public static enable(): void;
					public static processEvent(param0: string): string;
				}
				export module RestrictiveDataManager {
					export class RestrictiveParamFilter {
						public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager.RestrictiveParamFilter>;
						public getRestrictiveParams(): java.util.Map<string,string>;
						public getEventName(): string;
						public setRestrictiveParams(param0: java.util.Map<string,string>): void;
						public setEventName(param0: string): void;
						public constructor(param0: string, param1: java.util.Map<string,string>);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class FeatureExtractor {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.FeatureExtractor>;
					public static INSTANCE: com.facebook.appevents.suggestedevents.FeatureExtractor;
					public static initialize(param0: java.io.File): void;
					public static getTextFeature(param0: string, param1: string, param2: string): string;
					public static isInitialized(): boolean;
					public static getDenseFeatures(param0: org.json.JSONObject, param1: string): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class PredictionHistoryManager {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.PredictionHistoryManager>;
					public static INSTANCE: com.facebook.appevents.suggestedevents.PredictionHistoryManager;
					public static addPrediction(param0: string, param1: string): void;
					public static getPathID(param0: globalAndroid.view.View, param1: string): string;
					public static queryEvent(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class SuggestedEventViewHierarchy {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventViewHierarchy>;
					public static INSTANCE: com.facebook.appevents.suggestedevents.SuggestedEventViewHierarchy;
					public static updateBasicInfo(param0: globalAndroid.view.View, param1: org.json.JSONObject): void;
					public static getDictionaryOfView(param0: globalAndroid.view.View, param1: globalAndroid.view.View): org.json.JSONObject;
					public static getAllClickableViews(param0: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
					public static getTextOfViewRecursively(param0: globalAndroid.view.View): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class SuggestedEventsManager {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventsManager>;
					public static INSTANCE: com.facebook.appevents.suggestedevents.SuggestedEventsManager;
					public static isEnabled(): boolean;
					public populateEventsFromRawJsonString$facebook_core_release(param0: string): void;
					public static isProductionEvents$facebook_core_release(param0: string): boolean;
					public static trackActivity(param0: globalAndroid.app.Activity): void;
					public static enable(): void;
					public static isEligibleEvents$facebook_core_release(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class ViewObserver {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewObserver>;
					public static Companion: com.facebook.appevents.suggestedevents.ViewObserver.Companion;
					public static startTrackingActivity(param0: globalAndroid.app.Activity): void;
					public static stopTrackingActivity(param0: globalAndroid.app.Activity): void;
					public onGlobalLayout(): void;
				}
				export module ViewObserver {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewObserver.Companion>;
						public startTrackingActivity(param0: globalAndroid.app.Activity): void;
						public stopTrackingActivity(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class ViewOnClickListener {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewOnClickListener>;
					public static OTHER_EVENT: string;
					public static Companion: com.facebook.appevents.suggestedevents.ViewOnClickListener.Companion;
					public onClick(param0: globalAndroid.view.View): void;
					public static attachListener$facebook_core_release(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: string): void;
				}
				export module ViewOnClickListener {
					export class Companion {
						public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewOnClickListener.Companion>;
						public attachListener$facebook_core_release(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class AggregateException {
				public static class: java.lang.Class<com.facebook.bolts.AggregateException>;
				public static Companion: com.facebook.bolts.AggregateException.Companion;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public constructor(param0: string, param1: java.util.List<any>);
				public printStackTrace(param0: java.io.PrintStream): void;
			}
			export module AggregateException {
				export class Companion {
					public static class: java.lang.Class<com.facebook.bolts.AggregateException.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class AndroidExecutors {
				public static class: java.lang.Class<com.facebook.bolts.AndroidExecutors>;
				public static Companion: com.facebook.bolts.AndroidExecutors.Companion;
				public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
				public static uiThread(): java.util.concurrent.Executor;
			}
			export module AndroidExecutors {
				export class Companion {
					public static class: java.lang.Class<com.facebook.bolts.AndroidExecutors.Companion>;
					public uiThread(): java.util.concurrent.Executor;
					public newCachedThreadPool(): java.util.concurrent.ExecutorService;
				}
				export class UIThreadExecutor {
					public static class: java.lang.Class<com.facebook.bolts.AndroidExecutors.UIThreadExecutor>;
					public execute(param0: java.lang.Runnable): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class AppLink {
				public static class: java.lang.Class<com.facebook.bolts.AppLink>;
				public getTargets(): java.util.List<com.facebook.bolts.AppLink.Target>;
				public getWebUrl(): globalAndroid.net.Uri;
				public getSourceUrl(): globalAndroid.net.Uri;
				public constructor(param0: globalAndroid.net.Uri, param1: java.util.List<com.facebook.bolts.AppLink.Target>, param2: globalAndroid.net.Uri);
			}
			export module AppLink {
				export class Target {
					public static class: java.lang.Class<com.facebook.bolts.AppLink.Target>;
					public getClassName(): string;
					public constructor(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: string);
					public getPackageName(): string;
					public getAppName(): string;
					public getUrl(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class AppLinkResolver {
				public static class: java.lang.Class<com.facebook.bolts.AppLinkResolver>;
				/**
				 * Constructs a new instance of the com.facebook.bolts.AppLinkResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAppLinkFromUrlInBackground(param0: globalAndroid.net.Uri): com.facebook.bolts.Task<com.facebook.bolts.AppLink>;
				});
				public constructor();
				public getAppLinkFromUrlInBackground(param0: globalAndroid.net.Uri): com.facebook.bolts.Task<com.facebook.bolts.AppLink>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class AppLinks {
				public static class: java.lang.Class<com.facebook.bolts.AppLinks>;
				public static KEY_NAME_APPLINK_DATA: string;
				public static KEY_NAME_EXTRAS: string;
				public static INSTANCE: com.facebook.bolts.AppLinks;
				public static getAppLinkData(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static getAppLinkExtras(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class BoltsExecutors {
				public static class: java.lang.Class<com.facebook.bolts.BoltsExecutors>;
				public static Companion: com.facebook.bolts.BoltsExecutors.Companion;
				public static immediate$facebook_core_release(): java.util.concurrent.Executor;
				public static background(): java.util.concurrent.ExecutorService;
				public static scheduled$facebook_core_release(): java.util.concurrent.ScheduledExecutorService;
			}
			export module BoltsExecutors {
				export class Companion {
					public static class: java.lang.Class<com.facebook.bolts.BoltsExecutors.Companion>;
					public scheduled$facebook_core_release(): java.util.concurrent.ScheduledExecutorService;
					public background(): java.util.concurrent.ExecutorService;
					public immediate$facebook_core_release(): java.util.concurrent.Executor;
				}
				export class ImmediateExecutor {
					public static class: java.lang.Class<com.facebook.bolts.BoltsExecutors.ImmediateExecutor>;
					public static Companion: com.facebook.bolts.BoltsExecutors.ImmediateExecutor.Companion;
					public execute(param0: java.lang.Runnable): void;
					public constructor();
				}
				export module ImmediateExecutor {
					export class Companion {
						public static class: java.lang.Class<com.facebook.bolts.BoltsExecutors.ImmediateExecutor.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class CancellationToken {
				public static class: java.lang.Class<com.facebook.bolts.CancellationToken>;
				public register(param0: java.lang.Runnable): com.facebook.bolts.CancellationTokenRegistration;
				public throwIfCancellationRequested(): void;
				public toString(): string;
				public constructor(param0: com.facebook.bolts.CancellationTokenSource);
				public isCancellationRequested(): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class CancellationTokenRegistration {
				public static class: java.lang.Class<com.facebook.bolts.CancellationTokenRegistration>;
				public close(): void;
				public constructor(param0: com.facebook.bolts.CancellationTokenSource, param1: java.lang.Runnable);
				public runAction$facebook_core_release(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class CancellationTokenSource {
				public static class: java.lang.Class<com.facebook.bolts.CancellationTokenSource>;
				public getToken(): com.facebook.bolts.CancellationToken;
				public close(): void;
				public cancelAfter(param0: number): void;
				public register$facebook_core_release(param0: java.lang.Runnable): com.facebook.bolts.CancellationTokenRegistration;
				public cancel(): void;
				public throwIfCancellationRequested$facebook_core_release(): void;
				public toString(): string;
				public isCancellationRequested(): boolean;
				public unregister$facebook_core_release(param0: com.facebook.bolts.CancellationTokenRegistration): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class Continuation<TTaskResult, TContinuationResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.bolts.Continuation<any,any>>;
				/**
				 * Constructs a new instance of the com.facebook.bolts.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					then(param0: com.facebook.bolts.Task<TTaskResult>): TContinuationResult;
				});
				public constructor();
				public then(param0: com.facebook.bolts.Task<TTaskResult>): TContinuationResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class ExecutorException {
				public static class: java.lang.Class<com.facebook.bolts.ExecutorException>;
				public constructor(param0: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class Task<TResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.bolts.Task<any>>;
				public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
				public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
				public static Companion: com.facebook.bolts.Task.Companion;
				public getResult(): TResult;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.facebook.bolts.Continuation<java.lang.Void,com.facebook.bolts.Task<java.lang.Void>>, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
				public static delay(param0: number): com.facebook.bolts.Task<java.lang.Void>;
				public static call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public static call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
				public continueWith(param0: com.facebook.bolts.Continuation<any,any>, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public constructor();
				public continueWithTask(param0: com.facebook.bolts.Continuation<any,any>, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public isCompleted(): boolean;
				public cast(): com.facebook.bolts.Task<any>;
				public static delay(param0: number, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
				public static forError(param0: java.lang.Exception): com.facebook.bolts.Task<any>;
				public onSuccess(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public trySetResult(param0: TResult): boolean;
				public static callInBackground(param0: java.util.concurrent.Callable, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public onSuccess(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
				public static getUnobservedExceptionHandler(): com.facebook.bolts.Task.UnobservedExceptionHandler;
				public continueWithTask(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
				public static call(param0: java.util.concurrent.Callable): com.facebook.bolts.Task<any>;
				public continueWithTask(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public static call(param0: java.util.concurrent.Callable, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public static whenAllResult(param0: java.util.Collection): com.facebook.bolts.Task<any>;
				public static setUnobservedExceptionHandler(param0: com.facebook.bolts.Task.UnobservedExceptionHandler): void;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.facebook.bolts.Continuation<java.lang.Void,com.facebook.bolts.Task<java.lang.Void>>, param2: java.util.concurrent.Executor, param3: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
				public static whenAll(param0: java.util.Collection<any>): com.facebook.bolts.Task<java.lang.Void>;
				public trySetError(param0: java.lang.Exception): boolean;
				public onSuccessTask(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.facebook.bolts.Continuation<java.lang.Void,com.facebook.bolts.Task<java.lang.Void>>): com.facebook.bolts.Task<java.lang.Void>;
				public onSuccess(param0: com.facebook.bolts.Continuation<any,any>): com.facebook.bolts.Task<any>;
				public static forResult(param0: any): com.facebook.bolts.Task<any>;
				public getError(): java.lang.Exception;
				public static callInBackground(param0: java.util.concurrent.Callable): com.facebook.bolts.Task<any>;
				public isFaulted(): boolean;
				public static delay$facebook_core_release(param0: number, param1: java.util.concurrent.ScheduledExecutorService, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
				public onSuccessTask(param0: com.facebook.bolts.Continuation<any,any>): com.facebook.bolts.Task<any>;
				public onSuccessTask(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
				public onSuccessTask(param0: com.facebook.bolts.Continuation<any,any>, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public continueWith(param0: com.facebook.bolts.Continuation<any,any>): com.facebook.bolts.Task<any>;
				public continueWith(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
				public static cancelled(): com.facebook.bolts.Task<any>;
				public continueWith(param0: com.facebook.bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
				public makeVoid(): com.facebook.bolts.Task<java.lang.Void>;
				public static whenAny(param0: java.util.Collection<any>): com.facebook.bolts.Task<com.facebook.bolts.Task<any>>;
				public trySetCancelled(): boolean;
				public static whenAnyResult(param0: java.util.Collection): com.facebook.bolts.Task<any>;
				public waitForCompletion(): void;
				public continueWithTask(param0: com.facebook.bolts.Continuation<any,any>): com.facebook.bolts.Task<any>;
				public isCancelled(): boolean;
				public onSuccess(param0: com.facebook.bolts.Continuation<any,any>, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
			}
			export module Task {
				export class Companion {
					public static class: java.lang.Class<com.facebook.bolts.Task.Companion>;
					public call(param0: java.util.concurrent.Callable): com.facebook.bolts.Task<any>;
					public call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
					public delay$facebook_core_release(param0: number, param1: java.util.concurrent.ScheduledExecutorService, param2: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
					public whenAll(param0: java.util.Collection<any>): com.facebook.bolts.Task<java.lang.Void>;
					public delay(param0: number): com.facebook.bolts.Task<java.lang.Void>;
					public callInBackground(param0: java.util.concurrent.Callable, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
					public forError(param0: java.lang.Exception): com.facebook.bolts.Task<any>;
					public delay(param0: number, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<java.lang.Void>;
					public whenAny(param0: java.util.Collection<any>): com.facebook.bolts.Task<com.facebook.bolts.Task<any>>;
					public whenAnyResult(param0: java.util.Collection): com.facebook.bolts.Task<any>;
					public call(param0: java.util.concurrent.Callable, param1: com.facebook.bolts.CancellationToken): com.facebook.bolts.Task<any>;
					public callInBackground(param0: java.util.concurrent.Callable): com.facebook.bolts.Task<any>;
					public whenAllResult(param0: java.util.Collection): com.facebook.bolts.Task<any>;
					public getUnobservedExceptionHandler(): com.facebook.bolts.Task.UnobservedExceptionHandler;
					public call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor): com.facebook.bolts.Task<any>;
					public setUnobservedExceptionHandler(param0: com.facebook.bolts.Task.UnobservedExceptionHandler): void;
					public forResult(param0: any): com.facebook.bolts.Task<any>;
					public cancelled(): com.facebook.bolts.Task<any>;
				}
				export class TaskCompletionSource extends com.facebook.bolts.TaskCompletionSource<any> {
					public static class: java.lang.Class<com.facebook.bolts.Task.TaskCompletionSource>;
					public constructor();
					public constructor(param0: com.facebook.bolts.Task<any>);
				}
				export class UnobservedExceptionHandler {
					public static class: java.lang.Class<com.facebook.bolts.Task.UnobservedExceptionHandler>;
					/**
					 * Constructs a new instance of the com.facebook.bolts.Task$UnobservedExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						unobservedException(param0: com.facebook.bolts.Task<any>, param1: com.facebook.bolts.UnobservedTaskException): void;
					});
					public constructor();
					public unobservedException(param0: com.facebook.bolts.Task<any>, param1: com.facebook.bolts.UnobservedTaskException): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class TaskCompletionSource<TResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.bolts.TaskCompletionSource<any>>;
				public getTask(): com.facebook.bolts.Task<TResult>;
				public trySetResult(param0: TResult): boolean;
				public setResult(param0: TResult): void;
				public trySetError(param0: java.lang.Exception): boolean;
				public setError(param0: java.lang.Exception): void;
				public trySetCancelled(): boolean;
				public setCancelled(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class UnobservedErrorNotifier {
				public static class: java.lang.Class<com.facebook.bolts.UnobservedErrorNotifier>;
				public setObserved(): void;
				public finalize(): void;
				public constructor(param0: com.facebook.bolts.Task<any>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module bolts {
			export class UnobservedTaskException {
				public static class: java.lang.Class<com.facebook.bolts.UnobservedTaskException>;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.common.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export class Common {
				public static class: java.lang.Class<com.facebook.common.Common>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.core.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class Core {
				public static class: java.lang.Class<com.facebook.core.Core>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module devicerequests {
			export module internal {
				export class DeviceRequestsHelper {
					public static class: java.lang.Class<com.facebook.devicerequests.internal.DeviceRequestsHelper>;
					public static DEVICE_INFO_PARAM: string;
					public static DEVICE_TARGET_USER_ID: string;
					public constructor();
					public static getDeviceInfo(param0: java.util.Map<string,string>): string;
					public static getDeviceInfo(): string;
					public static generateQRCode(param0: string): globalAndroid.graphics.Bitmap;
					public static cleanUpAdvertisementService(param0: string): void;
					public static isAvailable(): boolean;
					public static startAdvertisementService(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AnalyticsEvents {
				public static class: java.lang.Class<com.facebook.internal.AnalyticsEvents>;
				public static EVENT_NATIVE_LOGIN_DIALOG_COMPLETE: string;
				public static EVENT_NATIVE_LOGIN_DIALOG_START: string;
				public static EVENT_WEB_LOGIN_COMPLETE: string;
				public static EVENT_FRIEND_PICKER_USAGE: string;
				public static EVENT_PLACE_PICKER_USAGE: string;
				public static EVENT_LOGIN_VIEW_USAGE: string;
				public static EVENT_USER_SETTINGS_USAGE: string;
				public static EVENT_NATIVE_DIALOG_START: string;
				public static EVENT_NATIVE_DIALOG_COMPLETE: string;
				public static PARAMETER_WEB_LOGIN_E2E: string;
				public static PARAMETER_WEB_LOGIN_SWITCHBACK_TIME: string;
				public static PARAMETER_APP_ID: string;
				public static PARAMETER_CALL_ID: string;
				public static PARAMETER_ACTION_ID: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_START_TIME: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_COMPLETE_TIME: string;
				public static PARAMETER_DIALOG_OUTCOME: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_COMPLETED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_UNKNOWN: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_CANCELLED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_FAILED: string;
				public static EVENT_NATIVE_DIALOG_TYPE_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_VIDEO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_LIKE: string;
				public static EVENT_LIKE_VIEW_CANNOT_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_LIKE: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_FALLBACK: string;
				public static EVENT_LIKE_VIEW_DID_UNLIKE: string;
				public static EVENT_LIKE_VIEW_DID_UNDO_QUICKLY: string;
				public static EVENT_LIKE_VIEW_DIALOG_DID_SUCCEED: string;
				public static EVENT_LIKE_VIEW_ERROR: string;
				public static PARAMETER_LIKE_VIEW_STYLE: string;
				public static PARAMETER_LIKE_VIEW_AUXILIARY_POSITION: string;
				public static PARAMETER_LIKE_VIEW_HORIZONTAL_ALIGNMENT: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_ID: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_TYPE: string;
				public static PARAMETER_LIKE_VIEW_CURRENT_ACTION: string;
				public static PARAMETER_LIKE_VIEW_ERROR_JSON: string;
				public static PARAMETER_SHARE_OUTCOME: string;
				public static PARAMETER_SHARE_OUTCOME_SUCCEEDED: string;
				public static PARAMETER_SHARE_OUTCOME_CANCELLED: string;
				public static PARAMETER_SHARE_OUTCOME_ERROR: string;
				public static PARAMETER_SHARE_OUTCOME_UNKNOWN: string;
				public static PARAMETER_SHARE_ERROR_MESSAGE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_WEB: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_NATIVE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_AUTOMATIC: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_UNKNOWN: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_TYPE: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UUID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PAGE_ID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_VIDEO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PHOTO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_STATUS: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_OPENGRAPH: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UNKNOWN: string;
				public static EVENT_SHARE_RESULT: string;
				public static EVENT_SHARE_DIALOG_SHOW: string;
				public static EVENT_SHARE_MESSENGER_DIALOG_SHOW: string;
				public static EVENT_LIKE_BUTTON_CREATE: string;
				public static EVENT_LOGIN_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_CREATE: string;
				public static EVENT_SEND_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SEND_BUTTON_DID_TAP: string;
				public static EVENT_LIKE_BUTTON_DID_TAP: string;
				public static EVENT_LOGIN_BUTTON_DID_TAP: string;
				public static EVENT_DEVICE_SHARE_BUTTON_CREATE: string;
				public static EVENT_DEVICE_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SMART_LOGIN_SERVICE: string;
				public static EVENT_SDK_INITIALIZE: string;
				public static PARAMETER_SHARE_MESSENGER_GENERIC_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_MEDIA_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_OPEN_GRAPH_MUSIC_TEMPLATE: string;
				public static EVENT_FOA_LOGIN_BUTTON_CREATE: string;
				public static EVENT_FOA_LOGIN_BUTTON_DID_TAP: string;
				public static EVENT_FOA_DISAMBIGUATION_DIALOG_FB_DID_TAP: string;
				public static EVENT_FOA_DISAMBIGUATION_DIALOG_IG_DID_TAP: string;
				public static EVENT_FOA_DISAMBIGUATION_DIALOG_CANCELLED: string;
				public static EVENT_FOA_FB_LOGIN_BUTTON_CREATE: string;
				public static EVENT_FOA_FB_LOGIN_BUTTON_DID_TAP: string;
				public static EVENT_FOA_IG_LOGIN_BUTTON_CREATE: string;
				public static EVENT_FOA_IG_LOGIN_BUTTON_DID_TAP: string;
				public static INSTANCE: com.facebook.internal.AnalyticsEvents;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AppCall {
				public static class: java.lang.Class<com.facebook.internal.AppCall>;
				public static getCurrentPendingCall(): com.facebook.internal.AppCall;
				public static finishPendingCall(param0: java.util.UUID, param1: number): com.facebook.internal.AppCall;
				public getCallId(): java.util.UUID;
				public setRequestCode(param0: number): void;
				public setRequestIntent(param0: globalAndroid.content.Intent): void;
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.UUID);
				public getRequestCode(): number;
				public setPending(): boolean;
				public getRequestIntent(): globalAndroid.content.Intent;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AttributionIdentifiers {
				public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers>;
				public static cachedIdentifiers: com.facebook.internal.AttributionIdentifiers;
				public static Companion: com.facebook.internal.AttributionIdentifiers.Companion;
				public static isTrackingLimited(param0: globalAndroid.content.Context): boolean;
				public getAndroidInstallerPackage(): string;
				public getAndroidAdvertiserId(): string;
				public isTrackingLimited(): boolean;
				public getAttributionId(): string;
				public static getAttributionIdentifiers(param0: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
				public constructor();
			}
			export module AttributionIdentifiers {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.Companion>;
					public isTrackingLimited(param0: globalAndroid.content.Context): boolean;
					public getAttributionIdentifiers(param0: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
				}
				export class GoogleAdInfo {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo>;
					public static Companion: com.facebook.internal.AttributionIdentifiers.GoogleAdInfo.Companion;
					public getAdvertiserId(): string;
					public isTrackingLimited(): boolean;
					public constructor(param0: globalAndroid.os.IBinder);
					public asBinder(): globalAndroid.os.IBinder;
				}
				export module GoogleAdInfo {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo.Companion>;
					}
				}
				export class GoogleAdServiceConnection {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdServiceConnection>;
					public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
					public getBinder(): globalAndroid.os.IBinder;
					public constructor();
					public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BoltsMeasurementEventListener {
				public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener>;
				public static Companion: com.facebook.internal.BoltsMeasurementEventListener.Companion;
				public static getInstance(param0: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
				public finalize(): void;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
			export module BoltsMeasurementEventListener {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener.Companion>;
					public getMEASUREMENT_EVENT_NOTIFICATION_NAME$facebook_core_release(): string;
					public getInstance(param0: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BundleJSONConverter {
				public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter>;
				public static INSTANCE: com.facebook.internal.BundleJSONConverter;
				public static convertToBundle(param0: org.json.JSONObject): globalAndroid.os.Bundle;
				public static convertToJSON(param0: globalAndroid.os.Bundle): org.json.JSONObject;
			}
			export module BundleJSONConverter {
				export class Setter {
					public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter.Setter>;
					/**
					 * Constructs a new instance of the com.facebook.internal.BundleJSONConverter$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
						setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					});
					public constructor();
					public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					public setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CallbackManagerImpl extends com.facebook.CallbackManager {
				public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl>;
				public static Companion: com.facebook.internal.CallbackManagerImpl.Companion;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public registerCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				public unregisterCallback(param0: number): void;
				public constructor();
				public static registerStaticCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
			}
			export module CallbackManagerImpl {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CallbackManagerImpl$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				}
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Companion>;
					public registerStaticCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				}
				export class RequestCodeOffset {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public static Login: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Share: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Message: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Like: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static GameRequest: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupCreate: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupJoin: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppInvite: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static DeviceShare: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static GamingFriendFinder: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static GamingGroupIntegration: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Referral: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static values(): androidNative.Array<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public toRequestCode(): number;
					public static valueOf(param0: string): com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CustomTab {
				public static class: java.lang.Class<com.facebook.internal.CustomTab>;
				public uri: globalAndroid.net.Uri;
				public constructor(param0: string, param1: globalAndroid.os.Bundle);
				public static getURIForAction(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.net.Uri;
				public openCustomTab(param0: globalAndroid.app.Activity, param1: string): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CustomTabUtils {
				public static class: java.lang.Class<com.facebook.internal.CustomTabUtils>;
				public static getChromePackage(): string;
				public static getValidRedirectURI(param0: string): string;
				public static getDefaultRedirectURI(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class DialogFeature {
				public static class: java.lang.Class<com.facebook.internal.DialogFeature>;
				/**
				 * Constructs a new instance of the com.facebook.internal.DialogFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAction(): string;
					getMinVersion(): number;
					name(): string;
				});
				public constructor();
				public getMinVersion(): number;
				public name(): string;
				public getAction(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class DialogPresenter {
				public static class: java.lang.Class<com.facebook.internal.DialogPresenter>;
				public static setupAppCallForNativeDialog(param0: com.facebook.internal.AppCall, param1: com.facebook.internal.DialogPresenter.ParameterProvider, param2: com.facebook.internal.DialogFeature): void;
				public static setupAppCallForWebFallbackDialog(param0: com.facebook.internal.AppCall, param1: globalAndroid.os.Bundle, param2: com.facebook.internal.DialogFeature): void;
				public static setupAppCallForErrorResult(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
				public static canPresentNativeDialogWithFeature(param0: com.facebook.internal.DialogFeature): boolean;
				public static canPresentWebFallbackDialogWithFeature(param0: com.facebook.internal.DialogFeature): boolean;
				public static present(param0: com.facebook.internal.AppCall, param1: androidx.activity.result.ActivityResultRegistry, param2: com.facebook.CallbackManager): void;
				public static logDialogActivity(param0: globalAndroid.content.Context, param1: string, param2: string): void;
				public constructor();
				public static present(param0: com.facebook.internal.AppCall, param1: com.facebook.internal.FragmentWrapper): void;
				public static startActivityForResultWithAndroidX(param0: androidx.activity.result.ActivityResultRegistry, param1: com.facebook.CallbackManager, param2: globalAndroid.content.Intent, param3: number): void;
				public static getProtocolVersionForNativeDialog(param0: com.facebook.internal.DialogFeature): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				public static setupAppCallForCustomTabDialog(param0: com.facebook.internal.AppCall, param1: string, param2: globalAndroid.os.Bundle): void;
				public static setupAppCallForWebDialog(param0: com.facebook.internal.AppCall, param1: string, param2: globalAndroid.os.Bundle): void;
				public static setupAppCallForValidationError(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
				public static setupAppCallForCannotShowError(param0: com.facebook.internal.AppCall): void;
				public static present(param0: com.facebook.internal.AppCall, param1: globalAndroid.app.Activity): void;
			}
			export module DialogPresenter {
				export class ParameterProvider {
					public static class: java.lang.Class<com.facebook.internal.DialogPresenter.ParameterProvider>;
					/**
					 * Constructs a new instance of the com.facebook.internal.DialogPresenter$ParameterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParameters(): globalAndroid.os.Bundle;
						getLegacyParameters(): globalAndroid.os.Bundle;
					});
					public constructor();
					public getParameters(): globalAndroid.os.Bundle;
					public getLegacyParameters(): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export abstract class FacebookDialogBase<CONTENT, RESULT>  extends com.facebook.FacebookDialog<any,any> {
				public static class: java.lang.Class<com.facebook.internal.FacebookDialogBase<any,any>>;
				public static BASE_AUTOMATIC_MODE: any;
				public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
				public setCallbackManager(param0: com.facebook.CallbackManager): void;
				public showImpl(param0: any, param1: any): void;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
				public canShowImpl(param0: any, param1: any): boolean;
				public canShow(param0: any): boolean;
				public constructor(param0: globalAndroid.app.Activity, param1: number);
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
				public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
				public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
				public setRequestCode(param0: number): void;
				public show(param0: any): void;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getActivityContext(): globalAndroid.app.Activity;
				public createBaseAppCall(): com.facebook.internal.AppCall;
				public getRequestCode(): number;
			}
			export module FacebookDialogBase {
				export abstract class ModeHandler {
					public static class: java.lang.Class<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public getMode(): any;
					public canShow(param0: any, param1: boolean): boolean;
					public createAppCall(param0: any): com.facebook.internal.AppCall;
					public constructor(param0: com.facebook.internal.FacebookDialogBase<any,any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookDialogFragment {
				public static class: java.lang.Class<com.facebook.internal.FacebookDialogFragment>;
				public static TAG: string;
				public setDialog(param0: globalAndroid.app.Dialog): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onDestroyView(): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookInitProvider {
				public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider>;
				public static Companion: com.facebook.internal.FacebookInitProvider.Companion;
				public getType(param0: globalAndroid.net.Uri): string;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
			export module FacebookInitProvider {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookRequestErrorClassification {
				public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification>;
				public static EC_SERVICE_UNAVAILABLE: number;
				public static EC_APP_TOO_MANY_CALLS: number;
				public static EC_RATE: number;
				public static EC_USER_TOO_MANY_CALLS: number;
				public static EC_INVALID_SESSION: number;
				public static EC_INVALID_TOKEN: number;
				public static EC_APP_NOT_INSTALLED: number;
				public static EC_TOO_MANY_USER_ACTION_CALLS: number;
				public static ESC_APP_NOT_INSTALLED: number;
				public static ESC_APP_INACTIVE: number;
				public static KEY_RECOVERY_MESSAGE: string;
				public static KEY_NAME: string;
				public static KEY_OTHER: string;
				public static KEY_TRANSIENT: string;
				public static KEY_LOGIN_RECOVERABLE: string;
				public static Companion: com.facebook.internal.FacebookRequestErrorClassification.Companion;
				public getLoginRecoverableErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public static getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getTransientErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public getOtherErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public classify(param0: number, param1: number, param2: boolean): com.facebook.FacebookRequestError.Category;
				public getRecoveryMessage(param0: com.facebook.FacebookRequestError.Category): string;
				public constructor(param0: java.util.Map<java.lang.Integer,any>, param1: java.util.Map<java.lang.Integer,any>, param2: java.util.Map<java.lang.Integer,any>, param3: string, param4: string, param5: string);
				public static createFromJSON(param0: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
			}
			export module FacebookRequestErrorClassification {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification.Companion>;
					public createFromJSON(param0: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
					public getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookSignatureValidator {
				public static class: java.lang.Class<com.facebook.internal.FacebookSignatureValidator>;
				public static INSTANCE: com.facebook.internal.FacebookSignatureValidator;
				public static validateSignature(param0: globalAndroid.content.Context, param1: string): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookWebFallbackDialog extends com.facebook.internal.WebDialog {
				public static class: java.lang.Class<com.facebook.internal.FacebookWebFallbackDialog>;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.login.LoginTargetApp, param5: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public cancel(): void;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public parseResponseUri(param0: string): globalAndroid.os.Bundle;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: string): com.facebook.internal.FacebookWebFallbackDialog;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FeatureManager {
				public static class: java.lang.Class<com.facebook.internal.FeatureManager>;
				public static INSTANCE: com.facebook.internal.FeatureManager;
				public static isEnabled(param0: com.facebook.internal.FeatureManager.Feature): boolean;
				public static disableFeature(param0: com.facebook.internal.FeatureManager.Feature): void;
				public static checkFeature(param0: com.facebook.internal.FeatureManager.Feature, param1: com.facebook.internal.FeatureManager.Callback): void;
				public static getFeature(param0: string): com.facebook.internal.FeatureManager.Feature;
			}
			export module FeatureManager {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.FeatureManager.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FeatureManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: boolean): void;
					});
					public constructor();
					public onCompleted(param0: boolean): void;
				}
				export class Feature {
					public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature>;
					public static Unknown: com.facebook.internal.FeatureManager.Feature;
					public static Core: com.facebook.internal.FeatureManager.Feature;
					public static AppEvents: com.facebook.internal.FeatureManager.Feature;
					public static CodelessEvents: com.facebook.internal.FeatureManager.Feature;
					public static RestrictiveDataFiltering: com.facebook.internal.FeatureManager.Feature;
					public static AAM: com.facebook.internal.FeatureManager.Feature;
					public static PrivacyProtection: com.facebook.internal.FeatureManager.Feature;
					public static SuggestedEvents: com.facebook.internal.FeatureManager.Feature;
					public static IntelligentIntegrity: com.facebook.internal.FeatureManager.Feature;
					public static ModelRequest: com.facebook.internal.FeatureManager.Feature;
					public static EventDeactivation: com.facebook.internal.FeatureManager.Feature;
					public static OnDeviceEventProcessing: com.facebook.internal.FeatureManager.Feature;
					public static OnDevicePostInstallEventProcessing: com.facebook.internal.FeatureManager.Feature;
					public static IapLogging: com.facebook.internal.FeatureManager.Feature;
					public static IapLoggingLib2: com.facebook.internal.FeatureManager.Feature;
					public static Instrument: com.facebook.internal.FeatureManager.Feature;
					public static CrashReport: com.facebook.internal.FeatureManager.Feature;
					public static CrashShield: com.facebook.internal.FeatureManager.Feature;
					public static ThreadCheck: com.facebook.internal.FeatureManager.Feature;
					public static ErrorReport: com.facebook.internal.FeatureManager.Feature;
					public static AnrReport: com.facebook.internal.FeatureManager.Feature;
					public static Monitoring: com.facebook.internal.FeatureManager.Feature;
					public static Login: com.facebook.internal.FeatureManager.Feature;
					public static ChromeCustomTabsPrefetching: com.facebook.internal.FeatureManager.Feature;
					public static IgnoreAppSwitchToLoggedOut: com.facebook.internal.FeatureManager.Feature;
					public static BypassAppSwitch: com.facebook.internal.FeatureManager.Feature;
					public static Share: com.facebook.internal.FeatureManager.Feature;
					public static Places: com.facebook.internal.FeatureManager.Feature;
					public static Companion: com.facebook.internal.FeatureManager.Feature.Companion;
					public toString(): string;
					public getParent(): com.facebook.internal.FeatureManager.Feature;
					public static values(): androidNative.Array<com.facebook.internal.FeatureManager.Feature>;
					public static valueOf(param0: string): com.facebook.internal.FeatureManager.Feature;
					public toKey(): string;
				}
				export module Feature {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature.Companion>;
						public fromInt(param0: number): com.facebook.internal.FeatureManager.Feature;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature.WhenMappings>;
					}
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.facebook.internal.FeatureManager.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppGateKeepersManager {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager>;
				public static INSTANCE: com.facebook.internal.FetchedAppGateKeepersManager;
				public static getGateKeeperForKey(param0: string, param1: string, param2: boolean): boolean;
				public loadAppGateKeepersAsync(): void;
				public static resetRuntimeGateKeeperCache(): void;
				public static setRuntimeGateKeeper(param0: string, param1: com.facebook.internal.gatekeeper.GateKeeper): void;
				public static queryAppGateKeepers(param0: string, param1: boolean): org.json.JSONObject;
				public getGateKeepersForApplication(param0: string): java.util.Map<string,java.lang.Boolean>;
				public static parseAppGateKeepersFromJSON$facebook_core_release(param0: string, param1: org.json.JSONObject): org.json.JSONObject;
				public static loadAppGateKeepersAsync(param0: com.facebook.internal.FetchedAppGateKeepersManager.Callback): void;
			}
			export module FetchedAppGateKeepersManager {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FetchedAppGateKeepersManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(): void;
					});
					public constructor();
					public onCompleted(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettings {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings>;
				public static Companion: com.facebook.internal.FetchedAppSettings.Companion;
				public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getSmartLoginMenuIconURL(): string;
				public getEventBindings(): org.json.JSONArray;
				public getSdkUpdateMessage(): string;
				public getRestrictiveDataSetting(): string;
				public getIAPAutomaticLoggingEnabled(): boolean;
				public getCodelessEventsEnabled(): boolean;
				public static getDialogFeatureConfig(param0: string, param1: string, param2: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
				public getNuxContent(): string;
				public getSmartLoginOptions(): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public getTrackUninstallEnabled(): boolean;
				public getSessionTimeoutInSeconds(): number;
				public getDialogConfigurations(): java.util.Map<string,java.util.Map<string,com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>;
				public getMonitorViaDialogEnabled(): boolean;
				public getAutomaticLoggingEnabled(): boolean;
				public getSmartLoginBookmarkIconURL(): string;
				public getSuggestedEventsSetting(): string;
				public getRawAamRules(): string;
				public supportsImplicitLogging(): boolean;
				public getNuxEnabled(): boolean;
				public constructor(param0: boolean, param1: string, param2: boolean, param3: number, param4: java.util.EnumSet<com.facebook.internal.SmartLoginOption>, param5: java.util.Map<string,any>, param6: boolean, param7: com.facebook.internal.FacebookRequestErrorClassification, param8: string, param9: string, param10: boolean, param11: boolean, param12: org.json.JSONArray, param13: string, param14: boolean, param15: boolean, param16: string, param17: string, param18: string);
			}
			export module FetchedAppSettings {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.Companion>;
					public getDialogFeatureConfig(param0: string, param1: string, param2: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
				}
				export class DialogFeatureConfig {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>;
					public static Companion: com.facebook.internal.FetchedAppSettings.DialogFeatureConfig.Companion;
					public getFeatureName(): string;
					public getFallbackUrl(): globalAndroid.net.Uri;
					public getVersionSpec(): androidNative.Array<number>;
					public getDialogName(): string;
				}
				export module DialogFeatureConfig {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig.Companion>;
						public parseDialogConfig(param0: org.json.JSONObject): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettingsManager {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager>;
				public static INSTANCE: com.facebook.internal.FetchedAppSettingsManager;
				public static getAppSettingsAsync(param0: com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback): void;
				public static getAppSettingsWithoutQuery(param0: string): com.facebook.internal.FetchedAppSettings;
				public static setIsUnityInit(param0: boolean): void;
				public parseAppSettingsFromJSON$facebook_core_release(param0: string, param1: org.json.JSONObject): com.facebook.internal.FetchedAppSettings;
				public static loadAppSettingsAsync(): void;
				public static queryAppSettings(param0: string, param1: boolean): com.facebook.internal.FetchedAppSettings;
			}
			export module FetchedAppSettingsManager {
				export class FetchAppSettingState {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
					public static NOT_LOADED: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static LOADING: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static SUCCESS: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static ERROR: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static values(): androidNative.Array<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
					public static valueOf(param0: string): com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
				}
				export class FetchedAppSettingsCallback {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FetchedAppSettingsManager$FetchedAppSettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: com.facebook.internal.FetchedAppSettings): void;
						onError(): void;
					});
					public constructor();
					public onSuccess(param0: com.facebook.internal.FetchedAppSettings): void;
					public onError(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FileLruCache {
				public static class: java.lang.Class<com.facebook.internal.FileLruCache>;
				public static Companion: com.facebook.internal.FileLruCache.Companion;
				public get(param0: string, param1: string): java.io.InputStream;
				public constructor(param0: string, param1: com.facebook.internal.FileLruCache.Limits);
				public openPutStream(param0: string, param1: string): java.io.OutputStream;
				public getLocation(): string;
				public sizeInBytesForTest(): number;
				public get(param0: string): java.io.InputStream;
				public interceptAndPut(param0: string, param1: java.io.InputStream): java.io.InputStream;
				public toString(): string;
				public clearCache(): void;
				public openPutStream(param0: string): java.io.OutputStream;
			}
			export module FileLruCache {
				export class BufferFile {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.BufferFile>;
					public static INSTANCE: com.facebook.internal.FileLruCache.BufferFile;
					public excludeBufferFiles(): java.io.FilenameFilter;
					public deleteAll(param0: java.io.File): void;
					public excludeNonBufferFiles(): java.io.FilenameFilter;
					public newFile(param0: java.io.File): java.io.File;
				}
				export class CloseCallbackOutputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CloseCallbackOutputStream>;
					public getCallback(): com.facebook.internal.FileLruCache.StreamCloseCallback;
					public write(param0: androidNative.Array<number>): void;
					public getInnerStream(): java.io.OutputStream;
					public close(): void;
					public flush(): void;
					public write(param0: number): void;
					public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.FileLruCache.StreamCloseCallback);
					public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
				}
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.Companion>;
					public getTAG(): string;
				}
				export class CopyingInputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CopyingInputStream>;
					public available(): number;
					public read(): number;
					public reset(): void;
					public getOutput(): java.io.OutputStream;
					public markSupported(): boolean;
					public close(): void;
					public skip(param0: number): number;
					public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public constructor(param0: java.io.InputStream, param1: java.io.OutputStream);
					public read(param0: androidNative.Array<number>): number;
					public getInput(): java.io.InputStream;
					public mark(param0: number): void;
				}
				export class Limits {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.Limits>;
					public setFileCount(param0: number): void;
					public constructor();
					public getFileCount(): number;
					public getByteCount(): number;
					public setByteCount(param0: number): void;
				}
				export class ModifiedFile extends java.lang.Comparable<com.facebook.internal.FileLruCache.ModifiedFile> {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile>;
					public static Companion: com.facebook.internal.FileLruCache.ModifiedFile.Companion;
					public equals(param0: any): boolean;
					public compareTo(param0: com.facebook.internal.FileLruCache.ModifiedFile): number;
					public getFile(): java.io.File;
					public hashCode(): number;
					public constructor(param0: java.io.File);
					public getModified(): number;
				}
				export module ModifiedFile {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile.Companion>;
					}
				}
				export class StreamCloseCallback {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamCloseCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FileLruCache$StreamCloseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): void;
					});
					public constructor();
					public onClose(): void;
				}
				export class StreamHeader {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamHeader>;
					public static INSTANCE: com.facebook.internal.FileLruCache.StreamHeader;
					public readHeader(param0: java.io.InputStream): org.json.JSONObject;
					public writeHeader(param0: java.io.OutputStream, param1: org.json.JSONObject): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FragmentWrapper {
				public static class: java.lang.Class<com.facebook.internal.FragmentWrapper>;
				public getSupportFragment(): androidx.fragment.app.Fragment;
				public getActivity(): globalAndroid.app.Activity;
				public constructor(param0: androidx.fragment.app.Fragment);
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getNativeFragment(): globalAndroid.app.Fragment;
				public constructor(param0: globalAndroid.app.Fragment);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageDownloader {
				public static class: java.lang.Class<com.facebook.internal.ImageDownloader>;
				public static INSTANCE: com.facebook.internal.ImageDownloader;
				public static downloadAsync(param0: com.facebook.internal.ImageRequest): void;
				public getPendingRequests(): java.util.Map<com.facebook.internal.ImageDownloader.RequestKey,com.facebook.internal.ImageDownloader.DownloaderContext>;
				public static cancelRequest(param0: com.facebook.internal.ImageRequest): boolean;
				public static clearCache(): void;
				public static prioritizeRequest(param0: com.facebook.internal.ImageRequest): void;
			}
			export module ImageDownloader {
				export class CacheReadWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.CacheReadWorkItem>;
					public constructor(param0: com.facebook.internal.ImageDownloader.RequestKey, param1: boolean);
					public run(): void;
				}
				export class DownloadImageWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloadImageWorkItem>;
					public run(): void;
					public constructor(param0: com.facebook.internal.ImageDownloader.RequestKey);
				}
				export class DownloaderContext {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloaderContext>;
					public isCancelled(): boolean;
					public setWorkItem(param0: com.facebook.internal.WorkQueue.WorkItem): void;
					public setCancelled(param0: boolean): void;
					public constructor(param0: com.facebook.internal.ImageRequest);
					public getWorkItem(): com.facebook.internal.WorkQueue.WorkItem;
					public getRequest(): com.facebook.internal.ImageRequest;
					public setRequest(param0: com.facebook.internal.ImageRequest): void;
				}
				export class RequestKey {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey>;
					public static Companion: com.facebook.internal.ImageDownloader.RequestKey.Companion;
					public equals(param0: any): boolean;
					public getTag(): any;
					public getUri(): globalAndroid.net.Uri;
					public hashCode(): number;
					public setUri(param0: globalAndroid.net.Uri): void;
					public setTag(param0: any): void;
					public constructor(param0: globalAndroid.net.Uri, param1: any);
				}
				export module RequestKey {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageRequest {
				public static class: java.lang.Class<com.facebook.internal.ImageRequest>;
				public static UNSPECIFIED_DIMENSION: number;
				public static Companion: com.facebook.internal.ImageRequest.Companion;
				public getContext(): globalAndroid.content.Context;
				public getImageUri(): globalAndroid.net.Uri;
				public static getProfilePictureUri(param0: string, param1: number, param2: number): globalAndroid.net.Uri;
				public getCallerTag(): any;
				public getAllowCachedRedirects(): boolean;
				public getCallback(): com.facebook.internal.ImageRequest.Callback;
				public isCachedRedirectAllowed(): boolean;
				public static getProfilePictureUri(param0: string, param1: number, param2: number, param3: string): globalAndroid.net.Uri;
			}
			export module ImageRequest {
				export class Builder {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Builder>;
					public setCallback(param0: com.facebook.internal.ImageRequest.Callback): com.facebook.internal.ImageRequest.Builder;
					public setCallerTag(param0: any): com.facebook.internal.ImageRequest.Builder;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri);
					public setAllowCachedRedirects(param0: boolean): com.facebook.internal.ImageRequest.Builder;
					public copy(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): com.facebook.internal.ImageRequest.Builder;
					public build(): com.facebook.internal.ImageRequest;
					public hashCode(): number;
				}
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.ImageRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.facebook.internal.ImageResponse): void;
					});
					public constructor();
					public onCompleted(param0: com.facebook.internal.ImageResponse): void;
				}
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Companion>;
					public getProfilePictureUri(param0: string, param1: number, param2: number): globalAndroid.net.Uri;
					public getProfilePictureUri(param0: string, param1: number, param2: number, param3: string): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponse {
				public static class: java.lang.Class<com.facebook.internal.ImageResponse>;
				public constructor(param0: com.facebook.internal.ImageRequest, param1: java.lang.Exception, param2: boolean, param3: globalAndroid.graphics.Bitmap);
				public getRequest(): com.facebook.internal.ImageRequest;
				public isCachedRedirect(): boolean;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public getError(): java.lang.Exception;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponseCache {
				public static class: java.lang.Class<com.facebook.internal.ImageResponseCache>;
				public static INSTANCE: com.facebook.internal.ImageResponseCache;
				public getTAG(): string;
				public static getCache(): com.facebook.internal.FileLruCache;
				public static getCachedImageStream(param0: globalAndroid.net.Uri): java.io.InputStream;
				public static clearCache(): void;
				public static interceptAndCacheImageStream(param0: java.net.HttpURLConnection): java.io.InputStream;
			}
			export module ImageResponseCache {
				export class BufferedHttpInputStream {
					public static class: java.lang.Class<com.facebook.internal.ImageResponseCache.BufferedHttpInputStream>;
					public constructor(param0: java.io.InputStream, param1: java.net.HttpURLConnection);
					public close(): void;
					public getConnection(): java.net.HttpURLConnection;
					public setConnection(param0: java.net.HttpURLConnection): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InstagramCustomTab extends com.facebook.internal.CustomTab {
				public static class: java.lang.Class<com.facebook.internal.InstagramCustomTab>;
				public constructor(param0: string, param1: globalAndroid.os.Bundle);
				public static getURIForAction(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.net.Uri;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InstallReferrerUtil {
				public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil>;
				public static INSTANCE: com.facebook.internal.InstallReferrerUtil;
				public static tryUpdateReferrerInfo(param0: com.facebook.internal.InstallReferrerUtil.Callback): void;
			}
			export module InstallReferrerUtil {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.InstallReferrerUtil$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceiveReferrerUrl(param0: string): void;
					});
					public constructor();
					public onReceiveReferrerUrl(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InternalSettings {
				public static class: java.lang.Class<com.facebook.internal.InternalSettings>;
				public static INSTANCE: com.facebook.internal.InternalSettings;
				public static getCustomUserAgent(): string;
				public static isUnityApp(): boolean;
				public static setCustomUserAgent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class LockOnGetVariable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.internal.LockOnGetVariable<any>>;
				public constructor(param0: T);
				public getValue(): T;
				public constructor(param0: java.util.concurrent.Callable<T>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Logger {
				public static class: java.lang.Class<com.facebook.internal.Logger>;
				public static LOG_TAG_BASE: string;
				public static Companion: com.facebook.internal.Logger.Companion;
				public getContents(): string;
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string, param3: androidNative.Array<any>): void;
				public append(param0: string): void;
				public logString(param0: string): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string): void;
				public append(param0: string, param1: androidNative.Array<any>): void;
				public static registerAccessToken(param0: string): void;
				public getPriority(): number;
				public static registerStringToReplace(param0: string, param1: string): void;
				public constructor(param0: com.facebook.LoggingBehavior, param1: string);
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string): void;
				public setPriority(param0: number): void;
				public appendKeyValue(param0: string, param1: any): void;
				public log(): void;
				public append(param0: java.lang.StringBuilder): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string, param4: androidNative.Array<any>): void;
			}
			export module Logger {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.Logger.Companion>;
					public log(param0: com.facebook.LoggingBehavior, param1: string, param2: string, param3: androidNative.Array<any>): void;
					public log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string, param4: androidNative.Array<any>): void;
					public registerAccessToken(param0: string): void;
					public registerStringToReplace(param0: string, param1: string): void;
					public log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string): void;
					public log(param0: com.facebook.LoggingBehavior, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeAppCallAttachmentStore {
				public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore>;
				public static ATTACHMENTS_DIR_NAME: string;
				public static INSTANCE: com.facebook.internal.NativeAppCallAttachmentStore;
				public static cleanupAllAttachments(): void;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.graphics.Bitmap): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static ensureAttachmentsDirectoryExists(): java.io.File;
				public static getAttachmentFile(param0: java.util.UUID, param1: string, param2: boolean): java.io.File;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.net.Uri): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static getAttachmentsDirectoryForCall(param0: java.util.UUID, param1: boolean): java.io.File;
				public static addAttachments(param0: java.util.Collection<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>): void;
				public static cleanupAttachmentsForCall(param0: java.util.UUID): void;
				public static openAttachment(param0: java.util.UUID, param1: string): java.io.File;
				public static getAttachmentsDirectory(): java.io.File;
			}
			export module NativeAppCallAttachmentStore {
				export class Attachment {
					public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>;
					public setShouldCreateFile(param0: boolean): void;
					public constructor(param0: java.util.UUID, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.net.Uri);
					public getOriginalUri(): globalAndroid.net.Uri;
					public getAttachmentName(): string;
					public getCallId(): java.util.UUID;
					public setContentUri(param0: boolean): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public getAttachmentUrl(): string;
					public isContentUri(): boolean;
					public getShouldCreateFile(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeProtocol {
				public static class: java.lang.Class<com.facebook.internal.NativeProtocol>;
				public static NO_PROTOCOL_AVAILABLE: number;
				public static FACEBOOK_PROXY_AUTH_PERMISSIONS_KEY: string;
				public static FACEBOOK_PROXY_AUTH_APP_ID_KEY: string;
				public static FACEBOOK_PROXY_AUTH_E2E_KEY: string;
				public static FACEBOOK_SDK_VERSION_KEY: string;
				public static INTENT_ACTION_PLATFORM_ACTIVITY: string;
				public static INTENT_ACTION_PLATFORM_SERVICE: string;
				public static PROTOCOL_VERSION_20121101: number;
				public static PROTOCOL_VERSION_20130502: number;
				public static PROTOCOL_VERSION_20130618: number;
				public static PROTOCOL_VERSION_20131107: number;
				public static PROTOCOL_VERSION_20140204: number;
				public static PROTOCOL_VERSION_20140324: number;
				public static PROTOCOL_VERSION_20140701: number;
				public static PROTOCOL_VERSION_20141001: number;
				public static PROTOCOL_VERSION_20141028: number;
				public static PROTOCOL_VERSION_20141107: number;
				public static PROTOCOL_VERSION_20141218: number;
				public static PROTOCOL_VERSION_20160327: number;
				public static PROTOCOL_VERSION_20170213: number;
				public static PROTOCOL_VERSION_20170411: number;
				public static PROTOCOL_VERSION_20170417: number;
				public static PROTOCOL_VERSION_20171115: number;
				public static PROTOCOL_VERSION_20210906: number;
				public static EXTRA_PROTOCOL_VERSION: string;
				public static EXTRA_PROTOCOL_ACTION: string;
				public static EXTRA_PROTOCOL_CALL_ID: string;
				public static EXTRA_GET_INSTALL_DATA_PACKAGE: string;
				public static EXTRA_PROTOCOL_BRIDGE_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_RESULTS: string;
				public static BRIDGE_ARG_APP_NAME_STRING: string;
				public static BRIDGE_ARG_ACTION_ID_STRING: string;
				public static BRIDGE_ARG_ERROR_BUNDLE: string;
				public static EXTRA_DIALOG_COMPLETE_KEY: string;
				public static EXTRA_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static MESSAGE_GET_ACCESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_ACCESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_PROTOCOL_VERSIONS_REQUEST: number;
				public static MESSAGE_GET_PROTOCOL_VERSIONS_REPLY: number;
				public static MESSAGE_GET_INSTALL_DATA_REQUEST: number;
				public static MESSAGE_GET_INSTALL_DATA_REPLY: number;
				public static MESSAGE_GET_LIKE_STATUS_REQUEST: number;
				public static MESSAGE_GET_LIKE_STATUS_REPLY: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_LOGIN_STATUS_REQUEST: number;
				public static MESSAGE_GET_LOGIN_STATUS_REPLY: number;
				public static EXTRA_PROTOCOL_VERSIONS: string;
				public static ACTION_FEED_DIALOG: string;
				public static ACTION_MESSAGE_DIALOG: string;
				public static ACTION_OGACTIONPUBLISH_DIALOG: string;
				public static ACTION_OGMESSAGEPUBLISH_DIALOG: string;
				public static ACTION_LIKE_DIALOG: string;
				public static ACTION_APPINVITE_DIALOG: string;
				public static ACTION_CAMERA_EFFECT: string;
				public static ACTION_SHARE_STORY: string;
				public static EXTRA_PERMISSIONS: string;
				public static EXTRA_APPLICATION_ID: string;
				public static EXTRA_APPLICATION_NAME: string;
				public static EXTRA_USER_ID: string;
				public static EXTRA_LOGGER_REF: string;
				public static EXTRA_TOAST_DURATION_MS: string;
				public static EXTRA_GRAPH_API_VERSION: string;
				public static EXTRA_NONCE: string;
				public static EXTRA_ACCESS_TOKEN: string;
				public static EXTRA_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static EXTRA_DATA_ACCESS_EXPIRATION_TIME: string;
				public static EXTRA_AUTHENTICATION_TOKEN: string;
				public static RESULT_ARGS_ACCESS_TOKEN: string;
				public static RESULT_ARGS_GRAPH_DOMAIN: string;
				public static RESULT_ARGS_SIGNED_REQUEST: string;
				public static RESULT_ARGS_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static RESULT_ARGS_PERMISSIONS: string;
				public static OPEN_GRAPH_CREATE_OBJECT_KEY: string;
				public static IMAGE_USER_GENERATED_KEY: string;
				public static IMAGE_URL_KEY: string;
				public static STATUS_ERROR_TYPE: string;
				public static STATUS_ERROR_DESCRIPTION: string;
				public static STATUS_ERROR_CODE: string;
				public static STATUS_ERROR_SUBCODE: string;
				public static STATUS_ERROR_JSON: string;
				public static BRIDGE_ARG_ERROR_TYPE: string;
				public static BRIDGE_ARG_ERROR_DESCRIPTION: string;
				public static BRIDGE_ARG_ERROR_CODE: string;
				public static BRIDGE_ARG_ERROR_SUBCODE: string;
				public static BRIDGE_ARG_ERROR_JSON: string;
				public static ERROR_UNKNOWN_ERROR: string;
				public static ERROR_PROTOCOL_ERROR: string;
				public static ERROR_USER_CANCELED: string;
				public static ERROR_APPLICATION_ERROR: string;
				public static ERROR_NETWORK_ERROR: string;
				public static ERROR_PERMISSION_DENIED: string;
				public static ERROR_SERVICE_DISABLED: string;
				public static WEB_DIALOG_URL: string;
				public static WEB_DIALOG_ACTION: string;
				public static WEB_DIALOG_PARAMS: string;
				public static WEB_DIALOG_IS_FALLBACK: string;
				public static AUDIENCE_ME: string;
				public static AUDIENCE_FRIENDS: string;
				public static AUDIENCE_EVERYONE: string;
				public static INSTANCE: com.facebook.internal.NativeProtocol;
				public static setupProtocolRequestIntent(param0: globalAndroid.content.Intent, param1: string, param2: string, param3: number, param4: globalAndroid.os.Bundle): void;
				public static validateActivityIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: com.facebook.internal.NativeProtocol.NativeAppInfo): globalAndroid.content.Intent;
				public static createFacebookLiteIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string, param9: string, param10: boolean, param11: boolean, param12: boolean): globalAndroid.content.Intent;
				public static validateServiceIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: com.facebook.internal.NativeProtocol.NativeAppInfo): globalAndroid.content.Intent;
				public static getLatestAvailableProtocolVersionForService(param0: number): number;
				public static getLatestAvailableProtocolVersionForAction(param0: string, param1: androidNative.Array<number>): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				public static getSuccessResultsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static getErrorDataFromResultIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static isVersionCompatibleWithBucketedIntent(param0: number): boolean;
				public static updateAllAvailableProtocolVersionsAsync(): void;
				public static createBundleForException(param0: com.facebook.FacebookException): globalAndroid.os.Bundle;
				public static getMethodArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createProtocolResultIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle, param2: com.facebook.FacebookException): globalAndroid.content.Intent;
				public static createProxyAuthIntents(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string, param9: boolean, param10: string, param11: boolean, param12: boolean, param13: boolean, param14: string): java.util.List<globalAndroid.content.Intent>;
				public static computeLatestAvailableVersionFromVersionSpec(param0: java.util.TreeSet<java.lang.Integer>, param1: number, param2: androidNative.Array<number>): number;
				public static getCallIdFromIntent(param0: globalAndroid.content.Intent): java.util.UUID;
				public static getBridgeArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createInstagramIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string, param9: string, param10: boolean, param11: boolean, param12: boolean): globalAndroid.content.Intent;
				public static createTokenRefreshIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static getProtocolVersionFromIntent(param0: globalAndroid.content.Intent): number;
				public static getExceptionFromErrorData(param0: globalAndroid.os.Bundle): com.facebook.FacebookException;
				public static createPlatformServiceIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static isErrorResult(param0: globalAndroid.content.Intent): boolean;
				public static getLatestKnownVersion(): number;
				public static createPlatformActivityIntent(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult, param4: globalAndroid.os.Bundle): globalAndroid.content.Intent;
			}
			export module NativeProtocol {
				export class EffectTestAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.EffectTestAppInfo>;
					public getPackage(): string;
					public constructor();
					public getLoginActivity(): string;
					public getLoginActivity(): java.lang.Void;
				}
				export class FBLiteAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.FBLiteAppInfo>;
					public static FACEBOOK_LITE_ACTIVITY: string;
					public static Companion: com.facebook.internal.NativeProtocol.FBLiteAppInfo.Companion;
					public getPackage(): string;
					public constructor();
					public getLoginActivity(): string;
				}
				export module FBLiteAppInfo {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.NativeProtocol.FBLiteAppInfo.Companion>;
					}
				}
				export class InstagramAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.InstagramAppInfo>;
					public getPackage(): string;
					public getResponseType(): string;
					public constructor();
					public getLoginActivity(): string;
				}
				export class KatanaAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.KatanaAppInfo>;
					public getPackage(): string;
					public constructor();
					public getLoginActivity(): string;
					public onAvailableVersionsNullOrEmpty(): void;
				}
				export class MessengerAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.MessengerAppInfo>;
					public getPackage(): string;
					public constructor();
					public getLoginActivity(): string;
					public getLoginActivity(): java.lang.Void;
				}
				export abstract class NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.NativeAppInfo>;
					public getPackage(): string;
					public getResponseType(): string;
					public constructor();
					public fetchAvailableVersions(param0: boolean): void;
					public getLoginActivity(): string;
					public onAvailableVersionsNullOrEmpty(): void;
					public getAvailableVersions(): java.util.TreeSet<java.lang.Integer>;
				}
				export class ProtocolVersionQueryResult {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult>;
					public static Companion: com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult.Companion;
					public static createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					public getProtocolVersion(): number;
					public getAppInfo(): com.facebook.internal.NativeProtocol.NativeAppInfo;
					public static create(param0: com.facebook.internal.NativeProtocol.NativeAppInfo, param1: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				}
				export module ProtocolVersionQueryResult {
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult.Companion>;
						public create(param0: com.facebook.internal.NativeProtocol.NativeAppInfo, param1: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
						public createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					}
				}
				export class WakizashiAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.WakizashiAppInfo>;
					public getPackage(): string;
					public constructor();
					public getLoginActivity(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export abstract class PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.internal.PlatformServiceClient>;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
				public setCompletedListener(param0: com.facebook.internal.PlatformServiceClient.CompletedListener): void;
				public handleMessage(param0: globalAndroid.os.Message): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: string, param5: string);
				public getContext(): globalAndroid.content.Context;
				public start(): boolean;
				public cancel(): void;
				public getNonce(): string;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
			export module PlatformServiceClient {
				export class CompletedListener {
					public static class: java.lang.Class<com.facebook.internal.PlatformServiceClient.CompletedListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.PlatformServiceClient$CompletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						completed(param0: globalAndroid.os.Bundle): void;
					});
					public constructor();
					public completed(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ProfileInformationCache {
				public static class: java.lang.Class<com.facebook.internal.ProfileInformationCache>;
				public static INSTANCE: com.facebook.internal.ProfileInformationCache;
				public static getProfileInformation(param0: string): org.json.JSONObject;
				public static putProfileInformation(param0: string, param1: org.json.JSONObject): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ServerProtocol {
				public static class: java.lang.Class<com.facebook.internal.ServerProtocol>;
				public static DIALOG_PATH: string;
				public static DIALOG_PARAM_ACCESS_TOKEN: string;
				public static DIALOG_PARAM_APP_ID: string;
				public static DIALOG_PARAM_AUTH_TYPE: string;
				public static DIALOG_PARAM_CBT: string;
				public static DIALOG_PARAM_CLIENT_ID: string;
				public static DIALOG_PARAM_CUSTOM_TABS_PREFETCHING: string;
				public static DIALOG_PARAM_DISPLAY: string;
				public static DIALOG_PARAM_DISPLAY_TOUCH: string;
				public static DIALOG_PARAM_E2E: string;
				public static DIALOG_PARAM_IES: string;
				public static DIALOG_PARAM_LEGACY_OVERRIDE: string;
				public static DIALOG_PARAM_LOGIN_BEHAVIOR: string;
				public static DIALOG_PARAM_NONCE: string;
				public static DIALOG_PARAM_REDIRECT_URI: string;
				public static DIALOG_PARAM_RESPONSE_TYPE: string;
				public static DIALOG_PARAM_RETURN_SCOPES: string;
				public static DIALOG_PARAM_SCOPE: string;
				public static DIALOG_PARAM_SSO_DEVICE: string;
				public static DIALOG_PARAM_DEFAULT_AUDIENCE: string;
				public static DIALOG_PARAM_SDK_VERSION: string;
				public static DIALOG_PARAM_STATE: string;
				public static DIALOG_PARAM_FAIL_ON_LOGGED_OUT: string;
				public static DIALOG_PARAM_CCT_OVER_LOGGED_OUT_APP_SWITCH: string;
				public static DIALOG_PARAM_MESSENGER_PAGE_ID: string;
				public static DIALOG_PARAM_RESET_MESSENGER_STATE: string;
				public static DIALOG_REREQUEST_AUTH_TYPE: string;
				public static DIALOG_PARAM_FX_APP: string;
				public static DIALOG_PARAM_SKIP_DEDUPE: string;
				public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SCOPES: string;
				public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SIGNED_REQUEST: string;
				public static DIALOG_RESPONSE_TYPE_ID_TOKEN_AND_SIGNED_REQUEST: string;
				public static DIALOG_RETURN_SCOPES_TRUE: string;
				public static DIALOG_REDIRECT_URI: string;
				public static DIALOG_REDIRECT_CHROME_OS_URI: string;
				public static DIALOG_CANCEL_URI: string;
				public static FALLBACK_DIALOG_PARAM_APP_ID: string;
				public static FALLBACK_DIALOG_PARAM_BRIDGE_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_KEY_HASH: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_RESULTS: string;
				public static FALLBACK_DIALOG_PARAM_VERSION: string;
				public static FALLBACK_DIALOG_DISPLAY_VALUE_TOUCH: string;
				public static INSTAGRAM_OAUTH_PATH: string;
				public static INSTANCE: com.facebook.internal.ServerProtocol;
				public static getGraphUrlBase(): string;
				public static getInstagramDialogAuthority(): string;
				public static getGraphVideoUrlBase(): string;
				public static getErrorsProxyAuthDisabled(): java.util.Collection<string>;
				public static getErrorsUserCanceled(): java.util.Collection<string>;
				public static getDefaultAPIVersion(): string;
				public static getDialogAuthority(): string;
				public static getFacebookGraphUrlBase(): string;
				public static getQueryParamsForPlatformActivityIntentWebFallback(param0: string, param1: number, param2: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public static getErrorConnectionFailure(): string;
				public static getGraphUrlBaseForSubdomain(param0: string): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class SmartLoginOption {
				public static class: java.lang.Class<com.facebook.internal.SmartLoginOption>;
				public static None: com.facebook.internal.SmartLoginOption;
				public static Enabled: com.facebook.internal.SmartLoginOption;
				public static RequireConfirm: com.facebook.internal.SmartLoginOption;
				public static Companion: com.facebook.internal.SmartLoginOption.Companion;
				public static values(): androidNative.Array<com.facebook.internal.SmartLoginOption>;
				public static parseOptions(param0: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public getValue(): number;
				public static valueOf(param0: string): com.facebook.internal.SmartLoginOption;
			}
			export module SmartLoginOption {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.SmartLoginOption.Companion>;
					public parseOptions(param0: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class UrlRedirectCache {
				public static class: java.lang.Class<com.facebook.internal.UrlRedirectCache>;
				public static INSTANCE: com.facebook.internal.UrlRedirectCache;
				public static getCache(): com.facebook.internal.FileLruCache;
				public static getRedirectedUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
				public static clearCache(): void;
				public static cacheUriRedirect(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Utility {
				public static class: java.lang.Class<com.facebook.internal.Utility>;
				public static LOG_TAG: string;
				public static DEFAULT_STREAM_BUFFER_SIZE: number;
				public static INSTANCE: com.facebook.internal.Utility;
				public static getActivityName(param0: globalAndroid.content.Context): string;
				public static isDataProcessingRestricted(): boolean;
				public static logd(param0: string, param1: string): void;
				public static isWebUri(param0: globalAndroid.net.Uri): boolean;
				public static isCurrentAccessToken(param0: com.facebook.AccessToken): boolean;
				public static tryGetJSONObjectFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONObject;
				public static jsonArrayToStringList(param0: org.json.JSONArray): java.util.List<string>;
				public static logd(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static mapToJsonStr(param0: java.util.Map<string,string>): string;
				public static arrayList(param0: androidNative.Array<any>): java.util.ArrayList;
				public static getResourceLocale(): java.util.Locale;
				public static setAppEventExtendedDeviceInfoParameters(param0: org.json.JSONObject, param1: globalAndroid.content.Context): void;
				public static filter(param0: java.util.List, param1: com.facebook.internal.Utility.Predicate<any>): java.util.List;
				public static writeStringMapToParcel(param0: globalAndroid.os.Parcel, param1: java.util.Map<string,string>): void;
				public static getBundleLongAsDate(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.Date): java.util.Date;
				public static putJSONValueInBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): boolean;
				public static putCommaSeparatedStringList(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.List<string>): void;
				public static unmodifiableCollection(param0: androidNative.Array<any>): java.util.Collection;
				public static isSubset(param0: java.util.Collection, param1: java.util.Collection): boolean;
				public static safeGetStringFromResponse(param0: org.json.JSONObject, param1: string): string;
				public static isAutofillAvailable(param0: globalAndroid.content.Context): boolean;
				public static closeQuietly(param0: java.io.Closeable): void;
				public static hashSet(param0: androidNative.Array<any>): java.util.HashSet;
				public static getContentSize(param0: globalAndroid.net.Uri): number;
				public static runOnNonUiThread(param0: java.lang.Runnable): void;
				public static coerceValueIfNullOrEmpty(param0: string, param1: string): string;
				public static isFileUri(param0: globalAndroid.net.Uri): boolean;
				public static clearCaches(): void;
				public static md5hash(param0: string): string;
				public static getMethodQuietly(param0: java.lang.Class<any>, param1: string, param2: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static deleteDirectory(param0: java.io.File): void;
				public static handlePermissionResponse(param0: org.json.JSONObject): com.facebook.internal.Utility.PermissionsLists;
				public static getStringPropertyAsJSON(param0: org.json.JSONObject, param1: string, param2: string): any;
				public static sha256hash(param0: string): string;
				public static readStreamToString(param0: java.io.InputStream): string;
				public static copyAndCloseInputStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
				public static isAutoAppLinkSetup(): boolean;
				public static convertJSONObjectToHashMap(param0: org.json.JSONObject): java.util.Map<string,any>;
				public static isNullOrEmpty(param0: java.util.Collection): boolean;
				public static clearFacebookCookies(param0: globalAndroid.content.Context): void;
				public static tryGetJSONArrayFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONArray;
				public static getCurrentLocale(): java.util.Locale;
				public static mustFixWindowParamsForAutofill(param0: globalAndroid.content.Context): boolean;
				public static parseUrlQueryString(param0: string): globalAndroid.os.Bundle;
				public static setAppEventAttributionParameters(param0: org.json.JSONObject, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean): void;
				public static getAppName(param0: globalAndroid.content.Context): string;
				public static logd(param0: string, param1: java.lang.Exception): void;
				public static sha1hash(param0: string): string;
				public static map(param0: java.util.List, param1: com.facebook.internal.Utility.Mapper<any,any>): java.util.List;
				public static sha256hash(param0: androidNative.Array<number>): string;
				public static jsonStrToMap(param0: string): java.util.Map<string,string>;
				public static isContentUri(param0: globalAndroid.net.Uri): boolean;
				public static hasSameId(param0: org.json.JSONObject, param1: org.json.JSONObject): boolean;
				public static intersectRanges(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
				public static asListNoNulls(param0: androidNative.Array<any>): java.util.List;
				public static sha1hash(param0: androidNative.Array<number>): string;
				public static readStringMapFromParcel(param0: globalAndroid.os.Parcel): java.util.Map<string,string>;
				public static areObjectsEqual(param0: any, param1: any): boolean;
				public static isChromeOS(param0: globalAndroid.content.Context): boolean;
				public static putUri(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.net.Uri): void;
				public static invokeMethodQuietly(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
				public static awaitGetGraphMeRequestWithCache(param0: string): org.json.JSONObject;
				public static getMetadataApplicationId(param0: globalAndroid.content.Context): string;
				public static getGraphMeRequestWithCacheAsync(param0: string, param1: com.facebook.internal.Utility.GraphMeRequestWithCacheCallback): void;
				public static getUriString(param0: globalAndroid.net.Uri): string;
				public static convertJSONArrayToList(param0: org.json.JSONArray): java.util.List<string>;
				public static getDataProcessingOptions(): org.json.JSONObject;
				public static getAppVersion(): string;
				public static disconnectQuietly(param0: java.net.URLConnection): void;
				public static getMethodQuietly(param0: string, param1: string, param2: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static getGraphDomainFromTokenDomain(param0: string): string;
				public static stringsEqualOrEmpty(param0: string, param1: string): boolean;
				public static generateRandomString(param0: number): string;
				public static buildUri(param0: string, param1: string, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
				public static jsonArrayToSet(param0: org.json.JSONArray): java.util.Set<string>;
				public static isNullOrEmpty(param0: string): boolean;
				public static putNonEmptyString(param0: globalAndroid.os.Bundle, param1: string, param2: string): void;
				public static convertJSONObjectToStringMap(param0: org.json.JSONObject): java.util.Map<string,string>;
			}
			export module Utility {
				export class GraphMeRequestWithCacheCallback {
					public static class: java.lang.Class<com.facebook.internal.Utility.GraphMeRequestWithCacheCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$GraphMeRequestWithCacheCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: org.json.JSONObject): void;
						onFailure(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onFailure(param0: com.facebook.FacebookException): void;
					public onSuccess(param0: org.json.JSONObject): void;
				}
				export class Mapper<T, K>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Mapper<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): K;
					});
					public constructor();
					public apply(param0: T): K;
				}
				export class PermissionsLists {
					public static class: java.lang.Class<com.facebook.internal.Utility.PermissionsLists>;
					public getDeclinedPermissions(): java.util.List<string>;
					public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);
					public getGrantedPermissions(): java.util.List<string>;
					public setExpiredPermissions(param0: java.util.List<string>): void;
					public setDeclinedPermissions(param0: java.util.List<string>): void;
					public getExpiredPermissions(): java.util.List<string>;
					public setGrantedPermissions(param0: java.util.List<string>): void;
				}
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Predicate<any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): boolean;
					});
					public constructor();
					public apply(param0: T): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Validate {
				public static class: java.lang.Class<com.facebook.internal.Validate>;
				public static CUSTOM_TAB_REDIRECT_URI_PREFIX: string;
				public static INSTANCE: com.facebook.internal.Validate;
				public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
				public static hasContentProvider(param0: globalAndroid.content.Context): void;
				public static containsNoNullOrEmpty(param0: java.util.Collection<string>, param1: string): void;
				public static notEmpty(param0: java.util.Collection, param1: string): void;
				public static oneOf(param0: any, param1: string, param2: androidNative.Array<any>): void;
				public static hasFacebookActivity(param0: globalAndroid.content.Context, param1: boolean): void;
				public static hasInternetPermissions(param0: globalAndroid.content.Context): void;
				public static hasCustomTabRedirectActivity(param0: globalAndroid.content.Context, param1: string): boolean;
				public static containsNoNulls(param0: java.util.Collection, param1: string): void;
				public static hasWiFiPermission(param0: globalAndroid.content.Context): boolean;
				public static hasChangeWifiStatePermission(param0: globalAndroid.content.Context): boolean;
				public static runningOnUiThread(): void;
				public static hasFacebookActivity(param0: globalAndroid.content.Context): void;
				public static hasAppID(): string;
				public static hasInternetPermissions(param0: globalAndroid.content.Context, param1: boolean): void;
				public static notNullOrEmpty(param0: string, param1: string): void;
				public static notEmpty(param0: string, param1: string): void;
				public static hasBluetoothPermission(param0: globalAndroid.content.Context): boolean;
				public static hasClientToken(): string;
				public static notEmptyAndContainsNoNulls(param0: java.util.Collection, param1: string): void;
				public static sdkInitialized(): void;
				public static hasLocationPermission(param0: globalAndroid.content.Context): boolean;
				public static notNull(param0: any, param1: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class WebDialog {
				public static class: java.lang.Class<com.facebook.internal.WebDialog>;
				public isListenerCalled(): boolean;
				public isPageFinished(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public static getWebDialogTheme(): number;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.login.LoginTargetApp, param5: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public sendSuccessToListener(param0: globalAndroid.os.Bundle): void;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public dismiss(): void;
				public sendErrorToListener(param0: java.lang.Throwable): void;
				public cancel(): void;
				public onStop(): void;
				public getWebView(): globalAndroid.webkit.WebView;
				public static setInitCallback(param0: com.facebook.internal.WebDialog.InitCallback): void;
				public getOnCompleteListener(): com.facebook.internal.WebDialog.OnCompleteListener;
				public static initDefaultTheme(param0: globalAndroid.content.Context): void;
				public parseResponseUri(param0: string): globalAndroid.os.Bundle;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public setExpectedRedirectUrl(param0: string): void;
				public setOnCompleteListener(param0: com.facebook.internal.WebDialog.OnCompleteListener): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public static setWebDialogTheme(param0: number): void;
				public resize(): void;
				public onDetachedFromWindow(): void;
				public onAttachedToWindow(): void;
			}
			export module WebDialog {
				export class Builder {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.Builder>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle);
					public getTheme(): number;
					public getListener(): com.facebook.internal.WebDialog.OnCompleteListener;
					public getParameters(): globalAndroid.os.Bundle;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle);
					public getApplicationId(): string;
					public getContext(): globalAndroid.content.Context;
					public setTheme(param0: number): com.facebook.internal.WebDialog.Builder;
					public setOnCompleteListener(param0: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog.Builder;
					public build(): com.facebook.internal.WebDialog;
				}
				export class DialogWebViewClient {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.DialogWebViewClient>;
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public onReceivedSslError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.SslErrorHandler, param2: globalAndroid.net.http.SslError): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					public onReceivedError(param0: globalAndroid.webkit.WebView, param1: number, param2: string, param3: string): void;
					public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				}
				export class InitCallback {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.InitCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WebDialog$InitCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInit(param0: globalAndroid.webkit.WebView): void;
					});
					public constructor();
					public onInit(param0: globalAndroid.webkit.WebView): void;
				}
				export class OnCompleteListener {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.OnCompleteListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WebDialog$OnCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: globalAndroid.os.Bundle, param1: com.facebook.FacebookException): void;
					});
					public constructor();
					public onComplete(param0: globalAndroid.os.Bundle, param1: com.facebook.FacebookException): void;
				}
				export class UploadStagingResourcesTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,androidNative.Array<string>> {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.UploadStagingResourcesTask>;
					public doInBackground(param0: androidNative.Array<java.lang.Void>): androidNative.Array<string>;
					public onPostExecute(param0: androidNative.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class WorkQueue {
				public static class: java.lang.Class<com.facebook.internal.WorkQueue>;
				public static DEFAULT_MAX_CONCURRENT: number;
				public static Companion: com.facebook.internal.WorkQueue.Companion;
				public addActiveWorkItem(param0: java.lang.Runnable): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number);
				public validate(): void;
				public addActiveWorkItem(param0: java.lang.Runnable, param1: boolean): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number, param1: java.util.concurrent.Executor);
				public constructor();
			}
			export module WorkQueue {
				export class Companion {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.Companion>;
				}
				export class WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkItem>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WorkQueue$WorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancel(): boolean;
						isRunning(): boolean;
						moveToFront(): void;
					});
					public constructor();
					public cancel(): boolean;
					public isRunning(): boolean;
					public moveToFront(): void;
				}
				export class WorkNode extends com.facebook.internal.WorkQueue.WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkNode>;
					public getNext(): com.facebook.internal.WorkQueue.WorkNode;
					public cancel(): boolean;
					public addToList(param0: com.facebook.internal.WorkQueue.WorkNode, param1: boolean): com.facebook.internal.WorkQueue.WorkNode;
					public constructor(param0: java.lang.Runnable);
					public getCallback(): java.lang.Runnable;
					public isRunning(): boolean;
					public removeFromList(param0: com.facebook.internal.WorkQueue.WorkNode): com.facebook.internal.WorkQueue.WorkNode;
					public verify(param0: boolean): void;
					public setRunning(param0: boolean): void;
					public moveToFront(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module gatekeeper {
				export class GateKeeper {
					public static class: java.lang.Class<com.facebook.internal.gatekeeper.GateKeeper>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getName(): string;
					public getValue(): boolean;
					public copy(param0: string, param1: boolean): com.facebook.internal.gatekeeper.GateKeeper;
					public constructor(param0: string, param1: boolean);
					public hashCode(): number;
					public component2(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module gatekeeper {
				export class GateKeeperRuntimeCache {
					public static class: java.lang.Class<com.facebook.internal.gatekeeper.GateKeeperRuntimeCache>;
					public setGateKeepers(param0: string, param1: java.util.List<com.facebook.internal.gatekeeper.GateKeeper>): void;
					public resetCache(param0: string): void;
					public dumpGateKeepers(param0: string): java.util.List<com.facebook.internal.gatekeeper.GateKeeper>;
					public constructor();
					public setGateKeeper(param0: string, param1: com.facebook.internal.gatekeeper.GateKeeper): void;
					public getGateKeeperValue(param0: string, param1: string, param2: boolean): boolean;
					public getGateKeeper(param0: string, param1: string): com.facebook.internal.gatekeeper.GateKeeper;
					public setGateKeeperValue(param0: string, param1: string, param2: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module gatekeeper {
				export class GateKeeperRuntimeCacheKt {
					public static class: java.lang.Class<com.facebook.internal.gatekeeper.GateKeeperRuntimeCacheKt>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class ExceptionAnalyzer {
					public static class: java.lang.Class<com.facebook.internal.instrument.ExceptionAnalyzer>;
					public static INSTANCE: com.facebook.internal.instrument.ExceptionAnalyzer;
					public static execute(param0: java.lang.Throwable): void;
					public static isDebug$facebook_core_release(): boolean;
					public sendExceptionAnalysisReports$facebook_core_release(): void;
					public static enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentData {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData>;
					public static Companion: com.facebook.internal.instrument.InstrumentData.Companion;
					public toString(): string;
					public save(): void;
					public compareTo(param0: com.facebook.internal.instrument.InstrumentData): number;
					public isValid(): boolean;
					public clear(): void;
				}
				export module InstrumentData {
					export class Builder {
						public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Builder>;
						public static INSTANCE: com.facebook.internal.instrument.InstrumentData.Builder;
						public static load(param0: java.io.File): com.facebook.internal.instrument.InstrumentData;
						public static build(param0: java.lang.Throwable, param1: com.facebook.internal.instrument.InstrumentData.Type): com.facebook.internal.instrument.InstrumentData;
						public static build(param0: string, param1: string): com.facebook.internal.instrument.InstrumentData;
						public static build(param0: org.json.JSONArray): com.facebook.internal.instrument.InstrumentData;
					}
					export class Companion {
						public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Companion>;
					}
					export class Type {
						public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Type>;
						public static Unknown: com.facebook.internal.instrument.InstrumentData.Type;
						public static Analysis: com.facebook.internal.instrument.InstrumentData.Type;
						public static AnrReport: com.facebook.internal.instrument.InstrumentData.Type;
						public static CrashReport: com.facebook.internal.instrument.InstrumentData.Type;
						public static CrashShield: com.facebook.internal.instrument.InstrumentData.Type;
						public static ThreadCheck: com.facebook.internal.instrument.InstrumentData.Type;
						public static valueOf(param0: string): com.facebook.internal.instrument.InstrumentData.Type;
						public static values(): androidNative.Array<com.facebook.internal.instrument.InstrumentData.Type>;
						public toString(): string;
						public getLogPrefix(): string;
					}
					export module Type {
						export class WhenMappings {
							public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Type.WhenMappings>;
						}
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentManager {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentManager>;
					public static INSTANCE: com.facebook.internal.instrument.InstrumentManager;
					public static start(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentUtility {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentUtility>;
					public static ANALYSIS_REPORT_PREFIX: string;
					public static ANR_REPORT_PREFIX: string;
					public static CRASH_REPORT_PREFIX: string;
					public static CRASH_SHIELD_PREFIX: string;
					public static THREAD_CHECK_PREFIX: string;
					public static ERROR_REPORT_PREFIX: string;
					public static INSTANCE: com.facebook.internal.instrument.InstrumentUtility;
					public static writeFile(param0: string, param1: string): void;
					public static sendReports(param0: string, param1: org.json.JSONArray, param2: com.facebook.GraphRequest.Callback): void;
					public static getInstrumentReportDir(): java.io.File;
					public static getStackTrace(param0: java.lang.Thread): string;
					public static isSDKRelatedThread(param0: java.lang.Thread): boolean;
					public static listExceptionReportFiles(): androidNative.Array<java.io.File>;
					public static deleteFile(param0: string): boolean;
					public static getStackTrace(param0: java.lang.Throwable): string;
					public static readFile(param0: string, param1: boolean): org.json.JSONObject;
					public static listExceptionAnalysisReportFiles(): androidNative.Array<java.io.File>;
					public static listAnrReportFiles(): androidNative.Array<java.io.File>;
					public static getCause(param0: java.lang.Throwable): string;
					public static isSDKRelatedException(param0: java.lang.Throwable): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module anrreport {
					export class ANRDetector {
						public static class: java.lang.Class<com.facebook.internal.instrument.anrreport.ANRDetector>;
						public static INSTANCE: com.facebook.internal.instrument.anrreport.ANRDetector;
						public static checkProcessError(param0: globalAndroid.app.ActivityManager): void;
						public static start(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module anrreport {
					export class ANRHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.anrreport.ANRHandler>;
						public static INSTANCE: com.facebook.internal.instrument.anrreport.ANRHandler;
						public static enable(): void;
						public static sendANRReports(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashreport {
					export class CrashHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashHandler>;
						public static Companion: com.facebook.internal.instrument.crashreport.CrashHandler.Companion;
						public static enable(): void;
						public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
					}
					export module CrashHandler {
						export class Companion {
							public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashHandler.Companion>;
							public enable(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashshield {
					export class AutoHandleExceptions {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.AutoHandleExceptions>;
						/**
						 * Constructs a new instance of the com.facebook.internal.instrument.crashshield.AutoHandleExceptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashshield {
					export class CrashShieldHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.CrashShieldHandler>;
						public static INSTANCE: com.facebook.internal.instrument.crashshield.CrashShieldHandler;
						public static scheduleCrashInDebug(param0: java.lang.Throwable): void;
						public static enable(): void;
						public static methodFinished(param0: any): void;
						public static isObjectCrashing(param0: any): boolean;
						public static isDebug(): boolean;
						public static resetCrashingObjects(): void;
						public static reset(): void;
						public static disable(): void;
						public static handleThrowable(param0: java.lang.Throwable, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashshield {
					export class NoAutoExceptionHandling {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashshield.NoAutoExceptionHandling>;
						/**
						 * Constructs a new instance of the com.facebook.internal.instrument.crashshield.NoAutoExceptionHandling interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module errorreport {
					export class ErrorReportData {
						public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportData>;
						public static Companion: com.facebook.internal.instrument.errorreport.ErrorReportData.Companion;
						public constructor(param0: java.io.File);
						public compareTo(param0: com.facebook.internal.instrument.errorreport.ErrorReportData): number;
						public getParameters(): org.json.JSONObject;
						public save(): void;
						public clear(): void;
						public toString(): string;
						public isValid(): boolean;
						public constructor(param0: string);
					}
					export module ErrorReportData {
						export class Companion {
							public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportData.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module errorreport {
					export class ErrorReportHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportHandler>;
						public static INSTANCE: com.facebook.internal.instrument.errorreport.ErrorReportHandler;
						public static save(param0: string): void;
						public static enable(): void;
						public static listErrorReportFiles(): androidNative.Array<java.io.File>;
						public static sendErrorReports(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module threadcheck {
					export class ThreadCheckHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.threadcheck.ThreadCheckHandler>;
						public static INSTANCE: com.facebook.internal.instrument.threadcheck.ThreadCheckHandler;
						public static enable(): void;
						public static workerThreadViolationDetected(param0: java.lang.Class<any>, param1: string, param2: string): void;
						public static uiThreadViolationDetected(param0: java.lang.Class<any>, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module logging {
				export module dumpsys {
					export class AndroidRootResolver {
						public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.AndroidRootResolver>;
						public static Companion: com.facebook.internal.logging.dumpsys.AndroidRootResolver.Companion;
						public constructor();
						public attachActiveRootListener(param0: com.facebook.internal.logging.dumpsys.AndroidRootResolver.Listener): void;
						public listActiveRoots(): java.util.List<com.facebook.internal.logging.dumpsys.AndroidRootResolver.Root>;
					}
					export module AndroidRootResolver {
						export class Companion {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.AndroidRootResolver.Companion>;
						}
						export class ListenableArrayList extends java.util.ArrayList<globalAndroid.view.View> {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.AndroidRootResolver.ListenableArrayList>;
							public remove(param0: number): globalAndroid.view.View;
							public constructor();
							public contains(param0: any): boolean;
							public size(): number;
							public removeAt(param0: number): globalAndroid.view.View;
							public lastIndexOf(param0: any): number;
							public remove(param0: any): boolean;
							public remove(param0: globalAndroid.view.View): boolean;
							public indexOf(param0: any): number;
							public lastIndexOf(param0: globalAndroid.view.View): number;
							public setListener(param0: com.facebook.internal.logging.dumpsys.AndroidRootResolver.Listener): void;
							public getSize(): number;
							public indexOf(param0: globalAndroid.view.View): number;
							public contains(param0: globalAndroid.view.View): boolean;
							public add(param0: globalAndroid.view.View): boolean;
						}
						export class Listener {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.AndroidRootResolver.Listener>;
							/**
							 * Constructs a new instance of the com.facebook.internal.logging.dumpsys.AndroidRootResolver$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRootAdded(param0: globalAndroid.view.View): void;
								onRootRemoved(param0: globalAndroid.view.View): void;
								onRootsChanged(param0: java.util.List<any>): void;
							});
							public constructor();
							public onRootRemoved(param0: globalAndroid.view.View): void;
							public onRootsChanged(param0: java.util.List<any>): void;
							public onRootAdded(param0: globalAndroid.view.View): void;
						}
						export class Root {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.AndroidRootResolver.Root>;
							public getParam(): globalAndroid.view.WindowManager.LayoutParams;
							public getView(): globalAndroid.view.View;
							public constructor(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowManager.LayoutParams);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module logging {
				export module dumpsys {
					export class EndToEndDumpsysHelper {
						public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper>;
						public static Companion: com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Companion;
						public constructor();
						public static maybeDump(param0: string, param1: java.io.PrintWriter, param2: androidNative.Array<string>): boolean;
					}
					export module EndToEndDumpsysHelper {
						export class Api21Utils {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Api21Utils>;
							public static INSTANCE: com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Api21Utils;
							public writeExtraProps(param0: java.io.PrintWriter, param1: globalAndroid.view.View): void;
						}
						export class Api24Utils {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Api24Utils>;
							public static INSTANCE: com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Api24Utils;
							public addExtraProps(param0: org.json.JSONObject, param1: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						}
						export class Companion {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.EndToEndDumpsysHelper.Companion>;
							public maybeDump(param0: string, param1: java.io.PrintWriter, param2: androidNative.Array<string>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module logging {
				export module dumpsys {
					export class ResourcesUtil {
						public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.ResourcesUtil>;
						public static INSTANCE: com.facebook.internal.logging.dumpsys.ResourcesUtil;
						public static getIdStringQuietly(param0: globalAndroid.content.res.Resources, param1: number): string;
						public static getIdString(param0: globalAndroid.content.res.Resources, param1: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module logging {
				export module dumpsys {
					export class WebViewDumpHelper {
						public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.WebViewDumpHelper>;
						public static GET_WEBVIEW_HTML_JS_SCRIPT: string;
						public static Companion: com.facebook.internal.logging.dumpsys.WebViewDumpHelper.Companion;
						public handle(param0: globalAndroid.webkit.WebView): void;
						public constructor();
						public dump(param0: java.io.PrintWriter): void;
					}
					export module WebViewDumpHelper {
						export class Companion {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.WebViewDumpHelper.Companion>;
						}
						export class WebViewData {
							public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.WebViewDumpHelper.WebViewData>;
							public static Companion: com.facebook.internal.logging.dumpsys.WebViewDumpHelper.WebViewData.Companion;
							public getWidth(): number;
							public getHeight(): number;
							public getKey(): string;
							public getLeft(): number;
							public getTop(): number;
							public constructor(param0: globalAndroid.webkit.WebView);
						}
						export module WebViewData {
							export class Companion {
								public static class: java.lang.Class<com.facebook.internal.logging.dumpsys.WebViewDumpHelper.WebViewData.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module qualityvalidation {
				export class Excuse {
					public static class: java.lang.Class<com.facebook.internal.qualityvalidation.Excuse>;
					/**
					 * Constructs a new instance of the com.facebook.internal.qualityvalidation.Excuse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						type(): string;
						reason(): string;
					});
					public constructor();
					public reason(): string;
					public type(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module qualityvalidation {
				export class ExcusesForDesignViolations {
					public static class: java.lang.Class<com.facebook.internal.qualityvalidation.ExcusesForDesignViolations>;
					/**
					 * Constructs a new instance of the com.facebook.internal.qualityvalidation.ExcusesForDesignViolations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): androidNative.Array<com.facebook.internal.qualityvalidation.Excuse>;
					});
					public constructor();
					public value(): androidNative.Array<com.facebook.internal.qualityvalidation.Excuse>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module security {
				export class CertificateUtil {
					public static class: java.lang.Class<com.facebook.internal.security.CertificateUtil>;
					public static DELIMITER: string;
					public static INSTANCE: com.facebook.internal.security.CertificateUtil;
					public static getCertificateHash(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module security {
				export class OidcSecurityUtil {
					public static class: java.lang.Class<com.facebook.internal.security.OidcSecurityUtil>;
					public static SIGNATURE_ALGORITHM_SHA256: string;
					public static TIMEOUT_IN_MILLISECONDS: number;
					public static INSTANCE: com.facebook.internal.security.OidcSecurityUtil;
					public static verify(param0: java.security.PublicKey, param1: string, param2: string): boolean;
					public getOPENID_KEYS_PATH(): string;
					public static getRawKeyFromEndPoint(param0: string): string;
					public static getPublicKeyFromString(param0: string): java.security.PublicKey;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.login.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class CustomTabLoginMethodHandler extends com.facebook.login.WebLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.CustomTabLoginMethodHandler>;
				public static calledThroughLoggedOutAppSwitch: boolean;
				public static OAUTH_DIALOG: string;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.CustomTabLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public putChallengeParam(param0: org.json.JSONObject): void;
				public describeContents(): number;
				public getRedirectUrl(): string;
				public getSSODevice(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class CustomTabPrefetchHelper {
				public static class: java.lang.Class<com.facebook.login.CustomTabPrefetchHelper>;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public static getPreparedSessionOnce(): androidx.browser.customtabs.CustomTabsSession;
				public static mayLaunchUrl(param0: globalAndroid.net.Uri): void;
				public onCustomTabsServiceConnected(param0: globalAndroid.content.ComponentName, param1: androidx.browser.customtabs.CustomTabsClient): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DefaultAudience {
				public static class: java.lang.Class<com.facebook.login.DefaultAudience>;
				public static NONE: com.facebook.login.DefaultAudience;
				public static ONLY_ME: com.facebook.login.DefaultAudience;
				public static FRIENDS: com.facebook.login.DefaultAudience;
				public static EVERYONE: com.facebook.login.DefaultAudience;
				public static values(): androidNative.Array<com.facebook.login.DefaultAudience>;
				public getNativeProtocolAudience(): string;
				public static valueOf(param0: string): com.facebook.login.DefaultAudience;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceAuthDialog {
				public static class: java.lang.Class<com.facebook.login.DeviceAuthDialog>;
				public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				public startLogin(param0: com.facebook.login.LoginClient.Request): void;
				public onBackButtonPressed(): void;
				public onCancel(): void;
				public onError(param0: com.facebook.FacebookException): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public onDestroyView(): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public initializeContentView(param0: boolean): globalAndroid.view.View;
				public getLayoutResId(param0: boolean): number;
				public constructor();
			}
			export module DeviceAuthDialog {
				export class RequestState {
					public static class: java.lang.Class<com.facebook.login.DeviceAuthDialog.RequestState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.DeviceAuthDialog.RequestState>;
					public getRequestCode(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public getUserCode(): string;
					public getInterval(): number;
					public setInterval(param0: number): void;
					public setLastPoll(param0: number): void;
					public getAuthorizationUri(): string;
					public withinLastRefreshWindow(): boolean;
					public describeContents(): number;
					public setRequestCode(param0: string): void;
					public setUserCode(param0: string): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceAuthMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.DeviceAuthMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.DeviceAuthMethodHandler>;
				public createDeviceAuthDialog(): com.facebook.login.DeviceAuthDialog;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static getBackgroundExecutor(): java.util.concurrent.ScheduledThreadPoolExecutor;
				public onCancel(): void;
				public describeContents(): number;
				public onSuccess(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date): void;
				public onError(param0: java.lang.Exception): void;
				public constructor(param0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceLoginManager extends com.facebook.login.LoginManager {
				public static class: java.lang.Class<com.facebook.login.DeviceLoginManager>;
				public getDeviceRedirectUri(): globalAndroid.net.Uri;
				public createLoginRequest(param0: java.util.Collection<string>): com.facebook.login.LoginClient.Request;
				public setDeviceRedirectUri(param0: globalAndroid.net.Uri): void;
				public static getInstance(): com.facebook.login.DeviceLoginManager;
				public setDeviceAuthTargetUserId(param0: string): void;
				public createLoginRequest(param0: java.util.Collection<string>, param1: string): com.facebook.login.LoginClient.Request;
				public getDeviceAuthTargetUserId(): string;
				public static getInstance(): com.facebook.login.LoginManager;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class FacebookLiteLoginMethodHandler extends com.facebook.login.NativeAppLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.FacebookLiteLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.FacebookLiteLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class GetTokenClient extends com.facebook.internal.PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.login.GetTokenClient>;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class GetTokenLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.GetTokenLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.GetTokenLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class InstagramAppLoginMethodHandler extends com.facebook.login.NativeAppLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.InstagramAppLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.InstagramAppLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
				public getTokenSource(): com.facebook.AccessTokenSource;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class KatanaProxyLoginMethodHandler extends com.facebook.login.NativeAppLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.KatanaProxyLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.KatanaProxyLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public shouldKeepTrackOfMultipleIntents(): boolean;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class Login {
				public static class: java.lang.Class<com.facebook.login.Login>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginBehavior {
				public static class: java.lang.Class<com.facebook.login.LoginBehavior>;
				public static NATIVE_WITH_FALLBACK: com.facebook.login.LoginBehavior;
				public static NATIVE_ONLY: com.facebook.login.LoginBehavior;
				public static KATANA_ONLY: com.facebook.login.LoginBehavior;
				public static WEB_ONLY: com.facebook.login.LoginBehavior;
				public static WEB_VIEW_ONLY: com.facebook.login.LoginBehavior;
				public static DIALOG_ONLY: com.facebook.login.LoginBehavior;
				public static DEVICE_AUTH: com.facebook.login.LoginBehavior;
				public static values(): androidNative.Array<com.facebook.login.LoginBehavior>;
				public static valueOf(param0: string): com.facebook.login.LoginBehavior;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginClient {
				public static class: java.lang.Class<com.facebook.login.LoginClient>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getHandlersToTry(param0: com.facebook.login.LoginClient.Request): androidNative.Array<com.facebook.login.LoginMethodHandler>;
				public static getLoginRequestCode(): number;
				public constructor(param0: androidx.fragment.app.Fragment);
				public describeContents(): number;
				public getFragment(): androidx.fragment.app.Fragment;
				public getPendingRequest(): com.facebook.login.LoginClient.Request;
				public constructor(param0: globalAndroid.os.Parcel);
			}
			export module LoginClient {
				export class BackgroundProcessingListener {
					public static class: java.lang.Class<com.facebook.login.LoginClient.BackgroundProcessingListener>;
					/**
					 * Constructs a new instance of the com.facebook.login.LoginClient$BackgroundProcessingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackgroundProcessingStarted(): void;
						onBackgroundProcessingStopped(): void;
					});
					public constructor();
					public onBackgroundProcessingStarted(): void;
					public onBackgroundProcessingStopped(): void;
				}
				export class OnCompletedListener {
					public static class: java.lang.Class<com.facebook.login.LoginClient.OnCompletedListener>;
					/**
					 * Constructs a new instance of the com.facebook.login.LoginClient$OnCompletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.facebook.login.LoginClient.Result): void;
					});
					public constructor();
					public onCompleted(param0: com.facebook.login.LoginClient.Result): void;
				}
				export class Request {
					public static class: java.lang.Class<com.facebook.login.LoginClient.Request>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient.Request>;
					public getNonce(): string;
					public getMessengerPageId(): string;
					public setResetMessengerState(param0: boolean): void;
					public describeContents(): number;
					public setMessengerPageId(param0: string): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getResetMessengerState(): boolean;
				}
				export class Result {
					public static class: java.lang.Class<com.facebook.login.LoginClient.Result>;
					public loggingExtras: java.util.Map<string,string>;
					public extraData: java.util.Map<string,string>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient.Result>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module Result {
					export class Code {
						public static class: java.lang.Class<com.facebook.login.LoginClient.Result.Code>;
						public static SUCCESS: com.facebook.login.LoginClient.Result.Code;
						public static CANCEL: com.facebook.login.LoginClient.Result.Code;
						public static ERROR: com.facebook.login.LoginClient.Result.Code;
						public static values(): androidNative.Array<com.facebook.login.LoginClient.Result.Code>;
						public static valueOf(param0: string): com.facebook.login.LoginClient.Result.Code;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginConfiguration {
				public static class: java.lang.Class<com.facebook.login.LoginConfiguration>;
				public static OPENID: string;
				public static Companion: com.facebook.login.LoginConfiguration.Companion;
				public constructor(param0: java.util.Collection<string>);
				public getPermissions(): java.util.Set<string>;
				public constructor(param0: java.util.Collection<string>, param1: string);
				public getNonce(): string;
			}
			export module LoginConfiguration {
				export class Companion {
					public static class: java.lang.Class<com.facebook.login.LoginConfiguration.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginFragment {
				public static class: java.lang.Class<com.facebook.login.LoginFragment>;
				public createLoginClient(): com.facebook.login.LoginClient;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public getLayoutResId(): number;
				public onPause(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onDestroy(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginLogger {
				public static class: java.lang.Class<com.facebook.login.LoginLogger>;
				public logCompleteLogin(param0: string, param1: java.util.Map<string,string>, param2: com.facebook.login.LoginClient.Result.Code, param3: java.util.Map<string,string>, param4: java.lang.Exception, param5: string): void;
				public logStartLogin(param0: com.facebook.login.LoginClient.Request): void;
				public logAuthorizationMethodStart(param0: string, param1: string, param2: string): void;
				public logCompleteLogin(param0: string, param1: java.util.Map<string,string>, param2: com.facebook.login.LoginClient.Result.Code, param3: java.util.Map<string,string>, param4: java.lang.Exception): void;
				public logAuthorizationMethodNotTried(param0: string, param1: string, param2: string): void;
				public logLoginStatusStart(param0: string): void;
				public logAuthorizationMethodStart(param0: string, param1: string): void;
				public logAuthorizationMethodComplete(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): void;
				public logLoginStatusError(param0: string, param1: java.lang.Exception): void;
				public logStartLogin(param0: com.facebook.login.LoginClient.Request, param1: string): void;
				public logAuthorizationMethodNotTried(param0: string, param1: string): void;
				public getApplicationId(): string;
				public logAuthorizationMethodComplete(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>, param6: string): void;
				public logUnexpectedError(param0: string, param1: string, param2: string): void;
				public logLoginStatusFailure(param0: string): void;
				public logLoginStatusSuccess(param0: string): void;
				public logUnexpectedError(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginManager {
				public static class: java.lang.Class<com.facebook.login.LoginManager>;
				public setLoginTargetApp(param0: com.facebook.login.LoginTargetApp): com.facebook.login.LoginManager;
				public setDefaultAudience(param0: com.facebook.login.DefaultAudience): com.facebook.login.LoginManager;
				public logOut(): void;
				public logIn(param0: globalAndroid.app.Activity, param1: com.facebook.login.LoginConfiguration): void;
				public setShouldSkipAccountDeduplication(param0: boolean): com.facebook.login.LoginManager;
				public logIn(param0: com.facebook.internal.FragmentWrapper, param1: java.util.Collection<string>, param2: string): void;
				public isFamilyLogin(): boolean;
				public logIn(param0: androidx.activity.result.ActivityResultRegistryOwner, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>, param3: string): void;
				public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.LoginStatusCallback): void;
				public getFacebookActivityIntent(param0: com.facebook.login.LoginClient.Request): globalAndroid.content.Intent;
				public setFamilyLogin(param0: boolean): com.facebook.login.LoginManager;
				public resolveError(param0: androidx.fragment.app.Fragment, param1: com.facebook.CallbackManager, param2: com.facebook.GraphResponse): void;
				public resolveError(param0: androidx.activity.result.ActivityResultRegistryOwner, param1: com.facebook.CallbackManager, param2: com.facebook.GraphResponse): void;
				public logIn(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>, param2: string): void;
				public createLoginRequestWithConfig(param0: com.facebook.login.LoginConfiguration): com.facebook.login.LoginClient.Request;
				public getLoginBehavior(): com.facebook.login.LoginBehavior;
				public unregisterCallback(param0: com.facebook.CallbackManager): void;
				public reauthorizeDataAccess(param0: androidx.fragment.app.Fragment): void;
				public createReauthorizeRequest(): com.facebook.login.LoginClient.Request;
				public logInWithConfiguration(param0: androidx.fragment.app.Fragment, param1: com.facebook.login.LoginConfiguration): void;
				public setAuthType(param0: string): com.facebook.login.LoginManager;
				public logInWithReadPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
				public logInWithPublishPermissions(param0: androidx.activity.result.ActivityResultRegistryOwner, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>): void;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.login.LoginResult>): void;
				public logIn(param0: androidx.activity.result.ActivityResultRegistryOwner, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>): void;
				public logInWithReadPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
				public logIn(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
				public logIn(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>, param2: string): void;
				public logInWithPublishPermissions(param0: androidx.fragment.app.Fragment, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>): void;
				public logInWithReadPermissions(param0: androidx.activity.result.ActivityResultRegistryOwner, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>): void;
				public logIn(param0: com.facebook.internal.FragmentWrapper, param1: java.util.Collection<string>): void;
				public reauthorizeDataAccess(param0: globalAndroid.app.Activity): void;
				/** @deprecated */
				public resolveError(param0: androidx.fragment.app.Fragment, param1: com.facebook.GraphResponse): void;
				public resolveError(param0: globalAndroid.app.Fragment, param1: com.facebook.GraphResponse): void;
				public setMessengerPageId(param0: string): com.facebook.login.LoginManager;
				public getAuthType(): string;
				public createLoginRequest(param0: java.util.Collection<string>, param1: string): com.facebook.login.LoginClient.Request;
				public static getInstance(): com.facebook.login.LoginManager;
				public resolveError(param0: globalAndroid.app.Activity, param1: com.facebook.GraphResponse): void;
				public logIn(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>, param2: string): void;
				public setLoginBehavior(param0: com.facebook.login.LoginBehavior): com.facebook.login.LoginManager;
				public logInWithPublishPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
				public getDefaultAudience(): com.facebook.login.DefaultAudience;
				public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: com.facebook.LoginStatusCallback): void;
				public getShouldSkipAccountDeduplication(): boolean;
				public logInWithReadPermissions(param0: androidx.fragment.app.Fragment, param1: com.facebook.CallbackManager, param2: java.util.Collection<string>): void;
				public logIn(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
				public logIn(param0: com.facebook.internal.FragmentWrapper, param1: com.facebook.login.LoginConfiguration): void;
				public getLoginTargetApp(): com.facebook.login.LoginTargetApp;
				/** @deprecated */
				public logInWithPublishPermissions(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
				public setResetMessengerState(param0: boolean): com.facebook.login.LoginManager;
				public createLoginRequest(param0: java.util.Collection<string>): com.facebook.login.LoginClient.Request;
				/** @deprecated */
				public logInWithReadPermissions(param0: androidx.fragment.app.Fragment, param1: java.util.Collection<string>): void;
				public loginWithConfiguration(param0: globalAndroid.app.Activity, param1: com.facebook.login.LoginConfiguration): void;
				public logIn(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
				public logInWithPublishPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
			}
			export module LoginManager {
				export class ActivityStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.login.LoginManager.ActivityStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class AndroidxActivityResultRegistryOwnerStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.login.LoginManager.AndroidxActivityResultRegistryOwnerStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class FragmentStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.login.LoginManager.FragmentStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class LoginLoggerHolder {
					public static class: java.lang.Class<com.facebook.login.LoginManager.LoginLoggerHolder>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.LoginMethodHandler>;
				public loginClient: com.facebook.login.LoginClient;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public shouldKeepTrackOfMultipleIntents(): boolean;
				public static createAuthenticationTokenFromWebBundle(param0: globalAndroid.os.Bundle, param1: string): com.facebook.AuthenticationToken;
				public getClientState(param0: string): string;
				public addLoggingExtra(param0: string, param1: any): void;
				public logWebLoginCompleted(param0: string): void;
				public static createAccessTokenFromWebBundle(param0: java.util.Collection<string>, param1: globalAndroid.os.Bundle, param2: com.facebook.AccessTokenSource, param3: string): com.facebook.AccessToken;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginResult {
				public static class: java.lang.Class<com.facebook.login.LoginResult>;
				public component3(): java.util.Set<string>;
				public copy(param0: com.facebook.AccessToken, param1: com.facebook.AuthenticationToken, param2: java.util.Set<string>, param3: java.util.Set<string>): com.facebook.login.LoginResult;
				public getRecentlyGrantedPermissions(): java.util.Set<string>;
				public getAccessToken(): com.facebook.AccessToken;
				public component1(): com.facebook.AccessToken;
				public toString(): string;
				public component4(): java.util.Set<string>;
				public constructor(param0: com.facebook.AccessToken, param1: java.util.Set<string>, param2: java.util.Set<string>);
				public getAuthenticationToken(): com.facebook.AuthenticationToken;
				public hashCode(): number;
				public component2(): com.facebook.AuthenticationToken;
				public getRecentlyDeniedPermissions(): java.util.Set<string>;
				public equals(param0: any): boolean;
				public constructor(param0: com.facebook.AccessToken, param1: com.facebook.AuthenticationToken, param2: java.util.Set<string>, param3: java.util.Set<string>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginStatusClient extends com.facebook.internal.PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.login.LoginStatusClient>;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginTargetApp {
				public static class: java.lang.Class<com.facebook.login.LoginTargetApp>;
				public static FACEBOOK: com.facebook.login.LoginTargetApp;
				public static INSTAGRAM: com.facebook.login.LoginTargetApp;
				public static Companion: com.facebook.login.LoginTargetApp.Companion;
				public static valueOf(param0: string): com.facebook.login.LoginTargetApp;
				public static values(): androidNative.Array<com.facebook.login.LoginTargetApp>;
				public static fromString(param0: string): com.facebook.login.LoginTargetApp;
				public toString(): string;
			}
			export module LoginTargetApp {
				export class Companion {
					public static class: java.lang.Class<com.facebook.login.LoginTargetApp.Companion>;
					public fromString(param0: string): com.facebook.login.LoginTargetApp;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class NativeAppLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.NativeAppLoginMethodHandler>;
				public handleResultCancel(param0: com.facebook.login.LoginClient.Request, param1: globalAndroid.content.Intent): void;
				public tryIntent(param0: globalAndroid.content.Intent, param1: number): boolean;
				public getErrorMessage(param0: globalAndroid.os.Bundle): string;
				public getTokenSource(): com.facebook.AccessTokenSource;
				public handleResultError(param0: com.facebook.login.LoginClient.Request, param1: string, param2: string, param3: string): void;
				public getError(param0: globalAndroid.os.Bundle): string;
				public handleResultOk(param0: com.facebook.login.LoginClient.Request, param1: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class NonceUtil {
				public static class: java.lang.Class<com.facebook.login.NonceUtil>;
				public static INSTANCE: com.facebook.login.NonceUtil;
				public static isValidNonce(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class StartActivityDelegate {
				public static class: java.lang.Class<com.facebook.login.StartActivityDelegate>;
				/**
				 * Constructs a new instance of the com.facebook.login.StartActivityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					getActivityContext(): globalAndroid.app.Activity;
				});
				public constructor();
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getActivityContext(): globalAndroid.app.Activity;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class WebLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.WebLoginMethodHandler>;
				public tokenSource: com.facebook.AccessTokenSource;
				public getParameters(param0: com.facebook.login.LoginClient.Request): globalAndroid.os.Bundle;
				public addExtraParameters(param0: globalAndroid.os.Bundle, param1: com.facebook.login.LoginClient.Request): globalAndroid.os.Bundle;
				public onComplete(param0: com.facebook.login.LoginClient.Request, param1: globalAndroid.os.Bundle, param2: com.facebook.FacebookException): void;
				public getRedirectUrl(): string;
				public getSSODevice(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class WebViewLoginMethodHandler extends com.facebook.login.WebLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.WebViewLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.WebViewLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
			export module WebViewLoginMethodHandler {
				export class AuthDialogBuilder extends com.facebook.internal.WebDialog.Builder {
					public static class: java.lang.Class<com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder>;
					public setLoginBehavior(param0: com.facebook.login.LoginBehavior): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public setAuthType(param0: string): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle);
					public setShouldSkipDedupe(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public setLoginTargetApp(param0: com.facebook.login.LoginTargetApp): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle);
					public setE2E(param0: string): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					/** @deprecated */
					public setIsRerequest(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public setIsChromeOS(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public setFamilyLogin(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public build(): com.facebook.internal.WebDialog;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class DeviceLoginButton extends com.facebook.login.widget.LoginButton {
					public static class: java.lang.Class<com.facebook.login.widget.DeviceLoginButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDeviceRedirectUri(): globalAndroid.net.Uri;
					public getNewLoginClickListener(): com.facebook.login.widget.LoginButton.LoginClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public setDeviceRedirectUri(param0: globalAndroid.net.Uri): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module DeviceLoginButton {
					export class DeviceLoginClickListener extends com.facebook.login.widget.LoginButton.LoginClickListener {
						public static class: java.lang.Class<com.facebook.login.widget.DeviceLoginButton.DeviceLoginClickListener>;
						public getLoginManager(): com.facebook.login.LoginManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class LoginButton extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.login.widget.LoginButton>;
					public setToolTipStyle(param0: com.facebook.login.widget.ToolTipPopup.Style): void;
					public setPermissions(param0: java.util.List<string>): void;
					/** @deprecated */
					public setPublishPermissions(param0: androidNative.Array<string>): void;
					public onAttachedToWindow(): void;
					public setLogoutText(param0: string): void;
					public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public clearPermissions(): void;
					public getLoginBehavior(): com.facebook.login.LoginBehavior;
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					public getMessengerPageId(): string;
					public setToolTipDisplayTime(param0: number): void;
					public getDefaultAudience(): com.facebook.login.DefaultAudience;
					public setPermissions(param0: androidNative.Array<string>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.login.LoginResult>): void;
					public getResetMessengerState(): boolean;
					/** @deprecated */
					public setPublishPermissions(param0: java.util.List<string>): void;
					public onDetachedFromWindow(): void;
					public setAuthType(param0: string): void;
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public getToolTipMode(): com.facebook.login.widget.LoginButton.ToolTipMode;
					public setResetMessengerState(param0: boolean): void;
					public getToolTipDisplayTime(): number;
					public dismissToolTip(): void;
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
					public setMessengerPageId(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setDefaultAudience(param0: com.facebook.login.DefaultAudience): void;
					public getAuthType(): string;
					public constructor(param0: globalAndroid.content.Context);
					/** @deprecated */
					public setReadPermissions(param0: androidNative.Array<string>): void;
					public getNewLoginClickListener(): com.facebook.login.widget.LoginButton.LoginClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setToolTipMode(param0: com.facebook.login.widget.LoginButton.ToolTipMode): void;
					public setLoginBehavior(param0: com.facebook.login.LoginBehavior): void;
					public setLoginText(param0: string): void;
					/** @deprecated */
					public setReadPermissions(param0: java.util.List<string>): void;
					public unregisterCallback(param0: com.facebook.CallbackManager): void;
				}
				export module LoginButton {
					export class LoginButtonProperties {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.LoginButtonProperties>;
						public clearPermissions(): void;
						public getMessengerPageId(): string;
						public setResetMessengerState(param0: boolean): void;
						public getResetMessengerState(): boolean;
						public setPermissions(param0: java.util.List<string>): void;
						public setLoginBehavior(param0: com.facebook.login.LoginBehavior): void;
						public getDefaultAudience(): com.facebook.login.DefaultAudience;
						public getAuthType(): string;
						public setMessengerPageId(param0: string): void;
						public setDefaultAudience(param0: com.facebook.login.DefaultAudience): void;
						public setAuthType(param0: string): void;
						public getLoginBehavior(): com.facebook.login.LoginBehavior;
					}
					export class LoginClickListener {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.LoginClickListener>;
						public constructor(param0: com.facebook.login.widget.LoginButton);
						public performLogin(): void;
						public performLogout(param0: globalAndroid.content.Context): void;
						public onClick(param0: globalAndroid.view.View): void;
						public getLoginManager(): com.facebook.login.LoginManager;
					}
					export class ToolTipMode {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.ToolTipMode>;
						public static AUTOMATIC: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static DISPLAY_ALWAYS: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static NEVER_DISPLAY: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static DEFAULT: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static values(): androidNative.Array<com.facebook.login.widget.LoginButton.ToolTipMode>;
						public static valueOf(param0: string): com.facebook.login.widget.LoginButton.ToolTipMode;
						public static fromInt(param0: number): com.facebook.login.widget.LoginButton.ToolTipMode;
						public toString(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class ProfilePictureView {
					public static class: java.lang.Class<com.facebook.login.widget.ProfilePictureView>;
					public static TAG: string;
					public static CUSTOM: number;
					public static SMALL: number;
					public static NORMAL: number;
					public static LARGE: number;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public getPresetSize(): number;
					public setProfileId(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getProfileId(): string;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnErrorListener(param0: com.facebook.login.widget.ProfilePictureView.OnErrorListener): void;
					public setCropped(param0: boolean): void;
					public getOnErrorListener(): com.facebook.login.widget.ProfilePictureView.OnErrorListener;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public setPresetSize(param0: number): void;
					public isCropped(): boolean;
					public setDefaultProfilePicture(param0: globalAndroid.graphics.Bitmap): void;
				}
				export module ProfilePictureView {
					export class OnErrorListener {
						public static class: java.lang.Class<com.facebook.login.widget.ProfilePictureView.OnErrorListener>;
						/**
						 * Constructs a new instance of the com.facebook.login.widget.ProfilePictureView$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.facebook.FacebookException): void;
						});
						public constructor();
						public onError(param0: com.facebook.FacebookException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class ToolTipPopup {
					public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup>;
					public static DEFAULT_POPUP_DISPLAY_TIME: number;
					public show(): void;
					public setStyle(param0: com.facebook.login.widget.ToolTipPopup.Style): void;
					public setNuxDisplayTime(param0: number): void;
					public constructor(param0: string, param1: globalAndroid.view.View);
					public dismiss(): void;
				}
				export module ToolTipPopup {
					export class PopupContentView {
						public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup.PopupContentView>;
						public showTopArrow(): void;
						public showBottomArrow(): void;
						public constructor(param0: com.facebook.login.widget.ToolTipPopup, param1: globalAndroid.content.Context);
					}
					export class Style {
						public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup.Style>;
						public static BLUE: com.facebook.login.widget.ToolTipPopup.Style;
						public static BLACK: com.facebook.login.widget.ToolTipPopup.Style;
						public static values(): androidNative.Array<com.facebook.login.widget.ToolTipPopup.Style>;
						public static valueOf(param0: string): com.facebook.login.widget.ToolTipPopup.Style;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ppml {
			export module receiver {
				export class IReceiverService {
					public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService>;
					/**
					 * Constructs a new instance of the com.facebook.ppml.receiver.IReceiverService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sendEvents(param0: globalAndroid.os.Bundle): number;
					});
					public constructor();
					public sendEvents(param0: globalAndroid.os.Bundle): number;
				}
				export module IReceiverService {
					export class Default extends com.facebook.ppml.receiver.IReceiverService {
						public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Default>;
						public constructor();
						public sendEvents(param0: globalAndroid.os.Bundle): number;
						public asBinder(): globalAndroid.os.IBinder;
					}
					export abstract class Stub implements com.facebook.ppml.receiver.IReceiverService {
						public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Stub>;
						public constructor();
						public sendEvents(param0: globalAndroid.os.Bundle): number;
						public static setDefaultImpl(param0: com.facebook.ppml.receiver.IReceiverService): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public static asInterface(param0: globalAndroid.os.IBinder): com.facebook.ppml.receiver.IReceiverService;
						public static getDefaultImpl(): com.facebook.ppml.receiver.IReceiverService;
					}
					export module Stub {
						export class Proxy extends com.facebook.ppml.receiver.IReceiverService {
							public static class: java.lang.Class<com.facebook.ppml.receiver.IReceiverService.Stub.Proxy>;
							public static sDefaultImpl: com.facebook.ppml.receiver.IReceiverService;
							public getInterfaceDescriptor(): string;
							public sendEvents(param0: globalAndroid.os.Bundle): number;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class ReferralClient {
				public static class: java.lang.Class<com.facebook.referrals.ReferralClient>;
				public expectedChallenge: string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class ReferralFragment {
				public static class: java.lang.Class<com.facebook.referrals.ReferralFragment>;
				public static TAG: string;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class ReferralLogger {
				public static class: java.lang.Class<com.facebook.referrals.ReferralLogger>;
				public logError(param0: java.lang.Exception): void;
				public logCancel(): void;
				public logSuccess(): void;
				public logStartReferral(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class ReferralManager {
				public static class: java.lang.Class<com.facebook.referrals.ReferralManager>;
				public startReferral(param0: com.facebook.internal.FragmentWrapper): void;
				public startReferral(param0: androidx.fragment.app.Fragment): void;
				public static getInstance(): com.facebook.referrals.ReferralManager;
				public startReferral(param0: globalAndroid.app.Fragment): void;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.referrals.ReferralResult>): void;
				public startReferral(param0: globalAndroid.app.Activity): void;
			}
			export module ReferralManager {
				export class ActivityStartActivityDelegate extends com.facebook.referrals.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.referrals.ReferralManager.ActivityStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class FragmentStartActivityDelegate extends com.facebook.referrals.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.referrals.ReferralManager.FragmentStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class ReferralResult {
				public static class: java.lang.Class<com.facebook.referrals.ReferralResult>;
				public getReferralCodes(): java.util.List<string>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: java.util.List<string>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module referrals {
			export class StartActivityDelegate {
				public static class: java.lang.Class<com.facebook.referrals.StartActivityDelegate>;
				/**
				 * Constructs a new instance of the com.facebook.referrals.StartActivityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					getActivityContext(): globalAndroid.app.Activity;
				});
				public constructor();
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getActivityContext(): globalAndroid.app.Activity;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class ShareBuilder<P, E>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.share.ShareBuilder<any,any>>;
				/**
				 * Constructs a new instance of the com.facebook.share.ShareBuilder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): P;
				});
				public constructor();
				public build(): P;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class Sharer {
				public static class: java.lang.Class<com.facebook.share.Sharer>;
				/**
				 * Constructs a new instance of the com.facebook.share.Sharer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getShouldFailOnDataError(): boolean;
					setShouldFailOnDataError(param0: boolean): void;
				});
				public constructor();
				public getShouldFailOnDataError(): boolean;
				public setShouldFailOnDataError(param0: boolean): void;
			}
			export module Sharer {
				export class Result {
					public static class: java.lang.Class<com.facebook.share.Sharer.Result>;
					public constructor(param0: string);
					public getPostId(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class CameraEffectFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.CameraEffectFeature>;
					public static SHARE_CAMERA_EFFECT: com.facebook.share.internal.CameraEffectFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.CameraEffectFeature;
					public static values(): androidNative.Array<com.facebook.share.internal.CameraEffectFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class CameraEffectJSONUtility {
					public static class: java.lang.Class<com.facebook.share.internal.CameraEffectJSONUtility>;
					public static convertToJSON(param0: com.facebook.share.model.CameraEffectArguments): org.json.JSONObject;
					public constructor();
					public static convertToCameraEffectArguments(param0: org.json.JSONObject): com.facebook.share.model.CameraEffectArguments;
				}
				export module CameraEffectJSONUtility {
					export class Setter {
						public static class: java.lang.Class<com.facebook.share.internal.CameraEffectJSONUtility.Setter>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.CameraEffectJSONUtility$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnArgumentsBuilder(param0: com.facebook.share.model.CameraEffectArguments.Builder, param1: string, param2: any): void;
							setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
						});
						public constructor();
						public setOnArgumentsBuilder(param0: com.facebook.share.model.CameraEffectArguments.Builder, param1: string, param2: any): void;
						public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class DeviceShareDialogFragment {
					public static class: java.lang.Class<com.facebook.share.internal.DeviceShareDialogFragment>;
					public static TAG: string;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
					public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
					public setShareContent(param0: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module DeviceShareDialogFragment {
					export class RequestState {
						public static class: java.lang.Class<com.facebook.share.internal.DeviceShareDialogFragment.RequestState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.DeviceShareDialogFragment.RequestState>;
						public constructor(param0: globalAndroid.os.Parcel);
						public setExpiresIn(param0: number): void;
						public describeContents(): number;
						public getUserCode(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setUserCode(param0: string): void;
						public getExpiresIn(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LegacyNativeDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.LegacyNativeDialogParameters>;
					public constructor();
					public static create(param0: java.util.UUID, param1: com.facebook.share.model.ShareContent<any,any>, param2: boolean): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeActionController {
					public static class: java.lang.Class<com.facebook.share.internal.LikeActionController>;
					public static ACTION_LIKE_ACTION_CONTROLLER_UPDATED: string;
					public static ACTION_LIKE_ACTION_CONTROLLER_DID_ERROR: string;
					public static ACTION_LIKE_ACTION_CONTROLLER_DID_RESET: string;
					public static ACTION_OBJECT_ID_KEY: string;
					public static ERROR_INVALID_OBJECT_ID: string;
					public static ERROR_PUBLISH_ERROR: string;
					/** @deprecated */
					public shouldEnableView(): boolean;
					/** @deprecated */
					public static getControllerForObjectId(param0: string, param1: com.facebook.share.widget.LikeView.ObjectType, param2: com.facebook.share.internal.LikeActionController.CreationCallback): void;
					/** @deprecated */
					public getSocialSentence(): string;
					/** @deprecated */
					public static handleOnActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					/** @deprecated */
					public getLikeCountString(): string;
					/** @deprecated */
					public getObjectId(): string;
					/** @deprecated */
					public toggleLike(param0: globalAndroid.app.Activity, param1: com.facebook.internal.FragmentWrapper, param2: globalAndroid.os.Bundle): void;
					/** @deprecated */
					public isObjectLiked(): boolean;
				}
				export module LikeActionController {
					export abstract class AbstractRequestWrapper extends com.facebook.share.internal.LikeActionController.RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.AbstractRequestWrapper>;
						public objectId: string;
						public objectType: com.facebook.share.widget.LikeView.ObjectType;
						public error: com.facebook.FacebookRequestError;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public constructor(param0: com.facebook.share.internal.LikeActionController, param1: string, param2: com.facebook.share.widget.LikeView.ObjectType);
						public setRequest(param0: com.facebook.GraphRequest): void;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class CreateLikeActionControllerWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.CreateLikeActionControllerWorkItem>;
						public run(): void;
					}
					export class CreationCallback {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.CreationCallback>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$CreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
						});
						public constructor();
						public onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
					}
					export class GetEngagementRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetEngagementRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetOGObjectIdRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetOGObjectIdRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetOGObjectLikesRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper implements com.facebook.share.internal.LikeActionController.LikeRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetOGObjectLikesRequestWrapper>;
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetPageIdRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetPageIdRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetPageLikesRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper implements com.facebook.share.internal.LikeActionController.LikeRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetPageLikesRequestWrapper>;
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class LikeRequestWrapper extends com.facebook.share.internal.LikeActionController.RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.LikeRequestWrapper>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$LikeRequestWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isObjectLiked(): boolean;
							getUnlikeToken(): string;
							getError(): com.facebook.FacebookRequestError;
							addToBatch(param0: com.facebook.GraphRequestBatch): void;
						});
						public constructor();
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
					}
					export class MRUCacheWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.MRUCacheWorkItem>;
						public run(): void;
					}
					export class PublishLikeRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.PublishLikeRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class PublishUnlikeRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.PublishUnlikeRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class RequestCompletionCallback {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.RequestCompletionCallback>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$RequestCompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(): void;
						});
						public constructor();
						public onComplete(): void;
					}
					export class RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.RequestWrapper>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$RequestWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getError(): com.facebook.FacebookRequestError;
							addToBatch(param0: com.facebook.GraphRequestBatch): void;
						});
						public constructor();
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
					}
					export class SerializeToDiskWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.SerializeToDiskWorkItem>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeBoxCountView {
					public static class: java.lang.Class<com.facebook.share.internal.LikeBoxCountView>;
					/** @deprecated */
					public setText(param0: string): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context);
					/** @deprecated */
					public setCaretPosition(param0: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition): void;
				}
				export module LikeBoxCountView {
					export class LikeBoxCountViewCaretPosition {
						public static class: java.lang.Class<com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition>;
						public static LEFT: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static TOP: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static RIGHT: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static BOTTOM: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static valueOf(param0: string): com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static values(): androidNative.Array<com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeButton extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.share.internal.LikeButton>;
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
					/** @deprecated */
					public setSelected(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.internal.LikeContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.LikeContent>;
					/** @deprecated */
					public getObjectType(): string;
					/** @deprecated */
					public getObjectId(): string;
					/** @deprecated */
					public describeContents(): number;
					/** @deprecated */
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module LikeContent {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.internal.LikeContent,com.facebook.share.internal.LikeContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.internal.LikeContent.Builder>;
						/** @deprecated */
						public setObjectType(param0: string): com.facebook.share.internal.LikeContent.Builder;
						public constructor();
						/** @deprecated */
						public setObjectId(param0: string): com.facebook.share.internal.LikeContent.Builder;
						public readFrom(param0: any): any;
						/** @deprecated */
						public readFrom(param0: com.facebook.share.internal.LikeContent): com.facebook.share.internal.LikeContent.Builder;
						/** @deprecated */
						public build(): com.facebook.share.internal.LikeContent;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.internal.LikeContent,com.facebook.share.internal.LikeDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.internal.LikeDialog>;
					/** @deprecated */
					public constructor(param0: globalAndroid.app.Activity);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					/** @deprecated */
					public constructor(param0: androidx.fragment.app.Fragment);
					/** @deprecated */
					public static canShowWebFallback(): boolean;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					/** @deprecated */
					public static canShowNativeDialog(): boolean;
					public show(param0: any): void;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.internal.LikeDialog.Result>): void;
					public canShow(param0: any): boolean;
					/** @deprecated */
					public show(param0: com.facebook.share.internal.LikeContent): void;
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					/** @deprecated */
					public constructor(param0: globalAndroid.app.Fragment);
					/** @deprecated */
					public constructor(param0: com.facebook.internal.FragmentWrapper);
				}
				export module LikeDialog {
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.NativeHandler>;
						public createAppCall(param0: com.facebook.share.internal.LikeContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.internal.LikeContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class Result {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.Result>;
						public constructor(param0: globalAndroid.os.Bundle);
						public getData(): globalAndroid.os.Bundle;
					}
					export class WebFallbackHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.WebFallbackHandler>;
						public createAppCall(param0: com.facebook.share.internal.LikeContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.internal.LikeContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.LikeDialogFeature>;
					public static LIKE_DIALOG: com.facebook.share.internal.LikeDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.LikeDialogFeature;
					public static values(): androidNative.Array<com.facebook.share.internal.LikeDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeStatusClient extends com.facebook.internal.PlatformServiceClient {
					public static class: java.lang.Class<com.facebook.share.internal.LikeStatusClient>;
					public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class MessengerShareContentUtility {
					public static class: java.lang.Class<com.facebook.share.internal.MessengerShareContentUtility>;
					public static FACEBOOK_DOMAIN: java.util.regex.Pattern;
					public static TITLE: string;
					public static SUBTITLE: string;
					public static URL: string;
					public static IMAGE_URL: string;
					public static BUTTONS: string;
					public static FALLBACK_URL: string;
					public static MESSENGER_EXTENSIONS: string;
					public static WEBVIEW_SHARE_BUTTON: string;
					public static SHARABLE: string;
					public static ATTACHMENT: string;
					public static ATTACHMENT_ID: string;
					public static ELEMENTS: string;
					public static DEFAULT_ACTION: string;
					public static SHARE_BUTTON_HIDE: string;
					public static BUTTON_TYPE: string;
					public static BUTTON_URL_TYPE: string;
					public static PREVIEW_DEFAULT: string;
					public static PREVIEW_OPEN_GRAPH: string;
					public static TEMPLATE_TYPE: string;
					public static TEMPLATE_GENERIC_TYPE: string;
					public static TEMPLATE_OPEN_GRAPH_TYPE: string;
					public static TEMPLATE_MEDIA_TYPE: string;
					public static ATTACHMENT_TYPE: string;
					public static ATTACHMENT_PAYLOAD: string;
					public static ATTACHMENT_TEMPLATE_TYPE: string;
					public static WEBVIEW_RATIO: string;
					public static WEBVIEW_RATIO_FULL: string;
					public static WEBVIEW_RATIO_TALL: string;
					public static WEBVIEW_RATIO_COMPACT: string;
					public static IMAGE_ASPECT_RATIO: string;
					public static IMAGE_RATIO_SQUARE: string;
					public static IMAGE_RATIO_HORIZONTAL: string;
					public static MEDIA_TYPE: string;
					public static MEDIA_VIDEO: string;
					public static MEDIA_IMAGE: string;
					public static addGenericTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
					public constructor();
					public static addMediaTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
					public static addOpenGraphMusicTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class NativeDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.NativeDialogParameters>;
					public constructor();
					public static create(param0: java.util.UUID, param1: com.facebook.share.model.ShareContent<any,any>, param2: boolean): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class OpenGraphActionDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.OpenGraphActionDialogFeature>;
					public static OG_ACTION_DIALOG: com.facebook.share.internal.OpenGraphActionDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.OpenGraphActionDialogFeature;
					public static values(): androidNative.Array<com.facebook.share.internal.OpenGraphActionDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class OpenGraphJSONUtility {
					public static class: java.lang.Class<com.facebook.share.internal.OpenGraphJSONUtility>;
					public static toJSONObject(param0: com.facebook.share.model.ShareOpenGraphAction, param1: com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor): org.json.JSONObject;
					public static toJSONValue(param0: any, param1: com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor): any;
				}
				export module OpenGraphJSONUtility {
					export class PhotoJSONProcessor {
						public static class: java.lang.Class<com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.OpenGraphJSONUtility$PhotoJSONProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toJSONObject(param0: com.facebook.share.model.SharePhoto): org.json.JSONObject;
						});
						public constructor();
						public toJSONObject(param0: com.facebook.share.model.SharePhoto): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export abstract class ResultProcessor {
					public static class: java.lang.Class<com.facebook.share.internal.ResultProcessor>;
					public onError(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
					public onSuccess(param0: com.facebook.internal.AppCall, param1: globalAndroid.os.Bundle): void;
					public onCancel(param0: com.facebook.internal.AppCall): void;
					public constructor(param0: com.facebook.FacebookCallback<any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareConstants {
					public static class: java.lang.Class<com.facebook.share.internal.ShareConstants>;
					public static WEB_DIALOG_PARAM_ACTION_TYPE: string;
					public static WEB_DIALOG_PARAM_DATA: string;
					public static WEB_DIALOG_PARAM_MESSAGE: string;
					public static WEB_DIALOG_PARAM_TO: string;
					public static WEB_DIALOG_PARAM_TITLE: string;
					public static WEB_DIALOG_PARAM_OBJECT_ID: string;
					public static WEB_DIALOG_PARAM_FILTERS: string;
					public static WEB_DIALOG_PARAM_SUGGESTIONS: string;
					public static WEB_DIALOG_PARAM_HREF: string;
					public static WEB_DIALOG_PARAM_ACTION_PROPERTIES: string;
					public static WEB_DIALOG_PARAM_QUOTE: string;
					public static WEB_DIALOG_PARAM_HASHTAG: string;
					public static WEB_DIALOG_PARAM_MEDIA: string;
					public static WEB_DIALOG_PARAM_LINK: string;
					public static WEB_DIALOG_PARAM_PICTURE: string;
					public static WEB_DIALOG_PARAM_NAME: string;
					public static WEB_DIALOG_PARAM_DESCRIPTION: string;
					public static WEB_DIALOG_PARAM_ID: string;
					public static WEB_DIALOG_PARAM_PRIVACY: string;
					public static WEB_DIALOG_RESULT_PARAM_POST_ID: string;
					public static WEB_DIALOG_RESULT_PARAM_REQUEST_ID: string;
					public static WEB_DIALOG_RESULT_PARAM_TO_ARRAY_MEMBER: string;
					public static LEGACY_PLACE_TAG: string;
					public static LEGACY_FRIEND_TAGS: string;
					public static LEGACY_LINK: string;
					public static LEGACY_IMAGE: string;
					public static LEGACY_TITLE: string;
					public static LEGACY_DESCRIPTION: string;
					public static LEGACY_REF: string;
					public static LEGACY_DATA_FAILURES_FATAL: string;
					public static LEGACY_PHOTOS: string;
					public static PLACE_ID: string;
					public static PEOPLE_IDS: string;
					public static PAGE_ID: string;
					public static CONTENT_URL: string;
					public static MESSENGER_URL: string;
					public static HASHTAG: string;
					public static IMAGE_URL: string;
					public static TITLE: string;
					public static SUBTITLE: string;
					public static ITEM_URL: string;
					public static BUTTON_TITLE: string;
					public static BUTTON_URL: string;
					public static PREVIEW_TYPE: string;
					public static TARGET_DISPLAY: string;
					public static ATTACHMENT_ID: string;
					public static OPEN_GRAPH_URL: string;
					public static DESCRIPTION: string;
					public static REF: string;
					public static DATA_FAILURES_FATAL: string;
					public static PHOTOS: string;
					public static VIDEO_URL: string;
					public static QUOTE: string;
					public static MEDIA: string;
					public static MESSENGER_PLATFORM_CONTENT: string;
					public static MEDIA_TYPE: string;
					public static MEDIA_URI: string;
					public static MEDIA_EXTENSION: string;
					public static EFFECT_ID: string;
					public static EFFECT_ARGS: string;
					public static EFFECT_TEXTURES: string;
					public static LEGACY_ACTION: string;
					public static LEGACY_ACTION_TYPE: string;
					public static LEGACY_PREVIEW_PROPERTY_NAME: string;
					public static ACTION: string;
					public static ACTION_TYPE: string;
					public static PREVIEW_PROPERTY_NAME: string;
					public static OBJECT_ID: string;
					public static OBJECT_TYPE: string;
					public static APPLINK_URL: string;
					public static PREVIEW_IMAGE_URL: string;
					public static PROMO_CODE: string;
					public static PROMO_TEXT: string;
					public static DEEPLINK_CONTEXT: string;
					public static DESTINATION: string;
					public static EXTRA_OBJECT_ID: string;
					public static EXTRA_OBJECT_IS_LIKED: string;
					public static EXTRA_LIKE_COUNT_STRING_WITH_LIKE: string;
					public static EXTRA_LIKE_COUNT_STRING_WITHOUT_LIKE: string;
					public static EXTRA_SOCIAL_SENTENCE_WITH_LIKE: string;
					public static EXTRA_SOCIAL_SENTENCE_WITHOUT_LIKE: string;
					public static EXTRA_UNLIKE_TOKEN: string;
					public static EXTRA_RESULT_POST_ID: string;
					public static RESULT_POST_ID: string;
					public static MAXIMUM_PHOTO_COUNT: number;
					public static MAXIMUM_MEDIA_COUNT: number;
					public static FEED_TO_PARAM: string;
					public static FEED_LINK_PARAM: string;
					public static FEED_PICTURE_PARAM: string;
					public static FEED_SOURCE_PARAM: string;
					public static FEED_NAME_PARAM: string;
					public static FEED_CAPTION_PARAM: string;
					public static FEED_DESCRIPTION_PARAM: string;
					public static STORY_INTERACTIVE_COLOR_LIST: string;
					public static STORY_DEEP_LINK_URL: string;
					public static STORY_BG_ASSET: string;
					public static STORY_INTERACTIVE_ASSET_URI: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareContentValidation {
					public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation>;
					public static validateMedium(param0: com.facebook.share.model.ShareMedia, param1: com.facebook.share.internal.ShareContentValidation.Validator): void;
					public static validateForMessage(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForNativeShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public constructor();
					public static validateForApiShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForStoryShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForWebShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module ShareContentValidation {
					export class ApiValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.ApiValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class StoryShareValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.StoryShareValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.Validator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public isOpenGraphContent(): boolean;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class WebShareValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.WebShareValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.ShareDialogFeature>;
					public static SHARE_DIALOG: com.facebook.share.internal.ShareDialogFeature;
					public static PHOTOS: com.facebook.share.internal.ShareDialogFeature;
					public static VIDEO: com.facebook.share.internal.ShareDialogFeature;
					public static MULTIMEDIA: com.facebook.share.internal.ShareDialogFeature;
					public static HASHTAG: com.facebook.share.internal.ShareDialogFeature;
					public static LINK_SHARE_QUOTES: com.facebook.share.internal.ShareDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.ShareDialogFeature;
					public static values(): androidNative.Array<com.facebook.share.internal.ShareDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareFeedContent extends com.facebook.share.model.ShareContent<com.facebook.share.internal.ShareFeedContent,com.facebook.share.internal.ShareFeedContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.internal.ShareFeedContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.ShareFeedContent>;
					public getPicture(): string;
					public getLinkName(): string;
					public describeContents(): number;
					public getLink(): string;
					public getLinkCaption(): string;
					public getLinkDescription(): string;
					public getToId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getMediaSource(): string;
				}
				export module ShareFeedContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.internal.ShareFeedContent,com.facebook.share.internal.ShareFeedContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.internal.ShareFeedContent.Builder>;
						public constructor();
						public setLinkCaption(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public readFrom(param0: any): any;
						public readFrom(param0: com.facebook.share.internal.ShareFeedContent): com.facebook.share.internal.ShareFeedContent.Builder;
						public setPicture(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public build(): com.facebook.share.internal.ShareFeedContent;
						public setToId(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLink(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLinkName(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setMediaSource(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLinkDescription(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareInternalUtility {
					public static class: java.lang.Class<com.facebook.share.internal.ShareInternalUtility>;
					public static MY_PHOTOS: string;
					public static getTextureUrlBundle(param0: com.facebook.share.model.ShareCameraEffectContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static registerStaticShareCallback(param0: number): void;
					public static invokeCallbackWithException(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: java.lang.Exception): void;
					public static getFieldNameAndNamespaceFromFullName(param0: string): globalAndroid.util.Pair<string,string>;
					public constructor();
					public static getPhotoUrls(param0: com.facebook.share.model.SharePhotoContent, param1: java.util.UUID): java.util.List<string>;
					public static getMediaInfos(param0: com.facebook.share.model.ShareMediaContent, param1: java.util.UUID): java.util.List<globalAndroid.os.Bundle>;
					public static getShareDialogPostId(param0: globalAndroid.os.Bundle): string;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: globalAndroid.graphics.Bitmap, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
					public static getStickerUrl(param0: com.facebook.share.model.ShareStoryContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static getNativeDialogCompletionGesture(param0: globalAndroid.os.Bundle): string;
					public static getBackgroundAssetMediaInfo(param0: com.facebook.share.model.ShareStoryContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static getUriExtension(param0: globalAndroid.net.Uri): string;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: globalAndroid.net.Uri, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
					public static getMostSpecificObjectType(param0: com.facebook.share.widget.LikeView.ObjectType, param1: com.facebook.share.widget.LikeView.ObjectType): com.facebook.share.widget.LikeView.ObjectType;
					public static toJSONObjectForWeb(param0: com.facebook.share.model.ShareOpenGraphContent): org.json.JSONObject;
					public static removeNamespacesFromOGJsonArray(param0: org.json.JSONArray, param1: boolean): org.json.JSONArray;
					public static handleActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: com.facebook.share.internal.ResultProcessor): boolean;
					public static registerSharerCallback(param0: number, param1: com.facebook.CallbackManager, param2: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public static getVideoUrl(param0: com.facebook.share.model.ShareVideoContent, param1: java.util.UUID): string;
					public static removeNamespacesFromOGJsonObject(param0: org.json.JSONObject, param1: boolean): org.json.JSONObject;
					public static invokeCallbackWithResults(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: string, param2: com.facebook.GraphResponse): void;
					public static toJSONObjectForCall(param0: java.util.UUID, param1: com.facebook.share.model.ShareOpenGraphContent): org.json.JSONObject;
					public static invokeCallbackWithError(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: string): void;
					public static getShareResultProcessor(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): com.facebook.share.internal.ResultProcessor;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: java.io.File, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareStoryFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.ShareStoryFeature>;
					public static SHARE_STORY_ASSET: com.facebook.share.internal.ShareStoryFeature;
					public getMinVersion(): number;
					public name(): string;
					public static values(): androidNative.Array<com.facebook.share.internal.ShareStoryFeature>;
					public static valueOf(param0: string): com.facebook.share.internal.ShareStoryFeature;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class WebDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.WebDialogParameters>;
					public static create(param0: com.facebook.share.model.ShareOpenGraphContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.GameRequestContent): globalAndroid.os.Bundle;
					public static createBaseParameters(param0: com.facebook.share.model.ShareContent<any,any>): globalAndroid.os.Bundle;
					public static createForFeed(param0: com.facebook.share.internal.ShareFeedContent): globalAndroid.os.Bundle;
					public constructor();
					public static create(param0: com.facebook.share.model.ShareLinkContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.SharePhotoContent): globalAndroid.os.Bundle;
					public static createForFeed(param0: com.facebook.share.model.ShareLinkContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.AppGroupCreationContent): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class AppGroupCreationContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.AppGroupCreationContent>;
					public getName(): string;
					public getAppGroupPrivacy(): com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
				}
				export module AppGroupCreationContent {
					export class AppGroupPrivacy {
						public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy>;
						public static Open: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
						public static Closed: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
						public static values(): androidNative.Array<com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy>;
						public static valueOf(param0: string): com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
					}
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.AppGroupCreationContent,com.facebook.share.model.AppGroupCreationContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent.Builder>;
						public constructor();
						public setDescription(param0: string): com.facebook.share.model.AppGroupCreationContent.Builder;
						public readFrom(param0: any): any;
						public setAppGroupPrivacy(param0: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy): com.facebook.share.model.AppGroupCreationContent.Builder;
						public build(): com.facebook.share.model.AppGroupCreationContent;
						public setName(param0: string): com.facebook.share.model.AppGroupCreationContent.Builder;
						public readFrom(param0: com.facebook.share.model.AppGroupCreationContent): com.facebook.share.model.AppGroupCreationContent.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class CameraEffectArguments extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.CameraEffectArguments>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.CameraEffectArguments>;
					public get(param0: string): any;
					public describeContents(): number;
					public getStringArray(param0: string): androidNative.Array<string>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getString(param0: string): string;
					public keySet(): java.util.Set<string>;
				}
				export module CameraEffectArguments {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.CameraEffectArguments,com.facebook.share.model.CameraEffectArguments.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.CameraEffectArguments.Builder>;
						public readFrom(param0: com.facebook.share.model.CameraEffectArguments): com.facebook.share.model.CameraEffectArguments.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public readFrom(param0: globalAndroid.os.Parcel): com.facebook.share.model.CameraEffectArguments.Builder;
						public putArgument(param0: string, param1: androidNative.Array<string>): com.facebook.share.model.CameraEffectArguments.Builder;
						public build(): com.facebook.share.model.CameraEffectArguments;
						public putArgument(param0: string, param1: string): com.facebook.share.model.CameraEffectArguments.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class CameraEffectTextures extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.CameraEffectTextures>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.CameraEffectTextures>;
					public getTextureBitmap(param0: string): globalAndroid.graphics.Bitmap;
					public get(param0: string): any;
					public describeContents(): number;
					public getTextureUri(param0: string): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public keySet(): java.util.Set<string>;
				}
				export module CameraEffectTextures {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.CameraEffectTextures,com.facebook.share.model.CameraEffectTextures.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.CameraEffectTextures.Builder>;
						public readFrom(param0: globalAndroid.os.Parcel): com.facebook.share.model.CameraEffectTextures.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public putTexture(param0: string, param1: globalAndroid.graphics.Bitmap): com.facebook.share.model.CameraEffectTextures.Builder;
						public readFrom(param0: com.facebook.share.model.CameraEffectTextures): com.facebook.share.model.CameraEffectTextures.Builder;
						public build(): com.facebook.share.model.CameraEffectTextures;
						public putTexture(param0: string, param1: globalAndroid.net.Uri): com.facebook.share.model.CameraEffectTextures.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class GameRequestContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.GameRequestContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.GameRequestContent>;
					public getTitle(): string;
					public getData(): string;
					/** @deprecated */
					public getTo(): string;
					public getActionType(): com.facebook.share.model.GameRequestContent.ActionType;
					public getRecipients(): java.util.List<string>;
					public describeContents(): number;
					public getMessage(): string;
					public getCta(): string;
					public getSuggestions(): java.util.List<string>;
					public getObjectId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getFilters(): com.facebook.share.model.GameRequestContent.Filters;
				}
				export module GameRequestContent {
					export class ActionType {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.ActionType>;
						public static SEND: com.facebook.share.model.GameRequestContent.ActionType;
						public static ASKFOR: com.facebook.share.model.GameRequestContent.ActionType;
						public static TURN: com.facebook.share.model.GameRequestContent.ActionType;
						public static INVITE: com.facebook.share.model.GameRequestContent.ActionType;
						public static valueOf(param0: string): com.facebook.share.model.GameRequestContent.ActionType;
						public static values(): androidNative.Array<com.facebook.share.model.GameRequestContent.ActionType>;
					}
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.GameRequestContent,com.facebook.share.model.GameRequestContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.Builder>;
						public setMessage(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public setRecipients(param0: java.util.List<string>): com.facebook.share.model.GameRequestContent.Builder;
						public constructor();
						public setTitle(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public readFrom(param0: any): any;
						public setData(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public build(): any;
						public setFilters(param0: com.facebook.share.model.GameRequestContent.Filters): com.facebook.share.model.GameRequestContent.Builder;
						public setCta(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						/** @deprecated */
						public setTo(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public setSuggestions(param0: java.util.List<string>): com.facebook.share.model.GameRequestContent.Builder;
						public build(): com.facebook.share.model.GameRequestContent;
						public setActionType(param0: com.facebook.share.model.GameRequestContent.ActionType): com.facebook.share.model.GameRequestContent.Builder;
						public readFrom(param0: com.facebook.share.model.GameRequestContent): com.facebook.share.model.GameRequestContent.Builder;
						public setObjectId(param0: string): com.facebook.share.model.GameRequestContent.Builder;
					}
					export class Filters {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.Filters>;
						public static APP_USERS: com.facebook.share.model.GameRequestContent.Filters;
						public static APP_NON_USERS: com.facebook.share.model.GameRequestContent.Filters;
						public static EVERYBODY: com.facebook.share.model.GameRequestContent.Filters;
						public static values(): androidNative.Array<com.facebook.share.model.GameRequestContent.Filters>;
						public static valueOf(param0: string): com.facebook.share.model.GameRequestContent.Filters;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareCameraEffectContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareCameraEffectContent,com.facebook.share.model.ShareCameraEffectContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareCameraEffectContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareCameraEffectContent>;
					public getArguments(): com.facebook.share.model.CameraEffectArguments;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getTextures(): com.facebook.share.model.CameraEffectTextures;
					public getEffectId(): string;
				}
				export module ShareCameraEffectContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareCameraEffectContent,com.facebook.share.model.ShareCameraEffectContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareCameraEffectContent.Builder>;
						public build(): com.facebook.share.model.ShareCameraEffectContent;
						public readFrom(param0: com.facebook.share.model.ShareCameraEffectContent): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setArguments(param0: com.facebook.share.model.CameraEffectArguments): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public setTextures(param0: com.facebook.share.model.CameraEffectTextures): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public setEffectId(param0: string): com.facebook.share.model.ShareCameraEffectContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareContent<P, E>  extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareContent<any,any>>;
					public getPlaceId(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: com.facebook.share.model.ShareContent.Builder<any,any>);
					public getRef(): string;
					public getContentUrl(): globalAndroid.net.Uri;
					public getPeopleIds(): java.util.List<string>;
					public describeContents(): number;
					public getPageId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getShareHashtag(): com.facebook.share.model.ShareHashtag;
				}
				export module ShareContent {
					export abstract class Builder<P, E>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareContent.Builder<any,any>>;
						public constructor();
						public readFrom(param0: any): any;
						public setPeopleIds(param0: java.util.List<string>): any;
						public setShareHashtag(param0: com.facebook.share.model.ShareHashtag): any;
						public setPageId(param0: string): any;
						public setContentUrl(param0: globalAndroid.net.Uri): any;
						public setPlaceId(param0: string): any;
						public setRef(param0: string): any;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareHashtag extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareHashtag>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareHashtag>;
					public describeContents(): number;
					public getHashtag(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareHashtag {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.ShareHashtag,com.facebook.share.model.ShareHashtag.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareHashtag.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public getHashtag(): string;
						public build(): com.facebook.share.model.ShareHashtag;
						public readFrom(param0: com.facebook.share.model.ShareHashtag): com.facebook.share.model.ShareHashtag.Builder;
						public setHashtag(param0: string): com.facebook.share.model.ShareHashtag.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareLinkContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareLinkContent,com.facebook.share.model.ShareLinkContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareLinkContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareLinkContent>;
					/** @deprecated */
					public getContentDescription(): string;
					/** @deprecated */
					public getContentTitle(): string;
					public getQuote(): string;
					public describeContents(): number;
					/** @deprecated */
					public getImageUrl(): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareLinkContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareLinkContent,com.facebook.share.model.ShareLinkContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareLinkContent.Builder>;
						public setQuote(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
						public constructor();
						/** @deprecated */
						public setContentDescription(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareLinkContent;
						/** @deprecated */
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareLinkContent.Builder;
						public readFrom(param0: com.facebook.share.model.ShareLinkContent): com.facebook.share.model.ShareLinkContent.Builder;
						/** @deprecated */
						public setContentTitle(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareMedia extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMedia>;
					/** @deprecated */
					public getParameters(): globalAndroid.os.Bundle;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: com.facebook.share.model.ShareMedia.Builder<any,any>);
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module ShareMedia {
					export abstract class Builder<M, B>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMedia.Builder<any,any>>;
						public constructor();
						/** @deprecated */
						public setParameter(param0: string, param1: string): any;
						/** @deprecated */
						public setParameters(param0: globalAndroid.os.Bundle): any;
						public readFrom(param0: any): any;
						public build(): any;
					}
					export class Type {
						public static class: java.lang.Class<com.facebook.share.model.ShareMedia.Type>;
						public static PHOTO: com.facebook.share.model.ShareMedia.Type;
						public static VIDEO: com.facebook.share.model.ShareMedia.Type;
						public static values(): androidNative.Array<com.facebook.share.model.ShareMedia.Type>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMedia.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMediaContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMediaContent,com.facebook.share.model.ShareMediaContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMediaContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMediaContent>;
					public getMedia(): java.util.List<com.facebook.share.model.ShareMedia>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareMediaContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMediaContent,com.facebook.share.model.ShareMediaContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMediaContent.Builder>;
						public addMedium(param0: com.facebook.share.model.ShareMedia): com.facebook.share.model.ShareMediaContent.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMediaContent): com.facebook.share.model.ShareMediaContent.Builder;
						public constructor();
						public build(): com.facebook.share.model.ShareMediaContent;
						public readFrom(param0: any): any;
						public setMedia(param0: java.util.List<com.facebook.share.model.ShareMedia>): com.facebook.share.model.ShareMediaContent.Builder;
						public addMedia(param0: java.util.List<com.facebook.share.model.ShareMedia>): com.facebook.share.model.ShareMediaContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareMessengerActionButton extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerActionButton>;
					public getTitle(): string;
					public constructor(param0: com.facebook.share.model.ShareMessengerActionButton.Builder<any,any>);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareMessengerActionButton {
					export abstract class Builder<M, B>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerActionButton.Builder<any,any>>;
						public constructor();
						public readFrom(param0: any): any;
						public setTitle(param0: string): any;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerGenericTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerGenericTemplateContent,com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerGenericTemplateContent>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: com.facebook.share.model.ShareContent.Builder<any,any>);
					public describeContents(): number;
					public constructor(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder);
					public getIsSharable(): boolean;
					public getGenericTemplateElement(): com.facebook.share.model.ShareMessengerGenericTemplateElement;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getImageAspectRatio(): com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
				}
				export module ShareMessengerGenericTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerGenericTemplateContent,com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder>;
						public setImageAspectRatio(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public constructor();
						public setGenericTemplateElement(param0: com.facebook.share.model.ShareMessengerGenericTemplateElement): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareMessengerGenericTemplateContent;
						public readFrom(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public setIsSharable(param0: boolean): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
					}
					export class ImageAspectRatio {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio>;
						public static HORIZONTAL: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
						public static SQUARE: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
						public static values(): androidNative.Array<com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerGenericTemplateElement extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateElement>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerGenericTemplateElement>;
					public getTitle(): string;
					public getImageUrl(): globalAndroid.net.Uri;
					public getSubtitle(): string;
					public getDefaultAction(): com.facebook.share.model.ShareMessengerActionButton;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerGenericTemplateElement {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.ShareMessengerGenericTemplateElement,com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder>;
						public setDefaultAction(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public build(): com.facebook.share.model.ShareMessengerGenericTemplateElement;
						public constructor();
						public setTitle(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public setSubtitle(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public readFrom(param0: any): any;
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMessengerGenericTemplateElement): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerMediaTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerMediaTemplateContent,com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerMediaTemplateContent>;
					public describeContents(): number;
					public getMediaType(): com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
					public getMediaUrl(): globalAndroid.net.Uri;
					public getAttachmentId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerMediaTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerMediaTemplateContent,com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder>;
						public setMediaUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public constructor();
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public readFrom(param0: any): any;
						public setAttachmentId(param0: string): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public build(): com.facebook.share.model.ShareMessengerMediaTemplateContent;
						public readFrom(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public setMediaType(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
					}
					export class MediaType {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType>;
						public static IMAGE: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
						public static VIDEO: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
						public static values(): androidNative.Array<com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerOpenGraphMusicTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent,com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent>;
					public describeContents(): number;
					public getUrl(): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerOpenGraphMusicTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent,com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder>;
						public constructor();
						public readFrom(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public readFrom(param0: any): any;
						public setUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public build(): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerURLActionButton extends com.facebook.share.model.ShareMessengerActionButton {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerURLActionButton>;
					public getWebviewHeightRatio(): com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
					public getIsMessengerExtensionURL(): boolean;
					public getUrl(): globalAndroid.net.Uri;
					public getShouldHideWebviewShareButton(): boolean;
					public getFallbackUrl(): globalAndroid.net.Uri;
				}
				export module ShareMessengerURLActionButton {
					export class Builder extends com.facebook.share.model.ShareMessengerActionButton.Builder<com.facebook.share.model.ShareMessengerURLActionButton,com.facebook.share.model.ShareMessengerURLActionButton.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton.Builder>;
						public setFallbackUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public constructor();
						public setWebviewHeightRatio(param0: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public build(): com.facebook.share.model.ShareMessengerURLActionButton;
						public readFrom(param0: any): any;
						public setUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public setIsMessengerExtensionURL(param0: boolean): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMessengerURLActionButton): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public setShouldHideWebviewShareButton(param0: boolean): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
					}
					export class WebviewHeightRatio {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio>;
						public static WebviewHeightRatioFull: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static WebviewHeightRatioTall: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static WebviewHeightRatioCompact: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static values(): androidNative.Array<com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareModel>;
					/**
					 * Constructs a new instance of the com.facebook.share.model.ShareModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareModelBuilder<P, E>  extends com.facebook.share.ShareBuilder<any,any> {
					public static class: java.lang.Class<com.facebook.share.model.ShareModelBuilder<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.share.model.ShareModelBuilder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						readFrom(param0: any): any;
						build(): any;
					});
					public constructor();
					public build(): any;
					public readFrom(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphAction extends com.facebook.share.model.ShareOpenGraphValueContainer<com.facebook.share.model.ShareOpenGraphAction,com.facebook.share.model.ShareOpenGraphAction.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphAction>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphAction>;
					public getActionType(): string;
				}
				export module ShareOpenGraphAction {
					export class Builder extends com.facebook.share.model.ShareOpenGraphValueContainer.Builder<com.facebook.share.model.ShareOpenGraphAction,com.facebook.share.model.ShareOpenGraphAction.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphAction.Builder>;
						public readFrom(param0: com.facebook.share.model.ShareOpenGraphAction): com.facebook.share.model.ShareOpenGraphAction.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareOpenGraphAction;
						public setActionType(param0: string): com.facebook.share.model.ShareOpenGraphAction.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareOpenGraphContent,com.facebook.share.model.ShareOpenGraphContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphContent>;
					public getAction(): com.facebook.share.model.ShareOpenGraphAction;
					public getPreviewPropertyName(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareOpenGraphContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareOpenGraphContent,com.facebook.share.model.ShareOpenGraphContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphContent.Builder>;
						public setAction(param0: com.facebook.share.model.ShareOpenGraphAction): com.facebook.share.model.ShareOpenGraphContent.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setPreviewPropertyName(param0: string): com.facebook.share.model.ShareOpenGraphContent.Builder;
						public build(): com.facebook.share.model.ShareOpenGraphContent;
						public readFrom(param0: com.facebook.share.model.ShareOpenGraphContent): com.facebook.share.model.ShareOpenGraphContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphObject extends com.facebook.share.model.ShareOpenGraphValueContainer<com.facebook.share.model.ShareOpenGraphObject,com.facebook.share.model.ShareOpenGraphObject.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphObject>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphObject>;
				}
				export module ShareOpenGraphObject {
					export class Builder extends com.facebook.share.model.ShareOpenGraphValueContainer.Builder<com.facebook.share.model.ShareOpenGraphObject,com.facebook.share.model.ShareOpenGraphObject.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphObject.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareOpenGraphObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareOpenGraphValueContainer<P, E>  extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphValueContainer<any,any>>;
					public get(param0: string): any;
					public getBooleanArray(param0: string): androidNative.Array<boolean>;
					public getDouble(param0: string, param1: number): number;
					public getObjectArrayList(param0: string): java.util.ArrayList<com.facebook.share.model.ShareOpenGraphObject>;
					public describeContents(): number;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getString(param0: string): string;
					public getPhotoArrayList(param0: string): java.util.ArrayList<com.facebook.share.model.SharePhoto>;
					public getLong(param0: string, param1: number): number;
					public getObject(param0: string): com.facebook.share.model.ShareOpenGraphObject;
					public getIntArray(param0: string): androidNative.Array<number>;
					public getPhoto(param0: string): com.facebook.share.model.SharePhoto;
					public getLongArray(param0: string): androidNative.Array<number>;
					public getDoubleArray(param0: string): androidNative.Array<number>;
					public getBundle(): globalAndroid.os.Bundle;
					public getStringArrayList(param0: string): java.util.ArrayList<string>;
					public constructor(param0: com.facebook.share.model.ShareOpenGraphValueContainer.Builder<any,any>);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public keySet(): java.util.Set<string>;
					public getInt(param0: string, param1: number): number;
				}
				export module ShareOpenGraphValueContainer {
					export abstract class Builder<P, E>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphValueContainer.Builder<any,any>>;
						public constructor();
						public putIntArray(param0: string, param1: androidNative.Array<number>): any;
						public putPhoto(param0: string, param1: com.facebook.share.model.SharePhoto): any;
						public readFrom(param0: any): any;
						public putDouble(param0: string, param1: number): any;
						public putInt(param0: string, param1: number): any;
						public putString(param0: string, param1: string): any;
						public putDoubleArray(param0: string, param1: androidNative.Array<number>): any;
						public putBoolean(param0: string, param1: boolean): any;
						public build(): any;
						public putObject(param0: string, param1: com.facebook.share.model.ShareOpenGraphObject): any;
						public putPhotoArrayList(param0: string, param1: java.util.ArrayList<com.facebook.share.model.SharePhoto>): any;
						public putLong(param0: string, param1: number): any;
						public putBooleanArray(param0: string, param1: androidNative.Array<boolean>): any;
						public putStringArrayList(param0: string, param1: java.util.ArrayList<string>): any;
						public putObjectArrayList(param0: string, param1: java.util.ArrayList<com.facebook.share.model.ShareOpenGraphObject>): any;
						public putLongArray(param0: string, param1: androidNative.Array<number>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class SharePhoto extends com.facebook.share.model.ShareMedia {
					public static class: java.lang.Class<com.facebook.share.model.SharePhoto>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.SharePhoto>;
					public getImageUrl(): globalAndroid.net.Uri;
					public getUserGenerated(): boolean;
					public describeContents(): number;
					public getCaption(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module SharePhoto {
					export class Builder extends com.facebook.share.model.ShareMedia.Builder<com.facebook.share.model.SharePhoto,com.facebook.share.model.SharePhoto.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.SharePhoto.Builder>;
						public setBitmap(param0: globalAndroid.graphics.Bitmap): com.facebook.share.model.SharePhoto.Builder;
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.SharePhoto.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setUserGenerated(param0: boolean): com.facebook.share.model.SharePhoto.Builder;
						public build(): com.facebook.share.model.SharePhoto;
						public setCaption(param0: string): com.facebook.share.model.SharePhoto.Builder;
						public readFrom(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.SharePhoto.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class SharePhotoContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.SharePhotoContent,com.facebook.share.model.SharePhotoContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.SharePhotoContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.SharePhotoContent>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhotos(): java.util.List<com.facebook.share.model.SharePhoto>;
				}
				export module SharePhotoContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.SharePhotoContent,com.facebook.share.model.SharePhotoContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.SharePhotoContent.Builder>;
						public constructor();
						public build(): com.facebook.share.model.SharePhotoContent;
						public readFrom(param0: any): any;
						public addPhoto(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.SharePhotoContent.Builder;
						public setPhotos(param0: java.util.List<com.facebook.share.model.SharePhoto>): com.facebook.share.model.SharePhotoContent.Builder;
						public addPhotos(param0: java.util.List<com.facebook.share.model.SharePhoto>): com.facebook.share.model.SharePhotoContent.Builder;
						public readFrom(param0: com.facebook.share.model.SharePhotoContent): com.facebook.share.model.SharePhotoContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareStoryContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareStoryContent,com.facebook.share.model.ShareStoryContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareStoryContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareStoryContent>;
					public getBackgroundAsset(): com.facebook.share.model.ShareMedia;
					public getStickerAsset(): com.facebook.share.model.SharePhoto;
					public getAttributionLink(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBackgroundColorList(): java.util.List<string>;
				}
				export module ShareStoryContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareStoryContent,com.facebook.share.model.ShareStoryContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareStoryContent.Builder>;
						public constructor();
						public build(): com.facebook.share.model.ShareStoryContent;
						public setAttributionLink(param0: string): com.facebook.share.model.ShareStoryContent.Builder;
						public readFrom(param0: any): any;
						public setBackgroundAsset(param0: com.facebook.share.model.ShareMedia): com.facebook.share.model.ShareStoryContent.Builder;
						public readFrom(param0: com.facebook.share.model.ShareStoryContent): com.facebook.share.model.ShareStoryContent.Builder;
						public setBackgroundColorList(param0: java.util.List<string>): com.facebook.share.model.ShareStoryContent.Builder;
						public setStickerAsset(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.ShareStoryContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareVideo extends com.facebook.share.model.ShareMedia {
					public static class: java.lang.Class<com.facebook.share.model.ShareVideo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareVideo>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getLocalUrl(): globalAndroid.net.Uri;
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module ShareVideo {
					export class Builder extends com.facebook.share.model.ShareMedia.Builder<com.facebook.share.model.ShareVideo,com.facebook.share.model.ShareVideo.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareVideo.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public setLocalUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareVideo.Builder;
						public readFrom(param0: com.facebook.share.model.ShareVideo): com.facebook.share.model.ShareVideo.Builder;
						public build(): com.facebook.share.model.ShareVideo;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareVideoContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareVideoContent,com.facebook.share.model.ShareVideoContent.Builder> implements com.facebook.share.model.ShareModel  {
					public static class: java.lang.Class<com.facebook.share.model.ShareVideoContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareVideoContent>;
					public describeContents(): number;
					public getVideo(): com.facebook.share.model.ShareVideo;
					public getPreviewPhoto(): com.facebook.share.model.SharePhoto;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getContentDescription(): string;
					public getContentTitle(): string;
				}
				export module ShareVideoContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareVideoContent,com.facebook.share.model.ShareVideoContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareVideoContent.Builder>;
						public readFrom(param0: com.facebook.share.model.ShareVideoContent): com.facebook.share.model.ShareVideoContent.Builder;
						public constructor();
						public setVideo(param0: com.facebook.share.model.ShareVideo): com.facebook.share.model.ShareVideoContent.Builder;
						public readFrom(param0: any): any;
						public setContentTitle(param0: string): com.facebook.share.model.ShareVideoContent.Builder;
						public build(): com.facebook.share.model.ShareVideoContent;
						public setContentDescription(param0: string): com.facebook.share.model.ShareVideoContent.Builder;
						public setPreviewPhoto(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.ShareVideoContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class LikeView {
					public static class: java.lang.Class<com.facebook.share.widget.LikeView>;
					public onDetachedFromWindow(): void;
					/** @deprecated */
					public setObjectIdAndType(param0: string, param1: com.facebook.share.widget.LikeView.ObjectType): void;
					/** @deprecated */
					public setLikeViewStyle(param0: com.facebook.share.widget.LikeView.Style): void;
					/** @deprecated */
					public getOnErrorListener(): com.facebook.share.widget.LikeView.OnErrorListener;
					/** @deprecated */
					public setFragment(param0: globalAndroid.app.Fragment): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public setForegroundColor(param0: number): void;
					/** @deprecated */
					public setHorizontalAlignment(param0: com.facebook.share.widget.LikeView.HorizontalAlignment): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context);
					/** @deprecated */
					public setAuxiliaryViewPosition(param0: com.facebook.share.widget.LikeView.AuxiliaryViewPosition): void;
					/** @deprecated */
					public setFragment(param0: androidx.fragment.app.Fragment): void;
					/** @deprecated */
					public setOnErrorListener(param0: com.facebook.share.widget.LikeView.OnErrorListener): void;
					/** @deprecated */
					public setEnabled(param0: boolean): void;
				}
				export module LikeView {
					export class AuxiliaryViewPosition {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.AuxiliaryViewPosition>;
						public static BOTTOM: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static INLINE: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static TOP: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static values(): androidNative.Array<com.facebook.share.widget.LikeView.AuxiliaryViewPosition>;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public toString(): string;
					}
					export class HorizontalAlignment {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.HorizontalAlignment>;
						public static CENTER: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static LEFT: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static RIGHT: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static values(): androidNative.Array<com.facebook.share.widget.LikeView.HorizontalAlignment>;
						public toString(): string;
					}
					export class LikeActionControllerCreationCallback extends com.facebook.share.internal.LikeActionController.CreationCallback {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.LikeActionControllerCreationCallback>;
						public onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
						public cancel(): void;
					}
					export class LikeControllerBroadcastReceiver {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.LikeControllerBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
					export class ObjectType {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.ObjectType>;
						public static UNKNOWN: com.facebook.share.widget.LikeView.ObjectType;
						public static OPEN_GRAPH: com.facebook.share.widget.LikeView.ObjectType;
						public static PAGE: com.facebook.share.widget.LikeView.ObjectType;
						public static DEFAULT: com.facebook.share.widget.LikeView.ObjectType;
						public static values(): androidNative.Array<com.facebook.share.widget.LikeView.ObjectType>;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.ObjectType;
						public static fromInt(param0: number): com.facebook.share.widget.LikeView.ObjectType;
						public toString(): string;
						public getValue(): number;
					}
					export class OnErrorListener {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.OnErrorListener>;
						/**
						 * Constructs a new instance of the com.facebook.share.widget.LikeView$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.facebook.FacebookException): void;
						});
						public constructor();
						public onError(param0: com.facebook.FacebookException): void;
					}
					export class Style {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.Style>;
						public static STANDARD: com.facebook.share.widget.LikeView.Style;
						public static BUTTON: com.facebook.share.widget.LikeView.Style;
						public static BOX_COUNT: com.facebook.share.widget.LikeView.Style;
						public static values(): androidNative.Array<com.facebook.share.widget.LikeView.Style>;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.Style;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class ShareDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result> implements com.facebook.share.Sharer  {
					public static class: java.lang.Class<com.facebook.share.widget.ShareDialog>;
					public static WEB_SHARE_DIALOG: string;
					public show(param0: com.facebook.share.model.ShareContent<any,any>, param1: com.facebook.share.widget.ShareDialog.Mode): void;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public static canShow(param0: java.lang.Class<any>): boolean;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: com.facebook.share.widget.ShareDialog.Mode): boolean;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public static show(param0: androidx.fragment.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public constructor(param0: androidx.fragment.app.Fragment);
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public setShouldFailOnDataError(param0: boolean): void;
					public show(param0: any): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public getShouldFailOnDataError(): boolean;
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module ShareDialog {
					export class CameraEffectHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.CameraEffectHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class FeedHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.FeedHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class Mode {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.Mode>;
						public static AUTOMATIC: com.facebook.share.widget.ShareDialog.Mode;
						public static NATIVE: com.facebook.share.widget.ShareDialog.Mode;
						public static WEB: com.facebook.share.widget.ShareDialog.Mode;
						public static FEED: com.facebook.share.widget.ShareDialog.Mode;
						public static valueOf(param0: string): com.facebook.share.widget.ShareDialog.Mode;
						public static values(): androidNative.Array<com.facebook.share.widget.ShareDialog.Mode>;
					}
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.NativeHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class ShareStoryHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.ShareStoryHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class WebShareHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.WebShareHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.facebook.FacebookCallback:1
//com.facebook.FacebookDialog:2
//com.facebook.GraphRequest.ParcelableResourceWithMimeType:1
//com.facebook.bolts.Continuation:2
//com.facebook.bolts.Task:1
//com.facebook.bolts.TaskCompletionSource:1
//com.facebook.internal.FacebookDialogBase:2
//com.facebook.internal.LockOnGetVariable:1
//com.facebook.internal.Utility.Mapper:2
//com.facebook.internal.Utility.Predicate:1
//com.facebook.share.ShareBuilder:2
//com.facebook.share.model.ShareContent:2
//com.facebook.share.model.ShareContent.Builder:2
//com.facebook.share.model.ShareMedia.Builder:2
//com.facebook.share.model.ShareMessengerActionButton.Builder:2
//com.facebook.share.model.ShareModelBuilder:2
//com.facebook.share.model.ShareOpenGraphValueContainer:2
//com.facebook.share.model.ShareOpenGraphValueContainer.Builder:2

