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
							// public static zba: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.internal.auth-api.zbo>;
							// public static zbb: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.auth.api.signin.internal.zbe>;
						}
						export module Auth {
							export class AuthCredentialsOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
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
									public constructor(implementation: {
									});
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
								public constructor(implementation: {
									getCredential(): com.google.android.gms.auth.api.credentials.Credential;
								});
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
								public disableAutoSignIn(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public request(param0: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.credentials.CredentialRequestResponse>;
								public save(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
								public delete(param0: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.tasks.Task<java.lang.Void>;
								public getHintPickerIntent(param0: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
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
							export class zba extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.Credential> {
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
							export class zbb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialPickerConfig> {
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
							export class zbc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.CredentialRequest> {
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
							export class zbe extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.HintRequest> {
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
							export class zbf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.credentials.IdToken> {
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
									public zba(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setAutoSelectEnabled(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setGoogleIdTokenRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
									public setPasswordRequestOptions(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions): com.google.android.gms.auth.api.identity.BeginSignInRequest.Builder;
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
									public filterByAuthorizedAccounts(): boolean;
									public getNonce(): string;
								}
								export module GoogleIdTokenRequestOptions {
									export class Builder {
										public static class: java.lang.Class<com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder>;
										public setServerClientId(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public setSupported(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public setNonce(param0: string): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public associateLinkedAccounts(param0: string, param1: java.util.List<string>): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
										public build(): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions;
										public constructor();
										public setFilterByAuthorizedAccounts(param0: boolean): com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions.Builder;
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
								public constructor(implementation: {
									saveAccountLinkingToken(param0: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>;
									savePassword(param0: com.google.android.gms.auth.api.identity.SavePasswordRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SavePasswordResult>;
									getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								});
								public constructor();
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
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
							export class GetSignInIntentRequest {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.GetSignInIntentRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.GetSignInIntentRequest>;
								public getServerClientId(): string;
								public static zba(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.auth.api.identity.GetSignInIntentRequest.Builder;
								public getHostedDomainFilter(): string;
								public getNonce(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
							export class SignInClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.auth.api.identity.zbl> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.SignInClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.identity.SignInClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSignInCredentialFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.identity.SignInCredential;
									beginSignIn(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.BeginSignInResult>;
									getSignInIntent(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
									signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
									getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								});
								public constructor();
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
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
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: globalAndroid.net.Uri, param5: string, param6: string);
								public getGivenName(): string;
								public getPassword(): string;
								public equals(param0: any): boolean;
								public getDisplayName(): string;
								public getFamilyName(): string;
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
							export class zba extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest> {
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
							export class zbb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInResult> {
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
							export class zbc extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
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
							export class zbd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.GetSignInIntentRequest> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbd>;
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
							export class zbe extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.GoogleIdTokenRequestOptions> {
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
							export class zbf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.BeginSignInRequest.PasswordRequestOptions> {
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
							export class zbg extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest> {
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
							export class zbh extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult> {
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
							export class zbi extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SavePasswordRequest> {
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
							export class zbj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SavePasswordResult> {
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
							export class zbk extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SignInCredential> {
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
							export class zbl extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
								public static class: java.lang.Class<com.google.android.gms.auth.api.identity.zbl>;
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
							export class zbm extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.identity.SignInPassword> {
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
							export class GoogleSignInAccount {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public getAccount(): globalAndroid.accounts.Account;
								public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getGivenName(): string;
								public zaa(): string;
								public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public equals(param0: any): boolean;
								public getIdToken(): string;
								public getDisplayName(): string;
								public isExpired(): boolean;
								public zab(): string;
								public getFamilyName(): string;
								public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zaa(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public getId(): string;
								public hashCode(): number;
								public requestExtraScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public static fromAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
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
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
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
							export class GoogleSignInOptions implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static zab: com.google.android.gms.common.api.Scope;
								public static zac: com.google.android.gms.common.api.Scope;
								public static zad: com.google.android.gms.common.api.Scope;
								public static zae: com.google.android.gms.common.api.Scope;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public zaa(): string;
								public isForceCodeForRefreshToken(): boolean;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getLogSessionId(): string;
								public static zaa(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
								public isServerAuthCodeRequested(): boolean;
								public getScopeArray(): androidNative.Array<com.google.android.gms.common.api.Scope>;
								public isIdTokenRequested(): boolean;
								public hashCode(): number;
								public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
							}
							export module GoogleSignInOptions {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
									public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor();
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setLogSessionId(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
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
							export class GoogleSignInOptionsExtension {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExtensionType(): number;
									toBundle(): globalAndroid.os.Bundle;
									getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								});
								public constructor();
								public static FITNESS: number;
								public static GAMES: number;
								public toBundle(): globalAndroid.os.Bundle;
								public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
								public getExtensionType(): number;
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
								export class GoogleSignInOptionsExtensionParcelable {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getType(): number;
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
								export class HashAccumulator {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.HashAccumulator>;
									public constructor();
									public zaa(param0: boolean): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public addObject(param0: any): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
									public hash(): number;
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
								export class Storage {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
									public getSavedRefreshToken(): string;
									public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									public zaa(): void;
									public clear(): void;
									public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
									public saveDefaultGoogleSignInAccount(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
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
								export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zaa>;
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
									public static zba(param0: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									public constructor(param0: string);
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
								export class zbc extends androidx.loader.content.AsyncTaskLoader<java.lang.Void> implements com.google.android.gms.common.api.internal.SignInConnectionListener  {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbc>;
									public onComplete(): void;
									public onStartLoading(): void;
									public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<com.google.android.gms.common.api.GoogleApiClient>);
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
								export class zbe extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.auth.api.signin.internal.zbs> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbe>;
									public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
									public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									public getSignInIntent(): globalAndroid.content.Intent;
									/** @deprecated */
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
									public getConnectionHint(): globalAndroid.os.Bundle;
									public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
									public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
									public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
									public isConnecting(): boolean;
									public providesSignIn(): boolean;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.auth.api.signin.GoogleSignInOptions, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
									public zba(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public disconnect(): void;
									public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
									public getEndpointPackageName(): string;
									public getMinApkVersion(): number;
									public getServiceDescriptor(): string;
									public disconnect(param0: string): void;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
									public requiresSignIn(): boolean;
									public requiresAccount(): boolean;
									public requiresGooglePlayServices(): boolean;
									public getStartServiceAction(): string;
									public getServiceBrokerBinder(): globalAndroid.os.IBinder;
									public isConnected(): boolean;
									public getLastDisconnectMessage(): string;
									public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
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
								export class zbg extends com.google.android.gms.auth.api.signin.internal.zbl<com.google.android.gms.auth.api.signin.GoogleSignInResult> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbg>;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									public setResult(param0: any): void;
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
								export class zbi extends com.google.android.gms.auth.api.signin.internal.zbl<com.google.android.gms.common.api.Status> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbi>;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									public setResult(param0: any): void;
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
								export class zbk extends com.google.android.gms.auth.api.signin.internal.zbl<com.google.android.gms.common.api.Status> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbk>;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									public setResult(param0: any): void;
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
								export abstract class zbl<R>  extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.auth.api.signin.internal.zbe> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbl<any>>;
									public constructor();
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Looper);
									public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
									public setResult(param0: any): void;
									/** @deprecated */
									public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
									public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
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
									public static zbe(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: com.google.android.gms.auth.api.signin.GoogleSignInOptions, param3: boolean): com.google.android.gms.common.api.OptionalPendingResult<com.google.android.gms.auth.api.signin.GoogleSignInResult>;
									public static zbg(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
									public static zbc(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): globalAndroid.content.Intent;
									public static zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): globalAndroid.content.Intent;
									public static zbd(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.signin.GoogleSignInResult;
									public static zbf(param0: com.google.android.gms.common.api.GoogleApiClient, param1: globalAndroid.content.Context, param2: boolean): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
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

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module auth {
// 					export module api {
// 						export module signin {
// 							export module internal {
// 								export abstract class zbo extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.auth.api.signin.internal.zbp {
// 									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbo>;
// 									public constructor(param0: string);
// 									public constructor();
// 									public zbb(): void;
// 									public zbc(): void;
// 									public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

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
									public constructor(implementation: {
										zbb(): void;
										zbc(): void;
									});
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

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module auth {
// 					export module api {
// 						export module signin {
// 							export module internal {
// 								export abstract class zbq extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.auth.api.signin.internal.zbr {
// 									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbq>;
// 									public constructor(param0: string);
// 									public constructor();
// 									public zbb(param0: com.google.android.gms.common.api.Status): void;
// 									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
// 									public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 									public zbc(param0: com.google.android.gms.common.api.Status): void;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module auth {
// 					export module api {
// 						export module signin {
// 							export module internal {
// 								export class zbr {
// 									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbr>;
// 									/**
// 									 * Constructs a new instance of the com.google.android.gms.auth.api.signin.internal.zbr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 									 */
// 									public constructor(implementation: {
// 										zbb(param0: com.google.android.gms.common.api.Status): void;
// 										zbc(param0: com.google.android.gms.common.api.Status): void;
// 										zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
// 									});
// 									public constructor();
// 									public zbb(param0: com.google.android.gms.common.api.Status): void;
// 									public zbd(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.common.api.Status): void;
// 									public zbc(param0: com.google.android.gms.common.api.Status): void;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module auth {
// 					export module api {
// 						export module signin {
// 							export module internal {
// 								export class zbs extends com.google.android.gms.internal.auth-api.zba {
// 									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbs>;
// 									public zbd(param0: com.google.android.gms.auth.api.signin.internal.zbr, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
// 									public zbc(param0: com.google.android.gms.auth.api.signin.internal.zbr, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
// 									public zbe(param0: com.google.android.gms.auth.api.signin.internal.zbr, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

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
								export class zbu extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.SignInConfiguration> {
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
								export class zbw extends androidx.loader.app.LoaderManager.LoaderCallbacks<java.lang.Void> {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zbw>;
									public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): androidx.loader.content.Loader<java.lang.Void>;
									public onLoaderReset(param0: androidx.loader.content.Loader<java.lang.Void>): void;
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
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zaa>;
								public compare(param0: any, param1: any): number;
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
							export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zab>;
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
							export class zac extends java.util.Comparator<com.google.android.gms.common.api.Scope> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zac>;
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
							export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zad>;
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
							export class zbb extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<com.google.android.gms.auth.api.signin.GoogleSignInResult,com.google.android.gms.auth.api.signin.GoogleSignInAccount> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zbb>;
								public convert(param0: any): any;
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
							export class zbc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.SignInAccount> {
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

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module auth {
// 					export module api {
// 						export class zba extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.auth-api.zbo,com.google.android.gms.auth.api.Auth.AuthCredentialsOptions> {
// 							public static class: java.lang.Class<com.google.android.gms.auth.api.zba>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export class zbb extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.auth.api.signin.internal.zbe,com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
							public static class: java.lang.Class<com.google.android.gms.auth.api.zbb>;
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
				export module common {
					export class ErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						public constructor();
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.ErrorDialogFragment;
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
				export module common {
					export class GoogleApiAvailability {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult, param2: number): boolean;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public zaa(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.LifecycleFragment, param2: number, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
						public checkApiAvailability(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: androidNative.Array<com.google.android.gms.common.api.GoogleApi<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor();
						public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): globalAndroid.app.PendingIntent;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public checkApiAvailability(param0: com.google.android.gms.common.api.HasApiKey<any>, param1: androidNative.Array<com.google.android.gms.common.api.HasApiKey<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabm): com.google.android.gms.common.api.internal.zabk;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorString(param0: number): string;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number): globalAndroid.app.Dialog;
						public isUserResolvableError(param0: number): boolean;
					}
					export module GoogleApiAvailability {
						export class zaa extends com.google.android.gms.internal.base.zas {
							public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability.zaa>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailability, param1: globalAndroid.content.Context);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
							public handleMessage(param0: globalAndroid.os.Message): void;
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
				export module common {
					export class GooglePlayServicesUtil {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
						public static GMS_ERROR_DIALOG: string;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: androidx.fragment.app.Fragment, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
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
				export module common {
					export class SignInButton {
						public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
						public static SIZE_STANDARD: number;
						public static SIZE_WIDE: number;
						public static SIZE_ICON_ONLY: number;
						public static COLOR_DARK: number;
						public static COLOR_LIGHT: number;
						public static COLOR_AUTO: number;
						public setSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public setColorScheme(param0: number): void;
						/** @deprecated */
						public setScopes(param0: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setStyle(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setEnabled(param0: boolean): void;
						public onClick(param0: globalAndroid.view.View): void;
						/** @deprecated */
						public setStyle(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): void;
					}
					export module SignInButton {
						export class ButtonSize {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ColorScheme {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SupportErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
						public constructor();
						public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.SupportErrorDialogFragment;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
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
				export module common {
					export module api {
						export class Api<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
							public constructor(param0: string, param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>, param2: com.google.android.gms.common.api.Api.ClientKey<any>);
							public zac(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
							public zaa(): com.google.android.gms.common.api.Api.BaseClientBuilder<any,O>;
							public zab(): com.google.android.gms.common.api.Api.AbstractClientBuilder<any,O>;
							public zad(): string;
						}
						export module Api {
							export class AbstractClientBuilder<T, O>  extends com.google.android.gms.common.api.Api.BaseClientBuilder<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any,any>>;
								public constructor();
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener): any;
								/** @deprecated */
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): any;
							}
							export class AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class AnyClientKey<C>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
								public constructor();
							}
							export class ApiOptions {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									<clinit>(): void;
								});
								public constructor();
								public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
							}
							export module ApiOptions {
								export class HasAccountOptions implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getAccount(): globalAndroid.accounts.Account;
										<clinit>(): void;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getAccount(): globalAndroid.accounts.Account;
								}
								export class HasGoogleSignInAccountOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								}
								export class HasOptions extends com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
								export class NoOptions extends com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								}
								export class NotRequiredOptions extends com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
								export class Optional implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										<clinit>(): void;
										<clinit>(): void;
									});
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
							}
							export class BaseClientBuilder<T, O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any,any>>;
								public static API_PRIORITY_GAMES: number;
								public static API_PRIORITY_PLUS: number;
								public static API_PRIORITY_OTHER: number;
								public getImpliedScopes(param0: O): java.util.List<com.google.android.gms.common.api.Scope>;
								public getPriority(): number;
								public constructor();
							}
							export class Client extends com.google.android.gms.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.Client>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
									disconnect(param0: string): void;
									disconnect(): void;
									isConnected(): boolean;
									isConnecting(): boolean;
									getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									requiresSignIn(): boolean;
									onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
									requiresAccount(): boolean;
									requiresGooglePlayServices(): boolean;
									providesSignIn(): boolean;
									getSignInIntent(): globalAndroid.content.Intent;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									getServiceBrokerBinder(): globalAndroid.os.IBinder;
									getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
									getEndpointPackageName(): string;
									getMinApkVersion(): number;
									getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
									getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
									getLastDisconnectMessage(): string;
								});
								public constructor();
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getMinApkVersion(): number;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
							export class ClientKey<C>  extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ClientKey<any>>;
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
				export module common {
					export module api {
						export class AvailabilityException {
							public static class: java.lang.Class<com.google.android.gms.common.api.AvailabilityException>;
							public getMessage(): string;
							public constructor(param0: androidx.collection.ArrayMap<com.google.android.gms.common.api.internal.ApiKey<any>,com.google.android.gms.common.ConnectionResult>);
							public getConnectionResult(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.common.ConnectionResult;
							public getConnectionResult(param0: com.google.android.gms.common.api.HasApiKey<any>): com.google.android.gms.common.ConnectionResult;
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
				export module common {
					export module api {
						export class Batch extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.BatchResult> {
							public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
							public cancel(): void;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
						}
						export module Batch {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
								public build(): com.google.android.gms.common.api.Batch;
								public add(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.common.api.BatchResultToken<any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
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
				export module common {
					export module api {
						export class BatchResult {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
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
				export module common {
					export module api {
						export class BatchResultToken<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
							public mId: number;
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
				export module common {
					export module api {
						export class BooleanResult {
							public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
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
				export module common {
					export module api {
						export class DataBufferResponse<T, R>  extends com.google.android.gms.common.api.Response<any> implements com.google.android.gms.common.data.DataBuffer<any>  {
							public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any,any>>;
							public constructor();
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public isClosed(): boolean;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: any);
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
				export module common {
					export module api {
						export class GoogleApi<O>  extends com.google.android.gms.common.api.HasApiKey<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegistrationMethods<any,any>): com.google.android.gms.tasks.Task;
							public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public getContextFeatureId(): string;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public getLooper(): globalAndroid.os.Looper;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
							/** @deprecated */
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>): com.google.android.gms.tasks.Task;
							public getApiOptions(): any;
							public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApplicationContext(): globalAndroid.content.Context;
							public getContextAttributionTag(): string;
							public zaa(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): com.google.android.gms.common.api.Api.Client;
							public doWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any,any>): com.google.android.gms.tasks.Task;
							public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: number): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public zaa(): number;
							public doRead(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
						}
						export module GoogleApi {
							export class Settings {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings>;
								public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
								public zaa: com.google.android.gms.common.api.internal.StatusExceptionMapper;
								public zab: globalAndroid.os.Looper;
							}
							export module Settings {
								export class Builder {
									public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings.Builder>;
									public constructor();
									public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
									public build(): com.google.android.gms.common.api.GoogleApi.Settings;
									public setMapper(param0: com.google.android.gms.common.api.internal.StatusExceptionMapper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
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
				export module common {
					export module api {
						export class GoogleApiActivity {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
							public constructor();
							public onCancel(param0: globalAndroid.content.DialogInterface): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent, param2: number): globalAndroid.app.PendingIntent;
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent, param2: number, param3: boolean): globalAndroid.content.Intent;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
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
				export module common {
					export module api {
						export abstract class GoogleApiClient {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
							public static DEFAULT_ACCOUNT: string;
							public static SIGN_IN_MODE_REQUIRED: number;
							public static SIGN_IN_MODE_OPTIONAL: number;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public zab(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
							public connect(): void;
							public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public maybeSignOut(): void;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
							public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public zaa(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public reconnect(): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public isConnecting(): boolean;
							public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
							public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
							public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
							public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public connect(param0: number): void;
						}
						export module GoogleApiClient {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
								public build(): com.google.android.gms.common.api.GoogleApiClient;
								public enableAutoManage(param0: androidx.fragment.app.FragmentActivity, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public buildClientSettings(): com.google.android.gms.common.internal.ClientSettings;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScopeNames(param0: androidNative.Array<string>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public enableAutoManage(param0: androidx.fragment.app.FragmentActivity, param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks extends com.google.android.gms.common.api.internal.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class OnConnectionFailedListener extends com.google.android.gms.common.api.internal.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
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
				export module common {
					export module api {
						export class HasApiKey<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.HasApiKey<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.HasApiKey<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<O>;
							});
							public constructor();
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<O>;
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
				export module common {
					export module api {
						export abstract class OptionalPendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public constructor();
							public get(): any;
							public isDone(): boolean;
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
				export module common {
					export module api {
						export abstract class PendingResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						}
						export module PendingResult {
							export class StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module api {
						export class PendingResults {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
							public static immediateFailedResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
						export module PendingResults {
							export class zaa<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zaa<any>>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zab<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zab<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zac<R>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zac<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: any);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
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
				export module common {
					export module api {
						export abstract class ResultTransform<R, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any,any>>;
							public constructor();
							public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
							public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
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
				export module common {
					export module api {
						export abstract class TransformedResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ActivityLifecycleObserver>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public static of(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
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
				export module common {
					export module api {
						export module internal {
							export class ApiExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiExceptionMapper>;
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
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
				export module common {
					export module api {
						export module internal {
							export class ApiKey<O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiKey<any>>;
								public zaa(): string;
								public equals(param0: any): boolean;
								public static zaa(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions, param2: string): com.google.android.gms.common.api.internal.ApiKey<any>;
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
				export module common {
					export module api {
						export module internal {
							export class BaseImplementation {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation>;
								public constructor();
							}
							export module BaseImplementation {
								export abstract class ApiMethodImpl<R, A>  extends com.google.android.gms.common.api.internal.BasePendingResult<any> implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>  {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>>;
									public constructor();
									public getApi(): com.google.android.gms.common.api.Api<any>;
									/** @deprecated */
									public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
									public run(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									/** @deprecated */
									public constructor(param0: globalAndroid.os.Looper);
									public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
									public onSetFailedResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
									public doExecute(param0: any): void;
									public setResult(param0: any): void;
									public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								}
								export class ResultHolder<R>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										setResult(param0: R): void;
										setFailedResult(param0: com.google.android.gms.common.api.Status): void;
									});
									public constructor();
									public setResult(param0: R): void;
									public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class BasePendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
								public zaa(): boolean;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zacq): void;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public zab(): void;
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public await(): any;
								public static zaa(param0: com.google.android.gms.common.api.Result): void;
								public isCanceled(): boolean;
								public isReady(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								/** @deprecated */
								public forceFailureUnlessReady(param0: com.google.android.gms.common.api.Status): void;
							}
							export module BasePendingResult {
								export class CallbackHandler<R>  extends com.google.android.gms.internal.base.zas {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
									public constructor();
									public zaa(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: any): void;
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
								}
								export class zaa {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.zaa>;
									public finalize(): void;
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
				export module common {
					export module api {
						export module internal {
							export class ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class DataHolderNotifier<L>  extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
								public notifyListener(param0: any): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
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
				export module common {
					export module api {
						export module internal {
							export class DataHolderResult {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
								public mStatus: com.google.android.gms.common.api.Status;
								public mDataHolder: com.google.android.gms.common.data.DataHolder;
								public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
								public getStatus(): com.google.android.gms.common.api.Status;
								public release(): void;
								public constructor(param0: com.google.android.gms.common.data.DataHolder);
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
				export module common {
					export module api {
						export module internal {
							export class GoogleApiManager {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager>;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zab(): number;
								public zac(): void;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param2: number): com.google.android.gms.tasks.Task;
								public zaa(param0: java.lang.Iterable<any>): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.ApiKey<any>,string>>;
								public zab(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public static zaa(): com.google.android.gms.common.api.internal.GoogleApiManager;
								public static reportSignOut(): void;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>, param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>, param3: java.lang.Runnable): com.google.android.gms.tasks.Task;
								public zaa(param0: com.google.android.gms.common.api.internal.zay): void;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>): void;
								public static zaa(param0: globalAndroid.content.Context): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): void;
								public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.TaskApiCall<any,any>, param3: com.google.android.gms.tasks.TaskCompletionSource, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper): void;
							}
							export module GoogleApiManager {
								export class zaa<O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>>;
									public zai(): void;
									public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									public zab(): com.google.android.gms.common.api.Api.Client;
									public zah(): boolean;
									public zaa(param0: com.google.android.gms.common.api.internal.zab): void;
									public zad(): void;
									public zal(): number;
									public onConnected(param0: globalAndroid.os.Bundle): void;
									public zag(): void;
									public constructor(param0: com.google.android.gms.common.api.GoogleApi<O>);
									public onConnectionSuspended(param0: number): void;
									public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
									public zaa(): void;
									public zaa(param0: com.google.android.gms.common.api.internal.zaj): void;
									public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
									public zae(): com.google.android.gms.common.ConnectionResult;
									public zak(): boolean;
									public zaf(): void;
									public zac(): java.util.Map<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,com.google.android.gms.common.api.internal.zabv>;
								}
								export class zab {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zab>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
								}
								export class zac extends com.google.android.gms.common.api.internal.zach {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zac>;
									public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
									public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
									public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									public constructor(param0: com.google.android.gms.common.api.Api.Client, param1: com.google.android.gms.common.api.internal.ApiKey<any>);
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
				export module common {
					export module api {
						export module internal {
							export class IStatusCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResult(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
							export module IStatusCallback {
								export abstract class Stub extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.api.internal.IStatusCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
									public constructor(param0: string);
									public constructor();
									public onResult(param0: com.google.android.gms.common.api.Status): void;
									public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
								}
								export module Stub {
									export class zaa extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.api.internal.IStatusCallback {
										public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub.zaa>;
										public onResult(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module api {
						export module internal {
							export class ListenerHolder<L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clear(): void;
								public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
								public hasListener(): boolean;
							}
							export module ListenerHolder {
								export class ListenerKey<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
									public hashCode(): number;
									public equals(param0: any): boolean;
								}
								export class Notifier<L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										notifyListener(param0: L): void;
										onNotifyListenerFailed(): void;
									});
									public constructor();
									public notifyListener(param0: L): void;
									public onNotifyListenerFailed(): void;
								}
								export class zaa extends com.google.android.gms.internal.base.zas {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.zaa>;
									public constructor();
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
									public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>, param1: globalAndroid.os.Looper);
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
				export module common {
					export module api {
						export module internal {
							export class ListenerHolders {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolders>;
								public zaa(): void;
								public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
								public constructor();
								public static createListenerHolder(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public zaa(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
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
				export module common {
					export module api {
						export module internal {
							export class NonGmsServiceBrokerClient extends com.google.android.gms.common.api.Api.Client {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.NonGmsServiceBrokerClient>;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: string, param3: string, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public getBinder(): globalAndroid.os.IBinder;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: globalAndroid.content.ComponentName, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public getMinApkVersion(): number;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public zaa(param0: string): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
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
				export module common {
					export module api {
						export module internal {
							export class OptionalPendingResultImpl<R>  extends com.google.android.gms.common.api.OptionalPendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public get(): any;
								public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public constructor();
								public isDone(): boolean;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
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
				export module common {
					export module api {
						export module internal {
							export abstract class PendingResultFacade<A, B>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any,any>>;
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
				export module common {
					export module api {
						export module internal {
							export abstract class RegisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any>>;
								public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clearListener(): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(): boolean;
								public zab(): number;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean, param3: number);
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
				export module common {
					export module api {
						export module internal {
							export class RegistrationMethods<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any,any>>;
								public register: com.google.android.gms.common.api.internal.RegisterListenerMethod<A,L>;
								public zaa: com.google.android.gms.common.api.internal.UnregisterListenerMethod<A,L>;
								public zab: java.lang.Runnable;
								public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>;
							}
							export module RegistrationMethods {
								export class Builder<A, L>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any,any>>;
									public onConnectionSuspended(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public withHolder(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public register(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public unregister(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public register(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A,L>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
									/** @deprecated */
									public unregister(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A,L>;
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
				export module common {
					export module api {
						export module internal {
							export class RemoteCall<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T, param1: U): void;
								});
								public constructor();
								public accept(param0: T, param1: U): void;
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
				export module common {
					export module api {
						export module internal {
							export class SignInConnectionListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.SignInConnectionListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(): void;
								});
								public constructor();
								public onComplete(): void;
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
				export module common {
					export module api {
						export module internal {
							export class StatusCallback extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusCallback>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
								public constructor(param0: string);
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
				export module common {
					export module api {
						export module internal {
							export class StatusPendingResult extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusPendingResult>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
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
				export module common {
					export module api {
						export module internal {
							export abstract class TaskApiCall<A, ResultT>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any,any>>;
								/** @deprecated */
								public constructor();
								public zaa(): androidNative.Array<com.google.android.gms.common.Feature>;
								public zab(): number;
								public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
								public constructor(param0: androidNative.Array<com.google.android.gms.common.Feature>, param1: boolean, param2: number);
								public shouldAutoResolveMissingFeatures(): boolean;
								public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>;
							}
							export module TaskApiCall {
								export class Builder<A, ResultT>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any,any>>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public build(): com.google.android.gms.common.api.internal.TaskApiCall<A,ResultT>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public run(param0: com.google.android.gms.common.api.internal.RemoteCall<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
									/** @deprecated */
									public execute(param0: com.google.android.gms.common.util.BiConsumer<A,com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A,ResultT>;
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
				export module common {
					export module api {
						export module internal {
							export class TaskUtil {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskUtil>;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource): void;
								public static setResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public constructor();
								/** @deprecated */
								public static toVoidTaskThatFailsOnFalse(param0: com.google.android.gms.tasks.Task<java.lang.Boolean>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public static trySetResultOrApiException(param0: com.google.android.gms.common.api.Status, param1: any, param2: com.google.android.gms.tasks.TaskCompletionSource): boolean;
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
				export module common {
					export module api {
						export module internal {
							export abstract class UnregisterListenerMethod<A, L>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public unregisterListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>);
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
				export module common {
					export module api {
						export module internal {
							export class zaa extends com.google.android.gms.common.api.internal.ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
								public constructor(param0: globalAndroid.app.Activity);
								public constructor();
							}
							export module zaa {
								export class zaa {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa.zaa>;
									public onStop(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaaa extends com.google.android.gms.common.api.internal.zaaw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaz);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zaa(): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaab extends com.google.android.gms.common.api.GoogleApiClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public connect(param0: number): void;
								public connect(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public constructor(param0: string);
								public disconnect(): void;
								public isConnecting(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaac extends com.google.android.gms.common.api.internal.zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaad extends com.google.android.gms.common.api.internal.zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaae {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaaf extends com.google.android.gms.common.api.internal.zaaw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaz, param1: com.google.android.gms.common.internal.ClientSettings, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zaa(): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaag extends com.google.android.gms.common.api.internal.zaap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
								public zaa(): void;
								public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.Client,com.google.android.gms.common.api.internal.zaah>);
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
				export module common {
					export module api {
						export module internal {
							export class zaah {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaf, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaai extends com.google.android.gms.common.api.internal.zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaaj extends com.google.android.gms.common.api.internal.zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaak extends com.google.android.gms.signin.internal.zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: com.google.android.gms.signin.internal.zai): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
								public zaa(param0: com.google.android.gms.signin.internal.zak): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaal extends com.google.android.gms.common.api.internal.zaap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
								public constructor(param0: java.util.ArrayList<com.google.android.gms.common.api.Api.Client>);
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaam implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaan extends com.google.android.gms.common.api.internal.zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaao extends com.google.android.gms.common.api.internal.zaaw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaz);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zaa(): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zaap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
								public zaa(): void;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaaq extends com.google.android.gms.common.internal.zak {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public isConnected(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaar extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
								public zaa(param0: number, param1: boolean): void;
								public zab(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
								public getContext(): globalAndroid.content.Context;
								public connect(param0: number): void;
								public connect(): void;
								public static zaa(param0: java.lang.Iterable<com.google.android.gms.common.api.Api.Client>, param1: boolean): number;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.GoogleApiAvailability, param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param6: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param7: java.util.List<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>, param8: java.util.List<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>, param9: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param10: number, param11: number, param12: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>);
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public zaa(param0: globalAndroid.os.Bundle): void;
								public maybeSignOut(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public reconnect(): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public disconnect(): void;
								public isConnecting(): boolean;
								public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public getLooper(): globalAndroid.os.Looper;
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
				export module common {
					export module api {
						export module internal {
							export class zaas extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaat extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaau extends com.google.android.gms.internal.base.zas {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
								public handleMessage(param0: globalAndroid.os.Message): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaav extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
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
				export module common {
					export module api {
						export module internal {
							export class zaaw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zaaw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(): void;
									zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zab(): boolean;
									zac(): void;
									zaa(param0: globalAndroid.os.Bundle): void;
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									zaa(param0: number): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zaa(): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaax extends com.google.android.gms.common.api.internal.zabm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zaay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw);
								public zaa(param0: com.google.android.gms.common.api.internal.zaaz): void;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaaz implements com.google.android.gms.common.api.internal.zabo, com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
								public zaf(): void;
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zad(): boolean;
								public zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zae(): boolean;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zaar, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>, param10: com.google.android.gms.common.api.internal.zabn);
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zag(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zaa(): void;
								public zaa(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zab>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: java.lang.Exception): void;
								public constructor(param0: number);
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zav, param1: boolean): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaba {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
								public static zaa(): java.util.concurrent.ExecutorService;
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
				export module common {
					export module api {
						export module internal {
							export class zabb extends com.google.android.gms.internal.base.zas {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
								public handleMessage(param0: globalAndroid.os.Message): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabc {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
								public execute(param0: java.lang.Runnable): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
								public onBackgroundStateChanged(param0: boolean): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabe {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabf>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
								public onSignOutComplete(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabh {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabi {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabk {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public zaa(param0: globalAndroid.content.Context): void;
								public zaa(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabm);
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
				export module common {
					export module api {
						export module internal {
							export class zabl<O>  extends com.google.android.gms.common.api.internal.zaab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zacn<any>): void;
								public constructor();
								public constructor(param0: string);
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public getContext(): globalAndroid.content.Context;
								public getLooper(): globalAndroid.os.Looper;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zabm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: globalAndroid.os.Bundle): void;
									zaa(param0: com.google.android.gms.common.ConnectionResult): void;
									zaa(param0: number, param1: boolean): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: number, param1: boolean): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabo {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
									zaa(): void;
									zab(): com.google.android.gms.common.ConnectionResult;
									zaa(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
									zac(): void;
									zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
									zad(): boolean;
									zae(): boolean;
									zaa(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
									zag(): void;
									zaa(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									zaf(): void;
								});
								public constructor();
								public zaf(): void;
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zad(): boolean;
								public zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zae(): boolean;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zag(): void;
								public zaa(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zaa(): void;
								public zaa(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zabp extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp>;
								public static zaa(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.zabp;
								public zac(): com.google.android.gms.tasks.Task<java.lang.Void>;
								public zaa(): void;
								public onDestroy(): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
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
				export module common {
					export module api {
						export module internal {
							export class zabr<T>  extends com.google.android.gms.tasks.OnCompleteListener<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr<any>>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabs>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabt {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabt>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabu {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
								public zaa: com.google.android.gms.common.api.internal.zab;
								public zab: number;
								public zac: com.google.android.gms.common.api.GoogleApi<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zab, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
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
				export module common {
					export module api {
						export module internal {
							export class zabv {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
								public zaa: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public zab: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>;
								public zac: java.lang.Runnable;
								public constructor(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient,any>, param2: java.lang.Runnable);
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
				export module common {
					export module api {
						export module internal {
							export class zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
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
				export module common {
					export module api {
						export module internal {
							export class zabx extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
								public accept(param0: any, param1: any): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaby {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zabz extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
								public registerListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zac<T>  extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zac<any>>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: java.lang.Exception): void;
								public constructor(param0: number);
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zav, param1: boolean): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaca extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
								public accept(param0: any, param1: any): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacb extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
								public unregisterListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacc<R>  extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc<any>>;
								public constructor(param0: com.google.android.gms.common.api.Status);
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public constructor();
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public await(): any;
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
				export module common {
					export module api {
						export module internal {
							export class zacd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacd>;
								public static zaa(): java.util.concurrent.ExecutorService;
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
				export module common {
					export module api {
						export module internal {
							export class zace extends com.google.android.gms.signin.internal.zab implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
								public zaa(param0: com.google.android.gms.signin.internal.zai): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zach): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zaa(): void;
								public constructor(param0: string);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings);
								public zaa(param0: com.google.android.gms.signin.internal.zak): void;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacf>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacg>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zach {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zach>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zach interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.ConnectionResult): void;
									zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaci {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaci>;
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
				export module common {
					export module api {
						export module internal {
							export class zacj extends com.google.android.gms.common.api.internal.TaskApiCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
								public doExecute(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zack extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
								public accept(param0: any, param1: any): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacl extends com.google.android.gms.tasks.Continuation<java.lang.Boolean,java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
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
				export module common {
					export module api {
						export module internal {
							export class zacm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacn<R>  extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any>  {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn<any>>;
								public constructor(param0: java.lang.ref.WeakReference<com.google.android.gms.common.api.GoogleApiClient>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
								public zaa(param0: com.google.android.gms.common.api.PendingResult<any>): void;
								public constructor();
								public onResult(param0: any): void;
								public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaco {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaco>;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacp extends com.google.android.gms.internal.base.zas {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp>;
								public constructor(param0: com.google.android.gms.common.api.internal.zacn<any>, param1: globalAndroid.os.Looper);
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
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
				export module common {
					export module api {
						export module internal {
							export class zacq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zacr extends com.google.android.gms.common.api.internal.zacq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
								public zaa(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zad extends com.google.android.gms.common.api.internal.zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zad>;
								public constructor(param0: number);
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): androidNative.Array<com.google.android.gms.common.Feature>;
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zae extends com.google.android.gms.common.api.internal.zac<java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zae>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public constructor(param0: number);
								public constructor(param0: com.google.android.gms.common.api.internal.zabv, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>);
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): androidNative.Array<com.google.android.gms.common.Feature>;
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zaf<A>  extends com.google.android.gms.common.api.internal.zab {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaf<any>>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: java.lang.Exception): void;
								public constructor(param0: number);
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zav, param1: boolean): void;
								public constructor(param0: number, param1: any);
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
				export module common {
					export module api {
						export module internal {
							export class zag extends com.google.android.gms.common.api.internal.zac<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zag>;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
								public constructor(param0: number);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>);
								public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): androidNative.Array<com.google.android.gms.common.Feature>;
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zah<ResultT>  extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zah<any>>;
								public zaa(param0: com.google.android.gms.common.api.Status): void;
								public zaa(param0: java.lang.Exception): void;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.common.api.Api.AnyClient,any>, param2: com.google.android.gms.tasks.TaskCompletionSource<any>, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
								public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): androidNative.Array<com.google.android.gms.common.Feature>;
								public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
								public zaa(param0: com.google.android.gms.common.api.internal.zav, param1: boolean): void;
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
				export module common {
					export module api {
						export module internal {
							export class zai extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai>;
								public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.zai;
								public zaa(): void;
								public zaa(param0: number, param1: com.google.android.gms.common.api.GoogleApiClient, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zaa(param0: number): void;
								public onStop(): void;
								public onStart(): void;
							}
							export module zai {
								export class zaa extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai.zaa>;
									public zaa: number;
									public zab: com.google.android.gms.common.api.GoogleApiClient;
									public zac: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
									public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
									public constructor(param0: com.google.android.gms.common.api.internal.zai, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
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
				export module common {
					export module api {
						export module internal {
							export class zaj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj>;
								public zaa(): java.util.Set<com.google.android.gms.common.api.internal.ApiKey<any>>;
								public zab(): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.ApiKey<any>,string>>;
								public constructor(param0: java.lang.Iterable<any>);
								public zaa(param0: com.google.android.gms.common.api.internal.ApiKey<any>, param1: com.google.android.gms.common.ConnectionResult, param2: string): void;
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
				export module common {
					export module api {
						export module internal {
							export class zak {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zak>;
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
				export module common {
					export module api {
						export module internal {
							export abstract class zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zal>;
								public zac: com.google.android.gms.common.GoogleApiAvailability;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zaa(): void;
								public zab(): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onStop(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
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
				export module common {
					export module api {
						export module internal {
							export class zam extends com.google.android.gms.common.api.internal.zabm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zam>;
								public zaa(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zan {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zan>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zao extends java.lang.ThreadLocal<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zao>;
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
				export module common {
					export module api {
						export module internal {
							export class zap extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zap>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaq implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaq>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zap): void;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
								public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module api {
						export module internal {
							export class zar {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zar>;
								public run(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zas extends com.google.android.gms.common.api.internal.zabo {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zas>;
								public zaf(): void;
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zac(): void;
								public zad(): boolean;
								public zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zae(): boolean;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,any>;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zag(): void;
								public zaa(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zaa(): void;
								public zaa(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public static zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zaar, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>,com.google.android.gms.common.api.Api.Client>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any,com.google.android.gms.signin.SignInOptions>, param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>): com.google.android.gms.common.api.internal.zas;
								public zaa(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
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
				export module common {
					export module api {
						export module internal {
							export class zat extends com.google.android.gms.common.api.internal.zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zat>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: number, param1: boolean): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
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
				export module common {
					export module api {
						export module internal {
							export class zau extends com.google.android.gms.common.api.internal.zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zau>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaa(param0: number, param1: boolean): void;
								public zaa(param0: globalAndroid.os.Bundle): void;
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
				export module common {
					export module api {
						export module internal {
							export class zav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zav>;
								public zab(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaw extends com.google.android.gms.tasks.OnCompleteListener<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaw>;
								public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
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
				export module common {
					export module api {
						export module internal {
							export class zax extends com.google.android.gms.common.api.PendingResult.StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zax>;
								public onComplete(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module api {
						export module internal {
							export class zay extends com.google.android.gms.common.api.internal.zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zay>;
								public onResume(): void;
								public zaa(): void;
								public static zaa(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.GoogleApiManager, param2: com.google.android.gms.common.api.internal.ApiKey<any>): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onStop(): void;
								public onStart(): void;
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
				export module common {
					export module api {
						export module internal {
							export class zaz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaz>;
								public zaa(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.ApiKey<any>);
								public zab(): com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>;
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
				export module common {
					export module api {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.common.api.zaa>;
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
				export module common {
					export module api {
						export class zab extends com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.api.zab>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module api {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.common.api.zac>;
							public run(): void;
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
				export module common {
					export module api {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.common.api.zad>;
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
				export module common {
					export module data {
						export abstract class AbstractDataBuffer<T>  extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public singleRefIterator(): java.util.Iterator<any>;
							public close(): void;
							public getMetadata(): globalAndroid.os.Bundle;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
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
				export module common {
					export module data {
						export class BitmapTeleporter {
							public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
							public constructor(param0: globalAndroid.graphics.Bitmap);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public release(): void;
							public setTempDir(param0: java.io.File): void;
							public get(): globalAndroid.graphics.Bitmap;
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
				export module common {
					export module data {
						export class DataBuffer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCount(): number;
								get(param0: number): T;
								getMetadata(): globalAndroid.os.Bundle;
								close(): void;
								isClosed(): boolean;
								iterator(): java.util.Iterator<T>;
								singleRefIterator(): java.util.Iterator<T>;
								release(): void;
							});
							public constructor();
							public get(param0: number): T;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public singleRefIterator(): java.util.Iterator<T>;
							public getCount(): number;
							public iterator(): java.util.Iterator<T>;
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
				export module common {
					export module data {
						export class DataBufferIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
							public zaa: com.google.android.gms.common.data.DataBuffer<any>;
							public zab: number;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
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
				export module common {
					export module data {
						export class DataBufferObserver {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataChanged(): void;
								onDataRangeChanged(param0: number, param1: number): void;
								onDataRangeInserted(param0: number, param1: number): void;
								onDataRangeRemoved(param0: number, param1: number): void;
								onDataRangeMoved(param0: number, param1: number, param2: number): void;
							});
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export module DataBufferObserver {
							export class Observable {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
									removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								});
								public constructor();
								public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
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
				export module common {
					export module data {
						export class DataBufferObserverSet implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
							public constructor();
							public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public hasObservers(): boolean;
							public onDataRangeInserted(param0: number, param1: number): void;
							public clear(): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
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
				export module common {
					export module data {
						export class DataBufferRef {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferRef>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public mDataRow: number;
							public getInteger(param0: string): number;
							public hasColumn(param0: string): boolean;
							public hashCode(): number;
							public getFloat(param0: string): number;
							public parseUri(param0: string): globalAndroid.net.Uri;
							public getByteArray(param0: string): androidNative.Array<number>;
							public copyToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
							public getDouble(param0: string): number;
							public hasNull(param0: string): boolean;
							public isDataValid(): boolean;
							public getLong(param0: string): number;
							public zaa(param0: number): void;
							public getString(param0: string): string;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
							public getDataRow(): number;
							public equals(param0: any): boolean;
							public getBoolean(param0: string): boolean;
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
				export module common {
					export module data {
						export class DataBufferSafeParcelable<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferSafeParcelable<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public static addValue(param0: com.google.android.gms.common.data.DataHolder.Builder, param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
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
				export module common {
					export module data {
						export class DataBufferUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
							public static KEY_NEXT_PAGE_TOKEN: string;
							public static KEY_PREV_PAGE_TOKEN: string;
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList;
							public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
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
				export module common {
					export module data {
						export class DataHolder {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
							public getString(param0: string, param1: number, param2: number): string;
							public close(): void;
							public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
							public hasColumn(param0: string): boolean;
							public hasNull(param0: string, param1: number, param2: number): boolean;
							public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
							public zaa(): void;
							public finalize(): void;
							public getLong(param0: string, param1: number, param2: number): number;
							public static builder(param0: androidNative.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
							public isClosed(): boolean;
							public zab(param0: string, param1: number, param2: number): number;
							public getCount(): number;
							public zaa(param0: string, param1: number, param2: number, param3: globalAndroid.database.CharArrayBuffer): void;
							public getStatusCode(): number;
							public constructor(param0: androidNative.Array<string>, param1: androidNative.Array<globalAndroid.database.CursorWindow>, param2: number, param3: globalAndroid.os.Bundle);
							public getMetadata(): globalAndroid.os.Bundle;
							public getInteger(param0: string, param1: number, param2: number): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zaa(param0: string, param1: number, param2: number): number;
							public getBoolean(param0: string, param1: number, param2: number): boolean;
							public getByteArray(param0: string, param1: number, param2: number): androidNative.Array<number>;
							public getWindowIndex(param0: number): number;
						}
						export module DataHolder {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
								public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
								public zaa(param0: java.util.HashMap<string,any>): com.google.android.gms.common.data.DataHolder.Builder;
								public build(param0: number): com.google.android.gms.common.data.DataHolder;
								public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							}
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.zaa>;
								public constructor(param0: string);
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
				export module common {
					export module data {
						export abstract class EntityBuffer<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.EntityBuffer<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public getChildDataMarkerColumn(): string;
							public iterator(): java.util.Iterator<any>;
							public getPrimaryDataMarkerColumn(): string;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
							public getEntry(param0: number, param1: number): any;
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
				export module common {
					export module data {
						export class Freezable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								freeze(): T;
								isDataValid(): boolean;
							});
							public constructor();
							public isDataValid(): boolean;
							public freeze(): T;
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
				export module common {
					export module data {
						export class FreezableUtils {
							public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
							public constructor();
							public static freeze(param0: androidNative.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList;
							public static freezeIterable(param0: java.lang.Iterable): java.util.ArrayList;
							public static freeze(param0: java.util.ArrayList): java.util.ArrayList;
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
				export module common {
					export module data {
						export class SingleRefDataBufferIterator<T>  extends com.google.android.gms.common.data.DataBufferIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public next(): any;
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
				export module common {
					export module data {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zaa>;
							public constructor();
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
				export module common {
					export module data {
						export class zab extends com.google.android.gms.common.data.DataHolder.Builder {
							public static class: java.lang.Class<com.google.android.gms.common.data.zab>;
							public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							public zaa(param0: java.util.HashMap<string,any>): com.google.android.gms.common.data.DataHolder.Builder;
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
				export module common {
					export module data {
						export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zac>;
							public constructor();
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
				export module common {
					export module images {
						export class ImageManager {
							public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri, param2: number): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
							public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
						}
						export module ImageManager {
							export class ImageReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public zab(param0: com.google.android.gms.common.images.zab): void;
								public zaa(): void;
								public zaa(param0: com.google.android.gms.common.images.zab): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
								});
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
							export class zaa extends androidx.collection.LruCache<com.google.android.gms.common.images.zaa,globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zaa>;
							}
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zab>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: com.google.android.gms.common.images.zab);
								public run(): void;
							}
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zac>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.os.ParcelFileDescriptor);
								public run(): void;
							}
							export class zad {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zad>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: boolean, param4: java.util.concurrent.CountDownLatch);
								public run(): void;
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
				export module common {
					export module images {
						export class Size {
							public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public static parseSize(param0: string): com.google.android.gms.common.images.Size;
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
				export module common {
					export module images {
						export class WebImage {
							public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
							public constructor(param0: org.json.JSONObject);
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toString(): string;
							public equals(param0: any): boolean;
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
				export module common {
					export module images {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.common.images.zaa>;
							public zaa: globalAndroid.net.Uri;
							public constructor(param0: globalAndroid.net.Uri);
							public hashCode(): number;
							public equals(param0: any): boolean;
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
				export module common {
					export module images {
						export abstract class zab {
							public static class: java.lang.Class<com.google.android.gms.common.images.zab>;
							public zab: number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public zaa(param0: boolean, param1: boolean): boolean;
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
				export module common {
					export module images {
						export class zac extends com.google.android.gms.common.images.zab {
							public static class: java.lang.Class<com.google.android.gms.common.images.zac>;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
							public zaa(param0: boolean, param1: boolean): boolean;
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
				export module common {
					export module images {
						export class zad extends com.google.android.gms.common.images.zab {
							public static class: java.lang.Class<com.google.android.gms.common.images.zad>;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public zaa(param0: boolean, param1: boolean): boolean;
							public constructor(param0: globalAndroid.widget.ImageView, param1: number);
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
				export module common {
					export module images {
						export class zae extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage> {
							public static class: java.lang.Class<com.google.android.gms.common.images.zae>;
							public constructor();
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
				export module common {
					export module internal {
						export class ApiExceptionUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ApiExceptionUtil>;
							public constructor();
							public static fromStatus(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
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
				export module common {
					export module internal {
						export class ClientIdentity {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientIdentity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
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
				export module common {
					export module internal {
						export class ClientSettings {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings>;
							public zaa(param0: java.lang.Integer): void;
							public getGravityForPopups(): number;
							public getRealClientPackageName(): string;
							public zad(): java.lang.Integer;
							public zac(): com.google.android.gms.signin.SignInOptions;
							public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
							public zaa(): java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.zaa>;
							public getViewForPopups(): globalAndroid.view.View;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.zaa>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions);
							public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccountOrDefault(): globalAndroid.accounts.Account;
							public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
							/** @deprecated */
							public getAccountName(): string;
							public getAccount(): globalAndroid.accounts.Account;
							public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.ClientSettings.zaa>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions, param8: boolean);
							public zab(): string;
						}
						export module ClientSettings {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
								public zaa(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
								public zaa(param0: java.util.Collection<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public zaa(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public build(): com.google.android.gms.common.internal.ClientSettings;
								public constructor();
								public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
							}
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.zaa>;
								public zaa: java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: java.util.Set<com.google.android.gms.common.api.Scope>);
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
				export module common {
					export module internal {
						export abstract class FallbackServiceBroker {
							public static class: java.lang.Class<com.google.android.gms.common.internal.FallbackServiceBroker>;
							public constructor();
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
				export module common {
					export module internal {
						export abstract class GmsClient<T>  extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public disconnect(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
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
				export module common {
					export module internal {
						export class PendingResultUtil {
							public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil>;
							public constructor();
							public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task;
							public static toTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>): com.google.android.gms.tasks.Task;
							public static toResponseTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.api.Response): com.google.android.gms.tasks.Task;
						}
						export module PendingResultUtil {
							export class ResultConverter<R, T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									convert(param0: R): T;
								});
								public constructor();
								public convert(param0: R): T;
							}
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.zaa>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
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
				export module common {
					export module internal {
						export module service {
							export class Common {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.Common>;
								public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.common.internal.service.zah>;
								public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								public static zaa: com.google.android.gms.common.internal.service.zab;
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
				export module common {
					export module internal {
						export module service {
							export class zaa extends com.google.android.gms.common.internal.service.zal {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaa>;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public constructor(param0: string);
								public zaa(param0: number): void;
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
				export module common {
					export module internal {
						export module service {
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zab>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
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
				export module common {
					export module internal {
						export module service {
							export class zac extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.common.internal.service.zah,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zac>;
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
				export module common {
					export module internal {
						export module service {
							export class zad extends com.google.android.gms.common.internal.service.zai {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zad>;
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module internal {
						export module service {
							export class zae extends com.google.android.gms.common.internal.service.zab {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zae>;
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
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
				export module common {
					export module internal {
						export module service {
							export abstract class zaf<R>  extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.common.internal.service.zah> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaf<any>>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module internal {
						export module service {
							export class zag extends com.google.android.gms.common.internal.service.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zag>;
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>);
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public constructor(param0: string);
								public zaa(param0: number): void;
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
				export module common {
					export module internal {
						export module service {
							export class zah extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zao> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zah>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public disconnect(param0: string): void;
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getStartServiceAction(): string;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
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
				export module common {
					export module internal {
						export module service {
							export abstract class zai extends com.google.android.gms.common.internal.service.zaf<com.google.android.gms.common.api.Status> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zai>;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public constructor();
								/** @deprecated */
								public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module internal {
						export module service {
							export class zaj extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaj>;
								public zaa(): globalAndroid.os.Parcel;
								public zaa(param0: com.google.android.gms.common.internal.zaaa): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
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
				export module common {
					export module internal {
						export module service {
							export class zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zak>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.internal.zaaa): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.internal.zaaa): void;
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
				export module common {
					export module internal {
						export module service {
							export abstract class zal extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.service.zam {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zal>;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public constructor(param0: string);
								public zaa(param0: number): void;
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
				export module common {
					export module internal {
						export module service {
							export class zam {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zam>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: number): void;
								});
								public constructor();
								public zaa(param0: number): void;
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
				export module common {
					export module internal {
						export module service {
							export class zan extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zao {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zan>;
								public zaa(): globalAndroid.os.Parcel;
								public zaa(param0: com.google.android.gms.common.internal.service.zam): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
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
				export module common {
					export module internal {
						export module service {
							export class zao {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zao>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.internal.service.zam): void;
								});
								public constructor();
								public zaa(param0: com.google.android.gms.common.internal.service.zam): void;
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
				export module common {
					export module internal {
						export module service {
							export class zap extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zap>;
								public accept(param0: any, param1: any): void;
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
				export module common {
					export module internal {
						export module service {
							export class zaq extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> implements com.google.android.gms.common.internal.zaac  {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaq>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public zaa(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): com.google.android.gms.common.api.Api.Client;
								public zaa(param0: com.google.android.gms.common.internal.zaaa): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zaa(): number;
								public constructor(param0: globalAndroid.content.Context);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
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
				export module common {
					export module internal {
						export module service {
							export class zar extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zak> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zar>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public getConnectionHint(): globalAndroid.os.Bundle;
								public disconnect(param0: string): void;
								public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public requiresSignIn(): boolean;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getStartServiceAction(): string;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public getUseDynamicLookup(): boolean;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
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
				export module common {
					export module internal {
						export module service {
							export class zas extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.common.internal.service.zar,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zas>;
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
				export module common {
					export module internal {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaa>;
							public constructor();
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
				export module common {
					export module internal {
						export class zaaa {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaaa>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zaaa>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zab(): java.util.List<com.google.android.gms.common.internal.zao>;
							public constructor(param0: number, param1: java.util.List<com.google.android.gms.common.internal.zao>);
							public zaa(): number;
							public zaa(param0: com.google.android.gms.common.internal.zao): void;
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
				export module common {
					export module internal {
						export class zaab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaab>;
							public zaa(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
							public constructor(param0: globalAndroid.content.Context);
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
				export module common {
					export module internal {
						export class zaac extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaac>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zaac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: com.google.android.gms.common.internal.zaaa): com.google.android.gms.tasks.Task<java.lang.Void>;
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.common.internal.zaaa): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
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
				export module common {
					export module internal {
						export class zaad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zaaa> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaad>;
							public constructor();
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
				export module common {
					export module internal {
						export abstract class zab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zab>;
							public constructor();
							public static zaa(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public zaa(): void;
							public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
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
				export module common {
					export module internal {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zac>;
							public static zad(param0: globalAndroid.content.Context, param1: number): string;
							public static zaa(param0: globalAndroid.content.Context): string;
							public static zae(param0: globalAndroid.content.Context, param1: number): string;
							public static zab(param0: globalAndroid.content.Context, param1: number): string;
							public static zac(param0: globalAndroid.content.Context, param1: number): string;
							public static zaa(param0: globalAndroid.content.Context, param1: number): string;
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
				export module common {
					export module internal {
						export class zad extends com.google.android.gms.common.internal.zab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zad>;
							public static zaa(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public zaa(): void;
							public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
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
				export module common {
					export module internal {
						export class zae extends com.google.android.gms.common.internal.zab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zae>;
							public static zaa(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public zaa(): void;
							public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
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
				export module common {
					export module internal {
						export class zaf extends com.google.android.gms.common.internal.zab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaf>;
							public static zaa(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public static zaa(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
							public zaa(): void;
							public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zab;
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
				export module common {
					export module internal {
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zag>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
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
				export module common {
					export module internal {
						export class zah {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zah>;
							public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.zak);
							public zaa(): void;
							public zab(): void;
							public zac(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public zab(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public zaa(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public zab(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public zaa(param0: globalAndroid.os.Bundle): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
							public zaa(param0: number): void;
							public zac(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public zaa(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
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
				export module common {
					export module internal {
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zai>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
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
				export module common {
					export module internal {
						export class zaj {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaj>;
							public constructor();
							public zaa(): void;
							public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
							public zaa(param0: globalAndroid.content.Context, param1: number): number;
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
				export module common {
					export module internal {
						export class zak {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zak>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isConnected(): boolean;
								getConnectionHint(): globalAndroid.os.Bundle;
							});
							public constructor();
							public isConnected(): boolean;
							public getConnectionHint(): globalAndroid.os.Bundle;
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
				export module common {
					export module internal {
						export class zal extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.zam {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zal>;
							public zaa(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.zaw): com.google.android.gms.dynamic.IObjectWrapper;
							public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zaa(): globalAndroid.os.Parcel;
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
				export module common {
					export module internal {
						export class zam {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.zaw): com.google.android.gms.dynamic.IObjectWrapper;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.zaw): com.google.android.gms.dynamic.IObjectWrapper;
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
				export module common {
					export module internal {
						export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zao> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zan>;
							public constructor();
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
				export module common {
					export module internal {
						export class zao {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zao>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zao>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
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
				export module common {
					export module internal {
						export class zap extends com.google.android.gms.common.internal.PendingResultUtil.zaa {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zap>;
							public zaa(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
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
				export module common {
					export module internal {
						export class zaq extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaq>;
							public convert(param0: any): any;
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
				export module common {
					export module internal {
						export class zar extends com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zar>;
							public onComplete(param0: com.google.android.gms.common.api.Status): void;
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
				export module common {
					export module internal {
						export class zas extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any,java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zas>;
							public convert(param0: any): any;
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
				export module common {
					export module internal {
						export class zat {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zat>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zat>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
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
				export module common {
					export module internal {
						export class zau {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zau>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zau>;
							public zaa(): com.google.android.gms.common.internal.IAccountAccessor;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zac(): boolean;
							public zad(): boolean;
							public equals(param0: any): boolean;
							public zab(): com.google.android.gms.common.ConnectionResult;
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
				export module common {
					export module internal {
						export class zav extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zat> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zav>;
							public constructor();
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
				export module common {
					export module internal {
						export class zaw {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaw>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zaw>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: androidNative.Array<com.google.android.gms.common.api.Scope>);
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
				export module common {
					export module internal {
						export class zax extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zau> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zax>;
							public constructor();
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
				export module common {
					export module internal {
						export class zay extends com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.common.internal.zam> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zay>;
							public static zaa(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.view.View;
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
				export module common {
					export module internal {
						export class zaz extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zaw> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaz>;
							public constructor();
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
				export module common {
					export module server {
						export class FavaDiagnosticsEntity {
							public static class: java.lang.Class<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: number);
							public constructor(param0: string, param1: number);
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
				export module common {
					export module server {
						export module converter {
							export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string,java.lang.Integer>  {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public zab(): number;
								public add(param0: string, param1: number): com.google.android.gms.common.server.converter.StringToIntConverter;
								public zab(param0: any): any;
								public zaa(param0: any): any;
								public zaa(): number;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export module StringToIntConverter {
								export class zaa {
									public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
				export module common {
					export module server {
						export module converter {
							export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zab> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zaa>;
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
				export module common {
					export module server {
						export module converter {
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zab>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zab>;
								public zaa(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>): com.google.android.gms.common.server.converter.zab;
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
				export module common {
					export module server {
						export module converter {
							export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zac>;
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
				export module common {
					export module server {
						export module converter {
							export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zad>;
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
				export module common {
					export module server {
						export module response {
							export abstract class FastJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse>;
								public toString(): string;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.Map): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Integer>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Float>): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: any): any;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigDecimal): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Long>): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Boolean>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: androidNative.Array<number>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigInteger): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigInteger>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public constructor();
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Double>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList): void;
								public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): boolean;
								public getValueObject(param0: string): any;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigDecimal>): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>): any;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
							}
							export module FastJsonResponse {
								export class Field<I, O>  extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public zae: string;
									public zaf: number;
									public zag: java.lang.Class<any>;
									public static CREATOR: com.google.android.gms.common.server.response.zai;
									public zad(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static forConcreteTypeArray(param0: string, param1: number, param2: java.lang.Class): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zab(param0: any): any;
									public static forBoolean(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean,java.lang.Boolean>;
									public toString(): string;
									public static forLong(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long,java.lang.Long>;
									public static forStrings(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>,java.util.ArrayList<string>>;
									public zac(): com.google.android.gms.common.server.response.FastJsonResponse;
									public static forFloat(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float,java.lang.Float>;
									public getSafeParcelableFieldId(): number;
									public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string,string>;
									public static forStringMap(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.HashMap<string,string>,java.util.HashMap<string,string>>;
									public zaa(param0: com.google.android.gms.common.server.response.zaj): void;
									public static forDouble(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double,java.lang.Double>;
									public static forBase64(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<androidNative.Array<number>,androidNative.Array<number>>;
									public zab(): boolean;
									public static forConcreteType(param0: string, param1: number, param2: java.lang.Class): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zaa(param0: any): any;
									public static forInteger(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer,java.lang.Integer>;
									public static withConverter(param0: string, param1: number, param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>, param3: boolean): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
									public zaa(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>;
								}
								export class FieldConverter<I, O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any,any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zaa(): number;
										zab(): number;
										zab(param0: I): O;
										zaa(param0: O): I;
									});
									public constructor();
									public zab(param0: I): O;
									public zaa(param0: O): I;
									public zab(): number;
									public zaa(): number;
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
				export module common {
					export module server {
						export module response {
							export class FastParser<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser<any>>;
								public constructor();
								public parse(param0: java.io.InputStream, param1: T): void;
							}
							export module FastParser {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.ParseException>;
									public constructor(param0: java.lang.Throwable);
									public constructor(param0: string);
									public constructor(param0: string, param1: java.lang.Throwable);
								}
								export class zaa<O>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.zaa<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastParser$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
									});
									public constructor();
									public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
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
				export module common {
					export module server {
						export module response {
							export abstract class FastSafeParcelableJsonResponse extends com.google.android.gms.common.server.response.FastJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse>;
								public describeContents(): number;
								public isPrimitiveFieldSet(param0: string): boolean;
								public equals(param0: any): boolean;
								public toByteArray(): androidNative.Array<number>;
								public getValueObject(param0: string): any;
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
				export module common {
					export module server {
						export module response {
							export class SafeParcelResponse extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse>;
								public toString(): string;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.Map): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Integer>): void;
								public static from(param0: com.google.android.gms.common.server.response.FastJsonResponse): com.google.android.gms.common.server.response.SafeParcelResponse;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigInteger): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Float>): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public constructor(param0: com.google.android.gms.common.server.response.zaj, param1: string);
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: number): void;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: any): any;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigDecimal): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.math.BigDecimal): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Long>): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Boolean>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: boolean): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: androidNative.Array<number>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.math.BigInteger): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: java.util.ArrayList): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigInteger>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: number): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.Map<string,string>): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: androidNative.Array<number>): void;
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.lang.Double>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList): void;
								public getValueObject(param0: string): any;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: java.util.ArrayList<java.math.BigDecimal>): void;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: boolean): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>, param1: string, param2: string): void;
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
				export module common {
					export module server {
						export module response {
							export class zaa extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Long> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaa>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zab extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Integer> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zab>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zac extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Double> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zac>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zad extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Float> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zad>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zae extends com.google.android.gms.common.server.response.FastParser.zaa<string> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zae>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zaf extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaf>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zag extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigDecimal> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zag>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zah extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigInteger> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zah>;
								public zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
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
				export module common {
					export module server {
						export module response {
							export class zai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zai>;
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
				export module common {
					export module server {
						export module response {
							export class zaj {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaj>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zaj>;
								public zaa(param0: java.lang.Class<any>): boolean;
								public toString(): string;
								public zac(): string;
								public zaa(): void;
								public zab(): void;
								public zaa(param0: string): java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>;
								public zaa(param0: java.lang.Class<any>, param1: java.util.Map<string,com.google.android.gms.common.server.response.FastJsonResponse.Field<any,any>>): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: java.lang.Class<any>);
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
				export module common {
					export module server {
						export module response {
							export class zak extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zak>;
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
				export module common {
					export module server {
						export module response {
							export class zal {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zal>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal>;
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
				export module common {
					export module server {
						export module response {
							export class zam {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zam>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam>;
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
				export module common {
					export module server {
						export module response {
							export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zan>;
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
				export module common {
					export module server {
						export module response {
							export class zao extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zaj> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zao>;
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
				export module common {
					export module server {
						export module response {
							export class zap extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse> {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zap>;
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
				export module common {
					export module server {
						export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity> {
							public static class: java.lang.Class<com.google.android.gms.common.server.zaa>;
							public constructor();
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
				export module common {
					export class zaa {
						public static class: java.lang.Class<com.google.android.gms.common.zaa>;
						public then(param0: any): com.google.android.gms.tasks.Task;
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
				export module common {
					export class zab {
						public static class: java.lang.Class<com.google.android.gms.common.zab>;
						public then(param0: any): com.google.android.gms.tasks.Task;
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
				export module dynamic {
					export abstract class DeferredLifecycleHelper<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
						public constructor();
						public onResume(): void;
						public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
						public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public static showGooglePlayUnavailableMessage(param0: globalAndroid.widget.FrameLayout): void;
						public onStart(): void;
						public getDelegate(): T;
					}
					export module DeferredLifecycleHelper {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamic.DeferredLifecycleHelper$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(): number;
								zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
							public zaa(): number;
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
				export module dynamic {
					export class zaa extends com.google.android.gms.dynamic.OnDelegateCreatedListener<any> {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaa>;
						public onDelegateCreated(param0: any): void;
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
				export module dynamic {
					export class zab extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zab>;
						public zaa(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
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
				export module dynamic {
					export class zac extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zac>;
						public zaa(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
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
				export module dynamic {
					export class zad {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zad>;
						public onClick(param0: globalAndroid.view.View): void;
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
				export module dynamic {
					export class zae extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zae>;
						public zaa(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
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
				export module dynamic {
					export class zaf extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaf>;
						public zaa(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
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
				export module dynamic {
					export class zag extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zag>;
						public zaa(): number;
						public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
				}
			}
		}
	}
}

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zba {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zba>;
// 							public constructor(param0: globalAndroid.os.IBinder, param1: string);
// 							public zbb(param0: number, param1: globalAndroid.os.Parcel): void;
// 							public asBinder(): globalAndroid.os.IBinder;
// 							public zba(): globalAndroid.os.Parcel;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbaa extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.internal.auth-api.zbab {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbaa>;
// 							public constructor();
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: globalAndroid.app.PendingIntent): void;
// 							public constructor(param0: string);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbab {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbab>;
// 							/**
// 							 * Constructs a new instance of the com.google.android.gms.internal.auth-api.zbab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 							 */
// 							public constructor(implementation: {
// 								zbb(param0: com.google.android.gms.common.api.Status, param1: globalAndroid.app.PendingIntent): void;
// 							});
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: globalAndroid.app.PendingIntent): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbac extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.internal.auth-api.zbad {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbac>;
// 							public constructor();
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public constructor(param0: string);
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbad {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbad>;
// 							/**
// 							 * Constructs a new instance of the com.google.android.gms.internal.auth-api.zbad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 							 */
// 							public constructor(implementation: {
// 								zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult): void;
// 							});
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbae extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.internal.auth-api.zbaf {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbae>;
// 							public constructor();
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public constructor(param0: string);
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SavePasswordResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbaf {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbaf>;
// 							/**
// 							 * Constructs a new instance of the com.google.android.gms.internal.auth-api.zbaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 							 */
// 							public constructor(implementation: {
// 								zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SavePasswordResult): void;
// 							});
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SavePasswordResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbag extends com.google.android.gms.internal.auth-api.zba {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbag>;
// 							public zbd(param0: com.google.android.gms.internal.auth-api.zbab, param1: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): void;
// 							public zbc(param0: com.google.android.gms.internal.auth-api.zby, param1: com.google.android.gms.auth.api.identity.BeginSignInRequest): void;
// 							public zbe(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: string): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbah extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbah>;
// 							public accept(param0: any, param1: any): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbai extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbai>;
// 							public accept(param0: any, param1: any): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbaj extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.auth-api.zbw,com.google.android.gms.auth.api.identity.zbc> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbaj>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbak extends com.google.android.gms.internal.auth-api.zbac {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbak>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbal extends com.google.android.gms.internal.auth-api.zbae {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbal>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.SavePasswordResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbam extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.identity.zbc> implements com.google.android.gms.auth.api.identity.CredentialSavingClient  {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbam>;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public savePassword(param0: com.google.android.gms.auth.api.identity.SavePasswordRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SavePasswordResult>;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public saveAccountLinkingToken(param0: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenResult>;
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.identity.zbc);
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.identity.zbc);
// 							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zban extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zban>;
// 							public accept(param0: any, param1: any): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbao extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbao>;
// 							public accept(param0: any, param1: any): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbap extends com.google.android.gms.common.api.internal.RemoteCall<any,any> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbap>;
// 							public accept(param0: any, param1: any): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbaq extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.auth-api.zbav,com.google.android.gms.auth.api.identity.zbl> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbaq>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbar extends com.google.android.gms.internal.auth-api.zbx {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbar>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.BeginSignInResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbas extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbas>;
// 							public onResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbat extends com.google.android.gms.internal.auth-api.zbaa {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbat>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: globalAndroid.app.PendingIntent): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbau extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.auth.api.identity.zbl> implements com.google.android.gms.auth.api.identity.SignInClient  {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbau>;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.auth.api.identity.zbl);
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.identity.zbl);
// 							public signOut(): com.google.android.gms.tasks.Task<java.lang.Void>;
// 							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
// 							public getSignInCredentialFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.auth.api.identity.SignInCredential;
// 							public getSignInIntent(param0: com.google.android.gms.auth.api.identity.GetSignInIntentRequest): com.google.android.gms.tasks.Task<globalAndroid.app.PendingIntent>;
// 							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
// 							public beginSignIn(param0: com.google.android.gms.auth.api.identity.BeginSignInRequest): com.google.android.gms.tasks.Task<com.google.android.gms.auth.api.identity.BeginSignInResult>;
// 							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbav extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.auth-api.zbag> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbav>;
// 							public getStartServiceAction(): string;
// 							public requiresGooglePlayServices(): boolean;
// 							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
// 							public getServiceDescriptor(): string;
// 							public usesClientTelemetry(): boolean;
// 							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getEndpointPackageName(): string;
// 							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getSignInIntent(): globalAndroid.content.Intent;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public getConnectionHint(): globalAndroid.os.Bundle;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.auth.api.identity.zbl, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
// 							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
// 							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
// 							public requiresAccount(): boolean;
// 							public disconnect(): void;
// 							public isConnected(): boolean;
// 							public providesSignIn(): boolean;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
// 							public isConnecting(): boolean;
// 							public getLastDisconnectMessage(): string;
// 							public getUseDynamicLookup(): boolean;
// 							public disconnect(param0: string): void;
// 							public getMinApkVersion(): number;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
// 							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
// 							public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
// 							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
// 							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
// 							public requiresSignIn(): boolean;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbaw {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbaw>;
// 							public static zba: com.google.android.gms.common.Feature;
// 							public static zbb: com.google.android.gms.common.Feature;
// 							public static zbc: com.google.android.gms.common.Feature;
// 							public static zbd: com.google.android.gms.common.Feature;
// 							public static zbe: com.google.android.gms.common.Feature;
// 							public static zbf: com.google.android.gms.common.Feature;
// 							public static zbg: com.google.android.gms.common.Feature;
// 							public static zbh: androidNative.Array<com.google.android.gms.common.Feature>;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbax {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbax>;
// 							public static zba(): string;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbay {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbay>;
// 							public static zba(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.Intent, param3: number): globalAndroid.app.PendingIntent;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbb {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbb>;
// 							public asBinder(): globalAndroid.os.IBinder;
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public constructor(param0: string);
// 							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbc {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbc>;
// 							public static zbb(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
// 							public static zbc(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
// 							public static zba(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator): globalAndroid.os.Parcelable;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbd extends com.google.android.gms.internal.auth-api.zbr {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbd>;
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 							public constructor(param0: string);
// 							public zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							public zbc(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbe extends com.google.android.gms.auth.api.credentials.CredentialRequestResult {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbe>;
// 							public getStatus(): com.google.android.gms.common.api.Status;
// 							public getCredential(): com.google.android.gms.auth.api.credentials.Credential;
// 							public constructor(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbf extends com.google.android.gms.internal.auth-api.zbd {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbf>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 							public zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							public zbc(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbg extends com.google.android.gms.internal.auth-api.zbm<com.google.android.gms.auth.api.credentials.CredentialRequestResult> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbg>;
// 							public setResult(param0: any): void;
// 							public zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.internal.auth-api.zbt): void;
// 							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbh extends com.google.android.gms.internal.auth-api.zbm<com.google.android.gms.common.api.Status> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbh>;
// 							public setResult(param0: any): void;
// 							public zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.internal.auth-api.zbt): void;
// 							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbi extends com.google.android.gms.internal.auth-api.zbm<com.google.android.gms.common.api.Status> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbi>;
// 							public setResult(param0: any): void;
// 							public zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.internal.auth-api.zbt): void;
// 							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbj extends com.google.android.gms.internal.auth-api.zbm<com.google.android.gms.common.api.Status> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbj>;
// 							public setResult(param0: any): void;
// 							public zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.internal.auth-api.zbt): void;
// 							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbk extends com.google.android.gms.internal.auth-api.zbd {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbk>;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 							public zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							public zbc(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbl extends com.google.android.gms.auth.api.credentials.CredentialsApi {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbl>;
// 							public constructor();
// 							public save(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
// 							public request(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): com.google.android.gms.common.api.PendingResult<com.google.android.gms.auth.api.credentials.CredentialRequestResult>;
// 							public delete(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.Credential): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
// 							public disableAutoSignIn(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
// 							public getHintPickerIntent(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.auth.api.credentials.HintRequest): globalAndroid.app.PendingIntent;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbm<R>  extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.auth-api.zbo> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbm<any>>;
// 							public setResult(param0: any): void;
// 							public zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.internal.auth-api.zbt): void;
// 							public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbn {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbn>;
// 							public static zba(param0: globalAndroid.content.Context, param1: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions, param2: com.google.android.gms.auth.api.credentials.HintRequest, param3: string): globalAndroid.app.PendingIntent;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbo extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.auth-api.zbt> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbo>;
// 							public getStartServiceAction(): string;
// 							public requiresGooglePlayServices(): boolean;
// 							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
// 							public getServiceDescriptor(): string;
// 							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getEndpointPackageName(): string;
// 							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getSignInIntent(): globalAndroid.content.Intent;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public getConnectionHint(): globalAndroid.os.Bundle;
// 							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
// 							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
// 							public requiresAccount(): boolean;
// 							public disconnect(): void;
// 							public isConnected(): boolean;
// 							public providesSignIn(): boolean;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.auth.api.Auth.AuthCredentialsOptions, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
// 							public isConnecting(): boolean;
// 							public getLastDisconnectMessage(): string;
// 							public disconnect(param0: string): void;
// 							public getMinApkVersion(): number;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
// 							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
// 							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
// 							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
// 							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
// 							public requiresSignIn(): boolean;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbp {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbp>;
// 							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth-api.zbp>;
// 							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
// 							public constructor(param0: com.google.android.gms.auth.api.credentials.Credential);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth-api.zbp> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbq>;
// 							public constructor();
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbr extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.internal.auth-api.zbs {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbr>;
// 							public constructor();
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 							public constructor(param0: string);
// 							public zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							public zbc(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbs {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbs>;
// 							/**
// 							 * Constructs a new instance of the com.google.android.gms.internal.auth-api.zbs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 							 */
// 							public constructor(implementation: {
// 								zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 								zbc(param0: com.google.android.gms.common.api.Status): void;
// 								zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							});
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.credentials.Credential): void;
// 							public zbd(param0: com.google.android.gms.common.api.Status, param1: string): void;
// 							public zbc(param0: com.google.android.gms.common.api.Status): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbt extends com.google.android.gms.internal.auth-api.zba {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbt>;
// 							public zbc(param0: com.google.android.gms.internal.auth-api.zbs, param1: com.google.android.gms.internal.auth-api.zbp): void;
// 							public zbd(param0: com.google.android.gms.internal.auth-api.zbs, param1: com.google.android.gms.auth.api.credentials.CredentialRequest): void;
// 							public zbe(param0: com.google.android.gms.internal.auth-api.zbs, param1: com.google.android.gms.internal.auth-api.zbu): void;
// 							public zbf(param0: com.google.android.gms.internal.auth-api.zbs): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbu {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbu>;
// 							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth-api.zbu>;
// 							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
// 							public constructor(param0: com.google.android.gms.auth.api.credentials.Credential);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbv extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.auth-api.zbu> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbv>;
// 							public constructor();
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbw extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.auth-api.zbz> {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbw>;
// 							public getStartServiceAction(): string;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.auth.api.identity.zbc, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
// 							public requiresGooglePlayServices(): boolean;
// 							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
// 							public getServiceDescriptor(): string;
// 							public usesClientTelemetry(): boolean;
// 							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getEndpointPackageName(): string;
// 							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public getSignInIntent(): globalAndroid.content.Intent;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
// 							public getConnectionHint(): globalAndroid.os.Bundle;
// 							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
// 							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
// 							public requiresAccount(): boolean;
// 							public disconnect(): void;
// 							public isConnected(): boolean;
// 							public providesSignIn(): boolean;
// 							/** @deprecated */
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
// 							public isConnecting(): boolean;
// 							public getLastDisconnectMessage(): string;
// 							public getUseDynamicLookup(): boolean;
// 							public disconnect(param0: string): void;
// 							public getMinApkVersion(): number;
// 							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
// 							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
// 							public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
// 							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
// 							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
// 							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
// 							public requiresSignIn(): boolean;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export abstract class zbx extends com.google.android.gms.internal.auth-api.zbb implements com.google.android.gms.internal.auth-api.zby {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbx>;
// 							public constructor();
// 							public zba(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
// 							public constructor(param0: string);
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.BeginSignInResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zby {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zby>;
// 							/**
// 							 * Constructs a new instance of the com.google.android.gms.internal.auth-api.zby interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
// 							 */
// 							public constructor(implementation: {
// 								zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.BeginSignInResult): void;
// 							});
// 							public constructor();
// 							public zbb(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.identity.BeginSignInResult): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// declare module com {
// 	export module google {
// 		export module android {
// 			export module gms {
// 				export module internal {
// 					export module auth-api {
// 						export class zbz extends com.google.android.gms.internal.auth-api.zba {
// 							public static class: java.lang.Class<com.google.android.gms.internal.auth-api.zbz>;
// 							public zbd(param0: com.google.android.gms.internal.auth-api.zbaf, param1: com.google.android.gms.auth.api.identity.SavePasswordRequest): void;
// 							public zbc(param0: com.google.android.gms.internal.auth-api.zbad, param1: com.google.android.gms.auth.api.identity.SaveAccountLinkingTokenRequest): void;
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaa>;
							public asBinder(): globalAndroid.os.IBinder;
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
				export module internal {
					export module base {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zab>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zac(param0: number, param1: globalAndroid.os.Parcel): void;
							public zaa(): globalAndroid.os.Parcel;
							public zab(param0: number, param1: globalAndroid.os.Parcel): void;
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
				export module internal {
					export module base {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zac>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zad>;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator): globalAndroid.os.Parcelable;
							public static zaa(param0: globalAndroid.os.Parcel, param1: boolean): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
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
				export module internal {
					export module base {
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zae>;
							public static zaa: com.google.android.gms.common.Feature;
							public static zab: androidNative.Array<com.google.android.gms.common.Feature>;
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
				export module internal {
					export module base {
						export class zaf {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaf>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public getChangingConfigurations(): number;
							public mutate(): globalAndroid.graphics.drawable.Drawable;
							public setAlpha(param0: number): void;
							public zaa(param0: number): void;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
							public getIntrinsicWidth(): number;
							public getOpacity(): number;
							public zaa(): globalAndroid.graphics.drawable.Drawable;
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
				export module internal {
					export module base {
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zag>;
							public setAlpha(param0: number): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public getOpacity(): number;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
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
				export module internal {
					export module base {
						export class zah {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zah>;
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
				export module internal {
					export module base {
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zai>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
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
				export module internal {
					export module base {
						export class zaj {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaj>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
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
				export module internal {
					export module base {
						export class zak extends androidx.collection.LruCache<any,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zak>;
							public constructor();
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
				export module internal {
					export module base {
						export class zal {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zal>;
							public static zaa(param0: number): void;
							public static zaa(): number;
							public onMeasure(param0: number, param1: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public static zaa(param0: globalAndroid.net.Uri): void;
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
				export module internal {
					export module base {
						export class zam {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zam>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: number, param1: number): java.util.concurrent.ExecutorService;
								zaa(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
								zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
							});
							public constructor();
							public zaa(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
							public zaa(param0: number, param1: number): java.util.concurrent.ExecutorService;
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
				export module internal {
					export module base {
						export class zan {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zan>;
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
				export module internal {
					export module base {
						export class zao {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zao>;
							public static zaa(): com.google.android.gms.internal.base.zam;
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
				export module internal {
					export module base {
						export class zap extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zap>;
							public static zaa: number;
							public static zab: number;
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
				export module internal {
					export module base {
						export class zaq extends com.google.android.gms.internal.base.zam {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaq>;
							public zaa(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
							public zaa(param0: number, param1: number): java.util.concurrent.ExecutorService;
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
				export module internal {
					export module base {
						export class zar {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zar>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module base {
						export class zas {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zas>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
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
				export module signin {
					export class SignInOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
						public static zaa: com.google.android.gms.signin.SignInOptions;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module SignInOptions {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions.zaa>;
							public constructor();
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
				export module signin {
					export module internal {
						export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zag> implements com.google.android.gms.signin.zae  {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public zab(): void;
							public getServiceDescriptor(): string;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: globalAndroid.os.Bundle, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getConnectionHint(): globalAndroid.os.Bundle;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public zaa(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public zaa(param0: com.google.android.gms.signin.internal.zae): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.signin.SignInOptions, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
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
				export module signin {
					export module internal {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaa>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa>;
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
				export module signin {
					export module internal {
						export class zab extends com.google.android.gms.signin.internal.zad {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zab>;
							public constructor();
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public zaa(param0: com.google.android.gms.signin.internal.zak): void;
							public constructor(param0: string);
							public zaa(param0: com.google.android.gms.signin.internal.zai): void;
							public zaa(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.common.api.Status): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
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
				export module signin {
					export module internal {
						export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zac>;
							public constructor();
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
				export module signin {
					export module internal {
						export abstract class zad extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.signin.internal.zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zad>;
							public constructor();
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public zaa(param0: com.google.android.gms.signin.internal.zak): void;
							public constructor(param0: string);
							public zaa(param0: com.google.android.gms.signin.internal.zai): void;
							public zaa(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.common.api.Status): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
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
				export module signin {
					export module internal {
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.signin.internal.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
								zaa(param0: com.google.android.gms.common.api.Status): void;
								zab(param0: com.google.android.gms.common.api.Status): void;
								zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
								zaa(param0: com.google.android.gms.signin.internal.zak): void;
								zaa(param0: com.google.android.gms.signin.internal.zai): void;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.signin.internal.zak): void;
							public zaa(param0: com.google.android.gms.signin.internal.zai): void;
							public zaa(param0: com.google.android.gms.common.api.Status): void;
							public zab(param0: com.google.android.gms.common.api.Status): void;
							public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
							public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
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
				export module signin {
					export module internal {
						export class zaf extends com.google.android.gms.internal.base.zab implements com.google.android.gms.signin.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaf>;
							public zaa(param0: com.google.android.gms.signin.internal.zaj, param1: com.google.android.gms.signin.internal.zae): void;
							public zaa(param0: number): void;
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
							public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zaa(): globalAndroid.os.Parcel;
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
				export module signin {
					export module internal {
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zag>;
							/**
							 * Constructs a new instance of the com.google.android.gms.signin.internal.zag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zaa(param0: number): void;
								zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
								zaa(param0: com.google.android.gms.signin.internal.zaj, param1: com.google.android.gms.signin.internal.zae): void;
							});
							public constructor();
							public zaa(param0: com.google.android.gms.signin.internal.zaj, param1: com.google.android.gms.signin.internal.zae): void;
							public zaa(param0: number): void;
							public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
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
				export module signin {
					export module internal {
						export class zah extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zai> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zah>;
							public constructor();
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
				export module signin {
					export module internal {
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zai>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zai>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: java.util.List<string>, param1: string);
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
				export module signin {
					export module internal {
						export class zaj {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaj>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.common.internal.zat);
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
				export module signin {
					export module internal {
						export class zak {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zak>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zak>;
							public zaa(): com.google.android.gms.common.ConnectionResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zab(): com.google.android.gms.common.internal.zau;
							public constructor(param0: number);
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
				export module signin {
					export module internal {
						export class zal extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zal>;
							public constructor();
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
				export module signin {
					export module internal {
						export class zam extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zak> {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zam>;
							public constructor();
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
				export module signin {
					export class zaa extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,com.google.android.gms.signin.SignInOptions> {
						public static class: java.lang.Class<com.google.android.gms.signin.zaa>;
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
				export module signin {
					export class zab {
						public static class: java.lang.Class<com.google.android.gms.signin.zab>;
						public static zaa: com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,com.google.android.gms.signin.SignInOptions>;
						public static zab: com.google.android.gms.common.api.Api<com.google.android.gms.signin.SignInOptions>;
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
				export module signin {
					export class zac extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
						public static class: java.lang.Class<com.google.android.gms.signin.zac>;
						public static zaa(): globalAndroid.os.Bundle;
						public equals(param0: any): boolean;
						public hashCode(): number;
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
				export module signin {
					export class zad extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl,com.google.android.gms.signin.zac> {
						public static class: java.lang.Class<com.google.android.gms.signin.zad>;
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
				export module signin {
					export class zae extends com.google.android.gms.common.api.Api.Client {
						public static class: java.lang.Class<com.google.android.gms.signin.zae>;
						/**
						 * Constructs a new instance of the com.google.android.gms.signin.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zaa(param0: com.google.android.gms.signin.internal.zae): void;
							zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							zaa(): void;
							zab(): void;
							connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							disconnect(param0: string): void;
							disconnect(): void;
							isConnected(): boolean;
							isConnecting(): boolean;
							getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							requiresSignIn(): boolean;
							onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							requiresAccount(): boolean;
							requiresGooglePlayServices(): boolean;
							providesSignIn(): boolean;
							getSignInIntent(): globalAndroid.content.Intent;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							getServiceBrokerBinder(): globalAndroid.os.IBinder;
							getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							getEndpointPackageName(): string;
							getMinApkVersion(): number;
							getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							getLastDisconnectMessage(): string;
						});
						public constructor();
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
						public requiresGooglePlayServices(): boolean;
						public zaa(param0: com.google.android.gms.signin.internal.zae): void;
						public requiresAccount(): boolean;
						public getServiceBrokerBinder(): globalAndroid.os.IBinder;
						public providesSignIn(): boolean;
						public zab(): void;
						public isConnected(): boolean;
						public getEndpointPackageName(): string;
						public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
						public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
						public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public getMinApkVersion(): number;
						public isConnecting(): boolean;
						public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
						public zaa(): void;
						public disconnect(): void;
						public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
						public getSignInIntent(): globalAndroid.content.Intent;
						public requiresSignIn(): boolean;
						public disconnect(param0: string): void;
						public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
						public getLastDisconnectMessage(): string;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.auth.api.signin.internal.zbl:1
//com.google.android.gms.common.api.Api:1
//com.google.android.gms.common.api.Api.AbstractClientBuilder:2
//com.google.android.gms.common.api.Api.AnyClientKey:1
//com.google.android.gms.common.api.Api.BaseClientBuilder:2
//com.google.android.gms.common.api.Api.ClientKey:1
//com.google.android.gms.common.api.BatchResultToken:1
//com.google.android.gms.common.api.DataBufferResponse:2
//com.google.android.gms.common.api.GoogleApi:1
//com.google.android.gms.common.api.HasApiKey:1
//com.google.android.gms.common.api.OptionalPendingResult:1
//com.google.android.gms.common.api.PendingResult:1
//com.google.android.gms.common.api.PendingResults.zaa:1
//com.google.android.gms.common.api.PendingResults.zab:1
//com.google.android.gms.common.api.PendingResults.zac:1
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.ApiKey:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
//com.google.android.gms.common.api.internal.GoogleApiManager.zaa:1
//com.google.android.gms.common.api.internal.ListenerHolder:1
//com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
//com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
//com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
//com.google.android.gms.common.api.internal.PendingResultFacade:2
//com.google.android.gms.common.api.internal.RegisterListenerMethod:2
//com.google.android.gms.common.api.internal.RegistrationMethods:2
//com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
//com.google.android.gms.common.api.internal.RemoteCall:2
//com.google.android.gms.common.api.internal.TaskApiCall:2
//com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
//com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
//com.google.android.gms.common.api.internal.zabl:1
//com.google.android.gms.common.api.internal.zabr:1
//com.google.android.gms.common.api.internal.zac:1
//com.google.android.gms.common.api.internal.zacc:1
//com.google.android.gms.common.api.internal.zacn:1
//com.google.android.gms.common.api.internal.zaf:1
//com.google.android.gms.common.api.internal.zah:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.internal.service.zaf:1
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.common.server.response.FastParser.zaa:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1
//com.google.android.gms.internal.auth-api.zbm:1

