# @nativescript/haptics

> Playing haptics can engage people's sense of touch and bring their familiarity with the physical world into your app or game.
~ Developer docs

For iOS and Android development.

Thank you to [Eddy Verbruggen](EddyVerbruggen) for providing [nativescript-taptic-engine](https://github.com/EddyVerbruggen/nativescript-taptic-engine) as this continues it's evolution by streamlining the API and adding Android support, inspired by [react-native-haptic-feedback](https://github.com/junina-de/react-native-haptic-feedback).

## Usage

```javascript
npm install @nativescript/haptics
```

## API

### `selection`
Use selection feedback generators to indicate a change in selection.

##### TypeScript

```js
import { Haptics } from "@nativescript/haptics";

Haptics.selection();
```

##### JavaScript
```js
const Haptics = require("@nativescript/haptics").Haptics;

Haptics.selection();
```

### `notification`
Use notification feedback generators to indicate successes, failures, and warnings.

There are 3 notification types: `HapticNotificationType.SUCCESS` (default), `.WARNING`, and `.ERROR`.

##### TypeScript
```js
import { Haptics, HapticNotificationType } from "@nativescript/haptics";

Haptics.notification(HapticNotificationType.ERROR);
```

### `impact`
Use impact feedback generators to indicate that an impact has occurred.
For example, you might trigger impact feedback when a user interface object
collides with something or snaps into place.

There are 3 impact styles: `HapticImpactType.LIGHT`, `.MEDIUM` (default), and `.HEAVY`.

##### TypeScript
```js
import { Haptics, HapticImpactType } from "@nativescript/haptics";

Haptics.impact(HapticImpactType.HEAVY);
```


## HapticsFallback (requires at least iPhone 6s)

With older phones you can use the following conditional to use the fallbacks:

```
if (!Haptics.isSupported() && Haptics.is6SAnd6SPlusSupported()) {
  // use HapticsFallback
}
```

__BEWARE__ This uses an undocumented feature which may get your app rejected when reviewed by Apple.
[People have used this approach __without problems__ though.](http://stackoverflow.com/questions/32526868/taptic-in-ios-9)

### `weakBoom`
This triggers the same effect as the 'Peek' in 'Peek & Pop', a very brief vibration.

##### TypeScript
```js
import { HapticsFallback } from "@nativescript/haptics";

HapticsFallback.weakBoom();
```

##### JavaScript
```js
const HapticsFallback = require("@nativescript/haptics").HapticsFallback;

HapticsFallback.weakBoom();
```

### `strongBoom`
This triggers the 'Pop' effect of 'Peek & Pop', which is a bit more profound than the 'Peek' effect.

Codewise this is exactly the same as `weakBoom`, except for the function name of course.


### `burst`
This triggers the 'Nope' effect you get when fi. force touching a home icon which doesn't have any action. It's a short burst of 3-ish 'weak booms'.

Codewise this is exactly the same as `weakBoom` and `strongBoom`, except for the function name of course.

## Changelog
* 3.0.0  Moved to @nativescript/haptics and added Android support. Adjusted naming conventions.
* 2.1.0  Modernized the code a little, migrated to the plugin seed structure, and added a Vue demo.
* 2.0.0  Added official API for iPhone 7. Moved the old API to TapticEngineUnofficial.*. Requires Xcode 8 to build.
* 1.0.0  Initial release, unofficial API only. Compatible with any Xcode version.

## License

Apache License Version 2.0
