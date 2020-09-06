import {
  DateTimeFormat as commonDateTimeFormat,
  NumberFormat as commonNumberFormat,
  FULL
} from "./common";
import { NumberFormatOptions } from ".";

let localesCache: Map<string, any> = new Map<string, any>();

function getNativeLocale(locale?: string) {
  if (localesCache.has(locale)) {
      return localesCache.get(locale);
  }
  let result;
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
      result = new java.util.Locale("en", "US");
  }
  localesCache.set(locale, result);
  return result;
}

export class DateTimeFormat extends commonDateTimeFormat {
  public getNativePattern(patternDefinition: {date?: string, time?: string}, locale?: string): string {
      let result = "";
      let flag = 0;
      let nativeLocale;
      if (locale) {
          nativeLocale = getNativeLocale(locale);
          flag++;
      }

      if (patternDefinition.date) {
          flag = flag + 2;
      }

      if (patternDefinition.time) {
          flag = flag + 4;
      }
      let dateFormat;
      switch (flag) {
          case 0:
              // no locale no date no time
              dateFormat = java.text.DateFormat.getDateTimeInstance();
              break;
          case 1:
              // only locale
              dateFormat = java.text.DateFormat.getDateTimeInstance(0, 0, nativeLocale);
              break;
          case 2:
              // only date 0 for full, 3 for Short date format using default locale
              dateFormat = java.text.DateFormat.getDateInstance(patternDefinition.date === FULL ? 0 : 3);
              break;
          case 3:
              // date + locale
              dateFormat =
              java.text.DateFormat.getDateInstance(patternDefinition.date === FULL ? 0 : 3, nativeLocale);
              break;
          case 4:
              // only time we always use long pattern using default locale
              dateFormat = java.text.DateFormat.getTimeInstance(1);
              break;
          case 5:
              // time + locale
              dateFormat = java.text.DateFormat.getTimeInstance(1, nativeLocale);
              break;
          case 6:
              // time + date using default locale
              dateFormat = java.text.DateFormat.getDateTimeInstance(patternDefinition.date === FULL ? 0 : 3, 1);
              break;
          case 7:
              // locale + date + time
              dateFormat =
              java.text.DateFormat.getDateTimeInstance(patternDefinition.date === FULL ? 0 : 3, 1, nativeLocale);
              break;
          default:
              break;
      }
      result = dateFormat.toPattern();
      return result;
  }

  public formatNative(pattern: string, locale?: string, date?: Date): string {
      let sdf = locale ?
          new java.text.SimpleDateFormat(pattern, getNativeLocale(locale)) :
          new java.text.SimpleDateFormat(pattern);
      return sdf.format(date ? new java.util.Date(date.valueOf()) : new java.util.Date()).toString();
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
      let numberFormat;
      if (pattern) {
          numberFormat = new java.text.DecimalFormat(pattern);
      } else {
          if (options) {
              switch (options.style.toLowerCase()) {
                  case "decimal":
                      numberFormat = java.text.NumberFormat.getNumberInstance(getNativeLocale(locale));
                      break;
                  case "percent":
                      numberFormat = java.text.NumberFormat.getPercentInstance(getNativeLocale(locale));
                      break;
                  case "currency":
                      numberFormat = java.text.NumberFormat.getCurrencyInstance(getNativeLocale(locale));
                      if (options.currency !== void 0) {
                          numberFormat.setCurrency(java.util.Currency.getInstance(options.currency));
                      }
                      break;
                  default:
                      numberFormat = java.text.NumberFormat.getNumberInstance(getNativeLocale(locale));
                      break;
              }
          } else {
              numberFormat = java.text.NumberFormat.getNumberInstance(getNativeLocale(locale));
          }
      }

      if (options && options.minimumIntegerDigits !== void 0) {
          numberFormat.setMinimumIntegerDigits(options.minimumIntegerDigits);
      }

      if (options && options.minimumFractionDigits !== void 0) {
          numberFormat.setMinimumFractionDigits(options.minimumFractionDigits);
      }

      if (options && options.maximumFractionDigits !== void 0) {
          numberFormat.setMaximumFractionDigits(options.maximumFractionDigits);
      }

      if (options && options.useGrouping !== void 0) {
          numberFormat.setGroupingUsed(options.useGrouping);
      }

      let decimalFormatSymbols = locale ?
          new java.text.DecimalFormatSymbols(getNativeLocale(locale)) :
          new java.text.DecimalFormatSymbols();
      numberFormat.setDecimalFormatSymbols(decimalFormatSymbols);

      if (options && (options.style.toLowerCase() === "currency" && options.currencyDisplay === "code")) {
          if (!pattern) {
              let currrentPattern = numberFormat.toPattern();
              // this will display currency code instead of currency symbol
              currrentPattern = currrentPattern.replace("¤", "¤¤");
              numberFormat = new java.text.DecimalFormat(currrentPattern);
              numberFormat.setDecimalFormatSymbols(decimalFormatSymbols);
          }

          if (options.currency !== void 0) {
              decimalFormatSymbols.setCurrency(java.util.Currency.getInstance(options.currency));
          }
      }

      return numberFormat.format(value);
  }
}
