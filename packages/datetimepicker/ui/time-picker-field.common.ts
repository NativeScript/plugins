import { Property, CSSType, EventData } from "@nativescript/core";
import { DateTimePicker, DateTimePickerStyle } from "..";
import { TimePickerField as TimePickerFieldDefinition } from "./time-picker-field";
import { LocalizationUtils } from "../utils/localization-utils";
import { getDateNow, dateComparer } from "../utils/date-utils";
import { PickerFieldBase } from "./picker-field-base";

@CSSType("TimePickerField")
export class TimePickerFieldBase extends PickerFieldBase implements TimePickerFieldDefinition {
    public time: Date;
    public timeFormat: string;
    public pickerDefaultTime: Date;
    public static timePickerOpenedEvent = "timePickerOpened";
    public static timePickerClosedEvent = "timePickerClosed";

    private _nativeLocale: any;
    private _nativeTimeFormatter: any;

    public static timeProperty = new Property<TimePickerFieldBase, Date>({
        name: "time",
        equalityComparer: dateComparer,
        valueConverter: timeValueConverter,
        valueChanged: TimePickerFieldBase.timePropertyChanged
    });

    public static timeFormatProperty = new Property<TimePickerFieldBase, string>({
        name: "timeFormat",
        valueChanged: TimePickerFieldBase.timeFormatPropertyChanged
    });

    public static pickerDefaultTimeProperty = new Property<TimePickerFieldBase, Date>({
        name: "pickerDefaultTime",
        defaultValue: getDateNow(),
        equalityComparer: dateComparer,
        valueConverter: timeValueConverter
    });

    public open(): void {
        const style = DateTimePickerStyle.create(this);
        DateTimePicker.pickTime({
            context: this._context,
            time: this.time ? this.time : this.pickerDefaultTime,
            locale: this.locale,
            title: this.pickerTitle,
            okButtonText: this.pickerOkText,
            cancelButtonText: this.pickerCancelText,
            is24Hours: this.is24Hours(this._nativeTimeFormatter)
        }, style)
            .then((result: Date) => {
                if (result) {
                    this.time = result;
                }
                let args = <EventData>{
                    eventName: TimePickerFieldBase.timePickerClosedEvent,
                    object: this
                };
                this.notify(args);
            })
            .catch((err) => {
                console.log('TimePickerField Error: ' + err);
            });
        let args = <EventData>{
            eventName: TimePickerFieldBase.timePickerOpenedEvent,
            object: this
        };
        this.notify(args);
    }

    public updateText() {
        if (!this._nativeTimeFormatter) {
            this._initRegionalSettings();
        }
        this.text = this.time ? this.getFormattedTime(this.time) : "";
    }

    initNativeView() {
        super.initNativeView();
        this._updateRegionalSettings();
    }

    private static timePropertyChanged(field: TimePickerFieldBase, oldValue: Date, newValue: Date) {
        field.updateText();
    }

    private static timeFormatPropertyChanged(field: TimePickerFieldBase, oldValue: string, newValue: string) {
        field.onTimeFormatChanged(oldValue, newValue);
    }

    protected onTimeFormatChanged(oldValue: string, newValue: string) {
        this._updateRegionalSettings();
    }

    protected onLocaleChanged(oldValue: string, newValue: string) {
        this._updateRegionalSettings();
    }

    protected _updateRegionalSettings() {
        this._initRegionalSettings();
        this.updateText();
    }

    protected getFormattedTime(time: Date): string {
        return LocalizationUtils.formatDateTime(this._nativeTimeFormatter, time);
    }

    private _initRegionalSettings() {
        this._nativeLocale = LocalizationUtils.createNativeLocale(this.locale);
        this._nativeTimeFormatter = LocalizationUtils.createNativeTimeFormatter(this.timeFormat, this._nativeLocale);
    }

    private is24Hours(formatter): boolean {
        return LocalizationUtils.is24Hours(formatter);
    }
}

// Creates a date for today with the time represented in the timeString in ISO 8601 formats
// as specified here: https://en.wikipedia.org/wiki/ISO_8601#Times:
// 1)hh:mm:ss.sss --- 2)hhmmss.sss --- 3)hh:mm:ss --- 4)hhmmss --- 5)hh:mm --- 6)hhmm --- 7)hh
export function timeValueConverter(timeString: string) {
    let date = new Date();
    date.setMilliseconds(0);
    date.setSeconds(0);
    if (timeString.length < 2 || isNaN(+timeString.substring(0, 2))) {
        // The string can't be parsed, so default to time now
        return date;
    }
    const hours = +timeString.substring(0, 2);
    date.setHours(hours);
    date.setMinutes(0);
    let timeRemainder = timeString.substring(2);
    timeRemainder = timeRemainder.startsWith(':') ? timeRemainder.substring(1) : timeRemainder;
    if (timeRemainder.length < 2 || isNaN(+timeRemainder.substring(0, 2))) {
        // Successfully parsed a date is in the 7)hh format
        return date;
    }
    const minutes = +timeRemainder.substring(0, 2);
    date.setMinutes(minutes);
    timeRemainder = timeRemainder.substring(2);
    timeRemainder = timeRemainder.startsWith(':') ? timeRemainder.substring(1) : timeRemainder;
    if (timeRemainder.length < 2 || isNaN(+timeRemainder.substring(0, 2))) {
        // Successfully parsed a date is in the 5)hh:mm or 6)hhmm format
        return date;
    }
    const seconds = +timeRemainder.substring(0, 2);
    date.setSeconds(seconds);
    timeRemainder = timeRemainder.substring(2);
    timeRemainder = timeRemainder.startsWith('.') ? timeRemainder.substring(1) : timeRemainder;
    if (timeRemainder.length < 3 || isNaN(+timeRemainder.substring(0, 3))) {
        // Successfully parsed a date is in the 3)hh:mm:ss or 4)hhmmss format
        return date;
    }
    const milliseconds = +timeRemainder.substring(0, 3);
    date.setMilliseconds(milliseconds);
    // Successfully parsed a date in the 1)hh:mm:ss.sss or 2)hhmmss.sss format
    return date;
}
TimePickerFieldBase.timeProperty.register(TimePickerFieldBase);
TimePickerFieldBase.timeFormatProperty.register(TimePickerFieldBase);
TimePickerFieldBase.pickerDefaultTimeProperty.register(TimePickerFieldBase);