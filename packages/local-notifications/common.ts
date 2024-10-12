import { Color } from '@nativescript/core';
import { isObject } from '@nativescript/core/utils';

export type ScheduleInterval = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | number;

export type ScheduleIntervalObject = Partial<Record<Extract<ScheduleInterval, string>, number>>;

export interface NotificationAction {
	id: string;
	type: 'button' | 'input';
	title?: string;
	/**
	 * Launch the app when the action is triggered.
	 * Default false.
	 */
	launch?: boolean;
	submitLabel?: string;
	placeholder?: string;
	/**
	 * For type = "input".
	 * Default true.
	 * Android only.
	 */
	editable?: boolean;
	/**
	 * For type = "input".
	 * Android only.
	 */
	choices?: Array<string>;
}

/**
 * The options object passed into the schedule function.
 */
export interface ScheduleOptions {
	/**
	 * A number so you can easily distinguish your notifications.
	 * Default <generated>.
	 */
	id?: number;

	/**
	 * The title which is shown in the statusbar.
	 * Default not set.
	 */
	title?: string;

	/**
	 * Shown below the title on iOS >= 10, and next to the App name on Android.
	 * Default not set.
	 * All android and iOS >= 10 only.
	 */
	subtitle?: string;

	/**
	 * The text below the title.
	 * Default not set on Android. On iOS, the subtitle, title (in this order or priority) will be swapped for it on iOS,
	 * as iOS won't display notifications without a body. If none of them are set, `' '` will be used.
	 */
	body?: string;

	/**
	 * On Android you can show a different text in the statusbar, instead of the 'body'.
	 * Default not set, so `body` is used.
	 */
	ticker?: string;

	/**
	 * A JavaScript Date object indicating when the notification should be shown.
	 * Default 'now'.
	 */
	at?: Date;

	// TODO
	trigger?: 'timeInterval';

	/**
	 * On iOS (and some Android devices) you see a number on top of the app icon. On most Android devices you'll see this number in the notification center.
	 * Default not set (0).
	 */
	badge?: number;

	/**
	 * Currently this is only used on Android where you can set this to 'null' to suppress the sound.
	 * Default 'the default notification sound'.
	 */
	sound?: string;

	/**
	 * Custom color for the notification icon and title that will be applied when the notification center is expanded.
	 * Android >= Lollipop (21) only.
	 */
	color?: Color;

	/**
	 * If the interval is a number, it will be calculated as DAYS.
	 */
	interval?: ScheduleInterval | ScheduleIntervalObject;

	/**
	 * Should the notification be triggered immediately
	 */
	displayImmediately?: boolean;

	/**
	 * On Android you can set a custom icon in the system tray.
	 * Pass in `res://filename` (without the extension) which lives in `App_Resouces/Android/drawable` folders.
	 * If not passed, we'll look there for a file named `ic_stat_notify.png`.
	 * By default the app icon is used.
	 * Android < Lollipop (21) only (also see 'silhouetteIcon').
	 */
	icon?: string;

	/**
	 * Same as `icon`, but for Android >= Lollipop (21) (also see 'icon').
	 * Should be an alpha-only image.
	 * Defaults to `res://ic_stat_notify_silhouette`, or the app icon if not present.
	 */
	silhouetteIcon?: string;

	/**
	 * Custom thumbnail/icon to show in the notification center on Android, this can be:
	 * - true if you want to use the image as the thumbnail as well.
	 * - A resource url that lives in App_Resouces/Android/drawable folders. E.g.: 'res://filename.png'.
	 * - A http url from anywhere on the web.
	 *
	 * Android only.
	 * Default not set.
	 */
	thumbnail?: boolean | string;

	/**
	 * Set whether this is an "ongoing" notification.
	 * Ongoing notifications cannot be dismissed by the user,
	 * so your application or must take care of canceling them.
	 *
	 * Android only.
	 * Default false.
	 */
	ongoing?: boolean;

	/**
	 * An array of messages to be displayed as a single notification using the inbox style
	 * Note: the length of the array cannot be greater than five, in a situation where it
	 * is, the array would be trimmed from the top
	 *
	 * Android only.
	 */
	groupedMessages?: Array<string>;

	/**
	 * The summary of the grouped message (see #groupedMessage) when using the inbox style
	 *
	 * Android only.
	 */
	groupSummary?: string;

	/**
	 * URL (http) of the image to use as an expandable notification image.
	 */
	image?: string;

	/**
	 * Using the big text style
	 *
	 * Android only.
	 * Default false.
	 */
	bigTextStyle?: boolean;

