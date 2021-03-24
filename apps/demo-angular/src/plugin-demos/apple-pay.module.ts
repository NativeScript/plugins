import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ApplePayComponent } from './apple-pay.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ApplePayComponent }])],
	declarations: [ApplePayComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ApplePayModule {}
