# @nativescript/ionic-portals

https://ionic.io/docs/portals

> Ionic Portals are supercharged native WebView components for iOS and Android that let you add web-based experiences to native mobile apps.

```cli
npm install @nativescript/ionic-portals
```

## Usage

1. Register and create portals on app boot - [Get a Portal API Key here](https://ionic.io/docs/portals/getting-started/guide):

```ts
import { Application } from '@nativescript/core';
import { IonicPortalManager } from '@nativescript/ionic-portals';

Application.on(Application.launchEvent, () => {
    // Register IonicPortals
    IonicPortalManager.register('<portal-api-key>');

    // Create as many Portals as you need to use in your app
    // By default, the app will look for folders equal to the portal id you use here
    // For iOS: App_Resources/iOS/webPortal
    // For Android: App_Resources/Android/src/main/asssets/webPortal 
    IonicPortalManager.create('webPortal');
});

// boot app here, for example:
Application.run({ moduleName: 'app-root' });
```

2. Use in your views

### Vanilla/Plain/Core

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ionic="@nativescript/ionic-portals">
  <StackLayout class="p-20">
    <ionic:IonicPortal id="webPortal">
    </ionic:IonicPortal>
  </StackLayout>
</Page>
```

### Angular

```ts
import { registerElement } from '@nativescript/angular';
import { IonicPortal } from '@nativescript/ionic-portals';
registerElement('IonicPortal', () => IonicPortal);

// use in any component:
<IonicPortal id="webPortal"></IonicPortal>
```


### API

* `IonicPortalManager.register(apiKey: string)`: Register Portals when your app boots
    * https://ionic.io/docs/portals/getting-started/guide#configure


* `IonicPortalManager.create(portalId: string, startDir?: string)`: Create a Portal
    * `portalId`: The portal id to register
    * `startDir`: Set the web applications directory. By default it will look for a folder named the same as the portalId as the location of the web assets. Use this optional 2nd arg if you would like the folder name to be different that the portalId.

### Use Capacitor Plugins

Refer [to this blog post](https://blog.nativescript.org/ionic-portals-with-capacitor-plugins).

## Notes

> For iOS: 
> You may need to add `IPHONEOS_DEPLOYMENT_TARGET = 12.0` to your `App_Resources/iOS/build.xcconfig` file.
> If your project contains `App_Resources/iOS/Podfile`, you may need to remove any post install handling which removes deployment targets, for example:
> Remove anything like this: `config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'`

## License

Apache License Version 2.0
