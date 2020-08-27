/**
* A data class that encapsulates common properties for a geolocation.
*/
export class Location {

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

export class LocationBase implements Location {
  public latitude: number;
  public longitude: number;
  public altitude: number;
  public horizontalAccuracy: number;
  public verticalAccuracy: number;
  public speed: number; // in m/s ?
  public direction: number; // in degrees
  public timestamp: Date;
}

export const defaultGetLocationTimeout = 5 * 60 * 1000; // 5 minutes
export const minRangeUpdate = 0.1; // 0 meters
export const minTimeUpdate = 1 * 60 * 1000; // 1 minute
export const fastestTimeUpdate = 5 * 1000; // 5 secs