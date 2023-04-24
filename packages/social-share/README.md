# @nativescript/social-share

## Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Share an image](#share-an-image)
  * [Share a URL](#share-a-url)
  * [Share via the Twitter App](#share-via-the-twitter-app)
  * [Share a PDF File](#share-a-pdf-file)
* [API](#api)
  * [shareImage()](#shareimage)
    * [ShareOptions](#shareoptions)
  * [shareText()](#sharetext)
  * [sharePdf()](#sharepdf)
  * [shareUrl()](#shareurl)
  * [shareViaTwitter()](#shareviatwitter)
  * [shareViaFacebook()](#shareviafacebook)
* [Demo App](#demo-app)
* [License](#license)
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

### Share a URL

To share a URL, use the [shareUrl()](#shareurl) function.

```ts
import { shareUrl } from "@nativescript/social-share"

shareUrl(
  'https://www.nativescript.org/',
  'Home of NativeScript',
  'How would you like to share this url?'
)
```

### Share via the Twitter App

To share something via the Twitter mobile application, use the [shareViewTwitter()](#shareviatwitter) function.

```ts
import { shareViaTwitter } from "@nativescript/social-share"

shareViaTwitter('Home of NativeScript', 'https://www.nativescript.org/')
```

### Share a PDF File

To share a PDF file, use the [sharePdf](#sharepdf) function. 

```ts
import { sharePdf } from "@nativescript/social-share"

let pdf = File.fromPath("~/path/to/myPdf.pdf");
sharePdf(pdf, "How would you like to share this text?")
```

## API

### shareImage()

```ts
shareImage(imageSource, options)
```

Allows you to share an [`ImageSource`](https://docs.nativescript.org/api-reference/classes/imagesource.html). 

| Parameter | Type | Description
|:----------|:-----|:----------
| `imageSource` | [ImageSource](https://docs.nativescript.org/api-reference/classes/imagesource) | The image to share.
| `options` |[ShareOptions](#shareoptions)| _Optional_: An object providing more information about the image. |

#### ShareOptions

| Property | Type | Description
|:---------|:-----|:----------
| `caption` | `string` | _Optional_: The caption to share alongside the image
| `subject` | `string` |_Optional_: (`Android-only`)The subject of the share.
| `fileFormat` | `'png'` \|`'jpg'` |_Optional_: (`Android-only`)The generated image format. Defaults to `'jpg'`.

### shareText()

```js
import { shareText } from "@nativescript/social-share"

shareText(text,subject)
```

Shares the specified text. Expects a simple string.

#### Parameters

| Parameter | Type | Description
|:----------|:-----|:-----------
| `text` | `string` | The text to share with the URL. 
| `subject` | `string` | _Optional_: (`Android-only`)The URL to share. 


### sharePdf()

```js
import { sharePdf } from "@nativescript/social-share"

sharePdf(pdf, subject)
```

Used to share a PDF file.

#### Parameters

| Parameter | Type | Description
|:----------|:-----|:-----------
| `pdf` | [File](https://docs.nativescript.org/api-reference/classes/file) | The PDF file to share. 
| `subject` | `string` | _Optional_: (`Android-only`)The URL to share. 

### shareUrl()

```js
shareUrl(url, text, subject)
```

Allows you to share a URL.

#### Parameters

| Parameter | Type | Description
|:----------|:-----|:-----------
| `url` | `string` | The URL to share. 
| `text` | `string` | The text to share with the URL. 
| `subject` | `string` | _Optional_: (`Android-only`)The URL to share. 

### shareViaTwitter()

```ts

async doShareTwitter() {
    await shareViaTwitter(text, url);
  }
```
Shares a text and/or a url via the Twitter app.

#### Parameters

| Parameter | Type | Description
|:----------|:-----|:----------
| `url` | `string` | _Optional_: The URL to share. 
| `text` | `string` | _Optional_: The text to share. 

### shareViaFacebook()

```ts

async doShareFacebook() {
    await shareViaFacebook(text, url);
  }
```
Shares a text and/or a url via the Facebook app.

#### Parameters

| Parameter | Type | Description
|:----------|:-----|:----------
| `url` | `string` | _Optional_: The URL to share. 
| `text` | `string` | _Optional_: The text to share. 

> **Note** that `text` will usually be suppressed due to Facebook security/abuse prevention, but the url will go through.

**Android Only NOTE**

1. If you are already using the Facebook Share SDK in your project you likely do _not_ have to add the following.
If you are not using the sdk explicitly in your project yet, add to your `app.gradle` file:

```groovy
dependencies {
	implementation 'com.facebook.android:facebook-share:[5,6)'
}
```

2. Add `meta-data` and `provider` sections to the `AndroidManifest.xml` file:

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

3. Create a file `facebooklogin.xml` in `App_Resources/Android/src/main/res/values/`. Add this to the file (replace the id):

```xml
<?xml version='1.0' encoding='utf-8' ?>
<resources>
  <string name="facebook_app_id">126035687816994</string>
</resources>
```
## Demo App
Try the plugin demo [here](https://stackblitz.com/edit/nativescript-stackblitz-templates-hq3ukc?file=app/main-view-model.ts) on
StackBlitz. 

<!-- ## Tutorials

Looking for some extra help getting social sharing working in your mobile application? Check out these resources:

- [Social Media Sharing in a Vanilla NativeScript Application](https://www.thepolyglotdeveloper.com/2016/03/implement-social-media-sharing-nativescript-app/)
- [Social Media Sharing in a NativeScript with Angular Application](https://www.thepolyglotdeveloper.com/2017/02/social-media-sharing-prompts-nativescript-angular-application/) -->

## License

Apache License Version 2.0
