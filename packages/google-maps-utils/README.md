# @nativescript/google-maps-utils

```javascript
ns plugin add @nativescript/google-maps-utils
```
*Note: Requires google maps plugin [@nativescript/google-maps](packages/google-maps/README.md)* 

## Usage

### GeoJson Layers
```javascript
import { GoogleMapsUtils, GeoJsonLayer } from '@nativescript/google-maps-utils';

// Initialize google map utility with MapView
const utils: GoogleMapsUtils = new GoogleMapsUtils(map);
const geoJson: GeoJsonLayer = await utils.addGeoJsonLayer(JSON.stringify(australia));
```

### HeatMaps
```javascript
import { HeatmapTileProvider } from '@nativescript/google-maps-utils';

// Create a new heat map tile provider
const heatmapProvider: HeatmapTileProvider = new HeatmapTileProvider(coordinates, heatmapOptions);
// Pass tile provider to GMaps 
const heatmapOverlay = map.mapView.addTileOverlay(intoNativeTileOverlayOptions({}).tileProvider(heatmapProvider.build()));
```

## License

Apache License Version 2.0
