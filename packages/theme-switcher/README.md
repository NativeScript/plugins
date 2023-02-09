# @nativescript/theme-switcher

## Contents
* [Installation](#installation)
* [Usage](#usage)
	* [Register the Themes](#register-the-themes)
	* [Switch Themes](#switch-themes)
	* [Switch multiple themes simultaneously](#switch-multiple-themes-simultaneously)
* [API](#api)
	* [initThemes()](#initthemes)
	* [switchTheme()](#switchtheme)
	* [loadDefaultTheme()](#loaddefaulttheme)
* [Demo App](#demo-app)
* [License](#license)

## Installation

```cli
npm install @nativescript/theme-switcher
```

<table style="width:auto;">
	<tr>
		<td>
			<image src="https://user-images.githubusercontent.com/879060/138103861-95e5bc19-85e1-44c3-9243-dd5a0cc854f8.gif" 
			height="400"
			style="border-width: 1px; max-height: 500px;"/>
		</td>
		<td>
			<image src="https://user-images.githubusercontent.com/879060/138250899-3b774229-5348-4bbe-8856-3e1f157e6788.gif" 
			height="400"
			style="border-width: 1px; max-height: 500px;"/>
		</td>
	</tr>
</table>

## Usage

### Register the Themes

Use the [initThemes()]() function to register the themes to switch from. 

Call this function in the app's `app.ts` or `main.ts` file, before the app starts.


```ts
import { initThemes, switchTheme } from '@nativescript/theme-switcher'


// first initialize the themes
initThemes({
    // default is optional - will be auto-applied after initializing (*)
    default: () => import('theme-loader!./themes/default.scss'),
    red: () => import('theme-loader!./themes/red.scss'),
    green: () => import('theme-loader!./themes/green.scss'),
})

```

### Switch Themes

To switch themes, call the [switchTheme()] method passing it the name of the theme to switch to.

```ts
switchTheme('red');
switchTheme('green');

```
> **Note**: The `theme-loader!` prefix is used to apply a custom loader that prevents the styles from being auto-applied, and instead applied on-demand by the theme switcher. It requires `@nativescript/webpack@5+` to work properly.


> **Note for TypeScript users**: TypeScript does not know about `theme-loader` or `css/scss` files, in order to supress the type errors when calling `import('theme-loader!./path/to/theme.css')` you can add
> ```ts
> /// <reference path="./node_modules/@nativescript/theme-switcher/shims.d.ts" />
> ```
> To your `references.d.ts`, or use `// @ts-ignore` to supress the errors locally.

---

### Switch multiple themes simultaneously

If you need to switch multiple themes simultaneously, you can initialize as many switchers as you need. Each switcher will load CSS and persist (unless disabled) the last selected theme.

Can be useful if your app can switch different parts of the theme individually. For example

1. `switcher1` switches button styles
2. `switcher2` switches font styles
3. etc.

```ts
import { ThemeSwitcher } from '@nativescript/theme-switcher'

const switcher1 = new ThemeSwitcher('switcher1');
const switcher2 = new ThemeSwitcher('switcher2');

switcher1.initThemes({ /* ... */})
switcher2.initThemes({ /* ... */})

switcher1.switchTheme( /* ... */ )
switcher2.switchTheme( /* ... */ )
```

## API

### initThemes()

```ts
initThemes(themes, options)
```
Register the themes to be switched from.

| Parameter | Type | Description
|:----------|:-----|:------
| `themes` | [ThemeDefinition](#themedefinition) | An object with the theme name as the key, and a loader function that returns the theme css (css string, ast, optionally async). `default` will be applied initially, if set as a theme.
| `options` | [ThemeSwitcherOptions](#themeswitcheroptions) | _Optional_: Themes initialization settings.

### ThemeDefinition

```ts
interface ThemeDefinition {
	[name: string]: () => any;
}
```

### ThemeSwitcherOptions
| Option | Type | Description
|:-------|:-----|:-----------
| `persistent` | `boolean` | _Optional_: Defaults to `true`. If `persistent` is enabled, the last selected theme will be saved to ApplicationSettings and automatically restored when `initThemes()` is called.
| `persistenceKey` | `string` | _Optional_: The key to the selected theme under on the device storage. Defaults to  `__theme_switcher_default`

---
### switchTheme()

```ts
switchTheme(themeName)
```

Used to switch from the current theme to the specified one.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `themeName` | `string` | The name of the theme to switch to.

---
### loadDefaultTheme()

```ts
import { loadDefaultTheme } from "@nativescript/theme-switcher"

loadDefaultTheme()
```

Loads the last selected theme if persistence is enabled, otherwise loads `"default"` if it exists.

---
## Demo App
Try out the plugin's [demo](https://stackblitz.com/edit/nativescript-stackblitz-templates-1cverj?file=app/main-view-model.ts) with the NativeScript Preview app at StackBlitz. 

## License

Apache License Version 2.0
