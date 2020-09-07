import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ImagepickerComponent } from './imagepicker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ImagepickerComponent }])],
	declarations: [ImagepickerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ImagepickerModule {}
