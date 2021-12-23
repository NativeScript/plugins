import { Enums, Application, UnhandledErrorEventData, AndroidApplication, Device, ApplicationSettings } from '@nativescript/core';
import { LocationBase, defaultGetLocationTimeout, fastestTimeUpdate, minTimeUpdate } from './common';
import { Options, successCallbackType, errorCallbackType, permissionCallbackType } from '.';
import * as permissions from 'nativescript-permissions';
export * from './common';

declare var com: any;
let REQUEST_ENABLE_LOCATION = 4269; // random number
let _onEnableLocationSuccess = null;
let _onEnableLocationFail = null;

const locationListeners = {};
let watchIdCounter = 0;
let fusedLocationClient;
let attachedForErrorHandling = false;

function _ensureLocationClient() {
	// Wrapped in a function as we should not access java object there because of the snapshots.
	fusedLocationClient = fusedLocationClient || com.google.android.gms.location.LocationServices.getFusedLocationProviderClient(Application.android.context);
}

Application.android.on(AndroidApplication.activityResultEvent, function (args: any) {
	if (args.requestCode === REQUEST_ENABLE_LOCATION) {
		if (args.resultCode === 0) {
			if (_onEnableLocationFail) {
				_onEnableLocationFail('Location not enabled.');
			}
		} else if (_onEnableLocationSuccess) {
			_onEnableLocationSuccess();
		}
	}
});

function isAirplaneModeOn(): boolean {
	return android.provider.Settings.System.getInt(Application.android.context.getContentResolver(), android.provider.Settings.System.AIRPLANE_MODE_ON) !== 0;
}

function isProviderEnabled(provider: string): boolean {
	try {
		const locationManager: android.location.LocationManager = (<android.content.Context>Application.android.context).getSystemService(android.content.Context.LOCATION_SERVICE);
		return locationManager.isProviderEnabled(provider);
	} catch (ex) {
		return false;
	}
}

function errorHandler(errData: UnhandledErrorEventData) {
	while (watchIdCounter !== 0) {
		clearWatch(watchIdCounter);
		watchIdCounter--;
	}
}

export function getCurrentLocation(options: Options): Promise<Location> {
	return new Promise(function (resolve, reject) {
		enableLocationRequest(false, false).then(() => {
			if (options.timeout === 0) {
				// get last known
				LocationManager.getLastLocation(options.maximumAge, resolve, reject);
			} else {
				// wait for the exact location
				let locationRequest = _getLocationRequest(options);
				let watchId = _getNextWatchId();
				let locationCallback = _getLocationCallback(watchId, (nativeLocation) => {
					clearWatch(watchId);
					resolve(new Location(nativeLocation));
				});

				LocationManager.requestLocationUpdates(locationRequest, locationCallback);
				const timerId = setTimeout(function () {
					clearWatch(watchId);
					clearTimeout(timerId);
					reject(new Error('Timeout while searching for location!'));
				}, options.timeout || defaultGetLocationTimeout);
			}
		}, reject);
	});
}

function _getNextWatchId() {
	let watchId = ++watchIdCounter;
	return watchId;
}

function _getLocationCallback(watchId, onLocation): any {
	let LocationCallback = com.google.android.gms.location.LocationCallback.extend({
		// IMPORTANT: Do not touch any scope variables here. The Java definition of the class is cached
		// internally in NativeScript and if we directly use 'watchId' or 'onLocation' here, we will
		// always receive the references from the first '_getLocationCallback' method call!!!
		onLocationResult: function (locationResult) {
			this.onLocation(locationResult.getLastLocation());
		},
	});

	let locationCallback = new LocationCallback();
	// Workaround for the above-mentioned Note
	locationCallback.onLocation = onLocation;

	locationListeners[watchId] = locationCallback;

	return locationCallback;
}

function _getLocationRequest(options: Options): any {
	let mLocationRequest = new com.google.android.gms.location.LocationRequest();
	let updateTime = options.updateTime === 0 ? 0 : options.updateTime || minTimeUpdate;
	mLocationRequest.setInterval(updateTime);
	let minUpdateTime = options.minimumUpdateTime === 0 ? 0 : options.minimumUpdateTime || Math.min(updateTime, fastestTimeUpdate);
	mLocationRequest.setFastestInterval(minUpdateTime);
	if (options.updateDistance) {
		mLocationRequest.setSmallestDisplacement(options.updateDistance);
	}
	if (options.desiredAccuracy === Enums.Accuracy.high) {
		mLocationRequest.setPriority(com.google.android.gms.location.LocationRequest.PRIORITY_HIGH_ACCURACY);
	} else {
		mLocationRequest.setPriority(com.google.android.gms.location.LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY);
	}

	return mLocationRequest;
}

