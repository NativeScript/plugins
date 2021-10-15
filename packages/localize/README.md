# @nativescript/localize

This is a plugin for NativeScript that implements internationalization (i18n) using the native capabilities of each platform. It is inspired from [nativescript-i18n](https://github.com/rborn/nativescript-i18n)

## Credits

A lot of thanks goes out to [Ludovic Fabrèges (@lfabreges)](https://github.com/lfabreges) for developing and maintaining this plugin in the past. When he had to abandon it due to shifted priorities, he was kind enough to [move the repo to me](https://github.com/EddyVerbruggen/nativescript-localize/issues/73). Eddy then joined NativeScript's Technical Steering Committe and to vastly improve plugin maintenance [it was scoped and moved here](https://github.com/EddyVerbruggen/nativescript-localize/issues/99)!

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Angular](#angular)
  - [Javascript](#javascript)
  - [Vue](#vue)
- [File format](#file-format)
- [Frequently asked questions](#frequently-asked-questions)
  - [How to set the default language?](#how-to-set-the-default-language)
  - [How to localize the application name?](#how-to-localize-the-application-name)
  - [How to localize iOS properties?](#how-to-localize-ios-properties)
  - [How to change the language dynamically at runtime?](#how-to-change-the-language-dynamically-at-runtime)
- [Troubleshooting](#troubleshooting)
  - [The angular localization pipe does not work when in a modal context](#the-angular-localization-pipe-does-not-work-when-in-a-modal-context)

## Installation

```cli
ns plugin add @nativescript/localize
```

## Usage

Create a folder `i18n` in the `src` folder with the following structure:

```
src
  | i18n
      | en.json           <-- english language
      | fr.default.json   <-- french language (default)
      | es.js
```

You need to [set the default langage](#how-to-set-the-default-language) and make sure it contains
the [application name](#how-to-localize-the-application-name) to avoid any error.

### Angular

#### app.module.ts

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

#### Template

```xml
<Label text="{{ 'Hello world !' | L }}"/>
<Label text="{{ 'I am %s' | L:'user name' }}"/>
```

#### Script

```ts
import { localize } from '@nativescript/localize';

console.log(localize('Hello world !'));
```

### Javascript / XML

#### app.js

```js
const application = require('application');
const { localize } = require('@nativescript/localize');
application.setResources({ L: localize });
```

#### Template

```xml
<Label text="{{ L('Hello world !') }}"/>
<Label text="{{ L('I am %s', 'user name') }}"/>
```

#### Script

```js
const { localize } = require('@nativescript/localize');

console.log(localize('Hello world !'));
```

#### Quirks

⚠️ If you notice translations work on your main XML page, but don't work on a page you
navigate to, then add this little hack to the 'page loaded' function of that new page:

```js
const page = args.object;
page.bindingContext = new Observable();
```

### Vue

#### app.js

```js
import { localize } from '@nativescript/localize';

Vue.filter('L', localize);
```

#### Template

```html
<label :text="'Hello world !'|L"></label> <label :text="'I am %s'|L('user name')"></label>
```

## File format

Each file is imported using `require`, use the file format of your choice:

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

## Frequently asked questions

### How to set the default language?

Add the `.default` extension to the default language file to set it as the fallback language:

```
fr.default.json
```

### How to localize the application name?

The `app.name` key is used to localize the application name:

```json
{
	"app.name": "My app"
}
```

### How to localize iOS properties?

Keys starting with `ios.info.plist.` are used to localize iOS properties:

```json
{
	"ios.info.plist.NSLocationWhenInUseUsageDescription": "This will be added to InfoPlist.strings"
}
```

### How to change the language dynamically at runtime?

This plugin uses the native capabilities of each platform, language selection is therefore made by the OS.

#### On iOS you can programmatically override this language since plugin version 4.2.0 by doing this:

```typescript
import { overrideLocale } from '@nativescript/localize';
const localeOverriddenSuccessfully = overrideLocale('en-GB'); // or "nl-NL", etc (or even just the part before the hyphen)
```

#### On Android you can programatically override this language since plugin version 4.2.1 by doing this:

In your `app.ts` / `main.ts` / `app.js`

```ts
import { Application } from '@nativescript/core';
import { androidLaunchEventLocalizationHandler } from '@nativescript/localize';

Application.on(Application.launchEvent, (args) => {
	if (args.android) {
		androidLaunchEventLocalizationHandler();
	}
});
```

And in your settings page where user chooses the language:

```ts
import { overrideLocale } from '@nativescript/localize';
const localeOverriddenSuccessfully = overrideLocale('en-GB'); // or "nl-NL", etc (or even just the part before the hyphen)
```

> **Important:** In both cases, after calling override Locale, you must ask the user to restart the app

For Example:

```ts
import { Application } from '@nativescript/core';
import { overrideLocale } from '@nativescript/localize';

alert({
	title: 'Switch Language',
	message: 'The application needs to be restarted to change language',
	okButtonText: 'Quit!',
}).then(() => {
	L.localize.overrideLocale(selectedLang);
	if (isAndroid) {
		(Application.android.foregroundActivity || Application.android.startActivity).finish();
	} else {
		exit(0);
	}
});
```

> **Important:** In case you are using [Android app bundle](https://docs.nativescript.org/tooling/publishing/android-app-bundle) to release your android app, add this to `App_Resources/Android/app.gradle` to make sure all lanugages are bundled in the split apks

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

> **Tip:** you can get the default language on user's phone by using this

```ts
import { Device } from '@nativescript/core';

console.log("user's language is", Device.language.split('-')[0]);
```

> **Tip:** overrideLocale method stores the language in a special key in app-settings, you can access it like this

```ts
import { ApplicationSettings } from '@nativescript/core';

console.log(ApplicationSettings.getString('__app__language__')); // only available after the first time you use overrideLocale(langName);
```

## Troubleshooting

### The angular localization pipe does not work when in a modal context

As a workaround, you can trigger a change detection from within your component constructor:

```ts
constructor(
  private readonly params: ModalDialogParams,
  private readonly changeDetectorRef: ChangeDetectorRef,
) {
  setTimeout(() => this.changeDetectorRef.detectChanges(), 0);
}
```

### Starting from Android N, there is a weird side effect while using a WebView.

For unknown reasons, the very first creation of it resets the application locale to the device default. Therefore, you have to set the desired locale back.
This is native bug and the workaround is

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

## License

Apache License Version 2.0
