# @nativescript/directions
<!-- TODO: Add Preview -->
## Installation

```cli
npm install @nativescript/directions
```

## Usage
### Importing
Once you have installed the plugin, import and create an instance of the `Directions` class.
```ts
import { Directions } from "@nativescript/directions"

const directions = new Directions()
```

### Checking for support

To check if the device has a Maps application installed, call the `available` method.
```ts
directions.available().then((avail:boolean) => {

	console.log(avail ? 'Yes' : 'No');
});
```
To open the Google (Android) or Apple (iOS) Maps app with the desired directions, call the `navigate` method.
```typescript
directions
	.navigate({
		from: {
			lat: 52.215987,
			lng: 5.282764,
		},
		to: [
			{
				address: 'Hof der Kolommen 34, Amersfoort, Netherlands',
			},
			{
				address: 'Aak 98, Wieringerwerf, Netherlands',
			},
		],
		type: 'walking', 
		ios: {
			preferGoogleMaps: true, 
			allowGoogleMapsWeb: true, 
			useUniversalSyntax: true, 
		},
		android: {
			newTask: true, 
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

## API
### Method(s)

| Name | Return Type | Description |
|------|-------------|-------------|
| `available()` | `Promise<boolean>` | Checks if the device has the Maps application installed. |
| `navigate(options: NavigateToOptions)`| `Promise<void>` | Opens the native Maps app with a predefined `from` and `to` address and [other](#navigatetooptions) optional settings.|

### AddressOptions
| Name| Type | Description|
|-----|------|------------|
| `lat` | `number` | _Optional_: The latitude. Ignored if `address`' is set.|
| `lng` | `number` | _Optional_: The longitude. Ignored if `address`' is set. |
| `address` | `string` | _Optional_: The address of the direction. For multiple addresses, add them to the string separating them with a comma.|

### NavigateToOptionsType
```ts
'driving' | 'transit' | 'bicycling' | 'walking'
```

### NavigateToOptions
| Name| Type | Description|
|-----|------|------------|
| `from`| [AddressOptions](#addressoptions)| _Optional_: The starting point for the navigation. <br><br>If this option is not passed, the current location of the user will be used.|
| `to` | [AddressOptions](#addressoptions) \| Array<[AddressOptions](#addressoptions)>| The destination of the navigation. If it's an array of addresses, then the last item is the destination, the others become 'waypoints'.|
| `ios` | [iOSOptions](#iosoptions) | _Optional_: iOS-specific settings. |
| `android` | [AndroidOptions](#androidoptions) | _Optional_:  Android-specific settings. |
| `useUniversalSyntax` | `boolean` | _Optional_: If `true`, this opens Google Maps using the universal syntax rather than the comgooglemaps:// url scheme. Use this if Google Maps does not load correctly on iOS, the Universal Syntax is now preferred.|
| `type` | [NavigateToOptionsType](#navigatetooptionstype) | _Optional_: The mode of reaching to the destionation. |

>**Note** that if there's an ocean in between `from` and `to` you won't be able to get directions, don't blame this plugin for that 😁.
### iOSOptions
| Name| Type | Description|
|-----|------|------------|
| `preferGoogleMaps`| `boolean`| _Optional_: Indicates whether to use Google Maps(if installed) instead of the iOS Maps. You might want to use Google Maps app because it supports waypoints.|
| `allowGoogleMapsWeb`| `boolean` | If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can set this option to `true` to open Google Maps on web so all waypoints are shown.|

### AndroidOptions
| Name| Type | Description|
|-----|------|------------|
| `newTask` | `boolean` | _Optional_: Indicates whether to start directions as new task.|

## License

Apache License Version 2.0
