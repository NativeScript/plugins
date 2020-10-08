import { Application, Utils } from '@nativescript/core';
import { LocalNotificationsApi, LocalNotificationsCommon, ReceivedNotification, ScheduleInterval, ScheduleOptions } from './common';

declare const com, global: any;

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

	private static getInterval(interval: ScheduleInterval): number {
		if (interval === 'second') {
			return 1000; // it's in ms
		} else if (interval === 'minute') {
			return android.app.AlarmManager.INTERVAL_FIFTEEN_MINUTES / 15;
		} else if (interval === 'hour') {
			return android.app.AlarmManager.INTERVAL_HOUR;
		} else if (interval === 'day') {
			return android.app.AlarmManager.INTERVAL_DAY;
		} else if (interval === 'week') {
			return android.app.AlarmManager.INTERVAL_DAY * 7;
		} else if (interval === 'month') {
			return android.app.AlarmManager.INTERVAL_DAY * 31; // well that's almost accurate
		} else if (interval === 'year') {
			return android.app.AlarmManager.INTERVAL_DAY * 365; // same here
		} else {
			return undefined;
		}
	}

	private static getIcon(context: any /* android.content.Context */, resources: any, iconLocation?: string): string {
		const packageName: string = context.getApplicationInfo().packageName;
		return (iconLocation && iconLocation.indexOf(Utils.RESOURCE_PREFIX) === 0 && resources.getIdentifier(iconLocation.substr(Utils.RESOURCE_PREFIX.length), 'drawable', packageName)) || (LocalNotificationsImpl.IS_GTE_LOLLIPOP && resources.getIdentifier('ic_stat_notify_silhouette', 'drawable', packageName)) || resources.getIdentifier('ic_stat_notify', 'drawable', packageName) || context.getApplicationInfo().icon;
	}

	private static cancelById(id: number): void {
		const context = Utils.android.getApplicationContext();
		const notificationIntent = new android.content.Intent(context, com.telerik.localnotifications.NotificationAlarmReceiver.class).setAction('' + id);
		const pendingIntent = android.app.PendingIntent.getBroadcast(context, 0, notificationIntent, 0);
		const alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
		alarmManager.cancel(pendingIntent);
		const notificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
		notificationManager.cancel(id);

		com.telerik.localnotifications.Store.remove(context, id);
	}

	hasPermission(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				resolve(LocalNotificationsImpl.hasPermission());
			} catch (ex) {
				console.log('Error in LocalNotifications.hasPermission: ' + ex);
				reject(ex);
			}
		});
	}

	requestPermission(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				// AFAIK can't do it on this platform.. when 'false' is returned, the app could prompt the user to manually enable them in the Device Settings
				resolve(LocalNotificationsImpl.hasPermission());
			} catch (ex) {
				console.log('Error in LocalNotifications.requestPermission: ' + ex);
				reject(ex);
			}
		});
	}

	addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any> {
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

	addOnMessageClearedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any> {
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

	getScheduledIds(): Promise<number[]> {
		return new Promise((resolve, reject) => {
			try {
				const keys: Array<string> = com.telerik.localnotifications.Store.getKeys(Utils.android.getApplicationContext());

				const ids: number[] = [];
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

	schedule(scheduleOptions: ScheduleOptions[]): Promise<Array<number>> {
		return new Promise((resolve, reject) => {
			try {
				if (!LocalNotificationsImpl.hasPermission()) {
					reject('Permission not granted');
					return;
				}

				const context = Utils.android.getApplicationContext();
				const resources = context.getResources();
				const scheduledIds: Array<number> = [];

				// TODO: All these changes in the options (other than setting the ID) should rather be done in Java so that
				// the persisted options are exactly like the original ones.

				for (let n in scheduleOptions) {
					const options = LocalNotificationsImpl.merge(scheduleOptions[n], LocalNotificationsImpl.defaults);

					options.icon = LocalNotificationsImpl.getIcon(context, resources, (LocalNotificationsImpl.IS_GTE_LOLLIPOP && options.silhouetteIcon) || options.icon);

					options.atTime = options.at ? options.at.getTime() : 0;

					// Used when restoring the notification after a reboot:
					options.repeatInterval = LocalNotificationsImpl.getInterval(options.interval);

					if (options.color) {
						options.color = options.color.android;
					}

					if (options.notificationLed && options.notificationLed !== true) {
						options.notificationLed = options.notificationLed.android;
					}

					LocalNotificationsImpl.ensureID(options);

					com.telerik.localnotifications.LocalNotificationsPlugin.scheduleNotification(new org.json.JSONObject(JSON.stringify(options)), context);

					scheduledIds.push(options.id);
				}

				resolve(scheduledIds);
			} catch (ex) {
				console.log('Error in LocalNotifications.schedule: ' + ex);
				reject(ex);
			}
		});
	}

	private static hasPermission(): boolean {
		const context = Utils.android.getApplicationContext();
		return !context || NotificationManagerCompatPackageName.NotificationManagerCompat.from(context).areNotificationsEnabled();
	}
}

export const LocalNotifications = new LocalNotificationsImpl();
