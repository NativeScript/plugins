package com.telerik.localnotifications;

import android.app.AlarmManager;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;

import java.util.Date;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Notifications need to be restored when the device is rebooted,
 * that's what's this class is for.
 */
public class NotificationRestoreReceiver extends BroadcastReceiver {

  private static final String TAG = "NotifyRestoreReceiver";

  @Override
  public void onReceive(Context context, Intent intent) {
    if (context == null || !Intent.ACTION_BOOT_COMPLETED.equalsIgnoreCase(intent.getAction())) {
      return;
    }

    try {
      for (Map.Entry<String, String> entry : Store.getAll(context).entrySet()) {
        final String notificationString = entry.getValue();

        Log.e(TAG, "Will restore previously scheduled notification: " + notificationString);

        scheduleNotification(new JSONObject(notificationString), context);
      }
    } catch (IllegalStateException | JSONException e) {
      Log.e(TAG, "Notification could not be scheduled! " + e.getMessage(), e);
    }
  }

  static void scheduleNotification(JSONObject options, Context context) {

    // We might create the notification IMMEDIATELY:

    // If no ID is provided, we automatically assign different IDs so that all notifications are persisted:
    final int notificationID = options.optInt("id", 0);
    final long triggerTime = options.optLong("atTime", 0);

    if (triggerTime == 0) {
      // If we just want to show the notification immediately, there's no need to create an Intent,
      // we just send the notification to the Notification Service:
      ((NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE)).notify(
          notificationID, com.telerik.localnotifications.Builder.build(options, context, notificationID)
      );

      return;
    }

    // Check if the notification has EXPIRED:

    final long interval = options.optLong("repeatInterval", 0); // in ms
    final Date triggerDate = new Date(triggerTime);

    if (interval == 0 && new Date().after(triggerDate)) {
      Store.remove(context, notificationID);

      return;
    }

    // Or SCHEDULE it for later:

    final AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);

    try {
      final Intent notificationIntent = new Intent(context, NotificationAlarmReceiver.class)
          .setAction(options.getString("id"))
          .putExtra(Builder.NOTIFICATION_ID, notificationID);

      final PendingIntent pendingIntent = PendingIntent.getBroadcast(
      	context,
				0,
				notificationIntent,
				Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ? PendingIntent.FLAG_CANCEL_CURRENT | PendingIntent.FLAG_IMMUTABLE : PendingIntent.FLAG_CANCEL_CURRENT
			);

      if (interval > 0) {
        alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, triggerTime, interval, pendingIntent);
      } else {
        alarmManager.set(AlarmManager.RTC_WAKEUP, triggerTime, pendingIntent);
      }
    } catch (Exception e) {
      Log.e(TAG, "Notification could not be scheduled!" + e.getMessage(), e);
    }
  }
}
