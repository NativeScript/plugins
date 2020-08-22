package com.telerik.localnotifications;

import android.content.Context;
import androidx.annotation.Nullable;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Map;

public final class Store {

    private static final String TAG = "Store";
    private static final String SHARED_PREFERENCES_KEY = "LocalNotificationsPlugin";

    public static @Nullable JSONObject get(Context context, int id) {
        return get(context, id, true);
    }

    public static @Nullable JSONObject get(Context context, int id, boolean nullable) {
        try {
            return new JSONObject(context
                .getSharedPreferences(SHARED_PREFERENCES_KEY, Context.MODE_PRIVATE)
                .getString(String.valueOf(id), ""));
        } catch (JSONException e) {
            Log.e(TAG, "Error parsing options" + e.getMessage(), e);
        }

        return nullable ? null : new JSONObject();
    }

    public static Map<String, String> getAll(Context context) {
        return (Map<String, String>) context.getSharedPreferences(SHARED_PREFERENCES_KEY, Context.MODE_PRIVATE).getAll();
    }

    public static String[] getKeys(Context context) {
        return getAll(context).keySet().toArray(new String[0]);
    }

    public static void save(Context context, JSONObject opts) {
        save(context, opts.optInt("id", 0), opts);
    }

    public static void save(Context context, int id, String opts) {
        try {
            save(context, id, new JSONObject(opts));
        } catch (JSONException e) {
            Log.e(TAG, "Error saving options" + e.getMessage(), e);
        }
    }

    public static void save(Context context, int id, JSONObject opts) {
        context.getSharedPreferences(SHARED_PREFERENCES_KEY, Context.MODE_PRIVATE).edit().putString(String.valueOf(id), opts.toString()).apply();
    }

    public static void remove(Context context, int id) {
        context.getSharedPreferences(SHARED_PREFERENCES_KEY, Context.MODE_PRIVATE).edit().remove(String.valueOf(id)).apply();
    }
}
