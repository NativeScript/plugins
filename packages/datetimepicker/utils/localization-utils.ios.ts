import { LocalizationUtilsBase } from "./localization-utils.common";

export class LocalizationUtils extends LocalizationUtilsBase {
    private static _localesCache: Map<string, any> = new Map<string, any>();

    static createNativeLocale(localeIdentifier: string): any {
        if (LocalizationUtils._localesCache.has(localeIdentifier)) {
            return LocalizationUtils._localesCache.get(localeIdentifier);
        }
        let result: NSLocale;
        if (localeIdentifier) {
            result = NSLocale.alloc().initWithLocaleIdentifier(localeIdentifier);
        } else {
            result = NSLocale.currentLocale;
        }
        LocalizationUtils._localesCache.set(localeIdentifier, result);
        return result;
    }

    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any {
        let dateFormatter = NSDateFormatter.alloc().init();
        dateFormatter.locale = nativeLocale;
        if (!formatPattern) {
            dateFormatter.dateStyle = NSDateFormatterStyle.MediumStyle;
            dateFormatter.timeStyle = NSDateFormatterStyle.NoStyle;
        } else {
            dateFormatter.dateFormat = formatPattern;
        }
        return dateFormatter;
    }

    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any {
        let dateFormatter = NSDateFormatter.alloc().init();
        dateFormatter.locale = nativeLocale;
        if (!formatPattern) {
            dateFormatter.dateStyle = NSDateFormatterStyle.NoStyle;
            dateFormatter.timeStyle = NSDateFormatterStyle.ShortStyle;
        } else {
            dateFormatter.dateFormat = formatPattern;
        }
        return dateFormatter;
    }

    static formatDateTime(formatter: any, dateTime: Date): string {
        return formatter.stringFromDate(dateTime);
    }

    static is24Hours(formatter: any): boolean {
        const formatPattern = formatter.dateFormat;
        if (formatPattern.indexOf('H') < 0) {
            return false;
        }
        return true;
    }
}