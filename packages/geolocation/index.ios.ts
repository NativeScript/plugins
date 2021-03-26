import { Application, Enums, UnhandledErrorEventData, Device } from '@nativescript/core';

import { LocationBase, defaultGetLocationTimeout, minRangeUpdate } from './common';
import { Options, successCallbackType, errorCallbackType } from '.';
export * from './common';

const locationManagers = {};
const locationListeners = {};
let watchId = 0;
let attachedForErrorHandling = false;

@NativeClass()
class LocationListenerImpl extends NSObject implements CLLocationManagerDelegate {
	public static ObjCProtocols = [CLLocationManagerDelegate]; // tslint:disable-line:variable-name

	public authorizeAlways: boolean;
	public id: number;
	private _onLocation: successCallbackType;
	private _onError: errorCallbackType;
	private _resolve: () => void;
	private _reject: (error: Error) => void;

	public static initWithLocationError(successCallback: successCallbackType, error?: errorCallbackType): LocationListenerImpl {
		let listener = <LocationListenerImpl>LocationListenerImpl.new();
		watchId++;
		listener.id = watchId;
		listener._onLocation = successCallback;
		listener._onError = error;

		return listener;
	}

	public static initWithPromiseCallbacks(resolve: () => void, reject: (error: Error) => void, authorizeAlways: boolean = false): LocationListenerImpl {
		let listener = <LocationListenerImpl>LocationListenerImpl.new();
		watchId++;
		listener.id = watchId;
		listener._resolve = resolve;
		listener._reject = reject;
		listener.authorizeAlways = authorizeAlways;

		return listener;
	}

	public locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void {
		if (this._onLocation) {
			for (let i = 0, count = locations.count; i < count; i++) {
				let location = locationFromCLLocation(<CLLocation>locations.objectAtIndex(i));
				this._onLocation(location);
			}
		}
	}

	public locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void {
		if (this._onError) {
			this._onError(new Error(error.localizedDescription));
		}
	}

	public locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus) {
		switch (status) {
			case CLAuthorizationStatus.kCLAuthorizationStatusNotDetermined:
				break;

			case CLAuthorizationStatus.kCLAuthorizationStatusRestricted:
				break;

			case CLAuthorizationStatus.kCLAuthorizationStatusDenied:
				if (this._reject) {
					LocationMonitor.stopLocationMonitoring(this.id);
					this._reject(new Error('Authorization Denied.'));
				}
				break;

			case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedAlways:
			case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse:
				if (this._resolve) {
					LocationMonitor.stopLocationMonitoring(this.id);
					this._resolve();
				}
				break;

			default:
				break;
		}
	}
}

function locationFromCLLocation(clLocation: CLLocation): Location {
	let location = new Location();
	location.latitude = clLocation.coordinate.latitude;
	location.longitude = clLocation.coordinate.longitude;
	location.altitude = clLocation.altitude;
	location.horizontalAccuracy = clLocation.horizontalAccuracy;
	location.verticalAccuracy = clLocation.verticalAccuracy;
	location.speed = clLocation.speed;
	location.direction = clLocation.course;
	let timeIntervalSince1970 = NSDate.dateWithTimeIntervalSinceDate(0, clLocation.timestamp).timeIntervalSince1970;
	location.timestamp = new Date(timeIntervalSince1970 * 1000);
	location.ios = clLocation;
	return location;
}

function clLocationFromLocation(location: Location): CLLocation {
	let hAccuracy = location.horizontalAccuracy ? location.horizontalAccuracy : -1;
	let vAccuracy = location.verticalAccuracy ? location.verticalAccuracy : -1;
	let speed = location.speed ? location.speed : -1;
	let course = location.direction ? location.direction : -1;
	let altitude = location.altitude ? location.altitude : -1;
	let timestamp = location.timestamp ? location.timestamp : null;
	let iosLocation = CLLocation.alloc().initWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseSpeedTimestamp(CLLocationCoordinate2DMake(location.latitude, location.longitude), altitude, hAccuracy, vAccuracy, course, speed, timestamp);
	return iosLocation;
}

function errorHandler(errData: UnhandledErrorEventData) {
	while (watchId !== 0) {
		clearWatch(watchId);
		watchId--;
	}
}

function getVersionMaj() {
	return parseInt(Device.osVersion.split('.')[0]);
}

