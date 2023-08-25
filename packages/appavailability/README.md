# @nativescript/app-availability

A plugin that checks if an app is installed on a device.

## Installation

```cli
npm install @nativescript/appavailability
```

## Use @nativescript/app-availability

```typescript
// examples of what to pass:
// - for iOS: "maps://", "twitter://", "fb://"
// - for Android: "com.facebook.katana"
available('twitter://').then((avail: boolean) => {
	console.log('App available? ' + avail);
});
```
### Open an app (with web fallback)

To open an app installed on the device, call the `openUrl()` method on the `Utils` class. Pass the app's identifier URL to the method.

The code below asynchronously checks if the Twitter mobile app is available on the device. If the app is availabe, `openUrl()` opens it . Otherwise, `openUrl()` opens the website instead.

```typescript
import { available } from '@nativescript/appavailability';
import { Utils } from '@nativescript/core';

const twitterScheme = 'twitter://';
available(twitterScheme).then((available) => {
	if (available) {
		// open in the app
		Utils.openUrl(twitterScheme + (isIOS ? '/user?screen_name=' : 'user?user_id=') + 'eddyverbruggen');
	} else {
		// open in the default browser
		Utils.openUrl('https://twitter.com/eddyverbruggen');
	}
});
```

To synchronously check for an app's availability, use the `availableSync()` function.

```typescript
import { availableSync } from '@nativescript/appavailability';
import { Utils } from '@nativescript/core';

if (availableSync('twitter://')) {
	Utils.openUrl('twitter://' + (isIOS ? '/user?screen_name=' : 'user?user_id=') + 'eddyverbruggen');
} else {
	Utils.openUrl('https://twitter.com/eddyverbruggen');
}
```

### Determine the correct identifier of an app.

- `Android` : search the Play Store and use the id in the URL. For Twitter this is `com.twitter.android` because the URL is `https://play.google.com/store/apps/details?id=com.twitter.android`.

- `iOS`:  Open Safari on your iPhone and type, for example,`'twitter://'` in the address bar. If the app launches, use that URL as the identifier.

## iOS whitelisting

To get useful results on iOS 9+, whitelist the URL Scheme you're querying in the application's `Info.plist`.

For example, to query for `twitter://`, `whatsapp://` and `fb://`, edit `app/App_ResourcesiOS/Info.plist` as follows:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>fb</string>
	<string>twitter</string>
	<string>whatsapp</string>
</array>
```

## Android Query Permission

Starting from Android API level 30 (Android 11), you must explicitly declare your app's intent to interact with other apps in the Android manifest file `AndroidManifest.xml`.

```xml
<manifest>
    <queries> 
        <package android:name="com.whatsapp" /> 
    </queries>
  
    <application ...>
    </application>
</manifest>
```

Replace `com.whatsapp` with the package name of the app you want to interact with.

## API

| Methods| Return Type| Description|
|--------|------------|------------|
|`available(packageName:string)`|`Promise<boolean>`| Asynchronously checks if the app with the specified `packageName` is installed on the device.|
|`availableSync(packageName:string)`|`boolean`| Synchronously checks if the app with the specified `packageName` is installed on the device.|

## License

Apache License Version 2.0
