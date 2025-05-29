import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from '@nativescript/angular';
import { DatePickerField, TimePickerField, DateTimePickerFields } from '@nativescript/datetimepicker';

const DATE_PICKER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatePickerValueAccessor),
	multi: true,
};

const TIME_PICKER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TimePickerValueAccessor),
	multi: true,
};

const DATE_TIME_PICKERS_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateTimePickersValueAccessor),
	multi: true,
};

/**
 * The accessor for setting a date and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <DatePickerField [(ngModel)]="model.test">
 *  ```
 */
@Directive({
	selector: 'DatePickerField[ngModel],DatePickerField[formControlName],DatePickerField[formControl],' + 'datepickerfield[ngModel],datepickerfield[formControlName],datepickerfield[formControl],' + 'datePickerField[ngModel],datePickerField[formControlName],datePickerField[formControl],' + 'date-picker-field[ngModel],date-picker-field[formControlName],date-picker-field[formControl]',
	providers: [DATE_PICKER_VALUE_ACCESSOR],
	host: {
		'(dateChange)': 'handleDateChange($event)',
		'(datePickerOpened)': 'handleDatePickerOpened($event)',
		'(datePickerClosed)': 'handleDatePickerClosed($event)',
	},
	standalone: false,
})
export class DatePickerValueAccessor extends BaseValueAccessor<DatePickerField> {
	private _hasBeenOpened = false;
	constructor(elementRef: ElementRef) {
		super(elementRef.nativeElement);
	}

	writeValue(value: any): void {
		const normalized = super.normalizeValue(value);
		this.view.date = normalized;
	}

	handleDateChange(args: any) {
		if (this._hasBeenOpened) {
			this.onChange(args.value);
		}
	}

	handleDatePickerOpened(args: any) {
		this._hasBeenOpened = true;
	}

	handleDatePickerClosed(args: any) {
		this.onTouched();
	}
}

/**
 * The accessor for setting a time and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TimePickerField [(ngModel)]="model.test">
 *  ```
 */
@Directive({
	selector: 'TimePickerField[ngModel],TimePickerField[formControlName],TimePickerField[formControl],' + 'timepickerfield[ngModel],timepickerfield[formControlName],timepickerfield[formControl],' + 'timePickerField[ngModel],timePickerField[formControlName],timePickerField[formControl],' + 'time-picker-field[ngModel],time-picker-field[formControlName],time-picker-field[formControl]',
	providers: [TIME_PICKER_VALUE_ACCESSOR],
	host: {
		'(timeChange)': 'handleTimeChange($event)',
		'(timePickerOpened)': 'handleTimePickerOpened($event)',
		'(timePickerClosed)': 'handleTimePickerClosed($event)',
	},
	standalone: false,
})
export class TimePickerValueAccessor extends BaseValueAccessor<TimePickerField> {
	private _hasBeenOpened = false;
	constructor(elementRef: ElementRef) {
		super(elementRef.nativeElement);
	}

	writeValue(value: any): void {
		const normalized = super.normalizeValue(value);
		this.view.time = normalized;
	}

	handleTimeChange(args: any) {
		if (this._hasBeenOpened) {
			this.onChange(args.value);
		}
	}

	handleTimePickerOpened(args: any) {
		this._hasBeenOpened = true;
	}

	handleTimePickerClosed(args: any) {
		this.onTouched();
	}
}

/**
 * The accessor for setting a date and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <DateTimePickerFields [(ngModel)]="model.test">
 *  ```
 */
@Directive({
	selector: 'DateTimePickerFields[ngModel],DateTimePickerFields[formControlName],DateTimePickerFields[formControl],' + 'datetimepickerfields[ngModel],datetimepickerfields[formControlName],datetimepickerfields[formControl],' + 'dateTimePickerFields[ngModel],dateTimePickerFields[formControlName],dateTimePickerFields[formControl],' + 'date-time-picker-fields[ngModel],date-time-picker-fields[formControlName],date-time-picker-fields[formControl]',
	providers: [DATE_TIME_PICKERS_VALUE_ACCESSOR],
	host: {
		'(dateChange)': 'handleDateChange($event)',
		'(datePickerOpened)': 'handlePickerOpened($event)',
		'(datePickerClosed)': 'handlePickerClosed($event)',
		'(timePickerOpened)': 'handlePickerOpened($event)',
		'(timePickerClosed)': 'handlePickerClosed($event)',
	},
	standalone: false,
})
export class DateTimePickersValueAccessor extends BaseValueAccessor<DateTimePickerFields> {
	private _hasBeenOpened = false;
	constructor(elementRef: ElementRef) {
		super(elementRef.nativeElement);
	}

	writeValue(value: any): void {
		const normalized = super.normalizeValue(value);
		this.view.date = normalized;
	}

	handleDateChange(args: any) {
		if (this._hasBeenOpened) {
			this.onChange(args.value);
		}
	}

	handlePickerOpened(args: any) {
		this._hasBeenOpened = true;
	}

	handlePickerClosed(args: any) {
		this.onTouched();
	}
}
