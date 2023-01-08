# @nativescript/datetimepicker

A plugin that provides UI elements for picking date and time - `DatePickerField`, `TimePickerField` and `DateTimePickerFields` . The `DatePickerField` and `TimePickerField` extend the  [TextField](https://docs.nativescript.org/ui/textfield) view and the `DateTimePickerFields` extends the [GridLayout](https://docs.nativescript.org/ui/gridlayout) layout container that contains instances of the `DatePickerField` and `TimePickerField` components. There is also a `DateTimePicker` class which provides static methods `pickDate()` and `pickTime()` that can be called to show the same dialog picker as the fields.

<img alt="DatePickerField on iOS (left) and Android (right)"  src="https://raw.githubusercontent.com/NativeScript/nativescript-datetimepicker/master/docs/date_picker_field.png" width="500px"/>

<img alt="TimePickerField on iOS (left) and Android (right)" src="https://raw.githubusercontent.com/NativeScript/nativescript-datetimepicker/master/docs/time_picker_field.png" width="500px"/>

## Install
```cli
npm install @nativescript/datetimepicker
```

## Using datetimepicker

### Core
```xml
<Page
   xmlns="http://schemas.nativescript.org/tns.xsd"
   xmlns:datetime="@nativescript/datetimepicker">
   <datetime:DatePickerField hint="select date"/>
   <datetime:TimePickerField hint="select time"/>
   <datetime:DateTimePickerFields hintDate="select date" hintTime="select time"/>
```

### Angular

You need to register the plugin in the module of your component:
```ts
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
...
@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptDateTimePickerModule,
        ...
    ],
    ...
```
Then use it in HTML as follows:

```html
<DatePickerField hint="select date"></DatePickerField>
<TimePickerField hint="select time"></TimePickerField>
<DateTimePickerFields hintDate="select date" hintTime="select time"></DateTimePickerFields>
```

### Vue

Once the plugin has been installed, register it in the `main.ts`

```ts
import DateTimePicker   from "@nativescript/datetimepicker/vue"

import Home from './components/Home.vue';

const app = createApp(Home).use(DateTimePicker)

app.start();
```

Then use it in a `template` as follows:

```html
<DatePickerField hint="select date"></DatePickerField>
<TimePickerField hint="select time"></TimePickerField>
<DateTimePickerFields hintDate="select date" hintTime="select time"></DateTimePickerFields>
```

### Setting Date and Time 

To set the time of the `TimePickerField` to a specific value, use the `time` property.
```xml
<TimePickerField time="01:00"></TimePickerField>
```
`TimePickerField`'s `time` property can parse values in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Times) format. 

The `DatePickerField` and `DateTimePickerFields` components use the `date` property to set their date(and time for `DateTimePickerFields`) value. 

```xml
<DatePickerField date="2019/02/24"></DatePickerField>

<DateTimePickerFields date="2019/02/24 01:00"></DateTimePickerFields>
```

> The value of the `date` property is passed to the [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

### Changing the Picker Titles and Buttons labels

When one of the fields is tapped, a popup is opened. The popup has an OK and Cancel buttons and an optional title. 
To change those texts, use the `pickerOkText`, `pickerCancelText` and `pickerTitle` properties.

```xml
<DatePickerField hint="tap to choose" pickerOkText="Approve" pickerCancelText="Reject" pickerTitle="Confirm predefined date selection" pickerDefaultDate="2019/05/15"></DatePickerField>
```

The `DateTimePickerFields` has the additional `pickerTitleDate` for the date picker title and the `pickerTitleTime` for the time picker title.

```xml
<DateTimePickerFields hintDate="tap to choose date" hintTime="tap to choose time"
                        pickerOkText="Approve" pickerCancelText="Reject"
                        pickerTitleDate="Confirm predefined date selection"
                        pickerTitleTime="Confirm predefined time selection"
                        pickerDefaultDate="2019/05/15 22:00" autoPickTime="true"></DateTimePickerFields>
```

### Setting Localization

To set the locale of the `DatePickerField` and `DateTimePickerFields` components to a certain value, use the `locale` property.

```xml
<DatePickerField locale="en_GB" hint="select date"></DatePickerField> 
<!-- DateTimePickerFields -->
<DateTimePickerFields locale="de_DE" hintDate="datum auswählen" hintTime="zeit wählen"
                        pickerOkText="Bestätigen" pickerCancelText="Stornieren"
                        pickerTitleDate="Datum auswählen" pickerTitleTime="Zeit wählen" />
```

The locale is used for the names of the months, for the date picking spinners order (the month selector can be either the first or the second spinner) and whether the time is in 12h or 24h format. The `locale` property accepts values in the format specified [here](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html) as Locale ID.

### Formatting the date and time

Aside from the default formats that are dependent on the value of the `locale` property, you can add your custom format that can include ordering of the date/time values and also custom text. For the `DatePickerField` and `DateTimePickerFields` components, use the `dateFormat` and `timeFormat` properties to format the date/time values.

```xml
<DatePickerField date="2019/02/24" dateFormat="'my date': dd-MMMM-yyyy"/> 

<!-- DateTimePickerFields -->
<DateTimePickerFields date="2019/02/24 01:00"
                        dateFormat="'d': dd MMMM yyyy" timeFormat="'t': HH:mm"></DateTimePickerFields>
```

The `TimePickerField` will determine whether to use 12 or 24 hour format (for formatting of the selected time in the field and for the values of the hour spinner) based on the selected region in the settings of the iOS device and based on the `Use 24-Hour Format` setting of the Android device. To change the default setting on Android, you need to use the `timeFormat` property and to change the setting on iOS, you need to use the `locale` property. 

```html
<TimePickerField time="16:00" timeFormat="h:mm a" locale="en_US" />
```

### Setting the Minimum and Maximum Dates

To set the minimum and maximum dates, use the `minDate` and `maxDate` properties.

```html
<DatePickerField minDate="2020/02/02" maxDate="2021/02/02" hint="tap to select"/>
<!-- DateTimePickerFields -->
<DateTimePickerFields minDate="2020/02/02" maxDate="2021/02/02"
                        hintDate="tap to select date" hintTime="tap to select time" />
```

### DateTimePickerFields pickers orientation

To lay out the picker fields in the horizontal(default) or vertical direction, use the `orientation` property.

```xml
<DateTimePickerFields hintDate="select date" hintTime="select time"
                        orientation="vertical"></DateTimePickerFields>
```

### Styling the pickers with CSS

You can use css to style the `DatePickerField` and the `TimePickerField`. The picker supports changing of its colors through predefined css classes: 

- `date-time-picker`: picker background and title text color)
- `date-time-picker-spinners`: background and text color of the date/time selecting spinners
- `date-time-picker-buttons`: background and text color of the OK/Cancel buttons
- `date-time-picker-button-ok` and `date-time-picker-button-cancel`: to provide a separate style for each button. 

> **Note** that the iOS native implementation has limited capabilities for the buttons background colors. When a button is marked as a Cancel button, its background is always white and can't be changed. If you really need a cancel button with another color, you can pass a background color through the designated cancel button class, however this will change the picker layout and place the cancel button along with the OK button and they will both have the same background color.


<img alt="DatePickerField with CSS applied on iOS (left) and Android (right)" src="https://raw.githubusercontent.com/NativeScript/nativescript-datetimepicker/master/docs/date_picker_field_css.png" width="500px"/>

<!-- Here's the css used to achieve the above result, as used in the [demo](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo/app/home/home-page.css#L22), [demo-angular](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-angular/src/app/home/home.component.css#L22) and [demo-vue](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-vue/app/components/Home.vue#L350) applications. -->

```css
timepickerfield,
datepickerfield {
    padding: 12 4;
}

timepickerfield.apply-css,
datepickerfield.apply-css {
    color: #CDDC39;
    background-color: #00796B;
    font-size: 20;
    font-weight: bold;
    padding: 20;
}

.date-time-picker.apply-css {
    color: #00796B;
    background-color: #CDDC39;
}

.date-time-picker-spinners.apply-css {
    color: #CDDC39;
    background-color: #00796B;
}

.date-time-picker-buttons.apply-css {
    color: #00796B;
}
Footer
```

To apply styles at runtime when opening the DateTimePicker you can do the following:

```ts
import { DateTimePicker, DateTimePickerStyle } from '@nativescript/datetimepicker';
import { Application, View} from '@nativescript/core';
function createPicker(args: EventData) {
	const dateTimePickerStyle = DateTimePickerStyle.create(args.object as any);

    // This example handles styling the calendar for light and dark mode of the device settings
	if (Application.systemAppearance() === 'dark') {
      // style for dark mode
      dateTimePickerStyle.buttonsBackgroundColor = new Color('#202125');
      dateTimePickerStyle.dialogBackgroundColor = new Color('#202125');
      dateTimePickerStyle.titleTextColor = new Color('#fff');
      dateTimePickerStyle.buttonsTextColor = new Color('#0067a6');
      dateTimePickerStyle.spinnersBackgroundColor = new Color('#202125');
      dateTimePickerStyle.spinnersTextColor = new Color('#fff');
    } else {
      // style for light mode
      dateTimePickerStyle.buttonsBackgroundColor = new Color('#fff');
      dateTimePickerStyle.dialogBackgroundColor = new Color('#fff');
      dateTimePickerStyle.titleTextColor = new Color('#0067a6');
      dateTimePickerStyle.buttonsTextColor = new Color('#0067a6');
      dateTimePickerStyle.spinnersBackgroundColor = new Color('#fff');
      dateTimePickerStyle.spinnersTextColor = new Color('#0067a6');
    }

     DateTimePicker.pickDate(
      {
        context: (args.object as View)._context,
        minDate: new Date((new Date() as any) -1),
        title: 'DatePicker',
        okButtonText: 'Okay',
        cancelButtonText: 'Cancel',
        locale: 'es'
      },
      dateTimePickerStyle
    ).then((result) => {
        // handle the result
    })
}
```

- Auto Pick Time

When a date is picked with the date component of the `DateTimePickerFields`, the value of the `date` property is updated with the value that is picked. Since the time component also controls the same property, it may be meaningful to display or not to display this value. The `autoPickTime` property controls whether the time component should display the time of the `date` property as soon as it is assigned (when date is picked). Default is `false`, which means that when the user selects a date, the time component will keep displaying its hint text until time is explicitly selected through the time spinners. Here's an example in the [demo](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo/app/home/home-page.xml#L126), [demo-angular](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-angular/src/app/home/home.component.html#L121) and [demo-vue](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-vue/app/components/Home.vue#L123) applications.


- Using 12 h and 24 h Time Formats

The time component will determine whether to use 12 or 24 hour format (for formatting of the selected time in the field and for the values of the hour spinner) based on the selected region in the settings of the iOS device and based on the Use 24-Hour Format settings of the Android device. To change the default setting on Android, you need to use the `timeFormat` property and to change the setting on iOS, you need to use the `locale` property. Here's an example in the [demo](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo/app/home/home-page.xml#L118), [demo-angular](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-angular/src/app/home/home.component.html#L113) and [demo-vue](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-vue/app/components/Home.vue#L115) applications.

- CSS

You can use css to style the `DateTimePickerFields`. The element can be styled like any other layout, additionally the `DatePickerField` and the `TimePickerField` that it contains can be styled as explained in their documentation section.

### DateTimePicker

Internally `DatePickerField` and `TimePickerField` call `DateTimePicker`'s `pickDate` and `pickTime` methods which are public, so they can also be manually called in case a more customized picker is desired. The `pickDate` method accepts `DatePickerOptions`, while the `pickTime` method accepts `TimePickerOptions`. These options allow having the same features as in the fields. These methods are demonstrated in the [demo](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo/app/home/home-view-model.ts#L25), [demo-angular](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-angular/src/app/home/home.component.ts#L44) and [demo-vue](https://github.com/NativeScript/nativescript-datetimepicker/blob/master/demo-vue/app/components/Home.vue#L219) applications.

## API

### DatePickerField API

| Property            | Description                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`              | The date the picker field is currently displaying. Property is of type `Date`. When used in markup, the provided string will be passed to the [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to create a new `Date` object.                                                                                 |
| `minDate`           | The minimum date the picker field can select. Parsing of dates is handled similarly as with `date` property.                                                                                                                                                                                                                                                           |
| `maxDate`           | The maximum date the picker field can select. Parsing of dates is handled similarly as with `date` property.                                                                                                                                                                                                                                                           |
| `locale`            | Identifier of a locale that will be used to localize the names of the month names and also the order of the spinners (with `en_GB` first spinner is day, with `en_US` first spinner is month) (default is based on the device’s locale settings).                                                                                                                      |
| `dateFormat`        | Format used for the text in the picker field (on android used as a pattern for a [SimpleDateFormat](https://developer.android.com/reference/java/text/SimpleDateFormat), on iOS used as a dateFormat for [NSDateFormatter](https://developer.apple.com/documentation/foundation/nsdateformatter), default is generated by the current value of the `locale` property). |
| `pickerDefaultDate` | The date that will be displayed in the picker, if it is opened while date is undefined (if `pickerDefaultDate` is undefined, the picker will display today). Parsing of dates is handled similarly as with `date` property.                                                                                                                                            |
| `pickerTitle`       | Text that will be displayed as title of the picker, default is undefined.                                                                                                                                                                                                                                                                                              |
| `pickerOkText`      | Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).                                                                                                                                                                                                                      |
| `pickerCancelText`  | Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).                                                                                                                                                                                                                    |

### TimePickerField API

| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `time`              | The time the picker field is currently displaying. Property is of type `Date`. When used in markup, the provided string will be parsed to a new `Date` object if it is in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Times) format.                                                                                                                                                                                                                                    |
| `locale`            | Identifier of a locale that will be used to create locale-specific time formatter of the time (if the format is 12-Hour, with de_DE locale “vorm.”/”nachm.” will be used to show whether time is before/after noon, with en_US locale “am”/”pm” will be used) (default is based on the device’s locale settings). The locale will also be used on iOS to determine whether the picker will be in 12 or 24 hour format.                                                        |
| `timeFormat`        | Format used for the text in the picker field (on android used as a pattern for a [SimpleDateFormat](https://developer.android.com/reference/java/text/SimpleDateFormat), on iOS used as a dateFormat for [NSDateFormatter](https://developer.apple.com/documentation/foundation/nsdateformatter), default is generated by the current value of the locale property), the format will also be used on Android to determine whether the picker will be in 12 or 24 hour format. |
| `pickerDefaultTime` | The time that will be displayed in the picker, if it is opened while time is undefined (if defaultTime is undefined, the picker will display now). Parsing is handled similarly as with `time` property.                                                                                                                                                                                                                                                                      |
| `pickerTitle`       | Text that will be displayed as title of the picker, default is undefined.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `pickerOkText`      | Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).                                                                                                                                                                                                                                                                                                                             |
| `pickerCancelText`  | Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).                                                                                                                                                                                                                                                                                                                           |

### DateTimePickerFields API

| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`              | The date the picker fields are currently displaying. Property is of type `Date`. When used in markup, the provided string will be passed to the [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to create a new `Date` object.                                                                                                                                                                                                                                                                                      |
| `minDate`           | The minimum date the date component can select. Parsing of dates is handled similarly as with `date` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `maxDate`           | The maximum date the time component can select. Parsing of dates is handled similarly as with `date` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `locale`            | Identifier of a locale that will be used to localize the names of the month names, the order of the date spinners (with `en_GB` first spinner is day, with `en_US` first spinner is month), and to create locale-specific time formatter of the time (if the format is 12-Hour, with de_DE locale “vorm.”/”nachm.” will be used to show whether time is before/after noon, with en_US locale “am”/”pm” will be used) (default is based on the device’s locale settings). The locale will also be used on iOS to determine whether the picker will be in 12 or 24 hour format. |
| `dateFormat`        | Format used for the text in the picker field (on android used as a pattern for a [SimpleDateFormat](https://developer.android.com/reference/java/text/SimpleDateFormat), on iOS used as a dateFormat for [NSDateFormatter](https://developer.apple.com/documentation/foundation/nsdateformatter), default is generated by the current value of the `locale` property).                                                                                                                                                                                                        |
| `timeFormat`        | Format used for the text in the picker field (on android used as a pattern for a [SimpleDateFormat](https://developer.android.com/reference/java/text/SimpleDateFormat), on iOS used as a dateFormat for [NSDateFormatter](https://developer.apple.com/documentation/foundation/nsdateformatter), default is generated by the current value of the locale property), the format will also be used on Android to determine whether the picker will be in 12 or 24 hour format.                                                                                                 |
| `pickerDefaultDate` | The date and time that will be displayed in the pickers, if opened while `date` is `undefined` (if `pickerDefaultDate` is undefined, the picker will display now). Parsing of dates is handled similarly as with `date` property.                                                                                                                                                                                                                                                                                                                                             |
| `pickerTitleDate`   | Text that will be displayed as title of the picker, when the date component is tapped, default is undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `pickerTitleTime`   | Text that will be displayed as title of the picker, when the time component is tapped, default is undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `pickerOkText`      | Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `pickerCancelText`  | Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `autoPickTime`      | Value that indicates whether the time component should be assigned a value as soon as a date is picked by the date component, default is false.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `orientation`       | Value that indicates how the date and time components will be arranged, default is "horizontal", which means that they will be on the same row.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `hintDate`          | Text displayed in the date component when `date` is `null`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `hintTime`          | Text displayed in the time component when `date` is `null`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### DateTimePicker API

**DateTimePicker**:

| Method                                                                             | Description                                                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pickDate(options: DatePickerOptions, style?: DateTimePickerStyle): Promise<Date>` | picks a date from a dialog picker initialized with the provided options and styled with the optionally provided style. |
| `pickTime(options: TimePickerOptions, style?: DateTimePickerStyle): Promise<Date>` | picks a time from a dialog picker initialized with the provided options and styled with the optionally provided style. |
| `close()`                                                                          | closes the presented dialog picker                                                                                     |

**DatePickerOptions**:

| Property           | Description                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context`          | View's context.                                                                                                                                                                                                                                  |
| `date`             | The date that will be displayed in the picker, (if not provided, the picker will display today).                                                                                                                                                 |
| `minDate`          | The minimum date that can be selected.                                                                                                                                                                                                           |
| `maxDate`          | The maximum date that can be selected.                                                                                                                                                                                                           |
| `locale`           | Identifier of a locale that will be used to localize the names of the month names and also the order of the spinners (with `en_GB` first spinner is day, with `en_US` first spinner is month, default is based on the device’s locale settings). |
| `title`            | Text that will be displayed as title of the picker, default is undefined.                                                                                                                                                                        |
| `okButtonText`     | Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).                                                                                                |
| `cancelButtonText` | Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).                                                                                              |

**TimePickerOptions**:

| Property           | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context`          | View's context.                                                                                                                                                                                                                                                                                                                                                                                 |
| `time`             | The time that will be displayed in the picker, (if not provided, the picker will display now).                                                                                                                                                                                                                                                                                                  |
| `is24Hours`        | This value will be used only on Android to determine whether the picker will be in 12 or 24 hour format.                                                                                                                                                                                                                                                                                        |
| `locale`           | Identifier of a locale that will be used to create locale-specific time formatter of the time (with `de_DE` locale “vorm.”/”nachm.” will be used to show whether time is before/after noon, with `en_US` locale “am”/”pm” will be used, default is based on the device’s locale settings). The locale will also be used on iOS to determine whether the picker will be in 12 or 24 hour format. |
| `title`            | Text that will be displayed as title of the picker, default is undefined.                                                                                                                                                                                                                                                                                                                       |
| `okButtonText`     | Text for the confirmation button of the picker (default is OK on iOS, localized version of OK on android (based on the devices locale settings)).                                                                                                                                                                                                                                               |
| `cancelButtonText` | Text for the cancel button of the picker (default is Cancel on iOS, localized version of Cancel on android (based on the devices locale settings)).                                                                                                                                                                                                                                             |

**DateTimePickerStyle**:

| Property                      | Description                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `titleTextColor`              | Color to be used for the title text.                                                                       |
| `dialogBackgroundColor`       | Color to be used as a background of the dialog picker.                                                     |
| `spinnersTextColor`           | Color to be used for the texts of the date/time spinners.                                                  |
| `spinnersBackgroundColor`     | Color to be used as a background of the date/time spinners.                                                |
| `buttonsTextColor`            | Color to be used for the texts of the ok/cancel buttons.                                                   |
| `buttonsBackgroundColor`      | Color to be used as a background of the ok/cancel buttons.                                                 |
| `buttonOkTextColor`           | Color to be used for the texts of the ok button.                                                           |
| `buttonOkBackgroundColor`     | Color to be used as a background of the ok button.                                                         |
| `buttonCancelTextColor`       | Color to be used for the texts of the cancel button.                                                       |
| `buttonCancelBackgroundColor` | Color to be used as a background of the cancel button.                                                     |
| `create(view: View)`          | Creates a style based on any css provided. The parameter is a View with the properly setup css class name. |

## License

Apache License Version 2.0
