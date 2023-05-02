import { Application } from '@nativescript/core';
import { FlutterDelegate, init } from '@nativescript/flutter';
init();

// uncomment to test local notifications
// import "@nativescript/local-notifications";

// uncomment to test background http
// import { init } from '@nativescript/background-http';
// init();

// uncomment to test facebook login
// import { LoginManager } from '@nativescript/facebook';
// LoginManager.init();

// uncomment to test Ionic Portals
// import { IonicPortalManager } from '@nativescript/ionic-portals';
// IonicPortalManager.configureLiveUpdates('ionicWebPortalSample', {
//     appId: 'e29e2c2e',
//     channel: 'production',
//     syncOnAdd: true
// })

// Application.on(Application.launchEvent, () => {
// 	// Register IonicPortals
// 	IonicPortalManager.register('<portal-api-key>');
// });

if (global.isIOS) {
	Application.ios.delegate = FlutterDelegate;
}

Application.run({ moduleName: 'app-root' });
