import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TwitterComponent } from './twitter.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TwitterComponent }])],
  declarations: [TwitterComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TwitterModule {}