// options - desiredAccuracy, updateDistance, minimumUpdateTime, maximumAge, timeout
export function getCurrentLocation(options: Options): Promise<Location> {
	return new Promise(function (resolve, reject) {
		enableLocationRequest().then(() => {
			options = options || {};
			if (options.timeout === 0) {
				// we should take any cached location e.g. lastKnownLocation
				let lastLocation = LocationMonitor.getLastKnownLocation();
				if (lastLocation) {
					if (typeof options.maximumAge === 'number') {
						if (lastLocation.timestamp.valueOf() + options.maximumAge > new Date().valueOf()) {
							resolve(lastLocation);
						} else {
							reject(new Error('Last known location too old!'));
						}
					} else {
						resolve(lastLocation);
					}
				} else {
					reject(new Error('There is no last known location!'));
				}
			} else {
				let timerId;
				let locListener;
				let initLocation;

				let stopTimerAndMonitor = function (locListenerId) {
					if (timerId !== undefined) {
						clearTimeout(timerId);
					}

					LocationMonitor.stopLocationMonitoring(locListenerId);
				};

				let successCallback = function (location: Location) {
					if (getVersionMaj() < 9) {
						if (typeof options.maximumAge === 'number' && location.timestamp.valueOf() + options.maximumAge < new Date().valueOf()) {
							// returned location is too old, but we still have some time before the timeout so maybe wait a bit?
							return;
						}

						if (options.desiredAccuracy !== Enums.Accuracy.any && !initLocation) {
							// regardless of desired accuracy ios returns first location as quick as possible even if not as accurate as requested
							initLocation = location;
							return;
						}
					}

					stopTimerAndMonitor(locListener.id);
					resolve(location);
				};

				locListener = LocationListenerImpl.initWithLocationError(successCallback, reject);
				try {
					if (getVersionMaj() >= 9) {
						LocationMonitor.requestLocation(options, locListener);
					} else {
						LocationMonitor.startLocationMonitoring(options, locListener);
					}
				} catch (e) {
					stopTimerAndMonitor(locListener.id);
					reject(e);
				}

				if (typeof options.timeout === 'number') {
					timerId = setTimeout(function () {
						LocationMonitor.stopLocationMonitoring(locListener.id);
						reject(new Error('Timeout while searching for location!'));
					}, options.timeout || defaultGetLocationTimeout);
				}
			}
		}, reject);
	});
}

export function watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options: Options): number {
	if (!attachedForErrorHandling) {
		attachedForErrorHandling = true;
		Application.on(Application.uncaughtErrorEvent, errorHandler.bind(this));
	}

	let zonedSuccessCallback = (<any>global).zonedCallback(successCallback);
	let zonedErrorCallback = (<any>global).zonedCallback(errorCallback);
	let locListener = LocationListenerImpl.initWithLocationError(zonedSuccessCallback, zonedErrorCallback);
	try {
		let iosLocManager = getIOSLocationManager(locListener, options);
		iosLocManager.startUpdatingLocation();
		return locListener.id;
	} catch (e) {
		LocationMonitor.stopLocationMonitoring(locListener.id);
		zonedErrorCallback(e);
		return null;
	}
}

export function clearWatch(_watchId: number): void {
	LocationMonitor.stopLocationMonitoring(_watchId);
}

export function enableLocationRequest(always?: boolean, iosOpenSettingsIfLocationHasBeenDenied?: boolean): Promise<void> {
	return new Promise<void>(function (resolve, reject) {
		const locationIsEnabled = _isEnabled();

		if (locationIsEnabled) {
			resolve();
			return;
		} else {
			const status = getIOSLocationManagerStatus();
			if (status === CLAuthorizationStatus.kCLAuthorizationStatusDenied && iosOpenSettingsIfLocationHasBeenDenied) {
				// now open the Settings so the user can toggle the Location permission
				UIApplication.sharedApplication.openURL(NSURL.URLWithString(UIApplicationOpenSettingsURLString));
			} else {
				let listener = LocationListenerImpl.initWithPromiseCallbacks(resolve, reject, always);
				try {
					let manager = getIOSLocationManager(listener, null);
					if (always) {
						manager.requestAlwaysAuthorization();
					} else {
						manager.requestWhenInUseAuthorization();
					}
				} catch (e) {
					LocationMonitor.stopLocationMonitoring(listener.id);
					reject(e);
				}
			}
		}
	});
}

