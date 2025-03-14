import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from '@nativescript/angular';
import { PickerField } from '@nativescript/picker';

const PICKER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => PickerValueAccessor),
	multi: true,
};

/**
 * The accessor for setting a date and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <PickerField [(ngModel)]="model.test">
 *  ```
 */
@Directive({
	selector: 'PickerField[ngModel],PickerField[formControlName],PickerField[formControl],' + 'pickerfield[ngModel],pickerfield[formControlName],pickerfield[formControl],' + 'pickerField[ngModel],pickerField[formControlName],pickerField[formControl],' + 'picker-field[ngModel],picker-field[formControlName],picker-field[formControl]',
	providers: [PICKER_VALUE_ACCESSOR],
	host: {
		'(selectedValueChange)': 'handleSelectedValueChange($event)',
		'(pickerOpened)': 'handlePickerOpened($event)',
		'(pickerClosed)': 'handlePickerClosed($event)',
	},
	standalone: false,
})
export class PickerValueAccessor extends BaseValueAccessor<PickerField> {
	private _hasBeenOpened = false;

	constructor(elementRef: ElementRef) {
		super(elementRef.nativeElement);
	}

	handleSelectedValueChange(args: any) {
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

	writeValue(value: any): void {
		const normalized = super.normalizeValue(value);
		this.view.selectedValue = normalized;
	}
}
