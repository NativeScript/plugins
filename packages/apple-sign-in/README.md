# @nativescript/apple-sign-in

```javascript
npm install @nativescript/apple-sign-in
```

## Requirements

Go to [the Apple developer](https://developer.apple.com/account/resources/identifiers/list) website and create a new app identifier with the "Sign In with Apple" Capability enabled. Make sure you sign your app with a provisioning profile using that app identifier.

Then add the [Sign In with Apple Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_applesignin?language=objc) to `App_Resources/iOS/app.entitlements` as follows:
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

## Using apple-sign-in

###  Checking if it is supported

[Sign In with Apple](https://developer.apple.com/sign-in-with-apple/) was added in iOS `13`, so make sure to call this function before showing a `Sign In with Apple` button in your app.
On iOS < 13 and Android this will return `false`.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const supported: boolean = SignIn.isSupported();
```

### Signing In With Apple

Once you know that "Sign In with Apple" is supported on the device, you can have the
user sign themself in (after they pressed a nice button for instance).

```typescript
import { SignIn, User } from "@nativescript/apple-sign-in";

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

### Getting A User Sign-in Status

To get the current Sign In status of a user, call the [getState()](#getState) passing it the user id(`User.user`) acquired from [signIn()](#signin) method.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const user: string = User.user;

SignIn.getState(user)
    .then(state => console.log("Sign in state: " + state))
    .catch(err => console.log("Error getting sign in state: " + err));
```

## API Reference
### isSupported
```ts
isSupported: boolean = SignIn.isSupported();
```
Checks if Sign In With Apple is supported on the device. Returns `true` for iOS 13+, and `false` for iOS < `13` and on Android.

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

Signs in a user with the specified [SignInOptions]() details.

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
## SignInOptions Interface

| Name | Type | Description |
|------|------|-------------|
| `user` | `string` | |
| `scopes` | `SignInScopes[]` | _Optional_: The data about the user you would like the app to access. By default, the `scopes` are not provided. To receive them you have to specify them.
| `useOnce` | `boolean` | |
| `nonce` | `string`| |


## Types
### SignInScopes
```ts
type SignInScopes = "EMAIL" | "FULL_NAME";
```
---
### UserFullName Interface
| Name | Type | Description |
|------|------|-------------|
| `namePrefix`| `string`| _Optional_: |
| `givenName` | `string` | _Optional_: |
| `middleName` | `string` | _Optional_: |
| `familyName` | `string` | _Optional_: |
| `nameSuffix` | `string` | _Optional_: |
| `nickname` | `string` | _Optional_: |

### User Interface
| Name | Type | Description |
|------|------|-------------|
| `nonce`| `string`| _Optional_: |
| `user` | `string` | |
| `fullName` | [UserFullName](#userfullname-interface) | _Optional_: |
| `realUserStatus` | [UserDetectionStatus](#userdetectionstatus-enum) | _Optional_: |
| `authorizedScopes` | [SignInScopes](#signinscopes) | _Optional_: |
| `identityToken` | `string` | _Optional_: |
| `email` | `string` | _Optional_: |
| `identityToken` | `string` |  |
| `state` | `string` |  |
| `authorizationCode` | `string` | _Optional_: |

### CredentialState Enum
```ts
enum CredentialState {
    Revoked = 'Revoked',
    Authorized = 'Authorized',
    NotFound = 'NotFound',
    Transferred = 'Transferred'
} 
```
---
### UserDetectionStatus Enum
```ts
enum UserDetectionStatus {
    Unsupported = 'Unsupported',
    Unknown = 'Unknown',
    LikelyReal = 'LikelyReal'
}
```

## License

Apache License Version 2.0
