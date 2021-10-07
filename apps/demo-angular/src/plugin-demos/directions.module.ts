import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptFormsModule } from '@nativescript/angular';
import { DirectionsComponent } from './directions.component';

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		NativeScriptRouterModule.forChild([
			{
				path: '',
				component: DirectionsComponent,
			},
		]),
	],
	declarations: [DirectionsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class DirectionsModule {}
