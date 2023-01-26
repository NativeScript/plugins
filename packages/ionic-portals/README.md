# @nativescript/ionic-portals

https://ionic.io/docs/portals

> Ionic Portals are supercharged native WebView components for iOS and Android that let you add web-based experiences to native mobile apps.

## Installation

```cli
npm install @nativescript/ionic-portals
```

## Usage

### 1. Register portals on app boot

First, [Get a Portal API Key here](https://ionic.io/docs/portals/getting-started/guide). Then your portals, call the [IonicPortalManager] class's [register()] method with the key.

```ts
import { Application } from '@nativescript/core';

import { IonicPortalManager } from '@nativescript/ionic-portals';

Application.on(Application.launchEvent, () => {
	// Register IonicPortals
	IonicPortalManager.register('<portal-api-key>');
});

// boot app here, for example:
Application.run({ moduleName: 'app-root' });
```

Create as many Portals as you need to use in your app.

The app will look for folders within its resources where the folder name is equal to the portal `id` you use to define each portal.

Given the following examples, ensure your web portal is built into the following folders:

* For iOS: `App_Resources/iOS/webPortal`
* For Android: `App_Resources/Android/src/main/asssets/webPortal`

### 2. Use it in your views

#### Vanilla/Plain/Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ionic="@nativescript/ionic-portals">
  <StackLayout class="p-20">
    <ionic:IonicPortal id="webPortal">
    </ionic:IonicPortal>
  </StackLayout>
</Page>
```

#### Angular

```ts
import { registerElement } from '@nativescript/angular';
import { IonicPortal } from '@nativescript/ionic-portals';
registerElement('IonicPortal', () => IonicPortal);

// use in any component:
<IonicPortal id="webPortal"></IonicPortal>;
```

#### Sending events from NativeScript to any web portal

To send events from NativeScript to any web portal, use the [publishTopic()]() method:

```ts
IonicPortalManager.publishTopic('hello', { name: 'data from NativeScript' });
```

#### Subscribing to events sent from web portals
To subscribe to events sent from any web portal, call the [subscribeToTopic]() method with the event name as the first parameter and the event handler as the second parameter.

```ts
const subscriptionId = IonicPortalManager.subscribeToTopic('useful-web-event', result => {
  console.log('received web portal useful-web-event with data:', result.data);
});
```

#### Unsubscribing from events sent from web portals
To unsubscribe from events sent from any web portal, call the [unsubscribeFromTopic()]() method with
```ts
IonicPortalManager.unsubscribeFromTopic('useful-web-event', subscriptionId);
```

## IonicPortalManager API

Allows you to interact with and configure portals via the following APIs:

### register()

```ts
IonicPortalManager.register(apiKey)
```

Registers portals. Call it when the app boots, in the handler of the `Application.launchEvent` event.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `apiKey` | `string` | Your portal API key

---

### setInitialContext()
```ts
IonicPortalManager.setInitialContext(id,initialContext)
```
Used to set the initial context of any portal id before the portal is shown.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `id` | `string` | The portal id.
| `initialContext` | `string` | Data provided as the initial context to the portal.

---
### setAndroidPlugins()
```ts
IonicPortalManager.setAndroidPlugins(plugins: Array<string>)
```

 Defines the usage of non-official Capacitor Plugins via Android package names

| Parameter | Type | Description
|:----------|:-----|:-----------
| `plugins` | `string[]` | A list of non-official Capacitor package names.

---
```ts
class IonicPortalManager {
	/**
	 * Register Portals when your app boots
	 * https://ionic.io/docs/portals/getting-started/guide#configure
	 * @param apiKey your portal api key
	 */
	static register(apiKey: string): void;
	/**
	 * Used to set the initial context of any portal id before the portal is shown
	 * @param id portal id
	 * @param initialContext data provided as the initial context to the portal
	 */
	static setInitialContext(id: string, initialContext: any): void;
	/**
	 * Define usage of non-official Capacitor Plugins via Android package names
	 * @param plugins list of non-official Capacitor package names
	 */
	static setAndroidPlugins(plugins: Array<string>): void;
	/**
	 * Send a message to any web portal via publishing a topic (aka. event)
	 * @param topic name of topic/event
	 * @param data payload to send
	 */
	static publishTopic(topic: string, data?: any): void;
	/**
	 * Listen to any message sent from any web portal via subscribing to the topic (aka. event)
	 * @param topic name of topic/event
	 * @param callback method which is invoked everytime a message is sent via the topic
	 * @returns subscription id used to unsubscribe later
	 */
	static subscribeToTopic(topic: string, callback: (data?: any) => void): number;
	/**
	 * Unsubscribe from any topic (aka. event)
	 * @param topic name of topic/event
	 * @param subscriptionId subscription id
	 */
	static unsubscribeFromTopic(topic: string, subscriptionId: number): void;
}
```

## Use Capacitor Plugins

Refer [to this blog post](https://blog.nativescript.org/ionic-portals-with-capacitor-plugins).

## Notes

> For iOS:
> You may need to add `IPHONEOS_DEPLOYMENT_TARGET = 12.0` to your `App_Resources/iOS/build.xcconfig` file.
> If your project contains `App_Resources/iOS/Podfile`, you may need to remove any post install handling which removes deployment targets, for example:
> Remove anything like this: `config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'`

## License

Apache License Version 2.0
