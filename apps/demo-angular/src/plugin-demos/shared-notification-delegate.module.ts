import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SharedNotificationDelegateComponent } from './shared-notification-delegate.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SharedNotificationDelegateComponent }])],
	declarations: [SharedNotificationDelegateComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SharedNotificationDelegateModule {}
