package com.telerik.localnotifications;

import android.content.Context;
import android.content.Intent;

import android.content.BroadcastReceiver;
import androidx.annotation.Nullable;

import org.json.JSONObject;

public class NotificationClearedReceiver extends BroadcastReceiver {
  private static String TAG = "NotificationClearedReceiver";

  /**
   * Called when the notification is cleared from the notification center.
   *
   * @param context Application context
   * @param intent  Received intent with notification ID
   */
  @Override
  public void onReceive(Context context, @Nullable Intent intent) {
    if (intent == null || !intent.hasExtra(Builder.NOTIFICATION_ID)) {
      return;
    }

    // Default value not used as above check ensures we have an actual value:
    final int id = intent.getIntExtra(Builder.NOTIFICATION_ID, 0);
    final JSONObject opts = Store.get(context, id);

    if (opts != null) {
      if (opts.optInt("repeatInterval", 0) == 0) {
        // Remove the persisted notification data if it's not repeating:
        Store.remove(context, id);
      }

      LocalNotificationsPlugin.executeOnMessageClearedCallback(opts);
    }
  }
}