# @nativescript/apple-sign-in

```javascript
npm install @nativescript/apple-sign-in
```

## Requirements

Go to [the Apple developer](https://developer.apple.com/account/resources/identifiers/list) website and create a new app identifier with the "Sign In with Apple" Capability enabled. Make sure you sign your app with a provisioning profile using that app identifier.
Open your app's App_Resources/iOS folder and add the following (or append) to a file named app.entitlements.

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

## Usage



## API

### `isSupported`

Sign In with Apple was added in iOS 13, so make sure to call this function before showing a "Sign In with Apple" button in your app.
On iOS < 13 and Android this will return `false`.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const supported: boolean = SignIn.isSupported();
```

### `signInWithApple`

Now that you know "Sign In with Apple" is supported on this device, you can have the
user sign themself in (after they pressed a nice button for instance).

```typescript
import { SignIn, User } from "@nativescript/apple-sign-in";

SignIn.signIn(
    {
        // by default you don't get these details, but if you provide these scopes you will (and the user will get to choose which ones are allowed)
        scopes: ["EMAIL", "FULLNAME"]
    })
    .then((result: User) => {
        console.log("Signed in, user: " + result);
        console.log("Signed in, familyName: " + result.fullName.familyName);
        // you can remember the user to check the sign in state later (see 'getSignInWithAppleState' below)
        this.user = result.user;
    })
    .catch(err => console.log("Error signing in: " + err));
```

### `getState`

> ⚠️ This does not seem to work on a simulator!

If you want to know the current Sign In status of your user, you can pass the `user` (id) you acquired previously.

```typescript
import { SignIn } from "@nativescript/apple-sign-in";

const user: string = "the id you got back from the signIn function";

SignIn.getState(user)
    .then(state => console.log("Sign in state: " + state))
    .catch(err => console.log("Error getting sign in state: " + err));
```


## License

Apache License Version 2.0
