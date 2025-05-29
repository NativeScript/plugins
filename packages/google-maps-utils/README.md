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
	
	map.addGeoJson({
		geoJson: geoJson,
		style: style,
	});
}
```

```javascript
import { GeoJsonLayer } from '@nativescript/google-maps-utils';

removeGeoJsonLayer(map: GoogleMap, layer: GeoJsonLayer) {
	map.removeGeoJson(layer);
}
```


## License

Apache License Version 2.0
