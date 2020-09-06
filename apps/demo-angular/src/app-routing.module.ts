import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'appavailability', loadChildren: () => import('./plugin-demos/appavailability.module').then(m => m.AppavailabilityModule) },
	{ path: 'camera', loadChildren: () => import('./plugin-demos/camera.module').then(m => m.CameraModule) },
	{ path: 'datetimepicker', loadChildren: () => import('./plugin-demos/datetimepicker.module').then(m => m.DatetimepickerModule) },
	{ path: 'directions', loadChildren: () => import('./plugin-demos/directions.module').then(m => m.DirectionsModule) },
	{ path: 'email', loadChildren: () => import('./plugin-demos/email.module').then(m => m.EmailModule) },
	{ path: 'fingerprint-auth', loadChildren: () => import('./plugin-demos/fingerprint-auth.module').then(m => m.FingerprintAuthModule) },
	{ path: 'geolocation', loadChildren: () => import('./plugin-demos/geolocation.module').then(m => m.GeolocationModule) },
	{ path: 'imagepicker', loadChildren: () => import('./plugin-demos/imagepicker.module').then(m => m.ImagepickerModule) },
	{ path: 'iqkeyboardmanager', loadChildren: () => import('./plugin-demos/iqkeyboardmanager.module').then(m => m.IqkeyboardmanagerModule) },
	{ path: 'local-notifications', loadChildren: () => import('./plugin-demos/local-notifications.module').then(m => m.LocalNotificationsModule) },
	{ path: 'shared-notification-delegate', loadChildren: () => import('./plugin-demos/shared-notification-delegate.module').then(m => m.SharedNotificationDelegateModule) },
	{ path: 'zip', loadChildren: () => import('./plugin-demos/zip.module').then(m => m.ZipModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
