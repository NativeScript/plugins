import { Color, View } from '@nativescript/core';
export * from './utils';
export * from './ui';

/**
 * Represents a class that provides methods for picking date and time.
 */
export class DateTimePicker {
	/**
	 * Picks a date from a dialog picker initialized with the provided options and styled with the optionally provided style.
	 */
	static pickDate(options: DatePickerOptions, style?: DateTimePickerStyle): Promise<Date>;

	/**
	 * Picks a time from a dialog picker initialized with the provided options and styled with the optionally provided style.
	 */
	static pickTime(options: TimePickerOptions, style?: DateTimePickerStyle): Promise<Date>;
}

/**
 * Represents a class that can provide options for setting up the picker opened by
 * {@link DateTimePicker}'s {@link pickDate} method.
 */
export interface DatePickerOptions extends PickerOptions {
	/**
	 * The date that will be displayed in the picker, (if not provided, the picker will display today).
	 */
	date?: Date;

	/**
	 * The minimum date that can be selected.
	 */
	minDate?: Date;

	/**
	 * The maximum date that can be selected.
	 */
	maxDate?: Date;

	/**
	 * First day of week
	 */
	firstWeekday?: number;

	/**
	 * iOS only: date picker style (from iOS 13.4)
	 */
	iosPreferredDatePickerStyle?: number;
}

/**
 * Represents a class that can provide options for setting up the picker opened by
 * {@link DateTimePicker}'s {@link pickTime} method.
 */
export interface TimePickerOptions extends PickerOptions {
	/**
	 * The time that will be displayed in the picker, (if not provided, the picker will display now).
	 */
	time?: Date;

	/**
	 * This value will be used only on Android to determine whether the picker will be in 12 or 24 hour format.
	 */
	is24Hours?: boolean;

	/**
	 * This value will be used on iOS for determine the minute interval of the picker
	 */
	timeInterval?: number;
}

/**
 * Represents a class that can provide options for setting up the picker opened by
 * {@link DateTimePicker}'s {@link pickDate} and {@link pickTime} methods.
 */
export interface PickerOptions {
	/**
	 * View's context.
	 */
	context: any;

	/**
	 * Identifier of a locale that will be used to localize month names and am/pm texts.
	 */
	locale?: string;

	/**
	 * Text that will be displayed as title of the picker, default is undefined.
	 */
	title?: string;

	/**
	 * Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).
	 */
	okButtonText?: string;

	/**
	 * Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).
	 */
	cancelButtonText?: string;
}

/**
 * Represents a class that can provide colors to be used by
 * {@link DateTimePicker}'s {@link pickDate} and {@link pickTime} methods.
 */
export class DateTimePickerStyle {
	/**
	 * Color to be used as a background of the dialog picker.
	 */
	dialogBackgroundColor: Color;

	/**
	 * Color to be used for the title text.
	 */
	titleTextColor: Color;

	/**
	 * Color to be used for the texts of the date/time spinners.
	 */
	spinnersTextColor: Color;

	/**
	 * Color to be used as a background of the date/time spinners.
	 */
	spinnersBackgroundColor: Color;

	/**
	 * Color to be used for the texts of the ok/cancel buttons.
	 */
	buttonsTextColor: Color;

	/**
	 * Color to be used as a background of the ok/cancel buttons.
	 */
	buttonsBackgroundColor: Color;

	/**
	 * Color to be used for the texts of the ok button.
	 */
	buttonOkTextColor: Color;

	/**
	 * Color to be used as a background of the ok button.
	 */
	buttonOkBackgroundColor: Color;

	/**
	 * Color to be used for the texts of the cancel button.
	 */
	buttonCancelTextColor: Color;

	/**
	 * Color to be used as a background of the cancel button.
	 */
	buttonCancelBackgroundColor: Color;

	/**
	 * Creates a style based on any css provided. The parameter is a View with the properly setup css class name.
	 */
	static create(view: View): DateTimePickerStyle;
}
