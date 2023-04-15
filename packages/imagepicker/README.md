# @nativescript/imagepicker

Imagepicker plugin supporting both single and multiple selection.
As of 2.0, it returns rich information about your selection including filesize, path, video duration and thumbnails etc.
<br />Plugin supports **iOS8+** and uses [QBImagePicker](https://github.com/questbeat/QBImagePicker) cocoapod.
<br />For **Android** it uses [Intents](https://developer.android.com/reference/android/content/Intent) to open the stock images or file pickers. For Android 6 (API 23) and above, the permissions to read file storage should be explicitly required. 

---
**Note: Version 2.0 contains breaking changes. In order supply more information about your selection, the ImageSource asset is nested in the response so you'll need to update your code to use `result.asset` instead of `result` as your src for your Images.**


## Table of Contents
* [Installation](#installation)
* [Required Permissions](#required-permissions)
    * [Android](#android)
    * [iOS](#ios)
* [Usage](#usage)
    * [Importing the plugin](#importing-the-plugin)
    * [Creating the Imagepicker instance](#creating-the-imagepicker-instance)
    * [Using the ImagePicker Instance](#using-the-imagepicker-instance)
* [API](#api)
    * [ImagePicker](#imagepicker)
    * [create()](#create)
    * [Options](#options)
    * [ImagePickerMediaType](#imagepickermediatype)

## Installation
```cli
npm install @nativescript/imagepicker
```

## Required Permissions

### Android
Add the following permissions to the `App_Resources/Android/src/main/AndroidManifest.xml` file:

- **targetSdkVersion < 33**
```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>

<application android:requestLegacyExternalStorage="true" ... >
    ...
  </application>
```

- **targetSdkVersion >=33(Android 13+)**

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />

<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
```

See the complete example [here](https://github.com/NativeScript/plugins/blob/main/tools/assets/App_Resources/Android/src/main/AndroidManifest.xml#L14).

### iOS
Using the plugin on iOS requires the `NSPhotoLibraryUsageDescription` permission. Modify the `app/App_Resources/iOS/Info.plist` file to add it as follows:

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Description text goes here</string>
```
Apple App Store might reject your app if you do not describe why you need this permission. The default message `Requires access to photo library.` might not be enough for the App Store reviewers. 

## Usage

You can play with the plugin on StackBlitz at the following links:

 - [NativeScript TypeScript](https://stackblitz.com/edit/nativescript-stackblitz-templates-2pv6zn?file=app/main-page.xml)
- [NativeScript Angular](https://stackblitz.com/edit/nativescript-stackblitz-templates-cgmwyt?file=src%2Fapp%2Fapp-routing.module.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.module.ts,src%2Fmain.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.component.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.component.html&title=NativeScript%20Starter%20Angular)
- [NativeScript Vue](https://stackblitz.com/edit/nativescript-vue3-beta-krjk9k?file=app%2Fcomponents%2FHome.vue,app%2Fapp.css)
- [NativeScript Svelte](https://stackblitz.com/edit/nativescript-stackblitz-templates-afrudj?file=app%2Fcomponents%2FHome.svelte)

### Importing the plugin

<!--tabs: TS  -->
```ts
import * as imagePickerPlugin from "@nativescript/imagepicker";
```

<!--tabs: JS  -->

```js
var imagePickerPlugin = require("@nativescript/imagepicker");
```

### Creating the Imagepicker instance

Create an Imagepicker instance in `single` or `multiple` mode to specifiy if the image picker will be used for single or multiple selection.

<!-- tabs: TS -->
```ts
let imagePickerObj: ImagePicker = imagePickerPlugin.create({
    mode: "single"});
```
<!-- tabs: JS -->
```js
var imagePickerObj = imagePickerPlugin.create({ mode: "single" }); 
```

### Using the ImagePicker Instance

Once you've created the picker instance, use it to request for permissions, present the list of media assets to be picked from, and process the selection.

```ts
imagePickerObj
    .authorize()
    .then(function() {
        return imagePickerObj.present();
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
> **Note** To request permissions for Android 6+ (API 23+), use [nativescript-permissions](https://www.npmjs.com/package/nativescript-permissions) plugin.

## API

### ImagePicker

| Method | Returns | Description
|:-------|:--------|:-----------
| `constructor(options: Options)` | `ImagePicker` | Instanciates the ImagePicker class with the optional `options` parameter. See [Options](#options)
| `authorize()` | `Promise<void>` | Requests the required permissions. Call it before calling `present()`. In case of a failed authorization, consider notifying the user for degraded functionality.
| `present()` | `Promise<ImageAsset[]>` | Presents the image picker UI.

### create()
```ts
imagePicker: ImagePicker = imagePickerPlugin.create(options: Options, hostView: View)
```

Creates an instance of the ImagePicker class. 

- _Optional_: `options` - The ImagePicker instance settings. See [Options](#options)
- _Optional_: (`iOS-only`) `hostView` - Can be set to the view that hosts the image picker. Intended to be used when opening the picker from a modal page.

### Response
As of version 2.0, imagepicker returns more information about your selection. 
```ts
[
    {
        asset: {}, // ImageSource. this is what you'll use to set the src of an Image for example.
        type: 'image', // either 'video' or 'image'
        filename: 'mycoolfile-0.jpg', // the filename
        originalFilename: 'IMG1001.JPG', // the original filename (may be useful if you changed the filename when copying)
        path: '/myapp/media/mycoolfile-0.jpg', // the path where the file is
        duration: 100, // video only, the duration in seconds.
        thumbnail: {} // ImageSource, video only. This is what you'll use to set the src of an Image for example.
    }
]
```

---
### Options

| Option | Type | Default |Description                                                          
|:---------------------------|:-------- |:---------|:-------
| `mode`                       | `string`     | `multiple`  | The mode of the imagepicker. Possible values are `single` for single selection and `multiple` for multiple selection.                              |
| `minimumNumberOfSelection`    | `number`      | `0`         | _Optional_:  (`iOS-only`) The minumum number of selected assets.                                                                                                             |
| `maximumNumberOfSelection`    | `number`      | `0`         | _Optional_:  (`iOS-only`) The maximum number of selected assets.                                                                                                             |
| `showsNumberOfSelectedAssets` | `boolean`      | `true`      | _Optional_:  (`iOS-only`) Display the number of selected assets.                                                                                                             |
| `prompt`                      | `string`      | `undefined` | _Optional_:  (`iOS-only`) Display prompt text when selecting assets.                                                                                                         |
| `numberOfColumnsInPortrait`   | `number`      | `4`         | _Optional_:  (`iOS-only`) Sets the number of columns in Portrait orientation                                                                                                  |
| `numberOfColumnsInLandscape`  | `number`      | `7`         | _Optional_:  (`iOS-only`) Sets the number of columns in Landscape orientation.                                                                                                |
| `mediaType`                   | [ImagePickerMediaType](#imagepickermediatype)     | `Any`       |_Optional_: The type of media asset to pick whether to pick Image/Video/Any type of assets. |
| `copyToAppFolder`             | `string`      | `undefined` | _Optional_:  If passed, a new folder will be created in your applications folder and the asset will be copied there.                                                           |
| `renameFileTo`                | `string`      | `undefined` | _Optional_:  If passed, the copied file will be named what you choose. If you select multiple, -index will be appended.                                                           |
| `showAdvanced `               | `boolean`  | `false`     | _Optional_:(`Android-only`) Show internal and removable storage options on Android (**WARNING**: [not supported officially](https://issuetracker.google.com/issues/72053350)). |
| `android` | `{read_external_storage: string;}`| _Optional_: (`Android-only`) Provides a reason for permission request to access external storage on API level above 23.


### ImagePickerMediaType
- `Any` = `0`,
- `Image` = `1`,
- `Video` = `2`

## License

Apache License Version 2.0
