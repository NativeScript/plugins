import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MmkvMetalComponent } from './mmkv-metal.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MmkvMetalComponent }])],
	declarations: [MmkvMetalComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class MmkvMetalModule {}
