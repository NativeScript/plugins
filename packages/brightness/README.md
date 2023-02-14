# @nativescript/brightness

A plugin that get and set the device's brightness level.

## Contents
* [Installation](#installation)
* [Required permissions for Android](#required-permissions-for-android)
* [Use @nativescript/brightness](#use-nativescriptbrightness)
	* [Set the device brightness level](#set-the-device-brightness-level)
	* [Get the device brightness level](#get-the-device-brightness-level)
* [API](#api)
	* [Brightness class](#brightness-class)
		* [BrightnessOptions interface](#brightnessoptions-interface) 
* [License](#license)

## Installation

```cli
npm install @nativescript/brightness
```

## Required permissions for Android

Add the following permission to the `App_Resources/src/main/AndroidManifest.xml` file:

- `<uses-permission android:name="android.permission.WRITE_SETTINGS"/>`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
	package="es.amplya.app_inventario">

	<uses-permission android:name="android.permission.WRITE_SETTINGS"/> 

	<application android:name="com.tns.NativeScriptApplication">
	...

```

## Use @nativescript/brightness


### Set the device brightness level

To set the device's brightness level, call the `set()` method on an instance of the [Brightness class](#brightness-class), passing it the [BrightnessOptions](#brightnessoptions) object with the desired `intensity` value.

```typescript

import { Brightness } from '@nativescript/brightness';

const brightness = new Brightness();

brightness.set({
	intensity: 25,
});
```

### Get the device brightness level

To get the device's brightness level, call the `get()` method on an instance of the [Brightness class](#brightness-class).

```ts
bightnessLevel : number = brightness.get()
```

## API

### Brightness class

| Method | Returns | Description
|:-------|:--------|:-----------
| `set(options: BrightnessOptions)`| `void` | Sets screen's brightness level to the desired intensity                                                                               |
| `get()`| `number` | Returns current screen brightness value as a number between `0` and `100`                                                          |
| `getNative() `| `number` | Returns current native screen brightness value. <br> iOS: a value between` 0.0` and `1.0`. <br> Android: `0` and `255` |

### BrightnessOptions interface

| Property  | Default | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| `intensity` | `100`  | Defines the desired brightness value, which should be a number between `0` and `100`. |

## License

Apache License Version 2.0
