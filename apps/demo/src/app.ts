import { Application } from '@nativescript/core';
// import { LoginManager } from '@nativescript/facebook';
// LoginManager.init();

import { IonicPortalManager } from '@nativescript/ionic-portals';

const portalApiKey = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMTQ2MzUxIn0.GphiIljo40HYGWDUCWinbPGabcuFmZpujhlf2V8BQf9c0w0FFCOlTZffIUQGIaYLOLMR6BSu95SBpMXTtBSwJ-0Vlf56-SxIfNscR-017eKg2nK8jKxM3L65pN_k3GpoScIg867_gDo-f6IF-UGJcq2ZDCIUFdIx667Dixe82GtCs0g8b3NCXhpx7sXqRaJm8w3W1t1k53VBLRDyVyJhVk7qYXAqzQ6X0TQP0EcWzeR9Ivi3x-6p9n3e-APFVjuAGVEhmJdoTkTCTwIB1FG_Qn_kCMu4KGjL8drdszXeNNJ7IYpOs8QxrOUGcERsap4VASdHQjJSIPLSUjaaNYM0FA`;

const setupIonicPortals = () => {
    // Register IonicPortals
    IonicPortalManager.register(portalApiKey);

    // Create as many Portals as you need to use in your app
    const ionicWebPortalSample = IonicPortalManager.create('ionicWebPortalSample');
	console.log('created ionicWebPortalSample:', ionicWebPortalSample);
};

if (global.isIOS) {

	@NativeClass()
	class CustomAppDelegate extends NSObject implements UIApplicationDelegate {
		static ObjCProtocols = [UIApplicationDelegate];

		applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>) {
			console.log('applicationDidFinishLaunchingWithOptions');
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

Application.run({ moduleName: 'app-root' });
