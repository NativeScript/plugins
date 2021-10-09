import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GoogleSigninComponent } from './google-signin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GoogleSigninComponent }])],
  declarations: [GoogleSigninComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class GoogleSigninModule {}
