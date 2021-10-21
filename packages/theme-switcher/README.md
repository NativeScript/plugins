# @nativescript/theme-switcher

```javascript
ns plugin add @nativescript/theme-switcher
```

<table>
	<tr>
		<td>
			<image src="https://user-images.githubusercontent.com/879060/138103861-95e5bc19-85e1-44c3-9243-dd5a0cc854f8.gif" height="400"/>
		</td>
		<td>
			<image src="https://user-images.githubusercontent.com/879060/138249939-0e8abb4a-3ba0-43b2-9d0e-a2af6b310645.gif" height="400"/>
		</td>
	</tr>
</table>

## Usage

```ts
import { initThemes, switchTheme } from '@nativescript/theme-switcher'


// first initialize the themes
initThemes({
    // default is optional - will be auto-applied after initializing (*)
    default: () => import('theme-loader!./themes/default.scss'),
    red: () => import('theme-loader!./themes/red.scss'),
    green: () => import('theme-loader!./themes/green.scss'),
})

// the later on, switch themes with
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

If you need to switch multiple themes simultaniously, you can initialize as many switchers as you need. Each switcher will load css and persist (unless disabled) the last selected theme.

Can be useful if your app can switch different parts of the theme individually. For example
1. `switcher1` switches button styles
2. `switcher2` switches font styles
3. etc.

```ts
import { ThemeSwitcher } from '@nativescript/theme-switcher'

const switcher1 = new ThemeSwitcher('switcher1');
const switcher2 = new ThemeSwitcher('switcher1');

switcher1.initThemes({ /* ... */})
switcher2.initThemes({ /* ... */})

switcher1.switchTheme( /* ... */ )
switcher2.switchTheme( /* ... */ )
```

## API

### initThemes(themes: ThemeDefinition, options?: ThemeSwitcherOptions)

```ts
interface ThemeDefinition {
	[name: string]: () => any;
}

interface ThemeSwitcherOptions {
	persistent?: boolean; // default: true
	persistenceKey?: string; // default: __theme_switcher_default
}
```

`themes` is an object with the theme name as the key, and a loader function that returns the theme css (css string, ast, optionally async).

`default` will be applied if set as a theme.

If `persistent` is enabled (default), the last selected theme will be saved to ApplicationSettings and automatically restored when `initThemes` is called.

### switchTheme(themeName: string)

Used to switch the current theme.

## License

Apache License Version 2.0
