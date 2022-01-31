import { Application } from '@nativescript/core';
// uncomment to test facebook login
// import { LoginManager } from '@nativescript/facebook';
// LoginManager.init();

// uncomment to test Ionic Portals
// import { IonicPortalManager } from '@nativescript/ionic-portals';

// const portalApiKey = `<insert your own ionic portal api key here>`;

// const setupIonicPortals = () => {
//     // Register IonicPortals
//     IonicPortalManager.register(portalApiKey);

//     // Create as many Portals as you need to use in your app
//     IonicPortalManager.create('ionicWebStart');
// 	IonicPortalManager.create('ionicWebModal');
// };

// if (global.isIOS) {

// 	@NativeClass()
// 	class CustomAppDelegate extends NSObject implements UIApplicationDelegate {
// 		static ObjCProtocols = [UIApplicationDelegate];

// 		applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>) {
// 			console.log('applicationDidFinishLaunchingWithOptions');
// 			setupIonicPortals();
			
// 			return true;
// 		}
// 	}
// 	Application.ios.delegate = CustomAppDelegate;
// } else {
// 	Application.on(Application.launchEvent, () => {
// 		setupIonicPortals();
// 	});
// }

Application.run({ moduleName: 'app-root' });
