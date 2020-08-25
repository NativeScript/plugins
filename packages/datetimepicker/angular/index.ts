import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { DatePickerField, TimePickerField, DateTimePickerFields } from "@nativescript/datetimepicker";
import {
  DatePickerFieldDirective,
  TimePickerFieldDirective,
  DateTimePickerFieldsDirective,
} from "./nativescript-datetimepicker.directives";
import {
  DatePickerValueAccessor,
  TimePickerValueAccessor,
  DateTimePickersValueAccessor,
} from "./nativescript-datetimepicker.accessors";

export {
  DatePickerFieldDirective,
  TimePickerFieldDirective,
  DateTimePickerFieldsDirective,
} from "./nativescript-datetimepicker.directives";
export {
  DatePickerValueAccessor,
  TimePickerValueAccessor,
  DateTimePickersValueAccessor,
} from "./nativescript-datetimepicker.accessors";

@NgModule({
  declarations: [
    DatePickerFieldDirective,
    TimePickerFieldDirective,
    DateTimePickerFieldsDirective,
    DatePickerValueAccessor,
    TimePickerValueAccessor,
    DateTimePickersValueAccessor,
  ],
  exports: [
    DatePickerFieldDirective,
    TimePickerFieldDirective,
    DateTimePickerFieldsDirective,
    DatePickerValueAccessor,
    TimePickerValueAccessor,
    DateTimePickersValueAccessor,
  ],
})
export class NativeScriptDateTimePickerModule {}

registerElement("DatePickerField", () => DatePickerField);
registerElement("TimePickerField", () => TimePickerField);
registerElement("DateTimePickerFields", () => DateTimePickerFields);
