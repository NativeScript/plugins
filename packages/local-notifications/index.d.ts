// Export any shared classes, constants, etc.
export * from './common';

import { LocalNotificationsApi, LocalNotificationsCommon, ReceivedNotification, ScheduleOptions } from './common';

export declare class LocalNotificationsImpl extends LocalNotificationsCommon implements LocalNotificationsApi {
	hasPermission(): Promise<boolean>;
	requestPermission(): Promise<boolean>;
	addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any>;
	addOnMessageClearedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any>;
	cancel(id: number): Promise<boolean>;
	cancelAll(): Promise<void>;
	getScheduledIds(): Promise<Array<number>>;
	schedule(scheduleOptions: ScheduleOptions[]): Promise<Array<number>>;
}
export declare const LocalNotifications: LocalNotificationsImpl;