function _requestLocationPermissions(always: boolean): Promise<void> {
	return new Promise<void>(function (resolve, reject) {
		if (LocationManager.shouldSkipChecks()) {
			resolve();
		} else {
			if (always) {
				ApplicationSettings.setBoolean('askedForAlwaysPermission', true);
				permissions
					.requestPermission((<any>android).Manifest.permission.ACCESS_BACKGROUND_LOCATION)
					.then(resolve, reject)
					.catch((e) => {
						console.error('Failed to request Android background location permission due to: ' + e);
					});
			} else {
				ApplicationSettings.setBoolean('askedForWhileUsePermission', true);
				permissions.requestPermission((<any>android).Manifest.permission.ACCESS_FINE_LOCATION).then(resolve, reject);
			}
		}
	});
}

function _getLocationListener(maxAge, onLocation, onError) {
	return _getTaskSuccessListener((nativeLocation: android.location.Location) => {
		if (nativeLocation != null) {
			let location = new Location(nativeLocation);
			if (typeof maxAge === 'number' && nativeLocation != null) {
				if (location.timestamp.valueOf() + maxAge > new Date().valueOf()) {
					onLocation(location);
				} else {
					onError(new Error('Last known location too old!'));
				}
			} else {
				onLocation(location);
			}
		} else {
			onError(new Error('There is no last known location!'));
		}
	});
}

function _getTaskSuccessListener(done: (result) => void) {
	return new com.google.android.gms.tasks.OnSuccessListener({
		onSuccess: done,
	});
}

function _getTaskFailListener(done: (exception) => void) {
	return new com.google.android.gms.tasks.OnFailureListener({
		onFailure: done,
	});
}

export function watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options: Options): number {
	// wrap in zoned callback in order to avoid UI glitches in Angular applications
	// check https://github.com/NativeScript/NativeScript/issues/2229
	const zonedSuccessCallback = zonedCallback(successCallback);
	const zonedErrorCallback = zonedCallback(errorCallback);

	if ((!permissions.hasPermission((<any>android).Manifest.permission.ACCESS_FINE_LOCATION) || !_isGooglePlayServicesAvailable()) && !LocationManager.shouldSkipChecks()) {
		throw new Error('Cannot watch location. Call "enableLocationRequest" first');
	}

	if (!attachedForErrorHandling) {
		attachedForErrorHandling = true;
		Application.on(Application.uncaughtErrorEvent, errorHandler.bind(this));
	}

	let locationRequest = _getLocationRequest(options);
	let watchId = _getNextWatchId();
	const locationCallback = _getLocationCallback(watchId, (nativeLocation) => {
		zonedSuccessCallback(new Location(nativeLocation));
	});

	LocationManager.requestLocationUpdates(locationRequest, locationCallback);

	return watchId;
}

export function watchPermissionStatus(permissionCallback: permissionCallbackType, errorCallback: errorCallbackType) {
	const zonedErrorCallback = zonedCallback(errorCallback);
	zonedErrorCallback(new Error("watchPermissionStatus() is not available on Android"));
	return null;
}

export function clearWatch(watchId: number): void {
	let listener = locationListeners[watchId];
	if (listener) {
		LocationManager.removeLocationUpdates(listener);
		delete locationListeners[watchId];
	}
}

export function enableLocationRequest(always?: boolean, openSettingsIfLocationHasBeenDenied?: boolean): Promise<void> {
	return new Promise<void>(function (resolve, reject) {
		// on API level <29 there is no ACCESS_BACKGROUND_LOCATION permission
		const _always = Device.sdkVersion >= '29' ? always : false;
		if (!_systemDialogWillShow(_always) && !_permissionIsGiven(_always)) {
			if (openSettingsIfLocationHasBeenDenied) {
				reject(new Error('User needs to enable permission from settings'));
				_goToPhoneSettings();
			} else {
				reject(new Error('User denied location permission previously'));
			}
		} else {
			_requestLocationPermissions(_always).then(() => {
				_makeGooglePlayServicesAvailable().then(() => {
					_isLocationServiceEnabled().then(
						() => {
							resolve();
						},
						(ex) => {
							if (typeof ex.getStatusCode === 'function') {
								const statusCode = ex.getStatusCode();
								if (statusCode === com.google.android.gms.location.LocationSettingsStatusCodes.RESOLUTION_REQUIRED) {
									try {
										// cache resolve and reject callbacks in order to call them
										// on REQUEST_ENABLE_LOCATION Activity Result
										_onEnableLocationSuccess = resolve;
										_onEnableLocationFail = reject;
										return ex.startResolutionForResult(Application.android.foregroundActivity || Application.android.startActivity, REQUEST_ENABLE_LOCATION);
									} catch (sendEx) {
										// Ignore the error.
										return resolve();
									}
								} else if (statusCode === com.google.android.gms.location.LocationSettingsStatusCodes.SETTINGS_CHANGE_UNAVAILABLE && isAirplaneModeOn() && isProviderEnabled(android.location.LocationManager.GPS_PROVIDER)) {
									return resolve();
								}
							}
							reject(new Error('Cannot enable the location service. ' + ex));
						}
					);
				}, reject);
			}, reject);
		}
	});
}

