# @nativescript/google-mobile-ads

A plugin that allows you to monetize your NativeScript app by integrating the [Google Mobile Ads SDK](https://developers.google.com/admob/android/sdk) into the app.


The `@nativescript/google-mobile-ads` plugin currently supports loading and displaying the following ad types:

- [Banner](#banner-ads)
- [Interstitial (full-screen)](#interstitial-ad)
- [Native](#native-ads)
- [Rewarded](#rewarded-ads)

## Contents

- [@nativescript/google-mobile-ads](#nativescriptgoogle-mobile-ads)
	- [Contents](#contents)
	- [Installation](#installation)
	- [Setup Mobile Ads for iOS](#setup-mobile-ads-for-ios)
	- [Setup Mobile Ads for Android](#setup-mobile-ads-for-android)
	- [Use @nativescript/google-mobile-ads](#use-nativescriptgoogle-mobile-ads)
		- [1. Initialize the Mobile Ads SDK](#1-initialize-the-mobile-ads-sdk)
		- [2. Add your preferred ad format to the app](#2-add-your-preferred-ad-format-to-the-app)
		- [Banner ads](#banner-ads)
			- [Testing Banner ads in development mode](#testing-banner-ads-in-development-mode)
			- [Add Banner ad in NativeScript Core](#add-banner-ad-in-nativescript-core)
			- [Add Banner ad in NativeScript Angular](#add-banner-ad-in-nativescript-angular)
			- [Add Banner ad in NativeScript Vue](#add-banner-ad-in-nativescript-vue)
			- [Customize the banner ad size](#customize-the-banner-ad-size)
			- [Listen to a banner ad lifecycle events](#listen-to-a-banner-ad-lifecycle-events)
		- [Display a banner ad to the user](#display-a-banner-ad-to-the-user)
		- [Add an Interstitial ad](#add-an-interstitial-ad)
			- [Testing Interstitial ads in development](#testing-interstitial-ads-in-development)
		- [Display an Interstitial ad to the user](#display-an-interstitial-ad-to-the-user)
			- [Next steps](#next-steps)
	- [Native Ads](#native-ads)
		- [Adding a Native ad in NativeScript Core](#adding-a-native-ad-in-nativescript-core)
		- [Testing Native ads in development mode](#testing-native-ads-in-development-mode)
		- [NativeAdOptions interface](#nativeadoptions-interface)
			- [AdChoicesPlacement](#adchoicesplacement)
			- [videoOptions](#videooptions)
			- [MediaAspectRatio](#mediaaspectratio)
		- [Next steps](#next-steps-1)
	- [Rewarded Ads](#rewarded-ads)
		- [Testing Rewarded ads in development mode](#testing-rewarded-ads-in-development-mode)
		- [Display a Rewarded ad](#display-a-rewarded-ad)
			- [Rewarded ad Events](#rewarded-ad-events)
		- [Targeting](#targeting)
		- [Child-directed ads setting](#child-directed-ads-setting)
		- [Handle ads requests for users under the age of consent](#handle-ads-requests-for-users-under-the-age-of-consent)
		- [Ad content filtering](#ad-content-filtering)
	- [License](#license)

## Installation

To install `@nativescript/google-mobile-ads`, run the following command in the root directory of the project:

```cli
npm install @nativescript/google-mobile-ads
```

## Setup Mobile Ads for iOS

Update your `Info.plist` file at `App_Resources/iOS` with a `GADApplicationIdentifier` key with a string value of your AdMob app ID ([identified in the AdMob UI](https://support.google.com/admob/answer/7356431)).

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy</string>
```

Also add the `NSUserTrackingUsageDescription` key.

```xml
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

For more information about configuring the `Info.plist` and setting up your App ID, see [Update your Info.plist](https://developers.google.com/admob/ios/quick-start#update%5C_your%5C_infoplist).

## Setup Mobile Ads for Android

Add AdMob App ID ([identified in the AdMob UI](https://support.google.com/admob/answer/7356431)) to the app's `AndroidManifest.xml` file, found at `App_Resources/Android/src/main`. Failure to do so will result in a crash on app launch. Add the ID by adding a `<meta-data>` tag with name `com.google.android.gms.ads.APPLICATION_ID`, as shown below. For `android:value` insert your own AdMob App ID in quotes.

```xml
<application>
  <!-- Sample AdMob App ID: ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy -->
  <meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"
  />
</application>
```

See step 3. of [Configure your app](https://developers.google.com/admob/android/quick-start#import_the_mobile_ads_sdk) for more information about configuring AndroidManifest.xml and setting up the App ID.

## Use @nativescript/google-mobile-ads

To use the `@nativescript/google-mobile-ads` plugin, follow the steps below:

### 1. Initialize the Mobile Ads SDK

Before loading ads, initialize the Mobile Ads SDK by calling the static [init](#init) method on the Admob class. Call this method once, ideally right before the app boots, in the `main.ts` file.

```ts
import { MobileAds } from '@nativescript/google-mobile-ads';

MobileAds.init();
```

### 2. Add your preferred ad format to the app

The Mobile Ads SDK is now imported and you're ready to implement an ad. Click any of the links below to get detailed implementation steps for your desired ad format.

- [Banner](#add-a-banner-ad)
- [Interstitial (full-screen)](#interstitial-ad)
- [Native](#native-ads)
- [Rewarded](#rewarded-ads)

### Banner ads

Banner ads are rectangular ads that appear at the top or bottom of the device screen. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period. If you're new to mobile advertising, they're a great place to start.

#### Testing Banner ads in development mode

> **Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account. Make sure you replace the test unit ID with your ad unit ID before publishing your app.

To enable dedicated test ad unit ID for banners, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

Below are examples of adding a Banner ad in several NativeScript flavors.

#### Add Banner ad in NativeScript Core

Register the plugin namespace in the Page element under a prefix(`ui` for example), access the `BannerAd` view from the namespace via the prefix and add it to your XML.

The `BannerAd` requires the following attributes to be set:

- `unitId`
- `BannerAdSize`: You can set this value in the callback function of the `layoutChanged` event. For more information, see [Customize the banner ad size](#customize-the-banner-ad-size)
- `height` and `width`

<!-- - `AdRequest`
- `BannerAdListener` -->

```xml
<Page xmlns:ui="@nativescript/google-mobile-ads">
  <StackLayout>
    <ui:BannerAd
      height="100"
      width="100"
      unitId="{{bannerAdUnit}}"
      layoutChanged="{{loadBanner}}"
    />
  </StackLayout>
  <!-- ... -->
</Page>
```

```js
import { BannerAdSize } from '@nativescript/google-mobile-ads';

export function loadBanner(args) {
	const banner = args.object;
	banner.size = new BannerAdSize(100, 100);
	banner.load();
}
```

#### Add Banner ad in NativeScript Angular

Register the `BannerAd` view by adding its `MobileAdsModule` to the `imports` array of the `@NgModule` decorator of the component where you want to use the view.

```ts
import { MobileAdsModule } from '@nativescript/google-mobile-ads/angular';

@NgModule({
    imports: [
    	MobileAdsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

Next, add the `BannerAd` view to HTML. The `BannerAd` requires the following attributes to be set:

- `unitId`
- `BannerAdSize`: You can set this value in the callback function of the `layoutChanged` event. For more information, see [Customize the banner ad size](#customize-the-banner-ad-size)
- `height` and `width`

```html
<BannerAd height="100" width="100" [unitId]="bannerAdUnit" (layoutChanged)="bannerLoaded($event)"> </BannerAd>
```

#### Add Banner ad in NativeScript Vue

Register the `BannerAd` view in the `app.ts` file as follows:

```ts
import { createApp } from 'nativescript-vue';
import MobileAds from '@nativescript/google-mobile-ads/vue';
import Home from './components/Home.vue';

const app = createApp(Home);
app.use(MobileAds);
```

And then add it to markup as follows. The `BannerAd` requires the following attributes to be set:

- `unitId`
- `BannerAdSize`: You can set this value in the callback function of the `layoutChanged` event. For more information, see [Customize the banner ad size](#customize-the-banner-ad-size)
- `height` and `width`

```xml
<BannerAd
  height="100"
  width="100"
  :unitId="bannerAdUnit"
  @layoutChanged="bannerLoaded"
/>
```

#### Customize the banner ad size

To define a custom banner size, you have 2 options:

- Instantiate the `BannerAdSize` class with the desired width and height and set it to the `size` attribute of `BannerAd`.

```ts
import { BannerAdSize } from '@nativescript/google-mobile-ads';

banner.size = new BannerAdSize(300, 50);
```

- Set the `size` to any of the constants of the `BannerAdSize` class.

The table below lists the available constants and the sizes they represent.

| AdSize Constant                                    | Size in dp (WxH)                 | Description      |
| :------------------------------------------------- | :------------------------------- | :--------------- |
| `BANNER`                                           | `320x50`                         | Standard Banner  |
| `LARGE_BANNER`                                     | `320x100`                        | Large Banner     |
| `MEDIUM_RECTANGLE`                                 | `320x250`                        | Medium Rectangle |
| `FULL_BANNER`                                      | `468x60`                         | Full-Size Banner |
| `LEADERBOARD`                                      | `728x90`                         | Leaderboard      |
| `createAnchoredAdaptiveBanner(width, orientation)` | Provided width x Adaptive height | Adaptive Banner  |
| `createInLineAdaptiveBanner(width, orientation)`   | Provided width x Adaptive height | Adaptive Banner  |

#### Listen to a banner ad lifecycle events

The plugin enables you to listen to different lifecycle events of an ad, such as when an ad is loaded. Register the events handlers before calling the `load` method.

```ts
const bannerView = event.object;

// Called when an ad is successfully received.
bannerView.on('adLoaded', (args) => {
	console.log('Ad loaded.');
});

// Called when an ad request failed.
bannerView.on('adFailedToLoad', (args) => {
	console.log('Ad failed to load: ', args.error);
});

// Called when the user removes an overlay that covers the screen.
bannerView.on('adClosed', (args) => {
	console.log('Ad closed.');
});

// Called when an impression occurs on the ad.
bannerView.on('adImpression', (args) => {
	console.log('Ad impression.');
});

// Called when an tap/touch/click occurs on the ad.
bannerView.on('adClicked', (args) => {
	console.log('Ad tapped');
});
```

### Display a banner ad to the user

To display a banner ad to the user, get the reference to the `BannerAd` view and call the `load` method on it.

```ts
bannerView.load();
```

### Add an Interstitial ad

Interstitial ads are full-screen ads that cover the interface of an app until closed by the user. They're best used at natural pauses in the flow of an app's execution, such as between levels of a game or just after a task is completed.

#### Testing Interstitial ads in development

> **Note:** When your app is in development mode, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account. Make sure you replace the test unit ID with your ad unit ID before publishing your app.
> To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

### Display an Interstitial ad to the user

To display an Interstitial ad to the user, follow the steps below:

1. Import the `InterstitialAd` class from `@nativescript/google-mobile-ads`.

```ts
import { InterstitialAd } from '@nativescript/google-mobile-ads';
```

2. Create an Interstitial ad instance.

Create an Interstitial ad instance by calling the static `createForAdRequest` on the class. The `createForAdRequest` method requires an adUnitId and you can optionally pass a [RequestOptions]() object.

```ts
import { InterstitialAd } from '@nativescript/google-mobile-ads';
const ad = InterstitialAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');
```

3. Listen to the ad lifecycle events

To listen for the ad lifecycle events, such as when the ad is display or dismissed, call the `onAdEvent` method on the ad instance, before displaying the ad, passing it a callback function to handle the events.

```ts
import { InterstitialAd } from '@nativescript/google-mobile-ads';

const ad = InterstitialAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	switch (event) {
		case AdEventType.LOADED:
			break;
		case AdEventType.CLOSED:
			break;
		case AdEventType.OPENED:
			break;
		case AdEventType.IMPRESSION:
			break;
		case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
			break;
	}
});
```

4. Load the ad
   You load the ad by calling the `load` method on the ad instance.

```ts
import { InterstitialAd } from '@nativescript/google-mobile-ads';

const ad = InterstitialAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	switch (event) {
		case AdEventType.LOADED:
			break;
		case AdEventType.CLOSED:
			break;
		case AdEventType.OPENED:
			break;
		case AdEventType.IMPRESSION:
			break;
		case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
			break;
	}
});

ad.load();
```

5. Display the the ad

To display the ad, call the `show` method on the ad instance. This method is called after the `load` method.

```ts
import { InterstitialAd } from '@nativescript/google-mobile-ads';

const ad = InterstitialAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	switch (event) {
		case AdEventType.LOADED:
			break;
		case AdEventType.CLOSED:
			ad.show();
			break;
		case AdEventType.OPENED:
			break;
		case AdEventType.IMPRESSION:
			break;
		case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
			break;
	}
});

ad.load();
```

#### Next steps

- See [Interstitial best practices](https://www.youtube.com/watch?v=r2RgFD3Apyo&index=5&list=PLOU2XLYxmsIKX0pUJV3uqp6N3NeHwHh0c) and [interstitial ad guidance](https://support.google.com/admob/answer/6066980).
- Check out an [Interstitial ads case study](https://admob.google.com/home/resources/freaking-math-powers-revenue-increase-with-google-admob-support/).
- If you haven't already, create your own interstitial ad unit in the [AdMob UI](https://apps.admob.com/).

## Native Ads

Native ads are ad assets that are presented to users via UI components that are native to the platform. They're shown using the same types of views with which you're already building your layouts, and can be formatted to match the visual design of the user experience in which they live. In coding terms, this means that when a native ad loads, your app receives a NativeAd object that contains its assets, and the app (rather than the Google Mobile Ads SDK) is then responsible for displaying them.

### Adding a Native ad in NativeScript Core

To add a Native ad to your {N} Core app, follow these steps:

1. Register the plugin namespace under a prefix, `ui` (this can be any name), with the Page element.

```xml
<Page xmlns:ui="@nativescript/google-mobile-ads">
```

2. Use the prefix to access the `NativeAdView` and add it to markup.

```xml
<Page xmlns:ui="@nativescript/google-mobile-ads">
  <ActionBar title="Mobile Ads" />
  <StackLayout>
    <ui:NativeAdView height="400" loaded="{{nativeAdLoaded}}" />
  </StackLayout>
</Page>
```

### Testing Native ads in development mode

> **Note:** When developing your app, make sure you use test ad unit IDs rather than live, production ads. Failure to do so can lead to suspension of your account. Just make sure you replace the test ad unit ID with your own ad unit ID before publishing your app.

To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

3. Import the `NativeAdLoader` class from `@nativescript/google-mobile-ads` in the view model file.

```ts
import { NativeAdLoader } from '@nativescript/google-mobile-ads';
```

The `NativeAdLoader` class is an interface for managing the the Native ad.

4. Instantiate `NativeAdLoader`.
   Create an instance of `NativeAdLoader` by calling its constructor function. The constructor function accepts 3 parameters. The required adUnitId as the first parameter, optional RequestOptions and NativeAdOptions objects as the second and third parameter, respectively.

```ts
const loader = new NativeAdLoader('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy', null, {
	nativeAdOptions: {
		adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT,
	},
});
```

5. Listen to the Native ad lifecycle events

To listen to the Native ad [lifecycle events](), call the `onAdEvent` method on the `NativeAdLoader` instance when the `NativeAdView` has loaded.

```xml
<ui:NativeAdView height="400" loaded="{{ nativeAdLoaded }}">
  <GridLayout height="300" width="300">
    <Label id="headLineView" />
    <ui:MediaView id="mediaView" height="100%"/>
    <Label id="bodyView" />
    <Button id="callToActionView" />
  </GridLayout>
</ui:NativeAdView>
```

```ts
function nativeAdLoaded(event) {
	const view = event.object;

	loader.onAdEvent((event, error, data) => {
		if (event === NativeAdEventType.LOADED) {
			const ad = data as NativeAd;

			const headLineView = view.getViewById('headLineView');
			headLineView.text = ad.headline;
			const mediaView = view.getViewById('mediaView');
			view.mediaView = mediaView;
			mediaView.mediaContent = ad.mediaContent;
			const callToActionButton = view.getViewById('callToActionView');
			view.callToActionView = callToActionButton;
			callToActionButton.text = ad.callToAction;
			const bodyView = view.getViewById('bodyView');
			bodyView.text = ad.body;
			view.nativeAd = ad;
			console.log('nativead loaded');
		} else if (event === 'adFailedToLoad') {
			console.log('nativead failed to load', error);
		}
	});
}
```

6. Display the Native ad
   To display the Native ad, call the `load` method on a NativeAdLoader instance.

```ts
loader.load();
```

### NativeAdOptions interface

A NativeAdOptions object is used to set the following options on the native ad.
| Property | Type | Description |
|:---------|:-----|:----------- |
| `returnUrlsForImageAssets` | `boolean` | _Optional_: If set to `true`, the SDK will not load image asset content and native ad image URLs can be used to fetch content. Defaults to `false`. |
| `multipleImages` | `boolean`| _Optional_: Some image assets contain a series of images. Setting this property to `true` tells the app to display all the images of an asset. The `false`(the default) value informs the app to display the first image from the series of images in an image asset. |
| `adChoicesPlacement` | [AdChoicesPlacement](#adchoicesplacement) |_Optional_: The [AdChoices overlay](https://developers.google.com/admob/android/native/advanced#adchoices_overlay) is set to the top right corner by default. Apps can change which corner this overlay is rendered in by setting this property to one of the following: |
| `videoOptions` | [videoOptions](#videooptions)| _Optional_: Used to set video options for video assets returned as part of a native ad. If an ad contains a video(if `ad.mediaContent.hasVideoContent = true`), display the video. |
| `mediaAspectRatio` | [MediaAspectRatio](#mediaaspectratio) | _Optional_: This sets the aspect ratio for image or video to be returned for the native ad.

#### AdChoicesPlacement

```ts
enum AdChoicesPlacement {
	TOP_LEFT = 'topLeft',
	TOP_RIGHT = 'topRight',
	BOTTOM_RIGHT = 'bottomRight',
	BOTTOM_LEFT = 'bottomLeft',
}
```

#### videoOptions

The `videoOptions` property is an object with the following properties:
| Property | Type | Optional |
|:---------|:----|:------- |
| `startMuted` | `boolean` | _Yes_ |
| `clickToExpandRequested` | `boolean` | _Yes_ |
| `customControlsRequested` | `boolean` | _Yes_ |

#### MediaAspectRatio

```ts
enum MediaAspectRatio {
	LANDSCAPE = 'landscape',
	PORTRAIT = 'portrait',
	SQUARE = 'square',
	ANY = 'any',
}
```

That's it! Your app is now ready to display native ads.

### Next steps

- Learn more about native ads in our [native ad playbook](https://admob.google.com/home/resources/native-ads-playbook/).
- See [native ads policies and guidelines](https://support.google.com/admob/answer/6329638) for implementing native ads.
- Check out some customer success stories: [Case study 1](https://admob.google.com/home/resources/alarmmon-achieves-higher-rpm-with-admob-triggered-native-ads/), [Case Study 2](https://admob.google.com/home/resources/linghit-limited-doubles-ad-revenue-with-admob-native-ads/)

## Rewarded Ads

Rewarded ads are ads that users have the option of interacting with [in exchange for in-app rewards](https://support.google.com/admob/answer/7313578).

### Testing Rewarded ads in development mode

> **Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account. Make sure you replace the test unit ID with your ad unit ID before publishing your app.

To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

### Display a Rewarded ad

Follow these steps to display a Rewarded ad:

1. Import the `RewardedAd` class from `@nativescript/google-mobile-ads`.

```ts
import { RewardedAd } from '@nativescript/google-mobile-ads';
```

2. Create a `RewardedAd` instance

Create a Rewarded ad instance by calling the `createForAdRequest` static method on the `RewardedAd` class and passing it the ad unit id.

```ts
import { RewardedAd } from '@nativescript/google-mobile-ads';

const ad = RewardedAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');
```

3. Listen to the ad lifecycle events
   Before you call the `load` method to load the ad, call the `onAdEvent` method passing it a callback function to handle the ad events.

```ts
import { RewardedAd } from '@nativescript/google-mobile-ads';

const ad = RewardedAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	if (event === AdEventType.LOADED) {
		console.log('rewarded', 'loaded');
	} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
		console.error('loading error', error);
	}
});
```

4. Load the ad
   To load the ad, call the `load` method on the `RewardAd` instance.

```ts
import { RewardedAd } from '@nativescript/google-mobile-ads';

const ad = RewardedAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	if (event === AdEventType.LOADED) {
		console.log('rewarded', 'loaded');
	} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
		console.error('loading error', error);
	}
});
ad.load();
```

6. Display the ad

To show the ad on the screen, call the `show()` method on the ad instance.

```ts
import { RewardedAd } from '@nativescript/google-mobile-ads';

const ad = RewardedAd.createForAdRequest('ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy');

ad.onAdEvent((event, error, data) => {
	if (event === AdEventType.LOADED) {
		console.log('rewarded', 'loaded');
		ad.show();
	} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
		console.error('loading error', error);
	}
});
ad.load();
```

#### Rewarded ad Events

RewardAd emits the following lifecycle events that you can listen to:

```ts
ad.onAdEvent((event, error, data) => {
	switch (event) {
		case AdEventType.LOADED:
			break;
		case AdEventType.CLOSED:
			break;
		case AdEventType.OPENED:
			break;
		case AdEventType.IMPRESSION:
			break;
		case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
			break;
	}
});
```

`onAdEvent` with the event `rewarded_earned_reward`'is invoked when the user earns a reward. Be sure to implement this and reward the user for watching an ad.

### Targeting

The RequestConfiguration object collects the global configuration for every ad request and is applied by `MobileAds.getInstance().setRequestConfiguration()`.

### Child-directed ads setting

For child-directed ads setting, read [Child-directed setting](https://developers.google.com/admob/android/targeting#child-directed_setting).

The following example indicates that you want your content treated as child-directed for purposes of COPPA:

```ts
import { MobileAds, RequestConfiguration } from '@nativescript/google-mobile-ads';

const requestConfiguration: RequestConfiguration = {
	tagForChildDirectedTreatment: true,
};
MobileAds.getInstance().requestConfiguration = requestConfiguration;
```

### Handle ads requests for users under the age of consent

To handle ads requests for users under the age of consent, read [Users under the age of consent](https://developers.google.com/admob/android/targeting#users_under_the_age_of_consent).

The following example indicates that you want TFUA included in your ad request.

```ts
import { MobileAds, RequestConfiguration } from '@nativescript/google-mobile-ads';

const requestConfiguration: RequestConfiguration = {
	tagForUnderAgeOfConsent: true,
};
MobileAds.getInstance().requestConfiguration = requestConfiguration;
```

If the tags to enable the Child-directed setting and `tagForUnderAgeOfConsent`are both set to `true`, the child-directed setting takes precedence.

### Ad content filtering

This setting can be set via `RequestConfiguration.maxAdContentRating`:

Mobile ads returned for these requests have a content rating at or below that level. The possible values for this network extra are based on [digital content label classifications](https://support.google.com/admob/answer/7562142), and should be one of the following MaxAdContentRating objects:

- MaxAdContentRating.G
- MaxAdContentRating.PG
- MaxAdContentRating.T
- MaxAdContentRating.MA

The following code configures a `RequestConfiguration` object to specify that an ad content returned should correspond to a digital content label designation no higher than G:

```ts
import { MobileAds, MaxAdContentRating, RequestConfiguration } from '@nativescript/google-mobile-ads';

const requestConfiguration: RequestConfiguration = {
	maxAdContentRating: MaxAdContentRating.G,
};
MobileAds.getInstance().requestConfiguration = requestConfiguration;
```

## License

Apache License Version 2.0
