import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptFormsModule } from '@nativescript/angular';
import { BiometricsComponent } from './biometrics.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule.forChild([{ path: '', component: BiometricsComponent }])],
	declarations: [BiometricsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class BiometricsModule {}
