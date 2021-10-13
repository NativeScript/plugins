# @nativescript/directions

```cli
ns plugin add @nativescript/directions
```

## Usage

### Demo app (XML + TypeScript)

Want to dive in quickly? Check out [the demo app](https://github.com/EddyVerbruggen/nativescript-directions/tree/9a9f1ff0de551c447a87b3513a5453f1b962c33c/demo)! Otherwise, continue reading.

You can run the demo app from the root of the project by typing `npm run demo.ios.device` or `npm run demo.android`.

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-directions/master/media/directions-animated.gif" width="320px" height="570px"/>

### Demo app (Angular)

This plugin is part of the [plugin showcase app](https://github.com/EddyVerbruggen/nativescript-pluginshowcase/tree/master/app/mapping) I built using Angular.

## API

### `available`

Not all devices have the Google (Android) or Apple (iOS) Maps app installed. Well, most do of course, but on an Android simulator you may be out of luck, so let's check beforehand:

##### JavaScript

```js
// require the plugin
var directions = require('@nativescript/directions');

// instantiate the plugin
var directions = new directions.Directions();

directions.Directions.available().then(function (avail) {
	console.log(avail ? 'Yes' : 'No');
});
```

##### TypeScript

```typescript
// require the plugin
import { Directions } from '@nativescript/directions';

// instantiate the plugin
let directions = new Directions();

directions.available().then((avail) => {
	console.log(avail ? 'Yes' : 'No');
});
```

### `navigate`

This function opens the native Maps app with a predefined `from` and `to` address.

If you don't pass `from` the current location of the user will be used.

If an `address` is specified then `lat` and `lng` will be ignored.

If you pass in an Array of `to` addresses, then the last item is the destination, the others become 'waypoints'.

Note that if there's an ocean in between `from` and `to` you won't be able to get directions, don't blame this plugin for that 😁

##### JavaScript

```js
directions
	.navigate({
		from: {
			// optional, default 'current location'
			lat: 52.215987,
			lng: 5.282764,
		},
		to: {
			// either pass in a single object or an Array (see the TypeScript example below)
			address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
		},
		// for platform-specific options, see the TypeScript example below.
	})
	.then(
		function () {
			console.log('Maps app launched.');
		},
		function (error) {
			console.log(error);
		}
	);
```

##### TypeScript

```typescript
directions
	.navigate({
		from: {
			// optional, default 'current location'
			lat: 52.215987,
			lng: 5.282764,
		},
		to: [
			{
				// if an Array is passed (as in this example), the last item is the destination, the addresses in between are 'waypoints'.
				address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
			},
			{
				address: 'Aak 98, Wieringerwerf, Netherlands',
			},
		],
		type: 'walking', // optional, can be: driving, transit, bicycling or walking
		ios: {
			preferGoogleMaps: true, // If the Google Maps app is installed, use that one instead of Apple Maps, because it supports waypoints. Default true.
			allowGoogleMapsWeb: true, // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
			useUniversalSyntax: true, // Prefer the Universal URL Syntax to the comgooglemaps:// url scheme. Useful if Google Maps does not load correctly.
		},
		android: {
			newTask: true, // Start as new task. This means it will start a new history stack instead of using the current app. Default true.
		},
	})
	.then(
		() => {
			console.log('Maps app launched.');
		},
		(error) => {
			console.log(error);
		}
	);
```

## Future work

- Perhaps add Android-specific options like opening the map in StreetView mode, or pre-defining the transportation type (walk/bike/car).

## License

Apache License Version 2.0
