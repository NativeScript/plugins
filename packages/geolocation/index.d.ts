/**
 * A data class that encapsulates common properties for a geolocation.
 */
export declare class Location {
	/**
	 * The latitude of the geolocation, in degrees.
	 */
	latitude: number;

	/**
	 * The longitude of the geolocation, in degrees.
	 */
	longitude: number;

	/**
	 * The altitude (if available), in meters above sea level.
	 */
	altitude: number;

	/**
	 * The horizontal accuracy, in meters.
	 */
	horizontalAccuracy: number;

	/**
	 * The vertical accuracy, in meters.
	 */
	verticalAccuracy: number;

	/**
	 * The speed, in meters/second over ground.
	 */
	speed: number;

	/**
	 * The direction (course), in degrees.
	 */
	direction: number;

	/**
	 * The time at which this location was determined.
	 */
	timestamp: Date;
}

export declare class LocationBase implements Location {
	public latitude: number;
	public longitude: number;
	public altitude: number;
	public horizontalAccuracy: number;
	public verticalAccuracy: number;
	public speed: number; // in m/s ?
	public direction: number; // in degrees
	public timestamp: Date;
}

export const defaultGetLocationTimeout: number; // 5 minutes
export const minRangeUpdate: number; // 0 meters
export const minTimeUpdate: number; // 1 minute
export const fastestTimeUpdate: number; // 5 secs
/**
 * Provides options for location monitoring.
 */
export interface Options {
	/**
	 * Specifies desired accuracy in meters. Defaults to DesiredAccuracy.HIGH
	 */
	desiredAccuracy?: number;

	/**
	 * Update distance filter in meters. Specifies how often to update. Default is no filter
	 */
	updateDistance?: number;

	/**
	 * Interval between location updates, in milliseconds (ignored on iOS)
	 */
	updateTime?: number;

	/**
	 * Minimum time interval between location updates, in milliseconds (ignored on iOS)
	 */
	minimumUpdateTime?: number;

	/**
	 * How old locations to receive in ms.
	 */
	maximumAge?: number;

	/**
	 * How long to wait for a location in ms.
	 */
	timeout?: number;

	/**
	 * A Boolean value which has to be set to true on iOS versions > 9.0 to allow the application to receive location updates in
	 * background in combination with the UIBackgroundModes key 'location' in the Info.plist. An exception is thrown if the
	 * property is enabled without the UIBackgroundModes key set to true. The value is ignored on Android.
	 * @see {@link https://developer.apple.com/reference/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates|allowsBackgroundLocationUpdates}
	 */
	iosAllowsBackgroundLocationUpdates?: boolean;

	/**
	 * A Boolean value which has to be set to false on iOS to deactivate the automatic pause of location updates. The location manager might pause
	 * location updates for a period of time to improve battery life. This behavior may stop a long-running background task. Set this flag to false
	 * to prevent this behavior. The value is ignored on Android.
	 * @see {@link https://developer.apple.com/reference/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical|pausesLocationUpdatesAutomatically}
	 */
	iosPausesLocationUpdatesAutomatically?: boolean;

	/**
	 * A boolean value which if set to true, the application will open the Settings
	 * app only after the user has previously denied the location permission.
	 */
	openSettingsIfLocationHasBeenDenied?: boolean;
}

declare type permissionCallbackType = (permissionState: number) => void;
declare type successCallbackType = (location: Location) => void;
declare type errorCallbackType = (error: Error) => void;

/**
 * Get current location applying the specified options (if any).
 * @param {Options} options
 */
export function getCurrentLocation(options?: Options): Promise<Location>;

/**
 * Monitor for location change.
 * @returns {number} The watch id
 */
export async function watchLocation(successCallback: successCallbackType, errorCallback: errorCallbackType, options?: Options): Promise<number>;

/**
 * Monitor for location permission change. Only on iOS!
 * @param permissionCallback gets called on location permission state change
 * @param errorCallback gets called on error
 * @returns {number} the watch id
 */
export function watchPermissionStatus(permissionCallback: permissionCallbackType, errorCallback: errorCallbackType): number;

/**
 * Stop monitoring for location change. Parameter expected is the watchId returned from `watchLocation`.
 * @param watchId The watch id returned when watchLocation was called
 */
export function clearWatch(watchId: number): void;

/**
 * Ask for permissions to use location services. The option 'always' is required to access the location in background.
 * Read more on iOS: https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization.
 * Read more on Android: https://developer.android.com/training/location/permissions
 * @param always https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization
 * always permission on Android is only required on Android SDK >= 29
 * https://developer.android.com/training/location/permissions#request-background-location
 * @param openSettingsIfLocationHasBeenDenied if true and the user previously declined the always permission then the permission settings page for the app will be opened.
 */
export function enableLocationRequest(always?: boolean, openSettingsIfLocationHasBeenDenied?: boolean): Promise<void>;

/**
 * Check if location services are enabled
 * @param options Check the availability based on the specified options.
 * @returns {boolean} True if location services are enabled
 */
export function isEnabled(options?: Options): Promise<boolean>;

/**
 * Calculate the distance between two locations.
 * @param {Location} loc1 From location
 * @param {Location} loc2 To location
 * @returns {number} The calculated distance in meters.
 */
export function distance(loc1: Location, loc2: Location): number;

/**
 * ** iOS Only **
 * Returns the value for the CLAuthorizationStatus on iOS.
 * @returns {any} representing the CLAuthorizationStatus value. The status of the Location Authorization permission.
 */
export function getIOSLocationManagerStatus(): any;
