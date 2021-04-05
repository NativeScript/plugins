/**
 * Contains the TimePickerField class.
 */
import { TextField, Property } from '@nativescript/core';

/**
 * Represents a TextField that can be tapped to open a picker. The picker is a dialog with
 * time picking spinners along with OK/Cancel buttons.
 */
export class TimePickerField extends TextField {
	/**
	 * Gets or sets the selected time.
	 */
	time: Date;

	/**
	 * Gets or sets a format for displaying the date in the field.
	 * Default value is undefined, meaning that the format will be based on the current locale.
	 * Here are some examples with the way 1st of April, 2019 is displayed for each of the formats:
	 * MMM dd, yyyy - Apr 01, 2019
	 * d.M.yy - 1.4.19
	 * EEE, d MMMM yyyy - Mon, 1 April 2019
	 */
	timeFormat: string;

	/**
	 * Gets or sets a locale for displaying the date in the field, and also for the picker.
	 * Default value is undefined, meaning that the format will be based on the device's settings.
	 * In order to fixate the date to English, you can use English-based locales like: en_US, en_UK, etc.
	 * If you want to provide localization for your app, you can supply different locales, depending
	 * on the selected setting.
	 * Note that changing the locale will not affect the {@link pickerOkText}, {@link pickerCancelText}
	 * and {@link pickerTitle} or {@link hint} properties.
	 */
	locale: string;

	/**
	 * Gets or sets the hint text. Hint is the text that is displayed in the field when {@link time} is null.
	 */
	hint: string;

	/**
	 * Gets or sets the time that will be initially selected in the picker when {@link time} is null.
	 *
	 * @default now
	 */
	pickerDefaultTime: Date;

	/**
	 * Gets or sets the time interval for the time picker
	 */
	timeInterval: number;

	/**
	 * Gets or sets the title. The title is the text that is displayed in the picker
	 * above the date selecting spinners.
	 */
	pickerTitle: string;

	/**
	 * Gets or sets the text of the button in the picker that is used to confirm the selection.
	 * By default, on iOS the text will be OK, while on android the text will be
	 * determined by the current device's localization settings. Please note, that the value
	 * is not related with the value {@link locale} property.
	 */
	pickerOkText: string;

	/**
	 * Gets or sets the text of the button in the picker that is used to dismiss the picker,
	 * and cancel the current date selection.
	 * By default, on iOS the text will be Cancel, while on android the text will be
	 * determined by the current device's localization settings. Please note, that the value
	 * is not related with the value {@link locale} property.
	 */
	pickerCancelText: string;

	/**
	 * Identifies the {@link time} dependency property.
	 */
	static timeProperty: Property<TimePickerField, Date>;

	/**
	 * Identifies the {@link timeFormat} dependency property.
	 */
	static timeFormatProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link locale} dependency property.
	 */
	static localeProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link hint} dependency property.
	 */
	static hintProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link pickerDefaultTime} dependency property.
	 */
	static pickerDefaultTimeProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link timeInterval} dependency property.
	 */
	static timeIntervalProperty: Property<TimePickerField, number>;

	/**
	 * Identifies the {@link pickerTitle} dependency property.
	 */
	static pickerTitleProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link pickerOkText} dependency property.
	 */
	static pickerOkTextProperty: Property<TimePickerField, string>;

	/**
	 * Identifies the {@link pickerCancelText} dependency property.
	 */
	static pickerCancelTextProperty: Property<TimePickerField, string>;
}
