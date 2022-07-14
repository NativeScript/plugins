import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { VideoComponent } from './video.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: VideoComponent }])],
	declarations: [VideoComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class VideoModule {}
