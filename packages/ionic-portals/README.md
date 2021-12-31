# @nativescript/ionic-portals

https://ionic.io/docs/portals

> Ionic Portals is a supercharged native WebView component for iOS and Android that lets you add web-based experiences to native mobile apps.

```javascript
npm install @nativescript/ionic-portals
```

## Usage

Usage follows Ionic docs: https://ionic.io/docs/portals/getting-started/guide

1. Register and create portals on app boot:

```
import { Application } from '@nativescript/core';
import { IonicPortalManager } from '@nativescript/ionic-portals';

const portalApiKey = '<portal-api-key>';

const setupIonicPortals = () => {
    // Register IonicPortals
    IonicPortalManager.register(portalApiKey);

    // Create as many Portals as you need to use in your app
    // By default, the app will look for folders equal to the portal id you use here
    // For iOS: App_Resources/iOS/webPortal
    // For Android: App_Resources/Android/src/main/asssets/webPortal 
    IonicPortalManager.create('webPortal');
};

if (global.isIOS) {
	@NativeClass()
	class CustomAppDelegate extends NSObject implements UIApplicationDelegate {
		static ObjCProtocols = [UIApplicationDelegate];

		applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>) {
			
            setupIonicPortals();
            
			return true;
		}
	}
	Application.ios.delegate = CustomAppDelegate;
} else {
    Application.on(Application.launchEvent, () => {
		setupIonicPortals();
	});
}

// boot app here, e.g.
Application.run({ moduleName: 'app-root' });
```

2. Use in your views

### Vanilla/Plain/Core

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ionic="@nativescript/ionic-portals">
  <StackLayout class="p-20">
    <ionic:IonicPortal id="webPortal">
    </ionic:IonicPortal>
  </StackLayout>
</Page>
```

### Angular

```
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

## License

Apache License Version 2.0
