import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { IqkeyboardmanagerComponent } from './iqkeyboardmanager.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: IqkeyboardmanagerComponent }])],
	declarations: [IqkeyboardmanagerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class IqkeyboardmanagerModule {}
