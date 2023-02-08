# @nativescript/social-share

## Installation

```cli
npm install @nativescript/social-share
```

## Usage

### Share an image

To share an image use the [shareImage()](#shareimage) function.

```ts
import { shareImage } from "@nativescript/social-share"
import { ImageSource } from "@nativescript/core"

async doShareImage() {

  const imageSrc = await ImageSource.fromUrl(
    'https://thiscatdoesnotexist.com/'
  );
  shareImage(imageSrc);
}
```
You can optionally provide a second argument to add more information about the image:

```ts
shareImage(imageSrc, {

    caption: 'Your favorite cat of all times',
    subject: "Some subject",
    fileFormat: "png"

  });
```

## API

### shareImage()
```ts
shareImage(imageSource, options)
```

Allows you to share an [`ImageSource`](https://docs.nativescript.org/api-reference/classes/imagesource.html). 

| Parameter | Type | Description
|:----------|:-----|:----------
| `options` |[ShareOptions](#shareoptions)| _Optional_: An object providing more information about the image. |

### ShareOptions

| Property | Type | Description
|:---------|:-----|:----------
| `caption` | `string` | _Optional_: Caption to share alongside the image
| `subject` | `string` |_Optional_: (`Android-only`)The subject of the share.
| `fileFormat` | `'png'` \|`'jpg'` |_Optional_: (`Android-only`)The generated image format. Defaults to `'jpg'`.

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
