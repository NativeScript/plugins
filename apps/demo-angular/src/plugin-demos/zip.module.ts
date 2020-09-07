import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ZipComponent } from './zip.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ZipComponent }])],
	declarations: [ZipComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ZipModule {}
