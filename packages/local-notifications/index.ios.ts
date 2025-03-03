import { File, ImageSource, knownFolders, path as fsPath } from '@nativescript/core';
import { DelegateObserver, SharedNotificationDelegate } from '@nativescript/shared-notification-delegate';
import { LocalNotificationsApi, LocalNotificationsCommon, ReceivedNotification, ScheduleInterval, ScheduleIntervalObject, ScheduleOptions } from './common';

declare const Notification: any;

export class LocalNotificationsImpl extends LocalNotificationsCommon implements LocalNotificationsApi {
	private static didRegisterUserNotificationSettingsObserver: any;
	private notificationReceivedObserver: any;
	private pendingReceivedNotifications: Array<ReceivedNotification> = [];
	private receivedNotificationCallback: (data: ReceivedNotification) => void;
	private notificationHandler: Notification;
	private notificationManager: NotificationManager;
	private observer: LocalNotificationsDelegateObserverImpl;

	constructor() {
		super();
		if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
			this.observer = new LocalNotificationsDelegateObserverImpl(new WeakRef(this));
			SharedNotificationDelegate.addObserver(this.observer);
		} else {
			// grab 'em here, store 'em in JS, and give them to the callback when addOnMessageReceivedCallback is wired
			this.notificationReceivedObserver = LocalNotificationsImpl.addObserver('notificationReceived', (result) => {
				const notificationDetails = JSON.parse(result.userInfo.objectForKey('message'));
				this.addOrProcessNotification(notificationDetails);
			});
			this.notificationHandler = Notification.new();
			this.notificationManager = NotificationManager.new();
		}
	}

	static isUNUserNotificationCenterAvailable(): boolean {
		try {
			// available since iOS 10
			return !!UNUserNotificationCenter;
		} catch (ignore) {
			return false;
		}
	}

	private static hasPermission(): boolean {
		const settings = UIApplication.sharedApplication.currentUserNotificationSettings;
		const types = UIUserNotificationType.Alert | UIUserNotificationType.Badge | UIUserNotificationType.Sound;
		return (settings.types & types) > 0;
	}

	private static getImageName(imageURL: string = '', extension: 'png' | 'jpeg' | 'jpg' = 'png'): [string, string] {
		const name: string = imageURL.split(/[\/\.]/).slice(-2, -1)[0] || LocalNotificationsImpl.generateUUID();
		return [name, `${name}.${extension}`];
	}

	private static addObserver(eventName, callback): any {
		return NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(eventName, null, NSOperationQueue.mainQueue, callback);
	}

	private static getInterval(interval: ScheduleInterval | ScheduleIntervalObject): NSCalendarUnit {
		if (interval === 'minute') {
			return NSCalendarUnit.CalendarUnitSecond;
		} else if (interval === 'hour') {
			return NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		} else if (interval === 'day') {
			return NSCalendarUnit.CalendarUnitHour | NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		} else if (interval === 'week') {
			return NSCalendarUnit.CalendarUnitWeekday | NSCalendarUnit.CalendarUnitHour | NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		} else if (interval === 'month') {
			return NSCalendarUnit.CalendarUnitDay | NSCalendarUnit.CalendarUnitHour | NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		} else if (interval === 'year') {
			return NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay | NSCalendarUnit.CalendarUnitHour | NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		} else if (typeof interval === 'number') {
			return interval;
		} else {
			return NSCalendarUnit.CalendarUnitYear | NSCalendarUnit.CalendarUnitMonth | NSCalendarUnit.CalendarUnitDay | NSCalendarUnit.CalendarUnitHour | NSCalendarUnit.CalendarUnitMinute | NSCalendarUnit.CalendarUnitSecond;
		}
	}

	private static getIntervalSeconds(interval: ScheduleInterval, ticks: number = 1): number {
		let multiplier: number = 1;

		switch (interval) {
			default:
			case 'second':
				multiplier = 1;
				break;
			case 'minute':
				multiplier = 60;
				break;
			case 'hour':
				multiplier = 60 * 60;
				break;
			case 'day':
				multiplier = 60 * 60 * 24;
				break;
			case 'week':
				multiplier = 60 * 60 * 24 * 7;
				break;
			// close enough
			case 'month':
				60 * 60 * 24 * 30.438;
				break;
			case 'quarter':
				60 * 60 * 24 * 91.313;
				break;
			case 'year':
				multiplier = 60 * 60 * 24 * 365;
				break;
		}

		return Math.abs(ticks) * multiplier;
	}

	private static async schedulePendingNotifications(scheduleOptions: ScheduleOptions[]): Promise<Array<number>> {
		if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
			return await LocalNotificationsImpl.schedulePendingNotificationsNew(scheduleOptions);
		} else {
			return LocalNotificationsImpl.schedulePendingNotificationsLegacy(scheduleOptions);
		}
	}

	private static async schedulePendingNotificationsNew(scheduleOptions: ScheduleOptions[]): Promise<Array<number>> {
		const scheduledIds: number[] = [];

		for (const s of scheduleOptions) {
			const entry = LocalNotificationsImpl.createScheduleEntry(s);
			const { interval, ticks } = LocalNotificationsImpl.getIntervalData(entry);

			// Notification content
			const content = UNMutableNotificationContent.new();

			const { title, subtitle, body } = entry;
			content.title = body || subtitle ? title : undefined;
			content.subtitle = body ? subtitle : undefined;
			// On iOS, a notification with no body won't show up, so the subtitle or title will be used in this case as body
			// instead. If none of them is set, we set it to ' ' and will show up as an empty line in the notification:
			content.body = body || subtitle || title || ' ';

			content.badge = entry.badge;

			if (entry.sound === undefined || entry.sound === 'default') {
				content.sound = UNNotificationSound.defaultSound;
			} else {
				content.sound = UNNotificationSound.soundNamed(entry.sound);
			}

			const userInfoDict = new NSMutableDictionary({ capacity: 3 });
			userInfoDict.setObjectForKey('nativescript-local-notifications', '__NotificationType');
			userInfoDict.setObjectForKey(entry.forceShowWhenInForeground, 'forceShowWhenInForeground');
			userInfoDict.setObjectForKey(entry.priority || 0, 'priority');
			if ('payload' in entry) {
				userInfoDict.setObjectForKey(JSON.stringify(entry.payload), 'payload');
			}
			content.userInfo = userInfoDict;

			// Notification trigger and repeat
			let trigger: UNNotificationTrigger;

			if (entry.at) {
				const cal = LocalNotificationsImpl.calendarWithMondayAsFirstDay();
				const date = cal.componentsFromDate(LocalNotificationsImpl.getInterval(interval), entry.at);
				date.timeZone = NSTimeZone.defaultTimeZone;
				trigger = UNCalendarNotificationTrigger.triggerWithDateMatchingComponentsRepeats(date, interval != null);
			} else if (interval) {
				trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(this.getIntervalSeconds(interval, ticks), true);
			} else {
				trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(2, false);
			}

			// actions
			if (entry.actions) {
				let categoryIdentifier = 'CATEGORY';
				const actions: Array<UNNotificationAction> = [];

				entry.actions.forEach((action) => {
					categoryIdentifier += '_' + action.id;

					let notificationActionOptions: UNNotificationActionOptions = UNNotificationActionOptionNone;

					if (action.launch) {
						notificationActionOptions = UNNotificationActionOptions.Foreground;
					}

					if (action.type === 'input') {
						actions.push(UNTextInputNotificationAction.actionWithIdentifierTitleOptionsTextInputButtonTitleTextInputPlaceholder('' + action.id, action.title, notificationActionOptions, action.submitLabel || 'Submit', action.placeholder));
					} else if (action.type === 'button') {
						actions.push(UNNotificationAction.actionWithIdentifierTitleOptions('' + action.id, action.title, notificationActionOptions));
					} else {
						console.log('Unsupported action type: ' + action.type);
					}
				});
				const notificationCategory = UNNotificationCategory.categoryWithIdentifierActionsIntentIdentifiersOptions(categoryIdentifier, <any>actions, <any>[], UNNotificationCategoryOptions.CustomDismissAction);

				content.categoryIdentifier = categoryIdentifier;

				UNUserNotificationCenter.currentNotificationCenter().getNotificationCategoriesWithCompletionHandler((categories: NSSet<UNNotificationCategory>) => {
					if (categories) {
						UNUserNotificationCenter.currentNotificationCenter().setNotificationCategories(categories.setByAddingObject(notificationCategory));
					} else {
						UNUserNotificationCenter.currentNotificationCenter().setNotificationCategories(NSSet.setWithObject<UNNotificationCategory>(notificationCategory));
					}
				});
			}

			if (entry.image) {
				ImageSource.fromUrl(entry.image).then((image) => {
					const [imageName, imageNameWithExtension] = LocalNotificationsImpl.getImageName(entry.image, 'png');
					const path: string = fsPath.join(knownFolders.temp().path, imageNameWithExtension);
					const saved = image.saveToFile(path, 'png');
					if (saved || File.exists(path)) {
						try {
							content.attachments = NSArray.arrayWithObject<UNNotificationAttachment>(UNNotificationAttachment.attachmentWithIdentifierURLOptionsError(imageName, NSURL.fileURLWithPath(path), null));
						} catch (err) {
							console.log('Error adding image attachment - ignoring the image. Error: ' + err);
							// Just fall back to a normal notification...
						}
					}
				});
			}

			scheduledIds.push(await registerNotification(entry.id, content, trigger));

			if (interval && entry.displayImmediately) {
				const id = LocalNotificationsImpl.generateNotificationID();
				scheduledIds.push(await registerNotification(id, content, UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(2, false)));
			}
		}

		function registerNotification(id: number, content: UNMutableNotificationContent, trigger: UNNotificationTrigger) {
			return new Promise<number>((resolve) => {
				UNUserNotificationCenter.currentNotificationCenter().addNotificationRequestWithCompletionHandler(UNNotificationRequest.requestWithIdentifierContentTrigger('' + id, content, trigger), (error: NSError) => {
					if (error) {
						console.log(`Error scheduling notification (id ${id}): ${error.localizedDescription}`);
					} else {
						console.log(`Notification (id ${id}) scheduled successfully`);
					}
					resolve(id);
				});
			});
		}

		return scheduledIds;
	}

	private static calendarWithMondayAsFirstDay(): NSCalendar {
		const cal = NSCalendar.alloc().initWithCalendarIdentifier(NSCalendarIdentifierISO8601);
		cal.firstWeekday = 2;
		cal.minimumDaysInFirstWeek = 1;
		return cal;
	}

	private static schedulePendingNotificationsLegacy(scheduleOptions: ScheduleOptions[]): Array<number> {
		const scheduledIds: number[] = [];

		for (const s of scheduleOptions) {
			const entry = LocalNotificationsImpl.createScheduleEntry(s);

			scheduledIds.push(entry.id);

			const notification = UILocalNotification.new();
			notification.fireDate = entry.at ? entry.at : new Date();
			notification.alertTitle = entry.title;
			notification.alertBody = entry.body;

			notification.timeZone = NSTimeZone.defaultTimeZone;
			notification.applicationIconBadgeNumber = entry.badge;

			// these are sent back to the plugin when a notification is received
			const userInfoDict = NSMutableDictionary.alloc().initWithCapacity(4);
			userInfoDict.setObjectForKey(entry.id, 'id');
			userInfoDict.setObjectForKey(entry.title, 'title');
			userInfoDict.setObjectForKey(entry.body, 'body');
			userInfoDict.setObjectForKey(entry.interval, 'interval');
			if ('payload' in entry) {
				userInfoDict.setObjectForKey(JSON.stringify(entry.payload), 'payload');
			}
			notification.userInfo = userInfoDict;

			switch (entry.sound as any) {
				case null:
				case false:
				case '':
					break;
				case undefined:
				case 'default':
					notification.soundName = UILocalNotificationDefaultSoundName;
					break;
				default:
					notification.soundName = entry.sound;
					break;
			}

			// Used when restoring the notification after a reboot
			// Note: This is no longer used
			//entry.repeatInterval = LocalNotificationsImpl.getInterval(entry.interval);

			// notification.soundName = custom..;
			// notification.resumeApplicationInBackground = true;

			UIApplication.sharedApplication.scheduleLocalNotification(notification);
		}
		return scheduledIds;
	}

	addOrProcessNotification(notificationDetails: ReceivedNotification): void {
		if (this.receivedNotificationCallback) {
			this.receivedNotificationCallback(notificationDetails);
		} else {
			this.pendingReceivedNotifications.push(notificationDetails);
		}
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
			if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
				// iOS >= 10
				const center = UNUserNotificationCenter.currentNotificationCenter();
				center.requestAuthorizationWithOptionsCompletionHandler(UNAuthorizationOptions.Alert | UNAuthorizationOptions.Badge | UNAuthorizationOptions.Sound, (granted: boolean, error: NSError) => resolve(granted));
			} else {
				// iOS < 10
				LocalNotificationsImpl.didRegisterUserNotificationSettingsObserver = LocalNotificationsImpl.addObserver('didRegisterUserNotificationSettings', (result) => {
					NSNotificationCenter.defaultCenter.removeObserver(LocalNotificationsImpl.didRegisterUserNotificationSettingsObserver);
					LocalNotificationsImpl.didRegisterUserNotificationSettingsObserver = undefined;
					const granted = result.userInfo.objectForKey('message');
					resolve(granted !== 'false' && granted !== false);
				});

				const types = UIApplication.sharedApplication.currentUserNotificationSettings.types | UIUserNotificationType.Alert | UIUserNotificationType.Badge | UIUserNotificationType.Sound;
				const settings = UIUserNotificationSettings.settingsForTypesCategories(types, null);
				UIApplication.sharedApplication.registerUserNotificationSettings(settings);
			}
		});
	}

	addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				this.receivedNotificationCallback = onReceived;
				for (const pendingReceivedNotification of this.pendingReceivedNotifications) {
					onReceived(pendingReceivedNotification);
				}
				this.pendingReceivedNotifications = [];

				resolve(true);
			} catch (ex) {
				console.log('Error in LocalNotifications.addOnMessageReceivedCallback: ' + ex);
				reject(ex);
			}
		});
	}

	addOnMessageClearedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any> {
		// Not possible on iOS. It looks like this would only work if the notification has categories set, which might not
		// be the case. Therefore, this method is just a placeholder in case users use it without checking the platform
		// they are in. See:
		// - https://stackoverflow.com/questions/44009707/customdismissaction-not-working-for-remote-notifications
		// - https://stackoverflow.com/questions/31929274/know-if-ios-notification-was-dismiss.

		return Promise.resolve(false);
	}

	cancel(id: number): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
					UNUserNotificationCenter.currentNotificationCenter().removePendingNotificationRequestsWithIdentifiers(<any>['' + id]);
					UNUserNotificationCenter.currentNotificationCenter().removeDeliveredNotificationsWithIdentifiers(<any>['' + id]);
					resolve(true);
				} else {
					const scheduled = UIApplication.sharedApplication.scheduledLocalNotifications;
					for (let i = 0, l = scheduled.count; i < l; i++) {
						const noti = scheduled.objectAtIndex(i);
						if (id === +noti.userInfo.valueForKey('id')) {
							UIApplication.sharedApplication.cancelLocalNotification(noti);
							resolve(true);
							return;
						}
					}
					resolve(false);
				}
			} catch (ex) {
				console.log('Error in LocalNotifications.cancel: ' + ex);
				reject(ex);
			}
		});
	}

	cancelAll(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
					UNUserNotificationCenter.currentNotificationCenter().removeAllPendingNotificationRequests();
					UNUserNotificationCenter.currentNotificationCenter().removeAllDeliveredNotifications();
				} else {
					UIApplication.sharedApplication.cancelAllLocalNotifications();
				}
				UIApplication.sharedApplication.applicationIconBadgeNumber = 0;
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
				const scheduledIds = [];

				if (LocalNotificationsImpl.isUNUserNotificationCenterAvailable()) {
					UNUserNotificationCenter.currentNotificationCenter().getPendingNotificationRequestsWithCompletionHandler((notRequests: NSArray<UNNotificationRequest>) => {
						if (notRequests) {
							for (let i = 0; i < notRequests.count; i++) {
								scheduledIds.push(notRequests[i].identifier);
							}
						}
						resolve(scheduledIds.map(Number));
					});
				} else {
					const scheduled = UIApplication.sharedApplication.scheduledLocalNotifications;
					for (let i = 0, l = scheduled.count; i < l; i++) {
						scheduledIds.push(scheduled.objectAtIndex(i).userInfo.valueForKey('id'));
					}
					resolve(scheduledIds.map(Number));
				}
			} catch (ex) {
				console.log('Error in LocalNotifications.getScheduledIds: ' + ex);
				reject(ex);
			}
		});
	}

	schedule(scheduleOptions: ScheduleOptions[]): Promise<Array<number>> {
		return new Promise(async (resolve, reject) => {
			try {
				if (!LocalNotificationsImpl.hasPermission()) {
					this.requestPermission().then(async (granted) => {
						if (granted) {
							resolve(await LocalNotificationsImpl.schedulePendingNotifications(scheduleOptions));
						} else {
							reject('Permission not granted');
						}
					});
				} else {
					resolve(await LocalNotificationsImpl.schedulePendingNotifications(scheduleOptions));
				}
			} catch (ex) {
				console.log('Error in LocalNotifications.schedule: ' + ex);
				reject(ex);
			}
		});
	}
}

