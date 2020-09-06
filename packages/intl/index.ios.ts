import {
  DateTimeFormat as commonDateTimeFormat,
  NumberFormat as commonNumberFormat,
  FULL
} from "./common";
import { NumberFormatOptions } from ".";

export class DateTimeFormat extends commonDateTimeFormat {
  public getNativePattern(patternDefinition: {date?: string, time?: string}, locale?: string): string {
      let dateFormatter = NSDateFormatter.new();
      if (locale) {
          dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
      }
      if (patternDefinition.date) {
          dateFormatter.dateStyle = patternDefinition.date === FULL ?
              NSDateFormatterStyle.FullStyle :
              NSDateFormatterStyle.ShortStyle;
      }
      if (patternDefinition.time) {
          dateFormatter.timeStyle = NSDateFormatterStyle.LongStyle;
      }
      return dateFormatter.dateFormat;
  }

  public formatNative(pattern: string, locale?: string, date?: Date): string {
      let dateFormatter = NSDateFormatter.new();
      if (locale) {
          dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
      }
      dateFormatter.dateFormat = pattern;
      // return dateFormatter.stringFromDate(date ?
      // NSDate.dateWithTimeIntervalSince1970(date.valueOf()/1000) :
      // NSDate.new());
      return dateFormatter.stringFromDate(date ? date : new Date());
  }
}

// style?: string;
// currency?: string;
// currencyDisplay?: string;
// useGrouping?: boolean;
// minimumIntegerDigits?: number;
// minimumFractionDigits?: number;
// maximumFractionDigits?: number;
export class NumberFormat extends commonNumberFormat {
  public formatNative(value: number, locale?: string, options?: NumberFormatOptions, pattern?: string) {
      let numberFormat = NSNumberFormatter.new();
      if (locale) {
          numberFormat.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
      }
      if (options) {
          switch (options.style.toLowerCase()) {
              case "decimal":
                  numberFormat.numberStyle = NSNumberFormatterStyle.DecimalStyle;
                  break;
              case "percent":
                  numberFormat.numberStyle = NSNumberFormatterStyle.PercentStyle;
                  break;
              case "currency":
                  numberFormat.numberStyle = NSNumberFormatterStyle.CurrencyStyle;
                  if (options.currency !== void 0) {
                      numberFormat.currencyCode = options.currency;
                  }
                  break;
              default:
                  numberFormat.numberStyle = NSNumberFormatterStyle.DecimalStyle;
                  break;
          }
      } else {
          numberFormat.numberStyle = NSNumberFormatterStyle.DecimalStyle;
      }

      if (options && options.minimumIntegerDigits !== void 0) {
          numberFormat.minimumIntegerDigits = options.minimumIntegerDigits;
      }

      if (options && options.minimumFractionDigits !== void 0) {
          numberFormat.minimumFractionDigits = options.minimumFractionDigits;
      }

      if (options && options.maximumFractionDigits !== void 0) {
          numberFormat.maximumFractionDigits = options.maximumFractionDigits;
      }

      if (options && options.useGrouping !== void 0) {
          numberFormat.usesGroupingSeparator = options.useGrouping;
      }

      if (pattern) {
          numberFormat.positiveFormat = pattern;
      } else {
          if (options && (options.style.toLowerCase() === "currency" && options.currencyDisplay === "code")) {
              let tempPattern = numberFormat.positiveFormat;
              // this will display currency code instead of currency symbol
              tempPattern = tempPattern.replace("¤", "¤¤");
              numberFormat.positiveFormat = tempPattern;
          }
      }

      // return numberFormat.stringFromNumber(NSNumber.alloc().initWithDouble(value));
      return numberFormat.stringFromNumber(value);
  }
}
