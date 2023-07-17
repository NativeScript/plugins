import { Color } from '@nativescript/core';
import { DatePickerOptions, DateTimePickerBase, DateTimePickerStyleBase, PickerOptions, TimePickerOptions } from './common';
import { getDateNow, getDateToday, LocalizationUtils } from './utils';
export * from './ui';
export * from './utils';

let DialogListener: any;
let DatePickerListener: any;
let AppCompatNamespace: any;
declare let global: any;

function initializeAppCompatNamespace(): void {
	if (AppCompatNamespace) {
		return;
	}
	if (global.androidx && global.androidx.appcompat) {
		AppCompatNamespace = global.androidx.appcompat;
	} else {
		AppCompatNamespace = (<any>android.support).v7;
	}
}

function initializeDialogListener(): void {
	if (DialogListener) {
		return;
	}

	@NativeClass()
	@Interfaces([android.content.DialogInterface.OnClickListener, android.content.DialogInterface.OnDismissListener])
	class DialogListenerImpl extends java.lang.Object implements android.content.DialogInterface.OnClickListener, android.content.DialogInterface.OnDismissListener {
		private _isClicked = false;
		constructor(public nativePicker: any, public dateTime: Date, public callback: Function, public minuteInterval?: number) {
			super();
			return global.__native(this);
		}

		onClick(dialog: android.content.DialogInterface, which: number) {
			const callback = this.callback;
			const dateTime = this.dateTime;
			const nativePicker = this.nativePicker;
			this._isClicked = true;
			switch (which) {
				case android.content.DialogInterface.BUTTON_POSITIVE: {
					if (nativePicker instanceof android.widget.DatePicker) {
						nativePicker.clearFocus();
						dateTime.setFullYear(this.nativePicker.getYear());
						dateTime.setMonth(this.nativePicker.getMonth());
						dateTime.setDate(this.nativePicker.getDayOfMonth());
					} else if (nativePicker instanceof android.widget.TimePicker) {
						nativePicker.clearFocus();
						dateTime.setHours(this.nativePicker.getCurrentHour());
						if (this.minuteInterval) {
							dateTime.setMinutes(this.nativePicker.getCurrentMinute() * this.minuteInterval);
						} else {
							dateTime.setMinutes(this.nativePicker.getCurrentMinute());
						}
					}
					callback(dateTime);
					return;
				}
			}
			callback(null);
		}

		onDismiss(dialog: android.content.DialogInterface) {
			if (this._isClicked) {
				// The Picker is dismissed due to a button click,
				// so the callback is already called.
				return;
			}
			const callback = this.callback;
			callback(null);
		}
	}

	DialogListener = DialogListenerImpl;
}

function initializeDatePickerListener() {
	if (DatePickerListener) {
		return;
	}

	@NativeClass()
	@Interfaces([android.app.DatePickerDialog.OnDateSetListener])
	class DaterPickerListener extends java.lang.Object implements android.app.DatePickerDialog.OnDateSetListener {
		constructor(public callback: Function) {
			super();

			return global.__native(this);
		}

		public onDateSet(param0: globalAndroid.widget.DatePicker, param1: number, param2: number, param3: number): void {
			this.callback({ param1, param2, param3 });
		}
	}

	DatePickerListener = DaterPickerListener;
}

export class DateTimePickerStyle extends DateTimePickerStyleBase {}

export class DateTimePicker extends DateTimePickerBase {
	private static _defaultOkText = 'OK';
	private static _defaultCancelText = 'Cancel';
	private static _defaultsInitialized = false;
	private static _nativeDialog: android.app.AlertDialog = null;

	static pickDate(options: DatePickerOptions, style?: DateTimePickerStyle): Promise<Date> {
		const pickDate = new Promise<Date>((resolve) => {
			let originalLocale: java.util.Locale;
			if (options.locale) {
				originalLocale = java.util.Locale.getDefault();
				let preferredLocale = LocalizationUtils.createNativeLocale(options.locale);
				java.util.Locale.setDefault(preferredLocale);
			}

			const nativeDatePicker = DateTimePicker._createNativeDatePicker(options, (result: { param1: number; param2: number; param3: number }) => {
				if (originalLocale) {
					java.util.Locale.setDefault(originalLocale);
				}

				resolve(new Date(new Date().setUTCFullYear(result.param1, result.param2, result.param3)));
			});

			nativeDatePicker.show();
		});

		return pickDate;
	}

