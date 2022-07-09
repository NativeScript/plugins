import { DemoSharedBase } from '../utils';
import { GeoJsonLayer, ClusterManager, GoogleMapsUtils, IGeometryStyle, ClusterItem, ClusterRenderer, HeatmapTileProvider } from '@nativescript/google-maps-utils';
import { Color, LoadEventData } from '@nativescript/core';
import { CameraUpdate, GoogleMap, MapReadyEvent, MapView, Marker, TileProvider } from '@nativescript/google-maps';
import { australia } from './geojson.example';
import { intoNativeMarkerOptions, intoNativeTileOverlayOptions } from '@nativescript/google-maps/utils';
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
	map: GoogleMap;
	geoJson: GeoJsonLayer;
	heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;

	testIt() {
		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.geoJson.removeLayerFromMap();

		//creating cluster manager');
		const clusterManager = new ClusterManager(this.map);
		const clusterRenderer = new ClusterRenderer(this.map, clusterManager);
		clusterManager.setRenderer(clusterRenderer);

		//building marker list');
		const clusterSet: ClusterItem[] = [];
		for (var i = 0; i < 100; i++) {
			//creating new markers to cluster
			const position = generateRandomPosition([-32.093407, 116.240609], 10000);

			const clusterItem = new ClusterItem({
				position: position,
				color: 'blue',
			});

			clusterSet.push(clusterItem);
		}

		//adding markers to cluster manager
		clusterManager.addItems(clusterSet);

		//clustering!
		clusterManager.cluster();
	}

	async onMapReady(args: MapReadyEvent) {
		this.mapView = args.object as MapView;

		this.map = args.map;
		this.map.animateCamera(
			CameraUpdate.fromCoordinate(
				{
					lat: -27.74278,
					lng: 130.497139,
				},
				4
			)
		);

		this.geoJson = new GeoJsonLayer(this.map, australia, {
			fillColor: new Color('blue'),
			strokeColor: new Color('red'),
			width: 4,
		});

		// this.geoJson.addLayerToMap();

		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.heatmapProvider = new HeatmapTileProvider(positionSet);
		this.heatmapOverlay = this.map.addTileOverlay({
			tileProvider: this.heatmapProvider,
		} as any);

		// this.heatmapProvider.setData(positionSet);
		// this.heatmapProvider.opacity = 0.1;
		// Need to clear cache to show adjustments
		// this.heatmapOverlay.clearTileCache();
	}
}
