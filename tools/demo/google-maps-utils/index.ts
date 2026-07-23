import { DemoSharedBase } from '../utils';
import { Color } from '@nativescript/core';
import { CameraPositionEvent, CameraUpdate, GoogleMap, MapReadyEvent, Marker, MarkerOptions, MarkerTapEvent, PolygonTapEvent, Polyline, PolylineTapEvent } from '@nativescript/google-maps';
import { ClusterItem, ClusterItemTapEventData, ClusterManager, ClusterManagerBase, ClusterTapEventData, FeatureTapEventData, GeoJsonFeature, GeoJsonLayer, GoogleMapUtils, HeatmapTileProvider, IconFactory, ICON_STYLE, KmlFeature, KmlLayer, computeArea, computeDistanceBetween, computeHeading, computeLength, computeOffset, containsLocation, decodePolyline, encodePolyline, installMixins, interpolate, isLocationOnPath } from '@nativescript/google-maps-utils';
import { australia } from './geojson.example';
import { placemarks } from './kml.example';

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

const SYDNEY = { lat: -33.8688, lng: 151.2093 };
const MELBOURNE = { lat: -37.8136, lng: 144.9631 };
const PERTH = { lat: -31.9505, lng: 115.8605 };
const BRISBANE = { lat: -27.4698, lng: 153.0251 };

export class DemoSharedGoogleMapsUtils extends DemoSharedBase {
	map: GoogleMap;
	googleMapsUtils: GoogleMapUtils;
	geoJson: GeoJsonLayer;
	kml: KmlLayer;
	heatmapProvider: HeatmapTileProvider;
	heatmapOverlay;
	iconMarkers: Marker[] = [];
	geometryPolyline: Polyline;
	clusterManager: ClusterManager;

	/**
	 * GeoJSON data layer: add/remove + inspect the parsed features.
	 */
	testIt() {
		if (this.geoJson) {
			this.map.removeGeoJson(this.geoJson);
			this.geoJson = null;
			return;
		}

		this.geoJson = this.map.addGeoJson(australia, {
			fillColor: new Color('blue'),
			strokeColor: new Color('red'),
			width: 4,
		});

		this.geoJson.on(GeoJsonLayer.featureTapEvent, (args: FeatureTapEventData<GeoJsonFeature>) => {
			const feature = args.feature;
			console.log(`GeoJSON feature tapped: id=${feature.id}, geometry type: ${feature.geometry?.type}`);
			console.log(`tapped feature properties: ${JSON.stringify(feature.properties)?.substring(0, 120)}`);
		});

		// same inspection API on both platforms
		const features = this.geoJson.features;
		console.log(`GeoJsonLayer: ${features.length} features`);
		const first = features[0];
		if (first) {
			console.log(`feature id: ${first.id}, geometry type: ${first.geometry?.type}`);
			console.log(`feature properties: ${JSON.stringify(first.properties)?.substring(0, 120)}`);
		}
	}

	/**
	 * KML data layer: add/remove + inspect the parsed placemarks.
	 */
	testKml() {
		if (this.kml) {
			this.map.removeKml(this.kml);
			this.kml = null;
			return;
		}

		this.kml = this.map.addKml(placemarks);
	}

	/**
	 * Spherical geometry + polyline encoding utilities.
	 */
	testGeometry() {
		const distance = computeDistanceBetween(SYDNEY, MELBOURNE);
		const heading = computeHeading(SYDNEY, MELBOURNE);
		console.log(`Sydney -> Melbourne: ${(distance / 1000).toFixed(1)} km, heading ${heading.toFixed(1)} degrees`);

		const polygon = [
			{ lat: -25.0, lng: 130.0 },
			{ lat: -25.0, lng: 135.0 },
			{ lat: -30.0, lng: 132.5 },
			{ lat: -25.0, lng: 130.0 },
		];
		console.log(`polygon area: ${(computeArea(polygon) / 1e6).toFixed(1)} km2, perimeter: ${(computeLength(polygon) / 1000).toFixed(1)} km`);
		console.log(`polygon contains Sydney? ${containsLocation(SYDNEY, polygon)}`);

		const halfway = interpolate(SYDNEY, PERTH, 0.5);
		const east100km = computeOffset(SYDNEY, 100000, 90);
		console.log(`halfway Sydney -> Perth: ${JSON.stringify(halfway)}`);
		console.log(`100km east of Sydney: ${JSON.stringify(east100km)}`);

		// polyline encode/decode round trip, drawn on the map
		const encoded = encodePolyline([SYDNEY, MELBOURNE, PERTH]);
		const decoded = decodePolyline(encoded);
		console.log(`encoded polyline: ${encoded}`);
		console.log(`decoded ${decoded.length} points, Melbourne on path (100m tolerance)? ${isLocationOnPath(MELBOURNE, decoded, 100)}`);

		if (this.geometryPolyline) {
			this.map.removePolyline(this.geometryPolyline);
		}
		this.geometryPolyline = this.map.addPolyline({
			points: decoded,
			color: new Color('#e91e63'),
			width: 6,
			geodesic: true,
		});
	}

