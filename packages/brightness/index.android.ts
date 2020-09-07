import { Frame, Application } from "@nativescript/core";
import { validateOptions } from './common';

declare var org: any;

export class Brightness {
    public getNative() {
        let context = Application.android.context;
        return org.nativescript.brightness.Brightness.getScreenBrightness(context);
    }

    public get() {
        return Math.round(this.getNative() / 255 * 100);
    }

    public set(options) {
        validateOptions(options);

        if (android.os.Build.VERSION.SDK_INT < 23) {
            const topFrame = Frame.topmost();
            if (topFrame && topFrame.android && topFrame.android.activity) {
                const attr = topFrame.android.activity.getWindow().getAttributes();
                attr.screenBrightness = options.intensity / 100;
                topFrame.android.activity.getWindow().setAttributes(attr);
            }
        } else {
            let context = Application.android.foregroundActivity;
            if (context) {
                let brightnessValue = Math.round(options.intensity * 255 / 100);
                org.nativescript.brightness.Brightness.setScreenBrightness(context, brightnessValue);
            }
        }
    }
}
