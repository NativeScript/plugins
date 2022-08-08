# Polygon
## Adding Polygons

You can create polygons using the [GoogleMap](GoogleMap.md)s object `addPolygon` function by passing in the specified [Polygon Options](#polygon-options).

```ts
function addPolygon(map: GoogleMap, Polygon: PolygonOptions): Polygon {
	return map.addPolygon(Polygon);
}
```
### Polygon Options

| Property | Type 
|:---------|:-----
points | Coordinate[] |
holes | Coordinate[] |
tappable | boolean |
strokeWidth | number |
strokeColor | Color \| string |
fillColor | Color \| string |
strokePattern | PatternItem & Partial\<NativeObject\>[] |
zIndex | number |
geodesic | boolean |
strokeJointType | JointType |
visible | boolean |
userData | { [key: string]: any } |

## Removing Polygons

You can remove a Polygon using the [GoogleMap](GoogleMap.md)s `removePolygon` function, like so: 

```ts
function removePolygon(map: GoogleMap, Polygon: PolygonOptions) {
	map.removePolygon(Polygon);
}
```
