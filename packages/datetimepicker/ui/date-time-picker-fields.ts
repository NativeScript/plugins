import { Property, CSSType, GridLayout, PropertyChangeData, EventData, ItemSpec, booleanConverter } from '@nativescript/core';
import { DatePickerField } from './date-picker-field';
import { TimePickerField } from './time-picker-field';
import { getDateNow, clearTime, dateComparer } from '../utils/date-utils';

type ScrollOrientation = 'horizontal' | 'vertical';

@CSSType('DateTimePickerFields')
export class DateTimePickerFields extends GridLayout {
	public dateField: DatePickerField;
	public timeField: TimePickerField;

	public date: Date;

	public maxDate: Date;
	public minDate: Date;

	public dateFormat: string;
	public timeFormat: string;
	public locale: string;
	public hintDate: string;
	public hintTime: string;

	public pickerDefaultDate: Date;
	public pickerTitleDate: string;
	public pickerTitleTime: string;
	public pickerOkText: string;
	public pickerCancelText: string;

	public orientation: ScrollOrientation;
	public autoPickTime: boolean;

	_shouldSkipTimeAssignment: boolean;

	private _dateChangeHandler: (args: PropertyChangeData) => void;
	private _timeChangeHandler: (args: PropertyChangeData) => void;

	constructor() {
		super();
		this.dateField = new DatePickerField();
		this.timeField = new TimePickerField();

		let row1Spec = new ItemSpec(1, 'star');
		let row2Spec = new ItemSpec(1, 'star');
		let column1Spec = new ItemSpec(1, 'star');
		let column2Spec = new ItemSpec(1, 'star');

		this.addRow(row1Spec);
		this.addRow(row2Spec);
		this.addColumn(column1Spec);
		this.addColumn(column2Spec);

		this.addChild(this.dateField);
		this.addChild(this.timeField);

		DateTimePickerFields._updateOrientation(this);
	}

	public static dateProperty = new Property<DateTimePickerFields, Date>({
		name: 'date',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
		valueChanged: DateTimePickerFields.datePropertyChanged,
	});

	public static maxDateProperty = new Property<DateTimePickerFields, Date>({
		name: 'maxDate',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
		valueChanged: DateTimePickerFields.maxDatePropertyChanged,
	});

	public static minDateProperty = new Property<DateTimePickerFields, Date>({
		name: 'minDate',
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
		valueChanged: DateTimePickerFields.minDatePropertyChanged,
	});

	public static dateFormatProperty = new Property<DateTimePickerFields, string>({
		name: 'dateFormat',
		valueChanged: DateTimePickerFields.dateFormatPropertyChanged,
	});

	public static timeFormatProperty = new Property<DateTimePickerFields, string>({
		name: 'timeFormat',
		valueChanged: DateTimePickerFields.timeFormatPropertyChanged,
	});

	public static localeProperty = new Property<DateTimePickerFields, string>({
		name: 'locale',
		valueChanged: DateTimePickerFields.localePropertyChanged,
	});

	public static hintDateProperty = new Property<DateTimePickerFields, string>({
		name: 'hintDate',
		valueChanged: DateTimePickerFields.hintDatePropertyChanged,
	});

	public static hintTimeProperty = new Property<DateTimePickerFields, string>({
		name: 'hintTime',
		valueChanged: DateTimePickerFields.hintTimePropertyChanged,
	});

	public static pickerDefaultDateProperty = new Property<DateTimePickerFields, Date>({
		name: 'pickerDefaultDate',
		defaultValue: getDateNow(),
		equalityComparer: dateComparer,
		valueConverter: dateValueConverter,
		valueChanged: DateTimePickerFields.pickerDefaultDatePropertyChanged,
	});

	public static pickerTitleDateProperty = new Property<DateTimePickerFields, string>({
		name: 'pickerTitleDate',
		valueChanged: DateTimePickerFields.pickerTitleDatePropertyChanged,
	});

	public static pickerTitleTimeProperty = new Property<DateTimePickerFields, string>({
		name: 'pickerTitleTime',
		valueChanged: DateTimePickerFields.pickerTitleTimePropertyChanged,
	});

	public static pickerOkTextProperty = new Property<DateTimePickerFields, string>({
		name: 'pickerOkText',
		valueChanged: DateTimePickerFields.pickerOkTextPropertyChanged,
	});

