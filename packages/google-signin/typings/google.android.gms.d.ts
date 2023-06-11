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
								public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public equals(param0: any): boolean;
								public zad(): string;
								public getDisplayName(): string;
								public getIdToken(): string;
								public isExpired(): boolean;
								public getFamilyName(): string;
								public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public zac(): string;
								public static zaa(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: globalAndroid.net.Uri, param7: java.lang.Long, param8: string, param9: java.util.Set<any>): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								public hashCode(): number;
								public getId(): string;
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
							export class GoogleSignInOptions implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static zaa: com.google.android.gms.common.api.Scope;
								public static zac: com.google.android.gms.common.api.Scope;
								public static zad: com.google.android.gms.common.api.Scope;
								public static zae: com.google.android.gms.common.api.Scope;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public isForceCodeForRefreshToken(): boolean;
								public zaf(): string;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public getLogSessionId(): string;
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
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
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
								public constructor(implementation: { getExtensionType(): number; toBundle(): globalAndroid.os.Bundle; getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope> });
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
								export class Storage {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
									public zad(param0: string, param1: string): void;
									public getSavedRefreshToken(): string;
									public zac(): void;
									public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
									public zaa(param0: string): string;
									public clear(): void;
									public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
									public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
									public saveDefaultGoogleSignInAccount(param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount, param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions): void;
									public zab(param0: string): void;
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
								export class zaa {
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
							export class zab {
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
							export class zac {
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
							export class zad {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zad>;
							}
						}
					}
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
							export class zae {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zae>;
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
						public zag(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.LifecycleFragment, param2: number, param3: number, param4: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
						public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
						public zab(param0: globalAndroid.app.Activity, param1: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public checkApiAvailability(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: androidNative.Array<com.google.android.gms.common.api.GoogleApi<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static zai(param0: com.google.android.gms.common.api.HasApiKey<any>, param1: androidNative.Array<com.google.android.gms.common.api.HasApiKey<any>>): com.google.android.gms.tasks.Task;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
						public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
						public zah(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult, param2: number): boolean;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): globalAndroid.app.PendingIntent;
						public constructor();
						public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
						public getClientVersion(param0: globalAndroid.content.Context): number;
						public checkApiAvailability(param0: com.google.android.gms.common.api.HasApiKey<any>, param1: androidNative.Array<com.google.android.gms.common.api.HasApiKey<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
						public zac(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabw): com.google.android.gms.common.api.internal.zabx;
						public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
						public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getErrorString(param0: number): string;
						public getErrorDialog(param0: androidx.fragment.app.Fragment, param1: number, param2: number): globalAndroid.app.Dialog;
						public isUserResolvableError(param0: number): boolean;
					}
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
							public constructor(implementation: {});
							public constructor();
						}
						export class ColorScheme {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
						export class Api<O> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
							public constructor(param0: string, param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>, param2: com.google.android.gms.common.api.Api.ClientKey<any>);
							public zab(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
							public zaa(): com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>;
							public zac(): com.google.android.gms.common.api.Api.BaseClientBuilder<any, any>;
							public zad(): string;
						}
						export module Api {
							export abstract class AbstractClientBuilder<T, O> extends com.google.android.gms.common.api.Api.BaseClientBuilder<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>>;
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener): any;
								public constructor();
								/** @deprecated */
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): any;
							}
							export class AnyClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
							export class AnyClientKey<C> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
								public constructor();
							}
							export class ApiOptions {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { <clinit>(): void });
								public constructor();
								public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
							}
							export module ApiOptions {
								export class HasAccountOptions implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { getAccount(): globalAndroid.accounts.Account; <clinit>(): void; <clinit>(): void });
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getAccount(): globalAndroid.accounts.Account;
								}
								export class HasGoogleSignInAccountOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount; <clinit>(): void });
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
									public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
								}
								export class HasOptions extends com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { <clinit>(): void });
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
									public constructor(implementation: { <clinit>(): void });
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
								export class Optional implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { <clinit>(): void; <clinit>(): void });
									public constructor();
									public static NO_OPTIONS: com.google.android.gms.common.api.Api.ApiOptions.NoOptions;
								}
							}
							export abstract class BaseClientBuilder<T, O> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any, any>>;
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
									getMinApkVersion(): number;
									getSignInIntent(): globalAndroid.content.Intent;
									getServiceBrokerBinder(): globalAndroid.os.IBinder;
									getEndpointPackageName(): string;
									getLastDisconnectMessage(): string;
									getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
									connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
									disconnect(): void;
									disconnect(param0: string): void;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
									isConnected(): boolean;
									isConnecting(): boolean;
									providesSignIn(): boolean;
									requiresAccount(): boolean;
									requiresGooglePlayServices(): boolean;
									requiresSignIn(): boolean;
									getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
									getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								});
								public constructor();
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getEndpointPackageName(): string;
								public getLastDisconnectMessage(): string;
								public requiresGooglePlayServices(): boolean;
								public isConnected(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public getMinApkVersion(): number;
								public disconnect(): void;
								public isConnecting(): boolean;
								public providesSignIn(): boolean;
							}
							export class ClientKey<C> extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
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
							public constructor(param0: androidx.collection.ArrayMap);
							public getMessage(): string;
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
						export class BatchResultToken<R> extends java.lang.Object {
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
						export class DataBufferResponse<T, R> extends com.google.android.gms.common.api.Response<any> implements com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any, any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor();
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public release(): void;
							public isClosed(): boolean;
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
						export abstract class GoogleApi<O> extends com.google.android.gms.common.api.HasApiKey<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegistrationMethods<any, any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							/** @deprecated */
							public getContextFeatureId(): string;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
							public getLooper(): globalAndroid.os.Looper;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
							public zab(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.api.internal.zabq): com.google.android.gms.common.api.Api.Client;
							/** @deprecated */
							public doRegisterEventListener(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>): com.google.android.gms.tasks.Task;
							public getApiOptions(): any;
							public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task;
							public getApplicationContext(): globalAndroid.content.Context;
							public getContextAttributionTag(): string;
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
							public zac(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zact;
							public doWrite(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
							public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
							public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
							public doUnregisterEventListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: number): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public zaa(): number;
							public doRead(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
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
									public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
									public constructor();
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
							public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public connect(): void;
							public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public maybeSignOut(): void;
							public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
							public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public reconnect(): void;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public isConnecting(): boolean;
							public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
							public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
							public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
							public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
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
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: androidNative.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public zaa(): com.google.android.gms.common.internal.ClientSettings;
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public enableAutoManage(param0: androidx.fragment.app.FragmentActivity, param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks extends com.google.android.gms.common.api.internal.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
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
								public constructor(implementation: { onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void });
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
						export class HasApiKey<O> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.HasApiKey<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.HasApiKey<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getApiKey(): com.google.android.gms.common.api.internal.ApiKey<O> });
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
						export class OptionalModuleApi {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalModuleApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.OptionalModuleApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getOptionalFeatures(): androidNative.Array<com.google.android.gms.common.Feature> });
							public constructor();
							public getOptionalFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						}
					}
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
						export abstract class OptionalPendingResult<R> extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public get(): any;
							public constructor();
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
						export abstract class PendingResult<R> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
							public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						}
						export module PendingResult {
							export class StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onComplete(param0: com.google.android.gms.common.api.Status): void });
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
					}
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
						export abstract class ResultTransform<R, S> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any, any>>;
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
						export abstract class TransformedResult<R> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
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
							export class ApiKey<O> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiKey<any>>;
								public static getSharedApiKey(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions, param2: string): com.google.android.gms.common.api.internal.ApiKey<any>;
								public zaa(): string;
								public equals(param0: any): boolean;
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
								export abstract class ApiMethodImpl<R, A> extends com.google.android.gms.common.api.internal.BasePendingResult<any> implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any> {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>>;
									public getApi(): com.google.android.gms.common.api.Api<any>;
									public constructor();
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
								export class ResultHolder<R> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { setFailedResult(param0: com.google.android.gms.common.api.Status): void; setResult(param0: R): void });
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
							export abstract class BasePendingResult<R> extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
								public zab: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>;
								public zac: java.lang.ref.WeakReference<any>;
								public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
								public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public zam(): boolean;
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
								public setResult(param0: any): void;
								public await(): any;
								public isCanceled(): boolean;
								public isReady(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								/** @deprecated */
								public forceFailureUnlessReady(param0: com.google.android.gms.common.api.Status): void;
								public zak(): void;
								public zan(param0: com.google.android.gms.common.api.internal.zadb): void;
								public static zal(param0: com.google.android.gms.common.api.Result): void;
							}
							export module BasePendingResult {
								export class CallbackHandler<R> extends com.google.android.gms.internal.base.zau {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
									public constructor();
									public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
									public zaa(param0: com.google.android.gms.common.api.ResultCallback, param1: com.google.android.gms.common.api.Result): void;
									public handleMessage(param0: globalAndroid.os.Message): void;
									public constructor(param0: globalAndroid.os.Looper);
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
								public constructor(implementation: { onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
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
							export abstract class DataHolderNotifier<L> extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
								public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
								public onNotifyListenerFailed(): void;
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
							export abstract class DataHolderResult {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
								public mStatus: com.google.android.gms.common.api.Status;
								public mDataHolder: com.google.android.gms.common.data.DataHolder;
								public getStatus(): com.google.android.gms.common.api.Status;
								public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
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
								public zaA(): void;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
								public static zal(): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaB(param0: com.google.android.gms.common.api.GoogleApi<any>): void;
								public zaw(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): void;
								public static reportSignOut(): void;
								public zap(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.tasks.Task;
								public zaC(param0: com.google.android.gms.common.api.internal.zaae): void;
								public zax(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: number, param2: com.google.android.gms.common.api.internal.TaskApiCall<any, any>, param3: com.google.android.gms.tasks.TaskCompletionSource, param4: com.google.android.gms.common.api.internal.StatusExceptionMapper): void;
								public zao(param0: java.lang.Iterable<any>): com.google.android.gms.tasks.Task;
								public zar(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param2: number): com.google.android.gms.tasks.Task;
								public zaa(): number;
								public zaz(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public static zam(param0: globalAndroid.content.Context): com.google.android.gms.common.api.internal.GoogleApiManager;
								public zaq(param0: com.google.android.gms.common.api.GoogleApi<any>, param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>, param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>, param3: java.lang.Runnable): com.google.android.gms.tasks.Task;
							}
						}
					}
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
								public constructor(implementation: { onResult(param0: com.google.android.gms.common.api.Status): void });
								public constructor();
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
							export module IStatusCallback {
								export abstract class Stub extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.api.internal.IStatusCallback {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
									public constructor(param0: string);
									public constructor();
									public onResult(param0: com.google.android.gms.common.api.Status): void;
									public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
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
							export class ListenerHolder<L> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public clear(): void;
								public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
								public hasListener(): boolean;
							}
							export module ListenerHolder {
								export class ListenerKey<L> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
									public hashCode(): number;
									public toIdString(): string;
									public equals(param0: any): boolean;
								}
								export class Notifier<L> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { notifyListener(param0: L): void; onNotifyListenerFailed(): void });
									public constructor();
									public notifyListener(param0: L): void;
									public onNotifyListenerFailed(): void;
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
								public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
								public static createListenerHolder(param0: any, param1: java.util.concurrent.Executor, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public zab(): void;
								public static createListenerHolder(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
								public constructor();
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
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public zac(param0: string): void;
								public getLastDisconnectMessage(): string;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public isConnected(): boolean;
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
								public constructor(implementation: { onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void });
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
							export class OptionalPendingResultImpl<R> extends com.google.android.gms.common.api.OptionalPendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public get(): any;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
								public isDone(): boolean;
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
							export abstract class PendingResultFacade<A, B> extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any, any>>;
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
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
							export abstract class RegisterListenerMethod<A, L> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>>;
								public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
								public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
								public clearListener(): void;
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean);
								public zaa(): number;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>, param1: androidNative.Array<com.google.android.gms.common.Feature>, param2: boolean, param3: number);
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
							export class RegistrationMethods<A, L> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any, any>>;
								public register: com.google.android.gms.common.api.internal.RegisterListenerMethod<A, L>;
								public zaa: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>;
								public zab: java.lang.Runnable;
								public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any, any>;
							}
							export module RegistrationMethods {
								export class Builder<A, L> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any, any>>;
									public onConnectionSuspended(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public withHolder(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public unregister(param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public register(param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A, L>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
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
							export class RemoteCall<T, U> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any, any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { accept(param0: T, param1: U): void });
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
								public constructor(implementation: { onComplete(): void });
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
							export abstract class TaskApiCall<A, ResultT> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any, any>>;
								/** @deprecated */
								public constructor();
								public zab(): androidNative.Array<com.google.android.gms.common.Feature>;
								public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
								public constructor(param0: androidNative.Array<com.google.android.gms.common.Feature>, param1: boolean, param2: number);
								public zaa(): number;
								public shouldAutoResolveMissingFeatures(): boolean;
								public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any, any>;
							}
							export module TaskApiCall {
								export class Builder<A, ResultT> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any, any>>;
									public setMethodKey(param0: number): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
									public build(): com.google.android.gms.common.api.internal.TaskApiCall<A, ResultT>;
									public setFeatures(param0: androidNative.Array<com.google.android.gms.common.Feature>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
									public run(param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
									public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
									/** @deprecated */
									public execute(param0: com.google.android.gms.common.util.BiConsumer<A, com.google.android.gms.tasks.TaskCompletionSource<ResultT>>): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
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
							export abstract class UnregisterListenerMethod<A, L> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>>;
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
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa>;
								public onStop(): void;
							}
						}
					}
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
							export class zaaa extends com.google.android.gms.common.api.internal.zaca {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public static zag(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabe, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<any, any>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<any, any>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>, param9: java.util.ArrayList<any>): com.google.android.gms.common.api.internal.zaaa;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaw(): boolean;
								public zat(): void;
								public zax(): boolean;
							}
						}
					}
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
							export class zaab extends com.google.android.gms.common.api.PendingResult.StatusListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
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
							export class zaac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
								public onComplete(param0: com.google.android.gms.tasks.Task): void;
							}
						}
					}
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
							export class zaad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
								public zaf(): void;
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
							export class zaae extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zac(): void;
								public onResume(): void;
								public static zad(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.internal.GoogleApiManager, param2: com.google.android.gms.common.api.internal.ApiKey<any>): void;
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
							export class zaaf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
								public zaa(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.ApiKey<any>);
								public zab(): com.google.android.gms.tasks.TaskCompletionSource;
							}
						}
					}
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
							export class zaag extends com.google.android.gms.common.api.GoogleApiClient {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
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
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
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
							export class zaah extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
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
							export class zaai extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
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
							export class zaaj extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaj(): boolean;
							}
						}
					}
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
							export class zaak {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
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
							export class zaal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
							}
						}
					}
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
							export class zaam extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
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
							export class zaan extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
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
							export class zaao extends com.google.android.gms.common.api.internal.zaav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: java.util.Map<any, any>);
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
							export class zaap extends com.google.android.gms.common.api.internal.zaav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaaw, param1: java.util.ArrayList<any>);
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
							export class zaaq extends com.google.android.gms.common.api.internal.zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
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
							export class zaar extends com.google.android.gms.signin.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
								public zab(param0: com.google.android.gms.signin.internal.zak): void;
							}
						}
					}
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
							export class zaas {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
							}
						}
					}
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
							export class zaat implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
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
							export class zaau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
							}
						}
					}
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
							export abstract class zaav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
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
							export class zaaw extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi, param1: com.google.android.gms.common.internal.ClientSettings, param2: java.util.Map<any, any>, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaj(): boolean;
							}
						}
					}
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
							export class zaax extends com.google.android.gms.common.api.internal.zabf {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabi);
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaj(): boolean;
							}
						}
					}
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
							export class zaay extends com.google.android.gms.common.internal.zaj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
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
							export class zaaz extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
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
							export class zab extends com.google.android.gms.common.api.internal.ActivityLifecycleObserver {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zab>;
								public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
							}
						}
					}
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
							export class zaba extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
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
							export class zabb {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
							}
						}
					}
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
							export class zabc extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
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
							export class zabd extends com.google.android.gms.common.api.internal.zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
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
							export class zabe extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
								public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
								public zab(param0: globalAndroid.os.Bundle): void;
								public getContext(): globalAndroid.content.Context;
								public connect(param0: number): void;
								public zac(param0: number, param1: boolean): void;
								public connect(): void;
								public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
								public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
								public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
								public blockingConnect(): com.google.android.gms.common.ConnectionResult;
								public constructor();
								public maybeSignOut(): void;
								public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
								public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public isConnected(): boolean;
								public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
								public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public reconnect(): void;
								public static zad(param0: java.lang.Iterable<any>, param1: boolean): number;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.GoogleApiAvailability, param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>, param6: java.util.Map<any, any>, param7: java.util.List<any>, param8: java.util.List<any>, param9: java.util.Map<any, any>, param10: number, param11: number, param12: java.util.ArrayList<any>);
								public disconnect(): void;
								public isConnecting(): boolean;
								public getLooper(): globalAndroid.os.Looper;
								public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
							}
						}
					}
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
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
									zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
									zad(): void;
									zae(): void;
									zag(param0: globalAndroid.os.Bundle): void;
									zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
									zai(param0: number): void;
									zaj(): boolean;
								});
								public constructor();
								public zab(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zai(param0: number): void;
								public zae(): void;
								public zag(param0: globalAndroid.os.Bundle): void;
								public zad(): void;
								public zaa(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaj(): boolean;
							}
						}
					}
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
							export abstract class zabg {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
								public constructor(param0: com.google.android.gms.common.api.internal.zabf);
								public zaa(): void;
								public zab(param0: com.google.android.gms.common.api.internal.zabi): void;
							}
						}
					}
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
							export class zabh extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
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
							export class zabi implements com.google.android.gms.common.api.internal.zaca, com.google.android.gms.common.api.internal.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.internal.zabe, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: com.google.android.gms.common.GoogleApiAvailabilityLight, param5: java.util.Map<any, any>, param6: com.google.android.gms.common.internal.ClientSettings, param7: java.util.Map<any, any>, param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>, param9: java.util.ArrayList<any>, param10: com.google.android.gms.common.api.internal.zabz);
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaw(): boolean;
								public zat(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zax(): boolean;
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
							export class zabj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
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
							export class zabk {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
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
							export class zabl {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl>;
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
							export class zabm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
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
							export class zabn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
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
							export class zabo {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
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
							export class zabp {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp>;
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
							export class zabq implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener, com.google.android.gms.common.api.internal.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
								public zap(param0: com.google.android.gms.common.api.internal.zai): void;
								public zaA(): boolean;
								public zaf(): com.google.android.gms.common.api.Api.Client;
								public zao(): void;
								public zad(): com.google.android.gms.common.ConnectionResult;
								public zab(): number;
								public zar(param0: com.google.android.gms.common.ConnectionResult, param1: java.lang.Exception): void;
								public zah(): java.util.Map<any, any>;
								public zau(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.GoogleApiManager, param1: com.google.android.gms.common.api.GoogleApi<any>);
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zas(param0: com.google.android.gms.common.ConnectionResult): void;
								public zan(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zav(): void;
								public zaw(): void;
								public onConnectionSuspended(param0: number): void;
								public zat(param0: com.google.android.gms.common.api.internal.zal): void;
								public zaz(): boolean;
							}
						}
					}
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
							export class zabr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr>;
							}
						}
					}
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
								public toString(): string;
								public equals(param0: any): boolean;
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
							export class zabu extends com.google.android.gms.common.api.internal.zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
								public constructor(param0: com.google.android.gms.common.api.internal.GoogleApiManager, param1: com.google.android.gms.common.api.Api.Client, param2: com.google.android.gms.common.api.internal.ApiKey<any>);
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public zae(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void;
							}
						}
					}
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
							export class zabv extends com.google.android.gms.common.api.internal.zaag {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
								public zap(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public zao(param0: com.google.android.gms.common.api.internal.zada<any>): void;
								public enqueue(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
								public constructor();
								public constructor(param0: string);
								public getContext(): globalAndroid.content.Context;
								public execute(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
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
							export abstract class zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
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
							export class zabx {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zabw);
								public zaa(param0: globalAndroid.content.Context): void;
								public zab(): void;
							}
						}
					}
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
							export class zaby extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.api.internal.IStatusCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
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
							export class zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zaa(param0: com.google.android.gms.common.ConnectionResult): void; zab(param0: globalAndroid.os.Bundle): void; zac(param0: number, param1: boolean): void });
								public constructor();
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
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
							export abstract class zac extends com.google.android.gms.common.api.internal.zai {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zac>;
								public constructor(param0: number);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
							}
						}
					}
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
							export class zaca {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zaca interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zab(): com.google.android.gms.common.ConnectionResult;
									zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
									zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
									zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
									zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
									zaq(): void;
									zar(): void;
									zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
									zat(): void;
									zau(): void;
									zaw(): boolean;
									zax(): boolean;
									zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								});
								public constructor();
								public zas(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
								public zar(): void;
								public zad(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
								public zaq(): void;
								public zay(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
								public zau(): void;
								public zac(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
								public zab(): com.google.android.gms.common.ConnectionResult;
								public zaf(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zae(param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public zaw(): boolean;
								public zat(): void;
								public zax(): boolean;
							}
						}
					}
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
							export class zacb {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
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
							export class zacc extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc>;
								public static zaa(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.zacc;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zad(): com.google.android.gms.tasks.Task;
								public zac(): void;
								public onDestroy(): void;
							}
						}
					}
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
								public onComplete(param0: com.google.android.gms.tasks.Task): void;
							}
						}
					}
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
							export class zace {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
							}
						}
					}
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
								public zaa: com.google.android.gms.common.api.internal.zai;
								public zab: number;
								public zac: com.google.android.gms.common.api.GoogleApi<any>;
								public constructor(param0: com.google.android.gms.common.api.internal.zai, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
							}
						}
					}
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
								public zaa: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>;
								public zab: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>;
								public zac: java.lang.Runnable;
								public constructor(param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>, param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>, param2: java.lang.Runnable);
							}
						}
					}
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
							export class zacj {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
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
							export class zack extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
								public registerListener(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
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
							export class zacl extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
								public unregisterListener(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
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
							export class zacm {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm>;
							}
						}
					}
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
							export class zacn {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn>;
							}
						}
					}
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
							export class zacp<R> extends com.google.android.gms.common.api.PendingResult<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp<any>>;
								public constructor(param0: com.google.android.gms.common.api.Status);
								public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
								public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
								public cancel(): void;
								public isCanceled(): boolean;
								public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
								public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
								public constructor();
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
							export class zacq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
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
							export class zacr {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
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
							export class zacs {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zae(param0: com.google.android.gms.common.ConnectionResult): void; zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void });
								public constructor();
								public zae(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<any>): void;
							}
						}
					}
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
							export class zact extends com.google.android.gms.signin.internal.zac implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zact>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public zaf(): void;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public constructor();
								public zab(param0: com.google.android.gms.signin.internal.zak): void;
								public constructor(param0: string);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: com.google.android.gms.common.internal.ClientSettings);
								public zae(param0: com.google.android.gms.common.api.internal.zacs): void;
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
							export class zacu extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacu>;
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
							export class zacv extends com.google.android.gms.common.api.internal.TaskApiCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacv>;
								public doExecute(param0: com.google.android.gms.common.api.Api.AnyClient, param1: com.google.android.gms.tasks.TaskCompletionSource): void;
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
							export class zacw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacw>;
							}
						}
					}
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
							export class zacx {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacx>;
							}
						}
					}
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
							export class zacy {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacy>;
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
							export class zacz extends com.google.android.gms.internal.base.zau {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacz>;
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
								public constructor(param0: globalAndroid.os.Looper);
								public constructor(param0: com.google.android.gms.common.api.internal.zada<any>, param1: globalAndroid.os.Looper);
							}
						}
					}
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
							export abstract class zad extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zad>;
								public zaa: com.google.android.gms.tasks.TaskCompletionSource;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export class zada<R> extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any> {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zada<any>>;
								public constructor(param0: java.lang.ref.WeakReference<any>);
								public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
								public onResult(param0: com.google.android.gms.common.api.Result): void;
								public zai(param0: com.google.android.gms.common.api.PendingResult<any>): void;
								public constructor();
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
							export class zadb {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zadb>;
							}
						}
					}
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
							export class zadc {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zadc>;
								public static zaa: com.google.android.gms.common.api.Status;
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
							export class zae extends com.google.android.gms.common.api.internal.zai {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zae>;
								public zaa: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>);
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export class zaf extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaf>;
								public constructor(param0: com.google.android.gms.common.api.internal.zaci, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export class zag extends com.google.android.gms.common.api.internal.zac {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zag>;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.common.api.internal.TaskApiCall<any, any>, param2: com.google.android.gms.tasks.TaskCompletionSource, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export class zah extends com.google.android.gms.common.api.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zah>;
								public constructor(param0: number);
								public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zab(param0: com.google.android.gms.common.api.internal.zabq): androidNative.Array<com.google.android.gms.common.Feature>;
								public zaa(param0: com.google.android.gms.common.api.internal.zabq): boolean;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>, param1: com.google.android.gms.tasks.TaskCompletionSource);
								public zac(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export abstract class zai {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai>;
								public zac: number;
								public constructor(param0: number);
								public zag(param0: com.google.android.gms.common.api.internal.zaad, param1: boolean): void;
								public zad(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: java.lang.Exception): void;
								public zaf(param0: com.google.android.gms.common.api.internal.zabq): void;
							}
						}
					}
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
							export class zaj extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj>;
								public zaa: number;
								public zab: com.google.android.gms.common.api.GoogleApiClient;
								public zac: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.internal.zak, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							}
						}
					}
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
							export class zak extends com.google.android.gms.common.api.internal.zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zak>;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zae(param0: number): void;
								public static zaa(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.zak;
								public zad(param0: number, param1: com.google.android.gms.common.api.GoogleApiClient, param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
								public zac(): void;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
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
							export class zal {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zal>;
								public zac(param0: com.google.android.gms.common.api.internal.ApiKey<any>, param1: com.google.android.gms.common.ConnectionResult, param2: string): void;
								public zab(): java.util.Set<any>;
								public constructor(param0: java.lang.Iterable<any>);
								public zaa(): com.google.android.gms.tasks.Task;
							}
						}
					}
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
							export class zam {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zam>;
							}
						}
					}
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
							export class zan extends com.google.android.gms.common.api.internal.zabw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zan>;
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
							export class zao {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zao>;
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
							export abstract class zap {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zap>;
								public zaa: boolean;
								public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public zac(): void;
								public zah(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onCancel(param0: globalAndroid.content.DialogInterface): void;
								public onStop(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
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
							export class zaq {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaq>;
							}
						}
					}
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
							}
						}
					}
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
							export class zas {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zas>;
								public finalize(): void;
							}
						}
					}
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
							export class zat implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zat>;
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
								public zaa(param0: com.google.android.gms.common.api.internal.zau): void;
							}
						}
					}
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
							export class zau extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zau>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.zau interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void; onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
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
							export class zav {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zav>;
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
							export class zaw {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaw>;
							}
						}
					}
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
							export class zax extends com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zax>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
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
							export class zay {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zay>;
							}
						}
					}
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
							export class zaz extends com.google.android.gms.common.api.internal.zabz {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaz>;
								public zaa(param0: com.google.android.gms.common.ConnectionResult): void;
								public zab(param0: globalAndroid.os.Bundle): void;
								public zac(param0: number, param1: boolean): void;
							}
						}
					}
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
						}
					}
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
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.common.api.zae>;
						}
					}
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
						export class zaf<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zaf<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.Result);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
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
						export class zag<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zag<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: com.google.android.gms.common.api.Result);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
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
						export class zah<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zah<any>>;
							public constructor();
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Looper);
							public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
							public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
						}
					}
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
						export abstract class AbstractDataBuffer<T> extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public mDataHolder: com.google.android.gms.common.data.DataHolder;
							public singleRefIterator(): java.util.Iterator<any>;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public iterator(): java.util.Iterator<any>;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public getCount(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
						}
					}
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
						export class DataBuffer<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getCount(): number; getMetadata(): globalAndroid.os.Bundle; get(param0: number): T; iterator(): java.util.Iterator<T>; singleRefIterator(): java.util.Iterator<T>; close(): void; release(): void; isClosed(): boolean });
							public constructor();
							public get(param0: number): T;
							public getMetadata(): globalAndroid.os.Bundle;
							public close(): void;
							public release(): void;
							public singleRefIterator(): java.util.Iterator<T>;
							/** @deprecated */
							public isClosed(): boolean;
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
						export class DataBufferIterator<T> extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
							public zaa: com.google.android.gms.common.data.DataBuffer<any>;
							public zab: number;
							public remove(): void;
							public hasNext(): boolean;
							public next(): any;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
						}
					}
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
							public constructor(implementation: { onDataChanged(): void; onDataRangeChanged(param0: number, param1: number): void; onDataRangeInserted(param0: number, param1: number): void; onDataRangeMoved(param0: number, param1: number, param2: number): void; onDataRangeRemoved(param0: number, param1: number): void });
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
						}
						export module DataBufferObserver {
							export class Observable {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void; removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void });
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
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
						}
					}
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
						export abstract class DataBufferRef {
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
							public getString(param0: string): string;
							public zaa(param0: number): void;
							public getDataRow(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
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
						export class DataBufferSafeParcelable<T> extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
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
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList<any>;
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
							public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
							public close(): void;
							public hasColumn(param0: string): boolean;
							public hasNull(param0: string, param1: number, param2: number): boolean;
							public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
							public finalize(): void;
							public getLong(param0: string, param1: number, param2: number): number;
							public static builder(param0: androidNative.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
							public isClosed(): boolean;
							public getCount(): number;
							public zab(param0: string, param1: number, param2: number): number;
							public getStatusCode(): number;
							public getInteger(param0: string, param1: number, param2: number): number;
							public getMetadata(): globalAndroid.os.Bundle;
							public constructor(param0: androidNative.Array<string>, param1: androidNative.Array<globalAndroid.database.CursorWindow>, param2: number, param3: globalAndroid.os.Bundle);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zaa(param0: string, param1: number, param2: number): number;
							public getBoolean(param0: string, param1: number, param2: number): boolean;
							public getByteArray(param0: string, param1: number, param2: number): androidNative.Array<number>;
							public getWindowIndex(param0: number): number;
							public zad(): void;
							public zac(param0: string, param1: number, param2: number, param3: globalAndroid.database.CharArrayBuffer): void;
						}
						export module DataHolder {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
								public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
								public zaa(param0: java.util.HashMap<any, any>): com.google.android.gms.common.data.DataHolder.Builder;
								public build(param0: number): com.google.android.gms.common.data.DataHolder;
								public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
							}
						}
					}
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
						export abstract class EntityBuffer<T> extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
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
							public getCount(): number;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
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
						export class Freezable<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { freeze(): T; isDataValid(): boolean });
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
							public static freeze(param0: androidNative.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList<any>;
							public static freezeIterable(param0: java.lang.Iterable<any>): java.util.ArrayList<any>;
							public static freeze(param0: java.util.ArrayList<any>): java.util.ArrayList<any>;
						}
					}
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
						export class SingleRefDataBufferIterator<T> extends com.google.android.gms.common.data.DataBufferIterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
							public next(): any;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
						}
					}
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
						export class zaa {
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
							public zaa(param0: java.util.HashMap<any, any>): com.google.android.gms.common.data.DataHolder.Builder;
						}
					}
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
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.common.data.zac>;
						}
					}
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
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.common.data.zad>;
							public constructor(param0: string);
						}
					}
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
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.common.data.zae>;
						}
					}
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
						export class zaf {
							public static class: java.lang.Class<com.google.android.gms.common.data.zaf>;
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
							public zaj(param0: com.google.android.gms.common.images.zag): void;
						}
						export module ImageManager {
							export class ImageReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public zac(param0: com.google.android.gms.common.images.zag): void;
								public zab(param0: com.google.android.gms.common.images.zag): void;
								public zad(): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void });
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
						}
					}
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
							public getHeight(): number;
							public getWidth(): number;
							public hashCode(): number;
							public constructor(param0: number, param1: number);
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
							public getHeight(): number;
							public getWidth(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
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
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.os.ParcelFileDescriptor);
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
					export module images {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.common.images.zab>;
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: com.google.android.gms.common.images.zag);
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
					export module images {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.common.images.zac>;
							public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: boolean, param4: java.util.concurrent.CountDownLatch);
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
					export module images {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.common.images.zad>;
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
						export class zae extends com.google.android.gms.common.images.zag {
							public static class: java.lang.Class<com.google.android.gms.common.images.zae>;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
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
						export class zaf extends com.google.android.gms.common.images.zag {
							public static class: java.lang.Class<com.google.android.gms.common.images.zaf>;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
						}
					}
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
						export abstract class zag {
							public static class: java.lang.Class<com.google.android.gms.common.images.zag>;
							public zab: number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
						}
					}
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
						export class zah {
							public static class: java.lang.Class<com.google.android.gms.common.images.zah>;
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
							public uid: number;
							public packageName: string;
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
							public zae(param0: java.lang.Integer): void;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: java.util.Map<com.google.android.gms.common.api.Api<any>, com.google.android.gms.common.internal.zab>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions);
							public getGravityForPopups(): number;
							public getRealClientPackageName(): string;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<any>, param2: java.util.Map<any, any>, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: com.google.android.gms.signin.SignInOptions, param8: boolean);
							public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
							public zac(): string;
							public getViewForPopups(): globalAndroid.view.View;
							public zad(): java.util.Map<any, any>;
							public zab(): java.lang.Integer;
							public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccountOrDefault(): globalAndroid.accounts.Account;
							public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							/** @deprecated */
							public getAccountName(): string;
							public zaa(): com.google.android.gms.signin.SignInOptions;
							public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
						}
						export module ClientSettings {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
								public zac(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public build(): com.google.android.gms.common.internal.ClientSettings;
								public constructor();
								public zaa(param0: java.util.Collection<any>): com.google.android.gms.common.internal.ClientSettings.Builder;
								public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
								public zab(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
							}
						}
					}
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
						export abstract class GmsClient<T> extends com.google.android.gms.common.internal.BaseGmsClient<any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public getAccount(): globalAndroid.accounts.Account;
							public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
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
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getBindServiceExecutor(): java.util.concurrent.Executor;
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
						export class MethodInvocation {
							public static class: java.lang.Class<com.google.android.gms.common.internal.MethodInvocation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.MethodInvocation>;
							/** @deprecated */
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string, param7: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string, param7: number, param8: number);
						}
					}
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
							public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task;
							public constructor();
							public static toTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any>): com.google.android.gms.tasks.Task;
							public static toResponseTask(param0: com.google.android.gms.common.api.PendingResult<any>, param1: com.google.android.gms.common.api.Response): com.google.android.gms.tasks.Task;
						}
						export module PendingResultUtil {
							export class ResultConverter<R, T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { convert(param0: R): T });
								public constructor();
								public convert(param0: R): T;
							}
						}
					}
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
						export class TelemetryData {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryData>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.TelemetryData>;
							public constructor(param0: number, param1: java.util.List<any>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zac(param0: com.google.android.gms.common.internal.MethodInvocation): void;
							public zaa(): number;
							public zab(): java.util.List<any>;
						}
					}
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
						export class TelemetryLogging {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLogging>;
							public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.TelemetryLoggingClient;
							public static getClient(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.internal.TelemetryLoggingOptions): com.google.android.gms.common.internal.TelemetryLoggingClient;
						}
					}
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
						export class TelemetryLoggingClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.internal.TelemetryLoggingOptions> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.TelemetryLoggingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>; getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any> });
							public constructor();
							public log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>;
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
						export class TelemetryLoggingOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
							public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingOptions>;
							public hashCode(): number;
							public zaa(): globalAndroid.os.Bundle;
							public equals(param0: any): boolean;
							public static builder(): com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder;
						}
						export module TelemetryLoggingOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder>;
								public setApi(param0: string): com.google.android.gms.common.internal.TelemetryLoggingOptions.Builder;
								public build(): com.google.android.gms.common.internal.TelemetryLoggingOptions;
							}
						}
					}
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
								public static zaa: com.google.android.gms.common.internal.service.zae;
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
							export class zaa extends com.google.android.gms.common.internal.service.zaj {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaa>;
								public constructor();
								public zab(param0: number): void;
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
					export module internal {
						export module service {
							export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zab>;
							}
						}
					}
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
							export class zac extends com.google.android.gms.common.internal.service.zaf {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zac>;
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
							export class zad extends com.google.android.gms.common.internal.service.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zad>;
								public constructor();
								public zab(param0: number): void;
								public constructor(param0: string);
								public constructor(param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>);
							}
						}
					}
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
							export class zae {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zae>;
								public constructor();
								public zaa(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<any>;
							}
						}
					}
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
							export abstract class zaf extends com.google.android.gms.common.internal.service.zag {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaf>;
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
							export abstract class zag extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zag>;
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
							export class zah extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zal> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zah>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
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
							export class zai extends com.google.android.gms.internal.base.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zai>;
								public zae(param0: com.google.android.gms.common.internal.TelemetryData): void;
							}
						}
					}
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
							export abstract class zaj extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaj>;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public constructor();
								public zab(param0: number): void;
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
					export module internal {
						export module service {
							export class zak {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zak>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.service.zak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zab(param0: number): void });
								public constructor();
								public zab(param0: number): void;
							}
						}
					}
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
							export class zal extends com.google.android.gms.internal.base.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zal>;
								public zae(param0: com.google.android.gms.common.internal.service.zak): void;
							}
						}
					}
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
							export class zam extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zam>;
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
							export class zan extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zan>;
							}
						}
					}
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
							export class zao extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.common.internal.TelemetryLoggingClient {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zao>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.internal.TelemetryLoggingOptions);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public log(param0: com.google.android.gms.common.internal.TelemetryData): com.google.android.gms.tasks.Task<java.lang.Void>;
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
							export class zap extends com.google.android.gms.common.internal.GmsClient<any> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.service.zap>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.internal.TelemetryLoggingOptions, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
								public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
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
						export class zaa {
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
							public zaa(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
					}
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
						export class zaac {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaac>;
						}
					}
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
						export class zaad {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaad>;
						}
					}
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
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zab>;
							public zaa: java.util.Set<any>;
							public constructor(param0: java.util.Set<any>);
						}
					}
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
							public static zaa(param0: globalAndroid.content.Context): string;
							public static zad(param0: globalAndroid.content.Context, param1: number): string;
							public static zae(param0: globalAndroid.content.Context, param1: number): string;
							public static zac(param0: globalAndroid.content.Context, param1: number): string;
							public static zaf(param0: globalAndroid.content.Context, param1: number): string;
							public static zag(param0: globalAndroid.content.Context, param1: number): string;
							public static zab(param0: globalAndroid.content.Context): string;
						}
					}
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
						export class zad extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zad>;
							public zaa(): void;
						}
					}
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
						export class zae extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zae>;
							public zaa(): void;
						}
					}
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
						export class zaf extends com.google.android.gms.common.internal.zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaf>;
							public zaa(): void;
						}
					}
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
						export abstract class zag {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zag>;
							public constructor();
							public static zab(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
							public zaa(): void;
							public static zac(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
							public static zad(param0: com.google.android.gms.common.api.internal.LifecycleFragment, param1: globalAndroid.content.Intent, param2: number): com.google.android.gms.common.internal.zag;
						}
					}
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
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { isConnected(): boolean });
							public constructor();
							public isConnected(): boolean;
						}
					}
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
							public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.zaj);
							public zaj(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public zaf(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public zaa(): void;
							public zab(): void;
							public zad(param0: globalAndroid.os.Bundle): void;
							public zak(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public zae(param0: number): void;
							public zac(param0: com.google.android.gms.common.ConnectionResult): void;
							public zah(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public zai(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public zag(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
						}
					}
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
						export class zal {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zal>;
							public constructor();
							public zac(): void;
							public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
							public zab(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
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
						export class zam extends com.google.android.gms.internal.base.zaa {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zam>;
							public zae(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.common.internal.zax): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
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
						export class zan {
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
						export class zao extends com.google.android.gms.common.internal.zas {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zao>;
						}
					}
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
						export class zap extends com.google.android.gms.common.api.PendingResult.StatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zap>;
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
						export class zaq extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any> {
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
						export class zar extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zar>;
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
						export class zas {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zas>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zas interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
						export class zav {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zav>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zav>;
							public zaa(): com.google.android.gms.common.ConnectionResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zac(): boolean;
							public zab(): com.google.android.gms.common.internal.IAccountAccessor;
							public equals(param0: any): boolean;
							public zad(): boolean;
						}
					}
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
						export class zax {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zax>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zax>;
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
				export module common {
					export module internal {
						export class zay {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zay>;
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
						export class zaz {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zaz>;
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
					export module moduleinstall {
						export class InstallStatusListener {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.InstallStatusListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.InstallStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onInstallStatusUpdated(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void });
							public constructor();
							public onInstallStatusUpdated(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
						}
					}
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
					export module moduleinstall {
						export class ModuleAvailabilityResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
							public getAvailabilityStatus(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public areModulesAvailable(): boolean;
							public constructor(param0: boolean, param1: number);
						}
						export module ModuleAvailabilityResponse {
							export class AvailabilityStatus {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse.AvailabilityStatus>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse$AvailabilityStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
								public static STATUS_ALREADY_AVAILABLE: number;
								public static STATUS_UNKNOWN_MODULE: number;
								public static STATUS_READY_TO_DOWNLOAD: number;
							}
						}
					}
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
					export module moduleinstall {
						export class ModuleInstall {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstall>;
							public static getClient(param0: globalAndroid.app.Activity): com.google.android.gms.common.moduleinstall.ModuleInstallClient;
							public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.common.moduleinstall.ModuleInstallClient;
						}
					}
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
					export module moduleinstall {
						export class ModuleInstallClient extends com.google.android.gms.common.api.HasApiKey<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleInstallClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
								deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
								installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
								releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
							});
							public constructor();
							public deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
							public unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
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
					export module moduleinstall {
						export class ModuleInstallIntentResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
							public constructor(param0: globalAndroid.app.PendingIntent);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getPendingIntent(): globalAndroid.app.PendingIntent;
						}
					}
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
					export module moduleinstall {
						export class ModuleInstallRequest {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallRequest>;
							public getListenerExecutor(): java.util.concurrent.Executor;
							public getApis(): java.util.List<com.google.android.gms.common.api.OptionalModuleApi>;
							public getListener(): com.google.android.gms.common.moduleinstall.InstallStatusListener;
							public static newBuilder(): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
							public zaa(): boolean;
						}
						export module ModuleInstallRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder>;
								public setListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public setListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener, param1: java.util.concurrent.Executor): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public constructor();
								public addApi(param0: com.google.android.gms.common.api.OptionalModuleApi): com.google.android.gms.common.moduleinstall.ModuleInstallRequest.Builder;
								public build(): com.google.android.gms.common.moduleinstall.ModuleInstallRequest;
							}
						}
					}
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
					export module moduleinstall {
						export class ModuleInstallResponse {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: boolean);
							public getSessionId(): number;
							public areModulesAlreadyInstalled(): boolean;
							public zaa(): boolean;
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
				export module common {
					export module moduleinstall {
						export class ModuleInstallStatusCodes {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusCodes>;
							public static SUCCESS: number;
							public static UNKNOWN_MODULE: number;
							public static NOT_ALLOWED_MODULE: number;
							public static MODULE_NOT_FOUND: number;
							public static INSUFFICIENT_STORAGE: number;
							public static getStatusCodeString(param0: number): string;
						}
					}
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
					export module moduleinstall {
						export class ModuleInstallStatusUpdate {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getErrorCode(): number;
							public getProgressInfo(): com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.ProgressInfo;
							public getSessionId(): number;
							public constructor(param0: number, param1: number, param2: java.lang.Long, param3: java.lang.Long, param4: number);
							public getInstallState(): number;
						}
						export module ModuleInstallStatusUpdate {
							export class InstallState {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.InstallState>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate$InstallState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
								public static STATE_INSTALLING: number;
								public static STATE_COMPLETED: number;
								public static STATE_DOWNLOAD_PAUSED: number;
								public static STATE_CANCELED: number;
								public static STATE_UNKNOWN: number;
								public static STATE_DOWNLOADING: number;
								public static STATE_FAILED: number;
								public static STATE_PENDING: number;
							}
							export class ProgressInfo {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate.ProgressInfo>;
								public getTotalBytesToDownload(): number;
								public getBytesDownloaded(): number;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class ApiFeatureRequest {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest>;
								public constructor(param0: java.util.List<any>, param1: boolean, param2: string, param3: string);
								public static fromModuleInstallRequest(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest;
								public equals(param0: any): boolean;
								public getApiFeatures(): java.util.List<com.google.android.gms.common.Feature>;
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
				export module common {
					export module moduleinstall {
						export module internal {
							export class zaa extends com.google.android.gms.common.moduleinstall.internal.zad {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaa>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public constructor();
								public constructor(param0: string);
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zaaa extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaaa>;
								public onNotifyListenerFailed(): void;
								public notifyListener(param0: any): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zaab extends com.google.android.gms.common.moduleinstall.internal.zag {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaab>;
								public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>);
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
								public constructor();
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
					export module moduleinstall {
						export module internal {
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zab>;
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
				export module common {
					export module moduleinstall {
						export module internal {
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zac>;
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
					export module moduleinstall {
						export module internal {
							export abstract class zad extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.moduleinstall.internal.zae {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zad>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public constructor();
								public constructor(param0: string);
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zae {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zae>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.internal.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zab(param0: com.google.android.gms.common.api.Status): void; zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void; zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void; zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void });
								public constructor();
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zaf extends com.google.android.gms.internal.base.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaf>;
								public zaf(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zai(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: com.google.android.gms.common.moduleinstall.internal.zah): void;
								public zah(param0: com.google.android.gms.common.api.internal.IStatusCallback, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zae(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest): void;
								public zag(param0: com.google.android.gms.common.moduleinstall.internal.zae, param1: com.google.android.gms.common.moduleinstall.internal.ApiFeatureRequest, param2: com.google.android.gms.common.moduleinstall.internal.zah): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export abstract class zag extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.moduleinstall.internal.zah {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zag>;
								public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
								public constructor();
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
					export module moduleinstall {
						export module internal {
							export class zah {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zah>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.moduleinstall.internal.zah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void });
								public constructor();
								public zab(param0: com.google.android.gms.common.moduleinstall.ModuleInstallStatusUpdate): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zai extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zai>;
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
					export module moduleinstall {
						export module internal {
							export class zaj extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaj>;
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
					export module moduleinstall {
						export module internal {
							export class zak {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zak>;
								public then(param0: any): com.google.android.gms.tasks.Task;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zal extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zal>;
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
					export module moduleinstall {
						export module internal {
							export class zam extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zam>;
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
					export module moduleinstall {
						export module internal {
							export class zan extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zan>;
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
					export module moduleinstall {
						export module internal {
							export class zao extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zao>;
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
					export module moduleinstall {
						export module internal {
							export class zap extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zap>;
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
					export module moduleinstall {
						export module internal {
							export class zaq extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaq>;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zar extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zar>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zas extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zas>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zat extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zat>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zau extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zau>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zav extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zav>;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zaw extends com.google.android.gms.common.moduleinstall.internal.zaa {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaw>;
								public zac(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse): void;
								public zab(param0: com.google.android.gms.common.api.Status): void;
								public zae(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse): void;
								public zad(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.common.moduleinstall.ModuleInstallResponse): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zax extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zax>;
								public onResult(param0: com.google.android.gms.common.api.Status): void;
							}
						}
					}
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
					export module moduleinstall {
						export module internal {
							export class zay extends com.google.android.gms.common.api.GoogleApi<any> implements com.google.android.gms.common.moduleinstall.ModuleInstallClient {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zay>;
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public getApiKey(): com.google.android.gms.common.api.internal.ApiKey<any>;
								public constructor(param0: globalAndroid.app.Activity);
								/** @deprecated */
								public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.GoogleApi.Settings);
								public releaseModules(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
								public getInstallModulesIntent(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallIntentResponse>;
								public areModulesAvailable(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleAvailabilityResponse>;
								public deferredInstall(param0: androidNative.Array<com.google.android.gms.common.api.OptionalModuleApi>): com.google.android.gms.tasks.Task<java.lang.Void>;
								public unregisterListener(param0: com.google.android.gms.common.moduleinstall.InstallStatusListener): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public installModules(param0: com.google.android.gms.common.moduleinstall.ModuleInstallRequest): com.google.android.gms.tasks.Task<com.google.android.gms.common.moduleinstall.ModuleInstallResponse>;
								public constructor(param0: globalAndroid.content.Context);
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
					export module moduleinstall {
						export module internal {
							export class zaz extends com.google.android.gms.common.internal.GmsClient<any> {
								public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.internal.zaz>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.internal.ConnectionCallbacks, param4: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getServiceBrokerBinder(): globalAndroid.os.IBinder;
								public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
								public getEndpointPackageName(): string;
								public requiresGooglePlayServices(): boolean;
								public requiresAccount(): boolean;
								public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
								public getMinApkVersion(): number;
								public getServiceDescriptor(): string;
								public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
								public disconnect(param0: string): void;
								public getApiFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
								public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
								public requiresSignIn(): boolean;
								public getSignInIntent(): globalAndroid.content.Intent;
								public getLastDisconnectMessage(): string;
								public usesClientTelemetry(): boolean;
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
					export module moduleinstall {
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zaa>;
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
					export module moduleinstall {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zab>;
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
					export module moduleinstall {
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zac>;
						}
					}
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
					export module moduleinstall {
						export class zad {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zad>;
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
					export module moduleinstall {
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.common.moduleinstall.zae>;
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
							public zab: string;
							public zac: number;
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
							export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string, java.lang.Integer> {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
								public zad(param0: any): any;
								public zab(): number;
								public add(param0: string, param1: number): com.google.android.gms.common.server.converter.StringToIntConverter;
								public zac(param0: any): any;
								public zaa(): number;
								public constructor();
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
							export class zaa {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zaa>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa>;
								public static zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>): com.google.android.gms.common.server.converter.zaa;
								public zab(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>;
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
							export class zab {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zab>;
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
							export class zac {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zac>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zac>;
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
							export class zad {
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
						export module converter {
							export class zae {
								public static class: java.lang.Class<com.google.android.gms.common.server.converter.zae>;
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
								public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigInteger): void;
								public zar(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zaA(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string): void;
								public zaC(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.math.BigDecimal): void;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public zam(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
								public static zaD(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: any): any;
								public zay(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zaz(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigDecimal): void;
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zai(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: boolean): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zaB(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.Map<any, any>): void;
								public zaw(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: androidNative.Array<number>): void;
								public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zan(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zap(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zat(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zax(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.Map<string, string>): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: androidNative.Array<number>): void;
								public zak(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.math.BigInteger): void;
								public zav(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zaj(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zaq(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public zas(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public zau(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
								public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>): boolean;
								public getValueObject(param0: string): any;
								public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>): any;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: boolean): void;
								public zao(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: string): void;
							}
							export module FastJsonResponse {
								export class Field<I, O> extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
									public static CREATOR: com.google.android.gms.common.server.response.zaj;
									public zaa: number;
									public zac: number;
									public zag: java.lang.Class<any>;
									public constructor(param0: number, param1: boolean, param2: number, param3: boolean, param4: string, param5: number, param6: java.lang.Class<any>, param7: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>);
									public zae(param0: any): any;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public static forConcreteTypeArray(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
									public static forBoolean(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean, java.lang.Boolean>;
									public zaj(): boolean;
									public zab(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
									public toString(): string;
									public zaf(param0: any): any;
									public static forLong(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long, java.lang.Long>;
									public static forStrings(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>, java.util.ArrayList<string>>;
									public static forFloat(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float, java.lang.Float>;
									public zai(param0: com.google.android.gms.common.server.response.zan): void;
									public getSafeParcelableFieldId(): number;
									public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string, string>;
									public static forStringMap(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.HashMap<string, string>, java.util.HashMap<string, string>>;
									public static forDouble(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double, java.lang.Double>;
									public zad(): com.google.android.gms.common.server.response.FastJsonResponse;
									public static forBase64(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<androidNative.Array<number>, androidNative.Array<number>>;
									public static forConcreteType(param0: string, param1: number, param2: java.lang.Class<any>): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
									public static forInteger(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer, java.lang.Integer>;
									public static withConverter(param0: string, param1: number, param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>, param3: boolean): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
									public zah(): java.util.Map<any, any>;
								}
								export class FieldConverter<I, O> extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { zaa(): number; zab(): number; zac(param0: any): any; zad(param0: any): any });
									public constructor();
									public zad(param0: any): any;
									public zac(param0: any): any;
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
							export class FastParser<T> extends java.lang.Object {
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
							}
						}
					}
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
								public zar(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public setIntegerInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.math.BigDecimal): void;
								public static from(param0: com.google.android.gms.common.server.response.FastJsonResponse): com.google.android.gms.common.server.response.SafeParcelResponse;
								public addConcreteTypeInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: com.google.android.gms.common.server.response.FastJsonResponse): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zaE(): globalAndroid.os.Parcel;
								public zaz(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringsInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<string>): void;
								public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setLongInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public zaw(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zan(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
								public constructor(param0: com.google.android.gms.common.server.response.zan, param1: string);
								public zap(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zat(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public setStringMapInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.Map<string, string>): void;
								public constructor();
								public getFieldMappings(): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
								public setDecodedBytesInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: androidNative.Array<number>): void;
								public zak(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.math.BigInteger): void;
								public addConcreteTypeArrayInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: java.util.ArrayList<any>): void;
								public isPrimitiveFieldSet(param0: string): boolean;
								public getValueObject(param0: string): any;
								public setBooleanInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: boolean): void;
								public setStringInternal(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: string): void;
							}
						}
					}
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
							export class zaa extends com.google.android.gms.common.server.response.zai {
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
							export class zab extends com.google.android.gms.common.server.response.zai {
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
							export class zac extends com.google.android.gms.common.server.response.zai {
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
							export class zad extends com.google.android.gms.common.server.response.zai {
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
							export class zae extends com.google.android.gms.common.server.response.zai {
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
							export class zaf extends com.google.android.gms.common.server.response.zai {
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
							export class zag extends com.google.android.gms.common.server.response.zai {
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
							export class zah extends com.google.android.gms.common.server.response.zai {
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
							export class zai {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zai>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.server.response.zai interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { zaa(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any });
								public constructor();
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
							export class zaj {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaj>;
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
							export class zak {
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
							export class zan {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zan>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zan>;
								public toString(): string;
								public zab(param0: string): java.util.Map<any, any>;
								public zaa(): string;
								public zac(): void;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public zae(param0: java.lang.Class<any>, param1: java.util.Map<any, any>): void;
								public zad(): void;
								public constructor(param0: java.lang.Class<any>);
								public zaf(param0: java.lang.Class<any>): boolean;
							}
						}
					}
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
							export class zao {
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
							export class zap {
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
						export module response {
							export class zaq {
								public static class: java.lang.Class<com.google.android.gms.common.server.response.zaq>;
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
						export class zaa {
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
				export module common {
					export class zac extends com.google.android.gms.internal.base.zau {
						public static class: java.lang.Class<com.google.android.gms.common.zac>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: com.google.android.gms.common.GoogleApiAvailability, param1: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
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
					export abstract class DeferredLifecycleHelper<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
						public constructor();
						public onResume(): void;
						public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
						public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
						public onLowMemory(): void;
						public onStop(): void;
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
					export class zaa {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaa>;
						public onDelegateCreated(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zab extends com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zab>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zac extends com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zac>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zad extends com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zad>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zae {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zae>;
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
					export class zaf extends com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zaf>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zag extends com.google.android.gms.dynamic.zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zag>;
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
					export class zah {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zah>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.zah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { zaa(): number; zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void });
						public constructor();
						public zaa(): number;
						public zab(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
					}
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
						export class zaa {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaa>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public zab(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public zad(param0: number, param1: globalAndroid.os.Parcel): void;
							public zac(param0: number, param1: globalAndroid.os.Parcel): void;
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
				export module internal {
					export module base {
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zab>;
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
						export class zac {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zac>;
							public static zac(param0: globalAndroid.os.Parcel, param1: boolean): void;
							public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
							public static zad(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
							public static zab(param0: globalAndroid.os.Parcel): void;
							public static zae(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
						}
					}
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
						export class zae {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zae>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
						export class zaf {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaf>;
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
						export class zag {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zag>;
						}
					}
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
						export class zai {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zai>;
							public setAlpha(param0: number): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public getOpacity(): number;
							public draw(param0: globalAndroid.graphics.Canvas): void;
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
						export class zak {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zak>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public getChangingConfigurations(): number;
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public mutate(): globalAndroid.graphics.drawable.Drawable;
							public setAlpha(param0: number): void;
							public zab(param0: number): void;
							public getIntrinsicWidth(): number;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
							public zac(): boolean;
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
						export class zal {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zal>;
							public onMeasure(param0: number, param1: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
						}
					}
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
							/** @deprecated */
							public static zaa(param0: globalAndroid.content.Context, param1: globalAndroid.content.BroadcastReceiver, param2: globalAndroid.content.IntentFilter): globalAndroid.content.Intent;
						}
					}
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
						export class zap {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zap>;
							public static zaa: number;
						}
					}
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
						export class zaq {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zaq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.base.zaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService; zab(param0: number, param1: number): java.util.concurrent.ExecutorService; zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService });
							public constructor();
							public zab(param0: number, param1: number): java.util.concurrent.ExecutorService;
							public zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
						}
					}
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
						}
					}
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
						export class zas extends com.google.android.gms.internal.base.zaq {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zas>;
							public zab(param0: number, param1: number): java.util.concurrent.ExecutorService;
							public zac(param0: number, param1: java.util.concurrent.ThreadFactory, param2: number): java.util.concurrent.ExecutorService;
							public zaa(param0: java.util.concurrent.ThreadFactory, param1: number): java.util.concurrent.ExecutorService;
						}
					}
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
						export class zat {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zat>;
							public static zaa(): com.google.android.gms.internal.base.zaq;
						}
					}
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
						export class zau {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zau>;
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
				export module internal {
					export module base {
						export class zav {
							public static class: java.lang.Class<com.google.android.gms.internal.base.zav>;
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
				export module signin {
					export class SignInOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
						public static zaa: com.google.android.gms.signin.SignInOptions;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
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
						export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zaf> implements com.google.android.gms.signin.zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
							public getStartServiceAction(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailability, param4: number, param5: com.google.android.gms.common.internal.ClientSettings, param6: com.google.android.gms.common.api.internal.ConnectionCallbacks, param7: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public getServiceBrokerBinder(): globalAndroid.os.IBinder;
							public requiresGooglePlayServices(): boolean;
							public zab(): void;
							public getServiceDescriptor(): string;
							public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getEndpointPackageName(): string;
							public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							public getSignInIntent(): globalAndroid.content.Intent;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public zad(param0: com.google.android.gms.signin.internal.zae): void;
							public zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number, param3: com.google.android.gms.common.internal.ClientSettings);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: boolean, param3: com.google.android.gms.common.internal.ClientSettings, param4: globalAndroid.os.Bundle, param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public requiresAccount(): boolean;
							public disconnect(): void;
							public zaa(): void;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public isConnecting(): boolean;
							public getLastDisconnectMessage(): string;
							public disconnect(param0: string): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: com.google.android.gms.common.internal.ClientSettings, param4: com.google.android.gms.common.api.internal.ConnectionCallbacks, param5: com.google.android.gms.common.api.internal.OnConnectionFailedListener);
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
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
						export class zab {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zab>;
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
						export class zac extends com.google.android.gms.signin.internal.zad {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zac>;
							public constructor();
							public constructor(param0: string);
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
						}
					}
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
						export abstract class zad extends com.google.android.gms.internal.base.zab implements com.google.android.gms.signin.internal.zae {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zad>;
							public constructor();
							public zaa(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public constructor(param0: string);
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
						}
					}
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
							public constructor(implementation: { zab(param0: com.google.android.gms.signin.internal.zak): void });
							public constructor();
							public zab(param0: com.google.android.gms.signin.internal.zak): void;
						}
					}
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
						export class zaf extends com.google.android.gms.internal.base.zaa {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaf>;
							public zaf(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
							public zag(param0: com.google.android.gms.signin.internal.zai, param1: com.google.android.gms.signin.internal.zae): void;
							public zae(param0: number): void;
						}
					}
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
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zag>;
							public constructor(param0: java.util.List<any>, param1: string);
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
						export class zah {
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
						export class zaj {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zaj>;
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
						export class zak {
							public static class: java.lang.Class<com.google.android.gms.signin.internal.zak>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zak>;
							public zaa(): com.google.android.gms.common.ConnectionResult;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zab(): com.google.android.gms.common.internal.zav;
						}
					}
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
						export class zal {
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
					export class zaa extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any> {
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
					export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any> {
						public static class: java.lang.Class<com.google.android.gms.signin.zab>;
					}
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
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
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
					export class zad {
						public static class: java.lang.Class<com.google.android.gms.signin.zad>;
						public static zaa: com.google.android.gms.common.api.Api.ClientKey<any>;
						public static zab: com.google.android.gms.common.api.Api.ClientKey<any>;
						public static zac: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>;
						public static zae: com.google.android.gms.common.api.Scope;
						public static zaf: com.google.android.gms.common.api.Scope;
						public static zag: com.google.android.gms.common.api.Api<any>;
						public static zah: com.google.android.gms.common.api.Api<any>;
					}
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
							zaa(): void;
							zab(): void;
							zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
							zad(param0: com.google.android.gms.signin.internal.zae): void;
							getMinApkVersion(): number;
							getSignInIntent(): globalAndroid.content.Intent;
							getServiceBrokerBinder(): globalAndroid.os.IBinder;
							getEndpointPackageName(): string;
							getLastDisconnectMessage(): string;
							getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
							connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							disconnect(): void;
							disconnect(param0: string): void;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
							getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							isConnected(): boolean;
							isConnecting(): boolean;
							providesSignIn(): boolean;
							requiresAccount(): boolean;
							requiresGooglePlayServices(): boolean;
							requiresSignIn(): boolean;
							getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
							getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						});
						public constructor();
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: androidNative.Array<string>): void;
						public requiresGooglePlayServices(): boolean;
						public requiresAccount(): boolean;
						public getServiceBrokerBinder(): globalAndroid.os.IBinder;
						public providesSignIn(): boolean;
						public zab(): void;
						public getEndpointPackageName(): string;
						public isConnected(): boolean;
						public zac(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
						public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
						public getMinApkVersion(): number;
						public getRequiredFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
						public isConnecting(): boolean;
						public zaa(): void;
						public disconnect(): void;
						public getAvailableFeatures(): androidNative.Array<com.google.android.gms.common.Feature>;
						public zad(param0: com.google.android.gms.signin.internal.zae): void;
						public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
						public getSignInIntent(): globalAndroid.content.Intent;
						public requiresSignIn(): boolean;
						public getLastDisconnectMessage(): string;
						public getScopesForConnectionlessNonSignIn(): java.util.Set<com.google.android.gms.common.api.Scope>;
						public disconnect(param0: string): void;
					}
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
					export class zaf {
						public static class: java.lang.Class<com.google.android.gms.signin.zaf>;
					}
				}
			}
		}
	}
}

//Generics information:
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
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.ApiKey:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
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
//com.google.android.gms.common.api.internal.zacp:1
//com.google.android.gms.common.api.internal.zada:1
//com.google.android.gms.common.api.zaf:1
//com.google.android.gms.common.api.zag:1
//com.google.android.gms.common.api.zah:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1
