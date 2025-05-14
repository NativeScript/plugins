declare module org {
	export module nativescript {
		export module firebase {
			export module admob {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.admob.BuildConfig>;
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
		export module firebase {
			export module admob {
				export class FirebaseAdmob {
					public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob>;
					public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.Companion;
					public static toJSONStatusMap(param0: java.util.Map<string, any>): string;
					public constructor();
					public static setRequestConfiguration(param0: string): void;
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
					public static getBitmap(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
				}
				export module FirebaseAdmob {
					export class AdCallback {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$AdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: string, param1: any): void });
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class AdConsent {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.Companion;
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.ump.ConsentForm, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
						public constructor();
						public static reset(param0: globalAndroid.content.Context): void;
						public static load(param0: globalAndroid.content.Context, param1: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>): void;
						public static getStatus(param0: globalAndroid.content.Context): string;
						public static requestInfoUpdate(param0: globalAndroid.app.Activity, param1: string, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
					}
					export module AdConsent {
						export class AdsConsentDebugGeography {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography>;
							public static DISABLED: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static EEA: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static NOT_EEA: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography>;
							public toString(): string;
							public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.Companion>;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.ump.ConsentForm, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
							public getStatus(param0: globalAndroid.content.Context): string;
							public requestInfoUpdate(param0: globalAndroid.app.Activity, param1: string, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
							public load(param0: globalAndroid.content.Context, param1: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>): void;
							public reset(param0: globalAndroid.content.Context): void;
						}
					}
					export class AdLoaderCallback {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$AdLoaderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: string, param1: any): void });
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class BannerAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.BannerAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.BannerAd.Companion;
						public constructor();
						public static load(param0: string, param1: com.google.android.gms.ads.BaseAdView): com.google.android.gms.ads.AdRequest;
					}
					export module BannerAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.BannerAd.Companion>;
							public load(param0: string, param1: com.google.android.gms.ads.BaseAdView): com.google.android.gms.ads.AdRequest;
						}
					}
					export class Callback<T> extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: T): void; onError(param0: any): void });
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Companion>;
						public setRequestConfiguration(param0: string): void;
						public setExecutorsCount(param0: number): void;
						public toJSONStatusMap(param0: java.util.Map<string, any>): string;
						public getExecutorsCount(): number;
					}
					export class InterstitialAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd.Companion;
						public constructor();
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
					}
					export module InterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
						}
					}
					export class MaxAdContentRating {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating>;
						public static G: org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public static PG: org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public static T: org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public static MA: org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public static UNSPECIFIED: org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating>;
						public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.MaxAdContentRating;
						public toString(): string;
					}
					export class NativeAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion;
						public static createLoader(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
						public constructor();
						public static load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: boolean): com.google.android.gms.ads.AdRequest;
						public static load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: number): com.google.android.gms.ads.AdRequest;
					}
					export module NativeAd {
						export class BannerAdSize {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize>;
							public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize.Companion;
							public static BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static FLUID: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static FULL_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static LARGE_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static LEADERBOARD: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static MEDIUM_RECTANGLE: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static SMART_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static WIDE_SKYSCRAPER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static INVALID: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public static SEARCH: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							public toAdSize(): com.google.android.gms.ads.AdSize;
							public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize>;
							public toString(): string;
							public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
						}
						export module BannerAdSize {
							export class Companion {
								public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize.Companion>;
								public fromString(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize;
							}
							export class WhenMappings {
								public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.BannerAdSize.WhenMappings>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion>;
							public load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: number): com.google.android.gms.ads.AdRequest;
							public load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: boolean): com.google.android.gms.ads.AdRequest;
							public createLoader(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
						}
					}
					export class RequestConfiguration {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration>;
						public static MaxAdContentRating: org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration;
						public static TagForChildDirectedTreatment: org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration;
						public static TagForUnderAgeOfConsent: org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration;
						public static TestDevices: org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration;
						public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration>;
						public toString(): string;
						public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.RequestConfiguration;
					}
					export class RewardedAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.Companion;
						public constructor();
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewarded.RewardedAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
					}
					export module RewardedAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewarded.RewardedAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
					export class RewardedInterstitialAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.Companion;
						public constructor();
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
					}
					export module RewardedInterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): com.google.android.gms.ads.AdRequest;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module firebase {
			export module admob {
				export class FirebaseAdmobKt {
					public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmobKt>;
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.admob.FirebaseAdmob.Callback:1
