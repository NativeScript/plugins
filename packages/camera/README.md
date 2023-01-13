# @nativescript/camera

A plugin that allows you to take a picture and optionally save it  on the device storage.

## Installation

```cli
npm install @nativescript/camera --save
```
## Usage

### Requesting permissions

Both Android and iOS require explicit permissions in order for the application to have access to the camera and save photos on the device. Once the user has granted permissions the camera module can be used.

```TypeScript
import { requestPermissions } from '@nativescript/camera';

requestPermissions().then(
    function success() {
        // permission request accepted or already granted
        // ... call camera.takePicture here ...
    },
    function failure() {
        // permission request rejected
        // ... tell the user ...
    }
);
```
> **Note:** (**for Android**) Older versions of Android that don't use a request permissions popup won't be affected by the usage of the `requestPermissions()` method.

> **Note**: (**for iOS**) If the user rejects permissions from the iOS popup, the app is not allowed to ask again. You can instruct the user to go to app settings and enable the camera permission manually from there. Additionally, [App Store Guideline 5.1.1](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage) requires apps to clarify the usage of the camera and photo library. To do so, edit your `app/App_Resources/iOS/Info.plist` and add the following clarifications:

```xml
<key>NSCameraUsageDescription</key>
<string>enter your camera permission request text here</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>enter your photo library permission request text here</string>
```
> **Note**: For Android, the plugin requests the permissions for you.
### Checking if the device has a camera
Before you take a picture, you should check if the device has an available camera. To do so, call the `isAvailable()` method. This method will return `true` if the camera hardware is ready to use or `false` otherwise.

```ts
const isAvailable = camera.isAvailable();
```

> **Note**: This method will return false when used in iOS simulator (as the simulator does not have camera hardware)


### Taking a picture
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

### Using the options to take memory efficient picture

By default, the `camera.takePicture()` method takes a huge image (even mid-level devices with a `5MP` camera produce a `2580x2048` image, which in bitmap means approximately `15MB`). So sometimes taking such a big picture is just a waste of memory. The `camera.takePicture()` method accepts an optional [CameraOptions](#cameraoptions) parameter that allows you to adjust the size and other aspects of the picture.

```JavaScript
// JavaScript

const options = {
    width: 300,
    height: 300,
    keepAspectRatio: false,
    saveToGallery: true
};

camera.takePicture(options)
    .then(function (imageAsset) {
        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });
```

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

### Saving a picture

To save a picture with the width & height that you have defined you must use the `imageAsset` and save it to the file system as follows:

```TypeScript
import { ImageSource, knownFolders, path } from '@nativescript/core';

const source = new ImageSource();

source.fromAsset(imageAsset)
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

### Methods

| Method                               | Return Type | Description                                                                                                             |
| ------------------------------------ |------------| ----------------------------------------------------------------------------------------------------------------------- |
| `takePicture(options?: CameraOptions) `| `Promise<ImageAsset>`| Takes a photo using the camera with an optional parameter for setting different camera options.                          |
| `requestPermissions()`                 | `Promise<any>`| Requests permission from the user to access their saved photos as well as access their camera.|
| `requestCameraPermissions() `          | `Promise<any>` |Requests permission from the user for access to their camera.                                  |
| `requestPhotosPermissions()`           | `Promise<any>`|Requests permission from the user for access to their saved photos. Returns a Promise.                                   |
| `isAvailable()`                        |  `boolean`|Check if the device camera available to use.                                                                                  |

### CameraOptions

| Property        | Default | Platform | Description                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width`           | `0`       | Both     | The desired width of the picture (in device independent pixels). The actual image width will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions).  |
| `height`          | `0`       | Both     | The desired height of the picture (in device independent pixels). The actual image height will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions). |
| `keepAspectRatio` | `true`    | Both     | Defines if camera picture aspect ratio should be kept during picture resizing. The camera will return an image with the correct aspect ratio but generally only one (width or height) will be the same as requested; the other value will be calculated in order to preserve the aspect of the original image.|
| `saveToGallery`   | `true`    | Both     | A boolean parameter that indicates if the original taken photo will be saved in `Photos` for Android and in `Camera Roll` in iOS.                                                                                                                                                                                                                                                             |
| `allowsEditing`   | `false`   | iOS      | Defines if camera "Retake" or "Use Photo". Screen forces the user to crop camera picture to a square and optionally lets them zoom in.                                                                                                                                                                                                                                                    |
| `cameraFacing`    | `'rear'`    | Both     | The initial camera facing. Use `'front'` for selfies.                                                           | `modalPresentationStyle`    | `0`    | iOS     | Set a custom UIModalPresentationStyle (Defaults to UIModalPresentationStyle.FullScreen). |


> **Note**: The `saveToGallery` option might have unexpected behavior on Android! Some vendor camera apps (e.g. LG) will save all captured images to the gallery regardless of what the value of `saveToGallery` is. This behavior cannot be controlled by the camera plugin and if you need to exclude the captured image from the photo gallery, you will need to get a local storage read/write permission and write custom code to find the gallery location and delete the new image from there.

