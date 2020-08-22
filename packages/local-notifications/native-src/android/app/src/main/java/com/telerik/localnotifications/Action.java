package com.telerik.localnotifications;

import android.content.Context;
import androidx.core.app.RemoteInput;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import static com.telerik.localnotifications.LocalNotificationsPlugin.TAG;


/**
 * Holds the icon and title components that would be used in a
 * NotificationCompat.Action object. Does not include the PendingIntent so
 * that it may be generated each time the notification is built. Necessary to
 * compensate for missing functionality in the support library.
 */
public final class Action {

  // The id for the click action
  public static final String CLICK_ACTION_ID = "default_action";

  // The application context
  private final Context context;

  // The action spec
  private final JSONObject options;

  /**
   * Structure to encapsulate a named action that can be shown as part of
   * this notification.
   *
   * @param context The application context.
   * @param options The action options.
   */
  Action(Context context, JSONObject options) {
    this.context = context;
    this.options = options;
  }

  /**
   * Gets the ID for the action.
   */
  public String getId() {
    return options.optString("id", getTitle());
  }

  /**
   * Gets the Title for the action.
   */
  public String getTitle() {
    return options.optString("title", "Tap here");
  }

  /**
   * Gets the icon for the action.
   */
  public int getIcon() {
    // TODO
    return android.R.drawable.screen_background_dark;
    /*
    AssetUtil assets = AssetUtil.getInstance(context);
    String resPath = options.optString("icon");
    int resId = assets.getResId(resPath);

    if (resId == 0) {
      resId = android.R.drawable.screen_background_dark;
    }

    return resId;
    */
  }

  /**
   * Gets the value of the launch flag.
   */
  public boolean isLaunchingApp() {
    return options.optBoolean("launch", true);
  }

  /**
   * Gets the type for the action.
   */
  public boolean isWithInput() {
    String type = options.optString("type");
    return "input".equals(type);
  }

  /**
   * Gets the input config in case of the action is of type input.
   */
  public RemoteInput getInput() {
    return new RemoteInput.Builder(getId())
        .setLabel(options.optString("placeholder"))
        .setAllowFreeFormInput(options.optBoolean("editable", true))
        .setChoices(getChoices())
        .build();
  }

  /**
   * List of possible choices for input actions.
   */
  private String[] getChoices() {
    JSONArray opts = options.optJSONArray("choices");

    Log.d(TAG, "getChoices, opts: " + opts);

    if (opts == null) {
      return null;
    }

    String[] choices = new String[opts.length()];

    for (int i = 0; i < choices.length; i++) {
      choices[i] = opts.optString(i);
    }

    Log.d(TAG, "getChoices, choices: " + choices);
    Log.d(TAG, "getChoices, choices.length: " + choices.length);

    return choices;
  }

}