function _makeGooglePlayServicesAvailable(): Promise<void> {
	return new Promise<void>(function (resolve, reject) {
		if (_isGooglePlayServicesAvailable()) {
			resolve();
			return;
		}
		let googleApiAvailability = com.google.android.gms.common.GoogleApiAvailability.getInstance();
		googleApiAvailability
			.makeGooglePlayServicesAvailable(Application.android.foregroundActivity || Application.android.startActivity)
			.addOnSuccessListener(_getTaskSuccessListener(resolve))
			.addOnFailureListener(_getTaskFailListener(reject));
	});
}

function _isGooglePlayServicesAvailable(): boolean {
	if (LocationManager.shouldSkipChecks()) {
		return true;
	}

	let isLocationServiceEnabled = true;
	let googleApiAvailability = com.google.android.gms.common.GoogleApiAvailability.getInstance();
	let resultCode = googleApiAvailability.isGooglePlayServicesAvailable(Application.android.context);
	if (resultCode !== com.google.android.gms.common.ConnectionResult.SUCCESS) {
		isLocationServiceEnabled = false;
	}

	return isLocationServiceEnabled;
}

function _isLocationServiceEnabled(options?: Options): Promise<boolean> {
	return new Promise(function (resolve, reject) {
		if (LocationManager.shouldSkipChecks()) {
			resolve(true);
			return;
		}

		options = options || { desiredAccuracy: Enums.Accuracy.high, updateTime: 0, updateDistance: 0, maximumAge: 0, timeout: 0 };
		let locationRequest = _getLocationRequest(options);
		let locationSettingsBuilder = new com.google.android.gms.location.LocationSettingsRequest.Builder();
		locationSettingsBuilder.addLocationRequest(locationRequest);
		locationSettingsBuilder.setAlwaysShow(true);
		let locationSettingsClient = com.google.android.gms.location.LocationServices.getSettingsClient(Application.android.context);
		locationSettingsClient.checkLocationSettings(locationSettingsBuilder.build()).addOnSuccessListener(_getTaskSuccessListener(resolve)).addOnFailureListener(_getTaskFailListener(reject));
	});
}

function _goToPhoneSettings() {
	const intent = new android.content.Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS, android.net.Uri.fromParts('package', Application.android.context.getPackageName(), null));
	const activity = Application.android.foregroundActivity || Application.android.startActivity;
	intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
	activity.startActivity(intent);
}

/**
 * The system dialog will not show if we asked for permission previously and the user denied permission with selecting don't ask again (API level <30).
 * Starting on Android 11 (API level 30), there is no 'don't ask again' option. If the user taps Deny for a specific permission more than once during the app's lifetime,
 * the user doesn't see the system permissions dialog if his app requests that permission again. The user's action implies "don't ask again."
 * https://developer.android.com/training/permissions/requesting#one-time
 * With API level 30 Android introduced the 'Only this time' or 'Ask every time' permission which will cause shouldShowRequestPermissionRationale() to return false as if the permission has not been requested yet.
 * This makes it impossible to differentiate between the case where the user granted one time permission and the 'don't ask again' case. Therefore we always assume askedForPermission to be false for API level >= 30
 * to ensure that the system popup is always shown when the user grants one time permission.
 * https://github.com/Baseflow/flutter-geolocator/issues/662#issuecomment-778121610
 * @param always if true then check will be done for ACCESS_BACKGROUND_LOCATION permission, if false then check will be done for ACCESS_FINE_LOCATION permission
 * @returns true if the Android permission dialog will be shown to the user when the location permission is requested the next time, returns false otherwise
 */
