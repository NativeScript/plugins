import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CameraComponent } from './camera.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CameraComponent }])],
	declarations: [CameraComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CameraModule {}
