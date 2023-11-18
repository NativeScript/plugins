import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'animated-circle', loadChildren: () => import('./plugin-demos/animated-circle.module').then((m) => m.AnimatedCircleModule) },
	{ path: 'appavailability', loadChildren: () => import('./plugin-demos/appavailability.module').then((m) => m.AppavailabilityModule) },
	{ path: 'apple-sign-in', loadChildren: () => import('./plugin-demos/apple-sign-in.module').then((m) => m.AppleSignInModule) },
	{ path: 'auto-fit-text', loadChildren: () => import('./plugin-demos/auto-fit-text.module').then((m) => m.AutoFitTextModule) },
	{ path: 'background-http', loadChildren: () => import('./plugin-demos/background-http.module').then((m) => m.BackgroundHttpModule) },
	{ path: 'biometrics', loadChildren: () => import('./plugin-demos/biometrics.module').then((m) => m.BiometricsModule) },
	{ path: 'brightness', loadChildren: () => import('./plugin-demos/brightness.module').then((m) => m.BrightnessModule) },
	{ path: 'camera', loadChildren: () => import('./plugin-demos/camera.module').then((m) => m.CameraModule) },
	{ path: 'contacts', loadChildren: () => import('./plugin-demos/contacts.module').then((m) => m.ContactsModule) },
	{ path: 'datetimepicker', loadChildren: () => import('./plugin-demos/datetimepicker.module').then((m) => m.DatetimepickerModule) },
	{ path: 'debug-android', loadChildren: () => import('./plugin-demos/debug-android.module').then((m) => m.DebugAndroidModule) },
	{ path: 'debug-ios', loadChildren: () => import('./plugin-demos/debug-ios.module').then((m) => m.DebugIosModule) },
	{ path: 'detox', loadChildren: () => import('./plugin-demos/detox.module').then((m) => m.DetoxModule) },
	{ path: 'directions', loadChildren: () => import('./plugin-demos/directions.module').then((m) => m.DirectionsModule) },
	{ path: 'email', loadChildren: () => import('./plugin-demos/email.module').then((m) => m.EmailModule) },
	{ path: 'facebook', loadChildren: () => import('./plugin-demos/facebook.module').then((m) => m.FacebookModule) },
	{ path: 'fingerprint-auth', loadChildren: () => import('./plugin-demos/fingerprint-auth.module').then((m) => m.FingerprintAuthModule) },
	{ path: 'geolocation', loadChildren: () => import('./plugin-demos/geolocation.module').then((m) => m.GeolocationModule) },
	{ path: 'google-maps', loadChildren: () => import('./plugin-demos/google-maps.module').then((m) => m.GoogleMapsModule) },
	{ path: 'google-signin', loadChildren: () => import('./plugin-demos/google-signin.module').then((m) => m.GoogleSigninModule) },
	{ path: 'haptics', loadChildren: () => import('./plugin-demos/haptics.module').then((m) => m.HapticsModule) },
	{ path: 'imagepicker', loadChildren: () => import('./plugin-demos/imagepicker.module').then((m) => m.ImagepickerModule) },
	{ path: 'ios-security', loadChildren: () => import('./plugin-demos/ios-security.module').then((m) => m.IosSecurityModule) },
	{ path: 'iqkeyboardmanager', loadChildren: () => import('./plugin-demos/iqkeyboardmanager.module').then((m) => m.IqkeyboardmanagerModule) },
	{ path: 'keyboard-toolbar', loadChildren: () => import('./plugin-demos/keyboard-toolbar.module').then((m) => m.KeyboardToolbarModule) },
	{ path: 'local-notifications', loadChildren: () => import('./plugin-demos/local-notifications.module').then((m) => m.LocalNotificationsModule) },
	{ path: 'localize', loadChildren: () => import('./plugin-demos/localize.module').then((m) => m.LocalizeModule) },
	{ path: 'pdf', loadChildren: () => import('./plugin-demos/pdf.module').then((m) => m.PdfModule) },
	{ path: 'picker', loadChildren: () => import('./plugin-demos/picker.module').then((m) => m.PickerModule) },
	{ path: 'secure-storage', loadChildren: () => import('./plugin-demos/secure-storage.module').then((m) => m.SecureStorageModule) },
	{ path: 'shared-notification-delegate', loadChildren: () => import('./plugin-demos/shared-notification-delegate.module').then((m) => m.SharedNotificationDelegateModule) },
	{ path: 'social-share', loadChildren: () => import('./plugin-demos/social-share.module').then((m) => m.SocialShareModule) },
	{ path: 'theme-switcher', loadChildren: () => import('./plugin-demos/theme-switcher.module').then((m) => m.ThemeSwitcherModule) },
	{ path: 'twitter', loadChildren: () => import('./plugin-demos/twitter.module').then((m) => m.TwitterModule) },
	{ path: 'zip', loadChildren: () => import('./plugin-demos/zip.module').then((m) => m.ZipModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
