# @nativescript/secure-storage

Secure Storage using [SAMKeychain](https://github.com/soffes/SAMKeychain) on iOS and [Hawk](https://github.com/orhanobut/hawk) on Android.

```javascript
npm install @nativescript/secure-storage
```

## API

### `set` | `setSync`

```ts
// require the plugin
import { SecureStorage } from "@nativescript/secure-storage";

// instantiate the plugin
const secureStorage = new SecureStorage();

// async
secureStorage.set({
  key: "foo",
  value: "I was set at " + new Date()
}).then(success => console.log("Successfully set a value? " + success));

// sync
const success = secureStorage.setSync({
  key: "foo",
  value: "I was set at " + new Date()
});
```

### `get` | `getSync`
Will return `null` if not found.

```ts
// async
secureStorage.get({
  key: "foo"
}).then(value => console.log("Got value: " + value));

// sync
const value = secureStorage.getSync({
  key: "foo"
});
```

### `remove` | `removeSync`

```ts
// async
secureStorage.remove({
  key: "foo"
}).then(success => console.log("Successfully removed a value? " + success));

// sync
const success = secureStorage.removeSync({
  key: "foo"
});
```

### `removeAll` | `removeAllSync`

```ts
// async
secureStorage.removeAll().then(success => console.log("Successfully removed a value? " + success));

// sync
const success = secureStorage.removeAllSync();
```

### `clearAllOnFirstRun` | `clearAllOnFirstRunSync`
These functions can be used if you want to clear data when your app is reinstalled.

This is only really useful **on iOS** because if you write something (through this plugin) to the Keychain, this data **won't** be removed when the app is uninstalled.
So the next time the same app is installed, it will find the data in the keychain.

So if you want to clear 'lingering' data from a previous install, make sure you run one of these
methods before using other methods this plugin provides.

```ts
// async
secureStorage.clearAllOnFirstRun().then(success => {
    console.log(success ? "Successfully removed all data on the first run" : "Data not removed because this is not the first run");
});

// sync
const success = secureStorage.clearAllOnFirstRunSync();
```

### `isFirstRun` | `isFirstRunSync`
As a bonus, you can piggyback the 'first run' mechanism to do anything you want when the plugin detects
this is the first run (after an install or install-delete-reinstall).

```ts
// sync
if (secureStorage.isFirstRunSync()) {
  // do whatever you want
}

// async
secureStorage.isFirstRun().then(isFirst => {
  // if isFirst is true, do whatever you like
});
```

## iOS Security++
By default the plugin uses `kSecAttrAccessibleAlwaysThisDeviceOnly` access control to the keychain. This means that the keychain value can be accessed even if the device is locked. If you want to enhance security and you do not need background access, or if you want to allow the value to be backed up and migrated to another device, you can use any of keys defined [here](https://developer.apple.com/documentation/security/ksecattraccessiblealwaysthisdeviceonly?language=objc#see-also) and pass it when you create an instance of `SecureStorage`, for example
```ts
declare const kSecAttrAccessibleWhenUnlockedThisDeviceOnly; // This is needed in case you don't have tns-platform-declarations module installed. 
const secureStorage = new SecureStorage(kSecAttrAccessibleWhenUnlockedThisDeviceOnly);
```

## iOS Simulator

Currently this plugin defaults to using `NSUserDefaults` on **iOS Simulators**. You can change this behaviour by providing `disableFallbackToUserDefaults` to the constructor of `SecureStorage`. This then uses the keychain instead of `NSUserDefaults` on simulators.

If you're running into issues similar to [issue_10](https://github.com/EddyVerbruggen/nativescript-secure-storage/issues/10), consider using the default behaviour again.

## Credits
* On __iOS__ we're leveraging the KeyChain using the [SAMKeychain](https://github.com/soffes/SAMKeychain) library (on the Simulator `NSUserDefaults`),
* On __Android__ we're using [Hawk](https://github.com/orhanobut/hawk) library which internally uses [Facebook conceal](https://github.com/facebook/conceal).
* Thanks, [Prabu Devarrajan](https://github.com/prabudevarrajan) for [adding the `deleteAll` function](https://github.com/EddyVerbruggen/nativescript-secure-storage/pull/11)!
* Thank you [Eddy Verbruggen](https://github.com/EddyVerbruggen) for all the years of service and great work!

## License

Apache License Version 2.0
