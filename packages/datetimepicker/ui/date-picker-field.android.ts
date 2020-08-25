import { DatePickerFieldBase } from "./date-picker-field.common";

export class DatePickerField extends DatePickerFieldBase {
    initNativeView() {
        super.initNativeView();
        this.nativeView.setFocusable(false);
    }
}