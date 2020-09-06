import {
  DateTimeFormat as intlDateTimeFormat,
  DateTimeFormatOptions as intlDateTimeFormatOptions,
  NumberFormat as intlNumberFormat,
  NumberFormatOptions as intlNumberFormatOptions
} from ".";

export const NUMERIC = "numeric";
export const LONG = "long";
export const SHORT = "short";
export const TWODIGIT = "2-digit";
export const FULL = "full";
export let resolvedPatterns = new Map();

export class DateTimeFormat implements intlDateTimeFormat {
  constructor(private locale?: string, private options?: intlDateTimeFormatOptions, private pattern?: string) {
      if (options && options.minute === NUMERIC) {
          this.options.minute = TWODIGIT;
      }
      if (options && options.hour === NUMERIC) {
          this.options.hour = TWODIGIT;
      }
  }

  private hasTimeOptions(options: intlDateTimeFormatOptions): boolean {
      return options.hour !== undefined || options.minute !== undefined || options.second !== undefined;
  }

  private hasDateOptions(options: intlDateTimeFormatOptions): boolean {
      return options.weekday !== undefined ||
          options.year !== undefined ||
          options.month !== undefined ||
          options.day !== undefined;
  }

  private useFullDatePattern(intlOptions): boolean {
      let i;
      let propsArray = Object.keys(intlOptions);
      let propsArrayLength = propsArray.length;
      let result = false;
      for (i = 0; i < propsArrayLength; i++) {
          if (intlOptions[propsArray[i]] === LONG || intlOptions[propsArray[i]] === SHORT) {
              result = true;
              break;
          }
      }
      return result;
  }

  public getNativePattern(patternDefinition: {date?: string, time?: string}, locale?: string): string {
      return "";
  }

  private getCorrectPatternForLocale(): string {
      let dateTimePatternOptions: {date?: string, time?: string} = {};
      if (this.hasDateOptions(this.options)) {
          if (this.useFullDatePattern(this.options)) {
              dateTimePatternOptions.date = FULL;
          } else {
              dateTimePatternOptions.date = SHORT;
          }
      }
      if (this.hasTimeOptions(this.options)) {
          dateTimePatternOptions.time = FULL;
      }
      let result = this.getNativePattern(dateTimePatternOptions, this.locale);
      if (this.options.hour) {
          if (this.options.hour12 !== undefined) {
              result = this.options.hour12 ? result.replace(/H/g, "h") : result.replace(/h/g, "H");
          } else {
              this.options.hour12 = !(result.indexOf("H") > -1);
          }
      }
      return result;
  }

  private dateTimeFormatElements = {
      "M": "month",
      "E": "weekday",
      "c": "weekday",
      "d": "day",
      "y": "year",
      "h": "hour",
      "H": "hour",
      "m": "minute",
      "s": "second",
      "z": "timeZoneName",
      "G": "era",
      "a": "hour12"
  };

  // isDateElement (boolean), patternValue - dateElement content, intlOption - corresponding Intl option name
  private getDateElementsFromPattern(pattern: string) {
      let result = [];
      let patternLength = pattern.length;
      let i = 0;
      let stringInsidePattern = false;
      while (i < patternLength) {
          // handle case with a string inside pattern
          if (pattern[i] === '"' || pattern[i] === "'") {
              let p = i + 1;
              while (p < patternLength && pattern[i] !== pattern[p]) {
                  p++;
              }
              for (let j = i; j < p + 1; j++) {
                  result.push({
                      "isDateElement": false,
                      "patternValue": pattern[j]
                  });
              }
              i = p + 1;
              continue;
          }
          if (this.dateTimeFormatElements.hasOwnProperty(pattern[i])) {
              let j = i;
              while (i < patternLength && pattern[i] === pattern[j]) { i++; }
              result.push({
                  "isDateElement": true,
                  "patternValue": pattern.substr(j, i - j),
                  "intlOption": this.dateTimeFormatElements[pattern[j]]
              });
          } else {
              result.push({
                  "isDateElement": false,
                  "patternValue": pattern[i]
              });
              i++;
          }
      }
      return result;
  }

  private prepareDateElement(intlOption, dateElement) {
      switch (intlOption) {
          case NUMERIC:
              return dateElement;
          case TWODIGIT:
              return dateElement.repeat(2);
          case SHORT:
              return dateElement.repeat(3);
          case LONG:
              return dateElement.repeat(4);
          // true or false can be returned only for hour12 property
          // so when 24-hour format should be used then we do not need AM/PM
          case true:
              return dateElement;
          case false:
              return "";
          default:
              return dateElement;
      }
  }

  private preparePattern(pattern, options) {
      let patternOptions = this.getDateElementsFromPattern(pattern);
      let patternOptionsLength = patternOptions.length;
      for (let i = 0; i < patternOptionsLength; i++) {
          if (patternOptions[i].isDateElement) {
              let formatChar = patternOptions[i].patternValue[0];
              let intlOptionValue = options[patternOptions[i].intlOption];
              if (intlOptionValue !== undefined) {
                  let newPatternValue = this.prepareDateElement(intlOptionValue, formatChar);
                  patternOptions[i].patternValue = newPatternValue;
              } else {
                  // remove the date element from pattern and also its delimiter (before the date element)
                  if (i > 0) {
                      let j = i - 1;
                      while (patternOptions[j] && patternOptions[j].isDateElement === false) {
                          if (patternOptions[j].patternValue !== " ") {
                              if (patternOptions[j].patternValue !== '"' && patternOptions[j].patternValue !== "'") {
                                  patternOptions[j].patternValue = "";
                              }
                              break;
                          } else {
                              patternOptions[j].patternValue = "";
                          }
                          j--;
                      }
                  }
                  patternOptions[i].patternValue = "";
              }
          }
      }
      let result = [];
      let i = 0;
      // remove leading delimiters
      while (patternOptions[i].patternValue === "" || patternOptions[i].isDateElement === false) { i++; }
      for (i; i < patternOptionsLength; i++) {
          result.push(patternOptions[i].patternValue);
      }
      return result.join("");
  }

  public formatNative(pattern: string, locale?: string, date?: Date): string {
      return "";
  }

  private _preparedPattern: string;
  public get preparedPattern(): string {
      if (!this._preparedPattern) {
          if (this.pattern) {
              this._preparedPattern = this.pattern;
          } else {
              if (resolvedPatterns.has({locale: this.locale, options: this.options})) {
                  this._preparedPattern = resolvedPatterns.get({locale: this.locale, options: this.options});
              } else {
                  this._preparedPattern = this.preparePattern(this.getCorrectPatternForLocale(), this.options);
                  resolvedPatterns.set({locale: this.locale, options: this.options}, this._preparedPattern);
              }
          }
      }
      return this._preparedPattern;
  }

  public format(date?: Date): string {
      return this.formatNative(this.preparedPattern, this.locale, date);
  }
}

export class NumberFormat implements intlNumberFormat {
  constructor(private locale?: string, private options?: intlNumberFormatOptions, private pattern?: string) { }

  public formatNative(value: number, locale?: string, options?: intlNumberFormatOptions, pattern?: string): string {
      return "";
  }

  public format(value: number) {
      return this.formatNative(value, this.locale, this.options, this.pattern);
  }
}

