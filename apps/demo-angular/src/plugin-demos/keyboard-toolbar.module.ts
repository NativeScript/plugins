import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { KeyboardToolbarComponent } from './keyboard-toolbar.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: KeyboardToolbarComponent }])],
	declarations: [KeyboardToolbarComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class KeyboardToolbarModule {}
