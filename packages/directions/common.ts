import { isIOS, Utils } from '@nativescript/core';

export interface AddressOptions {
	/**
	 * Use as 3,34523 with 'lng', ignored if 'address' is set as well.
	 */
	lat?: number;
	/**
	 * Use as 4,21323 with 'lat', ignored if 'address' is set as well.
	 */
	lng?: number;
	/**
	 * Concat the address as one string with commas's.
	 * 'lat' and 'lng' are ignored if this is set as well.
	 */
	address?: string;
}

export type NavigateToOptionsType = 'driving' | 'transit' | 'bicycling' | 'walking';

export interface NavigateToOptions {
	/**
	 * If not set the current GPS location will be used.
	 */
	from?: AddressOptions;
	/**
	 * Where do you want to go?
	 * Add multiple addresses to pass waypoints.
	 */
	to: AddressOptions | Array<AddressOptions>;

	ios?: {
		/**
		 * If the Google Maps app is installed, use that one instead of Apple Maps,
		 * because it supports waypoints.
		 *
		 * Default true.
		 */
		preferGoogleMaps?: boolean;
		/**
		 * If waypoints are passed in and Google Maps is not installed,
		 * you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored),
		 * or you can open Google Maps on web so all waypoints are shown (set this property to true).
		 *
		 * Default false.
		 */
		allowGoogleMapsWeb?: boolean;
	};

	android?: {
		/**
		 * Start as new task. This means it will start a new history stack instead of using the current app.
		 *
		 * Default true.
		 */
		newTask?: boolean;
	};

	/**
	 * If true, this opens Google Maps using the universal syntax rather than the comgooglemaps:// url scheme.
	 * Use this if Google Maps does not load correctly on iOS, the Universal Syntax is now preferred.
	 *
	 * Default false.
	 */
	useUniversalSyntax?: boolean;

	type?: NavigateToOptionsType;
}

export interface DirectionsApi {
	available(): Promise<boolean>;
	navigate(options: NavigateToOptions): Promise<void>;
}

export class DirectionsCommon {
	static getFromToQuerystring(options: NavigateToOptions): string {
		let dest = undefined,
			source = null,
			qs = '?saddr=';

		if (options.from) {
			if (options.from.address) {
				source = options.from.address;
			} else if (options.from.lat && options.from.lng) {
				source = options.from.lat + ',' + options.from.lng;
			}
		}

		if (source) {
			qs += encodeURIComponent(source);
		}

		if (!options.to) {
			throw new Error("Set 'to', please.");
		}

		const toArray = options.to instanceof Array ? options.to : [options.to];

		for (let i = 0; i < toArray.length; i++) {
			const addressOptions = toArray[i];

			if (addressOptions.address) {
				dest = addressOptions.address;
			} else if (addressOptions.lat && addressOptions.lng) {
				dest = addressOptions.lat + ',' + addressOptions.lng;
			} else {
				throw new Error("Either set 'address' or 'lat' and 'lng'.");
			}
			qs += (i === 0 ? '&daddr=' : '+to:') + encodeURIComponent(dest);
		}

		if (options.type) {
			qs += '&directionsmode=' + options.type;
			qs += '&dirflg=' + DirectionsCommon.getDirflgType(options.type);
		}

		console.log('>> qs: ' + qs);

		return qs;
	}

	static getDirflgType(type: NavigateToOptionsType): string {
		if (type === 'walking') return 'w';
		else if (type === 'bicycling') return 'b';
		else if (type === 'transit') return 'r';
		else return 'd';
	}

	/**
	 * Opens Google Maps using the Universal URL Scheme for the Directions API (Cross-platform)
	 * See https://developers.google.com/maps/documentation/urls/get-started#directions-action for more info.
	 * @param options The options to use
	 */
	static async openGoogleMapsUniversal(options: NavigateToOptions): Promise<void> {
		const TO_MANDATORY = 'To Address or lat & lng is mandatory';
		let finalUrl = `https://www.google.com/maps/dir/?api=1`;

		if (options?.from) {
			const origin = this.getAddress(options.from);
			if (origin) {
				finalUrl += `&origin=${origin}`;
			}
		}

		if (!options?.to) {
			throw new Error(TO_MANDATORY);
		}

		// To can be AddressOptions or AddressOptions[],
		// with AddressOptions[] the first is the destination, the rest are waypoints
		let destination: AddressOptions = options?.to as any;
		let waypoints: AddressOptions[] = [];
		if (options?.to instanceof Array) {
			[destination, ...waypoints] = options?.to;
		}

		const destinationAddress = this.getAddress(destination);

		finalUrl += `&destination=${destinationAddress}`;

		const waypointAddresses = waypoints?.map((w) => this.getAddress(w))?.join(encodeURIComponent('|')) ?? '';

		if (waypointAddresses) {
			finalUrl += `&waypoints=${waypointAddresses}`;
		}

		finalUrl += this.getTypeString(options);

		console.log('Final Url:', finalUrl);
		Utils.openUrl(finalUrl);
	}

	private static getAddress(address: AddressOptions): string {
		if (address?.lat && address?.lng) return `${address?.lat}${encodeURIComponent(',')}${address?.lng}`;
		if (address?.address) return encodeURIComponent(address?.address);
		return '';
	}

	private static getTypeString(options: NavigateToOptions): string {
		if (!options?.type) return '';

		return `&travelmode=${options?.type}`;
	}
}
