import { Observable, EventData, Page, isIOS } from '@nativescript/core';
import { SharedNotificationDelegate } from '@nativescript/shared-notification-delegate';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export let invokeOnRunLoop = (function () {
  const runloop = CFRunLoopGetMain();
  return function (func) {
    CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
    CFRunLoopWakeUp(runloop);
  };
}());

export class DemoModel extends Observable {
  
  message: string;
  notificationCenter: UNUserNotificationCenter;

  constructor() {
    super();
    if (isIOS) {
      this.set("message", "initializing");
      this.notificationCenter = UNUserNotificationCenter.currentNotificationCenter();
      this.notificationCenter
        .requestAuthorizationWithOptionsCompletionHandler(UNAuthorizationOptions.Alert, (granted, error) => {
          if (!granted) {
            this.setMessageMainLoop("notification authorization must be set");
            return;
          }
          this.addObservers();
          this.setMessageMainLoop("initialized");
          this.scheduleNotification();
        });
    } else {
      this.set("message", "This application will only work in iOS");
      console.log("This application will only work in iOS");
    }
  }

  addObservers() {
    SharedNotificationDelegate.addObserver({
      userNotificationCenterWillPresentNotificationWithCompletionHandler: (ncenter, notification, handler, next) => {
        // console.log(ncenter, notification);
        console.log("notification received by observer 1");
        this.setMessageMainLoop(`notification received\n${notification.request.content.title}\n${notification.request.content.body}`);
        next();
      }
    });
    SharedNotificationDelegate.addObserver({
      userNotificationCenterWillPresentNotificationWithCompletionHandler: (ncenter, notification, handler, next) => {
        // console.log(ncenter, notification);
        console.log("notification received by observer 2 with priority 1");
        this.setMessageMainLoop(`notification received\n${notification.request.content.title}\n${notification.request.content.body}`);
        next();
      }
    }, 1);
  }

  scheduleNotification() {
    const content = UNMutableNotificationContent.new();
    content.title = "Test title";
    content.body = "Test body";
    const trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(5, false);
    const id = "UYLLocalNotification";
    const request = UNNotificationRequest.requestWithIdentifierContentTrigger(id, content, trigger);
    this.notificationCenter.addNotificationRequestWithCompletionHandler(request, (e) => {
      if (e) {
        console.log(e);
        return;
      }
      console.log("notification scheduled");
    });
  }

  setMessageMainLoop(m: string) {
    invokeOnRunLoop(() => {
      this.set("message", m);
    });
  }
}