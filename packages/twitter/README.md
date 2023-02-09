# @nativescript/twitter
A plugin that allows you to authenticate a user with their Twitter account.

## Installation

```cli
npm install @nativescript/twitter
```

## Prerequisites

Go to [Twitter Apps](https://apps.twitter.com/) to create your app so that you can obtain the API key and secret. Note:

- Remember to set a Callback Url, whatever will work
- By default, Twitter won't allow you to grab a user's email. You first have to request for user's permission for your app to retrieve their email.

Here is what callbacks would look like:

![callback screenshot](https://raw.githubusercontent.com/NativeScript/plugins/main/packages/twitter/assets/images/callback.png)

## Usage

### iOS

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>yourscheme></string>
    </array>
  </dict>
</array>
```

```ts
import { Twitter, TwitterSignIn } from '@nativescript/twitter';

Twitter.callback = 'yourscheme://';

Twitter.init(TWITTER_COMSUMER_KEY, TWITTER_CONSUMER_SECRET);

TwitterSignIn.logIn()
	.then((session) => {
		// session.authToken
		// session.authTokenSecret
	})
	.catch((e) => {});
```
## API 
### Twitter 
#### callback
```ts
Twitter.callback = "the callback"
```

---
#### init()
```ts
Twitter.init(consumerKey: string, consumerSecret: string)
```

| Parameter | Type | Description
|:---------|:-----|:-----------
| `consumerKey` | `string` |
| `consumerSecret` | `string` |

----
### TwitterSignIn

#### logIn()
```ts
TwitterSignIn.logIn().then((session: Session) =>{

}).catch((err) =>{

})
```

---
#### logOut()

```ts
TwitterSignIn.logIn()
```
 {
	static logIn(): Promise<Session>;
	static logOut();
	static getCurrentUser(): Promise<TwitterUser>

---
```ts
TwitterSignIn.getCurrentUser().then((user: TwitterUser) =>{

}).catch((err) =>{

})
```

---
### TwitterUser

| Property | Type | Description
|:---------|:-----|:-----------
| `formattedScreenName` | `string` | _readonly_
| `isProtected` | `boolean` | _readonly_
| `isVerified` | `boolean` | _readonly_
| `name`  | `string` | _readonly_
| `profileImageUrl` |  `string` | _readonly_
| `profileUrl` |  `string` | _readonly_
| `screenName` |  `string` | _readonly_
| `userId` |  `string` | _readonly_

### Session

| Property | Type | Description
|:---------|:-----|:-----------
| `authToken` | `string` | _readonly_
| `authTokenSecret` | `string` | _readonly_
| `userName` | `string` | _readonly_
| `userId` |  `string` | _readonly_
| `ios` |  `any` | _readonly_
| `android` |  `any` | _readonly_

## License

Apache License Version 2.0
