import { Application } from '@nativescript/core';
// uncomment to test facebook login
// import { LoginManager } from '@nativescript/facebook';
// LoginManager.init();

// uncomment to test Ionic Portals
import { IonicPortalManager } from '@nativescript/ionic-portals';

Application.on(Application.launchEvent, () => {
	// Register IonicPortals
	IonicPortalManager.register('<portal-api-key>');

	// Create as many Portals as you need to use in your app
	IonicPortalManager.create('ionicWebStart');
	IonicPortalManager.create('ionicWebModal');

	IonicPortalManager.registerPlugins([
		'CapacitorStorage',
		'CapacitorCamera',
		'CapacitorFilesystem'
	]);
});

Application.run({ moduleName: 'app-root' });
