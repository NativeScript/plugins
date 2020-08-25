export declare class LocalizationUtils {
    private static _localesCache;
    static createNativeLocale(locale?: string): any;
    static createDefaultTimeFormat(context: any): string;
    static createNativeDateFormatter(formatPattern: string, nativeLocale: any): any;
    static createNativeTimeFormatter(formatPattern: string, nativeLocale: any): any;
    static formatDateTime(formatter: any, dateTime: Date): string;
    static is24Hours(formatter: any): boolean;
}
