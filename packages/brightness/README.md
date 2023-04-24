# @nativescript/brightness

```cli
npm install @nativescript/brightness
```

> **Note:** This plugin requires `<uses-permission android:name="android.permission.WRITE_SETTINGS"/>` to be added in the `AndroidManifest.xml`.

## Usage

To use the plugin, you should first import it.
```typescript
// TypeScript
import { Brightness } from '@nativescript/brightness';
```

### Setting the device brightness level
To set the brightness level of the device, call the `set()` method passing it the [BrightnessOptions](#brightnessoptions) object with the desired `intensity` value.

```js
// TypeScript
const brightness = new Brightness();

brightness.set({
	intensity: 25,
});
```

The `intensity` value can range from `1` to `100`.

### Getting the device brightness Level
To get the device's brightness, call the `get()` method.
```ts
bightnessLevel : number = brightness.get()
```

## API

### Methods

| Method                          | Description                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `set(options: BrightnessOptions)` | Sets screen's brightness to the desired intensity                                                                               |
| `get()`                            | Returns current screen brightness value as a number between `0` and `100`                                                          |
| `getNative() `                      | returns current screen brightness value as returned from the native api: between` 0.0` and `1.0` for iOS and `0` and `255` for android |

### BrightnessOptions

| Property  | Default | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| intensity | 100     | defines the desired brightness value, which should be a number between 0 and 100. |

## License

Apache License Version 2.0