class LocalNotificationsDelegateObserverImpl implements DelegateObserver {
	private _owner: WeakRef<LocalNotificationsImpl>;
	private receivedInForeground = false;

	observerUniqueKey = 'nativescript-local-notifications';

	constructor(owner: WeakRef<LocalNotificationsImpl>) {
		this._owner = owner;
	}

	/**
	 * Called when the app was opened by a notification.
	 */
	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, notificationResponse: UNNotificationResponse, completionHandler: () => void, next: () => void): void {
		if (notificationResponse.notification.request.content.userInfo.valueForKey('__NotificationType') !== 'nativescript-local-notifications') {
			next();
			return;
		}
		const request = notificationResponse.notification.request,
			notificationContent = request.content,
			action = notificationResponse.actionIdentifier;

		// let's ignore dismiss actions
		if (action === UNNotificationDismissActionIdentifier) {
			completionHandler();
			return;
		}

		let event = 'default';
		if (action !== UNNotificationDefaultActionIdentifier) {
			event = notificationResponse instanceof UNTextInputNotificationResponse ? 'input' : 'button';
		}

		let response = notificationResponse.actionIdentifier;
		if (response === UNNotificationDefaultActionIdentifier) {
			response = undefined;
		} else if (notificationResponse instanceof UNTextInputNotificationResponse) {
			response = (<UNTextInputNotificationResponse>notificationResponse).userText;
		}

		this._owner.get().addOrProcessNotification({
			id: +request.identifier,
			title: notificationContent.title,
			body: notificationContent.body,
			payload: JSON.parse(notificationResponse.notification.request.content.userInfo.valueForKey('payload')),
			foreground: this.receivedInForeground || UIApplication.sharedApplication.applicationState === UIApplicationState.Active,
			event,
			response,
		});

		this.receivedInForeground = false;

		completionHandler();
	}

	/**
	 * Called when the app is in the foreground.
	 */
	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (presentationOptions: UNNotificationPresentationOptions) => void, next: () => void): void {
		if (notification.request.content.userInfo.valueForKey('__NotificationType') !== 'nativescript-local-notifications' || notification.request.trigger instanceof UNPushNotificationTrigger) {
			next();
			return;
		}

		this.receivedInForeground = true;

		if (notification.request.content.userInfo.valueForKey('forceShowWhenInForeground') || notification.request.content.userInfo.valueForKey('priority')) {
			completionHandler(UNNotificationPresentationOptions.Badge | UNNotificationPresentationOptions.Sound | UNNotificationPresentationOptions.Alert);
		} else {
			completionHandler(UNNotificationPresentationOptions.Badge | UNNotificationPresentationOptions.Sound);
		}
	}
}

const instance = new LocalNotificationsImpl();
export const LocalNotifications = instance;
