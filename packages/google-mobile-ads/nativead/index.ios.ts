import { AddChildFromBuilder, ImageSource, Utils, View } from '@nativescript/core';
import { MobileAdsError } from '../error';
import { topViewController, toSerializeManagerRequestOptions, toSerializeRequestOptions } from '../utils';
import { AdEventType } from '../common';
import { ManagerRequestOptions, RequestOptions, AdEventListener } from '..';
import { NativeAdEventListener, NativeAdViewBase, MediaViewBase, mediaContentProperty, stretchProperty, MediaAspectRatio, AdChoicesPlacement, VideoStatus, NativeAdEventType } from './common';
import { IMediaContent, IMuteThisAdReason, INativeAd, INativeAdImage, IVideoController, NativeAdOptions, UnconfirmedClickListener, INativeAdLoader } from '.';

export { AdChoicesPlacement, AdEventType, VideoStatus, MediaAspectRatio, NativeAdEventType };

export class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	_native: GADNativeAdView;
	_child: View;
	createNativeView() {
		this._native = GADNativeAdView.new();
		return this._native;
	}

	_addChildFromBuilder(name: string, value: any): void {
		this.content = value;
	}

	// public eachChildView(callback: (child: View) => boolean): void {
	// 	if (this._child) {
	// 		callback(this._child);
	// 	}
	// }

	_adChoicesView: View;
	get adChoicesView(): View {
		return this._adChoicesView;
	}

	set adChoicesView(value) {
		this._adChoicesView = value;
		this._native.adChoicesView = value?.nativeView;
	}

	_advertiserView: View;
	get advertiserView(): View {
		return this._advertiserView;
	}

	set advertiserView(value) {
		this._advertiserView = value;
		this._native.advertiserView = value?.nativeView;
	}

	_bodyView: View;
	get bodyView(): View {
		return this._bodyView;
	}

	set bodyView(value) {
		this._bodyView = value;
		this._native.bodyView = value?.nativeView;
	}

	_callToActionView: View;
	get callToActionView(): View {
		return this._callToActionView;
	}

	set callToActionView(value) {
		this._callToActionView = value;
		this._native.callToActionView = value?.nativeView;
	}

	_headlineView: View;
	get headlineView(): View {
		return this._headlineView;
	}

	set headlineView(value) {
		this._headlineView = value;
		this._native.headlineView = value?.nativeView;
	}

	_iconView: View;
	get iconView(): View {
		return this._iconView;
	}

	set iconView(value) {
		this._iconView = value;
		this._native.iconView = value?.nativeView;
	}

	_imageView: View;
	get imageView(): View {
		return this._imageView;
	}

	set imageView(value) {
		this.imageView = value;
		this._native.imageView = value?.nativeView;
	}

	_mediaView: MediaView;
	get mediaView(): MediaView {
		return this._mediaView;
	}

	set mediaView(value) {
		this._native.mediaView = value?.native;
		this._mediaView = value;
	}

	_nativeAd: NativeAd;
	get nativeAd(): NativeAd {
		return this._nativeAd;
	}

	set nativeAd(value) {
		this._native.nativeAd = value?.native;
		this._nativeAd = value;
	}

	_priceView: View;
	get priceView(): View {
		return this._priceView;
	}

	set priceView(value) {
		this._priceView = value;
		this._native.priceView = value?.nativeView;
	}

	_starRatingView: View;
	get starRatingView(): View {
		return this._starRatingView;
	}

	set starRatingView(value) {
		this._starRatingView = value;
		this._native.starRatingView = value?.nativeView;
	}

	_storeView: View;
	get storeView(): View {
		return this._storeView;
	}

	set storeView(value) {
		this._priceView = value;
		this._native.storeView = value?.nativeView;
	}
}

