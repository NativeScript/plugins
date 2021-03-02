import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PickerComponent } from './picker.component';
import { NativeScriptPickerModule } from '@nativescript/picker/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptPickerModule, NativeScriptRouterModule.forChild([{ path: '', component: PickerComponent }])],
	declarations: [PickerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class PickerModule {}
