import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DebugIosComponent } from './debug-ios.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DebugIosComponent }])],
	declarations: [DebugIosComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class DebugIosModule {}
