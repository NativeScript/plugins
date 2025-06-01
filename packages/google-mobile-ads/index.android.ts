import { Application, Utils } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { IMobileAds, AdEventListener, RequestConfiguration, AdShowOptions, IInterstitialAd, RequestOptions, IRewardedAd, IRewardedInterstitialAd, IRewardedItem, ServerSideVerificationOptions, AdapterStatus } from '.';
import { AdEventType, BannerAdBase, RewardedAdEventType, MaxAdContentRating, unitIdProperty, BannerAdSizeBase, sizeProperty } from './common';

export { MaxAdContentRating, AdEventType };

import { MobileAdsError } from './error';

export { MobileAdsError };

export * from './adsconsent';
export * from './nativead';

@NativeClass()
class AdListener extends com.google.android.gms.ads.AdListener {
	_owner: WeakRef<BannerAd>;

	constructor(owner: WeakRef<BannerAd>) {
		super();
		this._owner = owner;
		return global.__native(this);
	}

	onAdLoaded() {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdLoadedEvent,
			object: owner,
		});
	}

	onAdClicked() {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdClickedEvent,
			object: owner,
		});
	}

	onAdFailedToLoad(error: com.google.android.gms.ads.LoadAdError) {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdFailedToLoadEvent,
			object: owner,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			error: MobileAdsError.fromNative(error as any),
		});
	}

	onAdClosed() {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdClosedEvent,
			object: owner,
		});
	}

	onAdImpression() {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdImpression,
			object: owner,
		});
	}

	onAdOpened() {
		const owner = this._owner?.get?.();
		if (!owner) {
			return;
		}
		owner.notify({
			eventName: BannerAd.onAdOpenedEvent,
			object: owner,
		});
	}
}

export class AdRequest {
	_native: com.google.android.gms.ads.AdRequest;

	static fromNative(request: com.google.android.gms.ads.AdRequest) {
		if (request instanceof com.google.android.gms.ads.AdRequest) {
			const ret = new AdRequest();
			ret._native = request;
			return ret;
		}
		return null;
	}

	get contentUrl(): string {
		return this.native.getContentUrl();
	}

