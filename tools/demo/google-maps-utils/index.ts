import { DemoSharedBase } from '../utils';
import { GeoJsonLayer, GoogleMapsUtils, HeatmapTileProvider } from '@nativescript/google-maps-utils/index.android';
import { LoadEventData } from '@nativescript/core';
import { MapView } from '@nativescript/google-maps/index.android';
import { australia } from './geojson.example';
import { intoNativeTileOverlayOptions } from '@nativescript/google-maps/utils';

function generateRandomPosition(position, distance) {
	var r = distance / 111300;

	var x = position[0];
	var y = position[1];

	var u = Math.random();
	var v = Math.random();

	var w = r * Math.sqrt(u);
	var t = 2 * Math.PI * v;

	var dx = (w * Math.cos(t)) / Math.cos(y);
	var xy = w * Math.sin(t);

	return { lat: x + dx, lng: y + xy };
}

export class DemoSharedGoogleMapsUtils extends DemoSharedBase {
	map: MapView;
	geoJson: GeoJsonLayer;
	heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;

	testIt() {
		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.heatmapProvider.setData(positionSet);
		this.heatmapProvider.opacity = 0.1;
		// Need to clear cache to show adjustments
		this.heatmapOverlay.clearTileCache();
	}

	async onMapReady(args: LoadEventData) {
		this.map = args.object as MapView;

		// Initialize or pass the map?
		const utils = new GoogleMapsUtils(this.map._map);
		this.geoJson = await utils.addGeoJsonLayer(JSON.stringify(australia));

		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.heatmapProvider = utils.buildHeatMapProvider(positionSet);
		this.heatmapOverlay = this.map.mapView.addTileOverlay(intoNativeTileOverlayOptions({}).tileProvider(this.heatmapProvider.build()));

		console.log('added heat map');
	}
}
