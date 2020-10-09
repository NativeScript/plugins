# NativeScript Local Notifications Plugin

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/@nativescript/local-notifications.svg
[npm-url]: https://npmjs.org/package/@nativescript/local-notifications
[downloads-image]: http://img.shields.io/npm/dm/@nativescript/local-notifications.svg

The Local Notifications plugin allows your app to show notifications when the app is not running.
Just like remote push notifications, but a few orders of magnitude easier to set up.

## Installation

From the command prompt go to your app's root folder and execute:

#### NativeScript 7+:

```bash
ns plugin add @nativescript/local-notifications
```

#### NativeScript prior to 7:

```bash
tns plugin add nativescript-local-notifications@4.2.1
```

## Setup (since plugin version 3.0.0)

Add this so for iOS 10+ we can do some wiring (set the iOS `UNUserNotificationCenter.delegate`, to be precise).
Not needed if your app loads the plugin on startup anyway.

You'll know you need this if on iOS 10+ notifications are not received by your app or `addOnMessageReceivedCallback` is not invoked... better safe than sorry, though!

```typescript
// either
import { LocalNotifications } from '@nativescript/local-notifications';
// or (if that doesn't work for you)
import * as LocalNotifications from '@nativescript/local-notifications';

// then use it as:
LocalNotifications.hasPermission();
```

### NativeScript-Angular

This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/feedback) I built using Angular.

There's also a simple Angular [demo in this repo](https://github.com/EddyVerbruggen/nativescript-local-notifications/tree/master/demo-ng):

### NativeScript-Vue

