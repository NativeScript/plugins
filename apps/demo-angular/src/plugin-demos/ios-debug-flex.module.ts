import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { IosDebugFlexComponent } from './ios-debug-flex.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: IosDebugFlexComponent }])],
	declarations: [IosDebugFlexComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class IosDebugFlexModule {}
