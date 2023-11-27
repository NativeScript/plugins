# @nativescript/google-signin

## Contents
* [Installation](#installation)
* [Android prerequisites](#android-prerequisites)
* [iOS prerequisites](#ios-prerequisites)
* [Use @nativescript/google-signin](#use-nativescriptgoogle-signin)
	* [Sign in](#sign-in)
	* [Styling the GoogleSignInButton](#styling-the-googlesigninbutton)
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


## Intro

A plugin that allows you to authenticate users with Google Sign-In.

## Installation

Install the plugin by running the following command at the root of the project.

```cli
npm install @nativescript/google-signin
```

## Android prerequisites

1. To use GoogleSignIn for Android, visit [Add Firebase to your Android project](https://firebase.google.com/docs/android/setup) and follow the 2 steps below. 

- [Create a Firebase project](https://firebase.google.com/docs/android/setup#create-firebase-project)

- [Register your app with Firebase](https://firebase.google.com/docs/android/setup#register-app)

You don't need to include the `google-services.json` file mentioned in [Add a Firebase configuration file](https://firebase.google.com/docs/android/setup#add-config-file) in your app unless you are using other Google services that require it.

2. Generate debug SHA-1 fingerprint and add it to your Firebase project.

Generate the SHA-1 fingerprint for the debug keystore on your machine and add it to your app's Firebase project. Failure to do so will result in the `Error: 10` error.

To generate the SHA-1 fingerprint for the debug keystore with the following commands. For the debug keystore, the password is `android`.

- **macOS/Linux**
```cli
keytool -list -v \
-alias androiddebugkey -keystore ~/.android/debug.keystore
```

- **Windows**

```cli
keytool -list -v \
-alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
```

3. Enable the OAuth APIs that you want, using the [Google Cloud Platform API manager](https://console.developers.google.com/).
Make sure you've filled out all the required fields in the console for [OAuth consent screen](https://console.developers.google.com/apis/credentials/consent). Otherwise, you may encounter APIException errors.



## iOS prerequisites

1. This plugin requires `iOS 9.0+`.

2. To use GoogleSignIn for iOS, set up the app with Firebase with the following steps at [Add Firebase to your Apple project](https://firebase.google.com/docs/ios/setup):

	1. [Create a Firebase project](https://firebase.google.com/docs/ios/setup#create-firebase-project)
	2. [Register your app with Firebase](https://firebase.google.com/docs/ios/setup#register-app)
	3. [Add a Firebase configuration file](https://firebase.google.com/docs/ios/setup#add-config-file), `GoogleService-Info.plist.` to `App_Resources/iOS/`.
	4. Enter [Google Cloud](https://console.cloud.google.com/) and choose your project created from firebase. Access the Apis and Services -> Credentials section and add a new credential of type `OAuth Client ID`. In application type choose iOS. Return to the Credentials screen and enter your new key in the `OAuth 2.0 Client ID` section. Copy `Client ID` and `iOS URL Scheme` for next step.
  	5. Add the `CFBundleURLTypes` and `GIDClientID` attributes below to the `App_Resources/iOS/Info.plist` file.

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
			<!-- Paste your iOS URL Scheme here -->
			<string>com.googleusercontent.apps.292142294722-23nmrq9mn8rhpqipjc1bt4qecga3qgsf</string>
		</array>
	</dict>
</array>
<key>GIDClientID</key>
<!-- Paste your Client ID here -->
<string>749673967192-c24phj29u2otpict36e71ocjo2g5i3hs.apps.googleusercontent.com</string>
<!-- End of the Google Sign-in Section -->
```

> **Note** that according to https://developer.apple.com/sign-in-with-apple/get-started, starting `June 30, 2020`, the apps that use login services must also offer a `Sign in with Apple` option when submitting to the Apple App Store. For that, consider using the[@nativescript/apple-sign-in](https://github.com/NativeScript/plugins/tree/main/packages/apple-sign-in) plugin.

## Use @nativescript/google-signin

### Sign in

To sign in a user with GoogleSignIn, follow the steps below.

1. Register and add the [GoogleSignInButton](#googlesigninbutton) to your markup to be able to initiate GoogleSigIn.

- **Core**

```xml
<Page xmlns:ui="@nativescript/google-signin">
	<ui:GoogleSigninButton tap="handleSignIn" colorScheme='auto' colorStyle='standard'/>
</Page>
```
- **Angular**

Register the button as follows:

```ts
import { registerElement } from '@nativescript/angular';
registerElement('GoogleSignInButton', () => require('@nativescript/google-signin').GoogleSignInButton);
```

Next, add it to your `html` file setting the desired option for `colorScheme` and `colorStyle` as:
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

2. Call the [signIn()](#signin) method on GoogleSignInButton tap

Before you call the [signIn()](#signin) or the [signInSilently()](#signinsilently) method to sign in the user, call `configure()` to initialize Firebase. If you do want to set any configuration options, you can pass an empty object `{}` as a parameter to [configure](#configure).

```ts
import { GoogleSignin } from '@nativescript/google-signin';

try {
	await GoogleSignin.configure({});
	const user = await GoogleSignin.signIn();
} catch (e) {}
```


### Styling the GoogleSignInButton

[GoogleSignInButton](#googlesigninbutton) is a [View](https://docs.nativescript.org/api-reference/classes/view) instance so you can use the View class styling properties. Additionally, the plugin offers the `colorScheme` and `colorStyle` properties.
 
## API 

### GoogleSignIn

The class that provides GoogleSignIn API. It has the following methods:

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

---
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
