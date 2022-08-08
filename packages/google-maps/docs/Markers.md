# Markers

## Adding Markers

You can create markers using the [GoogleMap](GoogleMap.md)s object `addMarker` function by passing in the specified [Marker Options](#marker-options).

```ts
function addMarker(map: GoogleMap, marker: MarkerOptions): Marker {
	return map.addMarker(marker);
}
```
### Marker Options

| Property | Type | Description
|:---------|:-----|:-----------
| position | Coordinate | The position of the marker, specified as `lat` and `lng`
| color | string \| Color | Color of the marker, shades are unavailable.
| title | string | A string that's displayed in the info window when the user taps the marker
| snippet | string | Additional text that's displayed below the title
| icon | Image | A image that's displayed in place of the default marker image
| draggable | boolean | Set to `true` if you want to allow the user to move the marker. Defaults to `false`
| flat | boolean | By default, markers are oriented against the screen, and will not rotate or tilt with the camera. Flat markers are oriented against the surface of the earth, and will rotate and tilt with the camera
| rotation | boolean | The orientation of the marker, specified in degrees clockwise
| anchorU | number | Horizontal icon offset from the marker position
| anchorV | number | Vertical icon offset from the marker position
| userData | any | Additional information assigned to the marker
| zIndex | number | Z-index of the marker


## Removing Markers

You can remove a marker using the [GoogleMap](GoogleMap.md)s `removeMarker` function, like so: 

```ts
function removeMarker(map: GoogleMap, marker: Marker) {
	map.removeMarker(marker);
}
```