	static pickTime(options: TimePickerOptions, style?: DateTimePickerStyle): Promise<Date> {
		const pickTime = new Promise<Date>((resolve) => {
			let originalLocale: java.util.Locale;
			if (options.locale) {
				originalLocale = options.context.getResources().getConfiguration().locale;
				let preferredLocale = LocalizationUtils.createNativeLocale(options.locale);
				options.context.getResources().getConfiguration().locale = preferredLocale;
			}
			const nativeTimePicker = DateTimePicker._createNativeTimePicker(options);
			const nativeDialogBuilder = DateTimePicker._createNativeDialog(
				nativeTimePicker,
				options,
				options.time,
				(result: Date) => {
					if (originalLocale) {
						options.context.getResources().getConfiguration().locale = originalLocale;
					}
					resolve(result);
				},
				options.timeInterval
			);
			// Setting the private nativeDialog to allow dismissing Programmatically
			DateTimePicker._nativeDialog = DateTimePicker._showNativeDialog(nativeDialogBuilder, nativeTimePicker, style);
		});
		return pickTime;
	}

	static close() {
		if (DateTimePicker._nativeDialog) {
			DateTimePicker._nativeDialog.dismiss();
		}
	}

	static _createNativeDatePicker(options: DatePickerOptions, callback: Function): android.app.DatePickerDialog {
		const date = options.date ? new Date(options.date.getTime()) : getDateToday();

		const context = options.context;

		initializeDatePickerListener();

		const dialogListener = new DatePickerListener(callback);

		const dialogRes = context.getResources().getIdentifier('dialogTheme', 'style', context.getApplicationInfo().packageName);

		let datePickerDialog = new android.app.DatePickerDialog(context, dialogRes ? dialogRes : android.R.style.Theme_DeviceDefault_Light_Dialog, dialogListener, date.getFullYear(), date.getMonth(), date.getDate());

		datePickerDialog.setButton(android.content.DialogInterface.BUTTON_POSITIVE, options.okButtonText ? options.okButtonText : this._defaultOkText, datePickerDialog);
		datePickerDialog.setButton(android.content.DialogInterface.BUTTON_NEGATIVE, options.cancelButtonText ? options.cancelButtonText : this._defaultCancelText, datePickerDialog);

		let datePicker = datePickerDialog.getDatePicker();

		if (options.maxDate) {
			datePicker.setMaxDate(options.maxDate.getTime());
		}
		if (options.minDate) {
			datePicker.setMinDate(options.minDate.getTime());
		}

		return datePickerDialog;
	}

	static _createNativeTimePicker(options: TimePickerOptions): android.widget.TimePicker {
		const time = options.time ? new Date(options.time.getTime()) : getDateNow();

		const context = options.context;

		let timePicker: any;
		if (options.timeInterval) {
			timePicker = new MinuteIntervalPicker(context, options.timeInterval);
		} else {
			timePicker = new android.widget.TimePicker(context);
		}

		if (options.is24Hours) {
			timePicker.setIs24HourView(new java.lang.Boolean(options.is24Hours));
		}

		timePicker.setCurrentHour(new java.lang.Integer(time.getHours()));

		if (options.timeInterval) {
			timePicker.setCurrentMinute(new java.lang.Integer(time.getMinutes() / options.timeInterval));
		} else {
			timePicker.setCurrentMinute(new java.lang.Integer(time.getMinutes()));
		}
		return timePicker;
	}

