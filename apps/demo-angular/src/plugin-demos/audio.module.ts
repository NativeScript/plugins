import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AudioComponent } from './audio.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AudioComponent }])],
	declarations: [AudioComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AudioModule {}
