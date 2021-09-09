import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { IosSecurityComponent } from './ios-security.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: IosSecurityComponent }])],
	declarations: [IosSecurityComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class IosSecurityModule {}
