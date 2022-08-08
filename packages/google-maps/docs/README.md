# GoogleMap

## Instance
You can get a GoogleMaps instance from the `MapView`s `ready` event:

```ts
function onReady(event: MapReadyEvent) {
	const map: GoogleMap = event.map;
}
```
or directly from the `MapView` after the ready event has fired:
```ts
function getGoogleMap(view: MapView): GoogleMap {
	return GoogleMap.fromNative(view._map);
}
```

## API 

#### Properties
| Property       | Type |Description
:--------------- |:-----|:---------------------------------
mapStyle | Style[] | See [Map Styles](#map-styles)
mapType | MapType | See [Map Type](#map-type)
buildingsEnabled | boolean | Enables Buildings
maxZoomLevel | number | Maximum level of zoom
minZoomLevel | number | Minimum level of zoom
myLocationEnabled | boolean | Enables "My Location"
trafficEnabled | boolean | Enables traffic
readonly uiSettings | IUISettings | See [UI Settings](#ui-settings)
cameraPosition | CameraPosition | See [Camera Position](#camera-position)
readonly projection | Projection | See [Projection](#projection)
readonly native | any | See [Native Map Object](#native-map-object)

#### Functions
| Func       | Description
:--------------- |:---------------------------------
[addMarker](Markers.md#adding-markers)(marker: [MarkerOptions](Markers.md#marker-options)): [Marker](Markers.md) | Adds a [marker](Markers.md) to the map
[removeMarker](Markers.md#removing-markers)(marker: [Marker](Markers.md#markers)) | Removes a marker from the map
addTileOverlay(options: TileOverlayOptions): TileOverlay | Adds a tile overlay to the map
removeTileOverlay(overlay: TileOverlay) | Removes a tile overlay from the map
[addCircle](Circle.md#adding-circles)(circle: [CircleOptions](Circle.md#circle-options)): [Circle](Circle.md) | Adds a circle to the map
[removeCircle](Circle.md#removing-circles)(circle: [Circle](Circle.md)) | Removes a circle from the map
addGroundOverlay(options: GroundOverlayOptions): GroundOverlay | Adds a ground overlay to the map
removeGroundOverlay(groundOverlay: GroundOverlay) | Removes a ground overlay from the map
[addPolygon](Polygon.md#adding-polygons)(options: [PolygonOptions](Polygon.md#polygon-options)): [Polygon](Polygon.md) | Adds a polygon to the map
[removePolygon](Polygon.md#removing-polygons)(polygon: [Polygon](Polygon.md)) | Removes a polygon from the map
[addPolyline](Polyline.md#adding-polylines)(options: [PolylineOptions](Polyline.md#polyline-options)): [Polyline](Polyline.md) | Adds a polyline to the map
[removePolyline](Polyline.md#removing-polylines)(polyline: [Polyline](Polyline.md)) | Removes a polyline from the map
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
target | Coordinate | The camera target is the location of the center of the map, specified as `lat` and `lng`.
bearing | number | The direction in which the camera points measured in degrees clockwise from north.
tilt | number | The viewing angle of the camera measured in degrees
zoom | number | The scale of the map 

#### Controlling the camera
To programatically update the camera position you can call `animateCamera` from the `GoogleMap` object, like so:
```ts
import { CameraPosition } from '@nativescript/google-maps';

map.animateCamera(
	CameraPosition.fromCoordinates({
			lat: -32.1234,
			lng: 125.1234
		},
		map.cameraPosition.zoom
	)
);
```
`CameraPosition` provides multiple methods to create a target CameraUpdate position. 

| Method | Description
|:-------|:-----------
fromCoordinate(coordinate: Coordinate, zoom: number) | Returns a CameraUpdate from a single coordinate
fromCoordinates(coordinates: Coordinate[], padding: number) | Returns a CameraUpdate from multiple coordinates 
fromCoordinates(coordinates: Coordinate[], width: number, height: number, padding: number) | Returns a CameraUpdate from multiple coordinates with specified height, width and padding
fromCameraPosition(position: CameraPosition) | Returns a CameraUpdate from a CameraPosition 
zoomIn() | Returns a CameraUpdate that has zoomed in
zoomOut() | Returns a CameraUpdate that has zoomed out
zoomTo(value: number) | Returns a CameraUpdate that has zoomed to a value
zoomBy(amount: number, point?: { x: number; y: number }) | Returns a CameraUpdate that has zoomed and panned
scrollBy(x: number, y: number) | Returns a panned CameraUpdate

### Projection
.

### UI Settings

You can adjust the maps UI settings from the `GoogleMap` object by configuring the following properties of `uiSettings`:

| Property       | Type | Description
:--------------- |:-----|:---------------------------------
compassEnabled | boolean | Whether the compass is enabled or not
indoorLevelPickerEnabled | boolean | Whether the indoor level picker is enabled or not
mapToolbarEnabled | boolean | Whether the map toolbar is enabled or not
myLocationButtonEnabled | boolean | Whether the 'My Location' button is enabled or not
rotateGesturesEnabled | boolean | Whether the compass is enabled or not
scrollGesturesEnabled | boolean | Whether map scroll gestures are enabled or not
tiltGesturesEnabled | boolean | Whether map tilt gestures are enabled or not
zoomGesturesEnabled | boolean | Whether map zoom gestures are enabled or not
zoomControlsEnabled | boolean | Whether map zoom controls are enabled or not
scrollGesturesEnabledDuringRotateOrZoom | boolean | Whether scroll gestures are enabled while rotating or zooming

### Map Type

The Google Maps API offers five types of maps:

| Type | Description
:------|:-----------
| None | No tiles. The map is rendered as an empty grid with no tiles loaded.
| Normal | Typical road map. Shows roads, some features built by humans, and important natural features such as rivers. Road and feature labels are also visible.
| Satellite |  Satellite photograph data. Road and feature labels are not visible.
| Terrain | Topographic data. The map includes colors, contour lines and labels, and perspective shading. Some roads and labels are also visible.
| Hybrid | Satellite photograph data with road maps added. Road and feature labels are also visible. 

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