	get keywords(): string[] {
		const kw = this.native.getKeywords().toArray();
		const count = kw.length;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(kw[i]);
		}
		return ret;
	}

	get neighboringContentUrls(): string[] {
		const urls = this.native.getNeighboringContentUrls();
		const count = urls.size();
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(urls.get(i));
		}
		return ret;
	}

	isTestDevice(): boolean {
		return this.native.isTestDevice(Utils.android.getApplicationContext());
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class InterstitialAd implements IInterstitialAd {
	_native: com.google.android.gms.ads.interstitial.InterstitialAd;
	_adUnitId: string;
	_requestOptions?: RequestOptions;
	_loaded = false;
	_nativeRequest: com.google.android.gms.ads.AdRequest;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): InterstitialAd {
		const ad = new InterstitialAd();
		ad._adUnitId = adUnitId;
		ad._requestOptions = requestOptions;
		return ad;
	}

	get adUnitId(): string {
		return this._adUnitId;
	}

	_setNative(value) {
		this._native = value;
	}

	_setLoaded(value) {
		this._loaded = value;
	}

	_onAdEvent?: AdEventListener;

	get loaded(): boolean {
		return this._loaded;
	}

	load(): void {
		const ref = new WeakRef(this);
		this._nativeRequest = org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.InterstitialAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this._adUnitId,
			JSON.stringify(this._requestOptions || {}),
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					switch (event) {
						case AdEventType.LOADED:
							owner._setNative?.(dataOrError);
							owner?._onAdEvent(AdEventType.LOADED, null, owner);
							owner?._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner?._onAdEvent(AdEventType.CLOSED, null, owner);
							owner?._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner?._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner?._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner?._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner?._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		this.native.show(Application.android.foregroundActivity || Application.android.startActivity);
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get request() {
		return AdRequest.fromNative(this._nativeRequest);
	}
}

export class RewardedInterstitialAd implements IRewardedInterstitialAd {
	_native: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd;
	_adUnitId: string;
	_requestOptions?: RequestOptions;
	_loaded = false;
	_nativeRequest: com.google.android.gms.ads.AdRequest;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedInterstitialAd {
		const ad = new RewardedInterstitialAd();
		ad._adUnitId = adUnitId;
		ad._requestOptions = requestOptions;
		return ad;
	}

	get adUnitId(): string {
		return this._adUnitId;
	}

	_setNative(value) {
		this._native = value;
	}

	_setLoaded(value) {
		this._loaded = value;
	}

	get loaded(): boolean {
		return this._loaded;
	}

	load(): void {
		const ref = new WeakRef(this);
		this._nativeRequest = org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedInterstitialAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this._adUnitId,
			JSON.stringify(this._requestOptions || {}),
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					switch (event) {
						case AdEventType.LOADED:
							owner._setNative?.(dataOrError);
							owner?._onAdEvent(AdEventType.LOADED, null, owner);
							owner?._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner?._onAdEvent(AdEventType.CLOSED, null, owner);
							owner?._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner?._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner?._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner?._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner?._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		const ref = new WeakRef(this);
		org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedInterstitialAd.show(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.native,
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>({
				onSuccess(reward): void {
					ref.get()?._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(reward));
				},
				onError(error): void {
					// noop
				},
			})
		);
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = new com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder();
			if (options.customData) {
				ssvo.setCustomData(options.customData);
			}
			if (options.userId) {
				ssvo.setUserId(options.userId);
			}
			this.native.setServerSideVerificationOptions(ssvo.build());
		}
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get request() {
		return AdRequest.fromNative(this._nativeRequest);
	}
}

export class RewardedAd implements IRewardedAd {
	_native: com.google.android.gms.ads.rewarded.RewardedAd;
	_adUnitId: string;
	_requestOptions?: RequestOptions;
	_loaded = false;
	_nativeRequest: com.google.android.gms.ads.AdRequest;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedAd {
		const reward = new RewardedAd();
		reward._adUnitId = adUnitId;
		reward._requestOptions = requestOptions;
		return reward;
	}

	get adUnitId(): string {
		return this._adUnitId;
	}

	get loaded(): boolean {
		return this._loaded;
	}

	_setNative(value) {
		this._native = value;
	}

	_setLoaded(value) {
		this._loaded = value;
	}

	load(): void {
		const ref = new WeakRef(this);
		this._nativeRequest = org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.adUnitId,
			JSON.stringify(this._requestOptions || {}),
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					if (!owner) {
						return;
					}
					switch (event) {
						case AdEventType.LOADED:
							owner._setNative(dataOrError);
							owner._onAdEvent(AdEventType.LOADED, null, owner);
							owner._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner._onAdEvent(AdEventType.CLOSED, null, owner);
							owner._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, MobileAdsError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		const ref = new WeakRef(this);
		org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.RewardedAd.show(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.native,
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.Callback<com.google.android.gms.ads.rewarded.RewardItem>({
				onSuccess(reward): void {
					ref.get()?._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(reward));
				},
				onError(error): void {
					// noop
				},
			})
		);
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = new com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder();
			if (options.customData) {
				ssvo.setCustomData(options.customData);
			}
			if (options.userId) {
				ssvo.setUserId(options.userId);
			}
			this.native.setServerSideVerificationOptions(ssvo.build());
		}
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get request() {
		return AdRequest.fromNative(this._nativeRequest);
	}
}

export class RewardedItem implements IRewardedItem {
	_native: com.google.android.gms.ads.rewarded.RewardItem;

	static fromNative(reward: com.google.android.gms.ads.rewarded.RewardItem) {
		if (reward instanceof com.google.android.gms.ads.rewarded.RewardItem) {
			const item = new RewardedItem();
			item._native = reward;
			return item;
		}
		return null;
	}

	get amount(): number {
		return this.native?.getAmount?.();
	}

	get type(): string {
		return this.native?.getType();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

const BANNER = lazy(() => com.google.android.gms.ads.AdSize.BANNER);
const FULL_BANNER = lazy(() => com.google.android.gms.ads.AdSize.FULL_BANNER);
const LARGE_BANNER = lazy(() => com.google.android.gms.ads.AdSize.LARGE_BANNER);
const LEADERBOARD = lazy(() => com.google.android.gms.ads.AdSize.LEADERBOARD);
const MEDIUM_RECTANGLE = lazy(() => com.google.android.gms.ads.AdSize.MEDIUM_RECTANGLE);

const FLUID = lazy(() => com.google.android.gms.ads.AdSize.FLUID);
const WIDE_SKYSCRAPER = lazy(() => com.google.android.gms.ads.AdSize.WIDE_SKYSCRAPER);
const INVALID = lazy(() => com.google.android.gms.ads.AdSize.INVALID);
const FULL_WIDTH = lazy(() => com.google.android.gms.ads.AdSize.FULL_WIDTH);
const AUTO_HEIGHT = lazy(() => com.google.android.gms.ads.AdSize.AUTO_HEIGHT);

export class BannerAdSize extends BannerAdSizeBase {
	_native: com.google.android.gms.ads.AdSize;

	constructor(width?: number, height?: number) {
		super();
		if (width && height) {
			this._native = new com.google.android.gms.ads.AdSize(width, height);
		}
	}

	static fromNative(size: com.google.android.gms.ads.AdSize) {
		const banner = new BannerAdSize();
		if (size instanceof com.google.android.gms.ads.AdSize) {
			banner._native = size;
		} else {
			banner._native = com.google.android.gms.ads.AdSize.INVALID;
		}
		return banner;
	}

	static get BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(BANNER());
	}

	static get FULL_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(FULL_BANNER());
	}

	static get LARGE_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(LARGE_BANNER());
	}

	static get LEADERBOARD(): BannerAdSize {
		return BannerAdSize.fromNative(LEADERBOARD());
	}

	static get MEDIUM_RECTANGLE(): BannerAdSize {
		return BannerAdSize.fromNative(MEDIUM_RECTANGLE());
	}

	static createAnchoredAdaptiveBanner(width: number, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		switch (orientation) {
			case 'portrait':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getPortraitAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			case 'landscape':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getLandscapeAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			default:
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
		}
	}

	static createInLineAdaptiveBanner(width: number, maxHeight = 0, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		if (maxHeight > 0) {
			BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getInlineAdaptiveBannerAdSize(width, maxHeight));
		}
		switch (orientation) {
			case 'portrait':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getPortraitInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			case 'landscape':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getLandscapeInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			default:
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getCurrentOrientationInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
		}
	}

	static get FLUID(): BannerAdSize {
		return BannerAdSize.fromNative(FLUID());
	}

	static get WIDE_SKYSCRAPER(): BannerAdSize {
		return BannerAdSize.fromNative(WIDE_SKYSCRAPER());
	}

	static get INVALID(): BannerAdSize {
		return BannerAdSize.fromNative(INVALID());
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class BannerAd extends BannerAdBase {
	_native: com.google.android.gms.ads.AdView;
	_listener;
	_nativeRequest: com.google.android.gms.ads.AdRequest;
	[sizeProperty.setNative](value) {
		if (this._native) {
			this._native.setAdSize(value?.native);
		}
	}

	[unitIdProperty.setNative](value) {
		if (this._native) {
			this._native.setAdUnitId(value);
		}
	}

	createNativeView() {
		this._native = new com.google.android.gms.ads.AdView(this._context);
		return this._native;
	}

	initNativeView() {
		super.initNativeView();
		this._listener = new AdListener(new WeakRef(this));
		this._native.setAdListener(this._listener);
	}

	load(options?: RequestOptions) {
		if (this._native) {
			this._nativeRequest = org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.BannerAd.load(JSON.stringify(options || {}), this._native);
		}
	}

	isLoading(): boolean {
		return this._native?.isLoading?.();
	}

	get request() {
		return AdRequest.fromNative(this._nativeRequest);
	}
}

export class MobileAds implements IMobileAds {
	private static _instance: MobileAds;

	static init(): Promise<{ [key: string]: AdapterStatus }> {
		return new Promise((resolve, reject) => {
			com.google.android.gms.ads.MobileAds.initialize(
				Utils.android.getApplicationContext(),
				new com.google.android.gms.ads.initialization.OnInitializationCompleteListener({
					onInitializationComplete(status: com.google.android.gms.ads.initialization.InitializationStatus) {
						let data = {};
						try {
							data = JSON.parse(org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.toJSONStatusMap(status.getAdapterStatusMap()));
						} catch (e) {
							// noop
						}
						resolve(data);
					},
				})
			);
		});
	}

	static getInstance(): MobileAds {
		return this._instance || (this._instance = new MobileAds());
	}

	set requestConfiguration(requestConfiguration: RequestConfiguration) {
		try {
			const parsedConfiguration: any = { ...requestConfiguration };
			if (typeof parsedConfiguration.tagForChildDirectedTreatment === 'boolean') {
				parsedConfiguration.tagForChildDirectedTreatment = String(parsedConfiguration.tagForChildDirectedTreatment);
			} else {
				parsedConfiguration.tagForChildDirectedTreatment = 'unspecified';
			}

			if (typeof parsedConfiguration.tagForUnderAgeOfConsent === 'boolean') {
				parsedConfiguration.tagForUnderAgeOfConsent = String(parsedConfiguration.tagForUnderAgeOfConsent);
			} else {
				parsedConfiguration.tagForUnderAgeOfConsent = 'unspecified';
			}
			org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.setRequestConfiguration(JSON.stringify(requestConfiguration));
		} catch (e) {
			// noop
		}
	}

	get requestConfiguration(): RequestConfiguration {
		const ret: RequestConfiguration = {};
		const config = com.google.android.gms.ads.MobileAds.getRequestConfiguration();

		switch (config.getTagForChildDirectedTreatment()) {
			case com.google.android.gms.ads.RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE:
				ret.tagForChildDirectedTreatment = true;
				break;
			case com.google.android.gms.ads.RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE:
				ret.tagForChildDirectedTreatment = false;
				break;
			default:
				// noop
				break;
		}

		switch (config.getTagForUnderAgeOfConsent()) {
			case com.google.android.gms.ads.RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE:
				ret.tagForUnderAgeOfConsent = true;
				break;
			case com.google.android.gms.ads.RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_FALSE:
				ret.tagForUnderAgeOfConsent = false;
				break;
			default:
				// noop
				break;
		}

		switch (config.getMaxAdContentRating()) {
			case com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_G:
				ret.maxAdContentRating = MaxAdContentRating.G;
				break;
			case com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_MA:
				ret.maxAdContentRating = MaxAdContentRating.MA;
				break;
			case com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_PG:
				ret.maxAdContentRating = MaxAdContentRating.PG;
				break;
			case com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_T:
				ret.maxAdContentRating = MaxAdContentRating.T;
				break;
			default:
				// noop
				break;
		}

		ret.testDevices = [];

		const devices = config.getTestDeviceIds();
		if (devices) {
			const count = devices.size();
			for (let i = 0; i < count; i++) {
				ret.testDevices.push(devices.get(i));
			}
		}
		return ret;
	}

	setRequestConfiguration(requestConfiguration: RequestConfiguration) {
		this.requestConfiguration = requestConfiguration;
	}
	getRequestConfiguration(): RequestConfiguration {
		return this.requestConfiguration;
	}

	get app() {
		return global?.__defaultFirebaseApp;
	}
}
