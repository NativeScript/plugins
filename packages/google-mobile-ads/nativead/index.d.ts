import { ImageSource, CoreTypes, AddChildFromBuilder } from '@nativescript/core';
import { FirebaseError } from '@nativescript/firebase-core';
import { AdEventListener, AdEventType, ManagerRequestOptions, RequestOptions } from '../common';
import { topViewController, toSerializeManagerRequestOptions, toSerializeRequestOptions } from '../utils';
import { AdChoicesPlacement, MediaAspectRatio, MediaViewBase, NativeAdEventListener, NativeAdEventType, VideoStatus } from './common';

export { VideoStatus, AdEventType, AdChoicesPlacement, MediaAspectRatio, NativeAdEventType };

export interface IMediaContent {
	aspectRatio: number;
	currentTime: number;
	duration: number;
	mainImage: any;
	hasVideoContent: boolean;
}

export interface IVideoController {
	status: VideoStatus;

	clickToExpandEnabled(): boolean;

	customControlsEnabled(): boolean;

	pause(): void;

	play(): void;

	mute: boolean;

	stop(): void;
}

export interface NativeAdOptions {
	nativeAdOptions?: {
		adChoicesPlacement?: AdChoicesPlacement;
		mediaAspectRatio?: MediaAspectRatio;
		customMuteThisAd?: boolean;
		multipleImages?: boolean;
		returnUrlsForImageAssets?: boolean;
		videoOptions?: {
			startMuted?: boolean;
			clickToExpandRequested?: boolean;
			customControlsRequested?: boolean;
		};
	};
	adSizes?: BannerAdSizeBase[];
	adManagerAdViewOptions?: {
		manualImpressionsEnabled?: boolean;
		shouldDelayBannerRendering?: boolean;
	};
}

export interface IResponseInfo {}

export interface UnconfirmedClickListener {
	unconfirmedClickReceived?(value: string);
	unconfirmedClickCancelled?(): void;
}

export interface IMuteThisAdReason {
	description: string;
}

export interface INativeAdLoader {
	isLoading(): boolean;
	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	onAdEvent(listener: NativeAdEventListener);
}

export interface INativeAd {
	adUnitId: string;
	onAdEvent(listener: AdEventListener);
	destroy(): void;
	advertiser: string;
	body: string;
	callToAction: string;
	headline: string;
	price: string;
	isCustomClickGestureEnabled(): boolean;
	enableCustomClickGesture(): void;
	recordCustomClickGesture(): void;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void;
	images: INativeAdImage[];
	icon: INativeAdImage;
	store: string;
	starRating: number;
	muteThisAdReasons: IMuteThisAdReason[];
}

export declare class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	adChoicesView: View;

	advertiserView: View;

	bodyView: View;

	callToActionView: View;

	headlineView: View;

	iconView: View;

	imageView: View;

	mediaView: MediaView;

	nativeAd: NativeAd;

	priceView: View;

	starRatingView: View;

	storeView: View;
}

export declare class NativeAdLoader implements INativeAdLoader {
	constructor(adUnitId: string);
	constructor(adUnitId: string, requestOptions: RequestOptions);
	constructor(adUnitId: string, requestOptions: RequestOptions, nativeAdOptions: NativeAdOptions);

	isLoading(): boolean;

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void;

	onAdEvent(listener: NativeAdEventListener);

	readonly native;
	readonly android;
	readonly ios;
}

export declare class NativeAd implements INativeAd {
	readonly adUnitId: string;
	onAdEvent(listener: AdEventListener);

	destroy(): void;

	readonly native;
	readonly android;
	readonly ios;

	readonly getAdvertiser: string;

	readonly body: string;

	readonly callToAction: string;
	readonly headline: string;

	readonly price: string;

	readonly mediaContent: MediaContent;

	readonly customMuteThisAdAvailable: boolean;

	isCustomClickGestureEnabled(): boolean;

	enableCustomClickGesture(): void;

	readonly advertiser: string;

	recordCustomClickGesture(): void;

	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void;

	readonly icon: NativeAdImage;

	readonly store: string;

	readonly starRating: number;

	readonly muteThisAdReasons: MuteThisAdReason[];

	muteThisAdWithReason(reason: MuteThisAdReason);

	readonly images: NativeAdImage[];
}

export declare class MediaContent implements IMediaContent {
	readonly aspectRatio: number;
	readonly currentTime: number;
	readonly duration: number;
	mainImage: any;
	readonly hasVideoContent: boolean;
	readonly native;
	readonly android;
	readonly ios;
}

export declare class VideoController implements IVideoController {
	readonly status: VideoStatus;

	clickToExpandEnabled(): boolean;
	customControlsEnabled(): boolean;
	pause(): void;
	play(): void;
	mute: boolean;
	stop(): void;
	readonly native;
	readonly android;
	readonly ios;
}

export declare class MediaView extends MediaViewBase {
	mediaContent: MediaContent;
	stretch: CoreTypes.ImageStretchType;
}

export interface INativeAdImage {
	image: any;
	url: string;
	scale: number;
}

export declare class NativeAdImage implements INativeAdImage {
	readonly image: ImageSource;

	readonly url: string;

	readonly scale: number;

	readonly native;
	readonly android;
	readonly ios;
}