export class NativeAdLoader implements INativeAdLoader {
	_adUnitId: string;
	_nativeAdOptions?: NativeAdOptions;
	_requestOptions?: RequestOptions;
	_listener: NativeAdEventListener;
	_native: GADAdLoader;
	_delegate: GADAdLoaderDelegateImpl;
	constructor(adUnitId: string, requestOptions: RequestOptions = {}, nativeAdOptions: NativeAdOptions = {}) {
		this._adUnitId = adUnitId;
		this._requestOptions = requestOptions;
		this._nativeAdOptions = nativeAdOptions;
		this._delegate = GADAdLoaderDelegateImpl.initWithOwner(new WeakRef(this));
	}
	isLoading(): boolean {
		return this.native?.loading ?? false;
	}

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void {
		const options: GADAdLoaderOptions[] = [];
		if (this._nativeAdOptions) {
			const managerOptions = this._nativeAdOptions?.adManagerAdViewOptions;
			if (managerOptions) {
				if (typeof managerOptions.manualImpressionsEnabled === 'boolean') {
					const opt = GAMBannerViewOptions.new();
					opt.enableManualImpressions = managerOptions.manualImpressionsEnabled;
					options.push(opt);
				}
			}

			const nativeAdOptions = this._nativeAdOptions?.nativeAdOptions;
			if (nativeAdOptions?.adChoicesPlacement) {
				const placement = GADNativeAdViewAdOptions.new();
				switch (nativeAdOptions.adChoicesPlacement) {
					case AdChoicesPlacement.BOTTOM_LEFT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.BottomLeftCorner;
						break;
					case AdChoicesPlacement.BOTTOM_RIGHT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.BottomRightCorner;
						break;
					case AdChoicesPlacement.TOP_LEFT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.TopLeftCorner;
						break;
					case AdChoicesPlacement.TOP_RIGHT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.TopRightCorner;
						break;
				}
				options.push(placement);
			}

			if (typeof nativeAdOptions?.customMuteThisAd === 'boolean') {
				const customMuteThisAd = GADNativeMuteThisAdLoaderOptions.new();
				customMuteThisAd.customMuteThisAdRequested = nativeAdOptions.customMuteThisAd;
				options.push(customMuteThisAd);
			}

			if (nativeAdOptions?.mediaAspectRatio) {
				const mediaAspectRatio = GADNativeAdMediaAdLoaderOptions.new();
				switch (nativeAdOptions.mediaAspectRatio) {
					case MediaAspectRatio.LANDSCAPE:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Landscape;
						break;
					case MediaAspectRatio.PORTRAIT:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Portrait;
						break;
					case MediaAspectRatio.SQUARE:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Square;
						break;
					case MediaAspectRatio.ANY:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Any;
						break;
				}
				options.push(mediaAspectRatio);
			}

			if (typeof nativeAdOptions?.multipleImages === 'boolean') {
				const multipleImagesKey = GADNativeAdImageAdLoaderOptions.new();
				multipleImagesKey.shouldRequestMultipleImages = nativeAdOptions.multipleImages;
				options.push(multipleImagesKey);
			}

			// probably handled already
			if (typeof nativeAdOptions?.returnUrlsForImageAssets === 'boolean') {
				// noop
			}

			const videoOptions = nativeAdOptions?.videoOptions;
			if (videoOptions) {
				const videoOpts = GADVideoOptions.new();
				if (typeof videoOptions.clickToExpandRequested === 'boolean') {
					videoOpts.clickToExpandRequested = videoOptions.clickToExpandRequested;
				}

				if (typeof videoOptions.customControlsRequested === 'boolean') {
					videoOpts.customControlsRequested = videoOptions.customControlsRequested;
				}

				if (typeof videoOptions.startMuted === 'boolean') {
					videoOpts.startMuted = videoOptions.startMuted;
				}

				options.push(videoOpts);
			}
		}

		if (typeof arg === 'number') {
			const numberOfAds = GADMultipleAdsAdLoaderOptions.new();
			numberOfAds.numberOfAds = arg;
			options.push(numberOfAds);
		}

		this._native = GADAdLoader.alloc().initWithAdUnitIDRootViewControllerAdTypesOptions(this._adUnitId, topViewController(), [NSCGA.AdLoaderAdTypeToString(NSCAdLoaderAdType.Native)], options);
		this._native.delegate = this._delegate;

		if (arg) {
			if (typeof arg === 'number') {
				this._native.loadRequest(toSerializeRequestOptions(this._requestOptions));
			}

			if (typeof arg === 'object') {
				this._native.loadRequest(toSerializeManagerRequestOptions(arg));
			}
		} else {
			this._native.loadRequest(toSerializeRequestOptions(this._requestOptions));
		}
	}

