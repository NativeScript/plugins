import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GoogleMapsComponent }])],
  declarations: [GoogleMapsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class GoogleMapsModule {}