There is a [Vue demo](https://github.com/EddyVerbruggen/nativescript-local-notifications/tree/master/demo-vue):

## Plugin API

### schedule

On iOS you need to ask permission to schedule a notification.
You can have the `schedule` funtion do that for you automatically (the notification will be scheduled in case the user granted permission), or you can manually invoke `requestPermission` if that's your thing.

You can pass several options to this function, everything is optional:

| option                      | description                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                        | A number so you can easily distinguish your notifications. Will be generated if not set.                                                                                                                                                                                                                                                           |
| `title`                     | The title which is shown in the statusbar. Default not set.                                                                                                                                                                                                                                                                                        |
| `subtitle`                  | Shown below the title on iOS, and next to the App name on Android. Default not set. All android and iOS >= 10 only.                                                                                                                                                                                                                                |
| `body`                      | The text below the title. If not provided, the subtitle or title (in this order or priority) will be swapped for it on iOS, as iOS won't display notifications without a body. Default not set on Android, `' '` on iOS, as otherwise the notification won't show up at all.                                                                       |
| `color`                     | Custom color for the notification icon and title that will be applied when the notification center is expanded. (**Android Only**)                                                                                                                                                                                                                 |
| `bigTextStyle`              | Allow more than 1 line of the body text to show in the notification centre. Mutually exclusive with `image`. Default `false`. (**Android Only**)                                                                                                                                                                                                   |
| `groupedMessages`           | An array of at most 5 messages that would be displayed using android's notification [inboxStyle](https://developer.android.com/reference/android/app/Notification.InboxStyle.html). Note: The array would be trimmed from the top if the messages exceed five. Default not set                                                                     |
| `groupSummary`              | An [inboxStyle](https://developer.android.com/reference/android/app/Notification.InboxStyle.html) notification summary. Default empty                                                                                                                                                                                                              |
| `ticker`                    | On Android you can show a different text in the statusbar, instead of the `body`. Default not set, so `body` is used.                                                                                                                                                                                                                              |
| `at`                        | A JavaScript Date object indicating when the notification should be shown. Default not set (the notification will be shown immediately).                                                                                                                                                                                                           |
| `badge`                     | On iOS (and some Android devices) you see a number on top of the app icon. On most Android devices you'll see this number in the notification center. Default not set (0).                                                                                                                                                                         |
| `sound`                     | Notification sound. For custom notification sound (iOS only), copy the file to `App_Resources/iOS`. Set this to "default" (or do not set at all) in order to use default OS sound. Set this to `null` to suppress sound.                                                                                                                           |
| `interval`                  | Set to one of `second`, `minute`, `hour`, `day`, `week`, `month`, `year`, number (in days) if you want a recurring notification.                                                                                                                                                                                                                   |
| `icon`                      | On Android you can set a custom icon in the system tray. Pass in `res://filename` (without the extension) which lives in `App_Resouces/Android/drawable` folders. If not passed, we'll look there for a file named `ic_stat_notify.png`. By default the app icon is used. Android < Lollipop (21) only (see `silhouetteIcon` below).               |
| `silhouetteIcon`            | Same as `icon`, but for Android >= Lollipop (21). Should be an alpha-only image. Defaults to `res://ic_stat_notify_silhouette`, or the app icon if not present.                                                                                                                                                                                    |
| `image`                     | _URL_ (`http..`) of the image to use as an expandable notification image. On Android this is mutually exclusive with `bigTextStyle`.                                                                                                                                                                                                               |
| `thumbnail`                 | Custom thumbnail/icon to show in the notification center (to the right) on Android, this can be either: `true` (if you want to use the `image` as the thumbnail), a resource URL (that lives in the `App_Resouces/Android/drawable` folders, e.g.: `res://filename`), or a http URL from anywhere on the web. (**Android Only**). Default not set. |
| `ongoing`                   | Default is (`false`). Set whether this is an `ongoing` notification. Ongoing notifications cannot be dismissed by the user, so your application must take care of canceling them. (**Android Only**)                                                                                                                                               |
| `channel`                   | Default is (`Channel`). Set the channel name for Android API >= 26, which is shown when the user longpresses a notification. (**Android Only**)                                                                                                                                                                                                    |
| `forceShowWhenInForeground` | Default is `false`. Set to `true` to always show the notification. Note that on iOS < 10 this is ignored (the notification is not shown), and on newer Androids it's currently ignored as well (the notification always shows, per platform default).                                                                                              |
| `priority`                  | Default is `0`. Will override `forceShowWhenInForeground` if set. This can be set to `2` for Android "heads-up" notifications. See [#114](https://github.com/EddyVerbruggen/nativescript-local-notifications/issues/114) for details.                                                                                                              |
| `actions`                   | Add an array of `NotificationAction` objects (see below) to add buttons or text input to a notification.                                                                                                                                                                                                                                           |
| `notificationLed`           | Enable the notification LED light on Android (if supported by the device), this can be either: `true` (if you want to use the default color), or a custom color for the notification LED light (if supported by the device). (**Android Only**). Default not set.                                                                                  |

#### `NotificationAction`

| option        | description                                       |
| ------------- | ------------------------------------------------- |
| `id`          | An id so you can easily distinguish your actions. |
| `type`        | Either `button` or `input`.                       |
| `title`       | The label for `type` = `button`.                  |
| `launch`      | Launch the app when the action completes.         |
| `submitLabel` | The submit button label for `type` = `input`.     |
| `placeholder` | The placeholder text for `type` = `input`.        |

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
		interval: 'minute',
		channel: 'My Channel', // default: 'Channel'
		sound: 'customsound-ios.wav', // falls back to the default sound on Android
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

### Notification icons (Android)

These options default to `res://ic_stat_notify` and `res://ic_stat_notify_silhouette` respectively, or the app icon if not present.

`silhouetteIcon` should be an alpha-only image and will be used in Android >= Lollipop (21).

[These are the official icon size guidelines](https://developer.android.com/guide/practices/ui_guidelines/icon_design_status_bar.html),
and [here's a great guide on how to easily create these icons on Android](https://developer.android.com/studio/write/image-asset-studio).

| Density qualifier | px      | dpi         |
| ----------------- | ------- | ----------- |
| ldpi              | 18 × 18 | 120         |
| mdpi              | 24 × 24 | 160         |
| hdpi              | 36 × 36 | 240         |
| xhdpi             | 48 × 48 | 320         |
| xxhdpi            | 72 × 72 | 480         |
| xxxhdpi           | 96 × 96 | 640 approx. |

**Source:** [Density Qualifier Docs](https://developer.android.com/guide/topics/resources/providing-resources.html#DensityQualifier)

### addOnMessageReceivedCallback

Tapping a notification in the notification center will launch your app.
But what if you scheduled two notifications and you want to know which one the user tapped?

Use this function to have a callback invoked when a notification was used to launch your app.
Note that on iOS it will even be triggered when your app is in the foreground and a notification is received.

```js
LocalNotifications.addOnMessageReceivedCallback((notification) => {
	console.log('ID: ' + notification.id);
	console.log('Title: ' + notification.title);
	console.log('Body: ' + notification.body);
}).then(() => {
	console.log('Listener added');
});
```

### getScheduledIds

If you want to know the ID's of all notifications which have been scheduled, do this:

```js
LocalNotifications.getScheduledIds().then((ids) => {
	console.log("ID's: " + ids);
});
```

### cancel

If you want to cancel a previously scheduled notification (and you know its ID), you can cancel it:

```js
LocalNotifications.cancel(5 /* the ID */).then((foundAndCanceled) => {
	if (foundAndCanceled) {
		console.log("OK, it's gone!");
	} else {
		console.log('No ID 5 was scheduled');
	}
});
```

### cancelAll

If you just want to cancel all previously scheduled notifications, do this:

```js
LocalNotifications.cancelAll();
```

### requestPermission

On Android you don't need permission, but on iOS you do. Android will simply return true.

If the `requestPermission` or `schedule` function previously ran the user has already been prompted to grant permission.
If the user granted permission this function returns `true`, but if he denied permission this function will return `false`,
since an iOS can only request permission once. In which case the user needs to go to the iOS settings app and manually
enable permissions for your app.

```js
LocalNotifications.requestPermission().then((granted) => {
	console.log('Permission granted? ' + granted);
});
```

### hasPermission

On Android you don't need permission, but on iOS you do. Android will simply return true.

If the `requestPermission` or `schedule` functions previously ran you may want to check whether or not the user granted permission:

```js
LocalNotifications.hasPermission().then((granted) => {
	console.log('Permission granted? ' + granted);
});
```
