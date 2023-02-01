# @nativescript/iqkeyboardmanager

A NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering `UITextView` controls.

![Example of using the IQKeyBoardManager NativeScript plugin on an iOS device](https://raw.githubusercontent.com/NativeScript/nativescript-IQKeyboardManager/master/screenshot.gif)

## Contents
* [Installation](#installation)
* [Usage](#usage)
	* [Core](#core)
	* [Angular](#angular)
	* [Vue](#vue)
	* [Svelte](#svelte)
	* [Adding a hint text to a TextView's accessory bar](#adding-a-hint-text-to-a-textviews-accessory-bar)
		* [Core](#core-1)
		* [Angular](#angular-1)
		* [Vue](#vue-1)
		* [Svelte](#svelte-1)

	* [Tweaking the appearance and behavior](#tweaking-the-appearance-and-behavior)
	* [Multi-factor one-time code auto-fill](#multi-factor-one-time-code-auto-fill)
* [Documentation](#documentation)
* [Maintainers](#maintainers)
* [License](#license)

## Installation

```cli
npm install @nativescript/iqkeyboardmanager
```

## Usage

Related text fields should be siblings for the IQKeyboardManager to automatically
add the `previous`(`<`) and `next`(`>`) buttons to the accessory bar. The user can then use those buttons to jump back and forth.

### Core
To register the plugin in core/plain NativeScript, use the `xmlns` attribute to add it to the xml namespace.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="@nativescript-iqkeyboardmanager">
  <ScrollView>
    <IQKeyboardManager.PreviousNextView><!-- add this 'wrapper' to enable those previous / next buttons -->
      <StackLayout>
          <TextField hint="Email"/>
          <TextField hint="Password"/>
      </StackLayout>
    </IQKeyboardManager:PreviousNextView>
  </ScrollView>
</Page>
```

### Angular

Register the `PreviousNextView` element in the `.modules.ts` file where you want to use this feature (or the `app.module.ts`).
```ts
import { registerElement } from '@nativescript/angular';
import { PreviousNextView } from '@nativescript/iqkeyboardmanager';
registerElement('PreviousNextView', () => PreviousNextView);
```

Then use the element in the markup as follows:

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

### Vue

Register the component by adding the following code to the `app.ts` file.

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

### Svelte

Register the component by adding the following code to the `app.ts` file.

```ts
registerNativeViewElement('PreviousNextView', () => require('@nativescript/iqkeyboardmanager').PreviousNextView);
```
Then use it.

```xml
<previousNextView><!-- add this 'wrapper' to enable those previous / next buttons -->
<stackLayout>
	<textField hint="Email"/>
	<textField hint="Password"/>
</stackLayout>
</previousNextView>
```

### Adding a hint text to a TextView's accessory bar

By default, when a `TextField` is focused, the keyboard manager shows the field's hint label in the accessory bar above the keyboard.

For a `TextView`, however, use the `TextViewWithHint` component,
provided by this plugin, to add the hint label to the accessory bar. 

#### Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IQKeyboardManager="@nativescript/iqkeyboardmanager">
  <ScrollView>
    <StackLayout>
      <TextView hint="Not working TextView hint"/>
      <IQKeyboardManager.TextViewWithHint hint="Working TextView hint 🤪"/>
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

#### Svelte

Register the component.

```javascript
.registerNativeViewElement('textViewWithHint', () => require('@nativescript/iqkeyboardmanager').TextViewWithHint);
```

#### Tweaking the appearance and behavior

1. Add the following path to your app’s `references.d.ts` file. 

```xml
/// <reference path="./node_modules/@nativescript/iqkeyboardmanager/index.d.ts" />
```

2. Initialize an instance of `IQKeyboardManager` as follows.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
```

You now have the full IQKeyboardManager APIs available for you to use. For example, to switch to a dark keyboard you could use the following code.

```typescript
const iqKeyboard = IQKeyboardManager.sharedManager();
iqKeyboard.overrideKeyboardAppearance = true;
iqKeyboard.keyboardAppearance = UIKeyboardAppearance.Dark;
```

For a full example, check out the example on StackBlitz at any of the following links.
* [NativeScript TypeScript](https://stackblitz.com/edit/nativescript-stackblitz-templates-sia8th?file=app/main-page.xml)
* [NativeScript Svelte](https://stackblitz.com/edit/nativescript-stackblitz-templates-rygnsk?file=app/components/Home.svelte)

<img src="https://github.com/tjvantoll/nativescript-IQKeyboardManager/raw/master/demo.gif" width="320px"/>

#### Multi-factor one-time code auto-fill

iOS has a feature where a text field's QuickType search suggestion bar can suggest `one-time` code values for multi-factor authentication that were texted to your device.

If the field is identified as a `one-time` code field, the suggestion will appear for about 3 minutes after being received. The user simply has to tap the suggestion to fill in the value — no short-term memorization or copy/paste gestures required. Examples of message formats are:

- 123456 is your App Name code.
- 123456 is your App Name login code.
- 123456 is your App Name verification code.

To implement this functionality in your app, first declare `UITextContentTypeOneTimeCode` near the component imports:

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

For maintainers of this plugin: when the [IQKeyboardManager Podfile](https://github.com/NativeScript/plugins/blob/main/packages/iqkeyboardmanager/platforms/ios/Podfile) updates, you should generate new typings for the plugin to reflect those changes.

To do so, execute these commands.

```bash
cd demo
TNS_DEBUG_METADATA_PATH="$(pwd)/metadata" tns build ios
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios
```

Next, locate IQKeyboardManager’s generated typings file in the `demo/typings` folder and override the `IQKeyboardManager.d.ts` file in this repo’s root.

## License

Apache License Version 2.0
