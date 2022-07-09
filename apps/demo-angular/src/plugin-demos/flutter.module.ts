import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FlutterComponent } from './flutter.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FlutterComponent }])],
	declarations: [FlutterComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FlutterModule {}
