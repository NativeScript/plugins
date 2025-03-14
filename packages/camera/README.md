# @nativescript/camera

## Contents

* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/camera](#use-nativescriptcamera)
    * [Request for user permissions](#request-for-user-permissions)
    * [Check if the device has a camera](#check-if-the-device-has-a-camera)
    * [Take a picture](#take-a-picture)
    * [Take memory efficient picture](#take-memory-efficient-picture)
    * [Saving a picture to the file system](#saving-a-picture-to-the-file-system)
* [API](#api)
    * [Functions](#functions)
    * [CameraOptions interface](#cameraoptions-interface)

## Intro

A plugin that allows you to take a picture and optionally save it on the device storage.

**Note: Version 7 contains breaking changes:**
* New behavior on requesting permissions, detailed in [Request for user permissions](#request-for-user-permissions).


## Installation

To install the plugin, run the following command in the root directory of your project:

```cli
npm install @nativescript/camera --save
```
## Use @nativescript/camera

### Request for user permissions

Both Android and iOS require explicit permissions for the application to have access to the camera and save photos on the device.

To ask a user for permission to access their camera and the photo gallery, follow these steps:

1. Specify to the system the permissions your app from the user

On Android, you specify the permissions in `App_Resources/Android/src/main/AndroidManifest.xml`.  However, this plugin specifies the required permissions for you.

On iOS, [App Store Guideline 5.1.1](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage) requires apps to clarify the usage of the camera and photo library.
To add the clarifications, modify `app/App_Resources/iOS/Info.plist` and add them as the values of the `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription` keys, respectively. 

```xml
<key>NSCameraUsageDescription</key>
<string>enter your camera permission request text here</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>enter your photo library permission request text here</string>
```

2. Prompt the user for permissions

To prompt the user to grant or deny your app access to their camera and photo gallery, call the `requestPermissions()` method.

```TypeScript
import { requestPermissions } from '@nativescript/camera';

const perms = await camera.requestPermissions();

if (perms.Success) {
     // permission request accepted or already granted
     // ... call camera.takePicture here ...
} else {
     // permission request rejected
     // ... tell the user ...
     const cameraPermissionSuccess = perms.Details.Camera.Success;
     const photoPermissionSuccess = perms.Details.Photo.Success
}

```

If specifying the `saveToGallery = false` option, you can call the `requestCameraPermissions` method.

```TypeScript
import { requestPermissions } from '@nativescript/camera';

const perms = await camera.requestCameraPermissions();

if (perms.Success) {
     // permission request accepted or already granted
     // ... call camera.takePicture here ...
} else {
     // permission request rejected
     // ... tell the user ...
     
}

```

> **Note:** (**for Android**) Older versions of Android that don't use a request permissions popup won't be affected by the usage of the `requestPermissions()` method.

> **Note**: (**for iOS**) If the user rejects permissions from the iOS popup, the app is not allowed to ask again. You can instruct the user to go to app settings and enable the camera permission manually from there. 

### Check if the device camera is available

Before calling the `takePicture` method to take a picture, call the `isAvailable()` method to check if the device has an available camera. 

```ts
const isAvailable = camera.isAvailable();
```
> **Note**: For Android, the plugin requests the permissions for you.
### Checking if the device has a camera
Before you take a picture, you should check if the device has an available camera. To do so, call the `isAvailable()` method. This method will return `true` if the camera hardware is ready to use or `false` otherwise.

This method returns `true` if the camera hardware is ready to use or `false` otherwise.

> **Note**: This method returns `false` when used in iOS simulator (as the simulator does not have camera hardware)

### Take a picture

To take a picture, call the module's `takePicture()` method.

```JavaScript
// JavaScript
const camera = require("@nativescript/camera");
const { Image } = require("@nativescript/core");

camera.takePicture()
    .then(function (imageAsset) {
        console.log("Result is an image asset instance");
        var image = new Image();
        image.src = imageAsset;
    }).catch(function (err) {
        
        console.log("Error -> " + err.message);
    });
```

```TypeScript
// TypeScript
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

camera.takePicture()
    .then((imageAsset) => {
        console.log("Result is an image asset instance");
        var image = new Image();
        image.src = imageAsset;
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
```

### Take memory efficient picture

By default, the `camera.takePicture()` method takes a huge image (even mid-level devices with a `5MP` camera produce a `2580x2048` image, which in bitmap means approximately `15MB`). So sometimes taking such a big picture is just a waste of memory. The `camera.takePicture()` method accepts an optional [CameraOptions](#cameraoptions) parameter that allows you to adjust the size and other aspects of the picture.

```TypeScript
// TypeScript
import { Image } from "@nativescript/core";

const options = {
    width: 300,
    height: 300,
    keepAspectRatio: false,
    saveToGallery: true
};

camera.takePicture(options)
    .then((imageAsset) => {
        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
```

### Saving a picture to the file system

To save a picture with the width & height that you have defined, use the `imageAsset` and save it to the file system as follows:

```TypeScript
import { ImageSource, knownFolders, path } from '@nativescript/core';

ImageSource.fromAsset(imageAsset)
        .then((imageSource: ImageSource) => {
        const folderPath: string = knownFolders.documents().path;
        const fileName: string = "test.jpg";
        const filePath: string = path.join(folderPath, fileName);
        const saved: boolean = imageSource.saveToFile(filePath, "jpg");

        if (saved) {
            console.log("Gallery: " + this._dataItem.picture_url);
            console.log("Saved: " + filePath);
            console.log("Image saved successfully!");
        }
    });
```

This could be used to create thumbnails for quick display within your application.

## API

### Functions

| Function                                | Returns               | Description                                                                                     |
| --------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| `takePicture(options?: CameraOptions) ` | `Promise<ImageAsset>` | Takes a photo using the camera with an optional parameter for setting different camera options. |
| `requestPermissions()`                  | `Promise<any>`        | Requests permission from the user to access their saved photos as well as access their camera.  |
| `requestCameraPermissions() `           | `Promise<any>`        | Requests permission from the user for access to their camera.                                   |
| `requestPhotosPermissions()`            | `Promise<any>`        | Requests permission from the user for access to their saved photos. Returns a Promise.          |
| `isAvailable()`                         | `boolean`             | Check if the device camera available to use.                                                    |

### CameraOptions interface

| Property                 | Default  | Description                                                                                                                                                                                                                                                                                                                |
| :----------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width`                  | `0`      | _Optional_: The desired width of the picture (in device independent pixels). The actual image width will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions).                                                                                                         |
| `height`                 | `0`      | _Optional_: The desired height of the picture (in device independent pixels). The actual image height will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions).                                                                                                       |
| `keepAspectRatio`        | `true`   | _Optional_: Defines if camera picture aspect ratio should be kept during picture resizing. The camera will return an image with the correct aspect ratio but generally only one (width or height) will be the same as requested; the other value will be calculated in order to preserve the aspect of the original image. |
| `saveToGallery`          | `true`   | _Optional_: A boolean parameter that indicates if the original taken photo will be saved in `Photos` for Android and in `Camera Roll` in iOS.                                                                                                                                                                              |
| `allowsEditing`          | `false`  | _Optional_: (`iOS-only`) Defines if camera "Retake" or "Use Photo". Screen forces the user to crop camera picture to a square and optionally lets them zoom in.                                                                                                                                                            |
| `cameraFacing`           | `'rear'` | _Optional_: The initial camera facing. Use `'front'` for selfies.                                                                                                                                                                                                                                                          |
| `modalPresentationStyle` | `0`      | _Optional_: (`iOS-only`) Set a custom UIModalPresentationStyle (Defaults to UIModalPresentationStyle.FullScreen).                                                                                                                                                                                                          |

> **Note**: The `saveToGallery` option might have unexpected behavior on Android! Some vendor camera apps (e.g. LG) will save all captured images to the gallery regardless of what the value of `saveToGallery` is. This behavior cannot be controlled by the camera plugin and if you need to exclude the captured image from the photo gallery, you will need to get a local storage read/write permission and write custom code to find the gallery location and delete the new image from there.

