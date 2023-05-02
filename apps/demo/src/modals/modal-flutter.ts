import { Observable, EventData, Page, Device, Utils } from '@nativescript/core';
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
		if (global.isAndroid) {
			let batteryLevel = 0;
			const context = Utils.android.getApplicationContext();
			if (parseInt(Device.sdkVersion) >= 19) {
				const batteryManager = context.getSystemService(android.content.Context.BATTERY_SERVICE) as android.os.BatteryManager;
				batteryLevel = batteryManager.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
			} else {
				const intent = new android.content.ContextWrapper(context).registerReceiver(null, new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED));
				batteryLevel = (intent!!.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1) * 100) / intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
			}

			return Promise.resolve(batteryLevel);
		}
		UIDevice.currentDevice.batteryMonitoringEnabled = true;
		const batteryLevel = (UIDevice.currentDevice.batteryLevel * 100) | 0;
		return Promise.resolve(batteryLevel);
	}
}
