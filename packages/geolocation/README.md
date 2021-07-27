# Nativescript geolocation

Geolocation plugin to use for getting current location, monitor movement, etc.

```javascript
ns plugin add @nativescript/geolocation
```

## Usage

The best way to explore the usage of the plugin is to inspect the demo app in the plugin's root folder.
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/main-page.ts`.

In short here are the steps:

### Import the plugin

_TypeScript_

```
import * as geolocation from "@nativescript/geolocation";
import { Utils } from "@nativescript/core";
Utils.Accuracy // used to describe at what accuracy the location should be get
```

_Javascript_

```
var geolocation = require("@nativescript/geolocation");
```

### Request permissions

```
geolocation.enableLocationRequest();
```

### Call plugin methods

```
// Get current location with high accuracy
geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
```

## API

### Properties

#### Location

| Property           | Default | Description                                             |
| ------------------ | ------- | ------------------------------------------------------- |
| latitude           | -       | The latitude of the geolocation, in degrees.            |
| longitude          | -       | The longitude of the geolocation, in degrees.           |
| altitude           | -       | The altitude (if available), in meters above sea level. |
| horizontalAccuracy | -       | The horizontal accuracy, in meters.                     |
| verticalAccuracy   | -       | The vertical accuracy, in meters.                       |
| speed              | -       | The speed, in meters/second over ground.                |
| timestamp          | -       | The time at which this location was determined.         |

#### Options

| Property                              | Default       | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| desiredAccuracy?                      | Accuracy.high | This will return the finest location available but use more power than `any` option. `Accuracy.any` is considered to be about 100 meter accuracy. Using a coarse accuracy such as this often consumes less power.                                                                                                                                                                           |
| updateDistance                        | No filter     | Update distance filter in meters. Specifies how often to update the location. Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423500-distancefilter?language=objc) and/or [Google documents](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html#setSmallestDisplacement(float)>) |
| updateTime                            | 1 minute      | Interval between location updates, in milliseconds (ignored on iOS). Read more in [Google document](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest#setInterval(long)>).                                                                                                                                                                   |
| minimumUpdateTime                     | 5 secs        | Minimum time interval between location updates, in milliseconds (ignored on iOS). Read more in [Google document](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest#setFastestInterval(long)>).                                                                                                                                               |
| maximumAge                            | -             | How old locations to receive in ms.                                                                                                                                                                                                                                                                                                                                                         |
| timeout                               | 5 minutes     | How long to wait for a location in ms.                                                                                                                                                                                                                                                                                                                                                      |
| iosAllowsBackgroundLocationUpdates    | false         | If enabled, UIBackgroundModes key in info.plist is required (check the hint below). Allow the application to receive location updates in background (ignored on Android). Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates?language=objc)                                                     |
| iosPausesLocationUpdatesAutomatically | true          | Allow deactivation of the automatic pause of location updates (ignored on Android). Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical?language=objc)                                                                                                                                          |

> If iosAllowsBackgroundLocationUpdates is set to true, the following code is required in the info.plist file:
>
> ```
> <key>UIBackgroundModes</key>
> <array>
>    <string>location</string>
> </array>
> ```

### Methods

| Method                                                                                                  | Returns            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getCurrentLocation(options: Options)                                                                    | Promise<Location>  | Get current location applying the specified options (if any). Since version 5.0 of the plugin, it will use [requestLocation](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620548-requestlocation?language=objc) API for devices using iOS 9.0+. In situation of poor or no GPS signal, but available Wi-Fi it will take 10 sec to return location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options: Options) | number             | Monitor for location change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| clearWatch(watchId: number)                                                                             | void               | Stop monitoring for location change. Parameter expected is the watchId returned from `watchLocation`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| enableLocationRequest(always?: boolean, openSettingsIfLocationHasBeenDenied?: boolean)                  | Promise\<void\>    | Ask for permissions to use location services. On iOS when `always` is true, it opens a custom prompt message and the following keys are required: [NSLocationAlwaysAndWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysandwheninuseusagedescription) (iOS 11.0+) OR [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysusagedescription?language=objc) (iOS 8.0-10.0) and [NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription). Read more about [request always usage](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization) On Android always (ACCESS_BACKGROUND_LOCATION) permission needs to be requeseted for SDK > 28. Read about Android location permissions [here](https://developer.android.com/training/location/permissions). On Android SDK 29 the user gets prompted a system dialog when the always option is selected. On SDK > 29 the always permission can only be given by the user from the settings [read more](https://developer.android.com/training/location/permissions#request-background-location) When `openSettingsIfLocationHasBeenDenied` is true, the settings app will open so the user can change the location services permission. |
| isEnabled                                                                                               | Promise\<boolean\> | Resolves `true` or `false` based on the location services availability.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| distance(loc1: Location, loc2: Location)                                                                | number             | Calculate the distance between two locations. Returns the distance in meters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Known Issues

### Version Conflicts – Google Play Services

If you have installed multiple plugins that use the Google Play Services you might run into version conflicts. For example, you may encounter the error below when using the [nativescript-google-maps-sdk](https://github.com/dapriett/nativescript-google-maps-sdk) plugin:

```
Cannot enable the location service. Error: java.lang.NoClassDefFoundError: Failed resolution of: Lcom/google/android/gms/internal/zzbck;
```

In order to fix this you might pin the version number in your `app/App_Resources/Android/before-plugins.gradle` file (if the file does not exist, just create it):

```gradle
android {  
  // other stuff here

  project.ext {
    googlePlayServicesVersion = "16.+"
  }
}
```

## License

Apache License Version 2.0
