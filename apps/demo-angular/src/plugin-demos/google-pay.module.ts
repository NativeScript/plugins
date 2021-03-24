import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GooglePayComponent } from './google-pay.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GooglePayComponent }])],
	declarations: [GooglePayComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class GooglePayModule {}
