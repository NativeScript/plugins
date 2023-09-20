import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GoogleMapsUtilsComponent } from './google-maps-utils.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GoogleMapsUtilsComponent }])],
  declarations: [GoogleMapsUtilsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class GoogleMapsUtilsModule {}
