# @nativescript/twitter

A plugin that allows you to authenticate a user with their Twitter account.
<!-- TODO: Add more descriptions -->
## Contents

* [Installation](#installation)
* [Prerequisites](#prerequisites)
* [Usage](#usage)
	* [Initializing Twitter Sign-in](#initializing-twitter-sign-in)
  * [TwitterSignIn](#twittersignin)
    * [logIn()](#login)
    * [getCurrentUser()](#getcurrentuser)
    * [logOut()](#logout)
* [License]

## Installation

```cli
npm install @nativescript/twitter
```

## Prerequisites

- Go to [Twitter Apps](https://apps.twitter.com/) and create your app to obtain the API key and secret.

- Set a Callback Url with the `Twitter.callback` property. Whatever will work.
For iOS, add the following code to the `App_Resources/ios/Info.plist` file, and replace the `yourscheme` text with your URL.

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
- Request for the user's permission for your app to retrieve their email. By default, Twitter won't allow you to grab a user's email.

Here is what callbacks would look like:

![callback screenshot](https://raw.githubusercontent.com/NativeScript/plugins/main/packages/twitter/assets/images/callback.png)

## Usage

### Initializing Twitter Sign-in

To set up Twitter Sign in, call the [Twitter class's](#twitter) [init()](#init) method passing it the consumer key and the consumer secret.

```ts
import { Twitter, TwitterSignIn } from '@nativescript/twitter';

Twitter.callback = 'yourscheme://';

Twitter.init(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET);
```
### Sign in a user
To sign a user in, call the [logIn()](#login) method on the [TwitterSignIn](#twittersignin) class.

```ts
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
Twitter.callback = "the callback url"
```

The callback URL

---
#### init()
```ts
Twitter.init(consumerKey, consumerSecret)
```
Initializes the Twitter authentification with the specified key and secret.


| Parameter | Type 
|:---------|:-----
| `consumerKey` | `string` 
| `consumerSecret` | `string` 

----
### TwitterSignIn

#### logIn()
```ts
TwitterSignIn.logIn().then((session: Session) =>{

}).catch((err) =>{

})
```
### Session

| Property | Type | Description
|:---------|:-----|:-----------
| `authToken` | `string` | _readonly_
| `authTokenSecret` | `string` | _readonly_
| `userName` | `string` | _readonly_
| `userId` |  `string` | _readonly_
| `ios` |  `any` | _readonly_
| `android` |  `any` | _readonly_

---
#### getCurrentUser() 
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

---
#### logOut()

```ts
TwitterSignIn.logIn()
```
---
## License

Apache License Version 2.0
