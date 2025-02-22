# @nativescript/localize

## Contents

- [@nativescript/localize](#nativescriptlocalize)
	- [Contents](#contents)
	- [Intro](#intro)
	- [Installation](#installation)
	- [Use @nativescript/localize](#use-nativescriptlocalize)
		- [Localization in NativeScript Core](#localization-in-nativescript-core)
			- [Quirks](#quirks)
		- [Localization in Angular](#localization-in-angular)
		- [Localization in Vue](#localization-in-vue)
		- [Localization in Svelte](#localization-in-svelte)
		- [Setting the default language](#setting-the-default-language)
		- [Localizing the application name](#localizing-the-application-name)
		- [File format](#file-format)
			- [JSON](#json)
			- [Javascript](#javascript)
		- [Localizing iOS properties](#localizing-ios-properties)
		- [Changing the language dynamically at runtime](#changing-the-language-dynamically-at-runtime)
			- [iOS](#ios)
			- [Android](#android)
	- [Troubleshooting](#troubleshooting)
		- [Angular localization pipe and the modal context](#angular-localization-pipe-and-the-modal-context)
		- [Issues with WebView on Android N+](#issues-with-webview-on-android-n)
	- [API](#api)
		- [localize()](#localize)
		- [overrideLocale()](#overridelocale)
		- [androidLaunchEventLocalizationHandler()](#androidlauncheventlocalizationhandler)
	- [Credits](#credits)
	- [License](#license)

## Intro

A plugin that implements internationalization (i18n) using the native capabilities of each platform. It is inspired by [nativescript-i18n](https://github.com/rborn/nativescript-i18n)


## Installation

To install the plugin, run the following command in the root directory of your project.

```cli
npm install @nativescript/localize
```

## Use @nativescript/localize

This section describes how to use the `@nativescript/localize` plugin in several flavors that NativeScript supports.

### Localization in NativeScript Core

1. Create a folder named `i18n` in the `app` folder, with the following structure:

```
app
  | i18n
      | en.json           <-- english language
      | es.default.json   <-- spanish language (default)
     
```
`es.default.json` example:

```json
{
    "app.name" : "Comida Rica!",
    
    "user":{
        "name": "Paula"
    }
}
```

2. In the `main.ts` file, register the `localize` function with the `setResources` method of the [Application](https://docs.nativescript.org/api-reference/modules#application) class, as follows.

```js
import { Application } from "@nativescript/core";
import { localize } from '@nativescript/localize';

Application.setResources({ L: localize });
```

Then, use the `L` property in the markup.

```xml

  <StackLayout>
    <Label text="{{ 'Hello world !' | L }}" />
    <Label text="{{ 'I am ' + L('user.name') }}" />
  </StackLayout>
```

To localize in code-behind, just call the `localize` method directly.

```js
import { localize } from '@nativescript/localize';

console.log(localize('Hello world !'));
```

#### Quirks

⚠️ If you notice translations work on your main XML page, but don't work on a page you
navigate to, then add this little hack to the 'page loaded' function of that new page:

```js
const page = args.object;
page.bindingContext = new Observable();
```

### Localization in Angular

1. Create a folder `i18n` in the `src` folder, with the following structure:

```
src
  | i18n
      | en.json           <-- english language
      | fr.default.json   <-- french language (default)
      | es.js
```

You need to [set the default langage](#how-to-set-the-default-language) and make sure it contains
the [application name](#how-to-localize-the-application-name) to avoid any errors.

2. Register the localizing module(`NativeScriptLocalizeModule`) in the `app.module.ts` file

```ts
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptLocalizeModule } from '@nativescript/localize/angular';
import { NativeScriptModule } from '@nativescript/angular';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, NativeScriptLocalizeModule],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
```

3. Then, in an HTML file, use the localizer as follows:

```xml
<Label text="{{ 'Hello world !' | L }}"/>
<Label text="{{ 'I am %s' | L:'user name' }}"/>
```

### Localization in Vue
1. Create a folder named `i18n` in the `app` folder, with the following structure:

```
app
  | i18n
      | en.json           <-- english language
      | es.default.json   <-- spanish language (default)
     
```
`es.default.json` example:

```json
{
    "app.name" : "Comida Rica!",
    
    "user":{
        "name": "Paula"
    }
}
```

2. To localize in Vue3, import the [localize](#localize) method
and call it in markup.

```ts
import { localize } from '@nativescript/localize';
```

```xml
<ActionBar>
	<Label :text="localize('app.name')" class="font-bold text-lg bg-black" />
</ActionBar>

<StackLayout class="px-4">
	<Label :text="localize('user.name')" textWrap="true" />
</StackLayout>
```

### Localization in Svelte

1. Create a folder named `i18n` in the `app` folder, with the following structure:

```
app
  | i18n
      | en.json           <-- english language
      | es.default.json   <-- spanish language (default)
     
```
`es.default.json` example:

```json
{
    "app.name" : "Comida Rica!",
    
    "user":{
        "name": "Paula"
    }
}
```

2. To localize in Svelte, import the [localize](#localize) method and then call it in markup.

```ts
import { localize } from '@nativescript/localize';
```

```xml
<actionBar>
	<label text={ localize('app.name') } class="font-bold text-lg bg-black" />
</actionBar>

<stackLayout class="px-4">
	<label text={ 'Nombre: ' + localize('user.name')}/>
</stackLayout>
```

### Setting the default language

To set the default language, add a `.default` extension to the name of the default language file.

```ts
fr.default.json
```

Make sure it contains the [application name](#localizing-the-application-name) to avoid any errors.

Android uses the locale file corresponding to the device's language. For example, if the device's language is set to `Spanish`, the `es.json` will be used.

### Localizing the application name

To localize the application name, use the `app.name` key.

```json
{
	"app.name": "My app"
}
```

### File format

Each file is imported using `require`, so use the file format of your choice:

#### JSON

```json
{
	"app.name": "My app",
	"ios.info.plist": {
		"NSLocationWhenInUseUsageDescription": "This will be added to InfoPlist.strings"
	},
	"user": {
		"name": "user.name",
		"email": "user.email"
	},
	"array": ["split the translation into ", "multiples lines"],
	"sprintf": "format me %s",
	"sprintf with numbered placeholders": "format me %2$s one more time %1$s"
}
```

#### Javascript

```js
export const i18n = {
	'app.name': 'My app',
};
```

### Localizing iOS properties

To localize an iOS property, prefix it with `ios.info.plist.`. The example below shows how to localize the [NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription?language=objc) property.


```json
{
	"ios.info.plist.NSLocationWhenInUseUsageDescription": "This will be added to InfoPlist.strings"
}
```

### Changing the language dynamically at runtime
To change the language dynamically at runtime, use the [overrideLocale](#overridelocale) method.

#### iOS

```typescript
import { overrideLocale } from '@nativescript/localize';
const localeOverriddenSuccessfully = overrideLocale('en-GB'); // or "nl-NL", etc (or even just the part before the hyphen)
```

#### Android

For Android, first, call the `androidLaunchEventLocalizationHandler` method in the `launchEvent` handler, in the `main.ts` file.

```ts
import { Application } from '@nativescript/core';
import { androidLaunchEventLocalizationHandler } from '@nativescript/localize';

Application.on(Application.launchEvent, (args) => {
	if (args.android) {
		androidLaunchEventLocalizationHandler();
	}
});
```

Then, in your settings page where the user chooses the language, call the `overrideLocale` method:

```ts
import { overrideLocale } from '@nativescript/localize';
const localeOverriddenSuccessfully = overrideLocale('en-GB'); // or "nl-NL", etc (or even just the part before the hyphen)
```

> **Important:** On both platforms, after calling `overrideLocale` method, you must ask the user to restart the app.

For Example:

```ts
import { Application, Utils } from '@nativescript/core';
import { overrideLocale } from '@nativescript/localize';

alert({
	title: 'Switch Language',
	message: 'The application needs to be restarted to change language',
	okButtonText: 'Quit!',
}).then(() => {
	L.localize.overrideLocale(selectedLang);
	if (isAndroid) {
		Utils.android.getCurrentActivity().finish();
	} else {
		exit(0);
	}
});
```

> **Important:** In case you are using [Android app bundle](https://docs.nativescript.org/tooling/publishing/android-app-bundle) to release your android app, add the following to `App_Resources/Android/app.gradle` to make sure all lanugages are bundled in the split apks

```groovy
android {

  // there maybe other code here //

  bundle {
    language {
      enableSplit = false
    }
  }
}
```

> **Tip:** you can get the default language on user's phone via the `language` property of the [Device](https://docs.nativescript.org/api-reference/interfaces/idevice) class.

```ts
import { Device } from '@nativescript/core';

console.log("user's language is", Device.language.split('-')[0]);
```

> **Tip:** The `overrideLocale` method stores the language in a special key in app-settings, you can access it like this

```ts
import { ApplicationSettings } from '@nativescript/core';

console.log(ApplicationSettings.getString('__app__language__')); // only available after the first time you use overrideLocale(langName);
```

## Troubleshooting

### Angular localization pipe and the modal context

The angular localization pipe does not work when in a modal context.
As a workaround, you can trigger a change detection from within your component constructor:

```ts
constructor(
  private readonly params: ModalDialogParams,
  private readonly changeDetectorRef: ChangeDetectorRef,
) {
  setTimeout(() => this.changeDetectorRef.detectChanges(), 0);
}
```

### Issues with WebView on Android N+

On Android N+, the first creation of a WebView resets the application locale to the device default. Therefore, you have to set the desired locale back.
This is a native bug and the workaround is

```xml
 <WebView url="https://someurl.com" @loaded="webViewLoaded"/>
```

```javascript
import { overrideLocale, androidLaunchEventLocalizationHandler } from '@nativescript/localize';
import { ApplicationSettings } from '@nativescript/core';
const locale = ApplicationSettings.getString('__app__language__');

function webViewLoaded() {
	overrideLocale(locale);
	androidLaunchEventLocalizationHandler();
}
```
## API

The plugin provides the following functions.

### localize()
```ts
localizeString: string = localize(key, ...args)
```
Retrieves the translation for the specified `key` from a `.json` file in the `i18n` directory.

---
### overrideLocale()
```ts
isLocaleOverwritten: boolean = overrideLocale(locale)
```

Overrides the current locale with the specified `locale` parameter.

---
### androidLaunchEventLocalizationHandler()
```ts
androidLaunchEventLocalizationHandler()
```

---
## Credits

A lot of thanks goes out to [Ludovic Fabrèges (@lfabreges)](https://github.com/lfabreges) for developing and maintaining this plugin in the past. When he had to abandon it due to shifted priorities, he was kind enough to [move the repo to me](https://github.com/EddyVerbruggen/nativescript-localize/issues/73). Eddy then joined NativeScript's Technical Steering Committee and to vastly improve plugin maintenance [it was scoped and moved here](https://github.com/EddyVerbruggen/nativescript-localize/issues/99)

## License

Apache License Version 2.0
