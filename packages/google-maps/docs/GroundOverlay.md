# Ground Overlays
## Adding Ground Overlays

You can create Ground Overlays using the [GoogleMap](README.md)s object `addGroundOverlay` function by passing in the specified [GroundOverlay Options](#groundoverlay-options).

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

You can remove a GroundOverlay using the [GoogleMap](README.md)s `removeGroundOverlay` function, like so: 

```ts
function removeGroundOverlay(map: GoogleMap, GroundOverlay: GroundOverlayOptions) {
	map.removeGroundOverlay(GroundOverlay);
}
```
