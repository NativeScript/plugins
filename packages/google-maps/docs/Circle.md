# Circle
## Adding Circles

You can create Circles using the [GoogleMap](README.md)s object `addCircle` function by passing in the specified [Circle Options](#circle-options).

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

You can remove a Circle using the [GoogleMap](README.md)s `removeCircle` function, like so: 

```ts
function removeCircle(map: GoogleMap, Circle: CircleOptions) {
	map.removeCircle(Circle);
}
```
