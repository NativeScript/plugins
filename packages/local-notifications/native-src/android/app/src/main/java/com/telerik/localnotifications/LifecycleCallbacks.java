package com.telerik.localnotifications;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.util.Log;

/**
 * Subscribe to the Pause and Resume activity events in order to toggle the plugin's status.
 */
public class LifecycleCallbacks implements Application.ActivityLifecycleCallbacks {

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
}