	/**
	 * Text marker icons via the IconFactory.
	 */
	testIconFactory() {
		this.iconMarkers.forEach((marker) => this.map.removeMarker(marker));
		this.iconMarkers = [];

		const factory = new IconFactory();

		factory.setStyle(ICON_STYLE.STYLE_BLUE);
		this.iconMarkers.push(
			this.map.addMarker({
				position: SYDNEY,
				title: 'Sydney',
				icon: factory.makeIcon('Sydney'),
			}),
		);

		factory.setStyle(ICON_STYLE.STYLE_GREEN);
		this.iconMarkers.push(
			this.map.addMarker({
				position: MELBOURNE,
				title: 'Melbourne',
				icon: factory.makeIcon('Melbourne'),
			}),
		);

		factory.setStyle(ICON_STYLE.STYLE_ORANGE);
		this.iconMarkers.push(
			this.map.addMarker({
				position: PERTH,
				title: 'Perth',
				icon: factory.makeIcon('Perth'),
			}),
		);

		// custom color + rotation
		factory.color = new Color('#7b1fa2');
		factory.rotation = 45;
		this.iconMarkers.push(
			this.map.addMarker({
				position: BRISBANE,
				title: 'Brisbane',
				icon: factory.makeIcon('Brisbane'),
			}),
		);
	}

	async onMapReady(args: MapReadyEvent) {
		this.map = args.map;

		// polygon/polyline event names don't match the `<name>Event` static the XML builder looks for,
		// so they're subscribed in code (markerTap/cameraPosition do match and stay in the markup).
		const mapView = args.object as any;
		mapView.on('polygon', (a: PolygonTapEvent) => this.onPolygonTap(a));
		mapView.on('polyline', (a: PolylineTapEvent) => this.onPolylineTap(a));

		this.map.animateCamera(
			CameraUpdate.fromCoordinate(
				{
					lat: -27.74278,
					lng: 130.497139,
				},
				4,
			),
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
		this.clusterManager = clusterManager;

		clusterManager.on(ClusterManagerBase.clusterTapEvent, (args: ClusterTapEventData<ClusterItem>) => {
			console.log(`clusterTap: ${args.size} items at ${args.position.lat.toFixed(3)}, ${args.position.lng.toFixed(3)}`);
		});
		clusterManager.on(ClusterManagerBase.clusterItemTapEvent, (args: ClusterItemTapEventData<ClusterItem>) => {
			console.log(`clusterItemTap: ${args.item?.options?.title}`);
		});

		setTimeout(() => {
			const clusterItem = new ClusterItem({
				position: { lat: -32.093407, lng: 116.240609 },
				title: 'Cluster Marker',
				snippet: 'This is a cluster marker',
			});
			clusterManager.addItem(clusterItem);
		}, 1000);
	}

	// Map-level event handlers, bound in the XML. The point of the listener-hub fan-out is that these
	// keep firing even while a GeoJSON/KML layer or a cluster manager is active on the map.
	onMarkerTap(args: MarkerTapEvent) {
		console.log(`[map] markerTap: ${args.marker?.title}`);
	}

	onPolygonTap(args: PolygonTapEvent) {
		console.log('[map] polygonTap');
	}

	onPolylineTap(args: PolylineTapEvent) {
		console.log('[map] polylineTap');
	}

	onCameraPosition(args: CameraPositionEvent) {
		if (args.state === 'idle') {
			console.log('[map] cameraPosition idle');
		}
	}
}
