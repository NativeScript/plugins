# Polyline
## Adding Polylines

You can create Polylines using the [GoogleMap](GoogleMap.md)s object `addPolyline` function by passing in the specified [Polyline Options](#polyline-options).

```ts
function addPolyline(map: GoogleMap, Polyline: PolylineOptions): Polyline {
	return map.addPolyline(Polyline);
}
```
### Polyline Options

| Property | Type 
|:---------|:-----
width | number | 
points | Coordinate[] | 
tappable | boolean | 
geodesic | boolean | 
visible | boolean | 
zIndex | number | 
jointType | JointType | 
pattern | PatternItem & Partial\<NativeObject\>[] | 
color | Color \| string | 
startCap | Cap & Partial\<NativeObject\> | 
endCap | Cap & Partial\<NativeObject\> | 
userData | { [key: string]: any } | 

## Removing Polylines

You can remove a Polyline using the [GoogleMap](GoogleMap.md)s `removePolyline` function, like so: 

```ts
function removePolyline(map: GoogleMap, Polyline: PolylineOptions) {
	map.removePolyline(Polyline);
}
```
