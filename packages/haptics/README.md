# @nativescript/haptics

A plugin that allows you to add haptics to your app.

> Playing haptics can engage people's sense of touch and bring their familiarity with the physical world into your app or game.
~ Developer docs


Thanks to [Eddy Verbruggen](EddyVerbruggen) for providing [nativescript-taptic-engine](https://github.com/EddyVerbruggen/nativescript-taptic-engine) as this continues its evolution by streamlining the API and adding Android support, inspired by [react-native-haptic-feedback](https://github.com/junina-de/react-native-haptic-feedback).

## Contents

  * [Installation](#installation)
  * [Use @nativescript/haptics](#use-nativescripthaptics)
  * [API](#api)
    * [isSupported()](#issupported)
    * [selection()](#selection)
    * [notifcation()](#notification)
    * [impact()](#impact)
    * [HapticsFallback](#hapticsfallback)
      * [weakBoom()](#weakboom)
      * [strongBoom()](#strongboom)
      * [burst()](#burst)


## Installation

```cli
npm install @nativescript/haptics
```

## Use @nativescript/haptics

Find an example of `@nativescript/haptics` usage [here](https://stackblitz.com/edit/nativescript-stackblitz-templates-jlvtwm?file=app/main-view-model.ts) on StackBlitz. 

## API

The plugin provides the API below.

### isSupported()
```ts
isHapticsSupported: boolean = Haptics.isSupported()
```
Checks if haptics is supported on the device.

---
### selection()

```ts
import { Haptics } from "@nativescript/haptics";

Haptics.selection();
```

### notification()

```ts
import { Haptics, HapticNotificationType } from "@nativescript/haptics";

Haptics.notification(HapticNotificationType.ERROR);
```

Use notification feedback generators to indicate success, failure, and warning.

Other haptic notification types are:
- `SUCCESS`(default)
- `WARNING`

### impact()

```js
import { Haptics, HapticImpactType } from "@nativescript/haptics";

Haptics.impact(HapticImpactType.HEAVY);
```

Use impact feedback generators to indicate that an impact has occurred.
For example, you might trigger impact feedback when a user interface object
collides with something or snaps into place.

There are 3 impact types: 
- `LIGHT` 
- `MEDIUM` (default)
- `HEAVY`.

### HapticsFallback

To use the haptics fallbacks, check if there is support:

```ts
if (!Haptics.isSupported()) {
  // use HapticsFallback
}
```

__BEWARE__ This uses an undocumented feature that may get your app rejected when reviewed by Apple.
[People have used this approach __without problems__ though.](http://stackoverflow.com/questions/32526868/taptic-in-ios-9)

### weakBoom()
This triggers the same effect as the 'Peek' in 'Peek & Pop', a very brief vibration.

```ts
import { HapticsFallback } from "@nativescript/haptics";

HapticsFallback.weakBoom();
```

### strongBoom()
```ts
import { HapticsFallback } from "@nativescript/haptics";

HapticsFallback.strongBoom();
```
This triggers the `Pop` effect of `Peek & Pop`, which is a bit more profound than the `Peek` effect.

### burst()
```ts
import { HapticsFallback } from "@nativescript/haptics";

HapticsFallback.burst();
```
This triggers the `Nope` effect you get when force-touching a home icon that doesn't have any action. It's a short burst of 3-ish 'weak booms'.

## Changelog
* 3.0.0  Moved to @nativescript/haptics and added Android support. Adjusted naming conventions.
* 2.1.0  Modernized the code a little, migrated to the plugin seed structure, and added a Vue demo.
* 2.0.0  Added official API for iPhone 7. Moved the old API to TapticEngineUnofficial.*. Requires Xcode 8 to build.
* 1.0.0  Initial release, unofficial API only. Compatible with any Xcode version.

## License

Apache License Version 2.0
