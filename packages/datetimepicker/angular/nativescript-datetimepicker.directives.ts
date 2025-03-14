import { Directive } from '@angular/core';

@Directive({
	selector: 'DatePickerField',
	standalone: false,
})
export class DatePickerFieldDirective {}

@Directive({
	selector: 'TimePickerField',
	standalone: false,
})
export class TimePickerFieldDirective {}

@Directive({
	selector: 'DateTimePickerFields',
	standalone: false,
})
export class DateTimePickerFieldsDirective {}
