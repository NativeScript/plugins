# @nativescript/shared-notification-delegate

This project aims to prevent the shortcomings that come from the iOS implementation of only allowing a single delegate.

## Installation

```cli
npm install @nativescript/shared-notification-delegate
```

## Usage

Import `SharedNotificationDelegate` and add Observers

```typescript
import { SharedNotificationDelegate } from '@nativescript/shared-notification-delegate';
...

SharedNotificationDelegate.addObserver({
    delegateUniqueKey: "myUniqueKey", // ensures uniqueness, if not set or is null/undefined, allows multiple of the same
    userNotificationCenterWillPresentNotificationWithCompletionHandler: (notificationCenter, notification, handler, stop, next) => {

        console.log("notification received by observer");
        // is this notification something I should handle?
        if (shouldHandleThis) {
            // do stuff
            // intercept it and show alert
            handler(UNNotificationPresentationOptions.Alert);
            return;
        }
        // not mine, next should handle
        next();
    }
});
```

## API

### SharedNotificationDelegate Methods

| Method | Returns | Description
|:-------|:--------|:-----------
| `addObserver(observer: DelegateObserver, priority?: number)` |  `void` | Adds a delegate observer of a certain priority (lower means first). Default priority is `100`. 
| `removeObserver(observer: DelegateObserver)` | `void` | Removes a DelegateObserver        
| `removeObserverByUniqueKey(key: any)`| `void` | Removes a DelegateObserver by its unique key            

### DelegateObserver Interface

A DelegateObserver can implement 3 methods from [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate?language=objc) with the addition of some details:

```typescript

interface DelegateObserver {
	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void, next: () => void): void;

	userNotificationCenterOpenSettingsForNotification?(center: UNUserNotificationCenter, notification: UNNotification , stop: () => void, next: () => void): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter , notification: UNNotification , completionHandler: (p1: UNNotificationPresentationOptions) => void, next: () => void): void;

	/**
	 * if set to not null/undefined, will ensure only one is registered
	 */
	delegateUniqueKey?: any;
}
```

- All the functions that are parameters of the DelegateObserver object's methods are called asynchronously in a chain.

- Calling a `completionHandler` immediately stops the observer chain. `next()` **must** be called if the method will not be handling the notification.

- Calling `stop()` on `userNotificationCenterOpenSettingsForNotification` prevents the event from bubbling to the rest.

- Only one method will be processed at a time, this means you can take as long as you want (including making http calls, for example), as long as you just call `completionHandler`, `stop` and `next` when you're finished.

- If a DelegateObserver has a `delegateUniqueKey`, the `SharedNotificationDelegate` will ensure only the latest copy of the observer is present. This is especially useful if debugging with HMR, which may add multiple observers on application reload.

## License

Apache License Version 2.0, January 2004