	static _createNativeDialog(nativePicker: android.view.View, options: PickerOptions, value: Date, callback: Function, minuteInterval?: number): android.app.AlertDialog.Builder {
		initializeDialogListener();
		initializeAppCompatNamespace();
		DateTimePicker._initializeTextResources(options.context);
		const context = options.context;
		let dateTime: Date;
		if (value) {
			if (nativePicker instanceof android.widget.DatePicker) {
				const minDate = (<DatePickerOptions>options).minDate;
				const maxDate = (<DatePickerOptions>options).maxDate;
				value = DateTimePicker._trimDate(value, minDate, maxDate);
			}
			dateTime = new Date(value.getTime());
		} else {
			dateTime = nativePicker instanceof android.widget.DatePicker ? getDateToday() : getDateNow();
		}
		const nativeDialogBuilder = new android.app.AlertDialog.Builder(context);
		const dialogListener = new DialogListener(nativePicker, dateTime, callback, minuteInterval);
		if (options.title) {
			nativeDialogBuilder.setTitle(options.title);
		}
		nativeDialogBuilder.setOnDismissListener(dialogListener);
		const cancelButtonText = options.cancelButtonText ? options.cancelButtonText : this._defaultCancelText;
		const okButtonText = options.okButtonText ? options.okButtonText : this._defaultOkText;
		nativeDialogBuilder.setNegativeButton(cancelButtonText, dialogListener);
		nativeDialogBuilder.setPositiveButton(okButtonText, dialogListener);
		nativeDialogBuilder.setView(nativePicker);
		return nativeDialogBuilder;
	}

	static _showNativeDialog(nativePickerBuilder: android.app.AlertDialog.Builder, nativePicker: any, style: DateTimePickerStyle): android.app.AlertDialog {
		let nativeDialog = nativePickerBuilder.show();
		if (style) {
			const buttonOkTextColor = style.buttonOkTextColor ? style.buttonOkTextColor : style.buttonsTextColor;
			const buttonOkBackgroundColor = style.buttonOkBackgroundColor ? style.buttonOkBackgroundColor : style.buttonsBackgroundColor;
			const buttonCancelTextColor = style.buttonCancelTextColor ? style.buttonCancelTextColor : style.buttonsTextColor;
			const buttonCancelBackgroundColor = style.buttonCancelBackgroundColor ? style.buttonCancelBackgroundColor : style.buttonsBackgroundColor;

			DateTimePicker._applyDialogColors(nativeDialog, style.titleTextColor, style.dialogBackgroundColor);
			DateTimePicker._applyDialogSpinnersColors(nativePicker, style.spinnersTextColor, style.spinnersBackgroundColor);
			DateTimePicker._applyDialogOkButtonColors(nativeDialog, buttonOkTextColor, buttonOkBackgroundColor);
			DateTimePicker._applyDialogCancelButtonColors(nativeDialog, buttonCancelTextColor, buttonCancelBackgroundColor);
		}
		return nativeDialog;
	}

	private static _trimDate(originalDate: Date, minDate: Date, maxDate: Date) {
		let finalDate = originalDate;
		if (minDate !== undefined && minDate > finalDate) {
			finalDate = minDate;
		}
		if (maxDate !== undefined && maxDate < finalDate) {
			finalDate = maxDate;
		}
		return finalDate;
	}

