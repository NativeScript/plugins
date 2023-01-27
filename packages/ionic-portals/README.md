# @nativescript/ionic-portals

https://ionic.io/docs/portals

> Ionic Portals are supercharged native WebView components for iOS and Android that let you add web-based experiences to native mobile apps.

![Ionic Portal View](/packages/ionic-portals/images/ionic-portal-ios.png)
## Contents
1. [Installation](#installation)
2. [Prerequisites](#prerequisites)
3. [Usage](#usage)
	1. [Register portals on app boot](#1-register-portals-on-app-boot)
	2. [Use it in markup](#2-use-it-in-markup)
		* [Vanilla/Plain/Core](#vanillaplaincore)
		* [Angular](#angular)
		* [Vue](#vue)
		* [Svelte](#svelte)
		* [Sending events from NativeScript to any web portal](#sending-events-from-nativescript-to-any-web-portal)
		* [Subscribing to events sent from web portals](#subscribing-to-events-sent-from-web-portals)
		* [Unsubscribing to events sent from web portals](#unsubscribing-from-events-sent-from-web-portals)

4. [IonicPortalManager API](#ionicportalmanager-api)
	* [register()](#register)
	* [setInitialContext()](#setinitialcontext)
	* [sendAndroidPlugins](#setandroidplugins)
	* [publishTopic()](#publishtopic)
	* [subscribeToTopic()](#subscribetotopic)
	* [unsubscribeFromTopic()](#unsubscribefromtopic)
5. [Using Capacitor Plugins with Ionic Portals](#using-capacitor-plugins-with-ionic-portals)
6. [Notes](#notes)
7. [Additional Resources](#additional-resources)
8. [License](#license)


## Installation

```cli
npm install @nativescript/ionic-portals
```

## Prerequisites
- [Get a Portal API Key here](https://ionic.io/docs/portals/getting-started/guide). 

## Usage

### 1. Registering portals

To register your Ionic Portals, call the [IonicPortalManager] class's [register()](#register) method with the Portal API key.

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

The app will look for folders within its resources where the folder name is equal to the portal `id` you used to define each portal.

Given the following examples, ensure your web portal is built into the following folders:

* For iOS: `App_Resources/iOS/webPortal`
* For Android: `App_Resources/Android/src/main/asssets/webPortal`

### 2. Use it in markup

#### Core

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
```

```html
<IonicPortal id="webPortal"></IonicPortal>;
```

#### Vue
```ts
import { IonicPortal } from '@nativescript/ionic-portals';

registerElement("IonicPortal", ()=> IonicPortal)
```
```xml
 <gridLayout height="300" class="mt-3 p-3">
    <IonicPortal id="webPortal"/>
</gridLayout>
```
#### Svelte
```ts
import { IonicPortal } from '@nativescript/ionic-portals';

import {registerNativeViewElement} from "svelte-native/dom"
registerNativeViewElement("ionicPortal", ()=> IonicPortal)
```
```xml
<gridLayout height="300" class="mt-3 p-3">
    <ionicPortal id="webPortal"/>
</gridLayout>
```
#### Sending events from NativeScript to any web portal

To send events from NativeScript to any web portal, use the [publishTopic()](#publishtopic) method:

```ts
IonicPortalManager.publishTopic('hello', { name: 'data from NativeScript' });
```

#### Subscribing to events sent from web portals
To subscribe to events sent from any web portal, call the [subscribeToTopic](#subscribetotopic) method with the event name as the first argument and the event handler as the second argument.

```ts
const subscriptionId = IonicPortalManager.subscribeToTopic('useful-web-event', result => {
  console.log('received web portal useful-web-event with data:', result.data);
});
```

#### Unsubscribing from events sent from web portals
To unsubscribe from events sent from any web portal, call the [unsubscribeFromTopic()](#unsubscribefromtopic) method with the event name as the first argument and the subscription id as the second argument.
```ts
IonicPortalManager.unsubscribeFromTopic('useful-web-event', subscriptionId);
```

## IonicPortalManager API

Allows you to interact with and configure portals via the following APIs.

### register()

```ts
IonicPortalManager.register(apiKey)
```

Registers portals. Call it in the `main.ts` file, before the app boots, in the handler of the `Application.launchEvent` event.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `apiKey` | `string` | Your portal API key


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
IonicPortalManager.setAndroidPlugins(plugins)
```

 Defines the usage of non-official Capacitor Plugins via Android package names

| Parameter | Type | Description
|:----------|:-----|:-----------
| `plugins` | ` Array<string>` | A list of non-official Capacitor package names.


### publishTopic()
```ts
IonicPortalManager.publishTopic(topic, data)
```

Sends a message to any web portal by publishing a topic (aka. event)

| Parameter | Type | Description
|:----------|:-----|:-----------
| `topic` | ` string` | The name of the topic/event
| `data` | ` any` | _Optional_: The payload to send with the topic.

### subscribeToTopic()
```ts
subscriptionId: number = IonicPortalManager.subscribeToTopic(topic, (data?: any) => void))
```
Listens to any message sent from any web portal by subscribing to the specified topic. It returns a subscription id used to later unsubscribe from the `topic`.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `topic` | ` string` | The name of the topic/event to subscribe to.
| `callback` | `function` | The function invoked every time a message is sent via the topic with an optional `data` parameter.

---
### unsubscribeFromTopic()
```ts
IonicPortalManager.unsubscribeFromTopic(topic, subscriptionId)
```
| Parameter | Type | Description
|:----------|:-----|:-----------
| `topic` | ` string` | The name of the topic/event to unsubscribe from.
| `subscriptionId` | `number` | The subscription id returned by [subscribeToTopic()](#subscribetotopic).

## Using Capacitor Plugins with Ionic Portals

Refer to [this blog post](https://blog.nativescript.org/ionic-portals-with-capacitor-plugins).

## Notes

> For iOS:
> You may need to add `IPHONEOS_DEPLOYMENT_TARGET = 12.0` to your `App_Resources/iOS/build.xcconfig` file.
> If your project contains `App_Resources/iOS/Podfile`, you may need to remove any post install handling which removes deployment targets, for example:
> Remove anything like this: `config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'`

## Additional Resources
- You can learn more about Ionic Portals at [Opening Doors with Portals](https://www.youtube.com/watch?v=lGeeUjIMjTQ&t=609s)
	- Find the video's repo [here](https://github.com/NathanWalker/ioniconf2022)

## License

Apache License Version 2.0
