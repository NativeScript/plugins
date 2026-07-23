import { DemoSharedBase } from '../utils';
import { Color, ImageSource } from '@nativescript/core';
import { CameraPositionEvent, CameraUpdate, Circle, CircleTapEvent, CollisionBehavior, GoogleMap, GroundOverlay, GroundOverlayTapEvent, InfoWindowEvent, MapReadyEvent, MapTapEvent, MapType, Marker, MarkerTapEvent, PoiTapEvent, Polygon, PolygonTapEvent, Polyline, PolylineTapEvent, TileOverlay, UrlTileProvider } from '@nativescript/google-maps';
import { DEMO_IMAGE_BASE64 } from './demo-image';

const SAN_FRANCISCO = { lat: 37.7749, lng: -122.4194 };
const OAKLAND = { lat: 37.8044, lng: -122.2712 };
const SAN_JOSE = { lat: 37.3382, lng: -121.8863 };
const BERKELEY = { lat: 37.8715, lng: -122.273 };

const MAP_TYPES = [MapType.Normal, MapType.Satellite, MapType.Terrain, MapType.Hybrid, MapType.None];

// A spread of points around a center, used to demo marker collision behavior.
function scatter(center: { lat: number; lng: number }, count: number, spread = 0.01) {
	const points: { lat: number; lng: number }[] = [];
	for (let i = 0; i < count; i++) {
		const angle = (i / count) * Math.PI * 2;
		const radius = spread * (0.15 + (i % 5) / 5);
		points.push({
			lat: center.lat + Math.sin(angle) * radius,
			lng: center.lng + Math.cos(angle) * radius,
		});
	}
	return points;
}

export class DemoSharedGoogleMaps extends DemoSharedBase {
	map: GoogleMap;
	markers: Marker[] = [];
	polyline: Polyline;

	// tracked overlays so each button toggles add/remove
	private basicMarker: Marker;
	private iconMarker: Marker;
	private circle: Circle;
	private polygon: Polygon;
	private basicPolyline: Polyline;
	private groundOverlay: GroundOverlay;
	private tileOverlay: TileOverlay;

	// tracked settings state
	private mapTypeIndex = 0;
	private trafficOn = false;
	private buildingsOn = true;
	private myLocationOn = false;
	private uiControlsOn = true;
	private styleOn = false;

	private demoImage(): ImageSource {
		return ImageSource.fromBase64Sync(DEMO_IMAGE_BASE64);
	}

	private clearMarkers() {
		this.markers.forEach((marker) => this.map.removeMarker(marker));
		this.markers = [];
	}

