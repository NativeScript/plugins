import { Color, Device } from '@nativescript/core';
import { DatePickerOptions, DateTimePickerBase, DateTimePickerStyleBase, PickerOptions, TimePickerOptions } from './common';
import { getDateNow, getDateToday, LocalizationUtils } from './utils';
export * from './ui';
export * from './utils';

export class DateTimePickerStyle extends DateTimePickerStyleBase {}

export class DateTimePicker extends DateTimePickerBase {
	private static readonly SUPPORT_DATE_PICKER_STYLE = parseFloat(Device.osVersion) >= 14.0;
	private static readonly SUPPORT_TEXT_COLOR = parseFloat(Device.osVersion) < 14.0;
	private static readonly DEFAULT_DATE_PICKER_STYLE = parseFloat(Device.osVersion) >= 14.0 ? 3 : 1;
	private static readonly DEFAULT_TIME_PICKER_STYLE = 1;
	private static readonly _isTablet = Device.deviceType === 'Tablet';
	private static _nativeDialog: UIAlertController;

	public static PICKER_DEFAULT_MESSAGE_HEIGHT = parseFloat(Device.osVersion) >= 14.0 ? 300 : 192;
	public static PICKER_WIDTH_INSETS = 16;
	public static PICKER_WIDTH_PAD = 304;
	public static PICKER_DEFAULT_OFFSET = 16;
	public static PICKER_DEFAULT_TITLE_OFFSET = 26.5;
	public static PICKER_DEFAULT_TITLE_HEIGHT = 16;
	public static PICKER_DEFAULT_MESSAGE = parseFloat(Device.osVersion) >= 14.0 ? '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' : '\n\n\n\n\n\n\n\n\n';

	static pickDate(options: DatePickerOptions, style?: DateTimePickerStyle): Promise<Date> {
		const pickDate = new Promise<Date>((resolve) => {
			const nativeDatePicker = DateTimePicker._createNativeDatePicker(options);
			DateTimePicker._nativeDialog = DateTimePicker._createNativeDialog(nativeDatePicker, options, style, (result) => {
				resolve(result);
			});
			DateTimePicker._showNativeDialog(DateTimePicker._nativeDialog, nativeDatePicker, style);
		});
		return pickDate;
	}

	static pickTime(options: TimePickerOptions, style?: DateTimePickerStyle): Promise<Date> {
		const pickTime = new Promise<Date>((resolve) => {
			const nativeTimePicker = DateTimePicker._createNativeTimePicker(options);
			DateTimePicker._nativeDialog = DateTimePicker._createNativeDialog(nativeTimePicker, options, style, (result) => {
				resolve(result);
			});
			DateTimePicker._showNativeDialog(DateTimePicker._nativeDialog, nativeTimePicker, style);
		});
		return pickTime;
	}

	static close() {
		if (DateTimePicker._nativeDialog) {
			DateTimePicker._nativeDialog.dismissViewControllerAnimatedCompletion(true, null);
		}
	}

	static _createNativeDatePicker(options: DatePickerOptions): UIDatePicker {
		const pickerView = UIDatePicker.alloc().initWithFrame(CGRectZero);
		pickerView.datePickerMode = UIDatePickerMode.Date;
		if (this.SUPPORT_DATE_PICKER_STYLE) {
			pickerView.preferredDatePickerStyle = options.iosPreferredDatePickerStyle !== undefined ? options.iosPreferredDatePickerStyle : this.DEFAULT_DATE_PICKER_STYLE;
		}
		const date = options.date ? options.date : getDateToday();
		pickerView.date = date;
		if (options.maxDate) {
			pickerView.maximumDate = options.maxDate;
		}
		if (options.minDate) {
			pickerView.minimumDate = options.minDate;
		}
		if (options.locale) {
			pickerView.locale = LocalizationUtils.createNativeLocale(options.locale);
			if (options.firstWeekday !== undefined) {
				pickerView.calendar = LocalizationUtils.createNativeCalendar(options.locale, options.firstWeekday);
			}
		}
		return pickerView;
	}

	static _createNativeTimePicker(options: TimePickerOptions): UIDatePicker {
		const pickerView = UIDatePicker.alloc().initWithFrame(CGRectZero);
		pickerView.datePickerMode = UIDatePickerMode.Time;
		if (options.timeInterval) {
			pickerView.minuteInterval = options.timeInterval;
		}
		if (this.SUPPORT_DATE_PICKER_STYLE) {
			pickerView.preferredDatePickerStyle = options.iosPreferredDatePickerStyle !== undefined ? options.iosPreferredDatePickerStyle : this.DEFAULT_TIME_PICKER_STYLE;
		}
		const time = options.time ? options.time : getDateNow();
		pickerView.date = time;
		if (options.locale) {
			pickerView.locale = LocalizationUtils.createNativeLocale(options.locale);
		}
		return pickerView;
	}

