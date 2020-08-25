import { LocalizationUtilsBase } from "./localization-utils.common";

export class LocalizationUtils extends LocalizationUtilsBase {
    private static _localesCache: Map<string, any> = new Map<string, any>();

    static createNativeLocale(locale?: string) {
        if (LocalizationUtils._localesCache.has(locale)) {
            return LocalizationUtils._localesCache.get(locale);
        }
        let result: java.util.Locale;
        if (locale) {
            locale = locale.replace(/_/g, "-");
            let firstHypenIndex = locale.indexOf("-");
            let lang = "";
            let country = "";
            if (firstHypenIndex > -1) {
                lang = locale.substr(0, firstHypenIndex);
                let nextHypenIndex = locale.substr(firstHypenIndex + 1).indexOf("-");
                country = locale.substr(firstHypenIndex + 1, (nextHypenIndex > -1) ? nextHypenIndex : undefined);
            } else {
                lang = locale;
            }
            if (country !== "") {
                result = new java.util.Locale(lang, country);
            } else {
                result = new java.util.Locale(lang);
            }
        } else {
            result = java.util.Locale.getDefault();
        }
        LocalizationUtils._localesCache.set(locale, result);
        return result;
    }

    static createDefaultTimeFormat(context: any): string {
        const is24Hour = android.text.format.DateFormat.is24HourFormat(context);
        const format = is24Hour ? LocalizationUtils.TIME_24H_FORMAT : LocalizationUtils.TIME_12H_FORMAT;
        return format;
    }

    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any {
        if (!formatPattern) {
            return java.text.DateFormat.getDateInstance(java.text.DateFormat.DEFAULT, nativeLocale);
        }
        let nativeDateFormat = new java.text.SimpleDateFormat(formatPattern, nativeLocale);
        return nativeDateFormat;
    }

    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any {
        if (!formatPattern) {
            return java.text.DateFormat.getTimeInstance(java.text.DateFormat.SHORT, nativeLocale);
        }
        let nativeDateFormat = new java.text.SimpleDateFormat(formatPattern, nativeLocale);
        return nativeDateFormat;
    }

    static formatDateTime(formatter: any, dateTime: Date): string {
        let nativeDate = new java.util.Date(dateTime.getTime());
        let result = formatter.format(nativeDate);
        return result;
    }

    static is24Hours(formatter: any): boolean {
        const formatPattern = formatter.toPattern();
        if (formatPattern.indexOf('H') < 0) {
            return false;
        }
        return true;
    }
}