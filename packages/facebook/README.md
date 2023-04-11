# @nativescript/facebook

## Installation
```cli
npm install @nativescript/facebook
```

## Prerequisites

### Android

Before you can run the project, follow the [Getting Started Guide](https://developers.facebook.com/docs/android/getting-started/) for Facebook Android SDK to set up a Facebook app. You can skip the build.gradle changes since that's taken care of by the rnpm link step above, but make sure you follow the rest of the steps such as updating `strings.xml` and `AndroidManifest.xml`.

### iOS

Follow step 3 in the [Getting Started Guide](https://developers.facebook.com/docs/ios/use-cocoapods) for Facebook SDK for iOS.

## Usage
First of all, you should initialize the LoginManager by calling the `init` method.

```ts
import { LoginManager } from '@nativescript/facebook';

LoginManager.init() 
```
Then to log the user in, use the `logInWithPermissions` method. 
You can also use the Login Manager with custom UI to perform Login.

```ts
import { LoginManager, AccessToken } from '@nativescript/facebook';

try {
	const result = await LoginManager.logInWithPermissions(['public_profile']); // LoginResult
	const accessToken = AccessToken.currentAccessToken();
} catch (e) {}
```

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
