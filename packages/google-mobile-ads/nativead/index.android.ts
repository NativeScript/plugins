import { AddChildFromBuilder, Application, ImageSource, View } from '@nativescript/core';
import { MobileAdsError } from '../error';
import { ManagerRequestOptions, RequestOptions, AdEventListener } from '..';
import { AdEventType } from '../common';
import { NativeAdEventListener, NativeAdViewBase, MediaViewBase, mediaContentProperty, stretchProperty, MediaAspectRatio, AdChoicesPlacement, VideoStatus, NativeAdEventType } from './common';
import { IMediaContent, IMuteThisAdReason, INativeAd, INativeAdImage, IVideoController, NativeAdOptions, UnconfirmedClickListener, INativeAdLoader } from '.';

export { AdChoicesPlacement, AdEventType, VideoStatus, MediaAspectRatio, NativeAdEventType };

const NATIVE_AD_LOADED_EVENT = 'adNativeAdLoaded';
const AD_MANAGER_AD_VIEW_LOADED_EVENT = 'adManagerAdViewLoaded';

export class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	_native: com.google.android.gms.ads.nativead.NativeAdView;
	_child: View;
	createNativeView() {
		this._native = new com.google.android.gms.ads.nativead.NativeAdView(this._context);
		return this._native;
	}

	_addChildFromBuilder(name: string, value: any): void {
		this.content = value;
	}

	_adChoicesView: View;
	get adChoicesView(): View {
		return this._adChoicesView;
	}

	set adChoicesView(value) {
		this._adChoicesView = value;
		this._native.setAdChoicesView(value?.nativeView);
	}

	_advertiserView: View;
	get advertiserView(): View {
		return this._advertiserView;
	}

	set advertiserView(value) {
		this._advertiserView = value;
		this._native.setAdvertiserView(value?.nativeView);
	}

	_bodyView: View;
	get bodyView(): View {
		return this._bodyView;
	}

	set bodyView(value) {
		this._bodyView = value;
		this._native.setBodyView(value?.nativeView);
	}

	_callToActionView: View;
	get callToActionView(): View {
		return this._callToActionView;
	}

	set callToActionView(value) {
		this._callToActionView = value;
		this._native.setCallToActionView(value?.nativeView);
	}

	_headlineView: View;
	get headlineView(): View {
		return this._headlineView;
	}

	set headlineView(value) {
		this._headlineView = value;
		this._native.setHeadlineView(value?.nativeView);
	}

	_iconView: View;
	get iconView(): View {
		return this._iconView;
	}

	set iconView(value) {
		this._iconView = value;
		this._native.setIconView(value?.nativeView);
	}

	_imageView: View;
	get imageView(): View {
		return this._imageView;
	}

	set imageView(value) {
		this.imageView = value;
		this._native.setImageView(value?.nativeView);
	}

	_mediaView: MediaView;
	get mediaView(): MediaView {
		return this._mediaView;
	}

	set mediaView(value) {
		this._native.setMediaView(value?.native);
		this._mediaView = value;
	}

	_nativeAd: NativeAd;
	get nativeAd(): NativeAd {
		return this._nativeAd;
	}

	set nativeAd(value) {
		this._native.setNativeAd(value?.native || null);
		this._nativeAd = value;
	}

	_priceView: View;
	get priceView(): View {
		return this._priceView;
	}

	set priceView(value) {
		this._priceView = value;
		this._native.setPriceView(value?.nativeView);
	}

	_starRatingView: View;
	get starRatingView(): View {
		return this._starRatingView;
	}

	set starRatingView(value) {
		this._starRatingView = value;
		this._native.setStarRatingView(value?.nativeView);
	}

	_storeView: View;
	get storeView(): View {
		return this._storeView;
	}

	set storeView(value) {
		this._priceView = value;
		this._native.setStoreView(value?.nativeView);
	}
}

export class NativeAdLoader implements INativeAdLoader {
	_adUnitId: string;
	_nativeAdOptions?: NativeAdOptions;
	_requestOptions?: RequestOptions;
	_listener: NativeAdEventListener;
	_native: com.google.android.gms.ads.AdLoader;

