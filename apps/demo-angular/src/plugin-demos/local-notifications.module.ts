import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { LocalNotificationsComponent } from './local-notifications.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: LocalNotificationsComponent }])],
	declarations: [LocalNotificationsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class LocalNotificationsModule {}
