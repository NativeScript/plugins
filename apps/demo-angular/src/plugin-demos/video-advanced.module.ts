import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { VideoAdvancedComponent } from './video-advanced.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: VideoAdvancedComponent }])],
	declarations: [VideoAdvancedComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class VideoAdvancedModule {}
