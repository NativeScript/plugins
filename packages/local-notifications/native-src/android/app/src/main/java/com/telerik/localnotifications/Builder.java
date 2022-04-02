package com.telerik.localnotifications;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.concurrent.ExecutionException;

import static android.app.PendingIntent.FLAG_UPDATE_CURRENT;
import static android.app.PendingIntent.FLAG_IMMUTABLE;
import static android.app.PendingIntent.FLAG_MUTABLE;

public final class Builder {

    public static final String NOTIFICATION_ID = "NOTIFICATION_ID";

    private static final String TAG = "Builder";
    private static final String DEFAULT_CHANNEL = "Notifications";

    private static final int DEFAULT_NOTIFICATION_COLOR = Color.parseColor("#ffffffff");
    private static final int DEFAULT_NOTIFICATION_LED_ON = 500;
    private static final int DEFAULT_NOTIFICATION_LED_OFF = 2000;

    // Methods to build notifications:

    static Notification build(JSONObject options, Context context, int notificationID) {
        // We use options.channel as both channel id and name. If not set, both default to DEFAULT_CHANNEL:
        return build(options, context, notificationID, options.optString("channel", DEFAULT_CHANNEL));
    }

    static Notification build(JSONObject options, Context context, int notificationID, String channelID) {
        // Set channel for Android 8+:

        if (android.os.Build.VERSION.SDK_INT >= 26) {
            final NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

            if (notificationManager != null && notificationManager.getNotificationChannel(channelID) == null) {
                NotificationChannel channel = new NotificationChannel(channelID, channelID, NotificationManager.IMPORTANCE_HIGH);
                if (shouldEnableNotificationLed(options)) {
                    channel.enableLights(true);
                    channel.setLightColor(getLedColor(options));
                }

								if(options.has("sound") && options.optString("sound") != "default"){
									AudioAttributes audioAttributes = new AudioAttributes.Builder().setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
										.setUsage(AudioAttributes.USAGE_NOTIFICATION)
										.build();
									int soundIdentifier = context.getResources().getIdentifier(options.optString("sound"), "raw", context.getApplicationInfo().packageName);
									channel.setSound(Uri.parse("android.resource://" + context.getApplicationInfo().packageName + "/" + soundIdentifier), audioAttributes);
								}

							notificationManager.createNotificationChannel(channel);
            }
        }

        // Create the builder:

        NotificationCompat.Builder builder = android.os.Build.VERSION.SDK_INT >= 26 ? new NotificationCompat.Builder(context, channelID) : new NotificationCompat.Builder(context);

        builder
            .setDefaults(0)
            .setContentTitle(options.optString("title", null))
            .setSubText(options.optString("subtitle", null))
            .setContentText(options.optString("body", null))
            .setSmallIcon(options.optInt("icon"))
            .setAutoCancel(true) // Remove the notification from the status bar once tapped.
            .setNumber(options.optInt("badge"))
            .setColor(options.optInt("color"))
            .setOngoing(options.optBoolean("ongoing"))
            .setPriority(options.optInt("priority", options.optBoolean("forceShowWhenInForeground") ? 1 : 0))
            .setTicker(options.optString("ticker", null)); // Let the OS handle the default value for the ticker.

				String soundFileName = options.optString("sound", null);
				if(soundFileName != null && soundFileName != "default"){
					int soundIdentifier = context.getResources().getIdentifier(options.optString("sound"), "raw", context.getApplicationInfo().packageName);
					builder.setSound(Uri.parse("android.resource://" + context.getApplicationInfo().packageName + soundIdentifier));
				}


				final Object thumbnail = options.opt("thumbnail");

        if (thumbnail instanceof String) {
            builder.setLargeIcon(getBitmap(context, (String) thumbnail));
        }

        final Object payload = options.opt("payload");

        if (payload instanceof JSONObject) {
					try {
						final Bundle bundle = jsonToBundle((JSONObject) payload);
						builder.addExtras(bundle);
					} catch (JSONException e) {
						Log.e(TAG, "Error parsing payload", e);
					}
				}

        // TODO sound preference is not doing anything
        // builder.setSound(options.has("sound") ? Uri.parse("android.resource://" + context.getPackageName() + "/raw/" + options.getString("sound")) : Uri.parse("android.resource://" + context.getPackageName() + "/raw/notify"))
        if (options.has("sound")) {
            builder.setSound(android.media.RingtoneManager.getDefaultUri(android.media.RingtoneManager.TYPE_NOTIFICATION));
        }

        applyNotificationLed(options, builder);
        applyStyle(options, builder, context);
        applyTapReceiver(builder, context, notificationID);
        applyClearReceiver(builder, context, notificationID);
        applyActions(options, builder, context, notificationID);

        return builder.build();
    }


