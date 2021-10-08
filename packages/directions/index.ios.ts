import { Utils } from '@nativescript/core';
import { DirectionsApi, DirectionsCommon, NavigateToOptions } from './common';
import { availableSync } from '@nativescript/appavailability';
export * from './common';

export class Directions extends DirectionsCommon implements DirectionsApi {
	public async available(): Promise<boolean> {
		return true;
	}

	public async navigate(options: NavigateToOptions): Promise<void> {
		try {
			if (options?.ios?.preferGoogleMaps === true && options?.useUniversalSyntax) {
				// todo: Add Universal Syntax url builder to common and invoke here
				// Universal syntax is: https://www.google.com/maps/dir/?api=1&parameters
				await Directions.openGoogleMapsUniversal(options);
				return;
			}

			if (options?.ios?.preferGoogleMaps === true && availableSync('comgooglemaps://')) {
				Utils.openUrl(`comgooglemaps://${Directions.getFromToQuerystring(options)}`);
				return;
			}

			if (options?.ios?.allowGoogleMapsWeb && options.to instanceof Array && options.to.length > 1) {
				Utils.openUrl(`https://maps.google.com/maps${Directions.getFromToQuerystring(options)}`);
				return;
			}

			// Catch all here is to open Apple Maps via the Universal URL syntax
			Utils.openUrl(`https://maps.apple.com/maps${Directions.getFromToQuerystring(options)}`);
		} catch (e) {
			throw e;
		}
	}
}