	public static pickerCancelTextProperty = new Property<DateTimePickerFields, string>({
		name: 'pickerCancelText',
		valueChanged: DateTimePickerFields.pickerCancelTextPropertyChanged,
	});

	public static orientationProperty = new Property<DateTimePickerFields, ScrollOrientation>({
		name: 'orientation',
		defaultValue: 'horizontal',
		valueChanged: DateTimePickerFields.orientationPropertyChanged,
	});

	public static autoPickTimeProperty = new Property<DateTimePickerFields, boolean>({
		name: 'autoPickTime',
		defaultValue: false,
		valueChanged: DateTimePickerFields.autoPickTimePropertyChanged,
	});

	public static isEnabledProperty = new Property<DateTimePickerFields, boolean>({
		name: 'isEnabled',
		defaultValue: true,
		valueConverter: booleanConverter,
		valueChanged: DateTimePickerFields.isEnabledPropertyChanged,
	});

	private static datePropertyChanged(field: DateTimePickerFields, oldValue: Date, newValue: Date) {
		field.dateField.date = newValue;
		if (!field._shouldSkipTimeAssignment) {
			field.timeField.time = newValue;
		}
		field._shouldSkipTimeAssignment = false;
	}

	private static maxDatePropertyChanged(field: DateTimePickerFields, oldValue: Date, newValue: Date) {
		field.dateField.maxDate = newValue;
	}

	private static minDatePropertyChanged(field: DateTimePickerFields, oldValue: Date, newValue: Date) {
		field.dateField.minDate = newValue;
	}