	static _createNativeDialog(nativePicker: UIDatePicker, options: PickerOptions, style: DateTimePickerStyle, callback: Function) {
		const alertTitle = options.title ? options.title : '';
		const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle(alertTitle, DateTimePicker.PICKER_DEFAULT_MESSAGE, UIAlertControllerStyle.ActionSheet);
		const alertSize = nativePicker.preferredDatePickerStyle === 3 ? 280 : Math.min(alertController.view.frame.size.width, alertController.view.frame.size.height);
		const pickerViewWidth = UIDevice.currentDevice.userInterfaceIdiom === UIUserInterfaceIdiom.Pad ? DateTimePicker.PICKER_WIDTH_PAD : alertSize - DateTimePicker.PICKER_WIDTH_INSETS;

		let pickerContainerFrameTop = options.title ? DateTimePicker.PICKER_DEFAULT_TITLE_OFFSET : DateTimePicker.PICKER_DEFAULT_OFFSET;
		if (options.title) {
			pickerContainerFrameTop += DateTimePicker.PICKER_DEFAULT_TITLE_HEIGHT;
		}
		const pickerViewHeight = DateTimePicker.PICKER_DEFAULT_MESSAGE_HEIGHT;
		const pickerContainer = UIView.alloc().init();
		let spinnersBackgroundColor = new Color('transparent');
		let spinnersTextColor = null;
		if (style) {
			spinnersBackgroundColor = style.spinnersBackgroundColor ? style.spinnersBackgroundColor : spinnersBackgroundColor;
			spinnersTextColor = style.spinnersTextColor;
		}
		DateTimePicker._applyDialogSpinnersColors(nativePicker, pickerContainer, spinnersTextColor, spinnersBackgroundColor);

		const pickerView = nativePicker;
		const left = this._isTablet ? 0 : (alertController.view.frame.size.width - pickerViewWidth) / 2 - DateTimePicker.PICKER_WIDTH_INSETS;
		pickerView.frame = CGRectMake(left, 0, pickerViewWidth, pickerViewHeight);
		pickerContainer.addSubview(pickerView);
		DateTimePicker._clearVibrancyEffects(alertController.view);

		const messageLabel = DateTimePicker._findLabelWithText(alertController.view, DateTimePicker.PICKER_DEFAULT_MESSAGE);
		const messageLabelContainer = DateTimePicker._getLabelContainer(messageLabel);
		if (this._isTablet) {
			messageLabelContainer.clipsToBounds = false;
		} else {
			messageLabelContainer.clipsToBounds = true;
		}
		messageLabelContainer.addSubview(pickerContainer);

		pickerContainer.translatesAutoresizingMaskIntoConstraints = false;
		pickerContainer.topAnchor.constraintEqualToAnchorConstant(alertController.view.topAnchor, pickerContainerFrameTop).active = true;
		pickerContainer.leftAnchor.constraintEqualToAnchor(alertController.view.leftAnchor).active = true;
		pickerContainer.rightAnchor.constraintEqualToAnchor(alertController.view.rightAnchor).active = true;
		pickerContainer.bottomAnchor.constraintEqualToAnchor(alertController.view.bottomAnchor).active = true;

		if (nativePicker.preferredDatePickerStyle === 3) {
			pickerView.centerXAnchor.constraintEqualToAnchor(pickerContainer.centerXAnchor).active = true;
			// pickerView.leftAnchor.constraintEqualToAnchorConstant(pickerContainer.leftAnchor, left).active = true;
		} else {
			pickerView.leftAnchor.constraintLessThanOrEqualToAnchorConstant(pickerContainer.leftAnchor, DateTimePicker.PICKER_WIDTH_INSETS).active = true;
			pickerView.rightAnchor.constraintLessThanOrEqualToAnchorConstant(pickerContainer.rightAnchor, DateTimePicker.PICKER_WIDTH_INSETS).active = true;
		}

		const cancelButtonText = options.cancelButtonText ? options.cancelButtonText : 'Cancel';
		const okButtonText = options.okButtonText ? options.okButtonText : 'OK';
		const cancelActionStyle = style && style.buttonCancelBackgroundColor ? UIAlertActionStyle.Default : UIAlertActionStyle.Cancel;
		let cancelAction = UIAlertAction.actionWithTitleStyleHandler(cancelButtonText, cancelActionStyle, () => {
			callback(null);
		});
		let okAction = UIAlertAction.actionWithTitleStyleHandler(okButtonText, UIAlertActionStyle.Default, () => {
			callback(pickerView.date);
		});
		alertController.addAction(okAction);
		if (cancelButtonText) {
			alertController.addAction(cancelAction);
		}
		if (style) {
			const buttonOkTextColor = style.buttonOkTextColor ? style.buttonOkTextColor : style.buttonsTextColor;
			const buttonCancelTextColor = style.buttonCancelTextColor ? style.buttonCancelTextColor : style.buttonsTextColor;
			DateTimePicker._applyDialogButtonTextColor(okAction, buttonOkTextColor);
			DateTimePicker._applyDialogButtonTextColor(cancelAction, buttonCancelTextColor);
			DateTimePicker._applyDialogTitleTextColor(alertController, style.titleTextColor);
			DateTimePicker._applyBackgroundColors(messageLabelContainer, style);
		}
		return alertController;
	}

