# @nativescript/haptics

Thank you to [Eddy Verbruggen](EddyVerbruggen) for providing [nativescript-taptic-engine](https://github.com/EddyVerbruggen/nativescript-taptic-engine). This officially scopes the plugin, streamlines the API and adds Android support, inspried by [react-native-haptic-feedback](https://github.com/junina-de/react-native-haptic-feedback).

## Supported platforms
* Official API: 
    * iPhone 7 / 7 Plus or newer
* Unofficial API: 
    * iPhone 6s / 6s Plus or newer
* iOS Requires Xcode >=8 to build

## Usage

```javascript
npm install @nativescript/haptics
```

## Official API

### `selection`
Use selection feedback generators to indicate a change in selection.

##### TypeScript

```js
// require the plugin
import { Haptics } from "@nativescript/haptics";

Haptics.selection();
```

##### JavaScript
```js
// require the plugin
const Haptics = require("@nativescript/haptics").Haptics;

Haptics.selection();
```

### `notification`
Use notification feedback generators to indicate successes, failures, and warnings.

There are 3 notification types: `HapticNotificationType.SUCCESS` (default), `.WARNING`, and `.ERROR`.

##### TypeScript
```js
// require the plugin
import {TapticEngine, TapticEngineNotificationType} from "@nativescript/haptics";

// instantiate the plugin
let tapticEngine = new TapticEngine();

tapticEngine.notification({
  type: TapticEngineNotificationType.ERROR
});
```

### `impact`
Use impact feedback generators to indicate that an impact has occurred.
For example, you might trigger impact feedback when a user interface object
collides with something or snaps into place.

There are 3 impact styles: `TapticEngineImpactStyle.LIGHT`, `.MEDIUM` (default), and `.HEAVY`.

##### TypeScript
```js
// require the plugin
import {TapticEngine, TapticEngineImpactStyle} from "@nativescript/haptics";

// instantiate the plugin
let tapticEngine = new TapticEngine();

tapticEngine.impact({
  type: TapticEngineImpactStyle.HEAVY
});
```


## Unofficial API (requires at least iPhone 6s)
__BEWARE__ This uses an undocumented feature which may get your app rejected when reviewed by Apple.
[People have used this approach __without problems__ though.](http://stackoverflow.com/questions/32526868/taptic-in-ios-9)

### `weakBoom`
This triggers the same effect as the 'Peek' in 'Peek & Pop', a very brief vibration.

##### TypeScript
```js
// require the plugin
import {TapticEngineUnofficial} from "@nativescript/haptics";

// instantiate the plugin
let tapticEngineUnofficial = new TapticEngineUnofficial();

tapticEngineUnofficial.weakBoom().then(() => {
  // note that unsupported iOS devices like the simulator also end up here
}, (err) => {
  console.log("You're running on Android. Meh.");
});
```

##### JavaScript
```js
// require the plugin
var TapticEngineUnofficial = require("@nativescript/haptics").TapticEngineUnofficial;

// instantiate the plugin
var tapticEngineUnofficial = new TapticEngineUnofficial();

tapticEngineUnofficial.weakBoom().then(
  function() {
    // note that unsupported iOS devices like the simulator also end up here
    console.log("Boomed weakly, if available.");
  }, function () {
    console.log("You're running on Android. Meh.");
  }
);
```

### `strongBoom`
This triggers the 'Pop' effect of 'Peek & Pop', which is a bit more profound than the 'Peek' effect.

Codewise this is exactly the same as `weakBoom`, except for the function name of course.


### `burst`
This triggers the 'Nope' effect you get when fi. force touching a home icon which doesn't have any action. It's a short burst of 3-ish 'weak booms'.

Codewise this is exactly the same as `weakBoom` and `strongBoom`, except for the function name of course.

## Changelog
* 3.0.0  Moved to @nativescript/haptics and added Android support. Also simplified the naming conventions.
* 2.1.0  Modernized the code a little, migrated to the plugin seed structure, and added a Vue demo.
* 2.0.0  Added official API for iPhone 7. Moved the old API to TapticEngineUnofficial.*. Requires Xcode 8 to build.
* 1.0.0  Initial release, unofficial API only. Compatible with any Xcode version.

## License

Apache License Version 2.0
