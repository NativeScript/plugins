# @nativescript/google-maps-utils

```javascript
ns plugin add @nativescript/google-maps-utils
```
*Requires google maps plugin [@nativescript/google-maps](packages/google-maps/README.md)* 

## Installation
Install the mixins to the GoogleMaps object
```javascript
import { installMixins } from '@nativescript/google-maps-utils';
installMixins();
```

## Usage
You can access the google maps utilities from the GoogleMaps object after the mixins have been installed.
```javascript
onMapReady(args: MapReadyEvent) {
	const map = args.map;
}
```

---

## HeatMaps
```javascript
import { HeatmapTileProvider, HeatmapOptions } from '@nativescript/google-maps-utils';
import { GoogleMap, Coordinate } from '@nativescript/google-maps';

addHeatmapOverlay(map: GoogleMap, heatmapOptions: HeatmapOptions) {
	// Create a new heat map tile provider
	const heatmapProvider = new HeatmapTileProvider(heatmapOptions);
	// Pass tile provider to Google Maps 
	const heatmapOverlay = map.addTileOverlay({
		tileProvider: heatmapProvider,
	});
}
```

Or via the mixin (after `installMixins()`):
```javascript
const heatmapProvider = map.heatmapProvider(heatmapOptions);
```

### HeatmapOptions

| Property | Type | Description
|:---------|:-----|:-----------
| `coordinates` | `Coordinate[]` | Uniform-weight points (each treated as intensity `1`)
| `weightedData` | `WeightedLatLng[]` | Weighted points; combined with `coordinates` if both are set
| `opacity` | `number` |
| `radius` | `number` |
| `maxIntensity` | `number` |
| `gradient` | `IGradient[]` |

A `WeightedLatLng` is `{ coordinate: Coordinate; intensity?: number }` (intensity defaults to `1`). Weighted data can also be set later with `provider.setWeightedData(data)`.

```javascript
const provider = new HeatmapTileProvider({
	weightedData: [
		{ coordinate: { lat: -33.87, lng: 151.2 }, intensity: 5 },
		{ coordinate: { lat: -33.88, lng: 151.21 }, intensity: 1 },
	],
});
```

---

## Clustering
```javascript
import { ClusterManager } from '@nativescript/google-maps-utils';
import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';

addClusteredMarkers(map: GoogleMap, markers: MarkerOptions[]) {
	const clusterManager: ClusterManager = map.clusterManager(markers);
}
```

`clusterManager()` takes an optional `ClusterManagerOptions`:

| Option | Type | Description
|:-------|:-----|:----------
| `algorithm` | `'distance'` \| `'grid'` | Clustering algorithm (default `'distance'`)
| `minClusterSize` | `number` | Minimum items before they render as a cluster
| `animate` | `boolean` | Whether clusters animate on zoom
| `animationDuration` | `number` | Animation duration in milliseconds

```javascript
map.clusterManager(markers, { algorithm: 'grid', minClusterSize: 3, animationDuration: 200 });
```

`ClusterManager` is an `Observable` and emits two events:

| Event | Data | Fires when
|:------|:-----|:----------
| `clusterTap` | `ClusterTapEventData` (`position`, `size`, `items`) | A cluster (group of items) is tapped
| `clusterItemTap` | `ClusterItemTapEventData` (`item`) | A single, unclustered item is tapped

```javascript
import { ClusterManagerBase, ClusterTapEventData } from '@nativescript/google-maps-utils';

clusterManager.on(ClusterManagerBase.clusterTapEvent, (args: ClusterTapEventData) => {
	console.log(`${args.size} items at ${args.position.lat}, ${args.position.lng}`);
});
```

---

## Geometry Utilities
Spherical geometry and polyline encoding helpers, same API on both platforms.
```javascript
import { computeDistanceBetween, computeHeading, computeArea, decodePolyline } from '@nativescript/google-maps-utils';

const meters = computeDistanceBetween({ lat: -33.865143, lng: 151.2099 }, { lat: -37.8136, lng: 144.9631 });
const heading = computeHeading({ lat: -33.865143, lng: 151.2099 }, { lat: -37.8136, lng: 144.9631 });
const squareMeters = computeArea(polygonPath);
const path = decodePolyline(encodedPolylineString);
```

| Function | Returns
|:---------|:-----
|	`computeDistanceBetween(from, to)` | distance in meters
|	`computeHeading(from, to)` | heading in degrees
|	`computeArea(path)` | area in square meters
|	`computeSignedArea(path)` | signed area in square meters (sign reflects winding order)
|	`computeLength(path)` | length in meters
|	`computeOffset(from, distance, heading)` | `Coordinate`
|	`interpolate(from, to, fraction)` | `Coordinate`
|	`containsLocation(point, polygon, geodesic?)` | `boolean`
|	`isLocationOnPath(point, path, tolerance?, geodesic?)` | `boolean`
|	`encodePolyline(path)` | `string`
|	`decodePolyline(encoded)` | `Coordinate[]`

---

