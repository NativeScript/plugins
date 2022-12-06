# @nativescript/imagepicker

Imagepicker plugin supporting both single and multiple selection.
<br />Plugin supports **iOS8+** and uses [QBImagePicker](https://github.com/questbeat/QBImagePicker) cocoa pod.
<br />For **Android** it uses Intents to open the stock images or file pickers. For Android 6 (API 23) and above the permissions to read file storage should be explicitly required. See demo for implementation details.

```cli
npm install @nativescript/imagepicker
```

## Usage

The best way to explore the usage of the plugin is to inspect both demo apps in the plugin repository.
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/main-page.ts`.
In `demo-angular` is the usage in an Angular app. Refer to `demo-angular/app/app.component.ts`.

In addition to the plugin usage, both apps are webpack configured.

In short here are the steps:

### Import the plugin

_TypeScript_

```ts
import * as imagepicker from "@nativescript/imagepicker";
```

_Javascript_

```js
var imagepicker = require("@nativescript/imagepicker");
```

### Create imagepicker

Create imagepicker in `single` or `multiple` mode to specifiy if the imagepicker will be used for single or multiple selection of images

_TypeScript_

```ts
let context = imagepicker.create({
    mode: "single" // use "multiple" for multiple selection
});
```

_Javascript_

```js
var context = imagepicker.create({ mode: "single" }); // use "multiple" for multiple selection
```

### Request permissions, show the images list and process the selection

```ts
context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
        selection.forEach(function(selected) {
            // process the selected image
        });
        list.items = selection;
    }).catch(function (e) {
        // process error
    });
```

> **NOTE**: To request permissions for Android 6+ (API 23+) we use [nativescript-permissions](https://www.npmjs.com/package/nativescript-permissions).

> **NOTE**: Apps with a targetSdkVersion <33 To be sure to have permissions add the following lines in AndroidManifest.xml

```xml
<manifest ... >
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>

  <application android:requestLegacyExternalStorage="true" ... >
    ...
  </application>
</manifest>
```

> **NOTE**:  Apps with a targetSdkVersion >=33 i.e. Android 13+ (API 33+): To be sure to have permissions add the following lines in AndroidManifest.xml

```xml
<manifest ... >
    ...
 	<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
	<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
    ...
  </application>
</manifest>
```

> **NOTE**: Using the plugin on iOS requres photo library permission. Your app might be rejected from the Apple App Store if you do not provide a description about why you need this permission. The default message "Requires access to photo library." might not be enough for the App Store reviewers. You can customize it by editing the `app/App_Resources/iOS/Info.plist` file in your app and adding the following key:

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Description text goes here</string>
```

## API

### Methods

- create(options) - creates instance of the imagepicker. Possible options are:

| Option                      | Platform | Default   | Description                                                                                                                                        |
| --------------------------- | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode                        | both     | multiple  | The mode if the imagepicker. Possible values are `single` for single selection and `multiple` for multiple selection.                              |
| minimumNumberOfSelection    | iOS      | 0         | The minumum number of selected assets.                                                                                                             |
| maximumNumberOfSelection    | iOS      | 0         | The maximum number of selected assets.                                                                                                             |
| showsNumberOfSelectedAssets | iOS      | True      | Display the number of selected assets.                                                                                                             |
| prompt                      | iOS      | undefined | Display prompt text when selecting assets.                                                                                                         |
| numberOfColumnsInPortrait   | iOS      | 4         | Set the number of columns in Portrait orientation.                                                                                                 |
| numberOfColumnsInLandscape  | iOS      | 7         | Set the number of columns in Landscape orientation.                                                                                                |
| mediaType                   | both     | Any       | Choose whether to pick Image/Video/Any type of assets.                                                                                             |
| showAdvanced                | Android  | false     | Show internal and removable storage options on Android (**WARNING**: [not supported officially](https://issuetracker.google.com/issues/72053350)). |

The **hostView** parameter can be set to the view that hosts the image picker. Applicable in iOS only, intended to be used when open picker from a modal page.

- authorize() - request the required permissions.
- present() - show the albums to present the user the ability to select images. Returns an array of the selected images.

## License

Apache License Version 2.0
