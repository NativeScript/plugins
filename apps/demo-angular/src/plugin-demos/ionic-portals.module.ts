import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { IonicPortalsComponent } from './ionic-portals.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: IonicPortalsComponent }])],
  declarations: [IonicPortalsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class IonicPortalsModule {}
