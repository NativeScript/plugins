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
// @ts-ignore
export class AdmobModule {}

registerElement('NativeAdView', () => require('@nativescript/firebase-admob').NativeAdView);
registerElement('BannerAd', () => require('@nativescript/firebase-admob').BannerAd);
registerElement('MediaView', () => require('@nativescript/firebase-admob').MediaView);
