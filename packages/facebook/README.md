# @nativescript/facebook

## Contents
* [Intro](#intro)
* [Installation](#installation)
* [Android prerequisites](#android-prerequisites)
* [iOS prerequisites](#ios-prerequisites)
* [Use @nativescript/facebook](#use-nativescriptfacebook)
	* [Sign in the user](#sign-in-the-user)
	* [Sign out the user](#sign-out-the-user)
* [API](#api)
	* [LoginManager class](#loginmanager-class)
	* [LoginResult class](#loginresult-class)
	* [AccessToken class](#accesstoken-class)
		* [Properties](#properties)
		* [Methods](#methods)

## Intro

A plugin that allows you to integrate Facebook Login with your app using the Facebook SDK.

## Installation

Install the plugin to add the Facebook SDK by running the following command:

```cli
npm install @nativescript/facebook
```

## Android prerequisites

Set up your app to use the Facebook SDK for Android by following the instructions under the following sections in [Getting Started Guide](https://developers.facebook.com/docs/android/getting-started/). 

- [Get Your App ID](https://developers.facebook.com/docs/android/getting-started#app-id)
- [Get Your Client Token](https://developers.facebook.com/docs/android/getting-started#client-token)
- [Update Your Manifest](https://developers.facebook.com/docs/android/getting-started/#add-app_id)

## iOS prerequisites

Set up your app to use the Facebook SDK for iOS by following the instructions in the following sections on [Getting Started Guide](https://developers.facebook.com/docs/ios/getting-started#getting-started-with-the-facebook-sdk-for-ios):

- [Before You Start](https://developers.facebook.com/docs/ios/getting-started#before-you-start)
- [Get Your App ID](https://developers.facebook.com/docs/ios/getting-started#app-id)
- [Get Your Client Token](https://developers.facebook.com/docs/ios/getting-started#client-token)
- [Step 2: Configure Your Project](https://developers.facebook.com/docs/ios/getting-started#configure-your-project)

## Use @nativescript/facebook

### Sign in the user

Firstly, initialize the LoginManager by calling the `init` method.

```ts
import { LoginManager } from '@nativescript/facebook';

LoginManager.init() 
```
Next, to sign the user in, call the `logInWithPermissions` method. 
<!-- You can also use the Login Manager with custom UI to perform Login. -->
<!-- How? 👆🏼 -->

```ts
import { LoginManager, AccessToken } from '@nativescript/facebook';

try {
	const result = await LoginManager.logInWithPermissions(['public_profile']); // LoginResult
	const accessToken = AccessToken.currentAccessToken();
} catch (e) {}
```
### Sign out the user

To log the user out, call the `logOut` method.
```ts
LoginManager.logOut()
```

## API

### LoginManager class

The LoginManager class provides the following static methods:

| Method | Returns | Description |
|------|------|-------------|
| `static init()`| `void` | Initializes the LoginManager. Call this method early in the app lifecycle and the best place for that is the `main.ts` file.|
| `static logInWithPermissions(permissions: string[], context?: any)` | Promise<[LoginResult](#loginresult-class)>| Opens the login window in the optionally provided `context`(a [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller?language=objc) instance on iOS and an [Activity](https://developer.android.) The `permissions` parameter indicates the data about the user the app would like to get from Facebook. |
| `static logout()` | `void`| Logs out the user. |

### LoginResult class
This class provides the login data returned by the `logInWithPermissions` method.

| Name | Type | Description |
|------|------|-------------|
| `android` | [LoginManager](https://developers.facebook.com/docs/reference/android/current/class/LoginManager/) |_readonly_. Native instance for Android. |
| ` ios` |[FBSDKLoginManager](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKLoginManager/)|_readonly_. Native instance for iOS.|
| `grantedPermissions`|`string[]`| _readonly_|
| `isCancelled`|`boolean`| _readonly_|
| `token`| [AccessToken](#accesstoken)| _readonly_|

### AccessToken class

This class provides the data of a Facebook access token.

#### Properties

| Property | Type| Description |
|------|-----|-------------|
| `appID` | `string`||
| `dataAccessExpirationDate` | `Date`|_readonly_|
| `dataAccessExpired` | `boolean` | _readonly_|
| `declinedPermissions`|`string[]`| _readonly_|
| `expirationDate`| `Date`| _readonly_|
| `expired`| `boolean`| _readonly_|
| `expiredPermissions`|`string[]`| _readonly_|
| `graphDomain` | `string` | _readonly_|
| `permissions`|`string[]`| _readonly_|
| `refreshDate`| `Date`| _readonly_|
| `tokenString` | `string`| _readonly_|
| `userID` | `string`| _readonly_|
| `currentAccessTokenIsActive` | `boolean` | _readonly_|
| `ios` | [FBSDKAccessToken](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAccessToken/)|_readonly_. iOS access token. |
| `android` | [AccessToken](https://developers.facebook.com/docs/reference/android/current/class/AccessToken/)|_readonly_. Android access token. |

#### Methods

| Method | Returns 
|:------|:-------
| `currentAccessToken()` | [AccessToken](#accesstoken-class) | A static method that returns an access token as an instance of the AccessToken class.|

To log the user out, call the `logOut` method.
```ts
LoginManager.logOut()
```

## API
### AccessToken
| Name | Type| Description |
|------|-----|-------------|
| `appID` | `string`||
| `dataAccessExpirationDate` | `Date`|_readonly_|
| `dataAccessExpired` | `boolean` | _readonly_|
| `declinedPermissions`|`string[]`| _readonly_|
| `expirationDate`| `Date`| _readonly_|
| `expired`| `boolean`| _readonly_|
| `expiredPermissions`|`string[]`| _readonly_|
| `graphDomain` | `string` | _readonly_|
| `permissions`|`string[]`| _readonly_|
| `refreshDate`| `Date`| _readonly_|
| `tokenString` | `string`| _readonly_|
| `userID` | `string`| _readonly_|
| `currentAccessToken()` | `AccessToken` | A static method that returns an access token.|
| `currentAccessTokenIsActive` | `boolean` | _readonly_|
| `ios` | [FBSDKAccessToken](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKAccessToken/)|_readonly_. iOS access token. |
| `android` | [AccessToken](https://developers.facebook.com/docs/reference/android/current/class/AccessToken/)|_readonly_. Android access token. |

### LoginResult Class
| Name | Type | Description |
|------|------|-------------|
| `android` | [LoginManager](https://developers.facebook.com/docs/reference/android/current/class/LoginManager/) |_readonly_. Native instance for Android. |
| ` ios` |[FBSDKLoginManager](https://developers.facebook.com/docs/reference/ios/current/class/FBSDKLoginManager/)|_readonly_. Native instance for iOS.|
| `grantedPermissions`|`string[]`| _readonly_|
| `isCancelled`|`boolean`| _readonly_|
| `token`| [AccessToken](#accesstoken)| _readonly_|

### LoginManager Class
| Name | Type/Return Type | Description |
|------|------|-------------|
| `static init()`| `void` | Initializes the LoginManager. You should call this method early in the app lifecycle and the best place for that is the `main.ts`.|
| `static logInWithPermissions(permissions: string[], context?: any)` | `Promise<LoginResult>`| Opens the login window in the optionally provided `context`(a [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller?language=objc) instance on iOS and an [Activity](https://developer.android.The `permissions` parameter indicates the data about the user the app would like to get from Facebook. |
| `static logout()` | `void`| Logs out the user. |


## License

Apache License Version 2.0
