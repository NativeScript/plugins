# @nativescript/social-share

```cli
npm install @nativescript/social-share
```

## Usage

To use the social share module you must first `require()` it. After you `require()` the module you have access to its APIs.

```JavaScript
// ------------ JavaScript ------------------
var SocialShare = require("@nativescript/social-share");

// ------------- TypeScript ------------------
import * as SocialShare from "@nativescript/social-share";
```

## API

### shareImage(ImageSource image, \[optional\] String subject)

The `shareImage()` method expects an [`ImageSource`](https://docs.nativescript.org/api-reference/classes/imagesource.html) object. The code below loads an image from the app and invokes the share widget with it:

```JavaScript
// ------------ JavaScript ------------------
var SocialShare = require("@nativescript/social-share");
var imageSourceModule = require("@nativescript/core");

var image = imageSourceModule.fromFile("~/path/to/myImage.jpg");
SocialShare.shareImage(image);

// ------------- TypeScript ------------------
import * as SocialShare from "@nativescript/social-share";
import { ImageSource } from "@nativescript/core";

let image = ImageSource.fromFile("~/path/to/myImage.jpg");
SocialShare.shareImage(image);
```

You can optionally provide a second argument to configure the subject on Android:

```JavaScript
SocialShare.shareImage(image, "How would you like to share this image?");
```

### shareText(String text, \[optional\] String subject)

The `shareText()` method expects a simple string:

```js
SocialShare.shareText('I love NativeScript!')
```

Like `shareImage()`, you can optionally pass `shareText()` a second argument to configure the subject on Android:

```js
SocialShare.shareText('I love NativeScript!', 'How would you like to share this text?')
```

### sharePdf(File pdf, \[optional\] String subject)

The `sharePdf()` method expects a File instance:

```js
let pdf = File.fromPath("~/path/to/myPdf.pdf");
SocialShare.sharePdf(pdf)
```

Like `shareImage()`, you can optionally pass `sharePdf()` a second argument to configure the subject on Android:

```js
SocialShare.sharePdf(pdf, 'How would you like to share this text?')
```

### shareUrl(String url, String text, \[optional\] String subject)

The `shareUrl()` method excepts a url and a string.

```js
SocialShare.shareUrl('https://www.nativescript.org/', 'Home of NativeScript')
```

You can optionally pass `shareUrl()` a second argument to configure the subject on Android:

```js
SocialShare.shareUrl(
  'https://www.nativescript.org/',
  'Home of NativeScript',
  'How would you like to share this url?'
)
```

### shareViaTwitter(text?: string, url?: string): Promise\<void\>;

Share text or url via Twitter.

```js
SocialShare.shareViaTwitter('Home of NativeScript', 'https://www.nativescript.org/')
```

### shareViaFacebook(text?: string, url?: string): Promise\<void\>;

Share url via Facebook. Note that `text` will usually be suppressed due to Facebook security/abuse prevention, but the url will come through.

```js
SocialShare.shareViaFacebook('Home of NativeScript', 'https://www.nativescript.org/')
```

- **Android Only NOTE**:

If you are already using the Facebook Share SDK in your project you likely do _not_ have to add the following.

If you are not using the sdk explicitly in your project yet, add to your `app.gradle`:

```
dependencies {
	implementation 'com.facebook.android:facebook-share:[5,6)'
}
```

- Add a `meta-data` section and `provider` section ot your `AndroidManifest.xml` so it becomes similar to this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  ...>
   	<application
   		android:name="com.tns.NativeScriptApplication"
   		..>

   		<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>

      <provider android:authorities="com.facebook.app.FacebookContentProvider{your-facebook-appid}"
          android:name="com.facebook.FacebookContentProvider"
          android:exported="true"
          tools:replace="android:authorities"/>

   		<activity
   			android:name="com.tns.NativeScriptActivity"
   			..>
```

- Create a file `facebooklogin.xml` in `App_Resources/Android/src/main/res/values/`. Add this to the file (replace the id):

```xml
<?xml version='1.0' encoding='utf-8' ?>
<resources>
  <string name="facebook_app_id">126035687816994</string>
</resources>
```

## Tutorials

Looking for some extra help getting social sharing working in your mobile application? Check out these resources:

- [Social Media Sharing in a Vanilla NativeScript Application](https://www.thepolyglotdeveloper.com/2016/03/implement-social-media-sharing-nativescript-app/)
- [Social Media Sharing in a NativeScript with Angular Application](https://www.thepolyglotdeveloper.com/2017/02/social-media-sharing-prompts-nativescript-angular-application/)

## License

Apache License Version 2.0
