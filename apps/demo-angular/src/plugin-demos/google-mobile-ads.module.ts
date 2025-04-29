import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GoogleMobileAdsComponent } from './google-mobile-ads.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GoogleMobileAdsComponent }])],
	declarations: [GoogleMobileAdsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class GoogleMobileAdsModule {}
