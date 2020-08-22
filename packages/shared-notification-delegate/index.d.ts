import { SharedNotificationDelegateCommon } from './common';
export interface DelegateObserver {
    userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: any /* UNUserNotificationCenter */, response: any /* UNNotificationResponse */, completionHandler: () => void, next: () => void): void;
    userNotificationCenterOpenSettingsForNotification?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, stop: () => void, next: () => void): void;
    userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, completionHandler: (p1: any /* UNNotificationPresentationOptions */) => void, next: () => void): void;
    observerUniqueKey?: any;
}
export declare class SharedNotificationDelegateImpl extends SharedNotificationDelegateCommon {
    _observers: Array<{
        observer: DelegateObserver;
        priority: number;
    }>;
    disableUnhandledWarning: boolean;
    private delegate;
    constructor();
    static isUNUserNotificationCenterAvailable(): boolean;
    addObserver(observer: DelegateObserver, priority?: number): void;
    removeObserver(observer: DelegateObserver): void;
    removeObserverByUniqueKey(key: string): void;
    clearObservers(): void;
    private sortObservers;
}
export declare const SharedNotificationDelegate: SharedNotificationDelegateImpl;
