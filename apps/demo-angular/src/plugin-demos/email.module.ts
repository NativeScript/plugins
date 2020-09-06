import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EmailComponent } from './email.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: EmailComponent }])],
	declarations: [EmailComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class EmailModule {}
