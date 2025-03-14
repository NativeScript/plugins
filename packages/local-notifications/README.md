# @nativescript/local-notifications

## Contents

* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/local-notifications](#use-nativescriptlocal-notifications)
	* [Import the plugin](#import-the-plugin)
	* [Request for permissions](#request-for-permissions)
	* [Schedule a notification](#schedule-a-notification)
	* [Get the IDs of all the scheduled notifications](#get-the-ids-of-all-the-scheduled-notifications)
	* [Cancel a scheduled notification](#cancel-a-scheduled-notification)
	* [Listen to a notification tap event](#listen-to-a-notification-tap-event)
* [API](#api)
	* [schedule()](#schedule)
		* [ScheduleOptions](#scheduleoptions)
			* [NotificationAction](#notificationaction)
	* [addOnMessageReceivedCallback()](#addonmessagereceivedcallback)
	* [addOnMessageClearedCallback()](#addonmessageclearedcallback)
	* [getScheduledIds()](#getscheduledids)
	* [cancel()](#cancel)
	* [cancelAll()](#cancelall)
	* [requestPermission()](#requestpermission)
	* [hasPermission()](#haspermission)

## Intro
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@nativescript/local-notifications.svg
[npm-url]: https://npmjs.org/package/@nativescript/local-notifications
[downloads-image]: https://img.shields.io/npm/dm/@nativescript/local-notifications.svg

A plugin that allows your app to show notifications when the app is not running.
Just like remote push notifications, but a few orders of magnitude easier to set up.


## Installation

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/local-notifications
```

## Use @nativescript/local-notifications

> **Note: Advanced!** If on `iOS 10+` notifications are not being received or the method `addOnMessageReceivedCallback` is not invoked, you can try wiring to the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate?language=objc)
<!-- TODO: UNUserNotificationCenterDelegate Example -->


### Import the plugin

To import the plugin, use either of the 2 ways below.

```ts
// either
import { LocalNotifications } from '@nativescript/local-notifications';
// or (if that doesn't work for you)
import * as LocalNotifications from '@nativescript/local-notifications';
```

### Request for permissions

By default, the [schedule](#schedule) method prompts the user for permission for you. For a manual permission request, use the [requestPermission](#requestpermission) method:

```typescript
// then use it as:
LocalNotifications.requestPermission();
```
### Schedule a notification

To schedule a notification, call the [schedule](#schedule) method and pass it an array of notification objects. For a list of members of a notification object, see [ScheduleOptions](#scheduleoptions). 

```js
LocalNotifications.schedule([
	{
		id: 1, // generated id if not set
		title: 'The title',
		body: 'Recurs every minute until cancelled',
		ticker: 'The ticker',
		color: new Color('red'),
		badge: 1,
		groupedMessages: ['The first', 'Second', 'Keep going', 'one more..', 'OK Stop'], //android only
		groupSummary: 'Summary of the grouped messages above', //android only
		ongoing: true, // makes the notification ongoing (Android only)
		icon: 'res://heart',
		image: 'https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg',
		thumbnail: true,
		interval: { 'minute': 15 }, // repeat the notification every 15 minutes
		displayImmediately: true, // display the notification immediately when using a ScheduleIntervalObject
		channel: 'My Channel', // default: 'Channel'
		sound: isAndroid ? 'customsound' : 'customsound.wav',
		at: new Date(new Date().getTime() + 10 * 1000), // 10 seconds from now
	},
]).then(
	(scheduledIds) => {
		console.log('Notification id(s) scheduled: ' + JSON.stringify(scheduledIds));
	},
	(error) => {
		console.log('scheduling error: ' + error);
	}
);
```

### Get the IDs of all the scheduled notifications

To get the IDs of all the scheduled notifications, call the [getScheduledIds](#getscheduledids) method:

```ts
LocalNotifications.getScheduledIds().then((ids: number[]) => {
  console.log("ID's: " + ids)
})
```

### Cancel a scheduled notification

To cancel a scheduled notification, use the [cancel](#cancel) method.

```ts
LocalNotifications.cancel(5).then((foundAndCanceled: boolean) => {
	if (foundAndCanceled) {
		console.log("OK, it's gone!");
	} else {
		console.log('No ID 5 was scheduled');
	}
});
```

### Listen to a notification tap event

Tapping a notification in the notification center will launch your app.

On iOS it can even be triggered when your app is in the foreground and a notification is received.

To handle a notification tap, call the [addMessageReceivedCallback](#addonmessagereceivedcallback) method and pass it a callback function.  The callback receives a notification object of type [ReceivedNotification](#receivednotification).

```js
LocalNotifications.addOnMessageReceivedCallback((notification) => {
	console.log('ID: ' + notification.id);
	console.log('Title: ' + notification.title);
	console.log('Body: ' + notification.body);
}).then(() => {
	console.log('Listener added');
});
```

## API

### schedule()

```ts
scheduledNotificationsIDs: Array<number> = await LocalNotifications.schedule(scheduleOptions)
```

Schedules the specified [scheduleOptions](#scheduleoptions) notification(s), if the user has granted the permission. If the user has not been prompted for permission, it prompts the user for permission and schedules the notification(s) if permission is granted. For a manual permission request, use the [requestPermission](#requestpermission) method.

---
#### ScheduleOptions

| Property                      | Type | Description 
|:----------|:------------|:------------
| `id`                        | `number` | _Optional_: A unique notification identifier. Will be generated if not set.                                                                                                                                                                                                                                                           |
| `title`                     | `string` |  _Optional_: The title that is shown in the statusbar.                                                                                                                                                                                                                   |
| `subtitle`                  | `string` | _Optional_: Shown below the title on iOS, and next to the App name on Android. Default not set. All android and iOS `>= 10` only.                                                                                                                                                                                                                                |
| `body`                      | `string` | _Optional_: The text below the title. If not provided, the subtitle or title (in this order or priority) will be swapped for it on iOS, as iOS won't display notifications without a body. Default not set on Android, `' '` on iOS, as otherwise the notification won't launch.                                                                       |
| `color`                     | `string` | _Optional_: (`Android-only`)Custom color for the notification icon and title that will be applied when the notification center is expanded.                                                                                                                                                                      |
| `bigTextStyle`              | `boolean` | _Optional_: (`Android-only`)Allow more than 1 line of the body text to show in the notification centre. Mutually exclusive with `image`. Default `false`.                                                                                                                              |
| `groupedMessages`           | `Array<string>` | _Optional_: An array of at most 5 messages that would be displayed using android's notification [inboxStyle](https://developer.android.com/reference/android/app/Notification.InboxStyle.html). Note: The array would be trimmed from the top if the messages exceed five. Default not set .                                                                    |
| `groupSummary`              | `string` | _Optional_: An [inboxStyle](https://developer.android.com/reference/android/app/Notification.InboxStyle.html) notification summary. Default empty                                                                                                                                                                                                              |
| `ticker`                    | `string` | _Optional_: On Android you can show a different text in the statusbar, instead of the `body`. Default not set, so `body` is used.                                                                                                                                                                                                                              |
| `at`                        | `Date` | _Optional_: A JavaScript Date object indicating when the notification should be shown. Default not set (the notification will be shown immediately).                                                                                                                                                                                                           |
| `badge`                     |  `boolean` |_Optional_: On iOS (and some Android devices) you see a number on top of the app icon. On most Android devices you'll see this number in the notification center. Default not set (0).                                                                                                                                                                         |
| `sound`                     |  `string` |_Optional_: Notification sound. For custom notification sound, copy the file to `App_Resources/iOS` and `App_Resources/Android/src/main/res/raw`. Set this to "default" (or do not set at all) in order to use default OS sound. Set this to `null` to suppress sound.                                                                                         |
| `interval`                  | `ScheduleInterval` \| `ScheduleIntervalObject` | _Optional_:  Using `ScheduleInterval` sets to one of `second`, `minute`, `hour`, `day`, `week`, `month`, `year`, number (in days) if you want a recurring notification when using `at`. <br /><br /> Using `ScheduleIntervalObject` an object of `{ [ScheduleInterval]: number }` to display a notifcation after the interval has elapsed and repeated indefinitely until cancelled.<br /><br />**Note**: iOS 10+<br />The minimum interval required is 60 seconds. |
| `displayImmediately` | `boolean` | _Optional_: Will display a scheduled notification immediately when defining an `interval` with `ScheduleIntervalObject` |
| `icon`                      |  `string` |_Optional_: On Android you can set a custom icon in the system tray. Pass in `res://filename` (without the extension) which lives in `App_Resouces/Android/drawable` folders. If not passed, we'll look there for a file named `ic_stat_notify.png`. By default the app icon is used. Android < Lollipop (21) only (see `silhouetteIcon` below). See [icon and silhouetteIcon Options (Android-only)](#icon-and-silhouetteicon-options-android-only) for more details             |
| `silhouetteIcon`            |  `string` |_Optional_: Same as `icon`, but should be an alpha-only image and will be used in Android >= Lollipop (21). Defaults to `res://ic_stat_notify_silhouette`, or the app icon if not present. See [icon and silhouetteIcon Options (Android-only)](#icon-and-silhouetteicon-options-android-only) for more details                                                                                                                                                                                   |
| `image`                     | `string` |_Optional_: A url of the image to use as an expandable notification image. On Android this is mutually exclusive with `bigTextStyle`.                                                                                                                                                                                                               |
| `thumbnail`                 |  `boolean` | `string` | _Optional_: (`Android-only`)Custom thumbnail/icon to show in the notification center (to the right) on Android, this can be either: `true` (if you want to use the `image` as the thumbnail), a resource URL (that lives in the `App_Resouces/Android/drawable` folders, e.g.: `res://filename`), or a http URL from anywhere on the web. Default not set. |
| `ongoing`                   | `boolean` |_Optional_: (`Android-only`) Sets whether the notification is `ongoing`. Ongoing notifications cannot be dismissed by the user, so your application must take care of canceling them.                                                                                                                         |
| `channel`                   | `string` |_Optional_: Sets the channel name for `Android API >= 26`, which is shown when the user longpresses a notification.  Default is `Channel`.                                                                                                                                                                       |
| `forceShowWhenInForeground` | `boolean` | _Optional_: Indicates whether to always show the notification. On iOS < 10 this is ignored (the notification is not shown), and on newer Androids it's currently ignored as well (the notification always shows, per platform default).                                                                                              |
| `priority`                  | `number` |_Optional_: Overrides `forceShowWhenInForeground` if set. This can be set to `2` for Android `"heads-up"` notifications. See [#114](https://github.com/EddyVerbruggen/nativescript-local-notifications/issues/114) for details. Default is `0`.                                                                                                             |
| `actions`                   |  [NotificationAction](#notificationaction) | _Optional_: An array of [NotificationAction](#notificationaction) objects for adding buttons or text input to a notification with which the use can interact.                                                                                                                                                                                                                                         |
| `notificationLed`           |  `boolean` \| [Color](https://docs.nativescript.org/api-reference/classes/color) |_Optional_: (`Android Only`) Indicates whether to enable the notification LED light on Android (if supported by the device), this can be either: `true` (if you want to use the default color), or a custom color for the notification LED light (if supported by the device).Default not set.                                                                                  |

#### NotificationAction

| Property  | Type | Description 
|:----------|:------------|:------------
| `id`          |`string` | An id so you can easily distinguish your actions.                                                                      
| `type`        | `'button' \| 'input'`| The type of the view.                                                      
| `title`       |  `string` | _Optional_: The label for `type` = `button`.                                                                                       
| `launch`      | `boolean` | _Optional_: Launch the app when the action completes. This will only work in apps targeting Android 11 or lower (target SDK < 31). 
| `submitLabel` |  `string` | _Optional_: The submit button label for `type` = `input`.                                                                          
| `placeholder` |   `string` |  _Optional_: The placeholder text for `type` = `input`.                                                                             
| `choices` | `Array<string>` | _Optional_: (`Android-only`) For `type` = `'input'`
| `editable` | `boolean` | _Optional_: (`Android-only`) For `type` = `'input'`. Defaults to  `true`

### icon and silhouetteIcon Options (Android-only)

These options default to `res://ic_stat_notify` and `res://ic_stat_notify_silhouette` respectively, or the app icon if not present.


[These are the official icon size guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_status_bar.html),
and [here's a great guide on how to easily create these icons on Android](https://developer.android.com/studio/write/image-asset-studio).

| Density qualifier | px      | dpi         |
|-------------------|---------|-------------|
| ldpi              | 18 × 18 | 120         |
| mdpi              | 24 × 24 | 160         |
| hdpi              | 36 × 36 | 240         |
| xhdpi             | 48 × 48 | 320         |
| xxhdpi            | 72 × 72 | 480         |
| xxxhdpi           | 96 × 96 | 640 approx. |

**Source:** [Density Qualifier Docs](https://developer.android.com/guide/topics/resources/providing-resources.html#DensityQualifier)

### addOnMessageReceivedCallback()

```js
LocalNotifications.addOnMessageReceivedCallback((notification: ReceivedNotification) => {
	//Handle the received notification
}).then(() => {
	console.log('Listener added');
});
```
Responds to a notification tap event.

#### ReceivedNotification

| Property | Type | Description
|:---------|:-----|:---------
|`id`|`number`| _Optional_: The notification id.
| `foreground` | `boolean` | _Optional_: Whether the app was in foreground when the notification was received
| `title` | `string` | _Optional_: The notification title.
| `body` | `string` | _Optional_: The notification body.
| `event` | `string` | _Optional_: Whether the response was through a `button` or an `input`
| `response` | `string` | _Optional_: The user's response to the notification, either what they input in the text field or the option chosen from the button. 
| `payload` | `any` | _Optional_: The data sent to the user with the notification

---
### addOnMessageClearedCallback()

```js
LocalNotifications.addOnMessageClearedCallback((notification: ReceivedNotification) => {
	//Handle the received notification
}).then(() => {
	console.log('Listener added');
});
```
Responds to a notification clear event.
See [ReceivedNotification](#receivednotification) for more info.

---
### getScheduledIds()

```js
LocalNotifications.getScheduledIds().then((ids: number[]) => {
	console.log("ID's: " + ids);
});
```

Returns the ids of all the scheduled notifications.

---
### cancel()

```js
LocalNotifications.cancel(id).then((foundAndCanceled: boolean) => {
	if (foundAndCanceled) {
		//
	} else {
		//
	}
});
```
Cancels the scheduled notification with the specified id.

| Parameter | Type | Description
|:----------|:------|:-----------
|`id` | `number` | The of the scheduled notification to be cancelled. 

---
### cancelAll()

```js
LocalNotifications.cancelAll();
```

Cancels all the scheduled notifications.

---
### requestPermission() 

```js
LocalNotifications.requestPermission().then((granted) => {
	console.log('Permission granted? ' + granted);
});
```

Requests for the user's permissions for the app to send her notifications. 
You only need to call this method on iOS. If the permission has already been granted, it returns `true`. Otherwise, it returns `false`.

---
### hasPermission()

```js
LocalNotifications.hasPermission().then((granted) => {
	console.log('Permission granted? ' + granted);
});
```

Checks if the application has permission to notify the user.
