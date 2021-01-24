import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DetoxComponent } from './detox.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DetoxComponent }])],
	declarations: [DetoxComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class DetoxModule {}