	/**
	 * Advanced markers with styled pins (background/border/glyph). Requires a cloud `mapId`
	 * (the demo uses "DEMO_MAP_ID"); without one these fall back to default markers.
	 */
	testStyledPins() {
		this.clearMarkers();

		this.markers.push(
			this.map.addMarker({
				position: SAN_FRANCISCO,
				title: 'Text glyph',
				pinConfig: {
					backgroundColor: '#1a73e8',
					borderColor: '#0b47a1',
					glyph: { text: 'A', textColor: 'white' },
				},
			}),
		);

		this.markers.push(
			this.map.addMarker({
				position: { lat: SAN_FRANCISCO.lat + 0.01, lng: SAN_FRANCISCO.lng + 0.01 },
				title: 'Monochrome glyph',
				pinConfig: {
					backgroundColor: '#ea4335',
					borderColor: '#8c1d13',
					glyph: { glyphColor: 'white' },
				},
			}),
		);

		this.markers.push(
			this.map.addMarker({
				position: { lat: SAN_FRANCISCO.lat - 0.01, lng: SAN_FRANCISCO.lng - 0.008 },
				title: 'Just a colored pin',
				pinConfig: {
					backgroundColor: '#34a853',
					borderColor: '#1e7e34',
				},
			}),
		);

		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 14));
	}

	/**
	 * Collision behavior: many optional markers that hide each other when they overlap, plus one
	 * required marker that always wins.
	 */
	testCollision() {
		this.clearMarkers();

		scatter(SAN_FRANCISCO, 40).forEach((position, i) => {
			this.markers.push(
				this.map.addMarker({
					position,
					title: `Optional ${i}`,
					collisionBehavior: CollisionBehavior.OptionalAndHidesLowerPriority,
					pinConfig: {
						backgroundColor: '#5f6368',
						glyph: { text: `${i}`, textColor: 'white' },
					},
				}),
			);
		});

		// Always rendered, and hides overlapping optional markers.
		this.markers.push(
			this.map.addMarker({
				position: SAN_FRANCISCO,
				title: 'Required (always shown)',
				collisionBehavior: CollisionBehavior.RequiredAndHidesOptional,
				pinConfig: {
					backgroundColor: '#fbbc04',
					borderColor: '#b06000',
					glyph: { text: '★', textColor: '#5f3c00' },
				},
			}),
		);

		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 15));
	}

	/**
	 * A polyline styled with per-segment spans: solid colors and a gradient section. Works on both
	 * platforms and needs no mapId.
	 */
	testStyledPolyline() {
		if (this.polyline) {
			this.map.removePolyline(this.polyline);
			this.polyline = null;
			return;
		}

		// 6 points => 5 segments; the spans below cover 2 + 2 + 1 = 5 segments.
		const route = [
			{ lat: 37.7899, lng: -122.4094 },
			{ lat: 37.7849, lng: -122.4294 },
			{ lat: 37.7749, lng: -122.4194 },
			{ lat: 37.7649, lng: -122.4294 },
			{ lat: 37.7599, lng: -122.4094 },
			{ lat: 37.7699, lng: -122.3994 },
		];

		this.polyline = this.map.addPolyline({
			points: route,
			width: 8,
			spans: [{ color: '#ea4335', segments: 2 }, { gradient: { from: '#4285f4', to: '#34a853' }, segments: 2 }, { color: '#fbbc04' }],
		});

		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 14));
	}

	/** A standard marker with color, title, snippet and dragging enabled. */
	addBasicMarker() {
		if (this.basicMarker) {
			this.map.removeMarker(this.basicMarker);
			this.basicMarker = null;
			return;
		}
		this.basicMarker = this.map.addMarker({
			position: SAN_FRANCISCO,
			title: 'San Francisco',
			snippet: 'Drag me around',
			color: '#4285f4',
			draggable: true,
		});
		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 12));
	}

	/** A marker using a custom image icon. */
	addIconMarker() {
		if (this.iconMarker) {
			this.map.removeMarker(this.iconMarker);
			this.iconMarker = null;
			return;
		}
		this.iconMarker = this.map.addMarker({
			position: OAKLAND,
			title: 'Custom icon',
			icon: this.demoImage(),
		});
	}

	/** A circle with fill and stroke. */
	addCircle() {
		if (this.circle) {
			this.map.removeCircle(this.circle);
			this.circle = null;
			return;
		}
		this.circle = this.map.addCircle({
			center: SAN_FRANCISCO,
			radius: 2000,
			fillColor: new Color(60, 66, 133, 244),
			strokeColor: '#4285f4',
			strokeWidth: 4,
			tappable: true,
		});
		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 12));
	}

	/** A polygon with an inner hole. */
	addPolygon() {
		if (this.polygon) {
			this.map.removePolygon(this.polygon);
			this.polygon = null;
			return;
		}
		this.polygon = this.map.addPolygon({
			points: [
				{ lat: 37.81, lng: -122.47 },
				{ lat: 37.81, lng: -122.37 },
				{ lat: 37.74, lng: -122.37 },
				{ lat: 37.74, lng: -122.47 },
			],
			holes: [
				[
					{ lat: 37.79, lng: -122.44 },
					{ lat: 37.79, lng: -122.4 },
					{ lat: 37.76, lng: -122.4 },
					{ lat: 37.76, lng: -122.44 },
				],
			],
			fillColor: new Color(80, 52, 168, 83),
			strokeColor: '#34a853',
			strokeWidth: 4,
			tappable: true,
		});
		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 11));
	}

	/** A plain single-color polyline. */
	addPolyline() {
		if (this.basicPolyline) {
			this.map.removePolyline(this.basicPolyline);
			this.basicPolyline = null;
			return;
		}
		this.basicPolyline = this.map.addPolyline({
			points: [SAN_FRANCISCO, OAKLAND, BERKELEY],
			color: '#ea4335',
			width: 6,
			geodesic: true,
		});
		this.map.animateCamera(CameraUpdate.fromCoordinates([SAN_FRANCISCO, OAKLAND, BERKELEY], 60));
	}

	/** An image ground overlay positioned with geographic bounds. */
	addGroundOverlay() {
		if (this.groundOverlay) {
			this.map.removeGroundOverlay(this.groundOverlay);
			this.groundOverlay = null;
			return;
		}
		this.groundOverlay = this.map.addGroundOverlay({
			image: this.demoImage(),
			bounds: {
				southwest: { lat: 37.75, lng: -122.46 },
				northeast: { lat: 37.8, lng: -122.4 },
			},
			transparency: 0.2,
			tappable: true,
		});
		this.map.animateCamera(CameraUpdate.fromCoordinate({ lat: 37.775, lng: -122.43 }, 12));
	}

	/** A tile overlay backed by OpenStreetMap tiles via a UrlTileProvider. */
	addTileOverlay() {
		if (this.tileOverlay) {
			this.map.removeTileOverlay(this.tileOverlay);
			this.tileOverlay = null;
			return;
		}
		const provider = new UrlTileProvider((x, y, zoom) => `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`);
		this.tileOverlay = this.map.addTileOverlay({ tileProvider: provider } as any);
	}

	// ----------------------------------------------------------------- Camera

	animate() {
		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_JOSE, 13));
	}

	fitBounds() {
		this.map.animateCamera(CameraUpdate.fromCoordinates([SAN_FRANCISCO, OAKLAND, SAN_JOSE, BERKELEY], 60));
	}

	zoomIn() {
		this.map.animateCamera(CameraUpdate.zoomIn());
	}

	zoomOut() {
		this.map.animateCamera(CameraUpdate.zoomOut());
	}

	moveCamera() {
		// instant (no animation)
		this.map.moveCamera(CameraUpdate.fromCoordinate(BERKELEY, 13));
	}

	readCamera() {
		const cam = this.map.cameraPosition;
		console.log(`camera: target=${cam.target.lat.toFixed(4)},${cam.target.lng.toFixed(4)} zoom=${cam.zoom.toFixed(1)} bearing=${cam.bearing.toFixed(1)} tilt=${cam.tilt.toFixed(1)}`);
	}

	// --------------------------------------------------------------- Settings

	cycleMapType() {
		this.mapTypeIndex = (this.mapTypeIndex + 1) % MAP_TYPES.length;
		this.map.mapType = MAP_TYPES[this.mapTypeIndex];
		console.log(`mapType: ${MAP_TYPES[this.mapTypeIndex]}`);
	}

	toggleTraffic() {
		this.trafficOn = !this.trafficOn;
		this.map.trafficEnabled = this.trafficOn;
		console.log(`traffic: ${this.trafficOn}`);
	}

	toggleBuildings() {
		this.buildingsOn = !this.buildingsOn;
		this.map.buildingsEnabled = this.buildingsOn;
		console.log(`buildings: ${this.buildingsOn}`);
	}

	toggleMyLocation() {
		this.myLocationOn = !this.myLocationOn;
		try {
			this.map.myLocationEnabled = this.myLocationOn;
		} catch (err) {
			// Needs location permission; grant it in the app to see the blue dot.
			console.log(`myLocation could not be enabled (permission?): ${err}`);
		}
	}

	toggleUiSettings() {
		this.uiControlsOn = !this.uiControlsOn;
		const ui = this.map.uiSettings;
		ui.compassEnabled = this.uiControlsOn;
		ui.zoomControlsEnabled = this.uiControlsOn; // Android only, ignored on iOS
		ui.mapToolbarEnabled = this.uiControlsOn; // Android only
		ui.myLocationButtonEnabled = this.uiControlsOn;
		ui.rotateGesturesEnabled = this.uiControlsOn;
		console.log(`uiSettings controls/gestures: ${this.uiControlsOn}`);
	}

	toggleMapStyle() {
		this.styleOn = !this.styleOn;
		this.map.mapStyle = this.styleOn
			? [
					{ featureType: 'all', elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
					{ featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
					{ featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
					{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
				]
			: [];
		// NOTE: JSON map styling is ignored while a cloud mapId is set (style via the cloud console instead).
		console.log(`mapStyle: ${this.styleOn ? 'dark' : 'default'} (ignored while a cloud mapId is set)`);
	}

	// ---------------------------------------------------------------- Utility

	takeSnapshot() {
		this.map.snapshot().then((image) => {
			console.log(`snapshot: ${image?.width}x${image?.height}`);
		});
	}

	projectionInfo() {
		const proj = this.map.projection;
		const center = this.map.cameraPosition.target;
		const point = proj.pointForCoordinate(center);
		const roundTrip = proj.coordinateForPoint(point);
		const region = proj.visibleRegion();
		console.log(`projection: center -> screen (${point.x.toFixed(0)}, ${point.y.toFixed(0)}) -> coord (${roundTrip.lat.toFixed(4)}, ${roundTrip.lng.toFixed(4)})`);
		console.log(`visible region NE=${region.farRight.lat.toFixed(3)},${region.farRight.lng.toFixed(3)} SW=${region.nearLeft.lat.toFixed(3)},${region.nearLeft.lng.toFixed(3)}`);
		console.log(`center visible? ${proj.containsCoordinate(center)}`);
	}

	clear() {
		this.map.clear();
		this.markers = [];
		this.polyline = null;
		this.basicMarker = null;
		this.iconMarker = null;
		this.circle = null;
		this.polygon = null;
		this.basicPolyline = null;
		this.groundOverlay = null;
		// map.clear() does not remove tile overlays; remove it explicitly.
		if (this.tileOverlay) {
			this.map.removeTileOverlay(this.tileOverlay);
			this.tileOverlay = null;
		}
	}

	// ----------------------------------------------------------------- Events

	onMapReady(args: MapReadyEvent) {
		this.map = args.map;
		this.map.animateCamera(CameraUpdate.fromCoordinate(SAN_FRANCISCO, 13));
	}

	onMapTap(args: MapTapEvent) {
		console.log(`mapTap: ${args.coordinate.lat.toFixed(4)}, ${args.coordinate.lng.toFixed(4)}`);
	}

	onMapLongPress(args: MapTapEvent) {
		console.log(`mapLongPress: ${args.coordinate.lat.toFixed(4)}, ${args.coordinate.lng.toFixed(4)}`);
	}

	onMarkerTap(args: MarkerTapEvent) {
		console.log(`markerTap: ${args.marker?.title}`);
	}

	onCameraPosition(args: CameraPositionEvent) {
		if (args.state === 'idle') {
			console.log(`cameraPosition idle: zoom=${args.cameraPosition.zoom.toFixed(1)}`);
		}
	}

	onPoiTap(args: PoiTapEvent) {
		console.log(`poiTap: ${args.poi?.name} (${args.poi?.placeId})`);
	}

	onCircleTap(args: CircleTapEvent) {
		console.log('circleTap');
	}

	onPolygonTap(args: PolygonTapEvent) {
		console.log('polygonTap');
	}

	onPolylineTap(args: PolylineTapEvent) {
		console.log('polylineTap');
	}

	onGroundOverlayTap(args: GroundOverlayTapEvent) {
		console.log('groundOverlayTap');
	}

	onInfoWindowTap(args: InfoWindowEvent) {
		console.log(`infoWindowTap: ${args.marker?.title}`);
	}
}
