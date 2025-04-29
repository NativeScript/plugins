import { ContainerView, ContentView, CoreTypes, CSSType, Property, View } from '@nativescript/core';
import { AdEventType } from '../common';
import { IMediaContent, INativeAd } from '.';

@CSSType('NativeAdView')
export abstract class NativeAdViewBase extends ContentView {
	abstract adChoicesView: View;

	abstract advertiserView: View;

	abstract bodyView: View;

	abstract callToActionView: View;

	abstract headlineView: View;

	abstract iconView: View;

	abstract imageView: View;

	abstract mediaView: MediaViewBase;

	abstract nativeAd: INativeAd;

	abstract priceView: View;

	abstract starRatingView: View;

	abstract storeView: View;
}

export const stretchProperty = new Property<MediaViewBase, CoreTypes.ImageStretchType>({
	name: 'stretch',
	defaultValue: 'aspectFit',
	affectsLayout: global.isIOS,
});

export const mediaContentProperty = new Property<MediaViewBase, IMediaContent>({
	name: 'mediaContent',
});

@CSSType('MediaView')
export class MediaViewBase extends ContainerView {
	mediaContent: IMediaContent;
	stretch: CoreTypes.ImageStretchType;
}

stretchProperty.register(MediaViewBase);
mediaContentProperty.register(MediaViewBase);

export enum VideoStatus {
	Unstarted,
	Playing,
	Paused,
	Ended,
}

export enum MediaAspectRatio {
	LANDSCAPE = 'landscape',
	PORTRAIT = 'portrait',
	SQUARE = 'square',
	ANY = 'any',
}

export enum AdChoicesPlacement {
	TOP_LEFT = 'topLeft',
	TOP_RIGHT = 'topRight',
	BOTTOM_RIGHT = 'bottomRight',
	BOTTOM_LEFT = 'bottomLeft',
}

export enum NativeAdEventType {
	LOADED = 'native_ad_loaded',
}

export type NativeAdEventListener = (type: AdEventType | NativeAdEventType, error?: Error, data?: any | INativeAd) => void;