	private static _applyDialogColors(nativeDialog: android.app.AlertDialog, color: Color, backgroundColor: Color) {
		if (backgroundColor) {
			nativeDialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(backgroundColor.android));
		}
		if (color) {
			const label = DateTimePicker._findViewById<android.widget.TextView>(nativeDialog, 'android:id/alertTitle');
			if (label) {
				label.setTextColor(color.android);
			}
		}
	}

	private static _applyDialogSpinnersColors(nativePicker: android.view.View, color: Color, backgroundColor: Color) {
		if (backgroundColor) {
			nativePicker.setBackgroundColor(backgroundColor.android);
		}
		if (color) {
			if (nativePicker instanceof android.widget.DatePicker) {
				const yearView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/year');
				DateTimePicker._applyNumberPickerColor(yearView, color);
				const monthView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/month');
				DateTimePicker._applyNumberPickerColor(monthView, color);
				const dayView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/day');
				DateTimePicker._applyNumberPickerColor(dayView, color);
			} else if (nativePicker instanceof android.widget.TimePicker) {
				const hourView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/hour');
				DateTimePicker._applyNumberPickerColor(hourView, color);
				const dividerView = DateTimePicker._findViewById<android.widget.TextView>(nativePicker, 'android:id/divider');
				DateTimePicker._applyTextViewColor(dividerView, color);
				const minuteView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/minute');
				DateTimePicker._applyNumberPickerColor(minuteView, color);
				const amPmView = DateTimePicker._findViewById<android.widget.NumberPicker>(nativePicker, 'android:id/amPm');
				DateTimePicker._applyNumberPickerColor(amPmView, color);
			}
		}
	}

	private static _applyDialogOkButtonColors(nativePicker: android.app.AlertDialog, color: Color, backgroundColor: Color) {
		if (backgroundColor) {
			nativePicker.getButton(android.content.DialogInterface.BUTTON_POSITIVE).setBackgroundColor(backgroundColor.android);
		}
		if (color) {
			nativePicker.getButton(android.content.DialogInterface.BUTTON_POSITIVE).setTextColor(color.android);
		}
	}

	private static _applyDialogCancelButtonColors(nativePicker: android.app.AlertDialog, color: Color, backgroundColor: Color) {
		if (backgroundColor) {
			nativePicker.getButton(android.content.DialogInterface.BUTTON_NEGATIVE).setBackgroundColor(backgroundColor.android);
		}
		if (color) {
			nativePicker.getButton(android.content.DialogInterface.BUTTON_NEGATIVE).setTextColor(color.android);
		}
	}

	private static _applyTextViewColor(textView: android.widget.TextView, color: Color) {
		if (!textView || !color) {
			return;
		}
		textView.setTextColor(color.android);
	}

	private static _applyNumberPickerColor(numberPicker: android.widget.NumberPicker, color: Color) {
		const wheelPaint = DateTimePicker._findFieldByName(numberPicker, 'mSelectorWheelPaint');
		const selectionDividerDrawable = DateTimePicker._findFieldByName(numberPicker, 'mSelectionDivider');
		if (!wheelPaint || !selectionDividerDrawable || !(wheelPaint instanceof android.graphics.Paint) || !(selectionDividerDrawable instanceof android.graphics.drawable.Drawable)) {
			return;
		}
		wheelPaint.setColor(color.android);
		const childCount = numberPicker.getChildCount();
		for (let i = 0; i < childCount; i++) {
			let child = numberPicker.getChildAt(i);
			if (child instanceof android.widget.EditText) {
				child.setTextColor(color.android);
			}
		}
		const filter = AppCompatNamespace.widget.AppCompatDrawableManager.getPorterDuffColorFilter(color.android, android.graphics.PorterDuff.Mode.SRC_IN);
		selectionDividerDrawable.setColorFilter(filter);
		numberPicker.invalidate();
	}

	private static _findViewById<T extends android.view.View>(view: android.view.View | android.app.Dialog, id: string): T {
		const searchId = view.getContext().getResources().getIdentifier(id, null, null);
		const searchView = view.findViewById(searchId);
		return <T>searchView;
	}

	private static _findFieldByName(view: android.view.View, name: string): java.lang.Object {
		try {
			let field = view.getClass().getDeclaredField(name);
			field.setAccessible(true);
			return field.get(view);
		} catch (e) {
			return null;
		}
	}

	private static _initializeTextResources(context: android.content.Context) {
		if (DateTimePicker._defaultsInitialized) {
			return;
		}
		const resources = context.getResources();
		const okId = resources.getIdentifier('ok', 'string', 'android');
		const cancelId = resources.getIdentifier('cancel', 'string', 'android');
		DateTimePicker._defaultOkText = context.getString(okId);
		DateTimePicker._defaultCancelText = context.getString(cancelId);
		DateTimePicker._defaultsInitialized = true;
	}
}

@NativeClass()
@Interfaces([android.widget.TimePicker.OnTimeChangedListener])
class MinuteIntervalPicker extends android.widget.TimePicker {
	static constructorCalled = false;

	private _minuteInterval: number;
	private _minuteNumberPicker: android.widget.NumberPicker;

	constructor(context: globalAndroid.content.Context, minuteInterval: number | string) {
		super(context);

		MinuteIntervalPicker.constructorCalled = true;

		if (typeof minuteInterval === 'string') {
			this._minuteInterval = parseInt(minuteInterval);
		} else {
			this._minuteInterval = minuteInterval;
		}

		const searchId = context.getResources().getIdentifier('minute', 'id', 'android');
		this._minuteNumberPicker = this.findViewById(searchId) as android.widget.NumberPicker;

		this._minuteNumberPicker.setMinValue(0);
		this._minuteNumberPicker.setMaxValue(60 / this._minuteInterval - 1);

		const displayedValues = [];

		for (let i = 0; i < 60; i += this._minuteInterval) {
			displayedValues.push(i.toString().padStart(2, '0'));
		}

		this._minuteNumberPicker.setDisplayedValues(displayedValues);

		return global.__native(this);
	}
}
