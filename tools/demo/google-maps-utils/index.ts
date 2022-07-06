import { DemoSharedBase } from '../utils';
import { GeoJsonLayer, GeoJsonLayer, GoogleMapsUtils, IGeometryStyle } from '@nativescript/google-maps-utils';
import { Color, LoadEventData } from '@nativescript/core';
import { CameraUpdate, MapReadyEvent, MapView } from '@nativescript/google-maps';
import { australia } from './geojson.example';
import { intoNativeTileOverlayOptions } from '@nativescript/google-maps/utils';
import { zoomProperty } from '@nativescript/google-maps/common';

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
	mapView: MapView;
	geoJson: GeoJsonLayer;
	// heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;

	testIt() {
		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.geoJson.removeLayerFromMap();
		// this.heatmapProvider.setData(positionSet);
		// this.heatmapProvider.opacity = 0.1;
		// Need to clear cache to show adjustments
		// this.heatmapOverlay.clearTileCache();
	}

	async onMapReady(args: MapReadyEvent) {
		this.mapView = args.object as unknown as MapView;

		const map = args.map;
		map.animateCamera(
			CameraUpdate.fromCoordinate(
				{
					lat: -27.74278,
					lng: 130.497139,
				},
				4
			)
		);

		this.geoJson = new GeoJsonLayer(this.mapView, australia, {
			fillColor: new Color('blue'),
			strokeColor: new Color('red'),
			width: 4,
		});

		this.geoJson.addLayerToMap();

		// const positionSet = [];
		// for (var i = 0; i < 200; i++) {
		// 	positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		// }

		// this.heatmapProvider = utils.buildHeatMapProvider(positionSet);
		// this.heatmapOverlay = this.map.mapView.addTileOverlay(intoNativeTileOverlayOptions({}).tileProvider(this.heatmapProvider.build()));

		// console.log('added heat map');
	}
}
