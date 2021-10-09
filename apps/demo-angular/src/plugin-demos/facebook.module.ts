import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FacebookComponent } from './facebook.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FacebookComponent }])],
  declarations: [FacebookComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FacebookModule {}
