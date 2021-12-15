# @nativescript/biometrics

```cli
ns plugin add @nativescript/biometrics
```

## Replaces @nativescript/fingerprint-auth

This plugin superceeds [@nativescript/fingerprint-auth](../fingerprint-auth)

## API

Want a nicer guide than these raw code samples? Read [Nic Raboy's blog post about this plugin](https://www.thepolyglotdeveloper.com/2016/03/add-touch-id-authentication-support-to-your-nativescript-app/).

### `available`

#### JavaScript

```js
var biometricAuthPlugin = require('@nativescript/biometrics');
var biometricAuth = new biometricAuthPlugin.BiometricAuth();

biometricAuth.available().then(function (avail) {
	console.log('Available? ' + avail);
});
```

#### TypeScript

```typescript
import { BiometricAuth, BiometricIDAvailableResult } from "@nativescript/biometrics";

class MyClass {
  private biometricAuth: BiometricAuth;

  constructor() {
    this.biometricAuth = new BiometricAuth();
  }

  this.biometricAuth.available().then((result: BiometricIDAvailableResult) => {
    console.log(`Biometric ID available? ${result.any}`);
    console.log(`Touch? ${result.touch}`);
    console.log(`Face? ${result.face}`);
	console.log(`Biometrics? ${result.biometrics}`);
  });
}
```

### `verifyBiometric`

Note that on the iOS simulator this will just `resolve()`. TODO - is this true

```typescript
biometricAuth
	.verifyBiometric({
		title: 'Android title', // optional title (used only on Android)
		message: 'Scan yer finger', // optional (used on both platforms) - for FaceID on iOS see the notes about NSFaceIDUsageDescription
	})
	.then((result?: BiometricResult) => {
		if (result.code === ERROR_CODES.SUCCESS) {
			console.log('Biometric ID OK');
		} 
	})
	.catch((err) => console.log(`Biometric ID NOT OK: ${JSON.stringify(err)}`));
```

### `verifyBiometricWithCustomFallback` (iOS only, falls back to `verifyBiometric` on Android)

Instead of falling back to the default Passcode UI of iOS you can roll your own.
Just show that when the error callback is invoked.

```typescript
biometricAuth
	.verifyBiometricWithCustomFallback({
		message: 'Scan yer finger', // optional, shown in the fingerprint dialog (default: 'Scan your finger').
		fallbackMessage: 'Enter PIN' // optional, the button label when scanning fails (default: 'Enter password').
		
	})
	.then(
		() => {
			console.log('Fingerprint was OK');
		},
		(error) => {
			// when error.code === -3, the user pressed the button labeled with your fallbackMessage
			console.log('Fingerprint NOT OK. Error code: ' + error.code + '. Error message: ' + error.message);
		}
	);
```

## Face ID (iOS)

iOS 11 added support for Face ID and was first supported by the iPhone X.
The developer needs to provide a value for `NSFaceIDUsageDescription`, otherwise your app may crash.

You can provide this value (the reason for using Face ID) by adding something like this to `app/App_Resources/ios/Info.plist`:

```xml
  <key>NSFaceIDUsageDescription</key>
  <string>For easy authentication with our app.</string>
```

## Security++ (iOS)

Since iOS9 it's possible to check whether or not the list of enrolled fingerprints changed since
the last time you checked it. It's recommended you add this check so you can counter hacker attacks
to your app. See [this article](https://www.linkedin.com/pulse/fingerprint-trojan-per-thorsheim/) for more details.

So instead of checking the fingerprint after `available` add another check.
In case `didFingerprintDatabaseChange` returns `true` you probably want to re-authenticate your user
before accepting valid fingerprints again.

```typescript
biometricAuth.available().then((avail) => {
	if (!avail) {
		return;
	}
	biometricAuth.didFingerprintDatabaseChange().then((changed) => {
		if (changed) {
			// re-auth the user by asking for his credentials before allowing a fingerprint scan again
		} else {
			// call the fingerprint scanner
		}
	});
});
```

## Biometrics android

### Normal operation

If you do not pass any of the android options to the verify methods then the plugin will create a secure key, call the authorization methods to trigger face/fingerprint and then attempt to use the key to encrypt some text.  The idea being that the key will not be accessable unless the user has successfully authenticated.

This however is not foolproof and the most secure method is to pass the android options to encrypt/decrypt text.

### Encrypting/Decrypting with Authentication

The best practice is to use the android specific options to encrypt some secret that is validated independantly, this is more secure because the key used for decryption cannot be accessed without proper authentication,  therefor your secret cannot be decrypted properly.

1.  Encrypt your secret

	Call ```verifyBiometric``` with the relevant properties.

	```ts
	biometricAuth
				.verifyBiometric({
					title: 'Enter your password',
					message: 'Scan yer finger', // optional
					android: { pinFallback: false, // do not allow pnFallback to enable crypto operations
							keyName: 'MySecretKeyName', // The name of the key that will be created/used
							encryptText: 'The Secret I want encrypted' },
				})
				.then((result) => {
					var encryptedText= result.encrypted  // The text encrypted with a key named "MySecretKeyName"
					var IV = result.iv // the  initialization vector used to encrypt
					
					
				})
				.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));

	```

	The encrypted result and vector would then be stored in your app and used the next time the user logged in be calling the ```verifyBiometric``` again:

1.  Decrypt your secret
	```ts
	biometricAuth
				.verifyBiometric({
					title: 'Enter your password',
					message: 'Scan yer finger', // optional
					android: { pinFallback: false, // do not allow pnFallback to enable crypto operations
							keyName: 'MySecretKeyName', // The name of the key that will be created/used
							decryptText: 'The encrypted text retrieved previously',
							iv: 'The IV retrieved previously` }
				})
				.then((result) => {
					var decryptedText= result.decrypted  // The unencrypted secret 
					verifyMySecret(decryptedText) // verify the secret by some means, e.g. a call to a back end server.
					
					
				})
				.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));

	```

### Fallback to Pin

Allowing the user to fallback on lock screen credentials ( pin etc. ) disables cryptography.  

Also for phones running API < 30 only fingerprint is used, because the old fingerprint api is called.

e.g.

	```ts
	biometricAuth
				.verifyBiometric({
					title: 'Enter your password',
					message: 'Scan yer finger', // optional
					android: { pinFallback: true, // allow pnFallback to enable crypto operations
					 }
				})
				.then((result) => {
					console.log('Fingerprint/ PIN was OK');
					
				})
				.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));

	```


## License

Apache License Version 2.0
