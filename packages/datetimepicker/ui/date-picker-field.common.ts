import { EventData, Property, CSSType } from '@nativescript/core';
import { DateTimePicker, DateTimePickerStyle } from '..';
import { DatePickerField as DatePickerFieldDefinition } from './date-picker-field';
import { LocalizationUtils } from '../utils/localization-utils';
import { getDateToday, dateComparer } from '../utils';
import { PickerFieldBase } from './picker-field-base';

@CSSType('DatePickerField')
export class DatePickerFieldBase extends PickerFieldBase implements DatePickerFieldDefinition {
	public maxDate: Date;
	public minDate: Date;
	public date: Date;
	public dateFormat: string;
	public pickerDefaultDate: Date;
	public iosPreferredDatePickerStyle: number | undefined;
	public static datePickerOpenedEvent = 'datePickerOpened';
	public static datePickerClosedEvent = 'datePickerClosed';

	private _nativeLocale: any;
	private _nativeDateFormatter: any;

	public static dateProperty = new Property<DatePickerFieldBase, Date>({
		name: 'date',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
		valueChanged: DatePickerFieldBase.datePropertyChanged,
	});

	public static maxDateProperty = new Property<DatePickerFieldBase, Date>({
		name: 'maxDate',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
	});

	public static minDateProperty = new Property<DatePickerFieldBase, Date>({
		name: 'minDate',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
	});

	public static dateFormatProperty = new Property<DatePickerFieldBase, string>({
		name: 'dateFormat',
		valueChanged: DatePickerFieldBase.dateFormatPropertyChanged,
	});

	public static pickerDefaultDateProperty = new Property<DatePickerFieldBase, Date>({
		name: 'pickerDefaultDate',
		defaultValue: getDateToday(),
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
	});

	public static iosPreferredDatePickerStyleProperty = new Property<DatePickerFieldBase, number>({
		name: 'iosPreferredDatePickerStyle',
	});

	public open(): void {
		const style = DateTimePickerStyle.create(this);
		DateTimePicker.pickDate(
			{
				context: this._context,
				date: this.date ? this.date : this.pickerDefaultDate,
				locale: this.locale,
				minDate: this.minDate,
				maxDate: this.maxDate,
				iosPreferredDatePickerStyle: this.iosPreferredDatePickerStyle,
				title: this.pickerTitle,
				okButtonText: this.pickerOkText,
				cancelButtonText: this.pickerCancelText,
			},
			style
		)
			.then((result: Date) => {
				if (result) {
					this.date = result;
				}
				let args = <EventData>{
					eventName: DatePickerFieldBase.datePickerClosedEvent,
					object: this,
				};
				this.notify(args);
			})
			.catch((err) => {
				console.log('DatePickerField Error: ' + err);
			});
		let args = <EventData>{
			eventName: DatePickerFieldBase.datePickerOpenedEvent,
			object: this,
		};
		this.notify(args);
	}

	public updateText() {
		if (!this._nativeDateFormatter) {
			this._initRegionalSettings();
		}
		this.text = this.date ? this.getFormattedDate(this.date) : '';
	}

	initNativeView() {
		super.initNativeView();
		this._updateRegionalSettings();
	}

	private static datePropertyChanged(field: DatePickerFieldBase, oldValue: Date, newValue: Date) {
		field.updateText();
	}

	private static dateFormatPropertyChanged(field: DatePickerFieldBase, oldValue: string, newValue: string) {
		field.onDateFormatChanged(oldValue, newValue);
	}

	protected onDateFormatChanged(oldValue: string, newValue: string) {
		this._updateRegionalSettings();
	}

	protected onLocaleChanged(oldValue: string, newValue: string) {
		this._updateRegionalSettings();
	}

	protected getFormattedDate(date: Date): string {
		return LocalizationUtils.formatDateTime(this._nativeDateFormatter, date);
	}

	private _initRegionalSettings() {
		this._nativeLocale = LocalizationUtils.createNativeLocale(this.locale);
		this._nativeDateFormatter = LocalizationUtils.createNativeDateFormatter(this.dateFormat, this._nativeLocale);
	}

	private _updateRegionalSettings() {
		this._initRegionalSettings();
		this.updateText();
	}
}

export function dateValueConverter(v: any): Date {
	return new Date(v);
}

DatePickerFieldBase.dateProperty.register(DatePickerFieldBase);
DatePickerFieldBase.maxDateProperty.register(DatePickerFieldBase);
DatePickerFieldBase.minDateProperty.register(DatePickerFieldBase);
DatePickerFieldBase.dateFormatProperty.register(DatePickerFieldBase);
DatePickerFieldBase.pickerDefaultDateProperty.register(DatePickerFieldBase);
