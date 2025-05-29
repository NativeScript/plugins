import { Application, Color, Device, Utils } from '@nativescript/core';
import { check, request, Result } from '@nativescript-community/perms';
import { LocalNotificationsApi, LocalNotificationsCommon, ReceivedNotification, ScheduleInterval, ScheduleOptions } from './common';

declare const com, global: any;

interface ScheduleNativeOptions extends Omit<ScheduleOptions, 'color' | 'notificationLed'> {
	atTime?: number;
	color?: number;
	repeatInterval?: number;
	notificationLed?: number;
}

const NotificationManagerCompatPackageName = useAndroidX() ? global.androidx.core.app : android.support.v4.app;

function useAndroidX() {
	return global.androidx && global.androidx.appcompat;
}

(() => {
	const registerLifecycleEvents = () => {
		com.telerik.localnotifications.LifecycleCallbacks.registerCallbacks(Application.android.nativeApp);
	};

	// Hook on the application events
	if (Application.android.nativeApp) {
		registerLifecycleEvents();
	} else {
		Application.on(Application.launchEvent, registerLifecycleEvents);
	}
})();

export class LocalNotificationsImpl extends LocalNotificationsCommon implements LocalNotificationsApi {
	private static IS_GTE_LOLLIPOP: boolean = android.os.Build.VERSION.SDK_INT >= 21;

	private static getIntervalMilliseconds(interval: ScheduleInterval, ticks: number = 1): number {
		if (!interval) {
			return 0;
		}

		let multiplier: number = 1000;

		switch (interval) {
			default:
			case 'second':
				multiplier = 1000;
				break;
			case 'minute':
				multiplier = android.app.AlarmManager.INTERVAL_HOUR / 60;
				break;
			case 'hour':
				multiplier = android.app.AlarmManager.INTERVAL_HOUR;
				break;
			case 'day':
				multiplier = android.app.AlarmManager.INTERVAL_DAY;
				break;
			case 'week':
				multiplier = android.app.AlarmManager.INTERVAL_DAY * 7;
				break;
			// close enough
			case 'month':
				multiplier = android.app.AlarmManager.INTERVAL_DAY * 31;
				break;
			case 'quarter':
				multiplier = android.app.AlarmManager.INTERVAL_DAY * 31 * 3;
				break;
			case 'year':
				multiplier = android.app.AlarmManager.INTERVAL_DAY * 365;
				break;
		}

		return Math.abs(ticks) * multiplier;
	}

	private static getIcon(context: any /* android.content.Context */, resources: any, iconLocation?: string): string {
		const packageName: string = context.getApplicationInfo().packageName;
		return (iconLocation && typeof iconLocation === 'string' && iconLocation.indexOf(Utils.RESOURCE_PREFIX) === 0 && resources.getIdentifier(iconLocation.substr(Utils.RESOURCE_PREFIX.length), 'drawable', packageName)) || (LocalNotificationsImpl.IS_GTE_LOLLIPOP && resources.getIdentifier('ic_stat_notify_silhouette', 'drawable', packageName)) || resources.getIdentifier('ic_stat_notify', 'drawable', packageName) || context.getApplicationInfo().icon;
	}

	private static cancelById(id: number): void {
		const context = Utils.android.getApplicationContext();
		const notificationIntent = new android.content.Intent(context, com.telerik.localnotifications.NotificationAlarmReceiver.class).setAction('' + id);
		let flags = 0;
		if (parseInt(Device.sdkVersion) >= 31) {
			flags |= 33554432;
		}
		const pendingIntent = android.app.PendingIntent.getBroadcast(context, 0, notificationIntent, flags);
		const alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
		alarmManager.cancel(pendingIntent);
		const notificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
		notificationManager.cancel(id);

		com.telerik.localnotifications.Store.remove(context, id);
	}

	async hasPermission(): Promise<boolean> {
		try {
			return await LocalNotificationsImpl.canSend();
		} catch (ex) {
			console.log('Error in LocalNotifications.hasPermission: ' + ex);
			throw ex;
		}
	}

	async requestPermission(): Promise<boolean> {
		try {
			await LocalNotificationsImpl.ensurePreconditions();
			return true;
		} catch (ex) {
			console.log('Error in LocalNotifications.requestPermission: ' + ex);
			return false;
		}
	}

	addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				// note that this is ONLY triggered when the user clicked the notification in the statusbar
				com.telerik.localnotifications.LocalNotificationsPlugin.setOnMessageReceivedCallback(
					new com.telerik.localnotifications.LocalNotificationsPluginListener({
						success: (notification) => {
							onReceived(JSON.parse(notification));
						},
					})
				);
				resolve();
			} catch (ex) {
				console.log('Error in LocalNotifications.addOnMessageReceivedCallback: ' + ex);
				reject(ex);
			}
		});
	}

	addOnMessageClearedCallback(onReceived: (data: ReceivedNotification) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				// note that this is ONLY triggered when the user clicked the notification in the statusbar
				com.telerik.localnotifications.LocalNotificationsPlugin.setOnMessageClearedCallback(
					new com.telerik.localnotifications.LocalNotificationsPluginListener({
						success: (notification) => {
							onReceived(JSON.parse(notification));
						},
					})
				);
				resolve();
			} catch (ex) {
				console.log('Error in LocalNotifications.addOnMessageClearedCallback: ' + ex);
				reject(ex);
			}
		});
	}

	cancel(id: number): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				LocalNotificationsImpl.cancelById(id);
				resolve(true);
			} catch (ex) {
				console.log('Error in LocalNotifications.cancel: ' + ex);
				reject(ex);
			}
		});
	}

	cancelAll(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const context = Utils.android.getApplicationContext();

				// if (android.os.Build.VERSION.SDK_INT >= 26) {
				//   const notificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
				//   console.log(">> >= 26, getActiveNotifications: " + notificationManager.getActiveNotifications());
				// } else {
				//   console.log(">> < 26, StatusBarNotification[0]: " + new android.service.notification.StatusBarNotification[0]);
				// }

				const keys: Array<string> = com.telerik.localnotifications.Store.getKeys(Utils.android.getApplicationContext());

				for (let i = 0; i < keys.length; i++) {
					LocalNotificationsImpl.cancelById(parseInt(keys[i]));
				}

				NotificationManagerCompatPackageName.NotificationManagerCompat.from(context).cancelAll();
				resolve();
			} catch (ex) {
				console.log('Error in LocalNotifications.cancelAll: ' + ex);
				reject(ex);
			}
		});
	}

	getScheduledIds(): Promise<Array<number>> {
		return new Promise((resolve, reject) => {
			try {
				const keys: Array<string> = com.telerik.localnotifications.Store.getKeys(Utils.android.getApplicationContext());

				const ids: Array<number> = [];
				for (let i = 0; i < keys.length; i++) {
					ids.push(parseInt(keys[i]));
				}

				resolve(ids);
			} catch (ex) {
				console.log('Error in LocalNotifications.getScheduledIds: ' + ex);
				reject(ex);
			}
		});
	}

	async schedule(scheduleOptions: ScheduleOptions[]): Promise<Array<number>> {
		try {
			await LocalNotificationsImpl.ensurePreconditions();

			const context = Utils.android.getApplicationContext();
			const resources = context.getResources();
			const scheduledIds: number[] = [];

			// TODO: All these changes in the options (other than setting the ID) should rather be done in Java so that
			// the persisted options are exactly like the original ones.
			for (const s of scheduleOptions) {
				const entry = LocalNotificationsImpl.createScheduleEntry(s);
				// Some properties should not be inherited by options
				const nativeOptions: ScheduleNativeOptions = { ...entry, color: undefined, notificationLed: undefined };
				const { interval, ticks } = LocalNotificationsImpl.getIntervalData(entry);

				nativeOptions.atTime = entry.at ? entry.at.getTime() : 0;
				nativeOptions.icon = LocalNotificationsImpl.getIcon(context, resources, (LocalNotificationsImpl.IS_GTE_LOLLIPOP && entry.silhouetteIcon) || entry.icon);
				nativeOptions.repeatInterval = LocalNotificationsImpl.getIntervalMilliseconds(interval, ticks);

				if (entry.color instanceof Color) {
					nativeOptions.color = entry.color.android;
				}

				if (entry.notificationLed !== true && entry.notificationLed instanceof Color) {
					nativeOptions.notificationLed = entry.notificationLed.android;
				}

				registerNotification(nativeOptions, context, scheduledIds);

				if (interval && entry.displayImmediately) {
					nativeOptions.id = LocalNotificationsImpl.generateNotificationID();
					nativeOptions.atTime = 0;

					registerNotification(nativeOptions, context, scheduledIds);
				}
			}

			return scheduledIds;
		} catch (ex) {
			console.log('Error in LocalNotifications.schedule: ' + ex);
			throw ex;
		}

		function registerNotification(nativeOptions: ScheduleNativeOptions, context: globalAndroid.content.Context, register: Array<number>) {
			com.telerik.localnotifications.LocalNotificationsPlugin.scheduleNotification(new org.json.JSONObject(JSON.stringify(nativeOptions)), context);
			register.push(nativeOptions.id);

			console.log(`Notification (id ${nativeOptions.id}) scheduled successfully`);
		}
	}

	private static async ensurePreconditions(): Promise<void> {
		const hasPermission = await LocalNotificationsImpl.hasPermission();
		if (!hasPermission) {
			const granted = await LocalNotificationsImpl.requestPermission();
			if (!granted) throw new Error('Permission not granted');
		}
		// AFAIK can't do it on this platform. when 'false' is returned, the app could prompt the user to manually enable them in the Device Settings
		const enabled = LocalNotificationsImpl.areEnabled();
		if (!enabled) throw new Error('Notifications were manually disabled');
	}

	private static async canSend(): Promise<boolean> {
		const hasPermission = await LocalNotificationsImpl.hasPermission();
		const areEnabled = LocalNotificationsImpl.areEnabled();
		return hasPermission && areEnabled;
	}

	private static areEnabled(): boolean {
		const context = Utils.android.getApplicationContext();
		return !context || NotificationManagerCompatPackageName.NotificationManagerCompat.from(context).areNotificationsEnabled();
	}

	private static async hasPermission(): Promise<boolean> {
		const result = await check('notification');
		return LocalNotificationsImpl.isAuthorized(result);
	}

	private static async requestPermission(): Promise<boolean> {
		try {
			const result = await request('notification');
			return LocalNotificationsImpl.isAuthorized(result);
		} catch (ex) {
			return false;
		}
	}

	private static isAuthorized(result: Result): boolean {
		const [status, _] = result;
		return status === 'authorized';
	}
}

export const LocalNotifications = new LocalNotificationsImpl();
