import { LocalizationUtils } from "./localization-utils";

export class LocalizationUtilsBase implements LocalizationUtils {
    protected static TIME_24H_FORMAT = "HH:mm";
    protected static TIME_12H_FORMAT = "h:mm a";
    static createNativeLocale(localeIdentifier: string): any {
        return null;
    }
    static createDefaultTimeFormat(context: any): string {
        return "";
    }
    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any {
        return null;
    }
    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any {
        return null;
    }
    static formatDateTime(formatter: any, dateTime: Date): string {
        return "";
    }
    static is24Hours(formatter: any, context): boolean {
        return false;
    }
}