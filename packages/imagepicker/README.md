# @nativescript/imagepicker

## Contents

* [Intro](#intro)
* [Installation](#installation)
    * [Android required permissions](#android-required-permissions)
    * [iOS required permissions](#ios-required-permissions)
* [Pick images](#pick-images)
    * [Demo](#demo)
* [API](#api)
    * [ImagePicker class](#imagepicker-class)
    * [create()](#create)
    * [Options](#options)
    * [ImagePickerMediaType](#imagepickermediatype)


## Intro

Imagepicker plugin supporting both single and multiple selection.

- Plugin supports **iOS8+** and uses [QBImagePicker](https://github.com/questbeat/QBImagePicker) cocoapod.
- For **Android** it uses [Intents](https://developer.android.com/reference/android/content/Intent) to open the stock images or file pickers. For Android 6 (API 23) and above, the permissions to read file storage should be explicitly required. 

## Installation
Install the plugin by running the following command in the root directory of your app.

```cli
npm install @nativescript/imagepicker
```

**Note: Version 3.0 contains breaking changes:**
* authorize() now returns a `Promise<AuthorizationResult>` for both android and ios.
* In the returned result from `present()` each `result[i].thumbnail` is now an `ImageSource`.
* `result[i].duration` is now typed correctly as a `number`.

**Note: Version 2.0 contains breaking changes. In order supply more information about your selection, the ImageSource asset is nested in the response so you'll need to update your code to use `result.asset` instead of `result` as your src for your Images.**

## Android required permissions
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

### iOS required permissions

Using the plugin on iOS requires the `NSPhotoLibraryUsageDescription` permission. Modify the `app/App_Resources/iOS/Info.plist` file to add it as follows:

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Description text goes here</string>
```
Apple App Store might reject your app if you do not describe why you need this permission. The default message `Requires access to photo library.` might not be enough for the App Store reviewers. 

## Pick images

To pick images (and/or videos) with the plugin, take the steps below:

1. Import the plugin

<!--tabs: TS  -->
```ts
import * as imagePickerPlugin from "@nativescript/imagepicker";
```

2. Instantiate the picker with selection mode

Instantiate the picker with selection mode by calling the `create` funciton of the plugin passing it an object that specifies mode(`single` or `multiple`) of media assets selection.

<!-- tabs: TS -->
```ts
let imagePickerObj: ImagePicker = imagePickerPlugin.create({
    mode: "single"});
```

3. Pick the images

- Request for permission
Request for permission to access photo library by calling the asynchronous `authorize` method.
- Present the list of media assets
If authorization request promise has resolved(e.i. the user has granted the permission), present the list of media assets to be picked from by calling the `present` method.
- Process the selection
The `present` method resolves with the selected media assets that can you to process and consume.

<!--tabs: TS  -->
```ts
imagePickerObj
    .authorize()
    .then((authResult) => {
        if(authResult.authorized) {
            return imagePickerObj.present()
                .then(function(selection) {
                    selection.forEach(function(selected) {
                        this.imageSource = selected.asset;
                        this.type = selected.type;
                        this.filesize = selected.filesize;
                        //etc
                    });
                });
        } else {
            // process authorization not granted.
        }
    })    
    .catch(function (e) {
        // process error
    });
```

### Demo
You can play with the plugin on StackBlitz at any of the following links:

 - [NativeScript TypeScript](https://stackblitz.com/edit/nativescript-stackblitz-templates-2pv6zn?file=app/main-page.xml)
- [NativeScript Angular](https://stackblitz.com/edit/nativescript-stackblitz-templates-cgmwyt?file=src%2Fapp%2Fapp-routing.module.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.module.ts,src%2Fmain.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.component.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fimage-picker%2Fimagepicker.component.html&title=NativeScript%20Starter%20Angular)
- [NativeScript Vue](https://stackblitz.com/edit/nativescript-vue3-beta-krjk9k?file=app%2Fcomponents%2FHome.vue,app%2Fapp.css)
- [NativeScript Svelte](https://stackblitz.com/edit/nativescript-stackblitz-templates-afrudj?file=app%2Fcomponents%2FHome.svelte)

## API

### ImagePicker class

The class that provides the media selection API. It offers the following methods:

| Method | Returns | Description
|:-------|:--------|:-----------
| `constructor(options: Options)` | `ImagePicker` | Instanciates the ImagePicker class with the optional `options` parameter. See [Options](#options)
| `authorize()` | `Promise<AuthorizationResult>` | Requests the required permissions. Call it before calling `present()`. In case of a failed authorization, consider notifying the user for degraded functionality.  The returned `AuthorizationResult` will have it's `authorized` property set to `true` if permission has been granted.
| `present()` | `Promise<ImagePickerSelection[]>` | Presents the image picker UI.
| `create(options: Options, hostView: View)` | `ImagePicker` | Creates an instance of the ImagePicker class. The `hostView` parameter can be set to the view that hosts the image picker. Intended to be used when opening the picker from a modal page.

### Options

An object passed to the `create` method to specify the characteristics of a media selection.

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

The type of media assets to be selected.

- `Any` = `0`,
- `Image` = `1`,
- `Video` = `2`

## License

Apache License Version 2.0
