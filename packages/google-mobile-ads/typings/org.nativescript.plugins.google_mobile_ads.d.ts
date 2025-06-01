declare module org {
	export module nativescript {
		export module plugins {
			export module google_mobile_ads {
				export class GoogleMobileAds {
					public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds>;
					public static setRequestConfiguration(configuration: string): void;
					public constructor();
					public static toJSONStatusMap(status: java.util.Map<string, any>): string;
					public static getExecutorsCount(): number;
					public static getBitmap(drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
					public static setExecutorsCount(value: number): void;
				}
				export module GoogleMobileAds {
					export class AdCallback {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.plugins.google_mobile_ads.GoogleMobileAds$AdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: string, param1: any): void });
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class AdConsent {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent>;
						public static requestInfoUpdate(activity: globalAndroid.app.Activity, parameters: string, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<java.lang.Void>): void;
						public constructor();
						public static getStatus(context: globalAndroid.content.Context): string;
						public static show(activity: globalAndroid.app.Activity, form: com.google.android.ump.ConsentForm, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<java.lang.Void>): void;
						public static reset(context: globalAndroid.content.Context): void;
						public static load(context: globalAndroid.content.Context, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.ump.ConsentForm>): void;
					}
					export module AdConsent {
						export class AdsConsentDebugGeography {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography>;
							public static DISABLED: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography;
							public static EEA: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography;
							public static NOT_EEA: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography;
							public static values(): androidNative.Array<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography>;
							public static getEntries(): any;
							public toString(): string;
							public static valueOf(value: string): org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.AdsConsentDebugGeography;
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdConsent.Companion>;
							public load(context: globalAndroid.content.Context, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.ump.ConsentForm>): void;
							public show(activity: globalAndroid.app.Activity, form: com.google.android.ump.ConsentForm, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<java.lang.Void>): void;
							public requestInfoUpdate(i: globalAndroid.app.Activity, value: string, deviceIds: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<java.lang.Void>): void;
							public getStatus(context: globalAndroid.content.Context): string;
							public reset(context: globalAndroid.content.Context): void;
						}
					}
					export class AdLoaderCallback {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdLoaderCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.plugins.google_mobile_ads.GoogleMobileAds$AdLoaderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: string, param1: any): void });
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class BannerAd {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.BannerAd>;
						public constructor();
						public static load(request: string, baseAdView: com.google.android.gms.ads.BaseAdView): com.google.android.gms.ads.AdRequest;
					}
					export module BannerAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.BannerAd.Companion>;
							public load(this_: string, request: com.google.android.gms.ads.BaseAdView): com.google.android.gms.ads.AdRequest;
						}
					}
					export class Callback<T> extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.plugins.google_mobile_ads.GoogleMobileAds$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: T): void; onError(param0: any): void });
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Companion>;
						public setRequestConfiguration(i: string): void;
						public toJSONStatusMap(entry: java.util.Map<string, any>): string;
						public setExecutorsCount(value: number): void;
						public getBitmap(drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
						public getExecutorsCount(): number;
					}
					export class InterstitialAd {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.InterstitialAd>;
						public constructor();
						public static load(activity: globalAndroid.app.Activity, adUnitId: string, request: string, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
					}
					export module InterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.InterstitialAd.Companion>;
							public load(this_: globalAndroid.app.Activity, activity: string, adUnitId: string, request: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
						}
					}
					export class MaxAdContentRating {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating>;
						public static G: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public static PG: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public static T: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public static MA: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public static UNSPECIFIED: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public static getEntries(): any;
						public static values(): androidNative.Array<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating>;
						public static valueOf(value: string): org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.MaxAdContentRating;
						public toString(): string;
					}
					export class NativeAd {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd>;
						public constructor();
						public static load(adLoader: com.google.android.gms.ads.AdLoader, request: string, maxAdsCount: number): com.google.android.gms.ads.AdRequest;
						public static createLoader(activity: globalAndroid.app.Activity, adUnitId: string, configuration: string, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
						public static load(adLoader: com.google.android.gms.ads.AdLoader, request: string, isAdManager: boolean): com.google.android.gms.ads.AdRequest;
					}
					export module NativeAd {
						export class BannerAdSize {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize>;
							public static BANNER: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static FLUID: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static FULL_BANNER: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static LARGE_BANNER: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static LEADERBOARD: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static MEDIUM_RECTANGLE: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static SMART_BANNER: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static WIDE_SKYSCRAPER: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static INVALID: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public toAdSize(): com.google.android.gms.ads.AdSize;
							public static valueOf(value: string): org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							public static getEntries(): any;
							public toString(): string;
							public static values(): androidNative.Array<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize>;
						}
						export module BannerAdSize {
							export class Companion {
								public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize.Companion>;
								public fromString(value: string): org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize;
							}
							export class WhenMappings {
								public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.BannerAdSize.WhenMappings>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.Companion>;
							public createLoader(videoOptions: globalAndroid.app.Activity, it: string, value: string, nativeAdOptions: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
							public load(this_: com.google.android.gms.ads.AdLoader, adLoader: string, request: number): com.google.android.gms.ads.AdRequest;
							public load(this_: com.google.android.gms.ads.AdLoader, adLoader: string, request: boolean): com.google.android.gms.ads.AdRequest;
						}
					}
					export class RequestConfiguration {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration>;
						public static MaxAdContentRating: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration;
						public static TagForChildDirectedTreatment: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration;
						public static TagForUnderAgeOfConsent: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration;
						public static TestDevices: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration;
						public static values(): androidNative.Array<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration>;
						public static valueOf(value: string): org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RequestConfiguration;
						public toString(): string;
						public static getEntries(): any;
					}
					export class RewardedAd {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedAd>;
						public constructor();
						public static show(activity: globalAndroid.app.Activity, ad: com.google.android.gms.ads.rewarded.RewardedAd, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						public static load(activity: globalAndroid.app.Activity, adUnitId: string, request: string, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
					}
					export module RewardedAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedAd.Companion>;
							public load(this_: globalAndroid.app.Activity, activity: string, adUnitId: string, request: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
							public show(activity: globalAndroid.app.Activity, ad: com.google.android.gms.ads.rewarded.RewardedAd, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
					export class RewardedInterstitialAd {
						public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedInterstitialAd>;
						public static show(activity: globalAndroid.app.Activity, ad: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						public constructor();
						public static load(activity: globalAndroid.app.Activity, adUnitId: string, request: string, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
					}
					export module RewardedInterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedInterstitialAd.Companion>;
							public load(this_: globalAndroid.app.Activity, activity: string, adUnitId: string, request: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback): com.google.android.gms.ads.AdRequest;
							public show(activity: globalAndroid.app.Activity, ad: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, callback: org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback:1
