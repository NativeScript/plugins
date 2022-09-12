# @nativescript/twitter

```cli
npm install @nativescript/twitter
```

## Prerequisites

Go to [Twitter Apps](https://apps.twitter.com/) to create your app so that you can obtain API key and secret, note:

- Remember to set a Callback Url, whatever will work
- By default, Twitter won't allow you to grab user's email, so you have to apply for a permission for your app to retrieve user's email

Here is how callbacks would look like:

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

## License

Apache License Version 2.0