	/**
	 * Enable the notification LED light with optional LED light style settings
	 * - true if you want to use default color
	 * - Custom color if you would like to use custom color for the notification LED light.
	 *
	 * Android only.
	 * Default not set.
	 */
	notificationLed?: boolean | Color;

	/**
	 * When longpressing a notification on Android (API >= 26), this 'channel' name is revealed.
	 * Default 'Channel'.
	 */
	channel?: string;

	/**
	 * Default false.
	 */
	forceShowWhenInForeground?: boolean;

	priority?: number;

	/**
	 * Buttons or text input.
	 */
	actions?: Array<NotificationAction>;

	/**
	 * A JSON object to pass data
	 */
	payload?: any;
}

export interface ReceivedNotification {
	id: number;
	foreground: boolean;
	title?: string;
	body?: string;
	event?: string;
	response?: string;
	payload?: any;
}

export interface LocalNotificationsApi {
	/**
	 * On iOS you need to ask permission to schedule a notification.
	 * You can have the `schedule` funtion do that for you automatically
	 * (the notification will be scheduled in case the user granted permission),
	 * or you can manually invoke `requestPermission` if that's your thing.
	 */
	schedule(options: ScheduleOptions[]): Promise<Array<number>>;

	/**
	 * Tapping a notification in the notification center will launch your app.
	 * But what if you scheduled two notifications and you want to know which one the user tapped?
	 *
	 * Use this function to have a callback invoked when a notification was used to launch your app.
	 * Note that on iOS it will even be triggered when your app is in the foreground and a notification is received.
	 */
	addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any>;

	/**
	 * Use when you want to know the id's of all notifications which have been scheduled.
	 */
	getScheduledIds(): Promise<Array<number>>;

	/**
	 * Cancels the 'id' passed in.
	 * On iOS returns whether or not it was found (and cancelled).
	 * On Android we always return true currently.
	 */
	cancel(id: number): Promise<boolean>;

	/**
	 * Use when you just want to cancel all previously scheduled notifications.
	 */
	cancelAll(): Promise<any>;

	/**
	 * On Android you don't need permission, but on iOS you do.
	 * Android will simply return true.
	 *
	 * If the 'requestPermission' or 'schedule' functions previously ran
	 * you may want to check whether or not the user granted permission.
	 */
	hasPermission(): Promise<boolean>;

	/**
	 * On Android you don't need permission, but on iOS you do.
	 * Android will simply return true.
	 *
	 * If the 'requestPermission' or 'schedule' function previously ran
	 * the user has already been prompted to grant permission.
	 *
	 * If the user granted permission this function returns true,
	 * but if he denied permission this function will return false
	 * since an iOS can only request permission once. In which case the user needs
	 * to go to the iOS settings app and manually enable permissions for your app.
	 */
	requestPermission(): Promise<boolean>;
}

// TODO: This could be just an utils file!

export abstract class LocalNotificationsCommon {
	protected static defaults: Readonly<ScheduleOptions> = {
		badge: 0,
		interval: null,
		ongoing: false,
		groupSummary: null,
		bigTextStyle: false,
		channel: 'Channel',
		forceShowWhenInForeground: false,
		displayImmediately: false,
	};

	protected static createScheduleEntry(options: ScheduleOptions): ScheduleOptions {
		const entry: ScheduleOptions = Object.assign({}, this.defaults);

		// Return entry with defaults if not defined
		if (!options) {
			entry.id = this.generateNotificationID();
			return entry;
		}

		// Override defaults by options
		Object.assign(entry, options);

		if (typeof entry.id !== 'number') {
			// We need unique IDs in all notifications to be able to persist them without overwriting one another
			entry.id = this.generateNotificationID();
		}

		if (typeof entry.interval === 'string') {
			entry.interval = { [entry.interval]: 1 };
		}

		return entry;
	}

	protected static getIntervalData(entry: ScheduleOptions): { interval: ScheduleInterval; ticks: number } {
		let interval: ScheduleInterval;
		let ticks: number;

		if (entry.interval) {
			const intervalData = Object.entries(entry.interval)[0] as [ScheduleInterval, number];

			interval = intervalData[0];
			ticks = intervalData[1];
		} else {
			interval = null;
			ticks = 1;
		}

		return {
			interval,
			ticks,
		};
	}

	protected static generateUUID(): string {
		// Not the best, but it will work. See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
		const s4 = () =>
			Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
	}

	protected static generateNotificationID(): number {
		return Math.round((Date.now() + Math.round(100000 * Math.random())) / 1000);
	}
}
