# Ground Overlays
## Adding Ground Overlays

You can create Ground Overlays using the [GoogleMap](GoogleMap.md)s object `addGroundOverlay` function by passing in the specified [GroundOverlay Options](#groundoverlay-options).

```ts
function addGroundOverlay(map: GoogleMap, GroundOverlay: GroundOverlayOptions): GroundOverlay {
	return map.addGroundOverlay(GroundOverlay);
}
```
### GroundOverlay Options

| Property | Type 
|:---------|:-----
zIndex | number | 
visible | boolean | 
transparency | number | 
position | Coordinate | 
bounds | CoordinateBounds | 
tappable | boolean | 
bearing | number | 
image | ImageSource | 
readonly width | number | 
readonly height | number | 
userData | any | 
width | number | 
height | number | 
anchorU | number | 
anchorV | number | 

## Removing Ground Overlays

You can remove a GroundOverlay using the [GoogleMap](GoogleMap.md)s `removeGroundOverlay` function, like so: 

```ts
function removeGroundOverlay(map: GoogleMap, GroundOverlay: GroundOverlayOptions) {
	map.removeGroundOverlay(GroundOverlay);
}
```
