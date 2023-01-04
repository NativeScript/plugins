# @nativescript/biometrics

```cli
npm install @nativescript/biometrics
```
> **Note**
This plugin replaces [@nativescript/fingerprint-auth](../fingerprint-auth).


## Using biometrics

### Checking for support

To check if the device support biometrics authentication, call the `available()`.

```js
var biometricAuthPlugin = require('@nativescript/biometrics');
var biometricAuth = new biometricAuthPlugin.BiometricAuth();

biometricAuth.available().then(function (avail) {
	console.log('Available? ' + avail);
});
```
```typescript
import { BiometricAuth, BiometricIDAvailableResult } from "@nativescript/biometrics";

class MyClass {
  private biometricAuth: BiometricAuth;

  constructor() {
    this.biometricAuth = new BiometricAuth();
	
	this.biometricAuth.available().then((result: BiometricIDAvailableResult) => {
    console.log(`Biometric ID available? ${result.any}`);
    console.log(`Touch? ${result.touch}`);
    console.log(`Face? ${result.face}`);
	console.log(`Biometrics? ${result.biometrics}`);
  });
  }

  
}
```
> **Note: Android** 
It's only supported on `API 23+`. <br> <br>In some devices, face recognition isn't considered secure enough by the system to be used as biometric authentication,therefore it cannot be used for biometric authentication. This is decided by the device itself.
This is the case in many Samsung devices. For example, Samsung Galaxy S10 has both fingerprint scanner and face recognition but only fingerprints are accepted as biometric authentication. <br> <br>So what happens is: <br>- If the device has Face Recognition enabled and face scan saved,calling `available()` returns `{ any: true, biometrics: false }`. You might expect the device to show Face Recognition when you call `verifyBiometric()` but Samsung does not consider Face Recognition secure on this device so you'll never be prompted. <br>- If you enroll a fingerprint in the Touch Recognition and call the `verifyBiometric()` method, the user will be prompted for the fingerprint scan.

### Verifying a user's biometric

To verify a user's biometric, call the `verifyBiometric()` method.

> **Note: iOS** 
Use `Features->Face ID` menu items to enroll a face and signal successs/failure to recognize a face.
`verifyBiometric()` will fail on IOS simulator unless `pinfallBack` is used.

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

### Requirements for Face ID Auth (iOS)

Face ID support was added iOS 11+. To allow Face ID support in your app, you need to state the reason for it by adding the value for the `NSFaceIDUsageDescription` key to the `app/App_Resources/ios/Info.plist` file:

```xml
  <key>NSFaceIDUsageDescription</key>
  <string>For easy authentication with our app.</string>
```

### Detecting change in enrolled fingerprints (iOS)

Since iOS 9 you can check if there is change in enrolled fingerprints since
the last time you checked it. It's recommended you add this check so you can counter hacker attacks
to your app. See [this article](https://www.linkedin.com/pulse/fingerprint-trojan-per-thorsheim/) for more details.

To check if there is a change in enrolled fingerprints, call the `didBiometricDatabaseChange()` method. If it returns `true`, you probably want to re-authenticate your user
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

### Normal operation

If you do not pass the `pinFallback` or `keyName` options to the `verifyBiometric()` method, then the plugin will create a secure key, call the authorization methods to trigger face/fingerprint and then attempt to use the key to encrypt some text. The idea being that the key will not be accessible unless the user has successfully authenticated.

This however is not foolproof and the most secure method is to pass the `secret` and `keyName`options to encrypt/decrypt text.

### Encrypting/Decrypting with Authentication

The best practice is to use the options to encrypt some secret that is validated independently.

#### Encrypting your secret

To encrypt a secret key name, pass the `secret` and `keyName`options to the `verifyBiometric()`. 

    ```ts
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

For Android the encrypted result and vector would then be stored in your app and used the next time when signing in the user by calling the `verifyBiometric()` again:

####  Decrypting your secret

    ```ts
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

### Fallback to Pin

To allow the user to fallback on lock screen credentials, set `pinFallback` to `true`. This also disables cryptography.

```ts
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
| `didBiometricDatabaseChange(options?: VerifyBiometricOptions)`|`Promise<boolean>` | Checks if there is a change in a biometric.|
| `verifyBiometric(options: VerifyBiometricOptions)`|`Promise<BiometricResult>`| Verifies the biometrics auth using the specified [VerifyBiometricOptions]() object. |
| `close()` | `void`| Closes Face/Fingerprint prompt. Will not do anything on Android if `pinFallBack` is `true`.|
| `deleteKey(keyName?: string)`|`void`| Deletes the specified key. |

### BiometricIDAvailableResult
| Name | Type| Description|
|------|-----|------------|
| `any`| `boolean`| `true` if no biometric authentification is available on android but device has pin/pattern/password set.|
| `touch`| `boolean`| _Optional_: `iOS only`|
| `face`| `boolean`| _Optional_: `iOS only`|
| `biometrics` | `boolean` | _Optional_: (`Android only`) indicates if Face/Fingerprint is available.|

### VerifyBiometricOptions
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

### IOSOptions
| Name | Type| Description|
|------|-----|------------|
| `customFallback` | `boolean` | _Optional_: Indicates whether to allow a custom fallback from biometrics.|
| `fetchSecret` | `boolean` | _Optional_: Indicates whether to attempt to fetch secret from the specified key.|

### AndroidOptions
| Name | Type| Description|
|------|-----|------------|
| `decryptText` | `string`|  If set and `pinFallback` is `true`, and `keyName` is set then this string will be decrypted via the Biometric controlled Key. |
 If set and pinFallback is true, and keyName is set then this string will be decrypted via the Biometric controlled Key.|
| `iv`| `string` | _Optional_: Retrieved from the result of an encryption. |
| `validityDuration` | `number` | _Optional_: The period, in seconds, for which operations on the key are valid without triggering a biometric prompt.|

### BiometricResult
| Name | Type| Description|
|------|-----|------------|
|`code`| [ERROR_CODES](#error_codes-enum) |
| `message` | `string` | |
| `encrypted` |  `string` | _Optional_ |
| `decrypted` |`string` | _Optional_ |
| `iv` |  `string` | _Optional_ |

### ERROR_CODES Enum

```ts
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
