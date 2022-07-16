# @nativescript/google-maps-utils

```javascript
ns plugin add @nativescript/google-maps-utils
```
*Requires google maps plugin [@nativescript/google-maps](packages/google-maps/README.md)* 

## Usage

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

### HeatMaps
```javascript
import { HeatmapTileProvider } from '@nativescript/google-maps-utils';
import { GoogleMap, Coordinate } from '@nativescript/google-maps';

addHeatmapOverlay(map: GoogleMap, positionSet: Coordinate[]) {
	// Create a new heat map tile provider
	this.heatmapProvider = new HeatmapTileProvider(positionSet);
	// Pass tile provider to Google Maps 
	this.heatmapOverlay = this.map.addTileOverlay({
		tileProvider: this.heatmapProvider,
	});
}
```

### Clustering
```javascript
import { HeatmapTileProvider } from '@nativescript/google-maps-utils';
import { GoogleMap, Coordinate } from '@nativescript/google-maps';

addClusteredMarkers(map: GoogleMap, positions: Coordinate[]) {
	const clusterManager = new ClusterManager(map);

	// building marker list;
	const clusterSet: ClusterItem[] = positions.map((position) => {
		// creating new markers to cluster
		return new ClusterItem({
			position: position,
			title: `Marker ${i}`,
			snippet: `This is marker ${i}!!`
		})
	});

	//adding markers to cluster manager
	clusterManager.addItems(clusterSet);

	//clustering!
	clusterManager.cluster();
}
```

## License

Apache License Version 2.0
