import { vsprintf } from "sprintf-js";
import { Application, ApplicationSettings, Utils } from "@nativescript/core";

import { encodeKey } from "./resource";

declare var java: any;

const getResources = (function () {
  let resources = null;
  return function () {
    if (resources === null) {
      resources = Utils.android.getApplicationContext().getResources();
    }
    return resources;
  };
})();

export function localize(key: string, ...args: string[]): string {
  let localizedString;
  try {
    const identifier = Utils.android.resources.getStringId(encodeKey(key));
    localizedString = identifier === 0 ? key : getResources().getString(identifier);
  } catch (error) {
    localizedString = key;
  }
  return vsprintf(localizedString, args);
}

export function androidLaunchEventLocalizationHandler() {
  const lang = ApplicationSettings.getString("__app__language__", 'none');
  if (lang !== 'none' && global.isAndroid) {
    const locale = new java.util.Locale(lang);
    java.util.Locale.setDefault(locale);

    const resources = Application.android.context.getResources();
    const configuration = resources.getConfiguration();
    configuration.locale = locale;

    resources.updateConfiguration(configuration, resources.getDisplayMetrics());
  }
}

export function overrideLocale(locale: string): boolean {
  ApplicationSettings.setString("__app__language__", locale.substring(0, 2));
  return true;
}
