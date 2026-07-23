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

| Property | Type 
|:---------|:-----
|	`coordinates` | `Coordinate[]`;
|	`opacity` | `number`;
|	`radius` | `number`;
|	`maxIntensity` | `number`;
|	`gradient` | ` IGradient[]`;

---

## Clustering
```javascript
import { ClusterManager } from '@nativescript/google-maps-utils';
import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';

addClusteredMarkers(map: GoogleMap, markers: MarkerOptions[]) {
	const clusterManager: ClusterManager = map.clusterManager(markers);
}
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

### Feature tap events
Both layers emit a `featureTap` event when a rendered feature is tapped:
```javascript
import { GeoJsonLayer, FeatureTapEventData } from '@nativescript/google-maps-utils';

const layer = map.addGeoJson(geoJson, style);
layer.on(GeoJsonLayer.featureTapEvent, (args: FeatureTapEventData) => {
	console.log(args.feature.id, args.feature.geometry?.type, args.feature.properties);
});
```
The same works for `KmlLayer` (`KmlLayer.featureTapEvent`). On Android this wraps the native `Layer.OnFeatureClickListener`; on iOS the layer chains onto the map's delegate and matches taps back to the parsed features (all other map events keep working).

---

## Platform notes
- **Android single-slot listeners:** the native maps-utils library installs its own map listeners, which replace the ones `@nativescript/google-maps` registers. Adding a `ClusterManager` replaces the camera-idle listener (the map's `cameraPosition` event stops firing while clustering is active), and adding a GeoJSON/KML data layer replaces the marker/polygon/polyline click listeners (the map's `markerTap`/`polygon`/`polyline` events stop firing while a data layer is on the map). iOS is unaffected — the wrappers there chain onto the existing delegate.
- **iOS `fromNative` wrappers:** `GeoJsonLayer.fromNative` / `KmlLayer.fromNative` cannot expose `features` or `featureTap` (the GMU renderer does not expose its source features). Android has no such limitation.
- **`ClusterManager.setRenderer`** is a no-op on iOS — `GMUClusterManager` takes its renderer when it is created.
- **KML on iOS:** `KmlFeature.id` is always `null` and `properties` is synthesized as `{ name, description }` from the placemark title/snippet (GMU exposes neither a property bag nor an identifier).

## License

Apache License Version 2.0
