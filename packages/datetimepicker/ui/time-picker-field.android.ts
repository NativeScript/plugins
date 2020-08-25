import { TimePickerFieldBase } from "./time-picker-field.common";
import { LocalizationUtils } from "../utils/localization-utils";

export class TimePickerField extends TimePickerFieldBase {
    initNativeView() {
        super.initNativeView();
        this.nativeView.setFocusable(false);
        if (this.timeFormat === undefined) {
            this.timeFormat = LocalizationUtils.createDefaultTimeFormat(this._context);
        }
        this._updateRegionalSettings();
    }
}