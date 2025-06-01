import { IInterstitialAd, IRewardedAd, BannerAdBase, BannerAdSizeBase, IRewardedInterstitialAd, RewardedAdEventType, MaxAdContentRating, ServerSideVerificationOptions } from './common';

export { MaxAdContentRating, RewardedAdEventType };

export type AdEventListener = (type: AdEventType | RewardedAdEventType, error?: Error, data?: any | IRewardedItem) => void;

export * from './adsconsent';
export * from './nativead';
export * from './error';

export interface AdShowOptions {
	immersiveModeEnabled: undefined | false | true;
}

export interface RequestConfiguration {
	maxAdContentRating?: MaxAdContentRating.G | MaxAdContentRating.PG | MaxAdContentRating.T | MaxAdContentRating.MA;
	tagForChildDirectedTreatment?: undefined | false | true;
	tagForUnderAgeOfConsent?: undefined | false | true;
	testDevices?: string[];
}

export interface RequestOptions {
	contentUrl?: undefined | string;
	keywords?: string[];
	networkExtras?: undefined | { [key: string]: string };
	requestAgent?: undefined | string;
	requestNonPersonalizedAdsOnly?: undefined | false | true;
}

export interface ManagerRequestOptions extends RequestOptions {
	publisherProvidedId?: string;
	customTargeting?: { [key: string]: string | string[] };
	categoryExclusions?: string[];
	adString?: string;
}

export interface IRewardedItem {
	amount: number;
	type: string;
}

export interface TestIds {
	BANNER: string;
	INTERSTITIAL: string;
	REWARDED: string;
}

export interface IMobileAds {
	setRequestConfiguration(requestConfiguration: RequestConfiguration);
}

export interface AdapterStatus {
	description: string;
	latency: number;
	initializationState: AdapterStatusState;
}

export interface IMobileAd {
	adUnitId: string;
	loaded: boolean;

	load(): void;

	onAdEvent(listener?: AdEventListener);

	show(showOptions?: AdShowOptions);
}

export interface IRewardedInterstitialAd extends IInterstitialAd {
	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;
}

export interface ServerSideVerificationOptions {
	userId: string;
	customData: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInterstitialAd extends IMobileAd {}

export interface IRewardedAd extends IMobileAd {
	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;
}

export declare class AdRequest {
	readonly contentUrl: string;

	readonly keywords: string[];

	readonly neighboringContentUrls: string[];

	readonly native: any;
	readonly android: any;
	readonly ios: any;

	isTestDevice(): boolean;
}

export declare class InterstitialAd implements IInterstitialAd {
	static createForAdRequest(adUnitId: string): InterstitialAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): InterstitialAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedInterstitialAd implements IRewardedInterstitialAd {
	static createForAdRequest(adUnitId: string): RewardedInterstitialAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedInterstitialAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedAd implements IRewardedAd {
	static createForAdRequest(adUnitId: string): RewardedAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedItem implements IRewardedItem {
	readonly amount: number;

	readonly type: string;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class BannerAd extends BannerAdBase {
	size: BannerAdSize;

	unitId: string;

	load(options?: RequestOptions);

	isLoading(): boolean;

	on(event: 'adClicked', callback: (args: any) => void, thisArg?: any): any;
	on(event: 'adLoaded', callback: (args: any) => void, thisArg?: any): any;
	on(event: 'adClosed', callback: (args: any) => void, thisArg?: any): any;
	on(event: 'adImpression', callback: (args: any) => void, thisArg?: any): any;
	on(event: 'adFailedToLoad', callback: (args: any) => void, thisArg?: any): any;
}

export declare class BannerAdSize extends BannerAdSizeBase {
	constructor(width: number, height: number);

	static readonly BANNER: BannerAdSize;

	static readonly FULL_BANNER: BannerAdSize;

	static readonly LARGE_BANNER: BannerAdSize;

	static readonly LEADERBOARD: BannerAdSize;

	static readonly MEDIUM_RECTANGLE: BannerAdSize;

	static readonly FLUID: BannerAdSize;

	static readonly WIDE_SKYSCRAPER: BannerAdSize;

	static readonly INVALID: BannerAdSize;

	static createAnchoredAdaptiveBanner(width: number, orientation: 'portrait' | 'landscape' | 'device'): BannerAdSize;

	static createInLineAdaptiveBanner(width: number, maxHeight: number, orientation: 'portrait' | 'landscape' | 'device'): BannerAdSize;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class MobileAds implements IMobileAds {
	readonly app: any;

	static init(): Promise<{ [key: string]: AdapterStatus }>;

	static getInstance(): MobileAds;

	requestConfiguration: RequestConfiguration;

	/**
	 * @deprecated Use requestConfiguration
	 */
	setRequestConfiguration(requestConfiguration: RequestConfiguration);

	/**
	 * @deprecated Use requestConfiguration
	 */
	getRequestConfiguration(requestConfiguration: RequestConfiguration);
}

export enum AdapterStatusState {
	NOT_READY,
	READY,
}

export interface AdapterStatus {
	description: string;
	latency: number;
	initializationState: AdapterStatusState;
}
