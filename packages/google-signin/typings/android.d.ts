declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class Auth {
							public static class: java.lang.Class<com.google.android.gms.auth.api.Auth>;
							public static PROXY_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.AuthProxyOptions>;
							public static CREDENTIALS_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions>;
							public static GOOGLE_SIGN_IN_API: com.google.android.gms.common.api.Api<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
							public static ProxyApi: com.google.android.gms.auth.api.proxy.ProxyApi;
							public static CredentialsApi: com.google.android.gms.auth.api.credentials.CredentialsApi;
							public static GoogleSignInApi: com.google.android.gms.auth.api.signin.GoogleSignInApi;
							public static zba: com.google.android.gms.common.api.Api.ClientKey;
							public static zbb: com.google.android.gms.common.api.Api.ClientKey;
						}
						export module Auth {
							export class AuthCredentialsOptions {
								public static class: java.lang.Class<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions>;
								public zbd(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public zba(): globalAndroid.os.Bundle;
								public constructor(param0: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder);
							}
							export module AuthCredentialsOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder>;
									public zbb: string;
									public constructor();
									public constructor(param0: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions);
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder;
									public zba(param0: string): com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class Credential {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credential>;
								public static EXTRA_KEY: string;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.Credential>;
								public getProfilePictureUri(): globalAndroid.net.Uri;
								public getAccountType(): string;
								public getGivenName(): string;
								public getName(): string;
								public getPassword(): string;
								public equals(param0: any): boolean;
								public getFamilyName(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
								public getId(): string;
								public getIdTokens(): java.util.List<com.google.android.gms.auth.api.credentials.IdToken>;
							}
							export module Credential {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credential.Builder>;
									public setProfilePictureUri(param0: globalAndroid.net.Uri): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public constructor(param0: string);
									public constructor(param0: com.google.android.gms.auth.api.credentials.Credential);
									public build(): com.google.android.gms.auth.api.credentials.Credential;
									public setName(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public setAccountType(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
									public setPassword(param0: string): com.google.android.gms.auth.api.credentials.Credential.Builder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialPickerConfig {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialPickerConfig>;
								/** @deprecated */
								public isForNewAccount(): boolean;
								public shouldShowAddAccountButton(): boolean;
								public shouldShowCancelButton(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export module CredentialPickerConfig {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder>;
									public constructor();
									public setShowAddAccountButton(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public setPrompt(param0: number): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
									/** @deprecated */
									public setForNewAccount(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
									public setShowCancelButton(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Builder;
								}
								export class Prompt {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialPickerConfig.Prompt>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialPickerConfig$Prompt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {});
									public constructor();
									public static SIGN_UP: number;
									public static CONTINUE: number;
									public static SIGN_IN: number;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialRequest>;
								public getServerClientId(): string;
								public isPasswordLoginSupported(): boolean;
								public getIdTokenNonce(): string;
								public getCredentialPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								public getCredentialHintPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								/** @deprecated */
								public getSupportsPasswordLogin(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public isIdTokenRequested(): boolean;
								public getAccountTypesSet(): java.util.Set<string>;
								public getAccountTypes(): androidNative.Array<string>;
							}
							export module CredentialRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequest.Builder>;
									public setIdTokenNonce(param0: string): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setIdTokenRequested(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									/** @deprecated */
									public setSupportsPasswordLogin(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setCredentialHintPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public constructor();
									public setAccountTypes(param0: androidNative.Array<string>): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setPasswordLoginSupported(param0: boolean): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialRequest;
									public setServerClientId(param0: string): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
									public setCredentialPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.CredentialRequest.Builder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequestResponse extends com.google.android.gms.common.api.Response<com.google.android.gms.auth.api.credentials.CredentialRequestResult> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequestResponse>;
								public getCredential(): com.google.android.gms.auth.api.credentials.Credential;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialRequestResult {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialRequestResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { getCredential(): com.google.android.gms.auth.api.credentials.Credential });
								public constructor();
								public getCredential(): com.google.android.gms.auth.api.credentials.Credential;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class Credentials {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.Credentials>;
								public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.credentials.CredentialsOptions): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.credentials.CredentialsClient;
								public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.credentials.CredentialsOptions): com.google.android.gms.auth.api.credentials.CredentialsClient;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.credentials.CredentialsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getHintPickerIntent(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
									delete(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									disableAutoSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									request(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
									save(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								});
								public constructor();
								public static ACTIVITY_RESULT_ADD_ACCOUNT: number;
								public static ACTIVITY_RESULT_OTHER_ACCOUNT: number;
								public static ACTIVITY_RESULT_NO_HINTS_AVAILABLE: number;
								public static CREDENTIAL_PICKER_REQUEST_CODE: number;
								public getHintPickerIntent(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
								public request(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
								public save(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public disableAutoSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public delete(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.Auth.AuthCredentialsOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsClient>;
								/** @deprecated */
								public delete(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public disableAutoSignIn(): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public request(param0: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.credentials.CredentialRequestResponse>;
								/** @deprecated */
								public getHintPickerIntent(param0: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
								/** @deprecated */
								public save(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class CredentialsOptions extends com.google.android.gms.auth.api.Auth.AuthCredentialsOptions {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsOptions>;
								public static DEFAULT: com.google.android.gms.auth.api.credentials.CredentialsOptions;
							}
							export module CredentialsOptions {
								export class Builder extends com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.CredentialsOptions.Builder>;
									public constructor();
									public constructor(param0: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions);
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.Auth.AuthCredentialsOptions.Builder;
									public forceEnableSaveDialog(): com.google.android.gms.auth.api.credentials.CredentialsOptions.Builder;
									public build(): com.google.android.gms.auth.api.credentials.CredentialsOptions;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class HintRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.HintRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.HintRequest>;
								public getServerClientId(): string;
								public getHintPickerConfig(): com.google.android.gms.auth.api.credentials.CredentialPickerConfig;
								public getIdTokenNonce(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public isIdTokenRequested(): boolean;
								public getAccountTypes(): androidNative.Array<string>;
								public isEmailAddressIdentifierSupported(): boolean;
							}
							export module HintRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.HintRequest.Builder>;
									public setPhoneNumberIdentifierSupported(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public constructor();
									public setHintPickerConfig(param0: com.google.android.gms.auth.api.credentials.CredentialPickerConfig): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setIdTokenNonce(param0: string): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setIdTokenRequested(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setServerClientId(param0: string): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setAccountTypes(param0: androidNative.Array<string>): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public setEmailAddressIdentifierSupported(param0: boolean): com.google.android.gms.auth.api.credentials.HintRequest.Builder;
									public build(): com.google.android.gms.auth.api.credentials.HintRequest;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class IdToken {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.IdToken>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.IdToken>;
								public getAccountType(): string;
								public constructor(param0: string, param1: string);
								public equals(param0: any): boolean;
								public getIdToken(): string;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class IdentityProviders {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.IdentityProviders>;
								public static FACEBOOK: string;
								public static GOOGLE: string;
								public static LINKEDIN: string;
								public static MICROSOFT: string;
								public static PAYPAL: string;
								public static TWITTER: string;
								public static YAHOO: string;
								public static getIdentityProviderForAccount(param0: globalAndroid.accounts.Account): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zba {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zba>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zbb {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zbb>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zbc {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zbc>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zbd {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zbd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zbe {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zbe>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module credentials {
							export class zbf {
								public static class: java.lang.Class<com.google.android.gms.auth.api.credentials.zbf>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class BeginSignInRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest>;
								public getPasskeysRequestOptions(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions;
								public getPasskeyJsonRequestOptions(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions;
								public static zba(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
								public getPasswordRequestOptions(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getGoogleIdTokenRequestOptions(): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions;
								public hashCode(): number;
								public isAutoSelectEnabled(): boolean;
								public static builder(): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
							}
							export module BeginSignInRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder>;
									public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest;
									public constructor();
									public setPasskeyJsonSignInRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public zba(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setAutoSelectEnabled(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									/** @deprecated */
									public setPasskeysSignInRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setGoogleIdTokenRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setPasswordRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public zbb(param0: number): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
								}
								export class GoogleIdTokenRequestOptions {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions>;
									public isSupported(): boolean;
									public hashCode(): number;
									public static builder(): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
									public getLinkedServiceId(): string;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
									public getServerClientId(): string;
									public getIdTokenDepositionScopes(): java.util.List<string>;
									public requestVerifiedPhoneNumber(): boolean;
									public filterByAuthorizedAccounts(): boolean;
									public getNonce(): string;
								}
								export module GoogleIdTokenRequestOptions {
									export class Builder {
										public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder>;
										public setServerClientId(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public setSupported(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public setNonce(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public setRequestVerifiedPhoneNumber(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public associateLinkedAccounts(param0: string, param1: java.util.List<string>): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions;
										public constructor();
										public setFilterByAuthorizedAccounts(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
									}
								}
								export class PasskeyJsonRequestOptions {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions>;
									public isSupported(): boolean;
									public hashCode(): number;
									public getRequestJson(): string;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
									public static builder(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions.Builder;
								}
								export module PasskeyJsonRequestOptions {
									export class Builder {
										public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions.Builder>;
										public setRequestJson(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions.Builder;
										public setSupported(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions.Builder;
										public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeyJsonRequestOptions;
										public constructor();
									}
								}
								export class PasskeysRequestOptions {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions>;
									public isSupported(): boolean;
									public hashCode(): number;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
									public getRpId(): string;
									public getChallenge(): androidNative.Array<number>;
									public static builder(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions.Builder;
								}
								export module PasskeysRequestOptions {
									export class Builder {
										public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions.Builder>;
										public constructor();
										public setRpId(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions.Builder;
										public setSupported(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions.Builder;
										public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions;
										public setChallenge(param0: androidNative.Array<number>): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasskeysRequestOptions.Builder;
									}
								}
								export class PasswordRequestOptions {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions>;
									public isSupported(): boolean;
									public hashCode(): number;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
									public static builder(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions.Builder;
								}
								export module PasswordRequestOptions {
									export class Builder {
										public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions.Builder>;
										public setSupported(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions.Builder;
										public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions;
										public constructor();
									}
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class BeginSignInResult {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInResult>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInResult>;
								public getPendingIntent(): globalAndroid.app.PendingIntent;
								public constructor(param0: globalAndroid.app.PendingIntent);
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class CredentialSavingClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.auth.api.identity.zbc> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.CredentialSavingClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.identity.CredentialSavingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { getStatusFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.common.api.Status; saveAccountLinkingToken(param0: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>; savePassword(param0: com.google.android.gms.auth.api.identity.SavePasswordRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SavePasswordResult> });
								public constructor();
								public getStatusFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.common.api.Status;
								public saveAccountLinkingToken(param0: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>;
								public savePassword(param0: com.google.android.gms.auth.api.identity.SavePasswordRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SavePasswordResult>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class GetPhoneNumberHintIntentRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest>;
								public equals(param0: any): boolean;
								public static builder(): com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest.Builder;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
							export module GetPhoneNumberHintIntentRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest.Builder>;
									public build(): com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class GetSignInIntentRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.GetSignInIntentRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.GetSignInIntentRequest>;
								public getServerClientId(): string;
								public static zba(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
								public getHostedDomainFilter(): string;
								public getNonce(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public requestVerifiedPhoneNumber(): boolean;
								public hashCode(): number;
								public static builder(): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
							}
							export module GetSignInIntentRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder>;
									public constructor();
									public build(): com.google.android.gms.auth.api.identity.GetSignInIntentRequest;
									public filterByHostedDomain(param0: string): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
									public setNonce(param0: string): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
									public setServerClientId(param0: string): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
									public zbb(param0: number): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
									public setRequestVerifiedPhoneNumber(param0: boolean): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
									public zba(param0: string): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class Identity {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.Identity>;
								public static getCredentialSavingClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.identity.CredentialSavingClient;
								public static getCredentialSavingClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.identity.CredentialSavingClient;
								public static getSignInClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.identity.SignInClient;
								public static getSignInClient(param0: globalAndroid.app.Activity): com.google.android.gms.auth.api.identity.SignInClient;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SaveAccountLinkingTokenRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest>;
								public static TOKEN_TYPE_AUTH_CODE: string;
								public static EXTRA_TOKEN: string;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest>;
								public static builder(): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
								public getTokenType(): string;
								public equals(param0: any): boolean;
								public getConsentPendingIntent(): globalAndroid.app.PendingIntent;
								public getServiceId(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zba(param0: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
								public hashCode(): number;
								public getScopes(): java.util.List<string>;
							}
							export module SaveAccountLinkingTokenRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder>;
									public setServiceId(param0: string): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
									public constructor();
									public zbb(param0: number): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
									public setTokenType(param0: string): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
									public build(): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest;
									public setConsentPendingIntent(param0: globalAndroid.app.PendingIntent): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
									public setScopes(param0: java.util.List<string>): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
									public zba(param0: string): com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest.Builder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SaveAccountLinkingTokenResult {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>;
								public getPendingIntent(): globalAndroid.app.PendingIntent;
								public hasResolution(): boolean;
								public equals(param0: any): boolean;
								public constructor(param0: globalAndroid.app.PendingIntent);
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SavePasswordRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SavePasswordRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SavePasswordRequest>;
								public equals(param0: any): boolean;
								public static builder(): com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zba(param0: com.google.android.gms.auth.api.identity.SavePasswordRequest): com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder;
								public hashCode(): number;
								public getSignInPassword(): com.google.android.gms.auth.api.identity.SignInPassword;
							}
							export module SavePasswordRequest {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder>;
									public zbb(param0: number): com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder;
									public constructor();
									public zba(param0: string): com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder;
									public setSignInPassword(param0: com.google.android.gms.auth.api.identity.SignInPassword): com.google.android.gms.auth.api.identity.SavePasswordRequest.Builder;
									public build(): com.google.android.gms.auth.api.identity.SavePasswordRequest;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SavePasswordResult {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SavePasswordResult>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SavePasswordResult>;
								public getPendingIntent(): globalAndroid.app.PendingIntent;
								public equals(param0: any): boolean;
								public constructor(param0: globalAndroid.app.PendingIntent);
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SignInClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.auth.api.identity.zbp> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SignInClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.identity.SignInClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSignInCredentialFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.identity.SignInCredential;
									beginSignIn(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.BeginSignInResult>;
									getPhoneNumberHintIntent(param0: com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
									getSignInIntent(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
									signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
									getPhoneNumberFromIntent(param0: globalAndroid.content.Intent): string;
								});
								public constructor();
								public getPhoneNumberHintIntent(param0: com.google.android.gms.auth.api.identity.GetPhoneNumberHintIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
								public getPhoneNumberFromIntent(param0: globalAndroid.content.Intent): string;
								public getSignInIntent(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
								public getSignInCredentialFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.identity.SignInCredential;
								public beginSignIn(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.BeginSignInResult>;
								public signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SignInCredential {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SignInCredential>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SignInCredential>;
								public getProfilePictureUri(): globalAndroid.net.Uri;
								public getGoogleIdToken(): string;
								public getPhoneNumber(): string;
								public getGivenName(): string;
								public getPassword(): string;
								public equals(param0: any): boolean;
								public getDisplayName(): string;
								public getFamilyName(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getPublicKeyCredential(): com.google.android.gms.fido.fido2.api.common.PublicKeyCredential;
								public hashCode(): number;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class SignInPassword {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SignInPassword>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SignInPassword>;
								public constructor(param0: string, param1: string);
								public getPassword(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zba {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zba>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbb {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbb>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbc {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbc>;
								public equals(param0: any): boolean;
								public constructor();
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbd {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbe {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbe>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbf {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbf>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbg {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbg>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbh {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbh>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbi>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbj {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbj>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbk {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbk>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbl {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbl>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbm {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbm>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbn {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbn>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbo {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbo>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbp {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbp>;
								public equals(param0: any): boolean;
								public constructor();
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module identity {
							export class zbq {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbq>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignIn {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignIn>;
								public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
								public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
								public static requestPermissions(param0: globalAndroid.app.Activity, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
								public static getAccountForScopes(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Scope, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static getSignedInAccountFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): boolean;
								public static getClient(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.google.android.gms.auth.api.signin.GoogleSignInClient;
								public static requestPermissions(param0: androidx.fragment.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
								public static getLastSignedInAccount(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static hasPermissions(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): boolean;
								public static getAccountForExtension(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static requestPermissions(param0: androidx.fragment.app.Fragment, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInApi {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInApi>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSignInIntent(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.content.Intent;
									getSignInResultFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
									silentSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
									revokeAccess(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									signOut(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								});
								public constructor();
								public static EXTRA_SIGN_IN_ACCOUNT: string;
								public getSignInIntent(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.content.Intent;
								public silentSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
								public getSignInResultFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
								public signOut(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public revokeAccess(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInClient>;
								public revokeAccess(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public silentSignIn(): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getSignInIntent(): globalAndroid.content.Intent;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInResult {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
								public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status);
								public getStatus(): com.google.android.gms.common.api.Status;
								public getSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public isSuccess(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInStatusCodes {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInStatusCodes>;
								public static SIGN_IN_FAILED: number;
								public static SIGN_IN_CANCELLED: number;
								public static SIGN_IN_CURRENTLY_IN_PROGRESS: number;
								public static getStatusCodeString(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class RevocationBoundService {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.RevocationBoundService>;
								public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class SignInAccount {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.SignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.SignInAccount>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zba(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class SignInConfiguration {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.SignInConfiguration>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.SignInConfiguration>;
									public hashCode(): number;
									public constructor(param0: string, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public equals(param0: any): boolean;
									public zba(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class SignInHubActivity {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.SignInHubActivity>;
									public constructor();
									public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
									public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
									public onCreate(param0: globalAndroid.os.Bundle): void;
									public onDestroy(): void;
									public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zba extends com.google.android.gms.auth.api.signin.internal.zbq {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zba>;
									public constructor();
									public constructor(param0: string);
									public zbb(param0: com.google.android.gms.common.api.Status): void;
									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
									public zbc(param0: com.google.android.gms.common.api.Status): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbb {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbb>;
									public constructor(param0: string);
									public static zba(param0: string): com.google.android.gms.common.api.PendingResult;
									public run(): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbc {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbc>;
									public onComplete(): void;
									public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<any>);
									public onStartLoading(): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbd extends com.google.android.gms.auth.api.signin.GoogleSignInApi {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbd>;
									public constructor();
									public getSignInIntent(param0: com.google.android.gms.common.api.GoogleApiClient): globalAndroid.content.Intent;
									public getSignInResultFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
									public revokeAccess(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									public signOut(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									public silentSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbe {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbe>;
									public getSignInIntent(): globalAndroid.content.Intent;
									public getStartServiceAction(): string;
									public providesSignIn(): boolean;
									public getMinApkVersion(): number;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptions, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
									public zba(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public getServiceDescriptor(): string;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbf extends com.google.android.gms.auth.api.signin.internal.zba {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbf>;
									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
									public zbb(param0: com.google.android.gms.common.api.Status): void;
									public zbc(param0: com.google.android.gms.common.api.Status): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbg extends com.google.android.gms.auth.api.signin.internal.zbl {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbg>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbh extends com.google.android.gms.auth.api.signin.internal.zba {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbh>;
									public zbb(param0: com.google.android.gms.common.api.Status): void;
									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
									public zbc(param0: com.google.android.gms.common.api.Status): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbi extends com.google.android.gms.auth.api.signin.internal.zbl {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbi>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbj extends com.google.android.gms.auth.api.signin.internal.zba {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbj>;
									public zbb(param0: com.google.android.gms.common.api.Status): void;
									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
									public zbc(param0: com.google.android.gms.common.api.Status): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbk extends com.google.android.gms.auth.api.signin.internal.zbl {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbk>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export abstract class zbl {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbl>;
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbm {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbm>;
									public static zbg(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: boolean): com.google.android.gms.common.api.PendingResult;
									public static zbc(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): globalAndroid.content.Intent;
									public static zbf(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: boolean): com.google.android.gms.common.api.PendingResult;
									public static zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): globalAndroid.content.Intent;
									public static zbe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: com.google.android.gms.auth.api.signin.GoogleSignInOptions, param3: boolean): com.google.android.gms.common.api.OptionalPendingResult;
									public static zbd(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
									public static zbb(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): globalAndroid.content.Intent;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbn {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbn>;
									public zbe(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
									public static zbc(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.zbn;
									public zbb(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public zbd(): void;
									public zba(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbp {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbp>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.signin.internal.zbp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { zbb(): void; zbc(): void });
									public constructor();
									public zbb(): void;
									public zbc(): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbr {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbr>;
									/**
									 * Constructs a new instance of the com.google.android.gms.auth.api.signin.internal.zbr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { zbb(param0: com.google.android.gms.common.api.Status): void; zbc(param0: com.google.android.gms.common.api.Status): void; zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void });
									public constructor();
									public zbb(param0: com.google.android.gms.common.api.Status): void;
									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
									public zbc(param0: com.google.android.gms.common.api.Status): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbt extends com.google.android.gms.auth.api.signin.internal.zbo {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbt>;
									public constructor();
									public constructor(param0: string);
									public constructor(param0: globalAndroid.content.Context);
									public zbb(): void;
									public zbc(): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbu {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbu>;
									public constructor();
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbv {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbv>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zbw {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbw>;
									public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): androidx.loader.content.Loader;
									public onLoaderReset(param0: androidx.loader.content.Loader): void;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zba {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zba>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zbb {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zbb>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zbc {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zbc>;
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
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class zba {
							public static class: java.lang.Class<com.google.android.gms.auth.api.zba>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class zbb {
							public static class: java.lang.Class<com.google.android.gms.auth.api.zbb>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
