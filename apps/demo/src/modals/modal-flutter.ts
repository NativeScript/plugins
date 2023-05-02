import { Observable, EventData, Page } from '@nativescript/core';
import { FlutterChannelType } from '@nativescript/flutter';

export function shownModally(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	channel: FlutterChannelType;

	constructor() {
		super();
		this.channel = {
			getBatteryLevel: this._getBatteryLevel,
		};
	}

	private _getBatteryLevel() {
		UIDevice.currentDevice.batteryMonitoringEnabled = true;
		const batteryLevel = (UIDevice.currentDevice.batteryLevel * 100) | 0;
		return Promise.resolve(batteryLevel);
	}
}