## Marker Icons
Render text marker icons. Android wraps the native `IconGenerator`; iOS renders an equivalent icon in JavaScript (the GMU library ships no icon generator). The returned `ImageSource` can be used directly as a marker icon.
```javascript
import { IconFactory, ICON_STYLE } from '@nativescript/google-maps-utils';

const iconFactory = new IconFactory();
iconFactory.setStyle(ICON_STYLE.STYLE_BLUE);

map.addMarker({
	position: { lat: -33.865143, lng: 151.2099 },
	icon: iconFactory.makeIcon('A'),
});
```

---

## Data Layers (GeoJSON & KML)
Shared data layer API over both native libraries — the same classes and methods work on iOS and Android, with `native` / `android` / `ios` accessors when you need to delve into the platform-specific wrappers.

### GeoJSON
```javascript
import { GeoJsonLayer, IGeometryStyle } from '@nativescript/google-maps-utils';

onMapReady(args: MapReadyEvent) {
	const map = args.map;
	const style: Partial<IGeometryStyle> = { 
		fillColor: new Color('blue'),
		strokeColor: new Color('red'),
		width: 4,
	}
	
	const layer: GeoJsonLayer = map.addGeoJson(geoJson, style);

	// inspect the parsed data, same API on both platforms
	for (const feature of layer.features) {
		console.log(feature.id, feature.properties, feature.geometry.coordinates);
	}

	map.removeGeoJson(layer);
}
```

Layers can also be created and managed directly:
```javascript
import { GeoJsonLayer } from '@nativescript/google-maps-utils';

const layer = new GeoJsonLayer(map, geoJson, style);
layer.addLayerToMap();
layer.removeLayerFromMap();
```

### KML
```javascript
import { KmlLayer } from '@nativescript/google-maps-utils';

const layer: KmlLayer = map.addKml(kmlString);
map.removeKml(layer);
```

Layers can also be created and managed directly:
```javascript
const layer = new KmlLayer(map, kmlString);
layer.addLayerToMap();
layer.removeLayerFromMap();
```

### Styling
`IGeometryStyle` options: `strokeColor`, `fillColor`, `width`, `heading`, `anchor`, `title` work on both platforms; `scale` and `iconUrl` are iOS-only.

### Inspecting layers

- `geoJsonLayer.boundingBox` / `feature.boundingBox` — a `{ southwest, northeast }` box, on both platforms.
- `geoJsonLayer.addFeature(feature)` / `removeFeature(feature)` — **Android only** (a no-op warning on iOS).
- `kmlLayer.containers` (`KmlContainer[]`), `kmlLayer.groundOverlays` (`KmlGroundOverlay[]`), `kmlLayer.hasGroundOverlays()` — **Android only** (empty / `false` on iOS, which the GMU library does not expose).

### Feature tap events
Both layers emit a `featureTap` event when a rendered feature is tapped:
```javascript
import { GeoJsonLayer, FeatureTapEventData } from '@nativescript/google-maps-utils';

const layer = map.addGeoJson(geoJson, style);
layer.on(GeoJsonLayer.featureTapEvent, (args: FeatureTapEventData) => {
	console.log(args.feature.id, args.feature.geometry?.type, args.feature.properties);
});
```
The same works for `KmlLayer` (`KmlLayer.featureTapEvent`). On both platforms the tapped overlay is matched back to the parsed feature by geometry, and **all the underlying `@nativescript/google-maps` map events keep firing** (see the note below).

---

## Listener fan-out (map events keep working)

The native map exposes single-slot listeners (one camera-idle listener, one marker-click listener, etc.), and the underlying maps-utils libraries replace them when a data layer or cluster manager is added. To stop add-ons from clobbering each other — or the base plugin — `@nativescript/google-maps` owns those slots through a shared **listener hub** and fans each event out to every registered listener.

The upshot: you can add a `ClusterManager` **and** a GeoJSON/KML layer, and the map's own `cameraPosition`, `markerTap`, `polygon` and `polyline` events still fire, alongside each add-on's `featureTap` / `clusterTap` events. (The demo app's google-maps-utils page wires all of these to the console so the behavior can be verified on-device.)

## Platform notes
- **iOS `fromNative` wrappers:** `GeoJsonLayer.fromNative` / `KmlLayer.fromNative` cannot expose `features` or `featureTap` (the GMU renderer does not expose its source features). On Android, `fromNative` layers likewise skip `featureTap` wiring (no map reference is available).
- **iOS `fromNative` wrappers:** `GeoJsonLayer.fromNative` / `KmlLayer.fromNative` cannot expose `features` or `featureTap` (the GMU renderer does not expose its source features). Android has no such limitation.
- **`ClusterManager.setRenderer`** is a no-op on iOS — `GMUClusterManager` takes its renderer when it is created.
- **KML on iOS:** `KmlFeature.id` is always `null` and `properties` is synthesized as `{ name, description }` from the placemark title/snippet (GMU exposes neither a property bag nor an identifier).

## License

Apache License Version 2.0
