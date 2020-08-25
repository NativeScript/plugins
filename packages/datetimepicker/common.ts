import { View, ContentView, Page, Color, Frame } from "@nativescript/core";
import {
    DateTimePicker as DateTimePickerDefinition,
    DateTimePickerStyle as DateTimePickerStyleDefinition
} from ".";

export const CSS_NAME = "date-time-picker";
export const SPINNERS_CSS_NAME = "date-time-picker-spinners";
export const BUTTONS_CSS_NAME = "date-time-picker-buttons";
export const BUTTON_OK_CSS_NAME = "date-time-picker-button-ok";
export const BUTTON_CANCEL_CSS_NAME = "date-time-picker-button-cancel";

export class DateTimePickerBase implements DateTimePickerDefinition {
    static pickDate(options: DatePickerOptions, style?: DateTimePickerStyleDefinition): Promise<Date> {
        return Promise.resolve(null);
    }
    static pickTime(options: TimePickerOptions, style?: DateTimePickerStyleDefinition): Promise<Date> {
        return Promise.resolve(null);
    }
}

export interface DatePickerOptions extends PickerOptions {
    date?: Date;
    minDate?: Date;
    maxDate?: Date;
}

export interface TimePickerOptions extends PickerOptions {
    time?: Date;
    is24Hours?: boolean;
}

export interface PickerOptions {
    context: any;
    locale?: string;
    title?: string;
    okButtonText?: string;
    cancelButtonText?: string;
}

export class DateTimePickerStyleBase implements DateTimePickerStyleDefinition {
    dialogBackgroundColor: Color;
    titleTextColor: Color;
    spinnersTextColor: Color;
    spinnersBackgroundColor: Color;
    buttonsTextColor: Color;
    buttonsBackgroundColor: Color;
    buttonOkTextColor: Color;
    buttonOkBackgroundColor: Color;
    buttonCancelTextColor: Color;
    buttonCancelBackgroundColor: Color;

    static create(view: View): DateTimePickerStyleBase {
        let style = new DateTimePickerStyleBase();
        const pickerColors = getColorsForClassName(view, CSS_NAME);
        const pickerSpinnersColors = getColorsForClassName(view, SPINNERS_CSS_NAME);
        const pickerButtonsColors = getColorsForClassName(view, BUTTONS_CSS_NAME);
        const pickerButtonOkColors = getColorsForClassName(view, BUTTON_OK_CSS_NAME);
        const pickerButtonCancelColors = getColorsForClassName(view, BUTTON_CANCEL_CSS_NAME);
        style.dialogBackgroundColor = pickerColors.backgroundColor;
        style.titleTextColor = pickerColors.color;
        style.spinnersBackgroundColor = pickerSpinnersColors.backgroundColor;
        style.spinnersTextColor = pickerSpinnersColors.color;
        style.buttonsBackgroundColor = pickerButtonsColors.backgroundColor;
        style.buttonsTextColor = pickerButtonsColors.color;
        style.buttonOkBackgroundColor = pickerButtonOkColors.backgroundColor;
        style.buttonOkTextColor = pickerButtonOkColors.color;
        style.buttonCancelBackgroundColor = pickerButtonCancelColors.backgroundColor;
        style.buttonCancelTextColor = pickerButtonCancelColors.color;
        return style;
    }
}

export function getCurrentPage(): Page {
    let topmostFrame = Frame.topmost();
    if (topmostFrame) {
        return topmostFrame.currentPage;
    }
    return undefined;
}

function getColorsForClassName(view: View, className: string): { color: Color, backgroundColor: Color } {
    let color: Color;
    let backgroundColor: Color;
    let tempView = new ContentView();
    const ngKey = Object.keys(view).find(key => key.startsWith('_ngcontent'));
    const vueKey = Object.keys(view).find(key => key.startsWith('data-v'));
    if (ngKey) {
        tempView[ngKey] = view[ngKey];
    }
    if (vueKey) {
        tempView[vueKey] = view[vueKey];
    }
    if (view.className) {
        let classNames = view.className.split(' ');
        classNames.forEach(element => {
            tempView.cssClasses.add(element);
        });
    }
    if (className) {
        tempView.cssClasses.add(className);
    }
    applySelectors(tempView, (v) => {
        color = v.color;
        backgroundColor = <Color>v.backgroundColor;
    });
    return { color: color, backgroundColor: backgroundColor };
}

function applySelectors<T extends View>(view: T, callback: (view: T) => void) {
    let currentPage = getCurrentPage();
    if (currentPage) {
        let styleScope = currentPage['_styleScope'];
        if (styleScope) {
            view['_inheritStyleScope'](styleScope);
            view.onLoaded();
            callback(view);
            view.onUnloaded();
        }
    }
}