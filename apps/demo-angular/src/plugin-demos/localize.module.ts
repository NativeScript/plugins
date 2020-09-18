import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { LocalizeComponent } from './localize.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: LocalizeComponent }])],
	declarations: [LocalizeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class LocalizeModule {}
