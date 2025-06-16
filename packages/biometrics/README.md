# @nativescript/biometrics

## Contents
* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/biometrics](#use-nativescriptbiometrics)
	* [Check if the device supports biometrics authentification](#check-if-the-device-supports-biometrics-authentification)
	* [Biometrics authentification support on Android](#biometrics-authentification-support-on-android)
	* [Face ID authentification support on iOS](#face-id-authentification-support-on-ios)
	* [Verify user biometrics](#verify-user-biometrics)
* [API](#api)
	* [BiometricAuth class](#biometricauth-class)
	* [BiometricIDAvailableResult interface](#biometricidavailableresult-interface)
	* [IOSOptions interface](#iosoptions-interface)
	* [Android interface](#androidoptions-interface)
	* [BiometricResult interface](#biometricresult-interface)
	* [ERROR_CODES Enum](#error_codes-enum)
* [License](#license)

## Intro
A plugin that allows you to authenticate users with biometrics, such as fingerprints, facial recognition, etc. 

> **Note**
This plugin replaces [@nativescript/fingerprint-auth](../plugins/fingerprint-auth).

### Prerequisites:
Before you can verify a user’s biometrics, the device must already have biometric data (such as fingerprints or a face scan) enrolled at the system level. This enrollment is handled by the device’s operating system settings—your app or this plugin does not capture or store biometric data directly. Users must set up biometrics through their device’s security settings (e.g., `Settings` > `Security` > `Biometrics` on Android, or `Settings` > `Face ID` & `Passcode` on iOS).

### How it works:
When you call the plugin’s verification methods, the plugin asks the operating system to prompt the user for their enrolled biometric (fingerprint, face, etc.) and returns the result. The plugin never sees or manages the actual biometric data—only the OS does.


## Installation

```cli
npm install @nativescript/biometrics
```
> **Note**
This plugin replaces [@nativescript/fingerprint-auth](../fingerprint-auth).

## Use the @nativescript/biometrics plugin

### Check if the device supports biometrics authentification

To check if the device supports biometrics authentication, call the `available()` method on a `BiometricAuth` instance.

```ts
import { BiometricAuth, BiometricIDAvailableResult } from "@nativescript/biometrics";

var biometricAuth = new BiometricAuth();

biometricAuth.available().then((result: BiometricIDAvailableResult) => {
console.log(`Biometric ID available? ${result.any}`);
console.log(`Touch? ${result.touch}`);
console.log(`Face? ${result.face}`);
console.log(`Biometrics? ${result.biometrics}`);

});

```

#### Biometrics authentification support on Android

- It's only supported on `API 23+`. 
- In some devices, the OS does not consider face recognition secure enough and as a result, your app cannot use it for biometric authentication. 
This is the case with many Samsung devices. For example, Samsung Galaxy S10 ha Consequently, if the device has Face Recognition enabled and face scan saved, `available()` returns `{ any: true, biometrics: false }`. 

#### Face ID authentification support on iOS

- It is only supported in iOS 11+.

- To allow Face ID support in your app, provide the reason of supporting it as the value of the `NSFaceIDUsageDescription` key in the `app/App_Resources/ios/Info.plist` file:

```xml
<key>NSFaceIDUsageDescription</key>
<string>For easy authentication with our app.</string>
```
- On a simulator, to enroll a face and test Face ID authentification, use the `Features->Face ID` menu items.

### Verify user biometrics

To verify user biometrics, call the `verifyBiometric()` method and pass it a [VerifyBiometricOptions](#verifybiometricoptions) object.

> **Note: iOS** 
`verifyBiometric()` will fail on IOS simulator unless the `pinfallBack` option is used.

```typescript
biometricAuth
	.verifyBiometric({
		title: 'Android title', // optional title (used only on Android)
		message: 'Scan your finger', // optional (used on both platforms) - for FaceID on iOS see the notes about NSFaceIDUsageDescription
		fallbackMessage: 'Enter your PIN', // this will be the text to show for the "fallback" button on the biometric prompt
		pinFallback: true, // allow fall back to pin/password
	})
	.then((result?: BiometricResult) => {
		if (result.code === ERROR_CODES.SUCCESS) {
			console.log('Biometric ID OK');
		}
	})
	.catch((err) => console.log(`Biometric ID NOT OK: ${JSON.stringify(err)}`));
```


### Detect change in enrolled fingerprints (iOS)

For iOS 9+ you can check if enrolled fingerprints have changed since
the last time you checked it. It's recommended you add this check to counter hacker attacks
on your app. For more details, see [this article](https://www.linkedin.com/pulse/fingerprint-trojan-per-thorsheim/).

To check if enrolled fingerprints have changed, call the `didBiometricDatabaseChange()` method. If it returns `true`, you probably want to re-authenticate your user
before accepting valid fingerprints again.

```typescript
biometricAuth.available().then((avail) => {
	if (!avail) {
		return;
	}
	biometricAuth.didBiometricDatabaseChange().then((changed) => {
		if (changed) {
			// re-auth the user by asking for his credentials before allowing a fingerprint scan again
		} else {
			// call the fingerprint scanner
		}
	});
});
```

## Biometrics and cryptography

To combine biometrics authentification with cryptography, for more secure data protection, set the `secret` and `keyName` options when you call `verifyBiometric()`.

If you do not pass the `pinFallback` or `keyName` options to the `verifyBiometric()` method, the plugin will automatically:
1. create a secure key
2. prompts the user to authenticate for a face/fingerprint
3. attempts to use the key to encrypt some text. 

That automatic key generation, however, is not foolproof.


### Encrypting/Decrypting with biometrics authentication

The best practice is to use the options to encrypt some secret that is validated independently.

#### Encrypting your secret


To encrypt some sensitive string, pass the `secret` and `keyName`options to the `verifyBiometric()` method. Set the sensitive string as the `secret` property's value and the name of the key to access that secret as the value of the `keyName` property.

```typescript
biometricAuth
    	.verifyBiometric({
    		title: 'Enter your password',
    		message: 'Scan your finger', // optional
    		pinFallback: false, // do not allow pinFallback to enable crypto operations
    		keyName: 'MySecretKeyName', // The name of the key that will be created/used
    		secret: 'The Secret I want encrypted',
    	})
    	.then((result) => {
    		const encryptedText = result.encrypted; // The text encrypted with a key named "MySecretKeyName" (Android Only)
    		const IV = result.iv; // the  initialization vector used to encrypt (Android Only)

    		// For IOS the secret is stored in the keycain
    	})
    	.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
```

For Android, the encrypted and initialization vector is then stored in your app and used each time when signing in the user with `verifyBiometric()`:

####  Decrypting your secret

```typescript
biometricAuth
    	.verifyBiometric({
    		title: 'Enter your password',
    		message: 'Scan yer finger', // optional
    		keyName: 'MySecretKeyName', // The name of the key that will be created/used
    		pinFallback: false, // do not allow pinFallback to enable crypto operations
    		android: {
    			decryptText: 'The encrypted text retrieved previously',
    			iv: 'The IV retrieved previously',
    		},
    		ios: { fetchSecret: true }, // Tell IOS to fetch the secret
    	})
    	.then((result) => {
    		const decryptedText = result.decrypted; // The unencrypted secret
    		verifyMySecret(decryptedText); // verify the secret by some means, e.g. a call to a back end server.
    	})
    	.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
```

#### Fallback to Pin

To allow biometrics authentification to fallback on lock screen credentials, set `pinFallback` to `true`. Note that thissetting also disables cryptography.


```typescript
biometricAuth
	.verifyBiometric({
		title: 'Enter your password',
		message: 'Scan yer finger', // optional
		fallbackMessage: 'Enter PIN', // optional
		pinFallback: true, 
		ios: { customFallback: false }, // passing true here will show the fallback message and allow you to handle this in a custom manner.
	})
	.then((result) => {
		console.log('Fingerprint/ PIN was OK');
	})
	.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
```

## API

### BiometricAuth Class

| Name | Return Type | Description|
|-----|-------|-----------|
|`available()`|`Promise<BiometricIDAvailableResult>`| Checks if biometric authentification is supported on the device. See [BiometricIDAvailableResult](#biometricidavailableresult) for more details.|
| `didBiometricDatabaseChange(options?: VerifyBiometricOptions)`|`Promise<boolean>` | Checks if there is a change in a biometric of the user.|
| `verifyBiometric(options: VerifyBiometricOptions)`|`Promise<BiometricResult>`| Verifies the biometrics auth using the specified [VerifyBiometricOptions](#verifybiometricoptions) object. |
| `close()` | `void`| Closes Face/Fingerprint prompt. If `pinFallBack` is `true`, `close()` does not have effect on Android.|
| `deleteKey(keyName?: string)`|`void`| Deletes the specified key. |

### BiometricIDAvailableResult interface

| Name | Type| Description|
|------|-----|------------|
| `any`| `boolean`| `true` if no biometric authentification is available on android but device has pin/pattern/password set.|
| `touch`| `boolean`| _Optional_: `iOS only`|
| `face`| `boolean`| _Optional_: `iOS only`|
| `biometrics` | `boolean` | _Optional_: (`Android only`) indicates if Face/Fingerprint is available.|

### VerifyBiometricOptions interface

| Name | Type| Description|
|------|-----|------------|
| `title`| `string`| _Optional_: (`Android only`)The title for the the fingerprint screen. Defaults to whatever the device default is.|
| `subTitle`| `string`| _Optional_ : (`Android only`) Subtitle in the fingerprint screen. Defaults to `''`|
| `message` | `string`| _Optional_: Description of the finngerprint screen. Defaults to `'Scan your finger'` on iOS and on Android is likely `'Enter your device password to continue'`.|
| `confirm`| `boolean`|  _Optional_ : (`Android only`) The confirm button after biometrics have been verified in the fingerprint screen. Defaults to `false`. |
| `fallbackMessage` | `string` | _Optional_: Button label when scanning the fingerprint fails. Defaults to `'Enter password'`. <br>On Android: <br>- when `pinFallback`= `true` this will be the text displayed on the pin dialog.<br>- When `pinFallback` =  `false` this will be the Negative button text on the Biometric Prompt.|
| `pinFallback` | `boolean` | _Optional_: Allow Fallback to Pin - note that if `true` no cryptographic operations will happen and Face ID is not available on Android. |
| `keyName` | `string`| _Optional_: Name of the key to use for crypto operations. Will be created if it you don't provide it. It's not used if `pinFallback` = `true`.|
| `android` | [AndroidOptions](#androidoptions) | _Optional_: Android-specific options. |
| `ios`| [IOSOptions](#iosoptions) | _Optional_: iOS-specific options. |

### IOSOptions interface

| Name | Type| Description|
|------|-----|------------|
| `customFallback` | `boolean` | _Optional_: Indicates whether to allow a custom fallback from biometrics.|
| `fetchSecret` | `boolean` | _Optional_: Indicates whether to attempt to fetch secret from the specified key.|

### AndroidOptions interface

| Name | Type| Description|
|------|-----|------------|
| `decryptText` | `string`|  If set and `pinFallback` is `true`, and `keyName` is set then this string will be decrypted via the Biometric controlled Key. |
 If set and pinFallback is true, and keyName is set then this string will be decrypted via the Biometric controlled Key.|
| `iv`| `string` | _Optional_: Retrieved from the result of an encryption. |
| `validityDuration` | `number` | _Optional_: The period, in seconds, for which operations on the key are valid without triggering a biometric prompt.|


### BiometricResult interface

| Name | Type| Description|
|------|-----|------------|
|`code`| [ERROR_CODES](#error_codes-enum) |
| `message` | `string` | |
| `encrypted` |  `string` | _Optional_ |
| `decrypted` |`string` | _Optional_ |
| `iv` |  `string` | _Optional_ |

### ERROR_CODES Enum

```typescript
enum ERROR_CODES {
	PASSWORD_FALLBACK_SELECTED = -3, // historically this is what iOS uses, so using that as well
	SUCCESS = 0,
	DEVELOPER_ERROR = 10,
	NOT_AVAILABLE = 20,
	NOT_CONFIGURED = 30,
	NOT_RECOGNIZED = 40,
	RECOVERABLE_ERROR = 50,
	USER_CANCELLED = 60,
	UNEXPECTED_ERROR = 70,
}
```
## License

Apache License Version 2.0
