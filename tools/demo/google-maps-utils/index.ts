import { DemoSharedBase } from '../utils';
import { GeoJsonLayer, ClusterManager, ClusterItem, HeatmapTileProvider, IHeatmapOptions, IconFactory } from '@nativescript/google-maps-utils';
import { Color } from '@nativescript/core';
import { CameraUpdate, GoogleMap, MapReadyEvent } from '@nativescript/google-maps';
import { australia } from './geojson.example';

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
	geoJson: GeoJsonLayer;
	heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;

	testIt() {
		this.geoJson = new GeoJsonLayer(this.map, australia, {
			fillColor: new Color('blue'),
			strokeColor: new Color('red'),
			width: 4,
		});

		this.geoJson.addLayerToMap();
		const features = this.geoJson.features;
		// features[0].style.fillColor = new Color('green');
		// features[1].style.strokeColor = new Color('yellow');

		// features[0].properties = {
		// 	STATE_NAME: 'blueberry',
		// };

		// console.log(features[0].properties);

		// this.geoJson.removeLayerFromMap();

		const positionSet = [];
		for (var i = 0; i < 200; i++) {
			positionSet.push(generateRandomPosition([-32.093407, 116.240609], 10000));
		}

		//creating cluster manager;
		const clusterManager = new ClusterManager(this.map);

		//building marker list;
		const clusterSet: ClusterItem[] = [];
		for (var i = 0; i < 99; i++) {
			//creating new markers to cluster
			const position = generateRandomPosition([-32.093407, 116.240609], 10000);

			const clusterItem = new ClusterItem({
				position: position,
				title: `Marker ${i}`,
				snippet: `This is marker ${i}!!`,
				rotation: 180,
				color: new Color('#3592ea'),
			});

			clusterSet.push(clusterItem);
		}

		//adding markers to cluster manager
		clusterManager.addItems(clusterSet);

		//clustering!
		clusterManager.cluster();
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

		this.heatmapProvider = new HeatmapTileProvider(positionSet, {
			gradient: [
				{ color: 'blue', stop: 0.2 },
				{ color: 'yellow', stop: 0.5 },
				{ color: 'green', stop: 0.9 },
			],
		} as IHeatmapOptions);

		this.heatmapOverlay = this.map.addTileOverlay({
			tileProvider: this.heatmapProvider,
		} as any);

		// this.heatmapProvider.setData(positionSet);
		// this.heatmapProvider.opacity = 0.1;
		// Need to clear cache to show adjustments
		// this.heatmapOverlay.clearTileCache();

		const iconFactory = new IconFactory();
		iconFactory.color = new Color('#3592ea');

		this.map.addMarker({
			position: {
				lat: -32.123,
				lng: 122.312,
			},
			icon: iconFactory.makeIcon('B'),
		});
	}
}
