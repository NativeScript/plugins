# @nativescript/iqkeyboardmanager

A NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering `UITextView` controls.

![Example of using the IQKeyBoardManager NativeScript plugin on an iOS device](https://raw.githubusercontent.com/NativeScript/nativescript-IQKeyboardManager/master/screenshot.gif)

## Installation

```cli
npm install @nativescript/iqkeyboardmanager
```

## Usage

Related text fields should be siblings for the IQKeyboardManager to automatically
add the `previous`(`<`) and `next`(`>`) buttons to the accessory bar. The user can then use those buttons to jump back and forth.

### Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="nativescript-iqkeyboardmanager">
  <ScrollView>
    <IQKeyboardManager:PreviousNextView><!-- add this 'wrapper' to enable those previous / next buttons -->
      <StackLayout>
          <TextField hint="Email"/>
          <TextField hint="Password"/>
      </StackLayout>
    </IQKeyboardManager:PreviousNextView>
  </ScrollView>
</Page>
```

### Angular

In the `.modules.ts` file where you want to use this feature (or the `app.module.ts`),
register the `PreviousNextView` element:

```ts
import { registerElement } from '@nativescript/angular';
import { PreviousNextView } from '@nativescript/iqkeyboardmanager';
registerElement('PreviousNextView', () => PreviousNextView);
```

Then  use the view in the markup as follows:

```html
<ScrollView>
	<PreviousNextView
		><!-- add this 'wrapper' to enable those previous / next buttons -->
		<StackLayout>
				<TextField hint="Email"></TextField>
				<TextField hint="Password"></TextField>
		</StackLayout>
	</PreviousNextView>
</ScrollView>
```

#### Vue

Add the following code to the `app.ts` file to register the component:

```ts
registerElement('PreviousNextView', () => require('@nativescript/iqkeyboardmanager').PreviousNextView);
```

Then use it in a markup file.
```xml
<ScrollView>
	<PreviousNextView
		><!-- add this 'wrapper' to enable those previous / next buttons -->
		<StackLayout>
				<TextField hint="Email"></TextField>
				<TextField hint="Password"></TextField>
		</StackLayout>
	</PreviousNextView>
</ScrollView>
```

### Adding a hint text to a TextView's accessory bar

By default, when a `TextField` is focused, the keyboard manager shows its hint label in the accessory bar above the keyboard.

For a `TextView`, however, use the `TextViewWithHint` component
provided by this plugin to add its hint label to the accessory bar. 

#### Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="@nativescript/iqkeyboardmanager">
  <ScrollView>
    <StackLayout>
      <TextView hint="Not working TextView hint"/>
      <IQKeyboardManager:TextViewWithHint hint="Working TextView hint 🤪"/>
    </StackLayout>
  </ScrollView>
</Page>
```

#### Angular

In the `.modules.ts` file where you want to use this feature (or the `app.module.ts`),
register the `TextViewWithHint` element:

```typescript
import { registerElement } from '@nativescript/angular';
import { TextViewWithHint } from '@nativescript/iqkeyboardmanager';
registerElement('TextViewWithHint', () => TextViewWithHint);
```

Then in the markup, use that element like this:

```html
<StackLayout>
	<TextView hint="Not working TextView hint"></TextView>
	<TextViewWithHint hint="Working TextView hint 🤪"></TextViewWithHint>
</StackLayout>
```

#### Vue

Register the component.

```javascript
.registerElement('TextViewWithHint', () => require('@nativescript/iqkeyboardmanager').TextViewWithHint);
```

### Tweaking the appearance and behavior

1. Add the following path to your app’s `references.d.ts` file. 

```xml
/// <reference path="./node_modules/@nativescript/iqkeyboardmanager/index.d.ts" />
```

2. Initialize an instance of `IQKeyboardManager` as follows.

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
