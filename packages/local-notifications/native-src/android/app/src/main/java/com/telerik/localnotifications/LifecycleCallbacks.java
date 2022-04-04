package com.telerik.localnotifications;

import android.app.Activity;
import android.app.Application;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Subscribe to the Pause and Resume activity events in order to toggle the plugin's status.
 */
public class LifecycleCallbacks implements Application.ActivityLifecycleCallbacks {
	private static final String TAG = "LocalNotifyLifecycleCb";

  private static LifecycleCallbacks callbacks = new LifecycleCallbacks();

  /**
   * Register for the application's events
   * @param app
   */
  public static void registerCallbacks(Application app) {
    if (app == null) {
      Log.d("LifecycleCallbacks", "The application is null, it's not passed correctly!");
      throw new RuntimeException("The application is null, it's not passed correctly!");
    }

    // clean up, not to leak and register it N times...
    Log.d("LifecycleCallbacks", "Unregistering the activity lifecycle callbacks...");
    app.unregisterActivityLifecycleCallbacks(callbacks);

    Log.d("LifecycleCallbacks", "Registering the activity lifecycle callbacks...");
    app.registerActivityLifecycleCallbacks(callbacks);
  }

  public void onActivityPaused(Activity activity) {
    Log.d(LocalNotificationsPlugin.TAG, "onActivityPaused: Application has been stopped.");

    // the application is being stopped -> the push plugin is not in active/foreground state anymore
    LocalNotificationsPlugin.isActive = false;
  }

  public void onActivityResumed(Activity activity) {
    Log.d(LocalNotificationsPlugin.TAG, "onActivityPaused: Application has been started");

    // the application has been resumed-> the push plugin is now in active/foreground state
    LocalNotificationsPlugin.isActive = true;

    onHandleNotificationIntent(activity.getApplicationContext(), activity.getIntent());
  }

  public void onActivityCreated(Activity activity, Bundle bundle) {
  }

  public void onActivityDestroyed(Activity activity) {
  }

  public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
  }

  public void onActivityStarted(Activity activity) {
  }

  public void onActivityStopped(Activity activity) {
  }

	private void onHandleNotificationIntent(Context context, Intent intent) {
		if (intent == null || !intent.hasExtra(Builder.NOTIFICATION_ID)) {
			return;
		}

		Bundle bundle = intent.getExtras();

		if (bundle == null) {
			return;
		}

		try {
			final JSONObject jsonData = new JSONObject();
			jsonData.put("event", Builder.NOTIFICATION_ID);
			LocalNotificationsPlugin.executeOnMessageClickedCallback(jsonData);

			onClick(context, bundle);
		} catch (JSONException e) {
			Log.e(TAG, e.getMessage(), e);
		}
	}

	private void onClick(Context context, Bundle bundle) throws JSONException {
		// Note that for the non-default action this will be empty:
		final JSONObject opts = Store.get(context, bundle.getInt(Builder.NOTIFICATION_ID), false);

		opts.put("event", "default");
		opts.put("foreground", true);

		LocalNotificationsPlugin.executeOnMessageReceivedCallback(opts);

		if (opts.has("id") && !opts.optBoolean("ongoing", false) && opts.optInt("repeatInterval", 0) == 0) {
			int id = opts.getInt("id");

			// Clear the notification from the tray, unless it's marker as ongoing/sticky:
			((NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE)).cancel(id);

			// And also unpersist it:
			Store.remove(context, id);
		}
	}
}
