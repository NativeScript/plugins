import { DemoSharedBase } from '../utils';
import { GeoJsonLayer, HeatmapTileProvider, GoogleMapUtils, ClusterItem } from '@nativescript/google-maps-utils';
import { Color } from '@nativescript/core';
import { CameraUpdate, GoogleMap, MapReadyEvent, MarkerOptions } from '@nativescript/google-maps';
import { installMixins } from '@nativescript/google-maps-utils';
import { australia } from './geojson.example';
installMixins();

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
	map: GoogleMap;
	googleMapsUtils: GoogleMapUtils;
	geoJson: GeoJsonLayer;
	heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;

	testIt() {
		this.geoJson = this.map.addGeoJson(australia, {
			fillColor: new Color('blue'),
			strokeColor: new Color('red'),
			width: 4,
		});
	}

	async onMapReady(args: MapReadyEvent) {
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

		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		this.heatmapProvider = new HeatmapTileProvider({
			coordinates: positionSet,
			gradient: [
				{ color: 'blue', stop: 0.2 },
				{ color: 'yellow', stop: 0.5 },
				{ color: 'green', stop: 0.9 },
			],
		});

		this.heatmapOverlay = this.map.addTileOverlay({
			tileProvider: this.heatmapProvider,
		} as any);

		this.heatmapProvider.setData(positionSet);
		this.heatmapProvider.opacity = 0.3;
		this.heatmapProvider.setGradient([
			{ color: 'red', stop: 0.2 },
			{ color: 'yellow', stop: 0.5 },
			{ color: 'green', stop: 0.9 },
		]);
		// Need to clear cache to show adjustments
		this.heatmapOverlay.clearTileCache();

		//building marker list;
		const clusterSet: MarkerOptions[] = [];
		for (var i = 0; i < 99; i++) {
			//creating new markers to cluster
			const position = generateRandomPosition([-32.093407, 116.240609], 10000);

			const clusterItem = {
				position: position,
				title: `Marker ${i}`,
				snippet: `This is marker ${i}!!`,
				rotation: 180,
				color: new Color('#3592ea'),
			};

			clusterSet.push(clusterItem);
		}

		const clusterManager = this.map.clusterManager(clusterSet);
		setTimeout(() => {
			const clusterItem = new ClusterItem({
				position: { lat: -32.093407, lng: 116.240609 },
				title: 'Cluster Marker',
				snippet: 'This is a cluster marker',
			});
			clusterManager.addItem(clusterItem);
		}, 1000);
	}
}
