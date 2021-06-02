import { Component, NgZone } from '@angular/core';
import { DemoSharedDirections } from '@demo/shared';
import { action, isIOS, ApplicationSettings } from '@nativescript/core';
import { NavigateToOptions, AddressOptions, NavigateToOptionsType } from '@nativescript/directions';

@Component({
	selector: 'demo-directions',
	templateUrl: 'directions.component.html',
})
export class DirectionsComponent {
	private readonly SETTINGS_KEY = 'demo.directions';

	demoShared: DemoSharedDirections;

	toAddress: AddressOptions = {};
	fromAddress: AddressOptions = {};
	waypoints: AddressOptions[] = [];

	transportType: NavigateToOptionsType = 'driving';

	useUniversal = false;
	iosOptions = { preferGoogleMaps: false, allowGoogleMapsWeb: false };
	androidOptions = { newTask: false };

	isIOS = isIOS;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDirections();
		this.loadSettings();
	}

	async onNavigate() {
		const finalOptions: NavigateToOptions = {
			to: [this.toAddress, ...this.waypoints],
			from: this.fromAddress,
			type: this.transportType,
			ios: this.iosOptions,
			android: this.androidOptions,
			useUniversalSyntax: this.useUniversal,
		};

		this.saveSettings(finalOptions);
		console.log('navigate() with options', finalOptions);
		return this.demoShared.doNavigate(finalOptions);
	}

	async changeType() {
		try {
			const options = {
				title: 'Transport Type',
				cancelButtonText: 'Cancel',
				actions: ['driving', 'transit', 'bicycling', 'walking'],
			};

			const result = await action(options);

			if (result !== 'Cancel') {
				this._ngZone.run(() => {
					this.transportType = result as any;
				});
			}
		} catch (error) {
			console.error('Error in action sheet', error);
		}
	}

	saveSettings(options: NavigateToOptions) {
		try {
			ApplicationSettings.setString(this.SETTINGS_KEY, JSON.stringify(options));
		} catch (error) {
			console.error('Could not save last settings');
		}
	}

	loadSettings() {
		try {
			if (!ApplicationSettings.hasKey(this.SETTINGS_KEY)) return;

			const raw = ApplicationSettings.getString(this.SETTINGS_KEY);
			if (!raw) return;

			const parsed = JSON.parse(raw);
			this._ngZone.run(() => {
				const [to, ...waypoints] = parsed?.to;
				this.toAddress = to;
				this.waypoints = waypoints;

				this.fromAddress = parsed?.from;
				this.iosOptions = parsed?.ios;
				this.androidOptions = parsed?.android;
				this.transportType = parsed?.type;
				this.useUniversal = parsed?.useUniversalSyntax;
			});
		} catch (error) {
			console.log('Could not reload last known settings', error);
			ApplicationSettings.remove(this.SETTINGS_KEY);
		}
	}

	async addWaypoint() {
		this.waypoints.push({});
	}

	async removeWaypoint(index: number) {
		if (index <= -1) return;
		this.waypoints.splice(index, 1);
	}
}
