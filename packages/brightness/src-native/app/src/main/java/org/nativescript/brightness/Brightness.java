package org.nativescript.brightness;

import android.app.Activity;
import android.content.Context;
import android.provider.Settings;

public class Brightness {
    public static final int MAX_BRIGHTNESS = 255;
    public static final int MIN_BRIGHTNESS = 1;

    static public int getScreenBrightness(Context context) {
        int screenBrightness = MAX_BRIGHTNESS;
        try {
            screenBrightness = Settings.System.getInt(context.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return screenBrightness;
    }

    public static void setScreenBrightness(Context context, int screenBrightness) {
        int brightness = screenBrightness;
        if (screenBrightness < MIN_BRIGHTNESS) {
            brightness = MIN_BRIGHTNESS;
        } else if (screenBrightness > MAX_BRIGHTNESS) {
            brightness = MAX_BRIGHTNESS;
        }
        if (!android.provider.Settings.System.canWrite(context)) {
            android.content.Intent intent = new android.content.Intent(android.provider.Settings.ACTION_MANAGE_WRITE_SETTINGS);
            intent.setData(android.net.Uri.parse("package:" + context.getPackageName()));
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
        }

        if (android.provider.Settings.System.canWrite(context)) {
            if (isScreenBrightnessModeAuto(context)) {
                setScreenBrightnessMode(context, false);
            }
            Settings.System.putInt(context.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS, brightness);
        }
    }

    private static boolean setScreenBrightnessMode(Context context, boolean auto) {
        boolean result = true;
        if (isScreenBrightnessModeAuto(context) != auto) {
            result = Settings.System.putInt(context.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE,
                    auto ? Settings.System.SCREEN_BRIGHTNESS_MODE_AUTOMATIC : Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
        }
        return result;
    }

    private static boolean isScreenBrightnessModeAuto(Context context) {
        return getScreenBrightnessModeState(context) == Settings.System.SCREEN_BRIGHTNESS_MODE_AUTOMATIC;
    }

    private static int getScreenBrightnessModeState(Context context) {
        return Settings.System.getInt(context.getContentResolver(), Settings.System.SCREEN_BRIGHTNESS_MODE,
                Settings.System.SCREEN_BRIGHTNESS_MODE_AUTOMATIC);
    }
}
