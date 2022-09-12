import { Application } from '@nativescript/core';
import '@nativescript/mmkv-metal/local-storage';

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

// Application.on(Application.launchEvent, () => {
// 	// Register IonicPortals
// 	IonicPortalManager.register('<portal-api-key>');
// });

Application.run({ moduleName: 'app-root' });