	static _showNativeDialog(nativeDialog: UIAlertController, nativePicker: UIDatePicker, style: DateTimePickerStyle) {
		const app = UIApplication.sharedApplication;
		const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
		let viewController = win.rootViewController;
		while (viewController && viewController.presentedViewController) {
			viewController = viewController.presentedViewController;
		}

		if (viewController) {
			if (nativeDialog.popoverPresentationController) {
				nativeDialog.popoverPresentationController.sourceView = viewController.view;
				nativeDialog.popoverPresentationController.sourceRect = CGRectMake(viewController.view.bounds.size.width / 2.0, viewController.view.bounds.size.height / 2.0, 1.0, 1.0);
				nativeDialog.popoverPresentationController.permittedArrowDirections = UIPopoverArrowDirection.Any;
			}

			viewController.presentViewControllerAnimatedCompletion(nativeDialog, true, () => {});
		}
	}

	private static _applyDialogTitleTextColor(nativeDialog: UIAlertController, color: Color) {
		if (color) {
			if (nativeDialog.title) {
				let title = NSAttributedString.alloc().initWithStringAttributes(nativeDialog.title, <any>{ [NSForegroundColorAttributeName]: color.ios });
				nativeDialog.setValueForKey(title, 'attributedTitle');
			}
		}
	}

	private static _applyDialogSpinnersColors(nativePicker: UIDatePicker, nativeContainer: UIView, color: Color, backgroundColor: Color) {
		if (backgroundColor) {
			nativeContainer.backgroundColor = backgroundColor.ios;
		}
		if (color) {
			if (this.SUPPORT_TEXT_COLOR) {
				nativePicker.setValueForKey(color.ios, 'textColor');
			}
			if (nativePicker.preferredDatePickerStyle === 1) {
				nativePicker.setValueForKey(false, 'highlightsToday');
			}
		}
	}

	private static _applyDialogButtonTextColor(action: UIAlertAction, textColor: Color) {
		if (textColor) {
			action.setValueForKey(textColor.ios, 'titleTextColor');
		}
	}

	private static _applyBackgroundColors(labelContainer: UIView, style: DateTimePickerStyle) {
		if (!labelContainer || !style) {
			return;
		}
		if (labelContainer.superview && labelContainer.superview.superview) {
			const mainContainer = labelContainer.superview.superview;
			if (style.dialogBackgroundColor) {
				mainContainer.backgroundColor = style.dialogBackgroundColor.ios;
			}
			const buttonsContainer = mainContainer.subviews.lastObject;
			let buttonsBackground = style.buttonCancelBackgroundColor;
			if (!buttonsBackground) {
				buttonsBackground = style.buttonOkBackgroundColor;
				if (!buttonsBackground) {
					buttonsBackground = style.buttonsBackgroundColor;
				}
			}
			if (buttonsContainer && buttonsBackground) {
				buttonsContainer.backgroundColor = buttonsBackground.ios;
			}
		}
	}

	private static _clearVibrancyEffects(uiView: UIView) {
		if (uiView instanceof UIVisualEffectView && uiView.effect instanceof UIVibrancyEffect) {
			// Since ios13 UIAlertController has some effects which cause
			// semi-transparency and interfere with color customizations:
			uiView.effect = null;
		}
		const subViewsCount = uiView.subviews.count;
		for (let i = 0; i < subViewsCount; i++) {
			DateTimePicker._clearVibrancyEffects(uiView.subviews.objectAtIndex(i));
		}
	}

	private static _getLabelContainer(uiView: UIView) {
		if (uiView && uiView.superview instanceof UIView) {
			return uiView.superview;
		}
		return DateTimePicker._getLabelContainer(uiView.superview);
	}

	private static _findLabelWithText(uiView: UIView, text: string) {
		if (uiView instanceof UILabel && uiView.text === text) {
			return uiView;
		}
		const subViewsCount = uiView.subviews.count;
		for (let i = 0; i < subViewsCount; i++) {
			const label = DateTimePicker._findLabelWithText(uiView.subviews.objectAtIndex(i), text);
			if (label) {
				return label;
			}
		}
		return null;
	}
}