    // Notification styles:

    private static void applyNotificationLed(JSONObject options, NotificationCompat.Builder builder) {
        if (shouldEnableNotificationLed(options)) {
            builder.setLights(getLedColor(options), DEFAULT_NOTIFICATION_LED_ON, DEFAULT_NOTIFICATION_LED_OFF);
        }
    }

    private static void applyStyle(JSONObject options, NotificationCompat.Builder builder, Context context) {
        if (options.has("groupedMessages")) {
            applyGroup(options, builder);
        } else if (options.optBoolean("bigTextStyle")) {
            applyBigTextStyle(options, builder);
        } else if (options.has("image")) {
            applyImage(options, builder, context);
        }
    }

    private static void applyImage(JSONObject options, NotificationCompat.Builder builder, Context context) {
        Bitmap bitmap = getBitmap(context, options.optString("image", ""));

        if (bitmap == null) {
            return;
        }

        final NotificationCompat.BigPictureStyle bigPictureStyle = new NotificationCompat.BigPictureStyle().bigPicture(bitmap);

        builder.setStyle(bigPictureStyle);

        final Object thumbnail = options.opt("thumbnail");

        if (Boolean.TRUE.equals(thumbnail)) {
            builder.setLargeIcon(bitmap); // Set the thumbnail...
            bigPictureStyle.bigLargeIcon(null); // ...which goes away when expanded.
        }

    }

    private static void applyBigTextStyle(JSONObject options, NotificationCompat.Builder builder) {
        // set big text style (adds an 'expansion arrow' to the notification)
        if (options.optBoolean("bigTextStyle")) {
            final NotificationCompat.BigTextStyle bigTextStyle = new NotificationCompat.BigTextStyle();
            bigTextStyle.setBigContentTitle(options.optString("title"));
            bigTextStyle.bigText(options.optString("body"));
            builder.setStyle(bigTextStyle);
        }
    }

    private static void applyGroup(JSONObject options, NotificationCompat.Builder builder) {
        JSONArray groupedMessages = options.optJSONArray("groupedMessages");

        if (groupedMessages == null) {
            return;
        }

        final NotificationCompat.InboxStyle inboxStyle = new NotificationCompat.InboxStyle();

        // Sets a title for the Inbox in expanded layout
        // TODO: Is this needed? Should we add a different option for it (bigTitle)?
        inboxStyle.setBigContentTitle(options.optString("title", null));
        inboxStyle.setSummaryText(options.optString("groupSummary", null));

        int messagesToDisplay = Math.min(groupedMessages.length(), 5);

        for (int i = 0; i < messagesToDisplay; ++i) {
            try {
                inboxStyle.addLine(groupedMessages.getString(i));
            } catch (JSONException e) {
                Log.e(TAG, "Error parsing message at index " + i, e);
            }

        }

        builder
            .setGroup("myGroup") // TODO not sure this needs to be configurable
            .setStyle(inboxStyle);
    }


    // Notification click and cancel handlers:

    /**
     * Add the intent that handles the event when the notification is clicked (which should launch the app).
     */
    private static void applyTapReceiver(NotificationCompat.Builder builder, Context context, int notificationID) {
    		PackageManager packageManager = context.getPackageManager();
    		Intent launchIntent = packageManager.getLaunchIntentForPackage(context.getPackageName());
				ComponentName mainActivityRef = launchIntent.getComponent();
        final Intent intent = new Intent()
								.setComponent(mainActivityRef)
                .putExtra(NOTIFICATION_ID, notificationID)
                .setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);

