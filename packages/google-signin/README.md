# @nativescript/google-signin

```cli
ns plugin add @nativescript/google-signin
```

## Prerequisites

## Android

To access Google Sign-In, you'll need to make sure to [register your application](https://firebase.google.com/docs/android/setup).

You don't need to include the google-services.json file in your app unless you are using Google services that require it. You do need to enable the OAuth APIs that you want, [using the Google Cloud Platform API manager](https://console.developers.google.com/).

Make sure you've filled out all required fields in the console for [OAuth consent screen](https://console.developers.google.com/apis/credentials/consent). Otherwise, you may encounter APIException errors.

##

This plugin requires iOS 9.0 or higher.

First register your application.
Make sure the file you download in step 1 is named GoogleService-Info.plist.
Move or copy GoogleService-Info.plist into the App_Resources/iOS/.
Open Xcode, then right-click on Runner directory and select Add Files to "Runner".
Select GoogleService-Info.plist from the file manager.
A dialog will show up and ask you to select the targets, select the Runner target.
Then add the CFBundleURLTypes attributes below into the App_Resources/iOS/Info.plist file.

```xml
<!-- Google Sign-in Section -->
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>Editor</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<!-- TODO Replace this value: -->
			<!-- Copied from GoogleService-Info.plist key REVERSED_CLIENT_ID -->
			<string>com.googleusercontent.apps.292142294722-23nmrq9mn8rhpqipjc1bt4qecga3qgsf</string>
		</array>
	</dict>
</array>
<!-- End of the Google Sign-in Section -->
```

### iOS additional requirement

Note that according to https://developer.apple.com/sign-in-with-apple/get-started, starting June 30, 2020, apps that use login services must also offer a "Sign in with Apple" option when submitting to the Apple App Store.

Consider using [this Apple sign in plugin](https://github.com/EddyVerbruggen/nativescript-apple-sign-in)

## Usage

```ts
import { GoogleSignin } from '@nativescript/google-signin';

try {
	await GoogleSignin.configure();
	const user = await GoogleSignin.signIn();
} catch (e) {}
```

### Button

Ensure you've included xmlns:ui="@nativescript/google-signin" on the Page element

```xml
<ui:GoogleSigninButton tap="handleSignIn" />
```

```ts
import { GoogleSignin } from '@nativescript/google-signin';
export function handleSignIn(args){
try {
	await GoogleSignin.configure();
	const user = await GoogleSignin.signIn();
} catch (e) {}
}
```
#### Angular usage
On your `module.ts`
```ts
import { registerElement } from '@nativescript/angular';
registerElement('GoogleSignInButton', () => require('@nativescript/google-signin').GoogleSignInButton);
```

And then it can be called from your `html` file choosing the desired option for colorScheme and colorStyle as:
```xml
<GoogleSignInButton colorScheme='auto' colorStyle='standard' (tap)="yourGoogleSigninFunction()"></GoogleSignInButton>
```

`colorScheme` supports 'auto', 'dark' and 'light' options and `colorStyle`supports 'standard'. 'wide' and 'icon'. Since it's a button, you can also set some of its properties such as `height` or `width`.

## configure(options)

It is mandatory to call this method before attempting to call signIn() and signInSilently(). In typical scenarios, configure needs to be called only once, after your app starts. All parameters are optional.

## signIn()

Prompts a modal to let the user sign in into your application. Resolved promise returns an user object. Rejects with error otherwise.

## signInSilently()

This method returns the current user and rejects with an error otherwise.

## isSignedIn()

This method may be used to find out whether some user is currently signed in.

## playServicesAvailable()

Checks if device has Google Play Services installed. Always resolves to true on iOS.

Presence of up-to-date Google Play Services is required to show the sign in modal, but it is not required to perform calls to configure and signInSilently. Therefore, we recommend to call ``hasPlayServices`` directly before ``signIn``.

```ts
import { GoogleSignin } from "@nativescript/google-signin";

playServicesAvailable: boolean = await GoogleSignin.playServicesAvailable();
```

## signOut()

Signs out the current user.

## disconnect()

Disconnects the current user.

## getTokens()

Resolves with an object containing { idToken: string, accessToken: string, } or rejects with an error. Note that using accessToken for identity assertion on your backend server is discouraged.

## getCurrentUser()

This method resolves with null or user object.

## License

Apache License Version 2.0