	onAdEvent(listener: NativeAdEventListener) {
		this._listener = listener;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class NativeAd implements INativeAd {
	_adUnitId: string;
	_native?: GADNativeAd;
	_listener: AdEventListener;
	_delegate: GADNativeAdDelegateImpl;
	static fromNative(nativeAd: GADNativeAd) {
		if (nativeAd instanceof GADNativeAd) {
			const ad = new NativeAd();
			ad._native = nativeAd;
			ad._delegate = GADNativeAdDelegateImpl.initWithOwner(new WeakRef(ad));
			nativeAd.delegate = ad._delegate;
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
		// noop
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get body() {
		return this.native?.body;
	}

	get callToAction() {
		return this.native?.callToAction;
	}

	get headline() {
		return this.native?.headline;
	}

	get price() {
		return this.native?.price;
	}

	get mediaContent() {
		return MediaContent.fromNative(this.native?.mediaContent);
	}

	get customMuteThisAdAvailable() {
		return this.native.customMuteThisAdAvailable;
	}
	isCustomClickGestureEnabled(): boolean {
		return this.native?.customClickGestureEnabled;
	}
	enableCustomClickGesture(): void {
		this.native?.enableCustomClickGestures?.();
	}

	get advertiser(): string {
		return this.native?.advertiser;
	}

	recordCustomClickGesture() {
		this.native?.recordCustomClickGesture?.();
	}

	_unconfirmedClickListener?: UnconfirmedClickListener;
	_unconfirmedClickDelegate?: GADNativeAdUnconfirmedClickDelegateImpl;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void {
		this.native.unconfirmedClickDelegate;
		if (this._unconfirmedClickListener) {
			this.native.unconfirmedClickDelegate = null;
			this._unconfirmedClickListener = null;
		}

		if (listener) {
			this._unconfirmedClickDelegate = GADNativeAdUnconfirmedClickDelegateImpl.initWithOwner(new WeakRef(this));
			this._unconfirmedClickListener = listener;
			if (this.native) {
				this.native.unconfirmedClickDelegate = this._unconfirmedClickDelegate;
			}
		}
	}

	get icon() {
		return NativeAdImage.fromNative(this.native.icon);
	}

	get store() {
		return this.native?.store;
	}

	get starRating() {
		return this.native?.starRating?.floatValue;
	}

	get muteThisAdReasons() {
		const result = [];
		const reasons = this.native?.muteThisAdReasons;
		if (reasons) {
			const size = reasons.count;
			for (let i = 0; i < size; i++) {
				result.push(MuteThisAdReason.fromNative(reasons.objectAtIndex(i)));
			}
		}
		return result;
	}

	muteThisAdWithReason(reason: MuteThisAdReason) {
		if (reason?.native) {
			this.native?.muteThisAdWithReason?.(reason.native);
		}
	}

	get images() {
		const result = [];
		const images = this.native?.images;
		if (images) {
			const size = images.count;
			for (let i = 0; i < size; i++) {
				result.push(NativeAdImage.fromNative(images.objectAtIndex(i)));
			}
		}
		return result;
	}
}

export class MediaContent implements IMediaContent {
	_native: GADMediaContent;

	static fromNative(content: GADMediaContent): MediaContent {
		if (content instanceof GADMediaContent) {
			const mediaContent = new MediaContent();
			mediaContent._native = content;
			return mediaContent;
		}
		return null;
	}

	get aspectRatio(): number {
		return this.native?.aspectRatio;
	}

	get currentTime(): number {
		return this.native?.currentTime;
	}
	get duration(): number {
		return this.native?.duration;
	}

	get mainImage(): any {
		return this.native?.mainImage;
	}

	set mainImage(value) {
		this.native.mainImage = value;
	}

	get hasVideoContent(): boolean {
		return this.native?.hasVideoContent;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class VideoController implements IVideoController {
	_status = VideoStatus.Unstarted;
	_native: GADVideoController;
	_delegate: GADVideoControllerDelegateImpl;
	_isMute = false;
	static fromNative(controller: GADVideoController) {
		if (controller instanceof GADVideoController) {
			const ctrl = new VideoController();
			ctrl._native = controller;
			ctrl._delegate = GADVideoControllerDelegateImpl.initWithOwner(new WeakRef(ctrl));
			ctrl._native.delegate = ctrl._delegate;
			return ctrl;
		}
		return null;
	}

	get status() {
		return this._status;
	}

	clickToExpandEnabled(): boolean {
		return this.native?.clickToExpandEnabled?.();
	}
	customControlsEnabled(): boolean {
		return this.native?.customControlsEnabled?.();
	}
	pause(): void {
		this.native?.pause?.();
	}
	play(): void {
		this.native?.play?.();
	}
	get mute() {
		return this._isMute;
	}

	set mute(value) {
		this.native?.setMute?.(value);
	}
	stop(): void {
		this.native?.stop?.();
	}

	get native() {
		return this._native;
	}

	get aniosdroid() {
		return this.native;
	}
}

export class MediaView extends MediaViewBase {
	_contentView: GADMediaView;
	createNativeView() {
		this._contentView = GADMediaView.new();
		this._contentView.contentMode = UIViewContentMode.ScaleAspectFit;
		return this._contentView;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	[mediaContentProperty.setNative](content) {
		if (this._contentView) {
			this._contentView.mediaContent = content?.native || null;
		}
	}

	[stretchProperty.setNative](value) {
		if (!this._contentView) {
			return;
		}
		switch (value) {
			case 'aspectFit':
				this._contentView.contentMode = UIViewContentMode.ScaleAspectFit;
				break;
			case 'aspectFill':
				this._contentView.contentMode = UIViewContentMode.ScaleAspectFill;
				break;
			case 'fill':
				this._contentView.contentMode = UIViewContentMode.ScaleToFill;
				break;
			case 'none':
			default:
				this._contentView.contentMode = UIViewContentMode.TopLeft;
				break;
		}
	}

	get native() {
		return this._contentView;
	}
}

export class NativeAdImage implements INativeAdImage {
	_native: GADNativeAdImage;
	static fromNative(image: GADNativeAdImage) {
		if (image instanceof GADNativeAdImage) {
			const img = new NativeAdImage();
			img._native = image;
			return img;
		}
		return null;
	}

	get image() {
		return new ImageSource(this.native?.image);
	}

	get url(): string {
		return this.native?.imageURL?.absoluteString;
	}

	get scale(): number {
		return this.native?.scale;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class MuteThisAdReason implements IMuteThisAdReason {
	_native: GADMuteThisAdReason;
	static fromNative(reason: GADMuteThisAdReason) {
		if (reason instanceof GADMuteThisAdReason) {
			const muteThisAdReason = new MuteThisAdReason();
			muteThisAdReason._native = reason;
			return muteThisAdReason;
		}
		return null;
	}
	get description(): string {
		return this.native?.reasonDescription;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

@NativeClass
@ObjCClass(GADNativeAdDelegate)
class GADNativeAdDelegateImpl extends NSObject implements GADNativeAdDelegate {
	_owner: WeakRef<NativeAd>;
	static initWithOwner(owner: WeakRef<NativeAd>) {
		const delegate = <GADNativeAdDelegateImpl>GADNativeAdDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	nativeAdDidDismissScreen(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.CLOSED, null, null);
	}

	nativeAdDidRecordClick(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.CLICKED, null, null);
	}

	nativeAdDidRecordImpression(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.IMPRESSION, null, null);
	}

	nativeAdIsMuted(nativeAd: GADNativeAd): void {
		// noop
	}

	nativeAdWillDismissScreen(nativeAd: GADNativeAd): void {
		// noop
	}

	nativeAdWillPresentScreen(nativeAd: GADNativeAd): void {
		// noop
	}
}

@NativeClass
@ObjCClass(GADNativeAdLoaderDelegate)
class GADAdLoaderDelegateImpl extends NSObject implements GADNativeAdLoaderDelegate {
	_owner: WeakRef<NativeAdLoader>;
	static initWithOwner(owner: WeakRef<NativeAdLoader>) {
		const delegate = <GADAdLoaderDelegateImpl>GADAdLoaderDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	adLoaderDidFailToReceiveAdWithError(adLoader: GADAdLoader, error: NSError): void {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this._owner?.get?.()._listener?.(AdEventType.FAILED_TO_LOAD_EVENT, MobileAdsError.fromNative(error), null);
	}
	adLoaderDidFinishLoading(adLoader: GADAdLoader): void {
		this._owner?.get?.()._listener?.(AdEventType.LOADED);
	}

	adLoaderDidReceiveNativeAd(adLoader: GADAdLoader, nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(NativeAdEventType.LOADED, null, NativeAd.fromNative(nativeAd));
	}
}

@NativeClass
@ObjCClass(GADNativeAdUnconfirmedClickDelegate)
class GADNativeAdUnconfirmedClickDelegateImpl extends NSObject implements GADNativeAdUnconfirmedClickDelegate {
	_owner: WeakRef<NativeAd>;
	static initWithOwner(owner: WeakRef<NativeAd>) {
		const delegate = <GADNativeAdUnconfirmedClickDelegateImpl>GADNativeAdUnconfirmedClickDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	nativeAdDidCancelUnconfirmedClick(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._unconfirmedClickListener?.unconfirmedClickCancelled?.();
	}
	nativeAdDidReceiveUnconfirmedClickOnAssetID(nativeAd: GADNativeAd, assetID: string): void {
		this._owner?.get?.()._unconfirmedClickListener?.unconfirmedClickReceived?.(assetID);
	}
}

@NativeClass
@ObjCClass(GADVideoControllerDelegate)
class GADVideoControllerDelegateImpl extends NSObject implements GADVideoControllerDelegate {
	_owner: WeakRef<VideoController>;
	static initWithOwner(owner: WeakRef<VideoController>): GADVideoControllerDelegateImpl {
		const delegate = <GADVideoControllerDelegateImpl>GADVideoControllerDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	videoControllerDidEndVideoPlayback(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Ended;
		}
	}

	videoControllerDidMuteVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._isMute = true;
		}
	}

	videoControllerDidPauseVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Paused;
		}
	}

	videoControllerDidPlayVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Playing;
		}
	}

	videoControllerDidUnmuteVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._isMute = false;
		}
	}
}
