import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SocialShareComponent } from './social-share.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SocialShareComponent }])],
	declarations: [SocialShareComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SocialShareModule {}
