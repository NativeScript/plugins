# @nativescript/google-maps
NativeScript binding for the Google Maps Android & iOS API.

[](#table-of-contents)
## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Config](#config)
	* [Android](#android)
	* [iOS](#ios)
* [Usage](#usage)
	* [Core](#core)
	* [Angular](#angular)
	* [Vue](#vue)
* [API](#mapview-api)
	* [Properties](#properties)
	* [Events](#events)
* [GoogleMap](#google-map)
	* [Instance](#instance)
	* [API](#api-1)
		* [Properties](#properties-1)
		* [Functions](#functions)
	* [Native Map Object](#native-map-object)
	* [Camera Position](#camera-position)
		* [Controlling the camera](#controlling-the-camera)
	* [UI Settings](#ui-settings)
	* [Map Type](#map-type)
	* [Map Styles](#map-styles)
* [Adding Markers](#adding-markers)
	* [Marker Options](#marker-options)
* [Removing Markers](#removin-gmarkers)
* [Adding Circles](#adding-circles)
	* [Circle Options](#circle-options)
* [Removing Circles](#removing-circles)
* [Adding Polygons](#adding-polygons)
	* [Polygon Options](#polygon-options)
* [Removing Polygons](#removing-polygons)
* [Adding Polylines](#adding-polylines)
	* [Polyline Options](#polyline-options)
* [Removing Polylines](#removing-polylines)
* [Adding Ground Overlays](#adding-ground-overlays)
	* [GroundOverlay Options](#ground-overlayoptions)
* [Removing Ground Overlays](#removing-ground-overlays)
* [Adding Tile Overlays](#adding-tile-overlays)
	* [TileOverlay Options](#tile-overlay-options)
* [Removing Tile Overlays](#removing-tile-overlays)

## Prerequisites
To use the Google Maps API, you must register your app in the [Google API Console](https://console.cloud.google.com/apis/dashboard) and obtain an API key.

## Installation
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

### Core

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

### Angular

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
### Vue

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

## MapView API

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
`ready` | Fires when the MapView is ready for use see [GoogleMap](#google-map)
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

# Google Map

## Instance
A GoogleMap instance is required from the map view to access many of the mapping features. The GoogleMaps instance is available from the `MapView`s `ready` event:

```ts
function onReady(event: MapReadyEvent) {
	const map: GoogleMap = event.map;
}
```

## API 

### Properties
| Property       | Type |Description
:--------------- |:-----|:---------------------------------
`mapStyle` | Style[] | See [Map Styles](#map-styles)
`mapType` | MapType | See [Map Type](#map-type)
`buildingsEnabled` | boolean | Enables Buildings
`maxZoomLevel` | number | Maximum level of zoom
`minZoomLevel` | number | Minimum level of zoom
`myLocationEnabled` | boolean | Enables "My Location"
`trafficEnabled` | boolean | Enables traffic
`uiSettings` | IUISettings | See [UI Settings](#ui-settings)
`cameraPosition` | CameraPosition | See [Camera Position](#camera-position)
`projection` | Projection | See [Projection](#projection)
`native` | any | See [Native Map Object](#native-map-object)

### Functions
| Func       | Description
:--------------- |:---------------------------------
[addMarker](#adding-markers)(marker: [MarkerOptions](#marker-options)): [Marker](#markers) | Adds a [marker](#markers) to the map
[removeMarker](#removing-markers)(marker: [Marker](#markers)) | Removes a marker from the map
addTileOverlay(options: TileOverlayOptions): TileOverlay | Adds a tile overlay to the map
removeTileOverlay(overlay: TileOverlay) | Removes a tile overlay from the map
[addCircle](#adding-circles)(circle: [CircleOptions](#circle-options)): [Circle](#circle) | Adds a circle to the map
[removeCircle](#removing-circles)(circle: [Circle](#circle)) | Removes a circle from the map
addGroundOverlay(options: GroundOverlayOptions): GroundOverlay | Adds a ground overlay to the map
removeGroundOverlay(groundOverlay: GroundOverlay) | Removes a ground overlay from the map
[addPolygon](#adding-polygons)(options: [PolygonOptions](#polygon-options)): [Polygon](#polygons) | Adds a polygon to the map
[removePolygon](#removing-polygons)(polygon: [Polygon](#polygons)) | Removes a polygon from the map
[addPolyline](#adding-polylines)(options: [PolylineOptions](#polyline-options)): [Polyline](#polyline) | Adds a polyline to the map
[removePolyline](#removing-polylines)(polyline: [Polyline]()#polyline) | Removes a polyline from the map
[animateCamera](#controlling-the-camera)(update: CameraUpdate) | Animates camera to a new position
snapshot(): Promise<ImageSource> | Returns a platform specific image of the maps current viewport
clear() | Clears all objects added to the map

### Native Map Object

`GoogleMap` gives you access to the platforms native map objects `native` | `android` | `ios` 

consult the appropriate SDK reference on how to use it: [iOS](https://developers.google.com/maps/documentation/ios-sdk/reference/interface_g_m_s_map_view) | [Android](https://developers.google.com/android/reference/com/google/android/gms/maps/GoogleMap)


### Camera Position

The maps current camera position can be read from the `GoogleMap`s object `cameraPosition`.

| Property       | Type | Description
:--------------- |:---- |:---------------------------------
`target` | Coordinate | The camera target is the location of the center of the map, specified as `lat` and `lng`.
`bearing` | number | The direction in which the camera points measured in degrees clockwise from north.
`tilt` | number | The viewing angle of the camera measured in degrees
`zoom` | number | The scale of the map 

#### Controlling the camera
To programatically update the camera position you can call `animateCamera` from the `GoogleMap` object, like so:
```ts
import { CameraPosition } from '@nativescript/google-maps';

googleMap.animateCamera(
	CameraPosition.fromCoordinates({
			lat: -32.1234,
			lng: 125.1234
		},
		googleMap.cameraPosition.zoom
	)
);
```
`CameraPosition` provides multiple methods to create a target CameraUpdate position. 

| Method | Description
|:-------|:-----------
| fromCoordinate(coordinate: Coordinate, zoom: number) | Returns a CameraUpdate from a single coordinate
| fromCoordinates(coordinates: Coordinate[], padding: number) | Returns a CameraUpdate from multiple coordinates 
| fromCoordinates(coordinates: Coordinate[], width: number, height: number, padding: number) | Returns a CameraUpdate from multiple coordinates with specified height, width and padding
| fromCameraPosition(position: CameraPosition) | Returns a CameraUpdate from a CameraPosition 
| zoomIn() | Returns a CameraUpdate that has zoomed in
| zoomOut() | Returns a CameraUpdate that has zoomed out
| zoomTo(value: number) | Returns a CameraUpdate that has zoomed to a value
| zoomBy(amount: number, point?: { x: number; y: number }) | Returns a CameraUpdate that has zoomed and panned
| scrollBy(x: number, y: number) | Returns a panned CameraUpdate


### UI Settings

You can adjust the maps UI settings from the `GoogleMap` object by configuring the following properties of `uiSettings`:

| Property       | Type | Description
|:-------------- |:-----|:---------------------------------
| `compassEnabled` | boolean | Whether the compass is enabled or not
| `indoorLevelPickerEnabled` | boolean | Whether the indoor level picker is enabled or not
| `mapToolbarEnabled` | boolean | Whether the map toolbar is enabled or not
| `myLocationButtonEnabled` | boolean | Whether the 'My Location' button is enabled or not
| `rotateGesturesEnabled` | boolean | Whether the compass is enabled or not
| `scrollGesturesEnabled` | boolean | Whether map scroll gestures are enabled or not
| `tiltGesturesEnabled` | boolean | Whether map tilt gestures are enabled or not
| `zoomGesturesEnabled` | boolean | Whether map zoom gestures are enabled or not
| `zoomControlsEnabled` | boolean | Whether map zoom controls are enabled or not
| `scrollGesturesEnabledDuringRotateOrZoom` | boolean | Whether scroll gestures are enabled while rotating or zooming

### Map Type

The Google Maps API offers five types of maps:

| Type | Description
:------|:-----------
| `None` | No tiles. The map is rendered as an empty grid with no tiles loaded.
| `Normal` | Typical road map. Shows roads, some features built by humans, and important natural features such as rivers. Road and feature labels are also visible.
| `Satellite` |  Satellite photograph data. Road and feature labels are not visible.
| `Terrain` | Topographic data. The map includes colors, contour lines and labels, and perspective shading. Some roads and labels are also visible.
| `Hybrid` | Satellite photograph data with road maps added. Road and feature labels are also visible. 

To set the type of a map, adjust the `GoogleMap` objects `mapType`. You can pass in one map type from the `MapType` Enum. For example: 

```ts
import { GoogleMap, MapType } from '@nativescript/google-map';

...
map: GoogleMap;
map.mapType = MapType.Hybrid;
```

### Map Styles
You can customize the presentation of the standard Google Map styles, changing the visual display of features like roads, parks, businesses, and other points of interest. This means that you can emphasize particular components of the map or make the map look good with your app.

Styling works only on the `normal` map type. Styling does not affect indoor maps.

To style your map, use a JSON file generated by the [Google Maps APIs Styling Wizard](https://mapstyle.withgoogle.com). In addition to changing the appearance of features, you can also hide features completely.
```json
[
  {
    "featureType": "all",
    "stylers": [
      { "color": "#C0C0C0" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#CCFFFF" }
    ]
  },{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
]
```
To apply a custom style to your map you can set the `mapStyle` property on your `GoogleMap` object, like so:
```ts
import { GoogleMap } from '@nativescript/google-map';

...
map: GoogleMap;
map.mapStyle = [{
	"featureType": "landscape",
	"elementType": "labels",
	"stylers": [
		{ "visibility": "off" }
	]
}];
```


# Markers

## Adding Markers

You can create markers using the [GoogleMap](#google-map)s object `addMarker` function by passing in the specified [Marker Options](#marker-options).

```ts
function addMarker(map: GoogleMap, marker: MarkerOptions): Marker {
	return map.addMarker(marker);
}
```
### Marker Options

| Property | Type | Description
|:---------|:-----|:-----------
| `position` | Coordinate | The position of the marker, specified as `lat` and `lng`
| `color` | string \| Color | Color of the marker, shades are unavailable.
| `title` | string | A string that's displayed in the info window when the user taps the marker
| `snippet` | string | Additional text that's displayed below the title
| `icon` | Image | A image that's displayed in place of the default marker image
| `draggable` | boolean | Set to `true` if you want to allow the user to move the marker. Defaults to `false`
| `flat` | boolean | By default, markers are oriented against the screen, and will not rotate or tilt with the camera. Flat markers are oriented against the surface of the earth, and will rotate and tilt with the camera
| `rotation` | boolean | The orientation of the marker, specified in degrees clockwise
| `anchorU` | number | Horizontal icon offset from the marker position
| `anchorV` | number | Vertical icon offset from the marker position
| `userData` | any | Additional information assigned to the marker
| `zIndex` | number | Z-index of the marker


## Removing Markers

You can remove a marker using the [GoogleMap](#google-map)s `removeMarker` function, like so: 

```ts
function removeMarker(map: GoogleMap, marker: Marker) {
	map.removeMarker(marker);
}
```

# Circle
## Adding Circles

You can create Circles using the [GoogleMap](#google-map)s object `addCircle` function by passing in the specified [Circle Options](#circle-options).

```ts
function addCircle(map: GoogleMap, Circle: CircleOptions): Circle {
	return map.addCircle(Circle);
}
```
### Circle Options

| Property | Type 
|:---------|:-----
`center` | Coordinate |
`fillColor` | Color \| string |
`radius` | number |
`strokeColor` | Color \| string |
`strokePattern` | PatternItem & Partial\<NativeObject\>[] |
`strokeWidth` | number |
`tappable` | boolean |
`visible` | boolean |
`zIndex` | number |
`userData` | { [key: string]: any } |

## Removing Circles

You can remove a Circle using the [GoogleMap](#google-map)s `removeCircle` function, like so: 

```ts
function removeCircle(map: GoogleMap, Circle: CircleOptions) {
	map.removeCircle(Circle);
}
```
# Polygons
## Adding Polygons

You can create polygons using the [GoogleMap](#google-map)s object `addPolygon` function by passing in the specified [Polygon Options](#polygon-options).

```ts
function addPolygon(map: GoogleMap, Polygon: PolygonOptions): Polygon {
	return map.addPolygon(Polygon);
}
```
### Polygon Options

| Property | Type 
|:---------|:-----
| `points` | Coordinate[] |
| `holes` | Coordinate[] |
| `tappable` | boolean |
| `strokeWidth` | number |
| `strokeColor` | Color \| string |
| `fillColor` | Color \| string |
| `strokePattern` | PatternItem & Partial\<NativeObject\>[] |
| `zIndex` | number |
| `geodesic` | boolean |
| `strokeJointType` | JointType |
| `visible` | boolean |
| `userData` | { [key: string]: any } |

## Removing Polygons

You can remove a Polygon using the [GoogleMap](#google-map)s `removePolygon` function, like so: 

```ts
function removePolygon(map: GoogleMap, Polygon: PolygonOptions) {
	map.removePolygon(Polygon);
}
```

# Polyline
## Adding Polylines

You can create Polylines using the [GoogleMap](#google-map)s object `addPolyline` function by passing in the specified [Polyline Options](#polyline-options).

```ts
function addPolyline(map: GoogleMap, Polyline: PolylineOptions): Polyline {
	return map.addPolyline(Polyline);
}
```
### Polyline Options

| Property | Type 
|:---------|:-----
| `width` | number | 
| `points` | Coordinate[] | 
| `tappable` | boolean | 
| `geodesic` | boolean | 
| `visible` | boolean | 
| `zIndex` | number | 
| `jointType` | JointType | 
| `pattern` | PatternItem & Partial\<NativeObject\>[] | 
| `color` | Color \| string | 
| `startCap` | Cap & Partial\<NativeObject\> | 
| `endCap` | Cap & Partial\<NativeObject\> | 
| `userData` | { [key: string]: any } | 

## Removing Polylines

You can remove a Polyline using the [GoogleMap](#google-map)s `removePolyline` function, like so: 

```ts
function removePolyline(map: GoogleMap, Polyline: PolylineOptions) {
	map.removePolyline(Polyline);
}
```

# Ground Overlays
## Adding Ground Overlays

You can create Ground Overlays using the [GoogleMap](#google-map)s object `addGroundOverlay` function by passing in the specified [GroundOverlay Options](#groundoverlay-options).

```ts
function addGroundOverlay(map: GoogleMap, GroundOverlay: GroundOverlayOptions): GroundOverlay {
	return map.addGroundOverlay(GroundOverlay);
}
```
### GroundOverlay Options

| Property | Type 
|:---------|:-----
`zIndex` | number | 
`visible` | boolean | 
`transparency` | number | 
`position` | Coordinate | 
`bounds` | CoordinateBounds | 
`tappable` | boolean | 
`bearing` | number | 
`image` | ImageSource | 
`userData` | any | 
`width` | number | 
`height` | number | 
`anchorU` | number | 
`anchorV` | number | 

## Removing Ground Overlays

You can remove a GroundOverlay using the [GoogleMap](#google-map)s `removeGroundOverlay` function, like so: 

```ts
function removeGroundOverlay(map: GoogleMap, GroundOverlay: GroundOverlayOptions) {
	map.removeGroundOverlay(GroundOverlay);
}
```



# Tile Overlays
## Adding Tile Overlays

You can create Tile Overlays using the [GoogleMap](#google-map)s object `addTileOverlay` function by passing in the specified [TileOverlay Options](#tileoverlay-options).

```ts
function addTileOverlay(map: GoogleMap, TileOverlay: TileOverlayOptions): TileOverlay {
	return map.addTileOverlay(TileOverlay);
}
```
### TileOverlay Options

| Property | Type 
|:---------|:-----
| `fadeIn` | boolean |
| `transparency` | number |
| `visible` | boolean |
| `tileProvider` | TileProvider & Partial\<NativeObject\> |
| `zIndex` | number |

## Removing Tile Overlays

You can remove a TileOverlay using the [GoogleMap](#google-map)s `removeTileOverlay` function, like so: 

```ts
function removeTileOverlay(map: GoogleMap, TileOverlay: TileOverlayOptions) {
	map.removeTileOverlay(TileOverlay);
}
```


---

## License

Apache License Version 2.0