function _isEnabled(): boolean {
	if (CLLocationManager.locationServicesEnabled()) {
		const status = getIOSLocationManagerStatus();

		// CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse and
		// CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedAlways are options that are available in iOS 8.0+
		// while CLAuthorizationStatus.kCLAuthorizationStatusAuthorized is here to support iOS 8.0-.
		return (
			status === CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse ||
			status === CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedAlways ||
			// @ts-ignore: Types have no overlap error
			status === CLAuthorizationStatus.kCLAuthorizationStatusAuthorized
		);
	}
	return false;
}

export function isEnabled(options: Options): Promise<boolean> {
	return new Promise(function (resolve, reject) {
		const isEnabledResult = _isEnabled();

		resolve(isEnabledResult);
	});
}

export function getIOSLocationManagerStatus(): CLAuthorizationStatus {
	return CLLocationManager.authorizationStatus();
}

export function distance(loc1: Location, loc2: Location): number {
	if (!loc1.ios) {
		loc1.ios = clLocationFromLocation(loc1);
	}
	if (!loc2.ios) {
		loc2.ios = clLocationFromLocation(loc2);
	}
	return loc1.ios.distanceFromLocation(loc2.ios);
}

export class LocationMonitor {
	static getLastKnownLocation(): Location {
		let iosLocation: CLLocation;
		for (let locManagerId in locationManagers) {
			if (locationManagers.hasOwnProperty(locManagerId)) {
				let tempLocation = locationManagers[locManagerId].location;
				if (!iosLocation || tempLocation.timestamp > iosLocation.timestamp) {
					iosLocation = tempLocation;
				}
			}
		}

		if (iosLocation) {
			return locationFromCLLocation(iosLocation);
		}

		let locListener = LocationListenerImpl.initWithLocationError(null);
		iosLocation = getIOSLocationManager(locListener, null).location;

		if (iosLocation) {
			return locationFromCLLocation(iosLocation);
		}
		return null;
	}

	static requestLocation(options: Options, locListener: any): void {
		let iosLocManager = getIOSLocationManager(locListener, options);
		iosLocManager.requestLocation();
	}

	static startLocationMonitoring(options: Options, locListener: any): void {
		let iosLocManager = getIOSLocationManager(locListener, options);
		iosLocManager.startUpdatingLocation();
	}

	static stopLocationMonitoring(iosLocManagerId: number) {
		if (locationManagers[iosLocManagerId]) {
			locationManagers[iosLocManagerId].stopUpdatingLocation();
			locationManagers[iosLocManagerId].delegate = null;
			delete locationManagers[iosLocManagerId];
			delete locationListeners[iosLocManagerId];
		}
	}

	static createiOSLocationManager(locListener: any, options: Options): CLLocationManager {
		let iosLocManager = new CLLocationManager();
		iosLocManager.delegate = locListener;
		iosLocManager.desiredAccuracy = options ? options.desiredAccuracy : Enums.Accuracy.high;
		iosLocManager.distanceFilter = options ? options.updateDistance : minRangeUpdate;
		locationManagers[locListener.id] = iosLocManager;
		locationListeners[locListener.id] = locListener;
		if (getVersionMaj() >= 9) {
			iosLocManager.allowsBackgroundLocationUpdates = options && options.iosAllowsBackgroundLocationUpdates != null ? options.iosAllowsBackgroundLocationUpdates : false;
		}
		iosLocManager.pausesLocationUpdatesAutomatically = options && options.iosPausesLocationUpdatesAutomatically != null ? options.iosPausesLocationUpdatesAutomatically : true;
		return iosLocManager;
	}
}

let iosLocationManager: any;

function getIOSLocationManager(locListener: any, options: Options): CLLocationManager {
	if (!iosLocationManager) {
		return LocationMonitor.createiOSLocationManager(locListener, options);
	} else {
		let manager = new iosLocationManager();

		manager.delegate = locListener;
		manager.desiredAccuracy = options ? options.desiredAccuracy : Enums.Accuracy.high;
		manager.distanceFilter = options ? options.updateDistance : minRangeUpdate;

		locationManagers[locListener.id] = manager;
		locationListeners[locListener.id] = locListener;

		return manager;
	}
}

// used for tests only
export function setCustomLocationManager(manager) {
	iosLocationManager = function () {
		return manager;
	};
}

export class Location extends LocationBase {
	public ios: CLLocation; // iOS native location
}
