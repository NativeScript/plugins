# @nativescript/google-signin

## Table of Contents
* [Installation](#installation)
* [Prerequisites](#prerequisites)
	* [Android](#android)
	* [iOS](#ios)
* [Usage](#usage)
	* [Signing In](#signing-in)
	* [GoogleSignInButton](#googlesigninbutton)
		* [Core](#core)
		* [Angular](#angular)

* [API](#api)
	* [GoogleSignin](#googlesignin)
		* [configure()](#configure)
			* [Configuration](#configuration)
		* [signIn()](#signin)
		* [signInSilently()](#signinsilently)
		* [isSignedIn()](#issignedin)
		* [playServicesAvailable()](#playservicesavailable)
		* [signOut()](#signout)
		* [disconnect()](#disconnect)
		* [getTokens()](#gettokens)
		* [getCurrentUser()](#getcurrentuser)
	* [User](#user)
	* [GoogleSignInButton](#googlesigninbutton)
(#playservicesavailable)
## Installation

```cli
npm install @nativescript/google-signin
```

## Prerequisites

### Android

1. To access [Google Sign-In](https://developers.google.com/identity/sign-in/android/start-integrating), you need to [register your application](https://firebase.google.com/docs/android/setup). You don't need to include the `google-services.json` file in your app unless you are using Google services that require it.

2. Enable the OAuth APIs that you want, using the [Google Cloud Platform API manager](https://console.developers.google.com/).
Make sure you've filled out all the required fields in the console for [OAuth consent screen](https://console.developers.google.com/apis/credentials/consent). Otherwise, you may encounter APIException errors.

## iOS

1. This plugin requires `iOS 9.0+`.

2. First [register](https://firebase.google.com/docs/ios/setup) your application.

3. Add the `GoogleService-Info.plist.` obtained from step `2.` to `App_Resources/iOS/`.

4. Open Xcode 
	1. Right-click on the `Runner` directory and select `Add Files to Runner`.
	2. Select `GoogleService-Info.plist` from the file manager.
	3. Select the `Runner` target from the dialog that appears.

5. Add the `CFBundleURLTypes` attributes below to the `App_Resources/iOS/Info.plist` file.

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

> **Note** that according to https://developer.apple.com/sign-in-with-apple/get-started, starting `June 30, 2020`, the apps that use login services must also offer a `Sign in with Apple` option when submitting to the Apple App Store. For that, consider using the[@nativescript/apple-sign-in](https://github.com/NativeScript/plugins/tree/main/packages/apple-sign-in) plugin.

## Usage

### Signing In
To sign in the user, call the [signIn()](#signin) or the [signInSilently()](#signinsilently) method. However, ensure to call `configure()` before calling any of those methods.
```ts
import { GoogleSignin } from '@nativescript/google-signin';

try {
	await GoogleSignin.configure();
	const user = await GoogleSignin.signIn();
} catch (e) {}
```

### GoogleSignInButton

#### Core

```xml
<Page xmlns:ui="@nativescript/google-signin">
	<ui:GoogleSigninButton tap="handleSignIn" colorScheme='auto' colorStyle='standard'/>
</Page>
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

#### Angular

Register the button in the `module.ts` file:

```ts
import { registerElement } from '@nativescript/angular';
registerElement('GoogleSignInButton', () => require('@nativescript/google-signin').GoogleSignInButton);
```

And then it can be called from your `html` file choosing the desired option for `colorScheme` and `colorStyle` as:
```xml
<GoogleSignInButton colorScheme='auto' colorStyle='standard' (tap)="yourGoogleSigninFunction()"></GoogleSignInButton>
```

#### Vue
To register the button, add the following code to the `main.ts` file.

```ts 
registerElement('GoogleSignInButton',()=> require("@nativescript/google-signin").GoogleSignInButton)
```

Then use it in a `.vue` file as follows:

```xml
<GoogleSignInButton colorScheme='auto' colorStyle='standard' @tap="yourGoogleSigninFunction"></GoogleSignInButton>
```
#### Styling the signin button

[GoogleSignInButton](#googlesigninbutton) is a [View](https://docs.nativescript.org/api-reference/classes/view) instance so you can use the View class styling properties. Additionally, the plugin offers the `colorScheme` and `colorStyle` properties.
 
## API 
### GoogleSignin
The GoogleSignin class has the following methods.

#### configure()

```ts
await GoogleSignIn.configure(configuration)
```

Specifies the properties of the sign-in request, such as scopes,accountName, etc.

Call this method before calling the `signIn()` or `signInSilently()` method. Call it only once, after your app starts. 

The `configuration` parameter is an optional [Configuration](#configuration) object.

#### Configuration
The Configuration object has the following properties. All properties are optional.

| Property | Type 
|:---------|:-----
| `scopes` | `string[]` 
| `signInOptions` | `'default'` \| `'games'`
| `clientId` | `string`
| `serverClientId` | `string`
| `accountName` | `string`
| `hostedDomain` | `string`

#### signIn()

```ts
user: User = await GoogleSignin.signIn()
```

Prompts a modal to let the user sign in into the application. 

---
#### signInSilently()
```ts
user: User = await GoogleSignin.signInSilently()
```

---
#### isSignedIn()

```ts
isUserSignedIn: boolean
 = GoogleSignin.isSignedIn()
```
Checks whether the user is currently signed in.

---
#### playServicesAvailable()

```ts
isPlayServicesAvailable: boolean = await GoogleSignin.playServicesAvailable();
```

Checks if device has Google Play Services installed. Always resolves to `true` on iOS.

Presence of up-to-date Google Play Services is required to show the sign in modal.

---
#### signOut()
```ts
GoogleSignin.signOut()
```
Signs out the current user.

---
#### disconnect()
```ts
await GoogleSignin.disconnect()
```
Disconnects the current user.

---
#### getTokens()
```ts
tokens: { idToken: string; accessToken: string;} = await GoogleSignin.getTokens()
```
Resolves with an object containing { idToken: string, accessToken: string, } or rejects with an error. Note that using `accessToken` for identity assertion on your backend server is [discouraged](https://developers.google.com/identity/sign-in/android/migration-guide).

---
#### getCurrentUser()

```ts
user : User | null = GoogleSignin.getCurrentUser()
```
This method resolves with null or a [User](#user) object.

#### User

The user object has the following members:

| Property | Type | Description
|:---------|:-----|:------------
| `id`	| `string` | _readonly_
| `displayName` | `string` | _readonly_
| `email` | `string` | _readonly_
| `givenName` | `string` | _readonly_
| `familyName` | `string` | _readonly_
| `idToken` | `string` | _readonly_
| `accessToken` | `string` | _readonly_
| `grantedScopes`| `string[]`| _readonly_
| `photoUrl` | `string` | _readonly_
| `serverAuthCode` | `string` | _readonly_
| `requestScopes(scopes: string[])` | `Promise<IUser>` | See [User](#user) for the properties of `IUser`
| `native`| [com.google.android.gms.auth.api.signin.GoogleSignInAccount](https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInAccount) \| [GIDGoogleUser](https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDGoogleUser) | Platform-specific instance.

#### GoogleSignInButton

| Property | Type 
|:---------|:-----
| `colorScheme`| `"dark" \| "light" \| "auto"`
| `colorStyle` | `"standard" \| "wide" \| "icon"`

## License

Apache License Version 2.0
