import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { BannerAdDirective } from './banner-ad-directive';
import { NativeAdViewDirective } from './native-ad-view-directive';
import { MediaViewDirective } from './media-view-directive';

export * from './banner-ad-directive';
export * from './native-ad-view-directive';
export * from './media-view-directive';

@NgModule({
	declarations: [BannerAdDirective, NativeAdViewDirective, MediaViewDirective],
	exports: [BannerAdDirective, NativeAdViewDirective, MediaViewDirective],
})
export class MobileAdsModule {}

registerElement('NativeAdView', () => require('@nativescript/google-mobile-ads').NativeAdView);
registerElement('BannerAd', () => require('@nativescript/google-mobile-ads').BannerAd);
registerElement('MediaView', () => require('@nativescript/google-mobile-ads').MediaView);
