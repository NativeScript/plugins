# @nativescript/google-maps

```javascript
ns plugin add @nativescript/google-maps
```

## Config

### Android

Modify the `AndroidManifest` to include the new meta tag along with your API key, the manifest is located
in `App_Resources/Android/AndroidManifest.xml`

```xml

<application
  android:name="com.tns.NativeScriptApplication"
  android:allowBackup="true"
  android:icon="@mipmap/ic_launcher"
  android:label="@string/app_name"
  android:theme="@style/AppTheme"
  android:hardwareAccelerated="true">

  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="yourKey"/>
</application>
```


### iOS

Modify the `Info.plist` to include the new meta tag along with your API key, the manifest is located
in `App_Resources/iOS/Info.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>TNSGoogleMapsAPIKey</key>
    <string>yourKey</string>
  </dict>
</plist>
```

## Usage

#### Core

> **Important:** Ensure you've included xmlns:map="@nativescript/google-maps" on the Page element


```xml
<map:MapView
	lat="{{lat}}"
	lng="{{lng}}"
	zoom="{{zoom}}"
	bearing="{{bearing}}"
	tilt="{{tilt}}"
	ready="{{onReady}}"
	mapTap="{{onTap}}"
	mapLongPress="{{onLongPress}}"
	markerTap="{{onMarkerTap}}"
/>
```

#### Angular

```ts
import { GoogleMapsModule } from '@nativescript/google-maps/angular';

@NgModule({
    imports: [
      GoogleMapsModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [AppComponent]
})
```

```html
<MapView
	(ready)="onReady($event)"
	(mapTap)="onTap($event)"
	(mapLongPress)="onLongPress($event)"
	(markerTap)="onMarkerTap($event)"
>
</MapView>
```
#### Vue

```ts
import Vue from 'nativescript-vue'
import GoogleMaps from '@nativescript/google-maps/vue'

Vue.use(GoogleMaps)

```

```html
<MapView
	@ready="onReady"
	@mapTap="onTap"
	@mapLongPress="onLongPress"
	@markerTap="onMarkerTap"

/>
```

## API

### Properties

The following properties are available for adjusting the camera view on initialization:

| Property     | type | Description and Data Type
:------------- |:-----| :---------------------------------
`lat` | number | Latitude, in degrees
`lng` | number | Longitude, in degrees
`zoom` | number | Zoom level (described [here](https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels))
`bearing` | number | Bearing, in degrees
`tilt` | number | Tilt, in degrees

### Events

The following events are available:

| Event        | Description
:------------- | :---------------------------------
`ready` | Fires when the MapView is ready for use see [GoogleMap](./docs/GoogleMap.md#instance)
`mapTap` | Fires when a coordinate is tapped on the map
`mapLongPress` | Fires when a coordinate is long-pressed on the map
`markerTap` | Fires when a marker is tapped
`myLocationTap` | Fires when 'My Location' is tapped
`myLocationButtonTap` | Fires when the 'My Location' button is tapped
`markerDragStart` | Fires when a marker begins dragging
`markerDragging` | Fires while a marker is being dragged
`markerDragEnd` | Fires when a marker ends dragging
`tileRenderingStart` | Fires when tile rendering begins
`tileRenderingEnd` | Fires when tile rendering ends
`cameraPosition` | Fires when the map viewport state changes, camera states include `idle` | `start` | `moving`
`circle` | Fires when a circle is tapped 
`polygon` | Fires when a polygon is tapped 
`polyline` | Fires when a polyline is tapped 
`poi` | Fires when a POI is tapped 
`groundOverlay` | Fires when a ground overlay is tapped
`infoWindowTap` | Fires when a marker's info window is tapped
`infoWindowLongPress` | Fires when a marker's info window is long-pressed
`infoWindowClose` | Fires when a marker's info window is closed
`markerInfoContents` | 
`markerInfoWindow` | 
`activeBuilding` | Fires when a building is focused on
`activeLevel` | Fires when the level of the focused building changes


### Google Map
[Google Map integration, styling and more](./docs/README.md)

#### Markers
[Adding and Editing Markers](./docs/Markers.md)
#### Circles
[Adding and Editing Circles](./docs/Circle.md)
#### Polygons
[Adding and Editing Polygons](./docs/Polygon.md)
#### Polylines
[Adding and Editing Polylines](./docs/Polyline.md)
#### Ground Overlays
[Adding ground overlays and tile layers](./docs/GroundOverlay.md)
#### Tile Overlays
[Adding tile layers](./docs/TileOverlay.md)

---

## License

Apache License Version 2.0
