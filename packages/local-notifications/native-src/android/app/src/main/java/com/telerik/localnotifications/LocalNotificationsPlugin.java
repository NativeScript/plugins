package com.telerik.localnotifications;

import android.content.Context;
import android.util.Log;

import org.json.JSONObject;

public class LocalNotificationsPlugin {
  static final String TAG = "LocalNotifyPlugin";

  static boolean isActive = false;
  private static JSONObject cachedData;
  private static LocalNotificationsPluginListener onMessageReceivedCallback;
  private static LocalNotificationsPluginListener onMessageClearedCallback;
  private static LocalNotificationsPluginListener onMessageClickedCallback;
  /**
   * Set the on message received callback
   *
   * @param callbacks
   */
  public static void setOnMessageReceivedCallback(LocalNotificationsPluginListener callbacks) {
    onMessageReceivedCallback = callbacks;

    if (cachedData != null) {
      executeOnMessageReceivedCallback(cachedData);
      cachedData = null;
    }
  }

  /**
   * Execute the onMessageReceivedCallback with the data passed.
   * In case the callback is not present, cache the data;
   *
   * @param data
   */
  public static void executeOnMessageReceivedCallback(JSONObject data) {
    if (onMessageReceivedCallback != null) {
      Log.d(TAG, "Sending message to client");
      onMessageReceivedCallback.success(data);
    } else {
      Log.d(TAG, "No callback function - caching the data for later retrieval.");
      cachedData = data;
    }
  }

  /**
   * Set the on message clicked callback
   *
   * @param callbacks
   */
  public static void setOnMessageClickedCallback(LocalNotificationsPluginListener callbacks) {
    onMessageClickedCallback = callbacks;
  }

  /**
   * Execute the onMessageClickedCallback with the click on notification Message.
   * @param data
   */
  public static void executeOnMessageClickedCallback(JSONObject data) {
    if (onMessageClickedCallback != null) {
      onMessageClickedCallback.success(data);
    }
  }


  /**
   * Set the on message cleared callback
   *
   * @param callbacks
   */
  public static void setOnMessageClearedCallback(LocalNotificationsPluginListener callbacks) {
    onMessageClearedCallback = callbacks;
  }

  /**
   * Execute the onMessageClearedCallback with the data passed.
   * In case the callback is not present, cache the data;
   *
   * @param data
   */
  public static void executeOnMessageClearedCallback(JSONObject data) {
    if (onMessageClearedCallback != null) {
      onMessageClearedCallback.success(data);
    }
  }

  public static void scheduleNotification(JSONObject options, Context context) throws Exception {
    // Persist the options so that we can access them later to:
    // - Restore a notification after reboot.
    // - Create a notification after an alarm triggers (for recurrent or scheduled notifications).
    // - Pass them back to the notification clicked or notification cleared callbacks.
    //
    // This way we don't need to pass them around as extras in the Intents.

    Store.save(context, options);

    // Display or schedule the notification, depending on the options:
    // If there's already a notification with the same ID, the intent flags should take care of updating all the
    // intents but the alarm one, which would be cancelled and rescheduled.

    NotificationRestoreReceiver.scheduleNotification(options, context);
  }
}



