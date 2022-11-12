# @nativescript/google-maps-utils

```javascript
ns plugin add @nativescript/google-maps-utils
```
*Requires google maps plugin [@nativescript/google-maps](packages/google-maps/README.md)* 

## Usage
Initialize the GoogleMapUtils class on the GoogleMap load event
```javascript
onMapReady(args: MapReadyEvent) {
	const map = args.map;
	const googleMapsUtils = new GoogleMapUtils(map);
}
```


### HeatMaps
```javascript
import { GoogleMapsUtils, HeatmapTileProvider, HeatmapOptions } from '@nativescript/google-maps-utils';
import { GoogleMap, Coordinate } from '@nativescript/google-maps';

addHeatmapOverlay(map: GoogleMap, heatmapOptions: HeatmapOptions) {
	// Create a new heat map tile provider
	const heatmapProvider: HeatmapTileProvider = googleMapsUtils.addHeatmapLayer(heatmapOptions);
	// Pass tile provider to Google Maps 
	const heatmapOverlay = map.addTileOverlay({
		tileProvider: heatmapProvider,
	});
}
```

### Clustering
```javascript
import { ClusterManager } from '@nativescript/google-maps-utils';
import { GoogleMap, MarkerOptions } from '@nativescript/google-maps';

addClusteredMarkers(markers: MarkerOptions[]) {
	const clusterManager: ClusterManager = googleMapsUtils.addClusterManager(markers);
}
```

## Experimental Features
Features that are not yet fully implemented or likely to change.
### GeoJson Layers

Currently only supports GeoJson Objects.

```javascript
import { GeoJsonLayer, IGeometryStyle } from '@nativescript/google-maps-utils';

onMapReady(args: MapReadyEvent) {
	const style: Partial<IGeometryStyle> = { 
		fillColor: new Color('blue'),
		strokeColor: new Color('red'),
		width: 4,
	}
	geoJsonLayer: GeoJsonLayer = new GeoJsonLayer(args.map, australia, style);
}
```

### Custom Markers

## License

Apache License Version 2.0