	private static dateFormatPropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.dateField.dateFormat = newValue;
	}

	private static timeFormatPropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.timeField.timeFormat = newValue;
	}

	private static localePropertyChanged(field: DateTimePickerFields, oldValue: any, newValue: any) {
		field.dateField.locale = newValue;
		field.timeField.locale = newValue;
	}

	private static hintDatePropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.dateField.hint = newValue;
	}

	private static hintTimePropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.timeField.hint = newValue;
	}

	private static pickerDefaultDatePropertyChanged(field: DateTimePickerFields, oldValue: Date, newValue: Date) {
		field.dateField.pickerDefaultDate = newValue;
		field.timeField.pickerDefaultTime = newValue;
	}

	private static pickerTitleDatePropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.dateField.pickerTitle = newValue;
	}

	private static pickerTitleTimePropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.timeField.pickerTitle = newValue;
	}

	private static pickerOkTextPropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.dateField.pickerOkText = newValue;
		field.timeField.pickerOkText = newValue;
	}

	private static pickerCancelTextPropertyChanged(field: DateTimePickerFields, oldValue: string, newValue: string) {
		field.dateField.pickerCancelText = newValue;
		field.timeField.pickerCancelText = newValue;
	}

	private static orientationPropertyChanged(field: DateTimePickerFields, oldValue: ScrollOrientation, newValue: ScrollOrientation) {
		DateTimePickerFields._updateOrientation(field);
	}

	private static autoPickTimePropertyChanged(field: DateTimePickerFields, oldValue: boolean, newValue: boolean) {
		if (field.autoPickTime) {
			field.dateField.pickerDefaultDate = field.pickerDefaultDate;
		} else {
			field.dateField.pickerDefaultDate = clearTime(field.pickerDefaultDate);
		}
	}

	private static isEnabledPropertyChanged(field: DateTimePickerFields, oldValue: boolean, newValue: boolean) {
		field._goToVisualState(newValue ? 'normal' : 'disabled');
		if (field.dateField && field.timeField) {
			field.dateField.isEnabled = newValue;
			field.timeField.isEnabled = newValue;
		}
	}

	createNativeView() {
		const nativeView = super.createNativeView();
		const ngKey = Object.keys(this).find((key) => key.startsWith('_ngcontent'));
		const vueKey = Object.keys(this).find((key) => key.startsWith('data-v'));
		if (ngKey) {
			this.dateField[ngKey] = this[ngKey];
			this.timeField[ngKey] = this[ngKey];
		}
		if (vueKey) {
			this.dateField[vueKey] = this[vueKey];
			this.timeField[vueKey] = this[vueKey];
		}
		return nativeView;
	}

	initNativeView() {
		super.initNativeView();
		this._updateHandlers(true);

		DateTimePickerFields.isEnabledPropertyChanged(this, undefined, this.isEnabled);
	}

	disposeNativeView() {
		this._updateHandlers(false);
		super.disposeNativeView();
	}

	public addEventListener(eventNames: string, callback: (data: EventData) => void, thisArg?: Object) {
		try {
			super.addEventListener(eventNames, callback, thisArg);
			this.dateField.addEventListener(eventNames, callback, thisArg);
			this.timeField.addEventListener(eventNames, callback, thisArg);
		} catch (e) {}
	}
	public removeEventListener(eventNames: string, callback?: any, thisArg?: Object) {
		super.removeEventListener(eventNames, callback, thisArg);
		this.dateField.removeEventListener(eventNames, callback, thisArg);
		this.timeField.removeEventListener(eventNames, callback, thisArg);
	}

	private _updateHandlers(subscribe: boolean) {
		if (subscribe) {
			this._dateChangeHandler =
				this._dateChangeHandler ||
				((args: PropertyChangeData) => {
					if (args.propertyName === 'date') {
						if (!this.autoPickTime && this.timeField.time === undefined) {
							this._shouldSkipTimeAssignment = true;
						}
						this.date = args.value;
					}
				});
			this.dateField.on('dateChange', this._dateChangeHandler);
			this._timeChangeHandler =
				this._timeChangeHandler ||
				((args: PropertyChangeData) => {
					if (args.propertyName === 'time') {
						this.date = args.value;
					}
				});
			this.timeField.on('timeChange', this._timeChangeHandler);
			if (this.className) {
				this._handleClassNameChange();
			}
			this.on('classNameChange', this._handleClassNameChange, this);
		} else {
			this.dateField.off('dateChange', this._dateChangeHandler);
			this.timeField.off('timeChange', this._timeChangeHandler);
			this.off('classNameChange', this._handleClassNameChange);
		}
	}

	private _handleClassNameChange() {
		if (this.dateField && this.timeField) {
			this.dateField.className = this.className;
			this.timeField.className = this.className;
		}
	}

	private static _updateOrientation(field: DateTimePickerFields) {
		if (field.orientation === 'horizontal') {
			GridLayout.setRow(field.dateField, 0);
			GridLayout.setRow(field.timeField, 0);
			GridLayout.setColumn(field.dateField, 0);
			GridLayout.setColumn(field.timeField, 1);
			GridLayout.setRowSpan(field.dateField, 2);
			GridLayout.setRowSpan(field.timeField, 2);
			GridLayout.setColumnSpan(field.dateField, 1);
			GridLayout.setColumnSpan(field.timeField, 1);
		} else if (field.orientation === 'vertical') {
			GridLayout.setRow(field.dateField, 0);
			GridLayout.setRow(field.timeField, 1);
			GridLayout.setColumn(field.dateField, 0);
			GridLayout.setColumn(field.timeField, 0);
			GridLayout.setRowSpan(field.dateField, 1);
			GridLayout.setRowSpan(field.timeField, 1);
			GridLayout.setColumnSpan(field.dateField, 2);
			GridLayout.setColumnSpan(field.timeField, 2);
		}
	}
}

export function dateValueConverter(v: any): Date {
	return new Date(v);
}

DateTimePickerFields.dateProperty.register(DateTimePickerFields);
DateTimePickerFields.maxDateProperty.register(DateTimePickerFields);
DateTimePickerFields.minDateProperty.register(DateTimePickerFields);
DateTimePickerFields.dateFormatProperty.register(DateTimePickerFields);
DateTimePickerFields.timeFormatProperty.register(DateTimePickerFields);
DateTimePickerFields.localeProperty.register(DateTimePickerFields);
DateTimePickerFields.hintDateProperty.register(DateTimePickerFields);
DateTimePickerFields.hintTimeProperty.register(DateTimePickerFields);
DateTimePickerFields.pickerDefaultDateProperty.register(DateTimePickerFields);
DateTimePickerFields.pickerTitleDateProperty.register(DateTimePickerFields);
DateTimePickerFields.pickerTitleTimeProperty.register(DateTimePickerFields);
DateTimePickerFields.pickerOkTextProperty.register(DateTimePickerFields);
DateTimePickerFields.pickerCancelTextProperty.register(DateTimePickerFields);
DateTimePickerFields.orientationProperty.register(DateTimePickerFields);
DateTimePickerFields.autoPickTimeProperty.register(DateTimePickerFields);
DateTimePickerFields.isEnabledProperty.register(DateTimePickerFields);
