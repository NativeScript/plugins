import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HapticsComponent } from './haptics.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HapticsComponent }])],
	declarations: [HapticsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class HapticsModule {}
