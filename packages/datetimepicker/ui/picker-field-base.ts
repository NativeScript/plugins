import { TextField, Property, GestureTypes, TouchGestureEventData } from '@nativescript/core';

export abstract class PickerFieldBase extends TextField {
	public locale: string;
	public pickerTitle: string;
	public pickerOkText: string;
	public pickerCancelText: string;

	private _pickerFieldBaseTapHandler: (args: TouchGestureEventData) => void;

	constructor() {
		super();
		this.editable = false;
	}

	public static localeProperty = new Property<PickerFieldBase, string>({
		name: 'locale',
		valueChanged: PickerFieldBase.localePropertyChanged,
	});

	public static pickerTitleProperty = new Property<PickerFieldBase, string>({
		name: 'pickerTitle',
	});

	public static pickerOkTextProperty = new Property<PickerFieldBase, string>({
		name: 'pickerOkText',
	});

	public static pickerCancelTextProperty = new Property<PickerFieldBase, string>({
		name: 'pickerCancelText',
	});

	public abstract open(): void;

	initNativeView() {
		super.initNativeView();
		this._updatePickerFieldBaseTapHandler(true);
	}

	disposeNativeView() {
		this._updatePickerFieldBaseTapHandler(false);
		super.disposeNativeView();
	}

	private static localePropertyChanged(field: PickerFieldBase, oldValue: any, newValue: any) {
		field.onLocaleChanged(oldValue, newValue);
	}

	protected onLocaleChanged(oldValue: string, newValue: string) {}

	private _updatePickerFieldBaseTapHandler(subscribe: boolean) {
		if (subscribe) {
			this._pickerFieldBaseTapHandler =
				this._pickerFieldBaseTapHandler ||
				((args: TouchGestureEventData) => {
					this._onPickerFieldBaseTap(args);
				});
			this.on('tap', this._pickerFieldBaseTapHandler);
		} else {
			this.off('tap', this._pickerFieldBaseTapHandler);
		}
	}

	private _onPickerFieldBaseTap(args: TouchGestureEventData) {
		if (this.isEnabled) {
			this.open();
		}
	}
}

PickerFieldBase.localeProperty.register(PickerFieldBase);
PickerFieldBase.pickerTitleProperty.register(PickerFieldBase);
PickerFieldBase.pickerOkTextProperty.register(PickerFieldBase);
PickerFieldBase.pickerCancelTextProperty.register(PickerFieldBase);
