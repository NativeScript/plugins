import { Application } from '@nativescript/core';

// uncomment to test background http
// import { init } from '@nativescript/background-http';
// init();

// uncomment to test facebook login
// import { LoginManager } from '@nativescript/facebook';
// LoginManager.init();

// uncomment to test Ionic Portals
// import { IonicPortalManager } from '@nativescript/ionic-portals';

// Application.on(Application.launchEvent, () => {
// 	// Register IonicPortals
// 	IonicPortalManager.register('<portal-api-key>');

// 	// Create as many Portals as you need to use in your app
// 	IonicPortalManager.create('ionicWebPortalSample');
// });

Application.run({ moduleName: 'app-root' });
