import { DemoSharedBase } from '../utils';
import { Color } from '@nativescript/core';
import * as localNotifications from '@nativescript/local-notifications';
import { LocalNotifications, ScheduleOptions } from '@nativescript/local-notifications';

export class DemoSharedLocalNotifications extends DemoSharedBase {
	notification: string;

	constructor() {
		super();
		LocalNotifications.addOnMessageReceivedCallback((notificationData) => {
			console.log('Notification received: ' + JSON.stringify(notificationData));
			this.set('notification', 'Notification received: ' + JSON.stringify(notificationData));
		});
	}

	doCheckHasPermission(): void {
		LocalNotifications.hasPermission().then((granted) => {
			alert({
				title: 'Permission granted?',
				message: granted ? 'YES' : 'NO',
				okButtonText: 'OK',
			});
		});
	}

	doRequestPermission(): void {
		LocalNotifications.requestPermission().then((granted) => {
			alert({
				title: 'Permission granted?',
				message: granted ? 'YES' : 'NO',
				okButtonText: 'OK',
			});
		});
	}

	doScheduleWithButtons(): void {
		const options: Array<ScheduleOptions> = [
			{
				id: 1,
				title: 'THE TITLE',
				subtitle: 'The subtitle',
				body: 'The big body. The big body. The big body. The big body. The big body. The big body. The big body. The big body. The big fat body. The big fat body. The big fat body. The big fat body. The big fat body. The big fat body. The big fat body.',
				bigTextStyle: true, // Allow more than 1 row of the 'body' text
				sound: 'customsound',
				color: new Color('green'),
				forceShowWhenInForeground: true,
				channel: 'My Awesome Channel', // not that this is revealed in the notification tray when you longpress it on Android
				ticker: 'Special ticker text (Android only)',
				at: new Date(new Date().getTime() + 10 * 1000),
				notificationLed: true,
				actions: [
					{
						id: 'yes',
						type: 'button',
						title: 'Yes (and launch app)',
						launch: true,
					},
					{
						id: 'no',
						type: 'button',
						title: 'No',
						launch: false,
					},
				],
			},
			{
				title: 'Generated ID',
				at: new Date(new Date().getTime() + 5 * 1000),
			},
		];
		LocalNotifications.schedule(options)
			.then((scheduledIds: Array<number>) => {
				alert({
					title: 'Notification scheduled',
					message: `ID: ${JSON.stringify(scheduledIds)}`,
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doSchedule error: ' + error));
	}

	doScheduleNoSound(): void {
		LocalNotifications.schedule([
			{
				id: 2,
				title: 'Red Alert',
				subtitle: 'Remember this game?',
				icon: 'res://ic_stat_notify',
				color: new Color('red'),
				image: 'https://images-na.ssl-images-amazon.com/images/I/61mx-VbrS0L.jpg',
				thumbnail: 'https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg',
				forceShowWhenInForeground: false, // default
				body: 'RTS FTW!',
				sound: null,
				at: new Date(new Date().getTime() + 10 * 1000),
			},
		])
			.then(() => {
				alert({
					title: 'Notification scheduled',
					message: 'ID: 2',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleSilent error: ' + error));
	}

	doScheduleAndSetBadgeNumber(): void {
		LocalNotifications.schedule([
			{
				id: 3,
				title: 'Hi',
				subtitle: 'Whatsubtitle',
				image: 'https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg',
				thumbnail: true,
				forceShowWhenInForeground: true,
				// body: 'You should see a \'3\' somewhere',
				at: new Date(new Date().getTime() + 10 * 1000),
				badge: 3,
				payload: {
					deeplink: 'test/test',
				},
			},
		])
			.then(() => {
				alert({
					title: 'Notification scheduled',
					message: 'ID: 3',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleAndSetBadgeNumber error: ' + error));
	}

	doScheduleId4GroupedWithCustomIcon(): void {
		LocalNotifications.schedule([
			{
				id: 4,
				title: 'Custom icon',
				body: 'Check it out!',
				thumbnail: 'https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg',
				icon: 'res://ic_stat_smiley',
				at: new Date(new Date().getTime() + 10 * 1000),
				groupedMessages: ['The first', 'Second', 'Keep going', 'one more..', 'OK Stop'], // android only
				groupSummary: 'Summary of the grouped messages above', // android only
			},
		])
			.then(() => {
				alert({
					title: 'Notification scheduled',
					message: 'ID: 4',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleId4WithCustomIcon error: ' + error));
	}

	doScheduleId5WithInput(): void {
		LocalNotifications.schedule([
			{
				id: 5,
				thumbnail: true,
				title: 'Richard wants your input',
				body: '"Hey man, what do you think of the new design?" (swipe down to reply, or tap to open the app)',
				forceShowWhenInForeground: true,
				at: new Date(new Date().getTime() + 10 * 1000),
				actions: [
					{
						id: 'input-richard',
						type: 'input',
						title: 'Tap here to reply',
						placeholder: 'Type to reply..',
						submitLabel: 'Reply',
						launch: true,
						editable: true,
						// choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
					},
				],
			},
		])
			.then(() => {
				alert({
					title: 'Notification scheduled',
					message: 'ID: 5',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleId5WithInput error: ' + error));
	}

	doScheduleEveryMinute(): void {
		LocalNotifications.schedule([
			{
				id: 6,
				title: 'Every minute!',
				interval: 'minute', // some constant
				body: "I'm repeating until cancelled",
				icon: 'res://ic_stat_smiley',
				thumbnail: 'res://ic_stat_notify',
				forceShowWhenInForeground: true,
				at: new Date(new Date().getTime() + 10 * 1000),
			},
		])
			.then(() => {
				alert({
					title: 'Notification scheduled',
					message: 'ID: 6, repeating',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleEveryMinute error: ' + error));
	}

	doScheduleMultiple(): void {
		LocalNotifications.schedule([
			{
				id: 7,
				title: 'Multiple - id 7',
				icon: 'res://ic_stat_smiley',
				at: new Date(new Date().getTime() + 5 * 1000),
			},
			{
				id: 8,
				title: 'Multiple - id 8',
				icon: 'res://ic_stat_notify',
				at: new Date(new Date().getTime() + 6 * 1000),
			},
			{
				id: 9,
				title: 'Multiple - id 9',
				icon: 'res://ic_stat_smiley',
				at: new Date(new Date().getTime() + 7 * 1000),
			},
			{
				id: 10,
				title: 'Multiple - id 10',
				icon: 'res://ic_stat_smiley',
				at: new Date(new Date().getTime() + 8 * 1000),
			},
		])
			.then(() => {
				alert({
					title: 'Notification 7-10 scheduled',
					okButtonText: 'OK, thanks',
				});
			})
			.catch((error) => console.log('doScheduleMultiple error: ' + error));
	}

	doGetScheduledIds(): void {
		LocalNotifications.getScheduledIds()
			.then((ids) => {
				alert({
					title: "Scheduled ID's",
					message: "ID's: " + ids,
					okButtonText: 'Sweet!',
				});
			})
			.catch((error) => console.log('doGetScheduledIds error: ' + error));
	}

	doCancelAll(): void {
		LocalNotifications.cancelAll()
			.then(() => {
				alert({
					title: 'All canceled',
					okButtonText: 'Awesome!',
				});
			})
			.catch((error) => console.log('doCancelAll error: ' + error));
	}

	doCancelId6(): void {
		LocalNotifications.cancel(6)
			.then((foundAndCanceled) => {
				if (foundAndCanceled) {
					alert({
						title: 'ID 6 canceled',
						okButtonText: 'OK, coolness',
					});
				} else {
					alert({
						title: 'No ID 6 was scheduled',
						okButtonText: 'OK, woops',
					});
				}
			})
			.catch((error) => console.log('doCancelId6 error: ' + error));
	}
}
