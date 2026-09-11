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

- Plugin supports **iOS 14+** and uses the system [PHPickerViewController](https://developer.apple.com/documentation/photokit/phpickerviewcontroller) (the modern Photos picker with search and albums). No CocoaPods dependency is required.
- For **Android** it uses [Intents](https://developer.android.com/reference/android/content/Intent) to open the stock images or file pickers. For Android 6 (API 23) and above, the permissions to read file storage should be explicitly required. 

## Installation
Install the plugin by running the following command in the root directory of your app.

```cli
npm install @nativescript/imagepicker
```
**Note: Version 5.1 changes on iOS:**
* The picker is now the system `PHPickerViewController`. It runs out of process, so it can be presented without photo-library permission; calling `authorize()` first is still recommended so that selections resolve to their `PHAsset` (see [iOS required permissions](#ios-required-permissions)).
* `minimumNumberOfSelection`, `showsNumberOfSelectedAssets`, `prompt`, `numberOfColumnsInPortrait` and `numberOfColumnsInLandscape` are accepted but have no effect, because the system picker owns its own UI.
* Requires iOS 14 or later.

**Note: Version 3.1 contains breaking changes:**
* New behavior on iOS when the user selects `Limit AccessLim..` detailed in [iOS Limited permission](#ios-limited-permission).

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

These are only required when not setting `android.use_photo_picker = true`.

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />

<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
```

See the complete example [here](https://github.com/NativeScript/plugins/blob/main/tools/assets/App_Resources/Android/src/main/AndroidManifest.xml#L14).

### Android Photo picker ###

For phones running android 13+ specifying the option `android.use_photo_picker = true` when creating the `ImagePicker` will result in the use of the System Photo Picker.

<!-- tabs: TS -->
```ts
let imagePickerObj: ImagePicker = imagePickerPlugin.create({
    mode: "single",
	android: { use_photo_picker: true }});
```
This means you can remove the `READ_MEDIA_IMAGES, READ_MEDIA_VIDEO` permissions and do not have to prompt the user for permission.

Full details [here](https://developer.android.com/training/data-storage/shared/photopicker).

You can also now limit the number of images that are selectable in the Photo Picker by specifying the `maximumNumberOfSelection` option.

For phones running  < Android 13, this `use_photo_picker` option has no effect.

### iOS required permissions

The system picker itself needs no permission. `authorize()` requests photo-library access so that picked items resolve to their `PHAsset` (giving you `asset`, `filesize`, `duration` and `thumbnail` straight from the library). If access is not granted, `present()` still works: the picker hands over a copy of each selected file, which the plugin stores in the app's temporary folder and exposes through `path` and `asset`.

Calling `authorize()` requires the `NSPhotoLibraryUsageDescription` permission. Modify the `app/App_Resources/iOS/Info.plist` file to add it as follows:

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Description text goes here</string>
```
Apple App Store might reject your app if you do not describe why you need this permission. The default message `Requires access to photo library.` might not be enough for the App Store reviewers. 

### iOS Limited permission

Apple introduced the `PHAuthorizationStatusLimited` permission status with iOS 14, this is where the user specifies that the app can only access specified photos by choosing the `Limit Access..` option in the authorization dialog.

In this case `authorise()` will return an `AuthorizationResult` where `authorized` will be `true` and the `details` will contain `'limited'`.

With limited access the system picker still lets the user browse their whole library. Items inside the limited selection resolve to their `PHAsset`; any other item falls back to a copy of the file, exactly as when access was not granted. A single `present()` call can therefore return a mix of both.

Every time the app is launched anew, and the authorize method is called, if the current permission is `limited` the user will be prompted to update the image selection.

To prevent this prompt, add the following values to your `App_Resources/iOS/Info.plist`:

```xml
<key>PHPhotoLibraryPreventAutomaticLimitedAccessAlert</key>
<true/>
```

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

On iOS you may also skip `authorize()` altogether: `present()` shows the system picker without any permission and every selection comes back as a file copy (with `asset`, `path`, `filename`, `filesize`, `type`, `duration` and `thumbnail` still populated).

<!--tabs: TS  -->
```ts
if (isIOS) {
    const selection = await imagePickerObj.present(); // rejects with Error('Canceled') if dismissed
}
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
| `minimumNumberOfSelection`    | `number`      | `0`         | _Optional_:  (`iOS-only`) Deprecated: ignored by the system picker.                                                                                                             |
| `maximumNumberOfSelection`    | `number`      | `0`         | _Optional_:  (`iOS-only`, `Android-Photo Picker-Only`) The maximum number of selected assets.                                                                                                             |
| `showsNumberOfSelectedAssets` | `boolean`      | `true`      | _Optional_:  (`iOS-only`) Deprecated: ignored by the system picker.                                                                                                             |
| `prompt`                      | `string`      | `undefined` | _Optional_:  (`iOS-only`) Deprecated: ignored by the system picker.                                                                                                         |
| `numberOfColumnsInPortrait`   | `number`      | `4`         | _Optional_:  (`iOS-only`) Deprecated: ignored by the system picker.                                                                                                  |
| `numberOfColumnsInLandscape`  | `number`      | `7`         | _Optional_:  (`iOS-only`) Deprecated: ignored by the system picker.                                                                                                |
| `mediaType`                   | [ImagePickerMediaType](#imagepickermediatype)     | `Any`       |_Optional_: The type of media asset to pick whether to pick Image/Video/Any type of assets. |
| `copyToAppFolder`             | `string`      | `undefined` | _Optional_:  If passed, a new folder will be created in your applications folder and the asset will be copied there.                                                           |
| `renameFileTo`                | `string`      | `undefined` | _Optional_:  If passed, the copied file will be named what you choose. If you select multiple, -index will be appended.                                                           |
| `onProgress`                  | `(progress: ImagePickerProgress) => void` | `undefined` | _Optional_: Called while the selected items are resolved. See [Progress](#progress). |
| `showAdvanced `               | `boolean`  | `false`     | _Optional_:(`Android-only`) Show internal and removable storage options on Android (**WARNING**: [not supported officially](https://issuetracker.google.com/issues/72053350)). |
| `android` | `{read_external_storage: string;}`| _Optional_: (`Android-only`) Provides a reason for permission request to access external storage on API level above 23.


### Progress

Pass `onProgress` to be told how far along each selected item is while `present()` resolves. Each call carries the item's zero-based `index`, the `total` number of items and a `fraction` from 0 to 1 that never goes backwards. Every item ends with a `fraction` of 1.

<!-- tabs: TS -->
```ts
let imagePickerObj: ImagePicker = imagePickerPlugin.create({
    mode: "multiple",
    onProgress: ({ index, total, fraction }) => {
        progressBar.value = Math.round(fraction * 100);
        label.text = `Loading ${index + 1} of ${total}`;
    },
});
```

- **iOS** streams the download progress of items that live in iCloud (through `PHPickerViewController`'s item provider, or PhotoKit when the app has library access). Items already on the device usually go straight to 1.
- **Android** has no download progress to report, so it emits a single `fraction: 1` per item once that item is ready. This still lets you show an "n of total" counter.

### ImagePickerMediaType

The type of media assets to be selected.

- `Any` = `0`,
- `Image` = `1`,
- `Video` = `2`

## License

Apache License Version 2.0
