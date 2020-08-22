package com.telerik.localnotifications;

import android.app.NotificationManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import org.json.JSONObject;

public class NotificationAlarmReceiver extends BroadcastReceiver {

  private static final String TAG = "NotificationAlarmRcvr";

  public void onReceive(Context context, Intent intent) {
    final int id = intent.getIntExtra(Builder.NOTIFICATION_ID, 0);
    final JSONObject opts = Store.get(context, id);

    if (opts == null) {
      Log.e(TAG, "Notification could not be restored, options are null");

      return;
    }

    // Create the notification:

    try {
      ((NotificationManager) context
        .getSystemService(Context.NOTIFICATION_SERVICE))
        .notify(id, Builder.build(opts, context, id));
    } catch (Throwable t) {
      Log.e(TAG, "Notification could not be restored!" + t.getMessage(), t);
    }

    // Note we don't unpersist this notification just yet, as it might still need to be restored
    // after a reboot.
  }
}