	constructor(adUnitId: string, requestOptions: RequestOptions = {}, nativeAdOptions: NativeAdOptions = {}) {
		this._adUnitId = adUnitId;
		this._requestOptions = requestOptions;
		this._nativeAdOptions = nativeAdOptions;
	}
	isLoading(): boolean {
		return this.native?.isLoading?.() ?? false;
	}

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void {
		const ref = new WeakRef(this);
		this._native = org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.createLoader(
			Application.android.foregroundActivity || Application.android.startActivity,
			this._adUnitId,
			JSON.stringify(this._nativeAdOptions || {}),
			new org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.AdLoaderCallback({
				onEvent(event: string, param1: any): void {
					const owner = ref.get();
					let nativeAd: NativeAd;
					switch (event) {
						case AdEventType.CLICKED:
							nativeAd?._listener?.(AdEventType.CLICKED, null, null);
							break;
						case AdEventType.CLOSED:
							nativeAd?._listener?.(AdEventType.CLOSED, null, null);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							owner?._listener?.(AdEventType.FAILED_TO_LOAD_EVENT, MobileAdsError.fromNative(param1), null);
							break;
						case AdEventType.IMPRESSION:
							nativeAd?._listener?.(AdEventType.IMPRESSION, null, null);
							break;
						case AdEventType.LOADED:
							owner?._listener?.(AdEventType.LOADED, null, null);
							break;
						case AdEventType.OPENED:
							owner?._listener?.(AdEventType.OPENED, null, null);
							break;
						case NATIVE_AD_LOADED_EVENT:
							nativeAd = NativeAd.fromNative(param1);
							owner?._listener?.(NativeAdEventType.LOADED, null, nativeAd);
							break;
						case AD_MANAGER_AD_VIEW_LOADED_EVENT:
							// returns adManagerAdView view
							break;
					}
				},
			})
		);
		if (arg) {
			if (typeof arg === 'number') {
				org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.load(this._native, JSON.stringify(this._requestOptions), arg);
			}

			if (typeof arg === 'object') {
				org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.load(this._native, JSON.stringify(arg), true);
			}
		} else {
			org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.NativeAd.load(this._native, JSON.stringify(this._requestOptions), false);
		}
	}

	onAdEvent(listener: NativeAdEventListener) {
		this._listener = listener;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class NativeAd implements INativeAd {
	_adUnitId: string;
	_native: com.google.android.gms.ads.nativead.NativeAd;
	_listener: AdEventListener;

	static fromNative(nativeAd: com.google.android.gms.ads.nativead.NativeAd) {
		if (nativeAd instanceof com.google.android.gms.ads.nativead.NativeAd) {
			const ad = new NativeAd();
			ad._native = nativeAd;
			return ad;
		}
		return null;
	}

	get adUnitId(): string {
		return this._adUnitId;
	}

	onAdEvent(listener: AdEventListener) {
		this._listener = listener;
	}

	destroy(): void {
		this.native?.destroy?.();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get body() {
		return this.native?.getBody();
	}

	get callToAction() {
		return this.native?.getCallToAction?.();
	}

	get headline() {
		return this.native?.getHeadline?.();
	}

	get price() {
		return this.native?.getPrice?.();
	}

	get mediaContent() {
		return MediaContent.fromNative(this.native?.getMediaContent?.());
	}

	get customMuteThisAdAvailable() {
		return this.native?.isCustomMuteThisAdEnabled?.();
	}

	isCustomClickGestureEnabled(): boolean {
		return this.native?.isCustomClickGestureEnabled?.();
	}
	enableCustomClickGesture(): void {
		this.native?.enableCustomClickGesture?.();
	}

	get advertiser(): string {
		return this.native?.getAdvertiser?.();
	}

	recordCustomClickGesture() {
		this.native?.recordCustomClickGesture?.();
	}

	_unconfirmedClickListener?: UnconfirmedClickListener;
	_unconfirmedClickListenerNative?: com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void {
		if (this._unconfirmedClickListener) {
			this.native.setUnconfirmedClickListener(null);
			this._unconfirmedClickListener = null;
		}

		if (listener) {
			const ref = new WeakRef(this);
			this._unconfirmedClickListenerNative = new com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener({
				onUnconfirmedClickReceived(param0: string): void {
					const owner = ref.get();
					if (owner) {
						owner._unconfirmedClickListener?.unconfirmedClickReceived?.(param0);
					}
				},
				onUnconfirmedClickCancelled(): void {
					const owner = ref.get();
					if (owner) {
						owner._unconfirmedClickListener?.unconfirmedClickCancelled?.();
					}
				},
			});
			this._unconfirmedClickListener = listener;
			this.native?.setUnconfirmedClickListener(this._unconfirmedClickListenerNative);
		}
	}

	get icon() {
		return NativeAdImage.fromNative(this.native?.getIcon?.());
	}

	get store() {
		return this.native?.getStore?.();
	}

	get starRating() {
		return this.native?.getStarRating?.().doubleValue();
	}

	get muteThisAdReasons() {
		const result = [];
		const reasons = this.native?.getMuteThisAdReasons?.();
		if (reasons) {
			const size = reasons.size();
			for (let i = 0; i < size; i++) {
				result.push(MuteThisAdReason.fromNative(reasons.get(i)));
			}
		}
		return result;
	}

	muteThisAdWithReason(reason: MuteThisAdReason) {
		if (reason?.native) {
			this.native?.muteThisAd?.(reason.native);
		}
	}

	get images() {
		const result = [];
		const images = this.native?.getImages?.();
		if (images) {
			const size = images.size();
			for (let i = 0; i < size; i++) {
				result.push(NativeAdImage.fromNative(images.get(i)));
			}
		}
		return result;
	}
}

export class MediaContent implements IMediaContent {
	_native: com.google.android.gms.ads.MediaContent;

	static fromNative(content: com.google.android.gms.ads.MediaContent): MediaContent {
		if (content instanceof com.google.android.gms.ads.MediaContent) {
			const mediaContent = new MediaContent();
			mediaContent._native = content;
			return mediaContent;
		}
		return null;
	}

	get aspectRatio(): number {
		return this.native?.getAspectRatio?.();
	}

	get currentTime(): number {
		return this.native?.getCurrentTime?.();
	}
	get duration(): number {
		return this.native?.getDuration?.();
	}

	get mainImage(): any {
		return this.native?.getMainImage?.();
	}

	set mainImage(value) {
		this.native.setMainImage(value);
	}

	get hasVideoContent(): boolean {
		return this.native?.hasVideoContent();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

let VideoLifecycleCallbacks;

function ensureVideoLifecycleCallbacks() {
	if (VideoLifecycleCallbacks) {
		return;
	}

	class VideoLifecycleCallbacksImpl extends com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks {
		_owner: WeakRef<VideoController>;
		constructor(owner: WeakRef<VideoController>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}
		public onVideoPlay(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Playing;
			}
		}
		public onVideoStart(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Playing;
			}
		}
		public onVideoPause(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Paused;
			}
		}
		public onVideoMute(param0: boolean): void {}
		public onVideoEnd(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Ended;
			}
		}
	}

	VideoLifecycleCallbacks = VideoLifecycleCallbacksImpl;
}

export class VideoController implements IVideoController {
	_native: com.google.android.gms.ads.VideoController;
	_status: VideoStatus = VideoStatus.Unstarted;

