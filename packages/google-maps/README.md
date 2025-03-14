# @nativescript/google-maps

A plugin that allows you to use the [Maps SDK](https://developers.google.com/maps/documentation/android-sdk/overview) to access Google Maps features.

## Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Use @nativescript/google-maps with Core](#use-nativescriptgoogle-maps-with-core)
	* [Use @nativescript/google-maps with Angular](#use-nativescriptgoogle-maps-with-angular)
	* [Use @nativescript/google-maps with Vue](#use-nativescriptgoogle-maps-with-vue)

* [API](#api)
	* [MapView Class](#mapview-class)
		* [Events](#events)
		* [Properties](#properties)
	* [GoogleMap Object](#googlemap-object)
		* [Properties](#properties)
		* [Methods](#methods)
	* [Control the camera](#control-the-camera)
		* [Camera Position](#camera-position)
		* [Projection](#projection)
	* [Map Customization](#map-customization)
		* [UISettings](#uisettings-interface)
		* [Setting the map type](#setting-the-map-type)
		* [MapType enum](#maptype-enum)
		* [Styling The Map](#styling-the-map)
	* [Markers](#markers)
		* [Adding Markers](#adding-markers)
		* [Marker Object](#marker-object)
		* [MarkerOptions](#markeroptions)
		* [Removing Markers](#removing-markers)
	* [Circles](#circles)
		* [Adding Circles](#adding-circles)
		* [CircleOptions](#circleoptions)
		* [Removing Circles](#removing-circles)
	* [Polygons](#polygons)
		* [Adding Polygons](#adding-polygons)
		* [PolygonOptions](#polygonoptions)
		* [Removing Polygons](#removing-polygons)

	* [Polylines](#polylines)
		* [Adding Polylines](#adding-polylines)
		* [PolylineOptions](#polylineoptions)
		* [Removing Polylines](#removing-polylines)
	* [Ground Overlays](#ground-overlays)
		* [Adding Ground Overlays](#adding-ground-overlays)
		* [GroundOverlayOptions](#groundoverlayoptions)
		* [Removing Ground Overlays](#removing-ground-overlays)
	* [Tile Overlays](#tile-overlays)
		* [Adding Tile Overlays](#adding-tile-overlays)
		* [TileOverlayOptions](#tileoverlayoptions)
		* [Removing Tile Overlays](#removing-tile-overlays)
		* [Tile Providers](#tile-providers)

## Prerequisites
1. To use the Google Maps API, register your app in the [Google API Console](https://console.cloud.google.com/apis/dashboard) and obtain an API key.

2. Add the Google Maps API key to your app.

**Android**

To add the API key for Android, modify the `AndroidManifest.xml` file and add the `<meta-data>` tag with the `com.google.android.geo.API_KEY` as its name and the key as the value.  

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

**iOS**

To add the API key for iOS, add the `TNSGoogleMapsAPIKey` key and the API key as the value to the `Info.plist` file, located
at `App_Resources/iOS`.

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

## Installation
```cli
npm install @nativescript/google-maps
```
To use the plugin in the different NativeScript flavors, modify the `main.ts` to import and then register it.

## Use @nativescript/google-maps with core
1. Register the plugin namespace with Page's `xmlns` attribute providing your prefix( `map`, for example).

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:map="@nativescript/google-maps">
```

2. Access the \<[MapView](#mapview-class)\> using the the `map` prefix.
```xml
<map:MapView ...
```

Below is the complete code from the 2 preceding steps:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:map="@nativescript/google-maps">
	<map:MapView
		lat="{{lat}}"
		lng="{{lng}}"
		zoom="{{zoom}}"
		bearing="{{bearing}}"
		tilt="{{tilt}}"
		mapTap="{{onTap}}"
		mapLongPress="{{onLongPress}}"
		markerTap="{{onMarkerTap}}"
	/>
</Page>
```

3. To manage the mapping features, listen to the map view's `ready` event and get the reference to the [GoogleMap](#googlemap-object) instance from the event data.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:map="@nativescript/google-maps">
	<map:MapView
		lat="{{lat}}"
		lng="{{lng}}"
		zoom="{{zoom}}"
		bearing="{{bearing}}"
		tilt="{{tilt}}"

		ready="{{onReady}}" 👈

		mapTap="{{onTap}}"
		mapLongPress="{{onLongPress}}"
		markerTap="{{onMarkerTap}}"
	/>
</Page>
```
To use the plugin in the different NativeScript flavors, modify the `main.ts` to register it.

### Use @nativescript/google-maps with Angular

1. Register the plugin by adding the `GoogleMapsModule` to the `imports` array of the `AppModule`, in `app.module.ts` as follows:

```ts
import { GoogleMapsModule } from '@nativescript/google-maps/angular';

// Registering
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
2. Add [MapView](#mapview-class) to your markup.

```html
<MapView
	(ready)="onReady($event)" 
	(mapTap)="onTap($event)"
	(mapLongPress)="onLongPress($event)"
	(markerTap)="onMarkerTap($event)"
>
</MapView>
```

3. To manage the mapping features, listen to the map view's `ready` event and get the reference to the [GoogleMap](#googlemap-object) instance from the event data.

---
### Use @nativescript/google-maps with Vue

1. In the `app.ts` file, register the plugin by passing its reference to the `use()` method to the app instance. 

---
### Vue
```ts
import { createApp,registerElement } from 'nativescript-vue';
import GoogleMaps from '@nativescript/google-maps/vue'

import Home from './components/Home.vue';

const app = createApp(Home)
app.use(GoogleMaps)

```
> **Note** To handle the map features, see the [GoogleMap object](#googlemap-object) API.

---

2. Add the [MapView](#mapview-class) component to the markup.

```html
<MapView
	@ready="onReady"
	@mapTap="onTap"
	@mapLongPress="onLongPress"
	@markerTap="onMarkerTap"

/>
```
> **Note** To handle the map features, see the [GoogleMap object](#googlemap-object) API.

3. To manage the mapping features, listen to the map view's `ready` event and get the reference to the [GoogleMap](#googlemap-object) instance from the event data.


## API

### MapView Class

#### Properties

The following properties are available for adjusting the camera view on initialization:

| Property     | Type | Description
:------------- |:-----| :---------------------------------
`lat` | `number` | Latitude, in degrees
`lng` | `number` | Longitude, in degrees
`zoom` | `number` | Zoom level (described [here](https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels))
`bearing` | `number` | Bearing, in degrees
`tilt` | `number` | Tilt, in degrees
`preventDefaultMarkerTapBehavior` | `boolean` | Prevents the default marker event handling (panning/info windows) done by Google Maps

#### Events

`MapView` provides the following events:

| Event        | Description
:------------- | :---------------------------------
`ready` | Fires when the MapView is ready for use and provides a [GoogleMap](#googlemap-object) instance for managing mapping featurees.
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
`cameraPosition` | Fires when the map viewport state changes, camera states include `idle` \| `start` \| `moving`
`circle` | Fires when a circle is tapped 
`polygon` | Fires when a polygon is tapped 
`polyline` | Fires when a polyline is tapped 
`poi` | Fires when a POI is tapped 
`groundOverlay` | Fires when a ground overlay is tapped
`infoWindowTap` | Fires when a marker's info window is tapped
`infoWindowLongPress` | Fires when a marker's info window is long-pressed
`infoWindowClose` | Fires when a marker's info window is closed
`markerInfoContents` | If this method returns a view, it will be placed within the default info window frame.
`markerInfoWindow` | Called when a marker is about to become selected, and provides an optional custom info window to use for that marker if this method returns a view.
`activeBuilding` | Fires when a building is focused on
`activeLevel` | Fires when the level of the focused building changes

### GoogleMap Object

This class encapsulates the core, cross-platform mapping features. Its instance is made available when the [MapView](#mapview-class) fires the `ready` [event](#events), and this is where you'll perform the majority of your mapping tasks.

```ts
function onReady(event: MapReadyEvent) {
	const map: GoogleMap = event.map;
}
```

#### Properties
| Property       | Type |Description
:--------------- |:-----|:---------------------------------
`buildingsEnabled` | `boolean` | Enables Buildings
`maxZoomLevel` | `number` | Maximum level of zoom
`minZoomLevel` | `number` | Minimum level of zoom
`myLocationEnabled` | `boolean` | Enables "My Location"
`trafficEnabled` | `boolean` | Enables traffic
`cameraPosition` | `CameraPosition` | See [Camera Position](#camera-position)
`projection` | `Projection` | See [Projection](#projection)
`uiSettings` | `IUISettings` | See [UISettings Interface](#uisettings-interface)
`mapStyle` | Style[] | See [Map Styles](#map-styles)
`mapType` | MapType | See [MapType](#maptype)
`native` | any | _readonly_: Platform-specific instance of the `GoogleMap` class. `com.google.android.gms.maps.GoogleMap` for Android and `GMSMapView` for iOS.

#### Methods
| Method       | Returns |Description
:--------------- |:------------- |:---------------------------------
[addMarker](#adding-markers)(marker: [MarkerOptions](#markeroptions))| [Marker](#markers) |Adds a [marker](#markers) to the map
[removeMarker](#removing-markers)(marker: [Marker](#markers))| `void` | Removes a marker from the map
[addTileOverlay](#adding-tile-overlays)(options: [TileOverlayOptions](#tileoverlayoptions))| [TileOverlay](#tile-overlays) | Adds a tile overlay to the map
[removeTileOverlay](#removing-tile-overlays)(overlay: [TileOverlay](#tile-overlays))| `void` | Removes a tile overlay from the map
[addCircle](#adding-circles)(circle: [CircleOptions](#circleoptions))| [Circle](#circle) | Adds a circle to the map
[removeCircle](#removing-circles)(circle: [Circle](#circle))| `void` | Removes a circle from the map
[addGroundOverlay](#adding-ground-overlays)(options: [GroundOverlayOptions](#groundoverlayoptions)) | [GroundOverlay](#ground-overlays) | Adds a ground overlay to the map
[removeGroundOverlay](#removing-ground-overlays)(groundOverlay: [GroundOverlay](#ground-overlays)) | Removes a ground overlay from the map
[addPolygon](#adding-polygons)(options: [PolygonOptions](#polygonoptions)) | [Polygon](#polygons) | Adds a polygon to the map
[removePolygon](#removing-polygons)(polygon: [Polygon](#polygons)) | Removes a polygon from the map
[addPolyline](#adding-polylines)(options: [PolylineOptions](#polylineoptions)) | [Polyline](#polyline) | Adds a polyline to the map
[removePolyline](#removing-polylines)(polyline: [Polyline](#polyline))| `void` | Removes a polyline from the map
[animateCamera](#controlling-the-camera)(update: [CameraUpdate](#controlling-the-camera))| `void` | Animates camera to a new position
`snapshot()`| `Promise<ImageSource>` | Returns a platform-specific image of the map's current viewport
`clear()`| `void` | Clears all objects added to the map

### Native Map Object

`GoogleMap` gives you access to the platforms native map objects `native` | `android` | `ios` 

consult the appropriate SDK reference on how to use it: [iOS](https://developers.google.com/maps/documentation/ios-sdk/reference/interface_g_m_s_map_view) | [Android](https://developers.google.com/android/reference/com/google/android/gms/maps/GoogleMap)

## Control the camera

To programmatically update the camera position, call the `animateCamera()` method on the `GoogleMap` object and pass it a [CameraUpdate](#cameraupdate-class) instance.
```ts
import { CameraUpdate } from '@nativescript/google-maps';

googleMap.animateCamera(
	CameraUpdate.fromCoordinate({
			lat: -32.1234,
			lng: 125.1234
		},
		googleMap.cameraPosition.zoom
	)
);
```

See [CameraUpdate](#cameraupdate-class) for more methods you can call and pass to the `animateCamera()` method.


### Camera Position

The map's current camera position can be read from the `cameraPosition` property of a [GoogleMap](#googlemap-object) object.

| Property       | Type | Description
:--------------- |:---- |:---------------------------------
`target` | [Coordinate](#coordinate) | The camera target is the location of the center of the map, specified as `lat` and `lng`.
`bearing` | `number` | The direction in which the camera points measured in degrees clockwise from north.
`tilt` | `number` | The viewing angle of the camera measured in degrees
`zoom` | `number` | The scale of the map 

### CameraUpdate Class
`CameraUpdate` provides multiple methods to create a target [CameraPosition](#camera-position). 

| Method |  Description
|:-------|:-----------
| `fromCoordinate(coordinate: Coordinate, zoom: number)` | Returns a `CameraUpdate` from a single coordinate
| `fromCoordinates(coordinates: Coordinate[], padding: number)` | Returns a `CameraUpdate` from multiple coordinates 
| `fromCoordinates(coordinates: Coordinate[], width: number, height: number, padding: number)` | Returns a `CameraUpdate` from multiple coordinates with specified height, width and padding
| `fromCameraPosition(position: CameraPosition)` | Returns a `CameraUpdate` from a CameraPosition 
| `zoomIn()` | Returns a `CameraUpdate` that has zoomed in
| `zoomOut()` | Returns a `CameraUpdate` that has zoomed out
| `zoomTo(value: number)` | Returns a `CameraUpdate` that has zoomed to a value
| `zoomBy(amount: number, point?: { x: number; y: number })` | Returns a `CameraUpdate` that has zoomed and panned
| `scrollBy(x: number, y: number)` | Returns a panned `CameraUpdate`

### Projection 
A projection is used to translate between on screen location and geographic coordinates on the surface of the Earth.

| Method | Description
|:-------|:-----------
| `fromScreenLocation(point: { x: number; y: number })` | Returns the geographic location that corresponds to a screen location.
| `getVisibleRegion()` | Gets a projection of the viewing frustum for converting between screen coordinates and geo-latitude/longitude coordinates.
| `toScreenLocation(coordinate: Coordinate)` | Returns a screen location that corresponds to a geographical coordinate.
| `containsCoordinate(coordinate: Coordinate)` | Returns true if the coordinate is visible in the current viewport.

## Map Customization

### UISettings Interface

You can adjust the maps UI settings from the `GoogleMap` object by configuring the following properties of the `uiSettings` property:

| Property       | Type | Description
|:-------------- |:-----|:---------------------------------
| `compassEnabled` | `boolean` | Whether the compass is enabled or not
| `indoorLevelPickerEnabled` | `boolean` | Whether the indoor level picker is enabled or not
| `mapToolbarEnabled` | `boolean` | Whether the map toolbar is enabled or not
| `myLocationButtonEnabled` | `boolean` | Whether the 'My Location' button is enabled or not
| `rotateGesturesEnabled` | `boolean` | Whether the compass is enabled or not
| `scrollGesturesEnabled` | `boolean` | Whether map scroll gestures are enabled or not
| `tiltGesturesEnabled` | `boolean` | Whether map tilt gestures are enabled or not
| `zoomGesturesEnabled` | `boolean` | Whether map zoom gestures are enabled or not
| `zoomControlsEnabled` | `boolean` | Whether map zoom controls are enabled or not
| `scrollGesturesEnabledDuringRotateOrZoom` | `boolean` | Whether scroll gestures are enabled while rotating or zooming

### Setting the map type

To set the map type, set the `mapType` property to one of the [MapType](#maptype-enum) options.

```ts
import { GoogleMap, MapType } from '@nativescript/google-maps';

map: GoogleMap;
map.mapType = MapType.Hybrid;
```

### MapType enum

The Google Maps API offers the following five types of maps:

| Type | Description
:------|:-----------
| `None` | No tiles. The map is rendered as an empty grid with no tiles loaded.
| `Normal` | Typical road map. Shows roads, some features built by humans, and important natural features such as rivers. Road and feature labels are also visible.
| `Satellite` |  Satellite photograph data. Road and feature labels are not visible.
| `Terrain` | Topographic data. The map includes colors, contour lines and labels, and perspective shading. Some roads and labels are also visible.
| `Hybrid` | Satellite photograph data with road maps added. Road and feature labels are also visible. 

### Styling the map

You can style the map's items, such as roads, parks, businesses, and other points of interest. 

Styling works only on the [normal](#maptype-enum) map type. Styling does not affect indoor maps.

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
To apply a custom style to your map you can set the `mapStyle` property on your `GoogleMap` object:
```ts
import { GoogleMap } from '@nativescript/google-maps';

map: GoogleMap;
map.mapStyle = [{
	"featureType": "landscape",
	"elementType": "labels",
	"stylers": [
		{ "visibility": "off" }
	]
}];
```

## Markers

### Adding Markers

You can create markers using the [GoogleMap](#googlemap-object)'s object `addMarker` method by passing it a [MarkerOptions](#markeroptions) object.

```ts
function addMarker(map: GoogleMap, markerOptions: MarkerOptions): Marker {
	return map.addMarker(markerOptions);
}
```
`addMarker` returns a [Marker](#marker-object)

 #### Marker Object
 It implements the [MarkerOptions] interface and has the following additional methods.

| Method | Returns 
|:-------|:-------
| `hideInfoWindow()`|  `void`
| `showInfoWindow()`|  `void`

#### MarkerOptions

| Property | Type | Description
|:---------|:-----|:-----------
| `position` | [Coordinate](#coordinate) | The position of the marker, specified as `lat` and `lng`
| `color` | `string` \| `Color` | Color of the marker, shades are unavailable.
| `opacity` | `number` | Opacity of the marker.
| `title` | `string` | A string that's displayed in the info window when the user taps the marker
| `snippet` | `string` | Additional text that's displayed below the title
| `icon` | `ImageSource \| UIImage \| Bitmap` | A image that's displayed in place of the default marker image
| `draggable` | `boolean` | Set to `true` if you want to allow the user to move the marker. Defaults to `false`
| `flat` | `boolean` | By default, markers are oriented against the screen, and will not rotate or tilt with the camera. Flat markers are oriented against the surface of the earth, and will rotate and tilt with the camera
| `rotation` | `boolean` | The orientation of the marker, specified in degrees clockwise
| `anchorU` | `number` | Horizontal icon offset from the marker position
| `anchorV` | `number` | Vertical icon offset from the marker position
| `userData` | `any` | Additional information assigned to the marker
| `zIndex` | `number` | Z-index of the marker

#### Coordinate
| Property | Type
|:---------|:----
| `lat` | `number`
| `lng` | `number`

### Removing Markers

To remove a marker from the map, call the `removeMarker()` method on the [GoogleMap](#googlemap-object) instance and pass it the marker to be removed.

```ts
function removeMarker(map: GoogleMap, marker: Marker) {
	map.removeMarker(marker);
}
```

## Circles

### Adding Circles

To add a circle to the map, call the `addCircle()` method and specify its properties with a [CircleOptions](#circleoptions) object.

```ts
function addCircle(map: GoogleMap, circleOptions: CircleOptions): Circle {
	return map.addCircle(circleOptions);
}
```

#### CircleOptions

| Property | Type 
|:---------|:-----
`center` | [Coordinate](#coordinate) |
`fillColor` | `Color` \| `string` |
`radius` | `number` |
`strokeColor` | `Color` \| `string` |
`strokePattern` | PatternItem & Partial\<NativeObject\>[] |
`strokeWidth` | `number` |
`tappable` | `boolean` |
`visible` | `boolean` |
`zIndex` | `number` |
`userData` | `{ [key: string]: any }` |

### Removing Circles

You can remove a circle using the [GoogleMap](#googlemap-object)'s `removeCircle()` method.

```ts
function removeCircle(map: GoogleMap, circle: Circle) {
	map.removeCircle(circle);
}
```
## Polygons
### Adding Polygons

You can create polygons using the [GoogleMap](#googlemap-object)'s object `addPolygon()` method by passing in the specified [PolygonOptions](#polygonoptions).

```ts
function addPolygon(map: GoogleMap, polygonOptions: PolygonOptions): Polygon {
	return map.addPolygon(polygonOptions);
}
```
#### PolygonOptions

| Property | Type 
|:---------|:-----
| `points` | [Coordinate](#coordinate)[] |
| `holes` | [Coordinate](#coordinate)[] |
| `tappable` | `boolean` |
| `strokeWidth` | `number` |
| `strokeColor` | Color \| string |
| `fillColor` | Color \| string |
| `strokePattern` | PatternItem & Partial\<NativeObject\>[] |
| `zIndex` | `number` |
| `geodesic` | `boolean` |
| `strokeJointType` | JointType |
| `visible` | `boolean` |
| `userData` | `{ [key: string]: any }` |

## Removing Polygons

You can remove a Polygon using the [GoogleMap](#googlemap-object)'s `removePolygon` function, like so: 

```ts
function removePolygon(map: GoogleMap, polygon: Polygon) {
	map.removePolygon(polygon);
}
```

## Polylines
### Adding Polylines

You can create Polylines using the [GoogleMap](#googlemap-object)'s object `addPolyline` function by passing it a [PolylineOptions](#polylineoptions) object.

```ts
function addPolyline(map: GoogleMap, polylineOptions: PolylineOptions): Polyline {
	return map.addPolyline(polylineOptions);
}
```
#### PolylineOptions

| Property | Type 
|:---------|:-----
| `width` | `number` | 
| `points` | [Coordinate](#coordinate)[] | 
| `tappable` | `boolean` | 
| `geodesic` | `boolean` | 
| `visible` | `boolean` | 
| `zIndex` | `number` | 
| `jointType` | JointType | 
| `pattern` | PatternItem & Partial\<NativeObject\>[] | 
| `color` | Color \| string | 
| `startCap` | Cap & Partial\<NativeObject\> | 
| `endCap` | Cap & Partial\<NativeObject\> | 
| `userData` | `{ [key: string]: any }` | 

### Removing Polylines

You can remove a Polyline using the [GoogleMap](#googlemap-object)'s `removePolyline` function, like so: 

```ts
function removePolyline(map: GoogleMap, polyline: Polyline) {
	map.removePolyline(polyline);
}
```

## Ground Overlays
### Adding Ground Overlays

You can create Ground Overlays using the [GoogleMap](#googlemap-object)'s object `addGroundOverlay` function by passing in the specified [GroundOverlay Options](#groundoverlayoptions).

```ts
function addGroundOverlay(map: GoogleMap, groundOverlayOptions: GroundOverlayOptions): GroundOverlay {
	return map.addGroundOverlay(groundOverlayOptions);
}
```
#### GroundOverlayOptions

| Property | Type 
|:---------|:-----
`zIndex` | `number` | 
`visible` | `boolean` | 
`transparency` | `number` | 
`position` | [Coordinate](#coordinate) | 
`bounds` | CoordinateBounds | 
`tappable` | `boolean` | 
`bearing` | `number` | 
`image` | ImageSource | 
`userData` | any | 
`width` | `number` | 
`height` | `number` | 
`anchorU` | `number` | 
`anchorV` | `number` | 

### Removing Ground Overlays

You can remove a GroundOverlay using the [GoogleMap](#googlemap-object)'s `removeGroundOverlay` function, like so: 

```ts
function removeGroundOverlay(map: GoogleMap, groundOverlay: GroundOverlay) {
	map.removeGroundOverlay(groundOverlay);
}
```


## Tile Overlays
### Adding Tile Overlays

You can create Tile Overlays using the [GoogleMap](#googlemap-object)'s object `addTileOverlay` function by passing in the specified [TileOverlay Options](#tileoverlayoptions).

```ts
function addTileOverlay(map: GoogleMap, tileOverlayOptions: TileOverlayOptions): TileOverlay {
	return map.addTileOverlay(tileOverlayOptions);
}
```
#### TileOverlayOptions

| Property | Type 
|:---------|:-----
| `fadeIn` | `boolean` |
| `transparency` | `number` |
| `visible` | `boolean` |
| `tileProvider` | [TileProvider](#tile-providers) & Partial\<NativeObject\> |
| `zIndex` | `number` |
| `clearTileCache()` | `void` |

Setting tile overlay options after the tile overlay has been added to the map can have no effect on the tile overlay. To update the tile overlay, you may need to call `clearTileCache()`.

### Removing Tile Overlays

You can remove a TileOverlay using the [GoogleMap](#googlemap-object)'s `removeTileOverlay` function, like so: 

```ts
function removeTileOverlay(map: GoogleMap, tileOverlay: TileOverlay) {
	map.removeTileOverlay(tileOverlay);
}
```

## Tile Providers

Tile providers are objects that provide tiles to be used in a Tile Overlay.

| Provider | Description |
|:---------|:------------|
| `TileProvider` | Base class for tile providers |
| `UrlTileProvider` | Tile provider that returns a tile from a URL |


For example a `UrlTileProvider` can be created like so:

```ts
const tileProvider = new UrlTileProvider((x, y, z) => {
	return `https://tiles.example.com/${z}/${x}/${y}.png`;
});
```

---

## License

Apache License Version 2.0
