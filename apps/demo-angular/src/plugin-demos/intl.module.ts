import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { IntlComponent } from './intl.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: IntlComponent }])],
	declarations: [IntlComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class IntlModule {}
