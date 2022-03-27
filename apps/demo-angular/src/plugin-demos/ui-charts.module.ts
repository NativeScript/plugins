import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UiChartsComponent } from './ui-charts.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UiChartsComponent }])],
	declarations: [UiChartsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class UiChartsModule {}
