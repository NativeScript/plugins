# @nativescript/iqkeyboardmanager

NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering `UITextView` controls.

![Example of using the IQKeyBoardManager NativeScript plugin on an iOS device](https://raw.githubusercontent.com/NativeScript/nativescript-IQKeyboardManager/master/screenshot.gif)

```cli
ns plugin add @nativescript/iqkeyboardmanager
```

## Usage

That's it! IQKeyboardManager takes care of all initialization when your app starts up by default.

## Advanced usage

### Grouping related textfields (previous / next buttons)

If your UI layout has sibling text fields, then IQKeyboardManager is able to automatically
add previous / next buttons to the accessory bar which the user can use to jump back and forth.
See those < and > buttons in the video above.

In case those fields were not direct siblings, until version 1.3.0 of this plugin, you had no way
to force the previous / next buttons to appear. However, now you can:

#### NativeScript /w XML usage

Note in the example below that the two `<TextField>` controls are not siblings (both have parent `<StackLayout>` containers). Because of this, IQKeyboardManager will not automatically provide an optimized keyboard by default.

However, if you surround the controls with this plugin's `<PreviousNextView>` control, as the example below shows, you will continue to get an optimized keyboard as expected.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="nativescript-iqkeyboardmanager">
  <StackLayout>
    <IQKeyboardManager:PreviousNextView><!-- add this 'wrapper' to enable those previous / next buttons -->
      <StackLayout>
        <StackLayout>
          <TextField hint="Email"/>
        </StackLayout>
        <StackLayout>
          <TextField hint="Password"/>
        </StackLayout>
      </StackLayout>
    </IQKeyboardManager:PreviousNextView>
  </Stacklayout>
</Page>
```

#### NativeScript /w Angular usage

In the `.modules.ts` file where you want to use this feature (or the `app.module.ts`),
register the `PreviousNextView` element:

```typescript
import { registerElement } from 'nativescript-angular';
registerElement('PreviousNextView', () => require('@nativescript/iqkeyboardmanager').PreviousNextView);
```

Then in the view, use that element like this (again, we went nuts with the `<StackLayout>`s:

```html
<StackLayout>
	<PreviousNextView
		><!-- add this 'wrapper' to enable those previous / next buttons -->
		<StackLayout>
			<StackLayout>
				<TextField hint="Email"></TextField>
			</StackLayout>
			<StackLayout>
				<TextField hint="Password"></TextField>
			</StackLayout>
		</StackLayout>
	</PreviousNextView>
</StackLayout>
```

#### NativeScript /w Vue usage

Vue usage is very similar to Angular usage, the only difference is in how the element is registered. Open your app's entry file, and add this:

```javascript
Vue.registerElement('PreviousNextView', () => require('@nativescript/iqkeyboardmanager').PreviousNextView);
```

### Adding a placeholder/hint on a `TextView`'s accessory bar

Looking at the gif above you may notice when focusing the Email address and password fields,
the placeholder/hint of those `TextField`s is shown in the accessory bar above the keyboard.

But when you use a `TextView` instead of a `TextField`, the placeholder is not shown because
of an iOS limitation. You can work around this limitation by using the `TextViewWithHint`
provided by this plugin. So whenever you want to use a `TextView` with a placeholder,
use `TextViewWithHint` instead.

#### NativeScript /w XML usage

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="@nativescript/iqkeyboardmanager">
  <StackLayout>
    <TextView hint="Not working TextView hint"/>
    <IQKeyboardManager:TextViewWithHint hint="Working TextView hint 🤪"/>
  </StackLayout>
</Page>
```

#### NativeScript /w Angular usage

In the `.modules.ts` file where you want to use this feature (or the `app.module.ts`),
register the `TextViewWithHint` element:

```typescript
import { registerElement } from '@nativescript/angular';
registerElement('TextViewWithHint', () => require('@nativescript/iqkeyboardmanager').TextViewWithHint);
```

Then in the view, use that element like this:

```html
<StackLayout>
	<TextView hint="Not working TextView hint"></TextView>
	<TextViewWithHint hint="Working TextView hint 🤪"></TextViewWithHint>
</StackLayout>
```

#### NativeScript /w Vue usage

Vue usage is very similar to Angular usage, the only difference is in how the element is registered. Open your app's entry file, and add this:

```javascript
Vue.registerElement('TextViewWithHint', () => require('@nativescript/iqkeyboardmanager').TextViewWithHint);
```

### Tweaking the appearance and behavior

Start by adding the following two paths into your app’s `references.d.ts` file. (See this repo’s demo app for a specific example.)

```
/// <reference path="./node_modules/tns-platform-declarations/ios/ios.d.ts" />
/// <reference path="./node_modules/@nativescript/iqkeyboardmanager/index.d.ts" />
```

> **NOTE**: You might also need to `npm install --save-dev tns-platform-declarations` to bring in NativeScript’s TypeScript definitions for native iOS development.

Next, initialize an instance of `IQKeyboardManager` with the following line of code.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
```

You now have the full IQKeyboardManager APIs available for you to use. For example you could use the following code to switch to a dark keyboard.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
iqKeyboard.overrideKeyboardAppearance = true;
iqKeyboard.keyboardAppearance = UIKeyboardAppearance.Dark;
```

For more examples of what's possible, run the demo app (shown in the gif below) and check out the [app's `main-view-model.ts` file](https://github.com/NativeScript/plugins/blob/main/apps/demo/src/plugin-demos/iqkeyboardmanager.ts).

<img src="https://github.com/tjvantoll/nativescript-IQKeyboardManager/raw/master/demo.gif" width="320px"/>

### Multi-factor one-time code auto-fill

While the following is not a feature specific to IQKeyboardManager, you are here because you want the best keyboard experience for your NativeScript app and this may be helpful to know about.

iOS has a feature where a text field's QuickType search suggestion bar can suggest one-time code values for multi-factor authentication that were texted to your device.

If the field is specially-identified as a one-time code field, the suggestion will appear for about 3 minutes after being received, and the user simply has to tap the suggestion to fill in the value—no short term memorization or copy/paste gestures required. Examples of message formats are:

- 123456 is your App Name code.
- 123456 is your App Name login code.
- 123456 is your App Name verification code.

To implement this functionality in your own app, first declare `UITextContentTypeOneTimeCode` near your component imports:

```typescript
declare var UITextContentTypeOneTimeCode;
```

Then, set the field's `ios.textContentType` property:

```typescript
// This code assumes this.page exists as a reference to the current Page.
const mfaCodeField: TextField = this.page.getViewById(oneTimeCodeFieldName);
if (mfaCodeField !== null && mfaCodeField.ios) {
	mfaCodeField.ios.textContentType = UITextContentTypeOneTimeCode;
}
```

There are other `textContentType` values you might want to use. You can read more about the property in [this article](https://medium.com/developerinsider/ios12-password-autofill-automatic-strong-password-and-security-code-autofill-6e7db8da1810).

## Documentation

For more details on how IQKeyboardManager works, including more detailed API documentation, refer to [the library's CocoaPod page](https://cocoapods.org/pods/IQKeyboardManager).

## Maintainers

For maintainer’s of this plugin’s source code: when the [IQKeyboardManager Podfile](https://github.com/NativeScript/plugins/blob/main/packages/iqkeyboardmanager/platforms/ios/Podfile) updates, you should generate new typings for for this plugin to reflect those changes.

To do so, execute these commands.

```bash
cd demo
TNS_DEBUG_METADATA_PATH="$(pwd)/metadata" tns build ios
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios
```

Next, locate IQKeyboardManager’s generated typings file in the `demo/typings` folder and override the `IQKeyboardManager.d.ts` file in this repo’s root.

## License

Apache License Version 2.0
