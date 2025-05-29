# @nativescript/geolocation

## Contents
* [Intro](#intro)
* [Installation](#installation)
* [Android permissions requirements](#android-permissions-requirements)
* [iOS permissions requirements](#ios-permissions-requirements)
* [Use @nativescript/geolocation](#use-nativescriptgeolocation)
  * [Get current location](#get-current-location)
* [API](#api)
  * [Plugin functions](#plugin-functions)
  * [Location class](#location-class)
  * [Options interface](#options-interface)
* [Known Issues](#known-issues)
  * [Version conflicts with Google Play Services](#version-conflicts-with-google-play-services)
  * [openSettingsIfLocationHasBeenDenied on Android API level 30](#opensettingsiflocationhasbeendenied-on-android-api-level-30)

## Intro

A geolocation plugin to use for getting current location, monitor movement, etc.

## Installation

To install the plugin, run the following command in the  root  of your project.

```cli
npm install @nativescript/geolocation
```

## Android permissions requirements

To use geolocation on Android, you need to add the following permissions to your app's `AndroidManifest.xml` inside the `App_Resources/Android/src/main` directory:

```xml
  <!-- Always include this permission -->
  <!-- This permission is for "approximate" location data -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

  <!-- Include only if your app benefits from precise location access. -->
  <!-- This permission is for "precise" location data -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

  <!-- Required only when requesting background location access on
       Android 10 (API level 29) and higher. -->
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

More information can be found in the [Android docs here](https://developer.android.com/training/location/permissions).

## iOS permissions requirements

If `iosAllowsBackgroundLocationUpdates` property of the [options](#options-interface) object is set to `true`, the following code is required in the `App_Resources/iOS/Info.plist` file:

```xml
<key>UIBackgroundModes</key>
<array>
  <string>location</string>
</array>
```

## Use @nativescript/geolocation

### Get current location

Before you call any method that gets the user's location, request for the user's permission by calling the `enableLocationRequest` method. Once the user has granted the permission, you can call the `getCurrentLocation()` method, passing it a [options](#options) object to get the user's current location.

```ts
import * as geolocation from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core' // used to describe at what accuracy the location should get

geolocation.enableLocationRequest().then(() => {
    
    geolocation.getCurrentLocation({ desiredAccuracy: CoreTypes.Accuracy.high, maximumAge: 5000, timeout: 20000 }).then((currentLocation) => {

      console.log("My current latitude: ", currentLocation.latitude)
    })
  })
```

## API
### Plugin functions

The plugin provides the following functions for getting current location and more:

| Method  | Returns    | Description |
|---------|------------|-------------|
| `getCurrentLocation(options: Options)`                                                                   | Promise\<[Location](#location)\> | Gets current location applying the specified options (if any). Since version 5.0 of the plugin, it will use [requestLocation](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620548-requestlocation?language=objc) API for devices using `iOS 9.0+`. In situation of poor or no GPS signal, but available Wi-Fi it will take 10 sec to return the location.<br> The `options` parameter is optional. |
| `watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options?: Options)` | `number`              | Monitors location change.   |
| `watchPermissionStatus(permissionCallback: permissionCallbackType, errorCallback: errorCallbackType)`      | `number`              | (`iOS-only`)Monitors a change in location permission.|
| `clearWatch(watchId: number)` | `void` | Stops monitoring a change in location. The `watchId` parameter is returned from the `watchLocation()` method.  |
| `enableLocationRequest(always?: boolean, openSettingsIfLocationHasBeenDenied?: boolean`                   | `Promise<void> `    | Asks for permissions to use location services. On iOS if `always` is `true`, add the following keys to the `Info.plist`: [NSLocationAlwaysAndWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysandwheninuseusagedescription) (iOS 11.0+) OR [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysusagedescription?language=objc) (iOS 8.0-10.0) and [NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription). Read more about [request always usage](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization). On Android `SDK >= 29`, the `always` parameter set to `true` requires the  `ACCESS_BACKGROUND_LOCATION` permission to be added to the `AndroidManifest.xml`. That results in the user getting a system dialog with the option `'allow all the time'` option. Read about Android location permissions [here](https://developer.android.com/training/location/permissions) and [here](https://developer.android.com/training/location/permissions#request-background-location). If `openSettingsIfLocationHasBeenDenied` is `true` and the permission has previously been denied then the Settings app will open so the user can change the location services permission. See the [exception](#android-api-level-30---opensettingsiflocationhasbeendenied) to this.|
|`isEnabled(options?: Options)` | `Promise<boolean>`  | Resolves `true` or `false` based on the location services availability. |
| `distance(loc1: Location, loc2: Location)`  | `number ` | Calculates the distance between two locations. Returns the distance in meters. |
| `getIOSLocationManagerStatus()`| [CLAuthorizationStatus](https://developer.apple.com/documentation/corelocation/clauthorizationstatus?language=objc)|  Returns the status of the Location Authorization permission.|

### Location class
 
 This is a data class that encapsulates the following common properties for a geolocation.


| Property           | Type | Description                                             |
| ------------------ |------|------------------------------------------------------- |
| `latitude`         | `number`| The latitude of the geolocation, in degrees.            |
| `longitude`        | `number`|  The longitude of the geolocation, in degrees.           |
| `altitude`         | `number`|  The altitude (if available), in meters above sea level. |
| `horizontalAccuracy` | `number`|  The horizontal accuracy, in meters.                     |
| `verticalAccuracy`   | `number`|  The vertical accuracy, in meters.                       |
| `speed`              | `number`|  The speed, in meters/second over ground.                |
| `timestamp`          | `Date`|  The time at which this location was determined.         |


### Options interface

The following are the properties of the options object that you pass to the geolocation [functions](#plugin-functions) of the plugin.

| Property | Type | Description
|:---------|:-----|:-----------
| `desiredAccuracy` | `CoreTypes.Accuracy` | _Optional_: Specifies if high accuracy or any is required. Defaults to `CoreTypes.Accuracy.high` which returns the finest location available but use more power than the `CoreTypes.Accuracy.any` option. `Accuracy.any` is considered to be about 100 meter accuracy.                                                               
| `updateDistance`                       | `number`     | _Optional_: Specifies how often to update the location. Update distance filter in meters. Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423500-distancefilter?language=objc) and/or [Google documents](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html#setSmallestDisplacement(float)>) |
| `updateTime`                            | `number`      | Interval between location updates, in milliseconds (ignored on iOS). Read more in [Google document](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest#setInterval(long)>).  Defaults to `1 minute`|
| `minimumUpdateTime`                     | `number` | _Optional_: Minimum time interval between location updates, in milliseconds (ignored on iOS). Read more in [Google document](<https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest#setFastestInterval(long)>).                                                                                                                                               |
| `maximumAge`                            | `number` | _Optional_: The maximum age of the location data, in `ms`. |
| `timeout`                               |  `number` | _Optional_: It indicates how long, in `ms`, to wait for a location. Defaults to `5 minutes`. |
| `iosAllowsBackgroundLocationUpdates`    | `boolean`         |_Optional_: Indicates whether to allow the application to receive location updates in the background (ignored on Android). Defaults to `false`. If enabled, the `UIBackgroundModes` key in `Info.plist` is required. A. Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates?language=objc)                                                     |
| `iosPausesLocationUpdatesAutomatically` | `boolean`          | Indicates whether to allow the deactivation of the automatic pause of location updates (ignored on Android). Read more in [Apple document](https://developer.apple.com/documentation/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical?language=objc)                                                                                                                                          |

## Breaking changes

- 9.0+:
  - `watchLocation` is now `async` in order to check for permissions before attempting to watch
## Known issues

### openSettingsIfLocationHasBeenDenied on Android API level 30

If the user declines the permission twice during the installation lifetime of the app on Android API level 30 , the user won't be taken to the settings even if the `openSettingsIfLocationHasBeenDenied` option is true for `enableLocationRequest()`.

## License

Apache License Version 2.0
