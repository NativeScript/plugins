import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { RoomplanComponent } from './roomplan.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: RoomplanComponent }])],
	declarations: [RoomplanComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class RoomplanModule {}
