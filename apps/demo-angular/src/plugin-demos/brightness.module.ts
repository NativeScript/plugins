import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BrightnessComponent } from './brightness.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BrightnessComponent }])],
	declarations: [BrightnessComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class BrightnessModule {}
