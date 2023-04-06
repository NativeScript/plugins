import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MmkvComponent } from './mmkv.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MmkvComponent }])],
	declarations: [MmkvComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class MmkvModule {}