        builder.setContentIntent(PendingIntent.getActivity(
            context,
            notificationID,
            intent,
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ? FLAG_UPDATE_CURRENT | FLAG_IMMUTABLE : FLAG_UPDATE_CURRENT
        ));
    }

    /**
    * Add the intent that handles the delete event (which is fired when the X or 'clear all'
    * was pressed in the notification center).
    */
    private static void applyClearReceiver(NotificationCompat.Builder builder, Context context, int notificationID) {
        final Intent intent = new Intent(context, NotificationClearedReceiver.class)
            .putExtra(NOTIFICATION_ID, notificationID);

        builder.setDeleteIntent(PendingIntent.getBroadcast(
            context,
            notificationID,
            intent,
						Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ? FLAG_UPDATE_CURRENT | FLAG_IMMUTABLE : FLAG_UPDATE_CURRENT
				));
    }

    private static void applyActions(JSONObject options, NotificationCompat.Builder builder, Context context, int notificationID) {
        Action[] actions = getActions(options, context);

        if (actions == null || actions.length == 0) {
            return;
        }

        NotificationCompat.Action.Builder btn;
        for (Action action : actions) {
            btn = new NotificationCompat.Action.Builder(
                    action.getIcon(),
                    action.getTitle(),
                    getPendingIntentForAction(options, context, action, notificationID));

            if (action.isWithInput()) {
                Log.d(TAG, "applyActions, isWithInput");
                btn.addRemoteInput(action.getInput());
            } else {
                Log.d(TAG, "applyActions, not isWithInput");
            }

            builder.addAction(btn.build());
        }
    }

    private static Action[] getActions(JSONObject options, Context context) {
        Object value = options.opt("actions");
        String groupId = null;
        JSONArray actions = null;
        ActionGroup group = null;

        if (value instanceof String) {
            groupId = (String) value;
        } else if (value instanceof JSONArray) {
            actions = (JSONArray) value;
        }

        if (groupId != null) {
            group = ActionGroup.lookup(groupId);
        } else if (actions != null && actions.length() > 0) {
            group = ActionGroup.parse(context, actions);
        }

        return (group != null) ? group.getActions() : null;
    }

    private static PendingIntent getPendingIntentForAction(JSONObject options, Context context, Action action, int notificationID) {
        Log.d(TAG, "getPendingIntentForAction action.id " + action.getId() + ", action.isLaunchingApp(): " + action.isLaunchingApp());
        Intent intent = new Intent(context, NotificationActionReceiver.class)
                .putExtra(NOTIFICATION_ID, options.optInt("id", 0))
                // TODO see https://github.com/katzer/cordova-plugin-local-notifications/blob/ca1374325bb27ec983332d55dcb6975d929bca4b/src/android/notification/Builder.java#L396
                .putExtra("NOTIFICATION_LAUNCH", action.isLaunchingApp())
                .setAction(action.getId())
                .setFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);

        return PendingIntent.getService(
        	context,
					notificationID,
					intent,
					Build.VERSION.SDK_INT >= Build.VERSION_CODES.S ? FLAG_UPDATE_CURRENT | FLAG_MUTABLE : FLAG_UPDATE_CURRENT
				);
    }

    // Utility methods:

    private static @Nullable Bitmap getBitmap(Context context, String src) {
        if (src.indexOf("res://") == 0) {
            final int resourceId = context.getResources().getIdentifier(src.substring(6), "drawable", context.getApplicationInfo().packageName);

            return resourceId == 0 ? null : android.graphics.BitmapFactory.decodeResource(context.getResources(), resourceId);
        } else if (src.indexOf("http") == 0) {
            try {
                return new DownloadFileFromUrl(src).execute().get();
            } catch (InterruptedException | ExecutionException e) {
                return null;
            }
        }

        return null;
    }

    private static boolean shouldEnableNotificationLed(JSONObject options) {
        return options.has("notificationLed");
    }

    private static int getLedColor(JSONObject options) {
        Object notificationLed = options.opt("notificationLed");

        if (Boolean.TRUE.equals(notificationLed)) {
            return DEFAULT_NOTIFICATION_COLOR;
        } else if (notificationLed instanceof Integer) {
            return (int) notificationLed;
        } else {
            Log.e(TAG, "Unable to parse option.notificationLed, using default notification color");
            return DEFAULT_NOTIFICATION_COLOR;
        }
    }

		private static Bundle jsonToBundle(JSONObject jsonObject) throws JSONException {
			Bundle bundle = new Bundle();
			Iterator iter = jsonObject.keys();
			while(iter.hasNext()){
				String key = (String)iter.next();
				String value = jsonObject.getString(key);
				bundle.putString(key,value);
			}
			return bundle;
		}
}
