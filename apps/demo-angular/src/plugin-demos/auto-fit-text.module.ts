import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativeScriptAutoFitTextModule } from '@nativescript/auto-fit-text/angular';
import { AutoFitTextComponent } from './auto-fit-text.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptAutoFitTextModule, NativeScriptRouterModule.forChild([{ path: '', component: AutoFitTextComponent }])],
	declarations: [AutoFitTextComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AutoFitTextModule {}
