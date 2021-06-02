import { DemoSharedBase } from '../utils';
import { Directions, NavigateToOptions } from '@nativescript/directions';

export class DemoSharedDirections extends DemoSharedBase {
	private directions: Directions;

	constructor() {
		super();
		this.directions = new Directions();
	}

	async doCheckAvailable() {
		try {
			const result = await this.directions.available();
			const message = `Directions Available: ${result}`;
			console.log(message);
			alert(message);
		} catch (error) {
			console.error('Error:', error);
			alert(`Error: ${error?.message}`);
		}
	}

	/**
	 * Tests navigation via the input options
	 * @param options
	 */
	async doNavigate(options: NavigateToOptions = { to: { address: '' } }) {
		try {
			await this.directions.navigate(options);
			console.log('Navigate call complete');
		} catch (error) {
			console.error('Navigate Error', error);
			alert(`Navigate error ${error?.message}`);
		}
	}

	doCurrentLocationToAddress() {
		this.directions
			.navigate({
				to: {
					address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
				},
				type: 'transit',
			})
			.then(
				() => {
					console.log('Current location to address directions launched!');
				},
				(err) => {
					alert(err);
				}
			);
	}

	doAddressToAddressToAddress() {
		this.directions
			.navigate({
				from: {
					address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
				},
				type: 'walking',
				to: [
					{
						address: 'Middenstraat 21, Loppersum, Netherlands',
					},
					{
						address: 'Aak 98, Wieringerwerf, Netherlands',
					},
				],
				ios: {
					allowGoogleMapsWeb: true,
				},
			})
			.then(
				() => {
					console.log('Address to address directions launched!');
				},
				(err) => {
					alert(err);
				}
			);
	}

	doAddressToCoordinate() {
		this.directions
			.navigate({
				from: {
					address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
				},
				to: [
					{
						lat: 52.215987,
						lng: 5.282764,
					},
				],
				type: 'walking',
				ios: {
					allowGoogleMapsWeb: true,
					preferGoogleMaps: true,
				},
			})
			.then(
				() => {
					console.log('Address to coord directions launched!');
				},
				(err) => {
					alert(err);
				}
			);
	}

	doCoordinateToCoordinate() {
		this.directions
			.navigate({
				from: {
					lat: 52.215987,
					lng: 5.282764,
				},
				to: {
					lat: 52.515987,
					lng: 5.382764,
				},
			})
			.then(
				() => {
					console.log('Coord to coord directions launched!');
				},
				(err) => {
					alert(err);
				}
			);
	}
}
