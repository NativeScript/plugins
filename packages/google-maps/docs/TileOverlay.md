

# Tile Overlays
## Adding Tile Overlays

You can create Tile Overlays using the [GoogleMap](README.md)s object `addTileOverlay` function by passing in the specified [TileOverlay Options](#tileoverlay-options).

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

You can remove a TileOverlay using the [GoogleMap](README.md)s `removeTileOverlay` function, like so: 

```ts
function removeTileOverlay(map: GoogleMap, TileOverlay: TileOverlayOptions) {
	map.removeTileOverlay(TileOverlay);
}
```
