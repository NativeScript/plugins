# @nativescript/apple-sign-in

A plugin that allows you to authenticate users with [Sign In with Apple](https://developer.apple.com/sign-in-with-apple/).

## Installation

```cli
npm install @nativescript/apple-sign-in
```

## Requirements

1. Go to [the Apple developer](https://developer.apple.com/account/resources/identifiers/list) and create a new app identifier with the `Sign In with Apple` Capability enabled. Make sure you sign your app with a provisioning profile using that app identifier.

2. Add the [Sign In with Apple Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_applesignin?language=objc) to `App_Resources/iOS/app.entitlements`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.applesignin</key>
	<array>
		<string>Default</string>
	</array>
</dict>
</plist>
```

## Use @nativescript/apple-sign-in

### Check if Sign In with Apple is supported

[Sign In with Apple](https://developer.apple.com/sign-in-with-apple/) was added in iOS `13`. So, to check if it is supported on the device, call the static `isSupported()` method on `SignIn`.

On `iOS < 13` and on Android, `isSupported()` returns `false`.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const supported: boolean = SignIn.isSupported();
```

### Sign In With Apple

If Sign In with Apple is supported on the device, you can present the user with that option to sign in.

```typescript

SignIn.signIn(
    {
        scopes: ["EMAIL", "FULLNAME"]
    })
    .then((result: User) => {
        console.log("Signed in, user: " + result);
        console.log("Signed in, familyName: " + result.fullName.familyName);
        
        this.user = result.user;
    })
    .catch(err => console.log("Error signing in: " + err));
```

### Get a user's sign in status

To get the current Sign In status of a user, call the [getState()](#getstate) passing it the user id(`User.user`) obtained from [signIn()](#signin) method.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const user: string = User.user;

SignIn.getState(user)
    .then(state => console.log("Sign in state: " + state))
    .catch(err => console.log("Error getting sign in state: " + err));
```

## API 

### isSupported

```ts
isSupported: boolean = SignIn.isSupported();
```
Checks if Sign In with Apple is supported on the device. Returns `true` for iOS 13+, and `false` for iOS < `13` and on Android.

---
### signIn()
```ts
SignIn.signIn(
    options: SignInOptions

    )
    .then((result: User) => {
      // handle the signed-in user data
    })
    .catch(err =>{
        // handle error
    });
```

Signs in a user with the specified [SignInOptions](#signinoptions) object.

---
### getState()
```ts
SignIn.getState(userID:string)
    .then(state =>{
        // do something with user status
    })
    .catch(err =>{
        // handle error
    });
```
Gets the current sign-in status of the user.

---
### SignInOptions

| Name | Type | Description |
|------|------|-------------|
| `user` | `string` | For the description, visit [user](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidrequest/3153041-user?language=objc).|
| `scopes` | [SignInScopes](#signinscopes)`[]` | _Optional_: By default, [signIn()](#signin) does not return any user's scopes. To return the scopes of interest, list them in the `scopes` array.
| `useOnce` | `boolean` | <!--TODO: Add the description -->|
| `nonce` | `string`|  _Optional_: See [nonce](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest/3362520-nonce?language=objc) for more information. |


### SignInScopes
```ts
type SignInScopes = "EMAIL" | "FULL_NAME";
```
For more details, visit [ASAuthorizationScope](https://developer.apple.com/documentation/authenticationservices/asauthorizationscope?language=objc).

---

### User object

The following are the properties of the User object returned by the [signIn()](#signin) method.

| Name | Type | Description |
|------|------|-------------|
| `nonce`| `string`| _Optional_: See [nonce](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest/3362520-nonce?language=objc) for more information. |
| `user` | `string` | _Always Provided_|
| `fullName` | [UserFullName](#userfullname) | _Optional_ |
| `realUserStatus` | [UserDetectionStatus](#userdetectionstatus) | _Optional_ |
| `authorizedScopes` | [SignInScopes](#signinscopes) | _Optional_ |
| `identityToken` | `string` | _Optional_ |
| `email` | `string` | _Optional_ |
| `identityToken` | `string` |  _Always Provided_|
| `state` | `string` |  _Always Provided_|
| `authorizationCode` | `string` | _Optional_ |

For more details, visit [ASAuthorizationAppleIDCredential](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential?language=objc).

---
### UserFullName interface
| Name | Type | Description |
|------|------|-------------|
| `namePrefix`| `string`| _Optional_ |
| `givenName` | `string` | _Optional_ |
| `middleName` | `string` | _Optional_ |
| `familyName` | `string` | _Optional_ |
| `nameSuffix` | `string` | _Optional_ |
| `nickname` | `string` | _Optional_ |

For more details, visit [NSPersonNameComponents](https://developer.apple.com/documentation/foundation/nspersonnamecomponents?language=objc).

---
### CredentialState enum
```ts
enum CredentialState {
    Revoked = 'Revoked',
    Authorized = 'Authorized',
    NotFound = 'NotFound',
    Transferred = 'Transferred'
} 
```
For more details, visit [ASAuthorizationAppleIDProviderCredentialState](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovidercredentialstate?language=objc).

---
### UserDetectionStatus enum
```ts
enum UserDetectionStatus {
    Unsupported = 'Unsupported',
    Unknown = 'Unknown',
    LikelyReal = 'LikelyReal'
}
```
For more details, visit [ASUserDetectionStatus](https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus?language=objc).

## License

Apache License Version 2.0
