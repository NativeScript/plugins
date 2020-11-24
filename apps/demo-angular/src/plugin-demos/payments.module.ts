import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PaymentsComponent } from './payments.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PaymentsComponent }])],
	declarations: [PaymentsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class PaymentsModule {}