function _systemDialogWillShow(always: boolean): boolean {
	const permissionType = always ? (<any>android).Manifest.permission.ACCESS_BACKGROUND_LOCATION : (<any>android).Manifest.permission.ACCESS_FINE_LOCATION;
	const doNotAskAgain = !androidx.core.app.ActivityCompat.shouldShowRequestPermissionRationale(Application.android.foregroundActivity || Application.android.startActivity, permissionType);
	let askedForPermission = always ? ApplicationSettings.getBoolean('askedForAlwaysPermission', false) : ApplicationSettings.getBoolean('askedForWhileUsePermission', false);
	askedForPermission = askedForPermission && Device.sdkVersion < '30';
	return !(askedForPermission && doNotAskAgain);
}

function _permissionIsGiven(always: boolean): boolean {
	return always ? permissions.hasPermission((<any>android).Manifest.permission.ACCESS_BACKGROUND_LOCATION) : permissions.hasPermission((<any>android).Manifest.permission.ACCESS_FINE_LOCATION);
}

export function isEnabled(options?: Options): Promise<boolean> {
	return new Promise(function (resolve, reject) {
		if (!_isGooglePlayServicesAvailable() || !permissions.hasPermission((<any>android).Manifest.permission.ACCESS_FINE_LOCATION)) {
			resolve(false);
		} else {
			_isLocationServiceEnabled(options).then(
				() => {
					resolve(true);
				},
				(ex) => {
					if (typeof ex.getStatusCode === 'function' && ex.getStatusCode() === com.google.android.gms.location.LocationSettingsStatusCodes.SETTINGS_CHANGE_UNAVAILABLE && isAirplaneModeOn() && isProviderEnabled(android.location.LocationManager.GPS_PROVIDER)) {
						return resolve(true);
					}
					resolve(false);
				}
			);
		}
	});
}

export function distance(loc1: Location, loc2: Location): number {
	if (!loc1.android) {
		loc1.android = androidLocationFromLocation(loc1);
	}

	if (!loc2.android) {
		loc2.android = androidLocationFromLocation(loc2);
	}

	return loc1.android.distanceTo(loc2.android);
}

function androidLocationFromLocation(location: Location): android.location.Location {
	let androidLocation = new android.location.Location('custom');
	androidLocation.setLatitude(location.latitude);
	androidLocation.setLongitude(location.longitude);
	if (location.altitude) {
		androidLocation.setAltitude(location.altitude);
	}
	if (location.speed) {
		androidLocation.setSpeed(float(location.speed));
	}
	if (location.direction) {
		androidLocation.setBearing(float(location.direction));
	}
	if (location.timestamp) {
		try {
			androidLocation.setTime(long(location.timestamp.getTime()));
		} catch (e) {
			console.error('invalid location timestamp');
		}
	}

	return androidLocation;
}

// abstraction for unit testing
export class LocationManager {
	static getLastLocation(maximumAge, resolve, reject): Promise<Location> {
		_ensureLocationClient();
		return fusedLocationClient
			.getLastLocation()
			.addOnSuccessListener(_getLocationListener(maximumAge, resolve, reject))
			.addOnFailureListener(_getTaskFailListener((e) => reject(new Error(e.getMessage()))));
	}

	static requestLocationUpdates(locationRequest, locationCallback): void {
		_ensureLocationClient();
		fusedLocationClient.requestLocationUpdates(locationRequest, locationCallback, null /* Looper */);
	}

	static removeLocationUpdates(listener) {
		_ensureLocationClient();
		fusedLocationClient.removeLocationUpdates(listener);
	}

	static shouldSkipChecks(): boolean {
		return false;
	}

	static setMockLocationManager(MockLocationManager) {
		LocationManager.getLastLocation = MockLocationManager.getLastLocation;
		LocationManager.requestLocationUpdates = MockLocationManager.requestLocationUpdates;
		LocationManager.removeLocationUpdates = MockLocationManager.removeLocationUpdates;
		LocationManager.shouldSkipChecks = MockLocationManager.shouldSkipChecks;
	}
}

export class Location extends LocationBase {
	public android: android.location.Location; // android Location

	constructor(androidLocation: android.location.Location) {
		super();
		if (androidLocation) {
			this.android = androidLocation;
			this.latitude = androidLocation.getLatitude();
			this.longitude = androidLocation.getLongitude();
			this.altitude = androidLocation.getAltitude();
			this.horizontalAccuracy = androidLocation.getAccuracy();
			this.verticalAccuracy = androidLocation.getAccuracy();
			this.speed = androidLocation.getSpeed();
			this.direction = androidLocation.getBearing();
			this.timestamp = new Date(androidLocation.getTime());
		}
	}
}

// used from unit tests
export function setCustomLocationManager(MockLocationManager) {
	LocationManager.setMockLocationManager(MockLocationManager);
}
