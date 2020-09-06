import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DateTimePickerComponent } from './datetimepicker.component';
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DateTimePickerComponent }]), NativeScriptDateTimePickerModule],
  declarations: [DateTimePickerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class DateTimePickerModule {}
