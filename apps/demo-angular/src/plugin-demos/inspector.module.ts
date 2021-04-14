import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { InspectorComponent } from './inspector.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: InspectorComponent }])],
	declarations: [InspectorComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class InspectorModule {}
