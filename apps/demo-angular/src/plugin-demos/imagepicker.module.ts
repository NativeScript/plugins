import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ImagePickerComponent } from './imagepicker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ImagePickerComponent }])],
  declarations: [ImagePickerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class ImagePickerModule {}
