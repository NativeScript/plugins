# @nativescript/app-availability

A plugin to check for the availability of other apps on the device.

## Installation

```cli
npm install @nativescript/appavailability
```

## Usage

### Import

```typescript
import { available } from '@nativescript/appavailability';
//or
import { availableSync } from '@nativescript/appavailability';
```

```typescript
// examples of what to pass:
// - for iOS: "maps://", "twitter://", "fb://"
// - for Android: "com.facebook.katana"
available('twitter://').then((avail: boolean) => {
	console.log('App available? ' + avail);
});
```
### Opening an app (with web fallback)

Once you have confirmed that the app is installed on the device, you probably want to launch it.
Here's a snippet that opens the mobile Twitter app and falls back to the website if it's not installed.

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

And a more concise, synchronous way would be:

```typescript
import { availableSync } from '@nativescript/appavailability';
import { Utils } from '@nativescript/core';

if (availableSync('twitter://')) {
	Utils.openUrl('twitter://' + (isIOS ? '/user?screen_name=' : 'user?user_id=') + 'eddyverbruggen');
} else {
	Utils.openUrl('https://twitter.com/eddyverbruggen');
}
```
### Determining the correct identifier for an app.

- `Android:` simply search the Play Store and use the id in the URL. For Twitter this is `com.twitter.android` because the URL is `https://play.google.com/store/apps/details?id=com.twitter.android`.
- `iOS:` this one is a bit harder but this site should cover most apps you're interested in. When in doubt you can always fire up Safari on your iPhone and type for example `'twitter://'` in the address bar if the app launches you're good.

## iOS whitelisting

To get useful results on iOS 9+ you need to whitelist the URL Scheme you're querying in the application's `Info.plist`.

For example, to query for `twitter://`, `whatsapp://` and `fb://`, edit `app/App_ResourcesiOS/Info.plist` as follows:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>fb</string>
	<string>twitter</string>
	<string>whatsapp</string>
</array>
```

## API

| Methods| Return Type| Description|
|--------|------------|------------|
|`available(packageName:string)`|`Promise<boolean>`| Asynchronously checks if the app with the specified `packageName` is installed on the device.|
|`availableSync(packageName:string)`|`boolean`| Synchronously checks if the app with the specified `packageName` is installed on the device.|

## License

Apache License Version 2.0