	static fromNative(controller: com.google.android.gms.ads.VideoController) {
		if (controller instanceof com.google.android.gms.ads.VideoController) {
			ensureVideoLifecycleCallbacks();
			const ctrl = new VideoController();
			ctrl._native = controller;
			controller.setVideoLifecycleCallbacks(new VideoLifecycleCallbacks(new WeakRef(this)));
			return ctrl;
		}
		return null;
	}

	clickToExpandEnabled(): boolean {
		return this.native?.isClickToExpandEnabled?.();
	}
	customControlsEnabled(): boolean {
		return this.native?.isCustomControlsEnabled?.();
	}
	pause(): void {
		this.native?.pause?.();
	}
	play(): void {
		this.native?.play?.();
	}
	get mute() {
		return this.native?.isMuted?.();
	}

	set mute(value) {
		this.native?.mute?.(value);
	}
	stop(): void {
		this.native?.stop?.();
	}

	get status() {
		return this._status;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class MediaView extends MediaViewBase {
	_contentView: com.google.android.gms.ads.nativead.MediaView;
	createNativeView() {
		this._contentView = new com.google.android.gms.ads.nativead.MediaView(this._context);
		return this._contentView;
	}

	[mediaContentProperty.setNative](content) {
		if (this._contentView) {
			this._contentView?.setMediaContent(content?.native || null);
		}
	}

	[stretchProperty.setNative](value) {
		if (!this._contentView) {
			return;
		}
		switch (value) {
			case 'aspectFit':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
				break;
			case 'aspectFill':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
				break;
			case 'fill':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
				break;
			case 'none':
			default:
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
				break;
		}
	}

	get native() {
		return this._contentView;
	}
}

export class NativeAdImage implements INativeAdImage {
	_native: com.google.android.gms.ads.nativead.NativeAd.Image;
	static fromNative(image: com.google.android.gms.ads.nativead.NativeAd.Image) {
		if (image instanceof com.google.android.gms.ads.nativead.NativeAd.Image) {
			const nativeAdImage = new NativeAdImage();
			nativeAdImage._native = image;
			return nativeAdImage;
		}
		return null;
	}

	get image() {
		return new ImageSource(org.nativescript.plugins.google_mobile_ads.GoogleMobileAds.getBitmap(this.native?.getDrawable?.() || null));
	}

	get url(): string {
		return this.native?.getUri?.().toString?.();
	}

	get scale(): number {
		return this.native?.getScale?.();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class MuteThisAdReason implements IMuteThisAdReason {
	_native: com.google.android.gms.ads.MuteThisAdReason;
	static fromNative(reason: com.google.android.gms.ads.MuteThisAdReason) {
		if (reason instanceof com.google.android.gms.ads.MuteThisAdReason) {
			const muteThisAdReason = new MuteThisAdReason();
			muteThisAdReason._native = reason;
			return muteThisAdReason;
		}
		return null;
	}
	get description(): string {
		return this.native?.getDescription?.();
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}
