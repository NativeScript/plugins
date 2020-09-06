import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GeolocationComponent } from './geolocation.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GeolocationComponent }])],
	declarations: [GeolocationComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class GeolocationModule {}
